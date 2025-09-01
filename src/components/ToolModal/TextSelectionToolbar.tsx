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

  return (
    <div
      ref={toolbarRef}
      className={cn(
        "fixed z-50 bg-popover border rounded-lg shadow-lg p-2 flex items-center space-x-2",
        "animate-in fade-in-0 zoom-in-95 duration-200"
      )}
      style={{
        left: position.x,
        top: position.y - 60,
        transform: 'translateX(-50%)'
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