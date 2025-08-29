import { Button } from "@/components/ui/button";
import { Copy, Download, Save, CheckCircle, Loader2, Presentation } from "lucide-react";

interface ToolModalActionsProps {
  generatedContent: string;
  tool: any;
  formData: Record<string, string>;
  isSaving: boolean;
  isSaved: boolean;
  isExportingSlides: boolean;
  onCopy: () => void;
  onDownload: () => void;
  onSave: () => void;
  onExportSlides: () => void;
}

const ToolModalActions = ({ 
  generatedContent, 
  tool, 
  formData, 
  isSaving, 
  isSaved, 
  isExportingSlides,
  onCopy, 
  onDownload, 
  onSave, 
  onExportSlides 
}: ToolModalActionsProps) => {
  // Check if this tool supports slide export
  const supportsSlideExport = tool.name.toLowerCase().includes('presentation') || 
                             tool.name.toLowerCase().includes('academic content');

  if (!generatedContent) return null;

  return (
    <div className="flex space-x-2">
      <Button
        variant="outline"
        size="sm"
        onClick={onCopy}
      >
        <Copy className="h-4 w-4" />
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        onClick={onDownload}
      >
        <Download className="h-4 w-4" />
      </Button>
      
      {supportsSlideExport && (
        <Button
          variant="outline"
          size="sm"
          onClick={onExportSlides}
          disabled={isExportingSlides}
        >
          {isExportingSlides ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Exporting...
            </>
          ) : (
            <>
              <Presentation className="h-4 w-4 mr-1" />
              Slides
            </>
          )}
        </Button>
      )}
      
      <Button
        size="sm"
        onClick={onSave}
        disabled={isSaving || isSaved}
        className={isSaved ? "bg-green-600 hover:bg-green-700" : ""}
      >
        {isSaving ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Saving...
          </>
        ) : isSaved ? (
          <>
            <CheckCircle className="mr-2 h-4 w-4" />
            Saved
          </>
        ) : (
          <>
            <Save className="mr-2 h-4 w-4" />
            Save
          </>
        )}
      </Button>
    </div>
  );
};

export default ToolModalActions;