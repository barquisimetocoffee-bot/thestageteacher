import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Loader2, Sparkles, Mail, Lock } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import ForgotPasswordModal from "./ForgotPasswordModal";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  redirectPath?: string;
}

const LoginModal = ({
  isOpen,
  onClose,
  redirectPath = "/easyteach-app",
}: LoginModalProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [activeTab, setActiveTab] = useState("signin");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });

  const { signIn, signUp, user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  // Handle auto-close and navigation when user becomes authenticated
  useEffect(() => {
    if (user && isOpen) {
      onClose();
      // Navigate to the specified redirect path after successful login
      navigate(redirectPath);
    }
  }, [user, isOpen, onClose, navigate, redirectPath]);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setFormData({
      email: "",
      password: "",
      name: "",
      confirmPassword: "",
    });
    setIsLoading(false);
  };

  const handleSignIn = async () => {
    if (!formData.email || !formData.password) {
      toast({
        title: "Missing Information",
        description: "Please enter both email and password",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await signIn(
        formData.email,
        formData.password,
        rememberMe
      );

      if (error) {
        toast({
          title: "Sign In Failed",
          description: error.message,
          variant: "destructive",
        });
        setIsLoading(false);
      } else {
        toast({
          title: "Welcome back!",
          description: "You have successfully signed in.",
        });
        resetForm();
        // Navigation will be handled by useEffect when user state updates
      }
    } catch (error) {
      toast({
        title: "Sign In Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  const handleSignUp = async () => {
    if (!formData.email || !formData.password || !formData.name) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }

    if (formData.password.length < 6) {
      toast({
        title: "Password Too Short",
        description: "Password must be at least 6 characters long",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await signUp(
        formData.email,
        formData.password,
        formData.name
      );

      if (error) {
        toast({
          title: "Sign Up Failed",
          description: error.message,
          variant: "destructive",
        });
        setIsLoading(false);
      } else {
        toast({
          title: "Welcome to EasyTeach!",
          description: "Please check your email to confirm your account.",
        });
        resetForm();
        onClose();
      }
    } catch (error) {
      toast({
        title: "Sign Up Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  const handleModalChange = (open: boolean) => {
    if (!open) {
      resetForm();
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleModalChange}>
      <DialogContent className="h-screen no-scrollbar sm:max-w-md bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 border-0 shadow-2xl">
        <DialogHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-16 h-16 icon-bg rounded-2xl flex items-center justify-center shadow-lg">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
          </div>
          <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-[#2901b3] to-blue-600 bg-clip-text text-transparent text-center">
            Welcome to EasyTeach
          </DialogTitle>
          <DialogDescription className="text-gray-600 text-base">
            {activeTab === "signin"
              ? "Sign in to access your AI-powered teaching tools"
              : "Join thousands of educators transforming their teaching experience"}
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mt-4 bg-gray-100/80 backdrop-blur-sm h-full">
            <TabsTrigger
              value="signin"
              className="data-[state=active]:my-btn data-[state=active]:text-white font-semibold transition-all duration-200"
            >
              Sign In
            </TabsTrigger>
            <TabsTrigger
              value="signup"
              className="data-[state=active]:my-btn data-[state=active]:text-white font-semibold transition-all duration-200"
            >
              Sign Up
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="signin"
            className="space-y-5 mt-6 focus:outline-none border-none"
          >
            <div className="space-y-2">
              <Label
                htmlFor="signin-email"
                className="text-gray-700 font-medium"
              >
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="signin-email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="pl-4 bg-white/80 backdrop-blur-sm py-6 focus:outline-none transition-all duration-200"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="signin-password"
                className="text-gray-700 font-medium"
              >
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="signin-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  className="pl-4 bg-white/80 backdrop-blur-sm py-6 focus:outline-none transition-all duration-200"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
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

            <div className="flex items-center space-x-2 pt-2">
              <Checkbox
                id="remember-me"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                className="border-gray-300 data-[state=checked]:my-btn"
              />
              <Label
                htmlFor="remember-me"
                className="text-sm text-gray-600 font-medium"
              >
                Remember me ?
              </Label>
            </div>

            <Button
              onClick={handleSignIn}
              disabled={isLoading}
              className="w-full my-btn text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 min-h-[48px]"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing In...
                </>
              ) : (
                "Sign In to EasyTeach"
              )}
            </Button>
          </TabsContent>

          <TabsContent value="signup" className="space-y-5 mt-6">
            <div className="space-y-2">
              <Label
                htmlFor="signup-name"
                className="text-gray-700 font-medium"
              >
                Full Name
              </Label>
              <Input
                id="signup-name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="pl-4 bg-white/80 backdrop-blur-sm py-6 focus:outline-none transition-all duration-200"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="signup-email"
                className="text-gray-700 font-medium"
              >
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="pl-4 bg-white/80 backdrop-blur-sm py-6 focus:outline-none transition-all duration-200"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="signup-password"
                className="text-gray-700 font-medium"
              >
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="signup-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password (min. 6 characters)"
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  className="pl-4 bg-white/80 backdrop-blur-sm py-6 focus:outline-none transition-all duration-200"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
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
              <Label
                htmlFor="confirm-password"
                className="text-gray-700 font-medium"
              >
                Confirm Password
              </Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  handleInputChange("confirmPassword", e.target.value)
                }
                className="pl-4 bg-white/80 backdrop-blur-sm py-6 focus:outline-none transition-all duration-200"
              />
            </div>

            <Button
              onClick={handleSignUp}
              disabled={isLoading}
              className="w-full my-btn text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 min-h-[48px]"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating Account...
                </>
              ) : (
                "Create Your Account"
              )}
            </Button>

            <p className="text-xs text-gray-500 text-center mt-4">
              By creating an account, you agree to our Terms of Service and
              Privacy Policy
            </p>
          </TabsContent>
        </Tabs>
      </DialogContent>

      <ForgotPasswordModal
        isOpen={showForgotPassword}
        onClose={() => setShowForgotPassword(false)}
        onBackToLogin={() => {
          setShowForgotPassword(false);
          // Keep the main login modal open
        }}
      />
    </Dialog>
  );
};

export default LoginModal;
