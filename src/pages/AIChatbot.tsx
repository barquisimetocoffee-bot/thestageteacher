import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Send, Bot, User, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { generateEducationalContent } from "@/utils/aiService";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: number;
  sender: "user" | "bot";
  text: string;
}

const AIChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "bot",
      text: "Hello! I'm Kribi, your AI Teaching Assistant powered by OpenRouter. How can I help you today? I can assist with lesson planning, classroom management, student engagement strategies, and much more!",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const newUserMessage = {
      id: Date.now(),
      sender: "user" as const,
      text: inputMessage,
    };

    setMessages((prev) => [...prev, newUserMessage]);
    const currentInput = inputMessage;
    setInputMessage("");
    setIsLoading(true);

    try {
      const aiResponse = await generateEducationalContent(
        currentInput,
        "AI Assistant Chat"
      );

      const botResponse = {
        id: Date.now() + 1,
        sender: "bot" as const,
        text: aiResponse,
      };

      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      toast({
        title: "AI Assistant Error",
        description:
          "Unable to generate response. Please check your OpenRouter API key and try again.",
        variant: "destructive",
      });

      const errorResponse = {
        id: Date.now() + 1,
        sender: "bot" as const,
        text: "I apologize, but I'm having trouble connecting to the AI service. Please try again later.",
      };

      setMessages((prev) => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link to="/easyteach-app">
              <Button variant="outline" size="sm" className="my-btn py-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Kribi Teaching Assistant
              </h1>
              <p className="text-gray-600">
                Get instant help with your teaching questions
              </p>
            </div>
          </div>
        </div>

        {/* Chat Interface */}
        <Card className="h-[600px] flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bot className="h-5 w-5 text-blue-600" />
              <span>Kribi Teaching Assistant</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto space-y-4 mb-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex items-start space-x-2 max-w-[80%] ${
                      message.sender === "user"
                        ? "flex-row-reverse space-x-reverse"
                        : ""
                    }`}
                  >
                    <div
                      className={`size-10 p-3 rounded-full flex items-center justify-center ${
                        message.sender === "user"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {message.sender === "user" ? (
                        <User className="h-4 w-4" />
                      ) : (
                        <Bot className="h-4 w-4" />
                      )}
                    </div>
                    <div
                      className={`p-3 rounded-lg ${
                        message.sender === "user"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-center space-x-2">
                    <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                      <Bot className="h-4 w-4 text-gray-600" />
                    </span>
                    <div className="bg-gray-100 p-3 rounded-lg flex items-center space-x-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span className="text-sm text-gray-600">Thinking...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="flex space-x-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about teaching..."
                className="flex-1 py-6 focus:outline-none"
              />
              <Button
                className="py-6 flex items-center justify-center my-btn group"
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isLoading}
              >
                <Send className="h-4 w-4 group-hover:rotate-45 transition-all duration-300" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AIChatbot;
