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
import { Loader2 } from "lucide-react";
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
        <div className="space-y-2">
          <Label htmlFor="prompt">What would you like to create?</Label>
          <Textarea
            id="prompt"
            placeholder={`Describe what you'd like to generate with ${tool.name}`}
            value={formData.prompt || ""}
            onChange={(e) => onInputChange("prompt", e.target.value)}
          />
        </div>
      );
    }

    return tool.fields.map((field: any, index: number) => (
      <div key={index} className="space-y-2">
        <Label htmlFor={field.name}>
          {field.labelKey ? t(field.labelKey) : field.label}
        </Label>

        {field.type === "select" ? (
          <Select onValueChange={(value) => onInputChange(field.name, value)}>
            <SelectTrigger>
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
                    console.log('Translation key:', field.optionsKey, 'Result:', translatedOptions);
                    
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
                
                console.log('Final options for', field.name, ':', options);
                
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
            className="focus:outline-none"
          />
        ) : (
          <Input
            id={field.name}
            type={field.type || "text"}
            placeholder={field.placeholderKey ? t(field.placeholderKey) : field.placeholder}
            value={formData[field.name] || ""}
            onChange={(e) => onInputChange(field.name, e.target.value)}
            className="py-6 focus:outline-none"
          />
        )}
      </div>
    ));
  };

  const isFormValid = Object.values(formData).some((v) => v?.trim());

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Input Details</h3>
      {renderInputFields()}

      <button
        onClick={onGenerate}
        disabled={isGenerating || !isFormValid}
        className="w-full my-btn p-3 cursor-pointer rounded-2xl"
      >
        {isGenerating ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {t('ui.buttons.generating')}
          </>
        ) : (

          "Generate Content"
        )}
      </button>
    </div>
  );
};

export default ToolModalForm;
