
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openRouterApiKey = Deno.env.get('OPENROUTER_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { prompt, toolType, context, language = 'en' } = await req.json();

    if (!openRouterApiKey) {
      throw new Error('OpenRouter API key not configured');
    }

    // Create specialized prompts based on tool type
    let systemPrompt = '';
    let userPrompt = prompt;
    
    // Add language instruction based on selected language
    const languageInstruction = language === 'fr' ? 
      'Respond in French. All content must be in French.' :
      language === 'es' ?
      'Respond in Spanish. All content must be in Spanish.' :
      'Respond in English.';

    switch (toolType) {
      case 'lessonPlan':
        systemPrompt = `You are an expert educational consultant. ${languageInstruction} Create detailed, engaging lesson plans with clear structure and formatting. ALWAYS use this exact format:\n\n# LESSON PLAN: [Topic]\n\n## 📚 LEARNING OBJECTIVES\n[Clear, measurable objectives]\n\n## 🎯 MATERIALS NEEDED\n[Bulleted list of materials]\n\n## ⏰ LESSON STRUCTURE\n### Opening (X minutes)\n[Activities and instructions]\n\n### Main Activities (X minutes)\n[Detailed activities with steps]\n\n### Closing (X minutes)\n[Wrap-up activities]\n\n## 📋 ASSESSMENT STRATEGIES\n[How to evaluate student learning]\n\n## 🎨 DIFFERENTIATION\n[Adaptations for different learning styles]\n\n## ➕ EXTENSION ACTIVITIES\n[For early finishers or advanced students]`;
        break;
      case 'parentEmail':
        systemPrompt = `You are a professional educator writing to parents. ${languageInstruction} ALWAYS use this exact format:\n\n# PARENT COMMUNICATION\n\n## 📧 EMAIL SUBJECT\n[Clear, informative subject line]\n\n## 💌 EMAIL CONTENT\n\n**Dear [Parent Name],**\n\n### 🎯 PURPOSE\n[Clear statement of why you\'re writing]\n\n### 📝 DETAILS\n[Specific information about the situation]\n\n### 🔄 NEXT STEPS\n[What happens next or recommendations]\n\n### 🤝 PARTNERSHIP\n[Collaborative closing statement]\n\n**Best regards,**\n**[Your Name]**\n**[Title]**`;
        break;
      case 'behaviorPlan':
        systemPrompt = `You are a behavior specialist creating positive behavior support plans. ${languageInstruction} ALWAYS use this exact format:\n\n# POSITIVE BEHAVIOR SUPPORT PLAN\n\n## 👤 STUDENT PROFILE\n[Brief overview based on provided information]\n\n## 🔍 BEHAVIOR ANALYSIS\n### Triggers\n[Possible triggers and antecedents]\n### Function\n[Why the behavior might be occurring]\n\n## 🎯 BEHAVIOR GOALS\n[Specific, measurable positive behavior goals]\n\n## 📚 TEACHING STRATEGIES\n[How to teach replacement behaviors]\n\n## 🏫 ENVIRONMENTAL MODIFICATIONS\n[Changes to setting or structure]\n\n## 🌟 REINFORCEMENT STRATEGIES\n[Positive reinforcement approaches]\n\n## 📊 DATA COLLECTION\n[How to track progress]\n\n## 💪 LEVERAGING STRENGTHS\n[How to use student\'s identified strengths]`;
        break;
      case 'aiTextDetector':
        systemPrompt = `You are an AI text analysis expert. ${languageInstruction} ALWAYS use this exact format:\n\n# AI TEXT ANALYSIS REPORT\n\n## 🤖 AI PROBABILITY SCORE\n**[X]% Likelihood of AI Generation**\n\n## 🔍 KEY INDICATORS\n### AI-Suggestive Features\n[Specific features that suggest AI authorship]\n\n### Human-Suggestive Features\n[Features that suggest human authorship]\n\n## ✍️ WRITING STYLE ANALYSIS\n### Vocabulary Level\n[Assessment of word choice and complexity]\n\n### Sentence Structure\n[Analysis of sentence patterns and flow]\n\n### Voice and Tone\n[Evaluation of authorial voice]\n\n## 💭 CONTENT ANALYSIS\n### Creativity and Originality\n[Assessment of unique ideas and perspectives]\n\n### Depth of Knowledge\n[Evaluation of subject understanding]\n\n## 📋 RECOMMENDATIONS\n### For the Teacher\n[Suggested next steps for addressing the situation]\n\n### Follow-up Actions\n[How to proceed while maintaining fairness]`;
        break;
      default:
        systemPrompt = `You are an AI teaching assistant. ${languageInstruction} ALWAYS format your responses with clear headings using # and ## markdown, bullet points, and organized sections. Start with a main title, then use relevant subheadings like "Overview", "Key Points", "Recommendations", "Next Steps" etc. Make responses scannable and user-friendly.`;
    }

    console.log('Generating content with OpenRouter for tool type:', toolType);

    // Try primary model first with reduced token limit
    const models = [
      'anthropic/claude-3.5-sonnet',
      'openai/gpt-4o-mini',
      'anthropic/claude-3-haiku'
    ];

    let lastError = null;

    for (const model of models) {
      try {
        console.log(`Attempting with model: ${model}`);
        
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${openRouterApiKey}`,
            'Content-Type': 'application/json',
            'HTTP-Referer': 'https://easyteach.app',
            'X-Title': 'EasyTeach AI Assistant',
          },
          body: JSON.stringify({
            model: model,
            messages: [
              { role: 'system', content: systemPrompt },
              { role: 'user', content: userPrompt }
            ],
            max_tokens: 1000, // Reduced from 1500 to avoid credit issues
            temperature: 0.7,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error(`${model} API error:`, errorData);
          lastError = errorData;
          continue; // Try next model
        }

        const data = await response.json();
        const generatedContent = data.choices[0]?.message?.content;

        if (!generatedContent) {
          console.error(`No content generated from ${model}`);
          continue; // Try next model
        }

        console.log(`Successfully generated content with ${model}`);

        return new Response(JSON.stringify({ content: generatedContent }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });

      } catch (error) {
        console.error(`Error with model ${model}:`, error);
        lastError = error;
        continue; // Try next model
      }
    }

    // If all models failed, return the last error
    throw new Error(`All models failed. Last error: ${lastError?.error?.message || lastError?.message || 'Unknown error'}`);

  } catch (error) {
    console.error('Error in generate-ai-content function:', error);
    return new Response(JSON.stringify({ 
      error: error.message || 'Failed to generate content. Please try again.'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
