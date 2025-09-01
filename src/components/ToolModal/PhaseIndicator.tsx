import { Button } from "@/components/ui/button";
import { ChevronLeft, Edit3, FileText } from "lucide-react";

interface PhaseIndicatorProps {
  currentPhase: 'input' | 'content';
  onPhaseChange: (phase: 'input' | 'content') => void;
  hasGeneratedContent: boolean;
}

const PhaseIndicator = ({ currentPhase, onPhaseChange, hasGeneratedContent }: PhaseIndicatorProps) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center space-x-4">
        <div className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
          currentPhase === 'input' 
            ? 'bg-primary text-primary-foreground' 
            : 'bg-muted text-muted-foreground'
        }`}>
          <Edit3 className="h-4 w-4" />
          <span className="text-sm font-medium">Input Details</span>
        </div>
        
        <div className={`h-0.5 w-8 transition-colors ${
          hasGeneratedContent ? 'bg-primary' : 'bg-muted'
        }`} />
        
        <div className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
          currentPhase === 'content' && hasGeneratedContent
            ? 'bg-primary text-primary-foreground' 
            : 'bg-muted text-muted-foreground'
        }`}>
          <FileText className="h-4 w-4" />
          <span className="text-sm font-medium">Generated Content</span>
        </div>
      </div>
      
      {currentPhase === 'content' && hasGeneratedContent && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onPhaseChange('input')}
          className="flex items-center space-x-2"
        >
          <ChevronLeft className="h-4 w-4" />
          <span>Edit Input</span>
        </Button>
      )}
    </div>
  );
};

export default PhaseIndicator;