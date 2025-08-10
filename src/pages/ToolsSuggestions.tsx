import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, Send, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const ToolsSuggestions = () => {
  const [toolName, setToolName] = useState("");
  const [description, setDescription] = useState("");
  const [reason, setReason] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!toolName || !description || !reason) return;

    // Here you would typically submit to a backend
    console.log("Tool suggestion submitted:", {
      toolName,
      description,
      reason,
    });
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setToolName("");
      setDescription("");
      setReason("");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link to="/easyteach-app">
              <Button
                variant="outline"
                size="sm"
                className="bg-white hover:text-black hover:bg-gray-50"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Tool Suggestions
              </h1>
              <p className="text-gray-600">
                Help us build the perfect tool for educators
              </p>
            </div>
          </div>
        </div>

        {/* Suggestion Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Lightbulb className="h-5 w-5 text-yellow-500" />
              <span>Suggest a New Tool</span>
            </CardTitle>
            <CardDescription>
              Have an idea for a tool that would make your teaching life easier?
              We'd love to hear it!
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  Thank you for your suggestion!
                </h3>
                <p className="text-gray-600">
                  We'll review your idea and consider it for future development.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="toolName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Tool Name *
                  </label>
                  <Input
                    id="toolName"
                    value={toolName}
                    onChange={(e) => setToolName(e.target.value)}
                    placeholder="e.g., Field Trip Permission Generator"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Tool Description *
                  </label>
                  <Textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe what this tool would do and how it would work..."
                    rows={4}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="reason"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Why would this tool be helpful? *
                  </label>
                  <Textarea
                    id="reason"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    placeholder="Explain how this tool would save time, improve teaching, or solve a specific problem..."
                    rows={4}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full my-btn py-6"
                  disabled={!toolName || !description || !reason}
                >
                  <Send className="h-4 w-4 mr-2" />
                  Submit Suggestion
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        {/* Popular Suggestions */}
        <Card>
          <CardHeader>
            <CardTitle>Popular Suggestions</CardTitle>
            <CardDescription>
              See what other educators are asking for
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900">
                  Automated Grading Assistant
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                  A tool that can grade short answer questions and provide
                  feedback
                </p>
                <div className="mt-2">
                  <span className="text-xs text-gray-500">👍 23 votes</span>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900">
                  Seating Chart Optimizer
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                  Generate optimal seating arrangements based on student needs
                  and behaviors
                </p>
                <div className="mt-2">
                  <span className="text-xs text-gray-500">👍 18 votes</span>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900">
                  Parent-Teacher Conference Scheduler
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                  Automatically coordinate and schedule parent-teacher meetings
                </p>
                <div className="mt-2">
                  <span className="text-xs text-gray-500">👍 15 votes</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ToolsSuggestions;
