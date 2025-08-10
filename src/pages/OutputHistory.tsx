import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Calendar,
  Download,
  Eye,
  Trash2,
  Loader2,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  getUserGeneratedContent,
  deleteGeneratedContent,
  GeneratedContent,
} from "@/utils/contentService";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

const OutputHistory = () => {
  const [history, setHistory] = useState<GeneratedContent[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      loadHistory();
    }
  }, [user]);

  const loadHistory = async () => {
    try {
      setLoading(true);
      const data = await getUserGeneratedContent();
      setHistory(data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load your content history",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      setDeleting(id);
      await deleteGeneratedContent(id);
      setHistory((prev) => prev.filter((item) => item.id !== id));
      toast({
        title: "Success",
        description: "Content deleted successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete content",
        variant: "destructive",
      });
    } finally {
      setDeleting(null);
    }
  };

  const downloadContent = (content: GeneratedContent) => {
    const blob = new Blob([content.content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${content.title || content.tool_name}_${new Date(
      content.created_at
    ).toLocaleDateString()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getStatusColor = (status: string) => {
    return "bg-green-100 text-green-800";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading your content...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
                Back to Dashboard
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Output History
              </h1>
              <p className="text-gray-600">
                View all your generated content and past requests
              </p>
            </div>
          </div>
        </div>

        {/* History List */}
        <div className="space-y-4">
          {history.map((item) => (
            <Card key={item.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      {item.tool_name}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {item.title ||
                        item.topic ||
                        item.subject ||
                        "Generated Content"}
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={getStatusColor("completed")}>
                      completed
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(item.created_at).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.content.substring(0, 200)}...
                </p>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      // Create modal or expand view for full content
                      toast({
                        title: "Content Preview",
                        description:
                          "Full content viewing will be implemented soon",
                      });
                    }}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => downloadContent(item)}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(item.id)}
                    disabled={deleting === item.id}
                    className="text-red-600 hover:text-red-700"
                  >
                    {deleting === item.id ? (
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    ) : (
                      <Trash2 className="h-4 w-4 mr-2" />
                    )}
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {history.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No content history yet
            </h3>
            <p className="text-gray-500 mb-4">
              Start using our AI tools to see your generated content here.
            </p>
            <Link to="/easyteach-app">
              <Button>Create Your First Content</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default OutputHistory;
