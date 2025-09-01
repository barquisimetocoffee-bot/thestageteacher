import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageBasedGradeSelector from "@/components/LanguageBasedGradeSelector";

interface ToolModalFormProps {
  tool: any;
  formData: Record<string, string>;
  onInputChange: (field: string, value: string) => void;
  onGenerate: () => void;
  isGenerating: boolean;
}


const ToolModalForm = ({
  tool,
  formData,
  onInputChange,
  onGenerate,
  isGenerating,
}: ToolModalFormProps) => {
  const { t } = useTranslation();
  
  const renderInputFields = () => {
    if (!tool.fields || !Array.isArray(tool.fields)) {
      return (
        <div className="space-y-3">
          <Label htmlFor="prompt" className="text-base font-semibold text-foreground">
            What would you like to create?
          </Label>
          <Textarea
            id="prompt"
            placeholder={`Describe what you'd like to generate with ${tool.name}...`}
            value={formData.prompt || ""}
            onChange={(e) => onInputChange("prompt", e.target.value)}
            className="min-h-[120px] text-base focus:outline-none resize-none"
          />
        </div>
      );
    }

    return tool.fields.map((field: any, index: number) => (
      <div key={index} className="space-y-3">
        <Label htmlFor={field.name} className="text-base font-semibold text-foreground">
          {field.labelKey ? t(field.labelKey) : field.label}
        </Label>

        {field.type === "select" ? (
          <Select onValueChange={(value) => onInputChange(field.name, value)}>
            <SelectTrigger className="h-12 text-base">
              <SelectValue
                placeholder={
                  field.placeholderKey ? t(field.placeholderKey) : (
                    field.placeholder || `Select ${(field.labelKey ? t(field.labelKey) : field.label).toLowerCase()}`
                  )
                }
              />
            </SelectTrigger>
            <SelectContent className="bg-white z-50">
              {(() => {
                // Get options from translation key or direct options
                let options = [];
                
                if (field.optionsKey) {
                  try {
                    const translatedOptions = t(field.optionsKey, { returnObjects: true });
                    
                    if (Array.isArray(translatedOptions)) {
                      options = translatedOptions;
                    } else if (typeof translatedOptions === 'object' && translatedOptions !== null) {
                      // Handle object format like { "1hour": "1 hour", "2hours": "2 hours" }
                      options = Object.values(translatedOptions);
                    } else if (typeof translatedOptions === 'string') {
                      // If translation returns the key itself, try fallback
                      options = [];
                    }
                  } catch (error) {
                    console.error('Translation error:', error);
                    options = [];
                  }
                }
                
                // Fallback to direct options if translation fails
                if (options.length === 0 && field.options) {
                  options = field.options;
                }
                
                // Additional fallbacks for common field names
                if (options.length === 0) {
                  if (field.name === 'duration' || field.optionsKey?.includes('duration')) {
                    options = ["30 minutes", "1 hour", "1.5 hours", "2 hours", "2.5 hours", "3 hours"];
                  } else if (field.name === 'learningStyle' || field.optionsKey?.includes('learningStyle')) {
                    options = ["Visual", "Auditory", "Kinesthetic", "Mixed"];
                  } else if (field.name === 'questionCount' || field.optionsKey?.includes('questionCount')) {
                    options = ["5", "10", "15", "20", "25"];
                  } else if (field.name === 'difficulty' || field.optionsKey?.includes('difficult')) {
                    options = ["Easy", "Medium", "Hard"];
                  }
                }
                
                return options.map((option: string, index: number) => (
                  <SelectItem key={`${option}-${index}`} value={option}>
                    {option}
                  </SelectItem>
                ));
              })()}
            </SelectContent>
          </Select>
        ) : field.type === "textarea" ? (
          <Textarea
            id={field.name}
            placeholder={field.placeholderKey ? t(field.placeholderKey) : field.placeholder}
            value={formData[field.name] || ""}
            onChange={(e) => onInputChange(field.name, e.target.value)}
            className="min-h-[100px] text-base focus:outline-none resize-none"
          />
        ) : (
          <Input
            id={field.name}
            type={field.type || "text"}
            placeholder={field.placeholderKey ? t(field.placeholderKey) : field.placeholder}
            value={formData[field.name] || ""}
            onChange={(e) => onInputChange(field.name, e.target.value)}
            className="h-12 text-base focus:outline-none"
          />
        )}
      </div>
    ));
  };

  const isFormValid = Object.values(formData).some((v) => v?.trim());

  return (
    <Card className="w-full shadow-lg">
      <CardHeader className="text-center pb-6">
        <CardTitle className="flex items-center justify-center space-x-2 text-2xl text-primary">
          <Sparkles className="h-6 w-6" />
          <span>Let's Create Something Amazing</span>
        </CardTitle>
        <CardDescription className="text-lg mt-2">
          Fill in the details below to generate your personalized content
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-6" data-onboarding="tool-form">
          {renderInputFields()}
        </div>
        
        <div className="pt-6 border-t">
          <Button
            onClick={onGenerate}
            disabled={isGenerating || !isFormValid}
            className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg"
            size="lg"
            data-onboarding="generate-button"
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-3 h-5 w-5 animate-spin" />
                {t('ui.buttons.generating') || 'Generating your content...'}
              </>
            ) : (
              <>
                <Sparkles className="mr-3 h-5 w-5" />
                Generate Content
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ToolModalForm;
