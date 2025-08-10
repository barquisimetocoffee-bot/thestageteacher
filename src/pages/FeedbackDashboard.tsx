import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, ThumbsUp, ThumbsDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getUserFeedback } from "@/utils/feedbackService";
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from "@/components/ui/skeleton";

interface FeedbackData {
  id: string;
  tool_name: string;
  tool_appreciation: number;
  response_quality: number;
  missing_fields: string | null;
  additional_feedback: string | null;
  would_recommend: boolean;
  created_at: string;
}

const FeedbackDashboard = () => {
  const [feedback, setFeedback] = useState<FeedbackData[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    loadFeedback();
  }, []);

  const loadFeedback = async () => {
    try {
      const data = await getUserFeedback();
      setFeedback(data);
    } catch (error) {
      console.error("Error loading feedback:", error);
      toast({
        title: "Error",
        description: "Failed to load feedback data. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
        <span className="ml-2 text-sm text-muted-foreground">({rating}/5)</span>
      </div>
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <Skeleton className="h-8 w-48 mb-2" />
            <Skeleton className="h-4 w-64" />
          </div>
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-32" />
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <Skeleton key={i} className="h-12 w-full" />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <Button
            variant="ghost"
            className="mb-4 bg-white hover:text-black hover:bg-gray-200"
            onClick={() => navigate("/easyteach-app")}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Feedback Dashboard
          </h1>
          <p className="text-gray-600">
            View and analyze user feedback for teaching tools
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-blue-600">
                {feedback.length}
              </div>
              <div className="text-sm text-muted-foreground">
                Total Feedback
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-green-600">
                {feedback.length > 0
                  ? (
                      feedback.reduce(
                        (sum, f) => sum + f.tool_appreciation,
                        0
                      ) / feedback.length
                    ).toFixed(1)
                  : "0"}
              </div>
              <div className="text-sm text-muted-foreground">
                Avg Tool Rating
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-purple-600">
                {feedback.length > 0
                  ? (
                      feedback.reduce((sum, f) => sum + f.response_quality, 0) /
                      feedback.length
                    ).toFixed(1)
                  : "0"}
              </div>
              <div className="text-sm text-muted-foreground">
                Avg Quality Rating
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-orange-600">
                {feedback.length > 0
                  ? Math.round(
                      (feedback.filter((f) => f.would_recommend).length /
                        feedback.length) *
                        100
                    )
                  : 0}
                %
              </div>
              <div className="text-sm text-muted-foreground">
                Would Recommend
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Feedback Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Feedback Responses</CardTitle>
            <CardDescription>
              Detailed view of all feedback submissions
            </CardDescription>
          </CardHeader>
          <CardContent>
            {feedback.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">
                  No feedback data available yet.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Feedback will appear here after users submit satisfaction
                  surveys.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Tool Name</TableHead>
                      <TableHead>Tool Rating</TableHead>
                      <TableHead>Quality Rating</TableHead>
                      <TableHead>Recommend</TableHead>
                      <TableHead>Missing Fields</TableHead>
                      <TableHead>Additional Feedback</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {feedback.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">
                          <Badge variant="outline">{item.tool_name}</Badge>
                        </TableCell>
                        <TableCell>
                          {renderStars(item.tool_appreciation)}
                        </TableCell>
                        <TableCell>
                          {renderStars(item.response_quality)}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            {item.would_recommend ? (
                              <>
                                <ThumbsUp className="h-4 w-4 text-green-600 mr-1" />
                                <span className="text-green-600">Yes</span>
                              </>
                            ) : (
                              <>
                                <ThumbsDown className="h-4 w-4 text-red-600 mr-1" />
                                <span className="text-red-600">No</span>
                              </>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          {item.missing_fields ? (
                            <div className="max-w-xs">
                              <p
                                className="text-sm text-muted-foreground truncate"
                                title={item.missing_fields}
                              >
                                {item.missing_fields}
                              </p>
                            </div>
                          ) : (
                            <span className="text-muted-foreground">-</span>
                          )}
                        </TableCell>
                        <TableCell>
                          {item.additional_feedback ? (
                            <div className="max-w-xs">
                              <p
                                className="text-sm text-muted-foreground truncate"
                                title={item.additional_feedback}
                              >
                                {item.additional_feedback}
                              </p>
                            </div>
                          ) : (
                            <span className="text-muted-foreground">-</span>
                          )}
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {formatDate(item.created_at)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FeedbackDashboard;
