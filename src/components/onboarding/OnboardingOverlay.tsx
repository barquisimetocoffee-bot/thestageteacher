import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { X, ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

interface OnboardingOverlayProps {
  isOpen: boolean;
  steps: OnboardingStep[];
  currentStep: number;
  onNext: () => void;
  onPrevious: () => void;
  onSkip: () => void;
  onClose: () => void;
  onStepAction?: (stepId: string) => void;
}

const OnboardingOverlay: React.FC<OnboardingOverlayProps> = ({
  isOpen,
  steps,
  currentStep,
  onNext,
  onPrevious,
  onSkip,
  onClose,
  onStepAction,
}) => {
  const [highlightElement, setHighlightElement] = useState<HTMLElement | null>(null);
  const [cardPosition, setCardPosition] = useState({ top: 0, left: 0 });

  const currentStepData = steps[currentStep];

  useEffect(() => {
    if (!isOpen || !currentStepData?.targetElement) return;

    const element = document.querySelector(currentStepData.targetElement) as HTMLElement;
    if (element) {
      setHighlightElement(element);
      
      // Calculate card position based on target element and desired position
      const rect = element.getBoundingClientRect();
      const cardWidth = 350;
      const cardHeight = 200;
      const offset = 20;

      let top = 0;
      let left = 0;

      switch (currentStepData.position) {
        case 'top':
          top = rect.top - cardHeight - offset;
          left = rect.left + (rect.width - cardWidth) / 2;
          break;
        case 'bottom':
          top = rect.bottom + offset;
          left = rect.left + (rect.width - cardWidth) / 2;
          break;
        case 'left':
          top = rect.top + (rect.height - cardHeight) / 2;
          left = rect.left - cardWidth - offset;
          break;
        case 'right':
          top = rect.top + (rect.height - cardHeight) / 2;
          left = rect.right + offset;
          break;
        case 'center':
          top = window.innerHeight / 2 - cardHeight / 2;
          left = window.innerWidth / 2 - cardWidth / 2;
          break;
      }

      // Ensure card stays within viewport
      top = Math.max(20, Math.min(top, window.innerHeight - cardHeight - 20));
      left = Math.max(20, Math.min(left, window.innerWidth - cardWidth - 20));

      setCardPosition({ top, left });

      // Scroll element into view
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [isOpen, currentStep, currentStepData]);

  const handleStepAction = () => {
    if (currentStepData?.action === 'click' && highlightElement) {
      highlightElement.click();
    }
    if (onStepAction) {
      onStepAction(currentStepData.id);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999]">
        {/* Overlay with blur and darkening */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onSkip}
        />

        {/* Highlight spotlight for target element */}
        {highlightElement && currentStepData?.showOverlay !== false && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed pointer-events-none"
            style={{
              top: highlightElement.getBoundingClientRect().top - 8,
              left: highlightElement.getBoundingClientRect().left - 8,
              width: highlightElement.getBoundingClientRect().width + 16,
              height: highlightElement.getBoundingClientRect().height + 16,
              boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.5)',
              borderRadius: '12px',
              border: '3px solid #3b82f6',
            }}
          />
        )}

        {/* Instruction Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="fixed z-[10000]"
          style={{
            top: cardPosition.top,
            left: cardPosition.left,
            width: '350px',
          }}
        >
          <Card className="bg-white border-2 border-primary/20 shadow-2xl">
            <CardContent className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    Step {currentStep + 1} of {steps.length}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onSkip}
                  className="h-8 w-8 p-0 hover:bg-gray-100"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Content */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {currentStepData.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {currentStepData.description}
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  {currentStep > 0 && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={onPrevious}
                      className="flex items-center space-x-1"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      <span>Back</span>
                    </Button>
                  )}
                </div>

                <div className="flex space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={onSkip}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    Skip Tour
                  </Button>
                  
                  {currentStepData.action ? (
                    <Button
                      size="sm"
                      onClick={() => {
                        handleStepAction();
                        onNext();
                      }}
                      className="bg-primary hover:bg-primary/90 flex items-center space-x-1"
                    >
                      <span>
                        {currentStepData.action === 'click' ? 'Click' : 
                         currentStepData.action === 'input' ? 'Try it' : 'Continue'}
                      </span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      onClick={onNext}
                      className="bg-primary hover:bg-primary/90 flex items-center space-x-1"
                    >
                      <span>
                        {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default OnboardingOverlay;