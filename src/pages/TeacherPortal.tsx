import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Users,
  BarChart3,
  Brain,
  Plus,
  Settings,
  FileText,
  Calendar,
} from "lucide-react";
import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/home/Footer";
import LoginModal from "@/components/auth/LoginModal";

const TeacherPortal = () => {
  const { user } = useAuth();
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    if (!user) {
      setShowLogin(true);
    }
  }, [user]);

  if (!user) {
    return (
      <div className="min-h-screen bg-background">
        <UniversalHeader onShowLogin={() => setShowLogin(true)} />
        <div className="flex items-center justify-center min-h-[80vh]">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <GraduationCap className="h-12 w-12 mx-auto mb-4 text-primary" />
              <CardTitle>Teacher Portal</CardTitle>
              <CardDescription>
                Sign in to access your teaching dashboard and course management
                tools
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={() => setShowLogin(true)} className="w-full">
                Sign In as Teacher
              </Button>
            </CardContent>
          </Card>
        </div>
        <Footer />
        <LoginModal
          isOpen={showLogin}
          onClose={() => setShowLogin(false)}
          redirectPath="/teacher"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <UniversalHeader onShowLogin={() => setShowLogin(true)} />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Teacher Dashboard
          </h1>
          <p className="text-muted-foreground text-lg">
            Manage your courses, track student progress, and leverage AI
            teaching tools.
          </p>
        </div>

        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-6 h-14">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="courses" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              My Courses
            </TabsTrigger>
            <TabsTrigger value="students" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Students
            </TabsTrigger>
            <TabsTrigger
              value="ai-assistant"
              className="flex items-center gap-2"
            >
              <Brain className="h-4 w-4" />
              AI Assistant
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="tools" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Tools
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Active Courses
                  </CardTitle>
                  <GraduationCap className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5</div>
                  <p className="text-xs text-muted-foreground">
                    Currently teaching
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Students
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">247</div>
                  <p className="text-xs text-muted-foreground">
                    Across all courses
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    AI Interactions
                  </CardTitle>
                  <Brain className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">156</div>
                  <p className="text-xs text-muted-foreground">This week</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Avg. Course Rating
                  </CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.8</div>
                  <p className="text-xs text-muted-foreground">Out of 5.0</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>At-Risk Students</CardTitle>
                  <CardDescription>
                    AI-identified students who may need additional support
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        name: "Sarah Chen",
                        course: "React Fundamentals",
                        risk: "High",
                        reason: "Low engagement",
                      },
                      {
                        name: "Mike Johnson",
                        course: "JavaScript Advanced",
                        risk: "Medium",
                        reason: "Missing assignments",
                      },
                      {
                        name: "Emma Wilson",
                        course: "Python Basics",
                        risk: "Medium",
                        reason: "Quiz performance",
                      },
                    ].map((student, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 border rounded-lg"
                      >
                        <div>
                          <h4 className="font-medium">{student.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {student.course}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {student.reason}
                          </p>
                        </div>
                        <Badge
                          variant={
                            student.risk === "High" ? "destructive" : "default"
                          }
                        >
                          {student.risk} Risk
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent AI Assistance</CardTitle>
                  <CardDescription>
                    AI-generated content and teaching support
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        type: "Lesson Plan",
                        title: "Advanced React Hooks",
                        time: "2 hours ago",
                      },
                      {
                        type: "Quiz",
                        title: "JavaScript ES6 Features",
                        time: "1 day ago",
                      },
                      {
                        type: "Grading",
                        title: "Assignment 3 - 24 submissions",
                        time: "2 days ago",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 border rounded-lg"
                      >
                        <div>
                          <h4 className="font-medium">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {item.type}
                          </p>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {item.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Course Management</h2>
              <Button className="flex items-center gap-2 my-btn">
                <Plus className="h-4 w-4" />
                Create New Course
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <Card
                  key={i}
                  className="group hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="w-full h-32 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg mb-4 flex items-center justify-center">
                      <GraduationCap className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">
                      React Masterclass {i}
                    </CardTitle>
                    <CardDescription>
                      Comprehensive React development course
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">Published</Badge>
                        <span className="text-sm text-muted-foreground">
                          45 students
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 my-btn">
                          Manage
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 hover:bg-gray-50 hover:text-[#2901b3]"
                        >
                          Analytics
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="students" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Student Management</CardTitle>
                <CardDescription>
                  Monitor student progress and engagement across all courses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Users className="h-16 w-16 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2">
                    Comprehensive Student Analytics
                  </h3>
                  <p className="text-muted-foreground">
                    View detailed student profiles, progress tracking, and
                    intervention recommendations
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ai-assistant" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  AI Teaching Assistant
                </CardTitle>
                <CardDescription>
                  Generate lesson plans, quizzes, and get teaching insights
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="text-center">
                      <FileText className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <h4 className="font-medium mb-1">Generate Lesson Plan</h4>
                      <p className="text-sm text-muted-foreground">
                        Create detailed lesson plans with AI
                      </p>
                    </div>
                  </Card>

                  <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="text-center">
                      <BarChart3 className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <h4 className="font-medium mb-1">Auto-Generate Quiz</h4>
                      <p className="text-sm text-muted-foreground">
                        Create quizzes from course content
                      </p>
                    </div>
                  </Card>

                  <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="text-center">
                      <Settings className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <h4 className="font-medium mb-1">Grade Assignments</h4>
                      <p className="text-sm text-muted-foreground">
                        AI-powered grading with feedback
                      </p>
                    </div>
                  </Card>

                  <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="text-center">
                      <Brain className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <h4 className="font-medium mb-1">Content Summaries</h4>
                      <p className="text-sm text-muted-foreground">
                        Generate summaries and flashcards
                      </p>
                    </div>
                  </Card>

                  <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="text-center">
                      <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <h4 className="font-medium mb-1">Student Insights</h4>
                      <p className="text-sm text-muted-foreground">
                        Predictive analytics for student success
                      </p>
                    </div>
                  </Card>

                  <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="text-center">
                      <Calendar className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <h4 className="font-medium mb-1">Course Planning</h4>
                      <p className="text-sm text-muted-foreground">
                        AI-assisted curriculum design
                      </p>
                    </div>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Teaching Analytics</CardTitle>
                <CardDescription>
                  Comprehensive insights into student performance and course
                  effectiveness
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <BarChart3 className="h-16 w-16 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2">
                    Advanced Analytics Dashboard
                  </h3>
                  <p className="text-muted-foreground">
                    Detailed performance metrics, engagement tracking, and
                    predictive insights
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tools" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Teaching Tools & Integrations</CardTitle>
                <CardDescription>
                  VR/AR labs, proctoring tools, and external integrations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium">VR/AR Laboratory</h4>
                    <p className="text-sm text-muted-foreground">
                      Create immersive learning experiences with WebXR
                      technology
                    </p>
                    <Button
                      variant="outline"
                      className="hover:bg-[#2901b3] transition-all duration-300"
                    >
                      Launch VR Lab
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium">Smart Proctoring</h4>
                    <p className="text-sm text-muted-foreground">
                      AI-powered exam monitoring and integrity verification
                    </p>
                    <Button
                      variant="outline"
                      className="hover:bg-[#2901b3] transition-all duration-300"
                    >
                      Configure Proctoring
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium">Blockchain Certificates</h4>
                    <p className="text-sm text-muted-foreground">
                      Issue tamper-proof digital certificates and badges
                    </p>
                    <Button
                      variant="outline"
                      className="hover:bg-[#2901b3] transition-all duration-300"
                    >
                      Manage Certificates
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium">LinkedIn Integration</h4>
                    <p className="text-sm text-muted-foreground">
                      Auto-post student achievements to LinkedIn profiles
                    </p>
                    <Button
                      variant="outline"
                      className="hover:bg-[#2901b3] transition-all duration-300"
                    >
                      Setup Integration
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />

      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        redirectPath="/teacher"
      />
    </div>
  );
};

export default TeacherPortal;
