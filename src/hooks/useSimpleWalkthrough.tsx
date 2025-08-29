import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';

export interface WalkthroughStep {
  id: string;
  title: string;
  description: string;
  targetElement?: string;
  position: 'top' | 'bottom' | 'center';
}

const WALKTHROUGH_STEPS: WalkthroughStep[] = [
  {
    id: 'welcome',
    title: 'Welcome to Pencil! ✏️',
    description: 'Your AI-powered teaching assistant. Let me show you around in just 6 quick steps!',
    position: 'center',
  },
  {
    id: 'search',
    title: 'Search for Tools',
    description: 'Use the search bar to quickly find the perfect tool for your needs.',
    targetElement: '[data-onboarding="search"]',
    position: 'bottom',
  },
  {
    id: 'categories',
    title: 'Browse by Category',
    description: 'Filter tools by category to explore different types of educational content.',
    targetElement: '[data-onboarding="categories"]',
    position: 'bottom',
  },
  {
    id: 'try-tool',
    title: 'Try a Tool',
    description: 'Click on any tool to start creating AI-powered educational content instantly!',
    targetElement: '[data-tool-id="1"]',
    position: 'top',
  },
  {
    id: 'sidebar',
    title: 'Navigation & Features',
    description: 'The sidebar gives you access to different sections: Tools, History, Profile settings, and more.',
    targetElement: '[data-onboarding="sidebar"]',
    position: 'center',
  },
  {
    id: 'content-actions',
    title: 'Save Your Work',
    description: 'After generating content, use these buttons to copy, download, or save your educational materials.',
    targetElement: '[data-onboarding="content-actions"]',
    position: 'top',
  },
];

export const useSimpleWalkthrough = () => {
  const { user } = useAuth();
  const [isActive, setIsActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (!user) return;

    const hasCompletedWalkthrough = localStorage.getItem(`walkthrough_completed_${user.id}`);
    const shouldStartWalkthrough = sessionStorage.getItem('startWalkthrough');
    const isFirstVisit = !localStorage.getItem(`first_visit_${user.id}`);

    if (shouldStartWalkthrough === 'true') {
      sessionStorage.removeItem('startWalkthrough');
      setTimeout(() => {
        setIsActive(true);
        setCurrentStep(0);
      }, 1000);
      return;
    }

    if (isFirstVisit && !hasCompletedWalkthrough) {
      localStorage.setItem(`first_visit_${user.id}`, 'true');
      setTimeout(() => {
        setIsActive(true);
      }, 1500);
    }
  }, [user]);

  const nextStep = () => {
    if (currentStep < WALKTHROUGH_STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      complete();
    }
  };

  const skipToStep = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const skip = () => {
    setIsActive(false);
    if (user) {
      localStorage.setItem(`walkthrough_completed_${user.id}`, 'true');
    }
  };

  const complete = () => {
    setIsActive(false);
    if (user) {
      localStorage.setItem(`walkthrough_completed_${user.id}`, 'true');
    }
  };

  const reset = () => {
    if (user) {
      localStorage.removeItem(`walkthrough_completed_${user.id}`);
      localStorage.removeItem(`first_visit_${user.id}`);
      setCurrentStep(0);
      setIsActive(true);
    }
  };

  return {
    isActive,
    currentStep,
    steps: WALKTHROUGH_STEPS,
    nextStep,
    previousStep,
    skip,
    complete,
    reset,
    skipToStep,
  };
};