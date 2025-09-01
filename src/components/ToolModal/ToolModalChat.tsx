import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Loader2 } from "lucide-react";

interface ToolModalChatProps {
  generatedContent: string;
  onChatRegenerate: (message: string) => Promise<void>;
  isRegenerating: boolean;
  prefillText?: string;
}

const ToolModalChat = ({ generatedContent, onChatRegenerate, isRegenerating, prefillText }: ToolModalChatProps) => {
  const [chatMessage, setChatMessage] = useState('');

  useEffect(() => {
    if (prefillText) {
      setChatMessage(prefillText);
    }
  }, [prefillText]);

  const handleChatSubmit = async () => {
    if (!chatMessage.trim()) return;
    
    await onChatRegenerate(chatMessage);
    setChatMessage('');
  };

  if (!generatedContent) return null;

  return (
    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-dashed border-primary/20 rounded-xl p-6 space-y-4">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-primary/10 rounded-full">
          <MessageSquare className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">Need modifications?</h3>
          <p className="text-sm text-muted-foreground">Tell me how you'd like to improve this content</p>
        </div>
      </div>
      <div className="flex space-x-3">
        <Textarea
          placeholder="e.g., 'Make it more formal', 'Add examples', 'Simplify the language'..."
          value={chatMessage}
          onChange={(e) => setChatMessage(e.target.value)}
          className="flex-1 min-h-[80px] text-base"
        />
        <Button
          onClick={handleChatSubmit}
          disabled={!chatMessage.trim() || isRegenerating}
          size="lg"
          className="self-end px-6"
        >
          {isRegenerating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Updating...
            </>
          ) : (
            'Update Content'
          )}
        </Button>
      </div>
    </div>
  );
};

export default ToolModalChat;