import { supabase } from '@/integrations/supabase/client';

export const generateEducationalContent = async (prompt: string, toolContext?: string, language?: string) => {
  try {
    console.log('Generating educational content:', { prompt: prompt.substring(0, 100), toolContext, language });

    const { data, error } = await supabase.functions.invoke('generate-ai-content', {
      body: {
        prompt,
        toolType: 'general',
        context: toolContext || 'General teaching assistance',
        language: language || 'en'
      }
    });

    if (error) {
      console.error('Supabase function error:', error);
      
      // Handle specific error types
      if (error.message?.includes('Failed to fetch')) {
        throw new Error('Connection error. Please check your internet connection and try again.');
      }
      
      if (error.message?.includes('credits') || error.message?.includes('tokens')) {
        throw new Error('Service temporarily unavailable. Please try again in a few minutes.');
      }
      
      throw new Error('Failed to generate content. Please try again.');
    }

    if (!data?.content) {
      throw new Error('No content received from AI service');
    }

    return data.content;
  } catch (error) {
    console.error('AI generation error:', error);
    
    // Return more specific error messages
    if (error.message.includes('Connection error') || 
        error.message.includes('Service temporarily unavailable') ||
        error.message.includes('No content received')) {
      throw error; // Re-throw specific errors
    }
    
    throw new Error('Unable to generate AI response. Please check your connection and try again.');
  }
};

export const generateLessonPlan = async (subject: string, topic: string, grade: string, language?: string) => {
  const prompt = `Create a comprehensive lesson plan for ${grade} students learning about "${topic}" in ${subject}. 

Please include:
- Clear learning objectives
- Materials needed
- Step-by-step activities (opening, main activities, closing)
- Assessment strategies
- Differentiation for different learning styles
- Estimated time for each section
- Extension activities for early finishers

Subject: ${subject}
Topic: ${topic}
Grade Level: ${grade}`;

  try {
    console.log('Generating lesson plan:', { subject, topic, grade });

    const { data, error } = await supabase.functions.invoke('generate-ai-content', {
      body: {
        prompt,
        toolType: 'lessonPlan',
        context: 'Lesson Planning',
        language: language || 'en'
      }
    });

    if (error) {
      console.error('Lesson plan generation error:', error);
      
      // Handle specific error types
      if (error.message?.includes('Failed to fetch')) {
        throw new Error('Connection error. Please check your internet connection and try again.');
      }
      
      if (error.message?.includes('credits') || error.message?.includes('tokens')) {
        throw new Error('Service temporarily unavailable. Please try again in a few minutes.');
      }
      
      throw error;
    }
    
    if (!data?.content) {
      throw new Error('No lesson plan content received');
    }

    return data.content;
  } catch (error) {
    console.error('Lesson plan generation error:', error);
    
    // Return more specific error messages
    if (error.message.includes('Connection error') || 
        error.message.includes('Service temporarily unavailable') ||
        error.message.includes('No lesson plan content received')) {
      throw error; // Re-throw specific errors
    }
    
    throw new Error('Unable to generate lesson plan. Please try again.');
  }
};

export const generateParentEmail = async (studentName: string, situation: string, emailType: string, language?: string) => {
  const prompt = `Draft a professional ${emailType.toLowerCase()} email to parents about ${studentName}. 

Email Type: ${emailType}
Student: ${studentName}
Situation: ${situation}

Please include:
- Appropriate greeting
- Clear purpose of the email
- Specific details about the situation
- Next steps or recommendations
- Professional closing
- Maintain a positive, collaborative tone`;

  try {
    console.log('Generating parent email:', { studentName, situation, emailType });

    const { data, error } = await supabase.functions.invoke('generate-ai-content', {
      body: {
        prompt,
        toolType: 'parentEmail',
        context: 'Parent Communication',
        language: language || 'en'
      }
    });

    if (error) {
      console.error('Parent email generation error:', error);
      
      // Handle specific error types
      if (error.message?.includes('Failed to fetch')) {
        throw new Error('Connection error. Please check your internet connection and try again.');
      }
      
      if (error.message?.includes('credits') || error.message?.includes('tokens')) {
        throw new Error('Service temporarily unavailable. Please try again in a few minutes.');
      }
      
      throw error;
    }

    if (!data?.content) {
      throw new Error('No email content received');
    }

    return data.content;
  } catch (error) {
    console.error('Parent email generation error:', error);
    
    // Return more specific error messages
    if (error.message.includes('Connection error') || 
        error.message.includes('Service temporarily unavailable') ||
        error.message.includes('No email content received')) {
      throw error; // Re-throw specific errors
    }
    
    throw new Error('Unable to generate parent email. Please try again.');
  }
};

export const generateBehaviorPlan = async (behaviorConcern: string, studentAge: string, strengths: string, language?: string) => {
  const prompt = `Create a positive behavior support plan for a ${studentAge}-year-old student.

Behavior Concern: ${behaviorConcern}
Student Age: ${studentAge}
Student Strengths: ${strengths}

Please include:
- Behavior analysis (possible triggers and functions)
- Positive behavior goals
- Teaching strategies
- Environmental modifications
- Reinforcement strategies
- Data collection methods
- Crisis intervention procedures (if needed)
- Ways to leverage student strengths`;

  try {
    console.log('Generating behavior plan:', { behaviorConcern, studentAge, strengths });

    const { data, error } = await supabase.functions.invoke('generate-ai-content', {
      body: {
        prompt,
        toolType: 'behaviorPlan',
        context: 'Behavior Support',
        language: language || 'en'
      }
    });

    if (error) {
      console.error('Behavior plan generation error:', error);
      
      // Handle specific error types
      if (error.message?.includes('Failed to fetch')) {
        throw new Error('Connection error. Please check your internet connection and try again.');
      }
      
      if (error.message?.includes('credits') || error.message?.includes('tokens')) {
        throw new Error('Service temporarily unavailable. Please try again in a few minutes.');
      }
      
      throw error;
    }

    if (!data?.content) {
      throw new Error('No behavior plan content received');
    }

    return data.content;
  } catch (error) {
    console.error('Behavior plan generation error:', error);
    
    // Return more specific error messages
    if (error.message.includes('Connection error') || 
        error.message.includes('Service temporarily unavailable') ||
        error.message.includes('No behavior plan content received')) {
      throw error; // Re-throw specific errors
    }
    
    throw new Error('Unable to generate behavior plan. Please try again.');
  }
};

export const generateAITextAnalysis = async (
  studentText: string, 
  assignmentType: string, 
  studentGrade: string, 
  analysisDepth: string, 
  additionalContext: string,
  language?: string
) => {
  const prompt = `Analyze the following student text submission for potential AI-generated content. Provide a detailed analysis including:

1. **AI Probability Score** (0-100%): Your assessment of how likely this text is to be AI-generated
2. **Key Indicators**: Specific features that suggest AI or human authorship
3. **Writing Style Analysis**: Assessment of vocabulary, sentence structure, and flow
4. **Content Analysis**: Evaluation of ideas, creativity, and authenticity
5. **Recommendations**: Suggestions for the teacher on how to proceed

Student Grade Level: ${studentGrade}
Assignment Type: ${assignmentType}
Analysis Depth: ${analysisDepth}
Additional Context: ${additionalContext}

TEXT TO ANALYZE:
"${studentText}"

Please provide a comprehensive analysis that helps maintain academic integrity while being fair to the student.`;

  try {
    console.log('Generating AI text analysis:', { assignmentType, studentGrade, analysisDepth });

    const { data, error } = await supabase.functions.invoke('generate-ai-content', {
      body: {
        prompt,
        toolType: 'aiTextDetector',
        context: 'AI Text Detection and Academic Integrity',
        language: language || 'en'
      }
    });

    if (error) {
      console.error('AI text analysis error:', error);
      
      // Handle specific error types
      if (error.message?.includes('Failed to fetch')) {
        throw new Error('Connection error. Please check your internet connection and try again.');
      }
      
      if (error.message?.includes('credits') || error.message?.includes('tokens')) {
        throw new Error('Service temporarily unavailable. Please try again in a few minutes.');
      }
      
      throw error;
    }

    if (!data?.content) {
      throw new Error('No analysis content received');
    }

    return data.content;
  } catch (error) {
    console.error('AI text analysis error:', error);
    
    // Return more specific error messages
    if (error.message.includes('Connection error') || 
        error.message.includes('Service temporarily unavailable') ||
        error.message.includes('No analysis content received')) {
      throw error; // Re-throw specific errors
    }
    
    throw new Error('Unable to analyze text for AI content. Please try again.');
  }
};

// Legacy function for backward compatibility
export const initializeAI = async () => {
  // No longer needed - using OpenRouter via edge function
  return null;
};
