import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import * as aiService from "@/utils/aiServiceWithUsage";
import { saveGeneratedContent } from "@/utils/contentService";
import { exportToPowerPoint } from "@/utils/slideExporter";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";
import { UsageLimitModal } from "@/components/UsageLimitModal";
import SatisfactionSurvey from "@/components/SatisfactionSurvey";
import ToolModalForm from './ToolModalForm';
import ToolModalContent from './ToolModalContent';

interface ToolModalProps {
  tool: any;
  isOpen: boolean;
  onClose: () => void;
  teacherProfile: any;
}

const ToolModal = ({ tool, isOpen, onClose, teacherProfile }: ToolModalProps) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [generatedContent, setGeneratedContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showSurvey, setShowSurvey] = useState(false);
  const [showUsageLimit, setShowUsageLimit] = useState(false);
  const [isRegenerating, setIsRegenerating] = useState(false);
  const [isExportingSlides, setIsExportingSlides] = useState(false);
  const { toast } = useToast();
  const { i18n } = useTranslation();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      let content = '';
      
      switch (tool.id) {
        case 1: // lesson-plan
          content = await aiService.generateLessonPlan(
            formData.subject || '',
            formData.topic || '',
            formData.grade || '',
            i18n.language
          );
          break;
        case 17: // ai-text-detector
          content = await aiService.generateAITextAnalysis(
            formData.studentText || '',
            formData.assignmentType || '',
            formData.studentGrade || '',
            formData.analysisDepth || '',
            formData.additionalContext || '',
            i18n.language
          );
          break;
        case 18: // parent-email
          content = await aiService.generateParentEmail(
            formData.studentName || '',
            formData.situation || '',
            formData.emailType || '',
            i18n.language
          );
          break;
        case 21: // behavior-plan
          content = await aiService.generateBehaviorPlan(
            formData.behaviorConcern || '',
            formData.studentAge || '',
            formData.strengths || '',
            i18n.language
          );
          break;
        default:
          const prompt = Object.entries(formData)
            .map(([key, value]) => `${key}: ${value}`)
            .join(', ');
          content = await aiService.generateEducationalContent(prompt, tool.name, i18n.language);
          break;
      }
      
      setGeneratedContent(content);
      setIsSaved(false);
    } catch (error) {
      // Check if it's a usage limit error
      if (error instanceof Error && error.message === "USAGE_LIMIT_EXCEEDED") {
        setShowUsageLimit(true);
        setIsGenerating(false);
        return;
      }
      
      toast({
        title: "Generation Error",
        description: "Failed to generate content. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleChatRegenerate = async (chatMessage: string) => {
    setIsRegenerating(true);
    try {
      const enhancedPrompt = `Previous content: ${generatedContent}\n\nUser's modification request: ${chatMessage}\n\nPlease modify the content based on the user's request.`;
      const modifiedContent = await aiService.generateEducationalContent(enhancedPrompt, tool.name, i18n.language);
      setGeneratedContent(modifiedContent);
      toast({
        title: "Content Updated",
        description: "Your content has been modified based on your request.",
      });
    } catch (error) {
      toast({
        title: "Modification Error",
        description: "Failed to modify content. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsRegenerating(false);
    }
  };

  const handleSave = async () => {
    if (!generatedContent.trim()) {
      toast({
        title: "No Content",
        description: "Please generate content first before saving.",
        variant: "destructive",
      });
      return;
    }

    setIsSaving(true);
    try {
      await saveGeneratedContent(
        tool.name,
        tool.category,
        generatedContent,
        formData.topic || formData.subject || tool.name,
        formData.subject,
        formData.topic
      );

      setIsSaved(true);
      toast({
        title: "Content Saved",
        description: "Your generated content has been saved successfully!",
      });
    } catch (error) {
      toast({
        title: "Save Error",
        description: "Failed to save content. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleExportSlides = async () => {
    if (!generatedContent.trim()) {
      toast({
        title: "No Content",
        description: "Please generate content first before exporting slides.",
        variant: "destructive",
      });
      return;
    }

    setIsExportingSlides(true);
    try {
      const title = formData.topic || formData.subject || tool.name || 'Presentation';
      await exportToPowerPoint(generatedContent, title);
      
      toast({
        title: "Slides Exported!",
        description: "PowerPoint presentation has been downloaded to your device.",
      });
    } catch (error) {
      console.error('Slide export error:', error);
      toast({
        title: "Export Error",
        description: error.message || "Failed to export slides. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsExportingSlides(false);
    }
  };

  const handleDownload = () => {
    if (!generatedContent) return;
    
    const blob = new Blob([generatedContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${tool.name.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopy = async () => {
    if (!generatedContent) return;
    
    try {
      await navigator.clipboard.writeText(generatedContent);
      toast({
        title: "Copied!",
        description: "Content copied to clipboard",
      });
    } catch (error) {
      toast({
        title: "Copy Failed",
        description: "Failed to copy content to clipboard",
        variant: "destructive",
      });
    }
  };

  const handleModalClose = () => {
    if (generatedContent && !showSurvey) {
      setShowSurvey(true);
    } else {
      onClose();
      resetState();
    }
  };

  const resetState = () => {
    setFormData({});
    setGeneratedContent('');
    setShowSurvey(false);
    setIsSaved(false);
  };

  const handleSurveySubmit = (feedback: any) => {
    console.log('Survey feedback:', feedback);
    setShowSurvey(false);
    onClose();
    resetState();
  };

  // Get the icon component
  const IconComponent = tool.icon;

  return (
    <>
      <Dialog open={isOpen} onOpenChange={handleModalClose}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              {IconComponent && <IconComponent className="h-6 w-6" />}
              <span>{tool.name}</span>
            </DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ToolModalForm
              tool={tool}
              formData={formData}
              onInputChange={handleInputChange}
              onGenerate={handleGenerate}
              isGenerating={isGenerating}
            />

            <ToolModalContent
              tool={tool}
              formData={formData}
              generatedContent={generatedContent}
              isSaving={isSaving}
              isSaved={isSaved}
              isExportingSlides={isExportingSlides}
              isRegenerating={isRegenerating}
              onCopy={handleCopy}
              onDownload={handleDownload}
              onSave={handleSave}
              onExportSlides={handleExportSlides}
              onChatRegenerate={handleChatRegenerate}
            />
          </div>
        </DialogContent>
      </Dialog>

      <SatisfactionSurvey
        isOpen={showSurvey}
        onClose={() => {
          setShowSurvey(false);
          onClose();
          resetState();
        }}
        toolName={tool.name}
        onSubmit={handleSurveySubmit}
      />
      
      <UsageLimitModal
        isOpen={showUsageLimit}
        onClose={() => setShowUsageLimit(false)}
        onUpgrade={() => setShowUsageLimit(false)}
      />
    </>
  );
};

export default ToolModal;