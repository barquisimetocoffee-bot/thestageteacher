import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, Lock, Loader2, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // Handle the auth callback for Supabase recovery links
    const handleAuthCallback = async () => {
      try {
        const url = window.location.href;
        const hashParams = new URLSearchParams(window.location.hash.replace(/^#/, ""));

        // Prefer the modern code-exchange flow
        const code = searchParams.get('code') || hashParams.get('code');
        if (code) {
          const { error } = await supabase.auth.exchangeCodeForSession(url);
          if (error) throw error;
          return;
        }

        // Backward compatibility: token-based flow (query or hash)
        const accessToken = searchParams.get('access_token') || hashParams.get('access_token');
        const refreshToken = searchParams.get('refresh_token') || hashParams.get('refresh_token');
        
        if (accessToken && refreshToken) {
          const { error } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken,
          });
          if (error) throw error;
          return;
        }

        // No recognizable auth params
        toast({
          title: "Invalid Reset Link",
          description: "This password reset link is invalid or has expired",
          variant: "destructive",
        });
        navigate('/');
      } catch (error: any) {
        toast({
          title: "Invalid Reset Link",
          description: error?.message || "This password reset link is invalid or has expired",
          variant: "destructive",
        });
        navigate('/');
      }
    };

    handleAuthCallback();
  }, [searchParams, navigate, toast]);

  const handleUpdatePassword = async () => {
    if (!password || !confirmPassword) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    if (password !== confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }

    if (password.length < 6) {
      toast({
        title: "Password Too Short",
        description: "Password must be at least 6 characters long",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase.auth.updateUser({
        password: password
      });

      if (error) {
        toast({
          title: "Update Failed",
          description: error.message,
          variant: "destructive",
        });
      } else {
        setIsSuccess(true);
        toast({
          title: "Password Updated",
          description: "Your password has been successfully updated",
        });
        
        // Redirect to app after success
        setTimeout(() => {
          navigate('/pencil-app');
        }, 2000);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-blue-50/30 to-purple-50/30 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-card/80 backdrop-blur-sm border-0 shadow-2xl">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
              {isSuccess ? (
                <CheckCircle className="h-8 w-8 text-primary-foreground" />
              ) : (
                <Lock className="h-8 w-8 text-primary-foreground" />
              )}
            </div>
          </div>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {isSuccess ? "Password Updated!" : "Set New Password"}
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            {isSuccess 
              ? "Your password has been successfully updated. Redirecting to your dashboard..."
              : "Choose a strong password for your account"
            }
          </CardDescription>
        </CardHeader>

        {!isSuccess && (
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="new-password" className="text-foreground font-medium">
                New Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="new-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 bg-background/80 backdrop-blur-sm border-border focus:border-primary focus:ring-primary/20 transition-all duration-200"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm-password" className="text-foreground font-medium">
                Confirm Password
              </Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="Confirm your new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-background/80 backdrop-blur-sm border-border focus:border-primary focus:ring-primary/20 transition-all duration-200"
              />
            </div>

            <Button
              onClick={handleUpdatePassword}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Updating Password...
                </>
              ) : (
                "Update Password"
              )}
            </Button>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default ResetPassword;