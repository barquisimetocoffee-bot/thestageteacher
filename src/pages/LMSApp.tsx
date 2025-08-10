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
  Users,
  GraduationCap,
  Plus,
  Calendar,
  Bell,
  BarChart3,
} from "lucide-react";
import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/home/Footer";
import LoginModal from "@/components/auth/LoginModal";

const LMSApp = () => {
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
              <CardTitle>Welcome to Vicerta LMS</CardTitle>
              <CardDescription>
                Please sign in to access your learning management system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={() => setShowLogin(true)} className="w-full">
                Sign In to Continue
              </Button>
            </CardContent>
          </Card>
        </div>
        <Footer />
        <LoginModal
          isOpen={showLogin}
          onClose={() => setShowLogin(false)}
          redirectPath="/lms"
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
            Vicerta Learning Management System
          </h1>
          <p className="text-muted-foreground text-lg">
            Welcome back, {user.email}! Manage your courses and track your
            learning progress.
          </p>
        </div>

        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-5 h-14">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="courses" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              My Courses
            </TabsTrigger>
            <TabsTrigger value="explore" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              Explore
            </TabsTrigger>
            <TabsTrigger value="teaching" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Teaching
            </TabsTrigger>
            <TabsTrigger value="calendar" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Calendar
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Enrolled Courses
                  </CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">0</div>
                  <p className="text-xs text-muted-foreground">
                    Active enrollments
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Completed Lessons
                  </CardTitle>
                  <GraduationCap className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">0</div>
                  <p className="text-xs text-muted-foreground">This month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Assignments Due
                  </CardTitle>
                  <Bell className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">0</div>
                  <p className="text-xs text-muted-foreground">This week</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>
                  Your latest learning activities and updates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No recent activity to display.</p>
                  <p className="text-sm">Start by enrolling in a course!</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">My Courses</h2>
              <Button className="flex items-center gap-2 my-btn">
                <Plus className="h-4 w-4" />
                Enroll in Course
              </Button>
            </div>

            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-50" />
              <h3 className="text-lg font-semibold mb-2">
                No courses enrolled yet
              </h3>
              <p className="text-muted-foreground mb-4">
                Start your learning journey by exploring available courses
              </p>
              <Button className="my-btn">Browse Courses</Button>
            </div>
          </TabsContent>

          <TabsContent value="explore" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Explore Courses</h2>
              <div className="flex gap-2">
                <Button variant="outline">Filter</Button>
                <Button variant="outline">Sort</Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card
                  key={i}
                  className="group hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="w-full h-32 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg mb-4 flex items-center justify-center">
                      <BookOpen className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Sample Course {i}</CardTitle>
                    <CardDescription>
                      Learn the fundamentals with hands-on projects and expert
                      guidance.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary">Beginner</Badge>
                      <span className="text-sm text-muted-foreground">
                        4 weeks
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        0 students
                      </span>
                      <Badge
                        variant="outline"
                        className="text-green-600 border-green-200"
                      >
                        Free
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="teaching" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Teaching Dashboard</h2>
              <Button className="flex items-center gap-2 my-btn">
                <Plus className="h-4 w-4" />
                Create Course
              </Button>
            </div>

            <div className="text-center py-12">
              <Users className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-50" />
              <h3 className="text-lg font-semibold mb-2">Start Teaching</h3>
              <p className="text-muted-foreground mb-4">
                Create your first course and share your knowledge with students
              </p>
              <Button className="my-btn">Create Your First Course</Button>
            </div>
          </TabsContent>

          <TabsContent value="calendar" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Calendar</h2>
              <Button variant="outline">This Week</Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>
                  Assignment deadlines and course schedules
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No upcoming events.</p>
                  <p className="text-sm">Your schedule is clear!</p>
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
        redirectPath="/lms"
      />
    </div>
  );
};

export default LMSApp;
