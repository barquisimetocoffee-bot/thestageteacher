import { 
  BookOpen, MessageCircle, Users, FileText, CheckCircle
} from "lucide-react";

export const tools = [
  // Lesson Planning
  {
    id: 1,
    nameKey: "tools.lessonPlanGenerator.name",
    descriptionKey: "tools.lessonPlanGenerator.description",
    categoryKey: "categories.lessonPlanning",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-600",
    timesSaved: "2h",
    estimatedTime: "3 min",
    fields: [
      { name: "subject", labelKey: "fields.subject.label", type: "text", placeholderKey: "fields.subject.placeholder" },
      { name: "grade", labelKey: "fields.grade.label", type: "grade_selector" },
      { name: "topic", labelKey: "fields.topic.label", type: "text", placeholderKey: "fields.topic.placeholder" },
      { name: "duration", labelKey: "fields.duration.label", type: "select", optionsKey: "options.duration" },
      { name: "learningStyle", labelKey: "fields.learningStyle.label", type: "select", optionsKey: "options.learningStyle" },
      { name: "additionalContext", labelKey: "fields.additionalContext.label", type: "textarea", placeholderKey: "fields.additionalContext.placeholder" },
      { name: "standardAlignment", labelKey: "fields.standardAlignment.label", type: "text", placeholderKey: "fields.standardAlignment.placeholder" }
    ]
  },
  {
    id: 2,
    nameKey: "tools.lessonHookIdeas.name",
    descriptionKey: "tools.lessonHookIdeas.description",
    categoryKey: "categories.lessonPlanning",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-600",
    timesSaved: "30m",
    estimatedTime: "2 min",
    fields: [
      { name: "subject", labelKey: "fields.subject.label", type: "text", placeholderKey: "fields.subject.placeholder" },
      { name: "grade", labelKey: "fields.grade.label", type: "grade_selector" },
      { name: "topic", labelKey: "fields.topic.label", type: "text", placeholderKey: "fields.topic.placeholder" },
      { name: "duration", labelKey: "fields.duration.label", type: "select", optionsKey: "fieldOptions.durations" },
      { name: "resources", labelKey: "fields.resources.label", type: "select", optionsKey: "fieldOptions.resources" }
    ]
  },
  {
    id: 3,
    nameKey: "tools.iepGenerator.name",
    descriptionKey: "tools.iepGenerator.description",
    categoryKey: "categories.lessonPlanning",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-600",
    timesSaved: "2h",
    estimatedTime: "5 min",
    fields: [
      { name: "studentAge", labelKey: "fields.studentAge.label", type: "select", optionsKey: "fieldOptions.ageGroups" },
      { name: "disability", labelKey: "fields.disability.label", type: "select", optionsKey: "fieldOptions.disabilities" },
      { name: "subject", labelKey: "fields.subjectArea.label", type: "select", optionsKey: "fieldOptions.subjects" },
      { name: "currentLevel", labelKey: "fields.currentLevel.label", type: "textarea", placeholderKey: "fields.currentLevel.placeholder" },
      { name: "goalArea", labelKey: "fields.goalArea.label", type: "text", placeholderKey: "fields.goalArea.placeholder" }
    ]
  },
  {
    id: 4,
    nameKey: "tools.learningObjectiveWriter.name",
    descriptionKey: "tools.learningObjectiveWriter.description",
    categoryKey: "categories.lessonPlanning",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-600",
    timesSaved: "30m",
    estimatedTime: "3 min",
    fields: [
      { name: "subject", labelKey: "fields.subject.label", type: "text", placeholderKey: "fields.subject.placeholder" },
      { name: "grade", labelKey: "fields.grade.label", type: "grade_selector" },
      { name: "topic", labelKey: "fields.topic.label", type: "text", placeholderKey: "fields.topic.placeholder" },
      { name: "bloomsLevel", labelKey: "fields.bloomsLevel.label", type: "select", optionsKey: "fieldOptions.bloomsLevels" },
      { name: "standard", labelKey: "fields.standard.label", type: "text", placeholderKey: "fields.standard.placeholder" }
    ]
  },

  // Content Hub
  {
    id: 5,
    nameKey: "tools.presentationGenerator.name",
    descriptionKey: "tools.presentationGenerator.description",
    categoryKey: "categories.contentHub",
    icon: FileText,
    color: "bg-green-100 text-green-600",
    timesSaved: "90m",
    estimatedTime: "4 min",
    fields: [
      { name: "subject", labelKey: "fields.subject.label", type: "text", placeholderKey: "fields.subject.placeholder" },
      { name: "topic", labelKey: "fields.topic.label", type: "text", placeholderKey: "fields.topic.placeholder" },
      { name: "grade", labelKey: "fields.grade.label", type: "grade_selector" },
      { name: "slideCount", labelKey: "fields.slideCount.label", type: "select", optionsKey: "fieldOptions.slideCounts" },
      { name: "includeActivities", labelKey: "fields.includeActivities.label", type: "select", optionsKey: "fieldOptions.yesNo" }
    ]
  },
  {
    id: 6,
    nameKey: "tools.academicContentGenerator.name",
    descriptionKey: "tools.academicContentGenerator.description",
    categoryKey: "categories.contentHub",
    icon: FileText,
    color: "bg-green-100 text-green-600",
    timesSaved: "60m",
    estimatedTime: "3 min",
    fields: [
      { name: "subject", labelKey: "fields.subject.label", type: "text", placeholderKey: "fields.subject.placeholder" },
      { name: "topic", labelKey: "fields.topic.label", type: "text", placeholderKey: "fields.topic.placeholder" },
      { name: "grade", labelKey: "fields.grade.label", type: "grade_selector" },
      { name: "contentType", labelKey: "fields.contentType.label", type: "select", optionsKey: "fieldOptions.contentTypes" },
      { name: "length", labelKey: "fields.length.label", type: "select", optionsKey: "fieldOptions.contentLengths" }
    ]
  },
  {
    id: 7,
    nameKey: "tools.mathSpiralReview.name",
    descriptionKey: "tools.mathSpiralReview.description",
    categoryKey: "categories.contentHub",
    icon: FileText,
    color: "bg-green-100 text-green-600",
    timesSaved: "45m",
    estimatedTime: "3 min",
    fields: [
      { name: "grade", labelKey: "fields.grade.label", type: "grade_selector" },
      { name: "currentTopic", labelKey: "fields.currentTopic.label", type: "text", placeholderKey: "fields.currentTopic.placeholder" },
      { name: "reviewTopics", labelKey: "fields.reviewTopics.label", type: "textarea", placeholderKey: "fields.reviewTopics.placeholder" },
      { name: "problemCount", labelKey: "fields.problemCount.label", type: "select", optionsKey: "fieldOptions.problemCounts" },
      { name: "difficulty", labelKey: "fields.difficulty.label", type: "select", optionsKey: "fieldOptions.difficulties" }
    ]
  },
  {
    id: 8,
    nameKey: "tools.textValidation.name",
    descriptionKey: "tools.textValidation.description",
    categoryKey: "categories.contentHub",
    icon: FileText,
    color: "bg-green-100 text-green-600",
    timesSaved: "20m",
    estimatedTime: "2 min",
    fields: [
      { name: "text", labelKey: "fields.text.label", type: "textarea", placeholderKey: "fields.text.placeholder" },
      { name: "targetGrade", labelKey: "fields.targetGrade.label", type: "grade_selector" },
      { name: "purpose", labelKey: "fields.purpose.label", type: "select", optionsKey: "fieldOptions.textPurposes" },
      { name: "proofreading", labelKey: "fields.proofreading.label", type: "select", optionsKey: "fieldOptions.yesNo" },
      { name: "rewriteTo", labelKey: "fields.rewriteTo.label", type: "select", optionsKey: "fieldOptions.rewriteOptions" },
      { name: "textSummariser", labelKey: "fields.textSummariser.label", type: "select", optionsKey: "fieldOptions.summaryOptions" }
    ]
  },
  {
    id: 9,
    nameKey: "tools.multipleExplanationsGenerator.name",
    descriptionKey: "tools.multipleExplanationsGenerator.description",
    categoryKey: "categories.contentHub",
    icon: FileText,
    color: "bg-green-100 text-green-600",
    timesSaved: "40m",
    estimatedTime: "3 min",
    fields: [
      { name: "concept", labelKey: "fields.concept.label", type: "text", placeholderKey: "fields.concept.placeholder" },
      { name: "subject", labelKey: "fields.subject.label", type: "text", placeholderKey: "fields.subject.placeholder" },
      { name: "grade", labelKey: "fields.grade.label", type: "grade_selector" },
      { name: "explanationTypes", labelKey: "fields.explanationTypes.label", type: "select", optionsKey: "fieldOptions.explanationTypes" }
    ]
  },

  // Assessment
  {
    id: 10,
    nameKey: "tools.generalAssessment.name",
    descriptionKey: "tools.generalAssessment.description",
    categoryKey: "categories.assessment",
    icon: CheckCircle,
    color: "bg-purple-100 text-purple-600",
    timesSaved: "90m",
    estimatedTime: "4 min",
    fields: [
      { name: "subject", labelKey: "fields.subject.label", type: "text", placeholderKey: "fields.subject.placeholder" },
      { name: "topic", labelKey: "fields.topic.label", type: "text", placeholderKey: "fields.topic.placeholder" },
      { name: "grade", labelKey: "fields.grade.label", type: "grade_selector" },
      { name: "assessmentType", labelKey: "fields.assessmentType.label", type: "select", optionsKey: "fieldOptions.assessmentTypes" },
      { name: "questionCount", labelKey: "fields.questionCount.label", type: "select", optionsKey: "fieldOptions.questionCounts" },
      { name: "questionTypes", labelKey: "fields.questionTypes.label", type: "select", optionsKey: "fieldOptions.questionTypes" },
      { name: "additionalContext", labelKey: "fields.additionalContext.label", type: "textarea", placeholderKey: "fields.additionalContext.placeholder" }
    ]
  },
  {
    id: 11,
    nameKey: "tools.questionStemGenerator.name",
    descriptionKey: "tools.questionStemGenerator.description",
    categoryKey: "categories.assessment",
    icon: CheckCircle,
    color: "bg-purple-100 text-purple-600",
    timesSaved: "30m",
    estimatedTime: "2 min",
    fields: [
      { name: "subject", labelKey: "fields.subject.label", type: "text", placeholderKey: "fields.subject.placeholder" },
      { name: "topic", labelKey: "fields.topic.label", type: "text", placeholderKey: "fields.topic.placeholder" },
      { name: "bloomsLevel", labelKey: "fields.bloomsLevel.label", type: "select", optionsKey: "fieldOptions.bloomsLevels" },
      { name: "questionCount", labelKey: "fields.questionCount.label", type: "select", optionsKey: "fieldOptions.questionCounts" }
    ]
  },
  {
    id: 12,
    nameKey: "tools.worksheetGenerator.name",
    descriptionKey: "tools.worksheetGenerator.description",
    categoryKey: "categories.assessment",
    icon: CheckCircle,
    color: "bg-purple-100 text-purple-600",
    timesSaved: "60m",
    estimatedTime: "4 min",
    fields: [
      { name: "subject", labelKey: "fields.subject.label", type: "text", placeholderKey: "fields.subject.placeholder" },
      { name: "topic", labelKey: "fields.topic.label", type: "text", placeholderKey: "fields.topic.placeholder" },
      { name: "grade", labelKey: "fields.grade.label", type: "grade_selector" },
      { name: "problemCount", labelKey: "fields.problemCount.label", type: "select", optionsKey: "fieldOptions.problemCounts" },
      { name: "includeAnswerKey", labelKey: "fields.includeAnswerKey.label", type: "select", optionsKey: "fieldOptions.yesNo" },
      { name: "additionalContext", labelKey: "fields.additionalContext.label", type: "textarea", placeholderKey: "fields.additionalContext.placeholder" }
    ]
  },
  {
    id: 13,
    nameKey: "tools.multiStepAssignmentCreator.name",
    descriptionKey: "tools.multiStepAssignmentCreator.description",
    categoryKey: "categories.assessment",
    icon: CheckCircle,
    color: "bg-purple-100 text-purple-600",
    timesSaved: "75m",
    estimatedTime: "5 min",
    fields: [
      { name: "subject", labelKey: "fields.subject.label", type: "text", placeholderKey: "fields.subject.placeholder" },
      { name: "assignmentType", labelKey: "fields.assignmentType.label", type: "select", optionsKey: "fieldOptions.assignmentTypes" },
      { name: "grade", labelKey: "fields.grade.label", type: "grade_selector" },
      { name: "duration", labelKey: "fields.duration.label", type: "select", optionsKey: "fieldOptions.durations" },
      { name: "learningGoals", labelKey: "fields.learningGoals.label", type: "textarea", placeholderKey: "fields.learningGoals.placeholder" }
    ]
  },
  {
    id: 14,
    nameKey: "tools.dokQuestionsGenerator.name",
    descriptionKey: "tools.dokQuestionsGenerator.description",
    categoryKey: "categories.assessment",
    icon: CheckCircle,
    color: "bg-purple-100 text-purple-600",
    timesSaved: "45m",
    estimatedTime: "3 min",
    fields: [
      { name: "subject", labelKey: "fields.subject.label", type: "text", placeholderKey: "fields.subject.placeholder" },
      { name: "topic", labelKey: "fields.topic.label", type: "text", placeholderKey: "fields.topic.placeholder" },
      { name: "dokLevel", labelKey: "fields.dokLevel.label", type: "select", optionsKey: "fieldOptions.dokLevels" },
      { name: "questionCount", labelKey: "fields.questionCount.label", type: "select", optionsKey: "fieldOptions.questionCounts" }
    ]
  },
  {
    id: 15,
    nameKey: "tools.quizCreator.name",
    descriptionKey: "tools.quizCreator.description",
    categoryKey: "categories.assessment",
    icon: CheckCircle,
    color: "bg-purple-100 text-purple-600",
    timesSaved: "30m",
    estimatedTime: "3 min",
    fields: [
      { name: "subject", labelKey: "fields.subject.label", type: "text", placeholderKey: "fields.subject.placeholder" },
      { name: "topic", labelKey: "fields.topic.label", type: "text", placeholderKey: "fields.topic.placeholder" },
      { name: "questionCount", labelKey: "fields.questionCount.label", type: "select", optionsKey: "fieldOptions.questionCounts" },
      { name: "questionType", labelKey: "fields.questionType.label", type: "select", optionsKey: "fieldOptions.questionTypes" },
      { name: "difficulty", labelKey: "fields.difficulty.label", type: "select", optionsKey: "fieldOptions.difficulties" },
      { name: "additionalContext", labelKey: "fields.additionalContext.label", type: "textarea", placeholderKey: "fields.additionalContext.placeholder" }
    ]
  },
  {
    id: 16,
    nameKey: "tools.mathProblemGenerator.name",
    descriptionKey: "tools.mathProblemGenerator.description",
    categoryKey: "categories.assessment",
    icon: CheckCircle,
    color: "bg-purple-100 text-purple-600",
    timesSaved: "40m",
    estimatedTime: "3 min",
    fields: [
      { name: "mathTopic", labelKey: "fields.mathTopic.label", type: "select", optionsKey: "fieldOptions.mathTopics" },
      { name: "grade", labelKey: "fields.grade.label", type: "grade_selector" },
      { name: "problemCount", labelKey: "fields.problemCount.label", type: "select", optionsKey: "fieldOptions.problemCounts" },
      { name: "includeWordProblems", labelKey: "fields.includeWordProblems.label", type: "select", optionsKey: "fieldOptions.wordProblemOptions" },
      { name: "additionalContext", labelKey: "fields.additionalContext.label", type: "textarea", placeholderKey: "fields.additionalContext.placeholder" }
    ]
  },
  {
    id: 17,
    nameKey: "tools.aiTextDetector.name",
    descriptionKey: "tools.aiTextDetector.description",
    categoryKey: "categories.assessment",
    icon: CheckCircle,
    color: "bg-purple-100 text-purple-600",
    timesSaved: "15m",
    estimatedTime: "2 min",
    fields: [
      { name: "studentText", labelKey: "fields.studentText.label", type: "textarea", placeholderKey: "fields.studentText.placeholder" },
      { name: "assignmentType", labelKey: "fields.assignmentType.label", type: "select", optionsKey: "fieldOptions.assignmentTypes" },
      { name: "studentGrade", labelKey: "fields.grade.label", type: "grade_selector" },
      { name: "analysisDepth", labelKey: "fields.analysisDepth.label", type: "select", optionsKey: "fieldOptions.analysisDepths" },
      { name: "additionalContext", labelKey: "fields.additionalContext.label", type: "textarea", placeholderKey: "fields.additionalContext.placeholder" }
    ]
  },

  // Communication
  {
    id: 18,
    nameKey: "tools.parentEmailComposer.name",
    descriptionKey: "tools.parentEmailComposer.description",
    categoryKey: "categories.communication",
    icon: MessageCircle,
    color: "bg-orange-100 text-orange-600",
    timesSaved: "30m",
    estimatedTime: "2 min",
    fields: [
      { name: "emailType", labelKey: "fields.emailType.label", type: "select", optionsKey: "fieldOptions.emailTypes" },
      { name: "studentName", labelKey: "fields.studentName.label", type: "text", placeholderKey: "fields.studentName.placeholder" },
      { name: "situation", labelKey: "fields.situation.label", type: "textarea", placeholderKey: "fields.situation.placeholder" }
    ]
  },

  // Classroom Management
  {
    id: 19,
    nameKey: "tools.behaviorPlan.name",
    descriptionKey: "tools.behaviorPlan.description",
    categoryKey: "categories.classroomManagement",
    icon: Users,
    color: "bg-yellow-100 text-yellow-600",
    timesSaved: "60m",
    estimatedTime: "4 min",
    fields: [
      { name: "studentAge", labelKey: "fields.studentAge.label", type: "select", optionsKey: "fieldOptions.ageGroups" },
      { name: "behaviorConcern", labelKey: "fields.behaviorConcern.label", type: "textarea", placeholderKey: "fields.behaviorConcern.placeholder" },
      { name: "interventionLevel", labelKey: "fields.interventionLevel.label", type: "select", optionsKey: "fieldOptions.interventionLevels" }
    ]
  },
  {
    id: 20,
    nameKey: "tools.studentGrouping.name",
    descriptionKey: "tools.studentGrouping.description",
    categoryKey: "categories.classroomManagement",
    icon: Users,
    color: "bg-yellow-100 text-yellow-600",
    timesSaved: "30m",
    estimatedTime: "3 min",
    fields: [
      { name: "classSize", labelKey: "fields.classSize.label", type: "select", optionsKey: "fieldOptions.classSizes" },
      { name: "groupingPurpose", labelKey: "fields.groupingPurpose.label", type: "select", optionsKey: "fieldOptions.groupingPurposes" },
      { name: "groupSize", labelKey: "fields.groupSize.label", type: "select", optionsKey: "fieldOptions.groupSizes" }
    ]
  }
];