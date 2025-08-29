import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';

export interface OnboardingStep {
  id: string;
  title: string;
  description: string;
  targetElement?: string;
  position: 'top' | 'bottom' | 'left' | 'right' | 'center';
  action?: 'click' | 'input' | 'wait';
  waitForElement?: string;
  showOverlay?: boolean;
}

const ONBOARDING_STEPS: OnboardingStep[] = [
  {
    id: 'welcome',
    title: 'Welcome to Pencil! ✏️',
    description: 'This is your AI-powered teaching assistant dashboard. Let me show you around and help you create your first piece of content.',
    position: 'center',
    showOverlay: false,
  },
  {
    id: 'sidebar',
    title: 'Quick Navigation',
    description: 'Your sidebar provides quick access to different sections. You can always return to the main tools from here.',
    targetElement: '[data-onboarding="sidebar"]',
    position: 'right',
  },
  {
    id: 'search',
    title: 'Find the Perfect Tool',
    description: 'Use the search bar to quickly find specific tools. Try searching for "quiz" or "lesson plan" to see tools filtered in real-time.',
    targetElement: '[data-onboarding="search"]',
    position: 'bottom',
    action: 'input',
  },
  {
    id: 'categories',
    title: 'Browse by Category',
    description: 'Tools are organized into categories. Click on different categories to filter tools by type - Lesson Planning, Assessment, Content Creation, and more.',
    targetElement: '[data-onboarding="categories"]',
    position: 'bottom',
  },
  {
    id: 'tools-grid',
    title: 'Your Teaching Tools',
    description: 'Here are all your AI-powered tools. Each tool shows its purpose, estimated time to complete, and category. Let\'s try creating content with one!',
    targetElement: '[data-onboarding="tools-grid"]',
    position: 'top',
  },
  {
    id: 'select-tool',
    title: 'Choose a Tool to Get Started',
    description: 'Click on the "Lesson Plan Generator" to open it. This will show you how the content creation process works.',
    targetElement: '[data-tool-id="lesson-plan-generator"]',
    position: 'top',
    action: 'click',
  },
  {
    id: 'tool-form',
    title: 'Fill in Your Requirements',
    description: 'Each tool has a simple form. Fill in the details about what you want to create. The more specific you are, the better the AI-generated content will be.',
    targetElement: '[data-onboarding="tool-form"]',
    position: 'right',
  },
  {
    id: 'generate-button',
    title: 'Generate Your Content',
    description: 'Once you\'ve filled in the form, click "Generate" to create your content. The AI will process your requirements and create educational material in seconds.',
    targetElement: '[data-onboarding="generate-button"]',
    position: 'top',
    action: 'click',
  },
  {
    id: 'content-actions',
    title: 'Use Your Generated Content',
    description: 'After generation, you can copy, download, save, or export your content. You can also chat with the AI to modify the content to better suit your needs.',
    targetElement: '[data-onboarding="content-actions"]',
    position: 'left',
  },
];

export const useOnboarding = () => {
  const { user } = useAuth();
  const [isOnboardingActive, setIsOnboardingActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [showConclusion, setShowConclusion] = useState(false);

  // Check if user should see onboarding
  useEffect(() => {
    if (!user) return;

    const hasCompletedOnboarding = localStorage.getItem(`onboarding_completed_${user.id}`);
    const isFirstLogin = !localStorage.getItem(`first_visit_${user.id}`);

    if (isFirstLogin && !hasCompletedOnboarding) {
      // Mark as visited and start onboarding after a brief delay
      localStorage.setItem(`first_visit_${user.id}`, 'true');
      setTimeout(() => {
        setIsOnboardingActive(true);
      }, 1000);
    }
  }, [user]);

  const nextStep = () => {
    if (currentStep < ONBOARDING_STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      completeOnboarding();
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const skipOnboarding = () => {
    setIsOnboardingActive(false);
    if (user) {
      localStorage.setItem(`onboarding_completed_${user.id}`, 'true');
    }
  };

  const completeOnboarding = () => {
    setIsOnboardingActive(false);
    setShowConclusion(true);
    if (user) {
      localStorage.setItem(`onboarding_completed_${user.id}`, 'true');
    }
  };

  const closeConclusion = () => {
    setShowConclusion(false);
  };

  const startCreating = () => {
    setShowConclusion(false);
    // You can trigger opening a specific tool or focusing on the tools grid
  };

  const resetOnboarding = () => {
    if (user) {
      localStorage.removeItem(`onboarding_completed_${user.id}`);
      localStorage.removeItem(`first_visit_${user.id}`);
      setCurrentStep(0);
      setIsOnboardingActive(true);
      setShowConclusion(false);
    }
  };

  return {
    isOnboardingActive,
    currentStep,
    steps: ONBOARDING_STEPS,
    showConclusion,
    nextStep,
    previousStep,
    skipOnboarding,
    completeOnboarding,
    closeConclusion,
    startCreating,
    resetOnboarding,
  };
};