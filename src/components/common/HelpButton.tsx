import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { HelpCircle, BookOpen, Play } from 'lucide-react';

interface HelpButtonProps {
  onStartWalkthrough: () => void;
}

const HelpButton: React.FC<HelpButtonProps> = ({ onStartWalkthrough }) => {
  const navigate = useNavigate();

  const handleDocumentationClick = () => {
    navigate('/documentation');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-0 hover:bg-primary/10 text-primary"
        >
          <HelpCircle className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem onClick={handleDocumentationClick} className="cursor-pointer">
          <BookOpen className="h-4 w-4 mr-2" />
          Documentation
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onStartWalkthrough} className="cursor-pointer">
          <Play className="h-4 w-4 mr-2" />
          Start Walkthrough
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HelpButton;