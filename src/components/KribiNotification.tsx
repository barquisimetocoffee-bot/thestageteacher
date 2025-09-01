import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const KribiNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const location = useLocation();

  // Define which pages should show the notification
  const allowedPages = [
    '/', // Homepage
    '/pencil', // Pencil page
    '/lms', // LMS page
    '/solutions/primary-schools',
    '/solutions/secondary-schools',
    '/solutions/universities',
    '/solutions/independent-schools',
    '/solutions/admissions',
    '/solutions/general-reports',
    '/solutions/hr-payroll',
    '/solutions/finance',
    '/solutions/communication'
  ];

  const shouldShowOnCurrentPage = allowedPages.includes(location.pathname);

  useEffect(() => {
    // Check if user has already dismissed this notification
    const dismissed = localStorage.getItem('kribi-notification-dismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    // Show notification after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('kribi-notification-dismissed', 'true');
  };

  if (isDismissed || !isVisible || !shouldShowOnCurrentPage) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-in slide-in-from-bottom-2 duration-300">
      <Card className="w-80 shadow-lg border-primary/20 bg-gradient-to-br from-background via-background to-primary/5">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">
                    Meet Kribi, your AI Assistant
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Available for free plans and unlimited use! Normally exclusive to Pencil Pro subscribers. 
                    <span className="text-primary font-medium"> Try it right now!</span>
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleDismiss}
                  className="h-6 w-6 p-0 hover:bg-primary/10 -mt-1 -mr-1"
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default KribiNotification;