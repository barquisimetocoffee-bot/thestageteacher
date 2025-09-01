import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot } from "lucide-react";
import { useKribiAssistant } from "@/hooks/useKribiAssistant";
import { MessageBubble } from "@/components/chat/MessageBubble";
import { ChatComposer } from "@/components/chat/ChatComposer";
import { useTranslation } from "react-i18next";

interface AIAssistantProps {
  tools?: any[];
  onToolRecommend?: (tool: any) => void;
}

const AIAssistant = ({ tools = [], onToolRecommend }: AIAssistantProps) => {
  const { t } = useTranslation();
  const { messages, isLoading, sendMessage, clearConversation } = useKribiAssistant({
    onToolRecommend
  });


  return (
    <Card className="h-[500px] flex flex-col bg-card/90 backdrop-blur-sm border-border">
      <CardHeader className="pb-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-t-lg">
        <CardTitle className="flex items-center space-x-2 text-lg">
          <Bot className="h-5 w-5" />
          <span>Kribi Teaching Assistant</span>
          <div className="ml-auto text-xs bg-primary-foreground/20 px-2 py-1 rounded-full">
            by Vicerta
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
        {/* Messages Container - Scrollable */}
        <div className="flex-1 overflow-y-auto space-y-4 p-4 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
          {messages.map((message) => (
            <MessageBubble
              key={message.id}
              role={message.role}
              content={message.content}
              timestamp={message.timestamp}
              isTyping={message.isTyping}
            />
          ))}
        </div>

        {/* Input Composer */}
        <ChatComposer
          onSendMessage={sendMessage}
          onClearChat={clearConversation}
          isLoading={isLoading}
          placeholder="Ask Kribi about lesson planning, classroom management, or any teaching topic..."
        />
      </CardContent>
    </Card>
  );
};

export default AIAssistant;
