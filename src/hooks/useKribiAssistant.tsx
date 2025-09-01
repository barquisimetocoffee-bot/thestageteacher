import { useState, useCallback } from 'react';
import { generateEducationalContent } from '@/utils/aiServiceWithUsage';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';

interface ConversationMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  isTyping?: boolean;
}

interface UseKribiAssistantProps {
  maxConversationLength?: number;
  onToolRecommend?: (tools: any[]) => void;
}

export const useKribiAssistant = ({
  maxConversationLength = 10,
  onToolRecommend
}: UseKribiAssistantProps = {}) => {
  const [messages, setMessages] = useState<ConversationMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: "Hey there! 👋 I'm Kribi, your AI teaching assistant. I'm here to help with lesson planning, classroom management, and educational guidance. What can I help you with today?",
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { i18n } = useTranslation();

  const buildConversationContext = useCallback((newUserMessage: string): string => {
    const recentMessages = messages.slice(-maxConversationLength);
    const conversationHistory = recentMessages
      .map(msg => `${msg.role === 'user' ? 'Teacher' : 'Kribi'}: ${msg.content}`)
      .join('\n');

    return `Previous conversation:
${conversationHistory}

Teacher: ${newUserMessage}

Instructions for Kribi:
- You are Kribi, a friendly and knowledgeable AI teaching assistant
- Keep responses concise (2-3 sentences max unless detailed explanation requested)
- Be encouraging and supportive
- Focus on practical, actionable advice
- Remember the conversation context to provide relevant follow-ups
- Use a warm, conversational tone like talking to a colleague
- If asked for details, you can be more elaborate, but default to brevity`;
  }, [messages, maxConversationLength]);

  const sendMessage = useCallback(async (userMessage: string) => {
    if (!userMessage.trim() || isLoading) return;

    // Add user message
    const userMsg: ConversationMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: userMessage.trim(),
      timestamp: new Date()
    };

    // Add typing indicator
    const typingMsg: ConversationMessage = {
      id: `typing-${Date.now()}`,
      role: 'assistant',
      content: '',
      timestamp: new Date(),
      isTyping: true
    };

    setMessages(prev => [...prev, userMsg, typingMsg]);
    setIsLoading(true);

    try {
      const conversationPrompt = buildConversationContext(userMessage);
      const aiResponse = await generateEducationalContent(
        conversationPrompt,
        'Kribi Assistant Chat',
        i18n.language
      );

      // Remove typing indicator and add actual response
      const assistantMsg: ConversationMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: aiResponse,
        timestamp: new Date()
      };

      setMessages(prev => prev.slice(0, -1).concat(assistantMsg));
    } catch (error) {
      console.error('Kribi assistant error:', error);
      
      // Remove typing indicator and add error message
      const errorMsg: ConversationMessage = {
        id: `error-${Date.now()}`,
        role: 'assistant',
        content: "I'm having trouble connecting right now. Could you try asking that again?",
        timestamp: new Date()
      };

      setMessages(prev => prev.slice(0, -1).concat(errorMsg));
      
      toast({
        title: "Connection Issue",
        description: "Kribi is having trouble connecting. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }, [buildConversationContext, isLoading, i18n.language, toast]);

  const clearConversation = useCallback(() => {
    setMessages([{
      id: 'welcome-new',
      role: 'assistant',
      content: "Hey there! 👋 I'm Kribi, your AI teaching assistant. I'm here to help with lesson planning, classroom management, and educational guidance. What can I help you with today?",
      timestamp: new Date()
    }]);
  }, []);

  return {
    messages,
    isLoading,
    sendMessage,
    clearConversation
  };
};