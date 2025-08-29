import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Clock, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { tools } from '@/lib/toolsData';

const Documentation = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const getFieldExplanation = (fieldName: string) => {
    const explanations = {
      subject: {
        title: "Subject",
        description: "The academic subject or discipline you're teaching (e.g., Mathematics, Science, English Language Arts, History, etc.). This helps tailor the content to specific subject requirements and standards."
      },
      grade: {
        title: "Grade Level",
        description: "Select the appropriate grade level or age group for your students. This ensures the complexity, vocabulary, and concepts are age-appropriate and aligned with developmental stages."
      },
      topic: {
        title: "Topic/Unit",
        description: "The specific topic, chapter, or unit you're covering within your subject. Be as specific as possible (e.g., 'Fractions and Decimals' rather than just 'Math')."
      },
      duration: {
        title: "Lesson Duration",
        description: "How long your lesson or activity will last. This helps determine the appropriate amount of content and pacing for your time constraints."
      },
      learningStyle: {
        title: "Learning Style",
        description: "The preferred learning approach for your students - visual (charts, diagrams), auditory (discussions, explanations), kinesthetic (hands-on activities), or mixed approaches."
      },
      additionalContext: {
        title: "Additional Context",
        description: "Any extra information that would help customize the content: specific learning objectives, student needs, curriculum requirements, or special considerations for your classroom."
      },
      standardAlignment: {
        title: "Standards Alignment",
        description: "Educational standards you need to align with (Common Core, state standards, etc.). Include specific standard codes if you have them (e.g., CCSS.MATH.5.NF.A.1)."
      },
      resources: {
        title: "Available Resources",
        description: "What materials and tools you have access to in your classroom - technology, manipulatives, laboratory equipment, etc. This ensures suggestions are practical for your environment."
      },
      studentAge: {
        title: "Student Age Range",
        description: "The age range of your students, which affects developmental appropriateness, attention spans, and the complexity of interventions or accommodations needed."
      },
      disability: {
        title: "Disability/Special Need",
        description: "The specific disability or special need you're addressing. Be as specific as possible to get targeted, evidence-based recommendations and accommodations."
      },
      currentLevel: {
        title: "Current Performance Level",
        description: "Describe where the student currently performs academically, behaviorally, or functionally. Include specific skills they have mastered and areas where they struggle."
      },
      goalArea: {
        title: "Goal Area",
        description: "The specific area you want to target for improvement - academic skills, behavioral goals, social skills, communication, etc. Be specific about what success looks like."
      },
      bloomsLevel: {
        title: "Bloom's Taxonomy Level",
        description: "The cognitive level you want students to reach: Remember (recall facts), Understand (explain concepts), Apply (use knowledge), Analyze (break down information), Evaluate (make judgments), or Create (produce new work)."
      },
      slideCount: {
        title: "Number of Slides",
        description: "How many slides you want in your presentation. Consider your lesson duration - typically 1-2 slides per minute of instruction plus time for activities."
      },
      includeActivities: {
        title: "Include Interactive Activities",
        description: "Whether to include interactive elements, discussion prompts, or student engagement activities within the presentation to maintain attention and check understanding."
      },
      contentType: {
        title: "Content Type",
        description: "The format of content you need - reading passages, lecture notes, study guides, activity instructions, etc. Choose based on how you plan to use the material."
      },
      length: {
        title: "Content Length",
        description: "How long or detailed you want the content to be. Consider your students' reading levels and attention spans when selecting length."
      },
      currentTopic: {
        title: "Current Math Topic",
        description: "The main mathematical concept you're currently teaching. This will be the focus of the spiral review while incorporating previously learned skills."
      },
      reviewTopics: {
        title: "Topics to Review",
        description: "List the mathematical concepts from earlier in the year or previous grades that you want to spiral back and review. Separate multiple topics with commas."
      },
      problemCount: {
        title: "Number of Problems",
        description: "How many practice problems you want. Consider your class time and students' attention spans - typically 10-20 problems for a single activity."
      },
      difficulty: {
        title: "Difficulty Level",
        description: "The challenge level appropriate for your students - below grade level, on grade level, or above grade level. Match this to your students' current abilities."
      },
      text: {
        title: "Text to Analyze",
        description: "Paste the text you want to validate, proofread, or modify. This could be student writing, curriculum content, or any text you want to improve for your classroom."
      },
      targetGrade: {
        title: "Target Grade Level",
        description: "The grade level you want the text to be appropriate for. The tool will analyze readability and suggest modifications to match this level."
      },
      purpose: {
        title: "Text Purpose",
        description: "How you plan to use this text - instruction, assessment, homework, etc. This affects the style and complexity recommendations."
      },
      proofreading: {
        title: "Grammar & Spelling Check",
        description: "Whether you want the tool to check and correct grammar, spelling, and punctuation errors in the text."
      },
      rewriteTo: {
        title: "Rewrite Style",
        description: "If you want the text rewritten, specify the new style - more formal, simpler language, more engaging, etc."
      },
      textSummariser: {
        title: "Summary Options",
        description: "Whether and how you want the text summarized - key points only, brief summary, detailed summary, or no summary."
      },
      concept: {
        title: "Concept to Explain",
        description: "The specific concept, theory, or idea you want explained in multiple ways. Be as specific as possible for better, more targeted explanations."
      },
      explanationTypes: {
        title: "Types of Explanations",
        description: "The different approaches you want for explaining the concept - visual diagrams, analogies, real-world examples, step-by-step procedures, etc."
      },
      assessmentType: {
        title: "Assessment Type",
        description: "The kind of assessment you're creating - formative (checks for understanding), summative (end of unit), diagnostic (pre-assessment), or benchmark (progress monitoring)."
      },
      questionCount: {
        title: "Number of Questions",
        description: "How many questions you want in your assessment. Consider testing time - typically 1-2 minutes per multiple choice question, 5-10 minutes per short answer."
      },
      questionTypes: {
        title: "Question Types",
        description: "The format of questions you want - multiple choice, true/false, short answer, essay, matching, etc. Mix types for comprehensive assessment."
      },
      assignmentType: {
        title: "Assignment Type",
        description: "The kind of assignment you're creating - homework, project, research paper, lab report, creative writing, etc. This affects structure and expectations."
      },
      learningGoals: {
        title: "Learning Goals",
        description: "What you want students to learn or be able to do after completing this assignment. Be specific about skills, knowledge, or understanding you're targeting."
      },
      dokLevel: {
        title: "Depth of Knowledge (DOK) Level",
        description: "The cognitive complexity level: DOK 1 (recall facts), DOK 2 (apply skills/concepts), DOK 3 (strategic thinking), or DOK 4 (extended thinking/research)."
      },
      questionType: {
        title: "Question Format",
        description: "The format for individual questions in your quiz - multiple choice for quick grading, short answer for deeper thinking, or mixed for comprehensive assessment."
      },
      mathTopic: {
        title: "Mathematical Topic",
        description: "The specific area of mathematics you're focusing on - fractions, geometry, algebra, statistics, etc. Be specific about the sub-topic when possible."
      },
      includeWordProblems: {
        title: "Word Problems",
        description: "Whether to include word problems that apply math skills to real-world contexts. These help students see practical applications but take longer to solve."
      },
      studentText: {
        title: "Student Submission",
        description: "The text submitted by your student that you want to analyze for potential AI generation. Copy and paste the exact text as submitted."
      },
      analysisDepth: {
        title: "Analysis Detail Level",
        description: "How thorough you want the AI detection analysis to be - basic scan, detailed analysis with examples, or comprehensive report with recommendations."
      },
      emailType: {
        title: "Email Purpose",
        description: "The type of communication you need - positive feedback, concern about behavior, academic progress, missing work, etc. This determines the tone and content."
      },
      studentName: {
        title: "Student Name",
        description: "The name of the student you're writing about. This will be used in the email to personalize the communication."
      },
      situation: {
        title: "Situation Details",
        description: "Describe the specific situation you want to address in the email - what happened, what you observed, what concerns you have, or what you want to celebrate."
      },
      behaviorConcern: {
        title: "Behavior Concern",
        description: "Describe the specific behavior that needs to be addressed - when it happens, how often, what triggers it, and how it affects learning or the classroom environment."
      },
      interventionLevel: {
        title: "Intervention Level",
        description: "The level of support needed - minor classroom interventions, moderate support strategies, or intensive individualized interventions based on the severity of the behavior."
      },
      classSize: {
        title: "Class Size",
        description: "The total number of students in your class. This affects grouping strategies and management considerations."
      },
      groupingPurpose: {
        title: "Grouping Purpose",
        description: "Why you're forming groups - collaborative learning, differentiated instruction, peer tutoring, project work, etc. This determines the best grouping strategy."
      },
      groupSize: {
        title: "Preferred Group Size",
        description: "How many students you want in each group. Smaller groups (2-3) allow more participation; larger groups (4-6) provide more diverse perspectives."
      },
      includeAnswerKey: {
        title: "Include Answer Key",
        description: "Whether you want a separate answer key provided with your worksheet or assessment. Useful for quick grading or student self-checking."
      },
      standard: {
        title: "Educational Standard",
        description: "The specific educational standard or learning objective you're targeting. Include the full standard code if available for precise alignment."
      }
    };

    return explanations[fieldName] || { title: fieldName, description: "Field description not available." };
  };

  const categoryColors = {
    "Lesson Planning": "bg-blue-100 text-blue-800 border-blue-200",
    "Content Hub": "bg-green-100 text-green-800 border-green-200", 
    "Assessment": "bg-purple-100 text-purple-800 border-purple-200",
    "Communication": "bg-orange-100 text-orange-800 border-orange-200",
    "Classroom Management": "bg-yellow-100 text-yellow-800 border-yellow-200"
  };

  const getCategoryName = (categoryKey: string) => {
    const categoryMap = {
      "categories.lessonPlanning": "Lesson Planning",
      "categories.contentHub": "Content Hub", 
      "categories.assessment": "Assessment",
      "categories.communication": "Communication",
      "categories.classroomManagement": "Classroom Management"
    };
    return categoryMap[categoryKey] || categoryKey;
  };

  const groupedTools: Record<string, typeof tools> = tools.reduce((acc, tool) => {
    const category = getCategoryName(tool.categoryKey);
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(tool);
    return acc;
  }, {} as Record<string, typeof tools>);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-primary/20 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost" 
                size="sm"
                onClick={() => navigate(-1)}
                className="flex items-center space-x-2 hover:bg-primary/10"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back</span>
              </Button>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Pencil Tools Documentation
                  </h1>
                  <p className="text-muted-foreground">Complete guide to all AI-powered teaching tools</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Introduction */}
        <Card className="mb-8 bg-white/80 backdrop-blur-sm border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <span>Getting Started</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-gray max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Welcome to Pencil's comprehensive tools documentation. Each tool is designed to save you time and enhance your teaching effectiveness. Below you'll find detailed explanations of every tool and its input fields.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Time-Saving</h4>
                    <p className="text-sm text-blue-700">Each tool shows estimated time saved</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg border border-green-200">
                  <Zap className="h-6 w-6 text-green-600" />
                  <div>
                    <h4 className="font-semibold text-green-900">AI-Powered</h4>
                    <p className="text-sm text-green-700">Advanced AI generates quality content</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <BookOpen className="h-6 w-6 text-purple-600" />
                  <div>
                    <h4 className="font-semibold text-purple-900">Curriculum Aligned</h4>
                    <p className="text-sm text-purple-700">Standards-based educational content</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tools by Category */}
        {Object.entries(groupedTools).map(([category, categoryTools]) => (
          <div key={category} className="mb-12">
            <div className="mb-6">
              <Badge className={`text-lg px-4 py-2 ${categoryColors[category] || 'bg-gray-100 text-gray-800 border-gray-200'}`}>
                {category}
              </Badge>
            </div>
            
            <div className="grid gap-6">
              {categoryTools.map((tool) => (
                <Card key={tool.id} className="bg-white/80 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-200">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${tool.color}`}>
                          <tool.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{t(tool.nameKey)}</CardTitle>
                          <p className="text-muted-foreground mt-1">{t(tool.descriptionKey)}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <Badge variant="outline" className="text-xs">
                          ⏱️ {tool.estimatedTime}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          💾 Saves {tool.timesSaved}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg mb-3">Input Fields Guide</h4>
                      
                      <div className="grid gap-4">
                        {tool.fields.map((field, index) => {
                          const explanation = getFieldExplanation(field.name);
                          return (
                            <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                              <div className="flex items-start justify-between mb-2">
                                <h5 className="font-medium text-gray-900">{explanation.title}</h5>
                                <Badge variant="outline" className="text-xs capitalize">
                                  {field.type.replace('_', ' ')}
                                </Badge>
                              </div>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                {explanation.description}
                              </p>
                              {field.placeholderKey && (
                                <p className="text-xs text-gray-500 mt-2 italic">
                                  Example: "{t(field.placeholderKey)}"
                                </p>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <h5 className="font-medium text-blue-900 mb-2">💡 Pro Tips</h5>
                        <ul className="text-sm text-blue-800 space-y-1">
                          <li>• Be as specific as possible in your inputs for better results</li>
                          <li>• Include relevant context about your students' needs and abilities</li>
                          <li>• Review and customize generated content to match your teaching style</li>
                          <li>• Save frequently used settings for faster content creation</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {/* Footer */}
        <Card className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Need More Help?</h3>
            <p className="text-muted-foreground mb-6">
              If you need additional support or have questions about using any of these tools, 
              don't hesitate to reach out to our support team.
            </p>
            <div className="flex justify-center space-x-4">
              <Button 
                onClick={() => navigate('/pencil-app')}
                className="bg-primary hover:bg-primary/90"
              >
                Start Creating Content
              </Button>
              <Button variant="outline" onClick={() => navigate('/contact-us')}>
                Contact Support
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Documentation;