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
  BookOpen,
  Brain,
  Trophy,
  Play,
  MessageCircle,
  TrendingUp,
} from "lucide-react";
import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/home/Footer";
import LoginModal from "@/components/auth/LoginModal";

const StudentPortal = () => {
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
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-primary" />
              <CardTitle>Student Portal</CardTitle>
              <CardDescription>
                Sign in to access your personalized learning dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={() => setShowLogin(true)} className="w-full">
                Sign In as Student
              </Button>
            </CardContent>
          </Card>
        </div>
        <Footer />
        <LoginModal
          isOpen={showLogin}
          onClose={() => setShowLogin(false)}
          redirectPath="/student"
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
            Student Dashboard
          </h1>
          <p className="text-muted-foreground text-lg">
            Welcome back! Continue your learning journey with AI-powered
            assistance.
          </p>
        </div>

        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-6 h-14">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="courses" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              My Courses
            </TabsTrigger>
            <TabsTrigger value="ai-tutor" className="flex items-center gap-2">
              <Brain className="h-4 w-4" />
              AI Tutor
            </TabsTrigger>
            <TabsTrigger value="progress" className="flex items-center gap-2">
              <Trophy className="h-4 w-4" />
              Progress
            </TabsTrigger>
            <TabsTrigger value="practice" className="flex items-center gap-2">
              <Play className="h-4 w-4" />
              Practice
            </TabsTrigger>
            <TabsTrigger value="chat" className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              Chat
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Active Courses
                  </CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">In progress</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Learning Streak
                  </CardTitle>
                  <Trophy className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">Days in a row</p>
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
                  <div className="text-2xl font-bold">47</div>
                  <p className="text-xs text-muted-foreground">This week</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Skill Points
                  </CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,240</div>
                  <p className="text-xs text-muted-foreground">Total earned</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>AI-Recommended Courses</CardTitle>
                  <CardDescription>
                    Personalized suggestions based on your learning goals
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Advanced React Patterns",
                        difficulty: "Intermediate",
                        match: "95%",
                      },
                      {
                        title: "Data Structures & Algorithms",
                        difficulty: "Advanced",
                        match: "87%",
                      },
                      {
                        title: "Machine Learning Basics",
                        difficulty: "Beginner",
                        match: "82%",
                      },
                    ].map((course, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 border rounded-lg"
                      >
                        <div>
                          <h4 className="font-medium">{course.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {course.difficulty}
                          </p>
                        </div>
                        <Badge variant="secondary">{course.match} match</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Skill Gap Analysis</CardTitle>
                  <CardDescription>
                    AI-identified areas for improvement
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        skill: "Algorithm Optimization",
                        level: 60,
                        gap: "Moderate",
                      },
                      { skill: "System Design", level: 35, gap: "High" },
                      { skill: "React Testing", level: 75, gap: "Low" },
                    ].map((skill, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{skill.skill}</span>
                          <span className="text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                        <Badge
                          variant={
                            skill.gap === "High"
                              ? "destructive"
                              : skill.gap === "Moderate"
                              ? "default"
                              : "secondary"
                          }
                          className="text-xs"
                        >
                          {skill.gap} Priority
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="ai-tutor" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  AI Learning Assistant
                </CardTitle>
                <CardDescription>
                  Your 24/7 GPT-4 powered tutor for personalized help
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Brain className="h-16 w-16 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2">
                    Ask your AI Tutor anything!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Get step-by-step explanations, practice problems, and
                    personalized feedback
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
                    <Button className="flex items-center gap-2 my-btn">
                      <MessageCircle className="h-4 w-4" />
                      Start Text Chat
                    </Button>
                    <Button
                      variant="outline"
                      className="flex items-center gap-2 hover:bg-gray-50 hover:text-[#2901b3]"
                    >
                      <Play className="h-4 w-4" />
                      Voice Interaction
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">My Learning Path</h2>
              <Button>Browse More Courses</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card
                  key={i}
                  className="group hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="w-full h-32 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg mb-4 flex items-center justify-center">
                      <BookOpen className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">
                      Advanced React Development
                    </CardTitle>
                    <CardDescription>
                      Master modern React patterns and performance optimization
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>65%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: "65%" }}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">Intermediate</Badge>
                        <span className="text-sm text-muted-foreground">
                          8/12 lessons
                        </span>
                      </div>
                      <Button className="w-full my-btn">
                        Continue Learning
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Learning Analytics</CardTitle>
                <CardDescription>
                  Track your progress and achievements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Trophy className="h-16 w-16 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2">
                    Detailed Analytics Coming Soon
                  </h3>
                  <p className="text-muted-foreground">
                    View comprehensive progress tracking, skill assessments, and
                    predictive insights
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="practice" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>AI-Generated Practice</CardTitle>
                <CardDescription>
                  Personalized exercises and quizzes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Play className="h-16 w-16 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2">
                    Smart Practice Sessions
                  </h3>
                  <p className="text-muted-foreground">
                    AI-generated quizzes, flashcards, and coding challenges
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="chat" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Discussion & Support</CardTitle>
                <CardDescription>
                  Connect with peers and get help
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <MessageCircle className="h-16 w-16 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2">Community Chat</h3>
                  <p className="text-muted-foreground">
                    Collaborate with fellow students and get instant support
                  </p>
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
        redirectPath="/student"
      />
    </div>
  );
};

export default StudentPortal;
