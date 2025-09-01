import { Bot, User, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface MessageBubbleProps {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  isTyping?: boolean;
}

export const MessageBubble = ({ role, content, timestamp, isTyping }: MessageBubbleProps) => {
  const isUser = role === 'user';
  
  if (isTyping) {
    return (
      <div className="flex justify-start animate-in slide-in-from-left-2 duration-300">
        <div className="flex items-start space-x-3 max-w-[85%]">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Bot className="h-4 w-4 text-primary" />
          </div>
          <div className="bg-muted/50 backdrop-blur-sm p-3 rounded-2xl rounded-tl-md flex items-center space-x-2">
            <Loader2 className="h-4 w-4 animate-spin text-primary" />
            <span className="text-sm text-muted-foreground">Kribi is thinking...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(
      "flex animate-in slide-in-from-bottom-2 duration-300",
      isUser ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
        "flex items-start space-x-3 max-w-[85%]",
        isUser ? "flex-row-reverse space-x-reverse" : ""
      )}>
        <div className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
          isUser 
            ? "bg-primary text-primary-foreground" 
            : "bg-primary/10"
        )}>
          {isUser ? (
            <User className="h-4 w-4" />
          ) : (
            <Bot className="h-4 w-4 text-primary" />
          )}
        </div>
        <div className={cn(
          "p-3 rounded-2xl text-sm leading-relaxed",
          isUser
            ? "bg-primary text-primary-foreground rounded-tr-md"
            : "bg-muted/80 backdrop-blur-sm text-foreground rounded-tl-md"
        )}>
          <div className="whitespace-pre-wrap">{content}</div>
          <div className={cn(
            "text-xs mt-2 opacity-70",
            isUser ? "text-primary-foreground/70" : "text-muted-foreground"
          )}>
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>
    </div>
  );
};