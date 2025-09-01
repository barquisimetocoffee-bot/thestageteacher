import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, RotateCcw } from "lucide-react";

interface ChatComposerProps {
  onSendMessage: (message: string) => void;
  onClearChat: () => void;
  isLoading: boolean;
  placeholder?: string;
}

export const ChatComposer = ({ 
  onSendMessage, 
  onClearChat,
  isLoading, 
  placeholder = "Ask Kribi anything about teaching..." 
}: ChatComposerProps) => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim() || isLoading) return;
    onSendMessage(input.trim());
    setInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="sticky bottom-0 bg-background/95 backdrop-blur-sm border-t border-border p-4">
      <div className="flex space-x-2 items-end">
        <div className="flex-1">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={placeholder}
            className="min-h-[50px] max-h-[120px] resize-none bg-muted/50 border-muted-foreground/20 focus:border-primary focus:ring-1 focus:ring-primary"
            rows={1}
            disabled={isLoading}
          />
        </div>
        <div className="flex space-x-1">
          <Button
            variant="outline"
            size="sm"
            onClick={onClearChat}
            disabled={isLoading}
            className="h-[50px] px-3"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!input.trim() || isLoading}
            className="h-[50px] px-4 group"
          >
            <Send className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Button>
        </div>
      </div>
    </div>
  );
};