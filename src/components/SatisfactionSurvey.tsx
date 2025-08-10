
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star, ThumbsUp, ThumbsDown, MessageSquare, X, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { submitFeedback, type FeedbackData } from "@/utils/feedbackService";

interface SatisfactionSurveyProps {
  isOpen: boolean;
  onClose: () => void;
  toolName: string;
  onSubmit: (feedback: SurveyFeedback) => void;
}

interface SurveyFeedback {
  toolAppreciation: number;
  responseQuality: number;
  missingFields: string;
  additionalFeedback: string;
  wouldRecommend: boolean;
}

const SatisfactionSurvey = ({ isOpen, onClose, toolName, onSubmit }: SatisfactionSurveyProps) => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<SurveyFeedback>({
    toolAppreciation: 0,
    responseQuality: 0,
    missingFields: '',
    additionalFeedback: '',
    wouldRecommend: true
  });

  const handleStarRating = (category: 'toolAppreciation' | 'responseQuality', rating: number) => {
    setFeedback(prev => ({
      ...prev,
      [category]: rating
    }));
  };

  const handleSubmit = async () => {
    if (feedback.toolAppreciation === 0 || feedback.responseQuality === 0) {
      toast({
        title: t("feedback.completeRatings"),
        description: t("feedback.ratingsRequired"),
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const feedbackData: FeedbackData = {
        toolName,
        toolAppreciation: feedback.toolAppreciation,
        responseQuality: feedback.responseQuality,
        missingFields: feedback.missingFields,
        additionalFeedback: feedback.additionalFeedback,
        wouldRecommend: feedback.wouldRecommend
      };

      await submitFeedback(feedbackData);
      
      onSubmit(feedback);
      toast({
        title: t("feedback.thankYou"),
        description: t("feedback.thanksDescription"),
      });
      onClose();
    } catch (error) {
      console.error('Failed to submit feedback:', error);
      toast({
        title: t("feedback.errorSubmitting"),
        description: t("feedback.errorMessage"),
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const StarRating = ({ rating, onRate, label }: { rating: number; onRate: (rating: number) => void; label: string }) => (
    <div className="space-y-2">
      <Label className="text-sm font-medium">{label}</Label>
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onRate(star)}
            className="transition-colors hover:scale-110"
            disabled={isSubmitting}
          >
            <Star
              className={`h-6 w-6 ${
                star <= rating
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300 hover:text-yellow-400'
              }`}
            />
          </button>
        ))}
      </div>
      <p className="text-xs text-gray-500">
        {rating === 0 ? t("feedback.clickToRate") : t("feedback.starsRating", { rating })}
      </p>
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-bold flex items-center space-x-2">
              <MessageSquare className="h-5 w-5 text-blue-600" />
              <span>{t("feedback.title", { toolName })}</span>
            </DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose} disabled={isSubmitting}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-4">
              <p className="text-sm text-blue-800">
                {t("feedback.description")}
              </p>
            </CardContent>
          </Card>

          {/* Tool Appreciation Rating */}
          <div className="space-y-3">
            <StarRating
              rating={feedback.toolAppreciation}
              onRate={(rating) => handleStarRating('toolAppreciation', rating)}
              label={t("feedback.toolAppreciation")}
            />
          </div>

          {/* Response Quality Rating */}
          <div className="space-y-3">
            <StarRating
              rating={feedback.responseQuality}
              onRate={(rating) => handleStarRating('responseQuality', rating)}
              label={t("feedback.responseQuality")}
            />
          </div>

          {/* Missing Fields Feedback */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">
              {t("feedback.missingFields")}
            </Label>
            <Textarea
              value={feedback.missingFields}
              onChange={(e) => setFeedback(prev => ({ ...prev, missingFields: e.target.value }))}
              placeholder={t("feedback.missingFieldsPlaceholder")}
              className="min-h-[80px]"
              disabled={isSubmitting}
            />
          </div>

          {/* Additional Feedback */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">
              {t("feedback.additionalFeedback")}
            </Label>
            <Textarea
              value={feedback.additionalFeedback}
              onChange={(e) => setFeedback(prev => ({ ...prev, additionalFeedback: e.target.value }))}
              placeholder={t("feedback.additionalFeedbackPlaceholder")}
              className="min-h-[80px]"
              disabled={isSubmitting}
            />
          </div>

          {/* Recommendation */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">
              {t("feedback.wouldRecommend")}
            </Label>
            <div className="flex space-x-4">
              <Button
                variant={feedback.wouldRecommend ? "default" : "outline"}
                onClick={() => setFeedback(prev => ({ ...prev, wouldRecommend: true }))}
                className="flex items-center space-x-2"
                disabled={isSubmitting}
              >
                <ThumbsUp className="h-4 w-4" />
                <span>{t("feedback.yesRecommend")}</span>
              </Button>
              <Button
                variant={!feedback.wouldRecommend ? "default" : "outline"}
                onClick={() => setFeedback(prev => ({ ...prev, wouldRecommend: false }))}
                className="flex items-center space-x-2"
                disabled={isSubmitting}
              >
                <ThumbsDown className="h-4 w-4" />
                <span>{t("feedback.noRecommend")}</span>
              </Button>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-3 pt-4 border-t">
            <Button variant="outline" onClick={onClose} disabled={isSubmitting}>
              {t("feedback.skipForNow")}
            </Button>
            <Button onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t("feedback.submitting")}
                </>
              ) : (
                t("feedback.submitFeedback")
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SatisfactionSurvey;
