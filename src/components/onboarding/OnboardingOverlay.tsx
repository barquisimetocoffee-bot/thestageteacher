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
    if (!isOpen) return;

    let cancelled = false;
    let retryTimer: number | null = null;

    const getBestElement = (selector: string): HTMLElement | null => {
      const nodeList = Array.from(document.querySelectorAll(selector)) as HTMLElement[];
      if (nodeList.length === 0) return null;
      // Prefer the last match (often the inner/actual control if wrappers duplicate attributes)
      const visible = nodeList.filter((el) => {
        const r = el.getBoundingClientRect();
        return r.width > 0 && r.height > 0;
      });
      return (visible[visible.length - 1] || nodeList[nodeList.length - 1]) ?? null;
    };

    const waitForElement = (selector: string, timeout = 2500): Promise<HTMLElement | null> => {
      return new Promise((resolve) => {
        const start = performance.now();
        const tryFind = () => {
          if (cancelled) return resolve(null);
          const el = getBestElement(selector);
          if (el) return resolve(el);
          if (performance.now() - start > timeout) return resolve(null);
          retryTimer = window.setTimeout(tryFind, 100);
        };
        tryFind();
      });
    };

    const computeAndSetCardPosition = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      const cardWidth = 350;
      const cardHeight = 200;
      const offset = 20;

      let top = 0;
      let left = 0;

      switch (currentStepData?.position) {
        case 'top':
          top = rect.top - cardHeight - offset;
          left = rect.left + (rect.width - cardWidth) / 2;
          if (currentStepData?.id === 'tools-grid') {
            top = rect.top - cardHeight - offset - 200; // much higher popup
          }
          break;
        case 'bottom':
          top = rect.bottom + offset;
          left = rect.left + (rect.width - cardWidth) / 2;
          if (currentStepData?.id === 'categories') {
            top = rect.bottom + offset - 10; // slightly lower than before (was -30)
          }
          break;
        case 'left':
          top = rect.top + (rect.height - cardHeight) / 2;
          left = rect.left - cardWidth - offset;
          break;
        case 'right':
          top = rect.top + (rect.height - cardHeight) / 2;
          left = rect.right + offset;
          if (currentStepData?.id === 'sidebar') {
            top = rect.top + (rect.height - cardHeight) / 2 - 100;
          }
          break;
        case 'center':
        default:
          top = window.innerHeight / 2 - cardHeight / 2;
          left = window.innerWidth / 2 - cardWidth / 2;
          break;
      }

      // clamp to viewport
      top = Math.max(20, Math.min(top, window.innerHeight - cardHeight - 20));
      left = Math.max(20, Math.min(left, window.innerWidth - cardWidth - 20));
      setCardPosition({ top, left });
    };

    const resolveStep = async () => {
      // Reset while resolving
      setHighlightElement(null);

      const selector = currentStepData?.targetElement;
      if (!selector) {
        // Centered intro step
        setCardPosition({
          top: window.innerHeight / 2 - 100,
          left: window.innerWidth / 2 - 175,
        });
        return;
      }

      const el = getBestElement(selector) || (await waitForElement(selector));
      if (cancelled) return;
      if (el) {
        setHighlightElement(el);
        // Scroll into view with special handling
        if (currentStepData?.id === 'tools-grid') {
          el.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
        } else if (currentStepData?.id === 'categories') {
          el.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
        } else if (currentStepData?.id === 'select-tool') {
          el.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
        } else {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        computeAndSetCardPosition(el);
      }
    };

    resolveStep();

    return () => {
      cancelled = true;
      if (retryTimer) window.clearTimeout(retryTimer);
    };
  }, [isOpen, currentStep, currentStepData]);

  const handleStepAction = async () => {
    if (currentStepData?.action === 'click' && highlightElement) {
      highlightElement.click();
    }

    // Wait for next step's target (e.g., modal content) before advancing
    const nextStep = steps[currentStep + 1];
    const nextSelector = nextStep?.waitForElement || nextStep?.targetElement;

    if (nextSelector) {
      // Reuse lightweight waiter defined in effect scope by querying until available
      const start = performance.now();
      const tryAdvance = () => {
        const el = document.querySelector(nextSelector) as HTMLElement | null;
        if (el) {
          onNext();
          return;
        }
        if (performance.now() - start > 2500) {
          onNext(); // fallback
          return;
        }
        requestAnimationFrame(tryAdvance);
      };
      tryAdvance();
    } else {
      onNext();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[99999]">
        {/* Overlay with blur and darkening - with cutout for highlighted element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 pointer-events-auto"
          onClick={onSkip}
          style={{
            background: highlightElement && currentStepData?.showOverlay !== false
              ? currentStepData.id === 'sidebar'
                ? `linear-gradient(to right, transparent 0%, transparent 280px, rgba(0, 0, 0, 0.4) 280px, rgba(0, 0, 0, 0.4) 100%)`
                : currentStepData.id === 'tools-grid'
                ? (() => {
                    const r = highlightElement.getBoundingClientRect();
                    const cx = r.left + r.width / 2;
                    const cy = r.top + r.height / 2;
                    const radius = Math.max(r.width, r.height) / 2 + 60; // bigger transparent area
                    return `radial-gradient(circle at ${cx}px ${cy}px, transparent ${radius}px, rgba(0, 0, 0, 0.15) ${radius + 5}px)`;
                  })()
                : (() => {
                    const r = highlightElement.getBoundingClientRect();
                    const cx = r.left + r.width / 2;
                    const cy = r.top + r.height / 2;
                    const radius = Math.max(r.width, r.height) / 2 + 20;
                    return `radial-gradient(circle at ${cx}px ${cy}px, transparent ${radius}px, rgba(0, 0, 0, 0.4) ${radius + 5}px)`;
                  })()
              : 'rgba(0, 0, 0, 0.4)'
          }}
        />

        {/* Highlight border for target element */}
        {highlightElement && currentStepData?.showOverlay !== false && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed pointer-events-none z-[99998]"
            style={{
              top: highlightElement.getBoundingClientRect().top - 4,
              left: highlightElement.getBoundingClientRect().left - 4,
              width: highlightElement.getBoundingClientRect().width + 8,
              height: highlightElement.getBoundingClientRect().height + 8,
              borderRadius: '12px',
              border: '3px solid #3b82f6',
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)'
            }}
          />
        )}

        {/* Instruction Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="fixed z-[100000]"
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