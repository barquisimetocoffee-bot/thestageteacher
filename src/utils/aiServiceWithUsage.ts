import { supabase } from "@/integrations/supabase/client";
import * as aiService from "./aiService";

// Wrapper function that tracks usage before calling AI services
export const withUsageTracking = async <T extends unknown[], R>(
  aiFunction: (...args: T) => Promise<R>,
  ...args: T
): Promise<R> => {
  try {
    // Get the current session
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();
    
    if (sessionError || !session) {
      throw new Error('Authentication required');
    }

    // Track usage before generating content
    const { data: usageData, error: usageError } = await supabase.functions.invoke('track-usage', {
      headers: { Authorization: `Bearer ${session.access_token}` },
    });

    if (usageError) {
      throw new Error(`Usage tracking error: ${usageError.message}`);
    }

    // If usage limit exceeded, throw specific error
    if (!usageData.success && usageData.error === "Usage limit exceeded") {
      const error = new Error("USAGE_LIMIT_EXCEEDED");
      (error as any).usageData = usageData;
      throw error;
    }

    // If usage tracking succeeded, proceed with AI generation
    if (usageData.success) {
      return await aiFunction(...args);
    }

    throw new Error("Unable to proceed with AI generation");
  } catch (error) {
    console.error('AI service with usage tracking error:', error);
    throw error;
  }
};

// Wrapped AI service functions
export const generateEducationalContent = (prompt: string, toolContext?: string, language?: string) =>
  withUsageTracking(aiService.generateEducationalContent, prompt, toolContext, language);

export const generateLessonPlan = (subject: string, topic: string, grade: string, language?: string) =>
  withUsageTracking(aiService.generateLessonPlan, subject, topic, grade, language);

export const generateParentEmail = (studentName: string, situation: string, emailType: string, language?: string) =>
  withUsageTracking(aiService.generateParentEmail, studentName, situation, emailType, language);

export const generateBehaviorPlan = (behaviorConcern: string, studentAge: string, strengths: string, language?: string) =>
  withUsageTracking(aiService.generateBehaviorPlan, behaviorConcern, studentAge, strengths, language);

export const generateAITextAnalysis = (
  studentText: string,
  assignmentType: string,
  studentGrade: string,
  analysisDepth: string,
  additionalContext: string,
  language?: string
) =>
  withUsageTracking(
    aiService.generateAITextAnalysis,
    studentText,
    assignmentType,
    studentGrade,
    analysisDepth,
    additionalContext,
    language
  );

// Re-export other functions that don't need usage tracking
export const initializeAI = aiService.initializeAI;