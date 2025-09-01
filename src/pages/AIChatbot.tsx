import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Bot, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useKribiAssistant } from "@/hooks/useKribiAssistant";
import { MessageBubble } from "@/components/chat/MessageBubble";
import { ChatComposer } from "@/components/chat/ChatComposer";

const AIChatbot = () => {
  const { messages, isLoading, sendMessage, clearConversation } = useKribiAssistant();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link to="/pencil-app">
              <Button
                variant="outline"
                size="sm"
                className="bg-card hover:bg-accent"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Pencil
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-foreground flex items-center space-x-2">
                <Sparkles className="h-8 w-8 text-primary" />
                <span>Kribi Teaching Assistant</span>
              </h1>
              <p className="text-muted-foreground">
                Your AI companion for educational excellence
              </p>
            </div>
          </div>
        </div>

        {/* Chat Interface */}
        <Card className="h-[600px] flex flex-col shadow-lg border-border/50">
          <CardHeader className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-t-lg">
            <CardTitle className="flex items-center space-x-2">
              <Bot className="h-5 w-5" />
              <span>Kribi Teaching Assistant</span>
              <div className="ml-auto text-xs bg-primary-foreground/20 px-2 py-1 rounded-full">
                Enhanced with Memory
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
            {/* Messages */}
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
              placeholder="Ask Kribi anything about teaching, lesson planning, or classroom management..."
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AIChatbot;
