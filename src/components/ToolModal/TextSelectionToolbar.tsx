import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Edit3, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TextSelectionToolbarProps {
  selectedText: string;
  position: { x: number; y: number };
  onEdit: () => void;
  onModifyWithAI: () => void;
  onClose: () => void;
}

const TextSelectionToolbar = ({
  selectedText,
  position,
  onEdit,
  onModifyWithAI,
  onClose
}: TextSelectionToolbarProps) => {
  const toolbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (toolbarRef.current && !toolbarRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  if (!selectedText) return null;

  // Calculate optimal position to avoid going off-screen
  const getToolbarPosition = () => {
    const toolbarWidth = 200; // Approximate toolbar width
    const screenWidth = window.innerWidth;
    const margin = 20;
    
    let left = position.x;
    let transform = 'translateX(-50%)'; // Default: center on selection
    
    // If centering would go off the left edge
    if (position.x - toolbarWidth/2 < margin) {
      left = margin;
      transform = 'translateX(0)';
    }
    // If centering would go off the right edge  
    else if (position.x + toolbarWidth/2 > screenWidth - margin) {
      left = screenWidth - margin;
      transform = 'translateX(-100%)';
    }
    
    return { left, transform, top: position.y - 60 };
  };

  const toolbarPosition = getToolbarPosition();

  return (
    <div
      ref={toolbarRef}
      className={cn(
        "fixed z-50 bg-popover border rounded-lg shadow-lg p-2 flex items-center space-x-2",
        "animate-in fade-in-0 zoom-in-95 duration-200"
      )}
      style={{
        left: toolbarPosition.left,
        top: toolbarPosition.top,
        transform: toolbarPosition.transform
      }}
    >
      <Button
        variant="ghost"
        size="sm"
        onClick={onEdit}
        className="h-8 px-3 text-xs"
      >
        <Edit3 className="h-3 w-3 mr-1" />
        Edit
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={onModifyWithAI}
        className="h-8 px-3 text-xs bg-primary/10 hover:bg-primary/20"
      >
        <Sparkles className="h-3 w-3 mr-1" />
        Modify with AI
      </Button>
    </div>
  );
};

export default TextSelectionToolbar;