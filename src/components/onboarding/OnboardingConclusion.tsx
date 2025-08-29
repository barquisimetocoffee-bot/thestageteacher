import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Sparkles, Rocket, Heart } from 'lucide-react';

interface OnboardingConclusionProps {
  isOpen: boolean;
  onClose: () => void;
  onStartCreating: () => void;
}

const OnboardingConclusion: React.FC<OnboardingConclusionProps> = ({
  isOpen,
  onClose,
  onStartCreating,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Conclusion Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 50 }}
        className="relative z-10 max-w-lg mx-4"
      >
        <Card className="bg-white border-2 border-primary/20 shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-primary via-secondary to-accent p-6 text-white text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
              className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Sparkles className="h-8 w-8" />
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-bold mb-2"
            >
              Congratulations! 🎉
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white/90"
            >
              You've completed the Pencil onboarding tour
            </motion.p>
          </div>

          <CardContent className="p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center mb-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                You're all set to create amazing content!
              </h3>
              <p className="text-gray-600">
                You now know how to navigate the dashboard, find tools, and create 
                educational content with AI assistance. Time to put your new skills to work!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-4 mb-6"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Sparkles className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-sm text-gray-600">50+ AI Tools</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Rocket className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-sm text-gray-600">Fast Creation</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Heart className="h-6 w-6 text-purple-600" />
                </div>
                <p className="text-sm text-gray-600">Made for Teachers</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex space-x-3"
            >
              <Button
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                Explore Later
              </Button>
              <Button
                onClick={onStartCreating}
                className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
              >
                Start Creating
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center text-xs text-gray-500 mt-4"
            >
              Need help? Check the AI Assistant tab for personalized guidance
            </motion.p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default OnboardingConclusion;