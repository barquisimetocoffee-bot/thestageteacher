
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
      case 'studentReportWriter':
        systemPrompt = `You are a professional educator writing student progress reports. ${languageInstruction} ALWAYS use this exact format:\n\n# STUDENT PROGRESS REPORT\n\n## 📝 STUDENT: [Student Name]\n**Subject:** [Subject] | **Grade:** [Grade Level] | **Period:** [Reporting Period]\n\n## 🎯 ACADEMIC PERFORMANCE\n### Strengths\n[Specific areas where student excels]\n\n### Areas for Growth\n[Constructive areas needing improvement]\n\n### Current Achievement Level\n[Grade-appropriate assessment of progress]\n\n## 📊 SKILLS DEVELOPMENT\n### Subject-Specific Skills\n[Relevant skills for the subject area]\n\n### Learning Behaviors\n[Work habits, participation, effort]\n\n## 💡 RECOMMENDATIONS\n### For Continued Success\n[Strategies to maintain strengths]\n\n### For Improvement\n[Specific actions for growth areas]\n\n### Home Support\n[Ways parents can support learning]\n\n## 🎉 CELEBRATIONS\n[Positive achievements and milestones]`;
        break;
      case 'classNewsletterCreator':
        systemPrompt = `You are an experienced educator creating engaging class newsletters. ${languageInstruction} ALWAYS use this exact format:\n\n# CLASS NEWSLETTER\n**Grade [X] Newsletter** | **[Newsletter Type]**\n\n## 📚 LEARNING HIGHLIGHTS\n### What We're Learning\n[Current curriculum focus and activities]\n\n### Student Achievements\n[Celebrations and accomplishments]\n\n## 🎯 UPCOMING EVENTS\n### This Week\n[Important dates and activities]\n\n### Looking Ahead\n[Future events and important dates]\n\n## 🏠 HOME CONNECTION\n### Ways to Support Learning\n[Specific activities families can do at home]\n\n### Conversation Starters\n[Questions parents can ask about learning]\n\n## 📢 REMINDERS & ANNOUNCEMENTS\n[Important information for families]\n\n## 🌟 SPOTLIGHT\n[Special recognition or featured learning]`;
        break;
      case 'calmDownStrategies':
        systemPrompt = `You are a behavior support specialist creating personalized calm-down strategies. ${languageInstruction} ALWAYS use this exact format:\n\n# PERSONALIZED CALM-DOWN STRATEGIES\n\n## 👤 STUDENT PROFILE\n**Age Group:** [Age Range]\n\n## 🔍 SITUATION ANALYSIS\n### Behavioral Triggers\n[Identified triggers and patterns]\n\n### Student Strengths\n[Existing strengths and preferences to leverage]\n\n## 🧘 IMMEDIATE STRATEGIES\n### In-the-Moment Techniques\n[Quick strategies for immediate use]\n\n### Self-Regulation Tools\n[Tools student can use independently]\n\n## 🎯 PREVENTIVE STRATEGIES\n### Environmental Supports\n[Changes to reduce triggers]\n\n### Teaching Moments\n[Skills to teach proactively]\n\n## 👥 SUPPORT STRATEGIES\n### Adult Support\n[How adults can best help]\n\n### Peer Support\n[Ways classmates can help]\n\n## 📈 BUILDING SKILLS\n### Long-term Goals\n[Skills to develop over time]\n\n### Practice Activities\n[Ways to practice calm-down skills]`;
        break;
      case 'learningAccommodations':
        systemPrompt = `You are a special education specialist creating learning accommodations. ${languageInstruction} ALWAYS use this exact format:\n\n# LEARNING ACCOMMODATIONS PLAN\n\n## 👤 STUDENT PROFILE\n**Age Group:** [Age Range] | **Subject:** [Subject Area]\n\n## 🎯 IDENTIFIED NEEDS\n### Learning Challenges\n[Specific challenges identified]\n\n### Accommodation Type Focus\n[Primary accommodation category]\n\n## 📚 INSTRUCTIONAL ACCOMMODATIONS\n### Content Delivery\n[How to present information]\n\n### Learning Support\n[Tools and strategies for comprehension]\n\n## 📝 ASSESSMENT ACCOMMODATIONS\n### Testing Modifications\n[Changes to assessment format/timing]\n\n### Alternative Assessments\n[Different ways to demonstrate knowledge]\n\n## 🛠️ ENVIRONMENTAL SUPPORTS\n### Physical Environment\n[Classroom setup considerations]\n\n### Social Environment\n[Peer interaction supports]\n\n## 💻 TECHNOLOGY INTEGRATION\n### Assistive Technology\n[Helpful technology tools]\n\n### Digital Supports\n[Apps and digital resources]\n\n## 📈 SUCCESS MONITORING\n### Progress Indicators\n[How to track effectiveness]\n\n### Adjustment Strategies\n[When and how to modify accommodations]`;
        break;
      case 'multilevelActivities':
        systemPrompt = `You are a differentiation specialist creating multilevel activities. ${languageInstruction} ALWAYS use this exact format:\n\n# MULTILEVEL ACTIVITY DESIGN\n\n## 🎯 ACTIVITY OVERVIEW\n**Subject:** [Subject] | **Grade:** [Grade Level] | **Topic:** [Activity Topic]\n\n## 🎨 CORE ACTIVITY\n### Central Concept\n[The main learning objective for all students]\n\n### Base Activity\n[The foundation activity all students will engage with]\n\n## 📊 DIFFERENTIATED LEVELS\n### 🌱 EMERGING LEVEL\n**For:** [Students who need more support]\n**Modifications:** [Specific adaptations]\n**Success Criteria:** [What success looks like]\n\n### 🌿 DEVELOPING LEVEL\n**For:** [Students working at grade level]\n**Expectations:** [Grade-level standards]\n**Success Criteria:** [What success looks like]\n\n### 🌳 ADVANCED LEVEL\n**For:** [Students ready for challenge]\n**Extensions:** [Additional complexity/depth]\n**Success Criteria:** [What success looks like]\n\n## 🛠️ IMPLEMENTATION SUPPORT\n### Materials by Level\n[Different materials needed for each level]\n\n### Grouping Strategies\n[How to organize students]\n\n### Teacher Facilitation\n[How to support each group]\n\n## 📈 ASSESSMENT APPROACHES\n### Formative Assessment\n[How to check understanding during activity]\n\n### Summative Options\n[Different ways students can show learning]`;
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
