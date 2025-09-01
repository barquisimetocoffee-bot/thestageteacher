import ToolModalActions from './ToolModalActions';
import ToolModalChat from './ToolModalChat';
import TextSelectionToolbar from './TextSelectionToolbar';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Sparkles } from "lucide-react";
import { useState, useRef } from 'react';

interface ToolModalContentProps {
  tool: any;
  formData: Record<string, string>;
  generatedContent: string;
  isSaving: boolean;
  isSaved: boolean;
  isExportingSlides: boolean;
  isRegenerating: boolean;
  onCopy: () => void;
  onDownload: () => void;
  onSave: () => void;
  onExportSlides: () => void;
  onChatRegenerate: (message: string) => Promise<void>;
  onPrefillChat?: (text: string) => void;
  chatPrefillText?: string;
}

const ToolModalContent = ({ 
  tool,
  formData,
  generatedContent, 
  isSaving, 
  isSaved, 
  isExportingSlides,
  isRegenerating,
  onCopy, 
  onDownload, 
  onSave, 
  onExportSlides,
  onChatRegenerate,
  onPrefillChat,
  chatPrefillText
}: ToolModalContentProps) => {
  const [selectedText, setSelectedText] = useState('');
  const [selectionPosition, setSelectionPosition] = useState({ x: 0, y: 0 });
  const [showToolbar, setShowToolbar] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleTextSelection = () => {
    const selection = window.getSelection();
    if (selection && selection.toString().trim() && contentRef.current) {
      const selectedText = selection.toString().trim();
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      
      setSelectedText(selectedText);
      setSelectionPosition({
        x: rect.left + rect.width / 2,
        y: rect.top + window.scrollY
      });
      setShowToolbar(true);
    } else {
      setShowToolbar(false);
      setSelectedText('');
    }
  };

  const handleEdit = () => {
    // For direct editing, we could implement inline editing here
    // For now, just close the toolbar
    setShowToolbar(false);
    setSelectedText('');
  };

  const handleModifyWithAI = () => {
    if (selectedText && onPrefillChat) {
      const prefillText = `Please modify this text: [${selectedText}]\n\nI would like you to `;
      onPrefillChat(prefillText);
    }
    setShowToolbar(false);
    setSelectedText('');
  };

  const handleCloseToolbar = () => {
    setShowToolbar(false);
    setSelectedText('');
    window.getSelection()?.removeAllRanges();
  };
  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2 text-xl">
              <FileText className="h-5 w-5 text-primary" />
              <span>Your Generated Content</span>
            </CardTitle>
            <div data-onboarding="content-actions">
              <ToolModalActions
                generatedContent={generatedContent}
                tool={tool}
                formData={formData}
                isSaving={isSaving}
                isSaved={isSaved}
                isExportingSlides={isExportingSlides}
                onCopy={onCopy}
                onDownload={onDownload}
                onSave={onSave}
                onExportSlides={onExportSlides}
              />
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          <div 
            ref={contentRef}
            className="min-h-[400px] border rounded-lg p-6 bg-gradient-to-br from-background to-muted/20 max-h-[70vh] overflow-y-auto select-text"
            onMouseUp={handleTextSelection}
          >
            {generatedContent ? (
              <div className="prose prose-sm max-w-none">
                {generatedContent.split('\n').map((line, index) => {
                  // Handle main headings
                  if (line.startsWith('# ')) {
                    return (
                      <h1 key={index} className="text-2xl font-bold text-foreground mb-4 mt-6 first:mt-0 border-b pb-2">
                        {line.substring(2)}
                      </h1>
                    );
                  }
                  // Handle subheadings
                  if (line.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-xl font-semibold text-foreground mb-3 mt-5 first:mt-0">
                        {line.substring(3)}
                      </h2>
                    );
                  }
                  // Handle sub-subheadings
                  if (line.startsWith('### ')) {
                    return (
                      <h3 key={index} className="text-lg font-medium text-foreground mb-2 mt-4 first:mt-0">
                        {line.substring(4)}
                      </h3>
                    );
                  }
                  // Handle bold text
                  if (line.includes('**')) {
                    const parts = line.split('**');
                    return (
                      <p key={index} className="mb-3 leading-relaxed text-base">
                        {parts.map((part, partIndex) => 
                          partIndex % 2 === 1 ? (
                            <strong key={partIndex} className="font-semibold text-foreground">{part}</strong>
                          ) : (
                            <span key={partIndex} className="text-muted-foreground">{part}</span>
                          )
                        )}
                      </p>
                    );
                  }
                  // Handle bullet points
                  if (line.startsWith('- ') || line.startsWith('• ')) {
                    return (
                      <li key={index} className="mb-2 ml-4 text-muted-foreground text-base leading-relaxed">
                        {line.substring(2)}
                      </li>
                    );
                  }
                  // Handle empty lines
                  if (line.trim() === '') {
                    return <div key={index} className="mb-3"></div>;
                  }
                  // Handle regular paragraphs
                  return (
                    <p key={index} className="mb-3 leading-relaxed text-muted-foreground text-base">
                      {line}
                    </p>
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                <Sparkles className="h-12 w-12 mb-4 text-primary/50" />
                <p className="text-lg font-medium">Generated content will appear here</p>
                <p className="text-sm mt-2">Fill out the form and click generate to get started</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <ToolModalChat
        generatedContent={generatedContent}
        onChatRegenerate={onChatRegenerate}
        isRegenerating={isRegenerating}
        prefillText={chatPrefillText}
      />

      {showToolbar && (
        <TextSelectionToolbar
          selectedText={selectedText}
          position={selectionPosition}
          onEdit={handleEdit}
          onModifyWithAI={handleModifyWithAI}
          onClose={handleCloseToolbar}
        />
      )}
    </div>
  );
};

export default ToolModalContent;