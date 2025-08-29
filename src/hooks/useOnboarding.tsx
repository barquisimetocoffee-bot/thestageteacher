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
    showOverlay: true,
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
    targetElement: '[data-tool-id="1"]',
    position: 'top',
    action: 'click',
  },
];

export const useOnboarding = () => {
  const { user } = useAuth();
  const [isOnboardingActive, setIsOnboardingActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [showConclusion, setShowConclusion] = useState(false);

  // Check if user should see onboarding or if walkthrough was triggered
  useEffect(() => {
    if (!user) return;

    const hasCompletedOnboarding = localStorage.getItem(`onboarding_completed_${user.id}`);
    const isFirstLogin = !localStorage.getItem(`first_visit_${user.id}`);
    const shouldStartWalkthrough = sessionStorage.getItem('startWalkthrough');

    // Check if walkthrough was triggered from another page
    if (shouldStartWalkthrough === 'true') {
      sessionStorage.removeItem('startWalkthrough');
      setTimeout(() => {
        setIsOnboardingActive(true);
        setCurrentStep(0);
      }, 1000);
      return;
    }

    // Normal first-time onboarding logic
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
      setShowConclusion(false);
      // Immediately start the onboarding
      setIsOnboardingActive(true);
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