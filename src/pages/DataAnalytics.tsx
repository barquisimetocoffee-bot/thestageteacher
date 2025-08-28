import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useAnalytics } from "@/hooks/useAnalytics";
import { Navigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import AnimatedCounter from "@/components/ui/animated-counter";
import { 
  Users, 
  Crown, 
  Activity, 
  TrendingUp, 
  RefreshCw,
  BarChart3,
  Calendar
} from "lucide-react";

const DataAnalytics = () => {
  const { user, loading: authLoading } = useAuth();
  const { data, loading, error, refetch } = useAnalytics();

  // Redirect if not authenticated or not vicerta email
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (!user || !user.email?.endsWith('@vicerta.com')) {
    return <Navigate to="/" replace />;
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-destructive mb-4">Access Error</h1>
          <p className="text-muted-foreground mb-4">{error}</p>
          <Button onClick={refetch}>
            <RefreshCw className="w-4 h-4 mr-2" />
            Retry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Pencil Analytics Dashboard</h1>
          <p className="text-muted-foreground">
            Real-time insights into your Pencil app usage and growth
          </p>
        </div>
        <Button onClick={refetch} disabled={loading} variant="outline">
          <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
          Refresh Data
        </Button>
      </div>

      {loading && (
        <div className="flex justify-center py-8">
          <LoadingSpinner size="lg" />
        </div>
      )}

      {data && (
        <>
          {/* Key Metrics Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  <AnimatedCounter end={data.totalUsers} />
                </div>
                <p className="text-xs text-muted-foreground">
                  Registered users
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pro Users</CardTitle>
                <Crown className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  <AnimatedCounter end={data.proUsers} />
                </div>
                <p className="text-xs text-muted-foreground">
                  Active subscribers
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Requests</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  <AnimatedCounter end={data.totalRequests} />
                </div>
                <p className="text-xs text-muted-foreground">
                  Tool generations
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {data.totalUsers > 0 ? ((data.proUsers / data.totalUsers) * 100).toFixed(1) : '0'}%
                </div>
                <p className="text-xs text-muted-foreground">
                  Free to Pro conversion
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Growth Metrics */}
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  User Growth
                </CardTitle>
                <CardDescription>
                  New user registrations over time
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Last 7 days</span>
                  <div className="flex items-center gap-2">
                    <AnimatedCounter end={data.growth.users.last7Days} className="text-lg font-semibold" />
                    <Badge variant="secondary">users</Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Last 30 days</span>
                  <div className="flex items-center gap-2">
                    <AnimatedCounter end={data.growth.users.last30Days} className="text-lg font-semibold" />
                    <Badge variant="secondary">users</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Crown className="h-5 w-5" />
                  Pro User Growth
                </CardTitle>
                <CardDescription>
                  New Pro subscriptions over time
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Last 7 days</span>
                  <div className="flex items-center gap-2">
                    <AnimatedCounter end={data.growth.proUsers.last7Days} className="text-lg font-semibold" />
                    <Badge variant="default">pro</Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Last 30 days</span>
                  <div className="flex items-center gap-2">
                    <AnimatedCounter end={data.growth.proUsers.last30Days} className="text-lg font-semibold" />
                    <Badge variant="default">pro</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tool Usage Ranking */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Tool Usage Ranking
              </CardTitle>
              <CardDescription>
                Most popular tools based on generation requests
              </CardDescription>
            </CardHeader>
            <CardContent>
              {data.toolRanking.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">
                  No tool usage data available yet
                </p>
              ) : (
                <div className="space-y-4">
                  {data.toolRanking.slice(0, 10).map((tool, index) => (
                    <div key={tool.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-medium">{tool.name}</p>
                          <p className="text-sm text-muted-foreground capitalize">{tool.type}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <AnimatedCounter end={tool.count} className="font-semibold" />
                        <span className="text-sm text-muted-foreground">uses</span>
                      </div>
                    </div>
                  ))}
                  
                  {data.toolRanking.length > 10 && (
                    <>
                      <Separator />
                      <p className="text-center text-sm text-muted-foreground">
                        And {data.toolRanking.length - 10} more tools...
                      </p>
                    </>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};

export default DataAnalytics;