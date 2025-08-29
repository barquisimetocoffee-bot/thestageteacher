import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { X, ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { WalkthroughStep } from '@/hooks/useSimpleWalkthrough';

interface SimpleWalkthroughProps {
  isOpen: boolean;
  steps: WalkthroughStep[];
  currentStep: number;
  onNext: () => void;
  onPrevious: () => void;
  onSkip: () => void;
  onStepAction?: (stepId: string) => void;
}

const SimpleWalkthrough: React.FC<SimpleWalkthroughProps> = ({
  isOpen,
  steps,
  currentStep,
  onNext,
  onPrevious,
  onSkip,
  onStepAction,
}) => {
  const [targetElement, setTargetElement] = useState<HTMLElement | null>(null);
  const [cardPosition, setCardPosition] = useState({ top: 0, left: 0 });

  const currentStepData = steps[currentStep];

  useEffect(() => {
    if (!isOpen || !currentStepData) return;

    const findElement = () => {
      if (!currentStepData.targetElement) {
        // Center position for welcome step
        setCardPosition({
          top: window.innerHeight / 2 - 150,
          left: window.innerWidth / 2 - 200,
        });
        setTargetElement(null);
        return;
      }

      const element = document.querySelector(currentStepData.targetElement) as HTMLElement;
      if (element) {
        setTargetElement(element);
        
        // Scroll element into view
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center',
          inline: 'nearest'
        });

        // Calculate card position
        setTimeout(() => {
          const rect = element.getBoundingClientRect();
          let top = 0;
          let left = rect.left + (rect.width - 400) / 2;

          if (currentStepData.position === 'top') {
            top = rect.top - 200;
          } else if (currentStepData.position === 'bottom') {
            top = rect.bottom + 30;
          } else {
            top = window.innerHeight / 2 - 150;
            left = window.innerWidth / 2 - 200;
          }

          // Keep card within viewport with better margins
          const margin = 30;
          top = Math.max(margin, Math.min(top, window.innerHeight - 350));
          left = Math.max(margin, Math.min(left, window.innerWidth - 430));

          setCardPosition({ top, left });
        }, 300);
      }
    };

    // Try to find element immediately, then retry if not found
    findElement();
    const retryTimer = setTimeout(findElement, 500);
    
    return () => clearTimeout(retryTimer);
  }, [isOpen, currentStep, currentStepData]);

  if (!isOpen || !currentStepData) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[999999]">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40"
          onClick={onSkip}
        />

        {/* Highlight target element without blur */}
        {targetElement && (
          <>
            {/* Clear spotlight for highlighted element */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed pointer-events-none z-[999997]"
              style={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `radial-gradient(circle at ${
                  targetElement.getBoundingClientRect().left + targetElement.getBoundingClientRect().width / 2
                }px ${
                  targetElement.getBoundingClientRect().top + targetElement.getBoundingClientRect().height / 2
                }px, transparent ${Math.max(targetElement.getBoundingClientRect().width, targetElement.getBoundingClientRect().height) / 2 + 20}px, rgba(0, 0, 0, 0.4) ${Math.max(targetElement.getBoundingClientRect().width, targetElement.getBoundingClientRect().height) / 2 + 25}px)`,
              }}
            />
            
            {/* Highlight border */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed pointer-events-none z-[999998]"
              style={{
                top: targetElement.getBoundingClientRect().top - 4,
                left: targetElement.getBoundingClientRect().left - 4,
                width: targetElement.getBoundingClientRect().width + 8,
                height: targetElement.getBoundingClientRect().height + 8,
                borderRadius: '8px',
                border: '3px solid hsl(var(--primary))',
                boxShadow: '0 0 20px hsl(var(--primary) / 0.3)',
              }}
            />
          </>
        )}

        {/* Walkthrough Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed z-[1000000]"
          style={{
            top: cardPosition.top,
            left: cardPosition.left,
            width: '400px',
          }}
        >
          <Card className="border-2 border-primary/20 shadow-2xl">
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
                  className="h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Content */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">
                  {currentStepData.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {currentStepData.description}
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between">
                <div>
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
                  >
                    Skip Tour
                  </Button>
                  
                  <Button
                    size="sm"
                    onClick={() => {
                      if (currentStepData.id === 'try-tool' && onStepAction) {
                        onStepAction(currentStepData.id);
                      } else {
                        onNext();
                      }
                    }}
                    className="flex items-center space-x-1"
                  >
                    <span>
                      {currentStep === steps.length - 1 ? 'Get Started' : 'Next'}
                    </span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-4 w-full bg-muted rounded-full h-2">
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

export default SimpleWalkthrough;
