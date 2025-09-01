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
    <div className="space-y-3 border-t pt-4">
      <div className="flex items-center space-x-2">
        <MessageSquare className="h-4 w-4 text-blue-600" />
        <h4 className="font-medium text-sm">Need modifications?</h4>
      </div>
      <div className="flex space-x-2">
        <Textarea
          placeholder="Tell me how you'd like to modify this content..."
          value={chatMessage}
          onChange={(e) => setChatMessage(e.target.value)}
          className="flex-1 min-h-[60px]"
        />
        <Button
          onClick={handleChatSubmit}
          disabled={!chatMessage.trim() || isRegenerating}
          size="sm"
          className="self-end"
        >
          {isRegenerating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Updating...
            </>
          ) : (
            'Update'
          )}
        </Button>
      </div>
    </div>
  );
};

export default ToolModalChat;