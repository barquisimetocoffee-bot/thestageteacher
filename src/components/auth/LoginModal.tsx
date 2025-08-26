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
  redirectPath = "/pencil-app",
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

  const { signIn, signUp, signInWithGoogle, signInWithFacebook, signInWithApple, user } = useAuth();
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
          title: "Welcome to Pencil!",
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

  const handleSocialLogin = async (provider: 'google' | 'facebook' | 'apple') => {
    setIsLoading(true);
    try {
      let result;
      switch (provider) {
        case 'google':
          result = await signInWithGoogle();
          break;
        case 'facebook':
          result = await signInWithFacebook();
          break;
        case 'apple':
          result = await signInWithApple();
          break;
      }
      
      if (result.error) {
        toast({
          title: "Sign In Failed",
          description: result.error.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Sign In Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
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
            <div className="w-16 h-16 flex items-center justify-center">
              <img src="/favicon.png" alt="logo" className="size-12" />
            </div>
          </div>
          <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-[#2901b3] to-blue-600 bg-clip-text text-transparent text-center">
            Welcome to Pencil
          </DialogTitle>
          <DialogDescription className="text-gray-600 text-center text-base">
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

          {/* --- SIGN IN TAB --- */}
          <TabsContent
            value="signin"
            className="space-y-5 mt-6 focus:outline-none border-none"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSignIn();
              }}
              className="space-y-5"
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
                    className="pl-4 bg-white/80 backdrop-blur-sm py-6"
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
                    className="pl-4 bg-white/80 backdrop-blur-sm py-6"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
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

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember-me"
                    checked={rememberMe}
                    onCheckedChange={(checked) =>
                      setRememberMe(checked as boolean)
                    }
                  />
                  <Label
                    htmlFor="remember-me"
                    className="text-sm text-gray-600 font-medium"
                  >
                    Remember me ?
                  </Label>
                </div>
                <button
                  type="button"
                  onClick={() => setShowForgotPassword(true)}
                  className="text-sm text-gray-600 hover:text-primary font-medium"
                >
                  Forgot Password ?
                </button>
              </div>

              <Button
                type="submit" // 👈 important for Enter key submit
                disabled={isLoading}
                className="w-full my-btn text-white font-semibold py-3 rounded-xl"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing In...
                  </>
                ) : (
                  "Sign In to Pencil"
                 )}
               </Button>
             </form>

             {/* Social Login Options */}
             <div className="space-y-4 pt-4">
               <div className="relative">
                 <div className="absolute inset-0 flex items-center">
                   <span className="w-full border-t border-gray-300" />
                 </div>
                 <div className="relative flex justify-center text-xs uppercase">
                   <span className="bg-white px-2 text-gray-500">Or continue with</span>
                 </div>
               </div>
               
               <div className="grid grid-cols-3 gap-3">
                 <Button
                   type="button"
                   variant="outline"
                   onClick={() => handleSocialLogin('google')}
                   disabled={isLoading}
                   className="h-11 border-2 border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 transition-all duration-200"
                 >
                   <svg className="w-5 h-5" viewBox="0 0 24 24">
                     <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                     <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                     <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                     <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                   </svg>
                 </Button>
                 
                 <Button
                   type="button"
                   variant="outline"
                   onClick={() => handleSocialLogin('facebook')}
                   disabled={isLoading}
                   className="h-11 border-2 border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 transition-all duration-200"
                 >
                   <svg className="w-5 h-5" viewBox="0 0 24 24">
                     <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                   </svg>
                 </Button>
                 
                 <Button
                   type="button"
                   variant="outline"
                   onClick={() => handleSocialLogin('apple')}
                   disabled={isLoading}
                   className="h-11 border-2 border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 transition-all duration-200"
                 >
                   <svg className="w-5 h-5" viewBox="0 0 24 24">
                     <path fill="#000000" d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
                   </svg>
                 </Button>
               </div>
             </div>
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

             {/* Social Login Options for Sign Up */}
             <div className="space-y-4 pt-4">
               <div className="relative">
                 <div className="absolute inset-0 flex items-center">
                   <span className="w-full border-t border-gray-300" />
                 </div>
                 <div className="relative flex justify-center text-xs uppercase">
                   <span className="bg-white px-2 text-gray-500">Or sign up with</span>
                 </div>
               </div>
               
               <div className="grid grid-cols-3 gap-3">
                 <Button
                   type="button"
                   variant="outline"
                   onClick={() => handleSocialLogin('google')}
                   disabled={isLoading}
                   className="h-11 border-2 border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 transition-all duration-200"
                 >
                   <svg className="w-5 h-5" viewBox="0 0 24 24">
                     <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                     <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                     <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                     <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                   </svg>
                 </Button>
                 
                 <Button
                   type="button"
                   variant="outline"
                   onClick={() => handleSocialLogin('facebook')}
                   disabled={isLoading}
                   className="h-11 border-2 border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 transition-all duration-200"
                 >
                   <svg className="w-5 h-5" viewBox="0 0 24 24">
                     <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                   </svg>
                 </Button>
                 
                 <Button
                   type="button"
                   variant="outline"
                   onClick={() => handleSocialLogin('apple')}
                   disabled={isLoading}
                   className="h-11 border-2 border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 transition-all duration-200"
                 >
                   <svg className="w-5 h-5" viewBox="0 0 24 24">
                     <path fill="#000000" d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
                   </svg>
                 </Button>
               </div>
             </div>
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
