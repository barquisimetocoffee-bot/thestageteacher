import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";

import { SubscriptionProvider } from "@/hooks/useSubscription";

import Profile from "./pages/Profile";
import ErrorBoundary from "@/components/ui/error-boundary";
import Index from "./pages/Index";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import AIChatbot from "./pages/AIChatbot";
import WizardTools from "./pages/WizardTools";
import ToolsSuggestions from "./pages/ToolsSuggestions";
import OutputHistory from "./pages/OutputHistory";
import AdvancedLMS from "./pages/AdvancedLMS";
import SchoolAdministration from "./pages/SchoolAdministration";
import CaseStudies from "./pages/CaseStudies";
import Blog from "./pages/Blog";
import KnowledgeBase from "./pages/KnowledgeBase";
import PartnersIntegrations from "./pages/PartnersIntegrations";
import DataProtection from "./pages/DataProtection";
import ContactUs from "./pages/ContactUs";
import FeedbackDashboard from "./pages/FeedbackDashboard";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import LMSApp from "./pages/LMSApp";
import StudentPortal from "./pages/StudentPortal";
import TeacherPortal from "./pages/TeacherPortal";
import PrimarySchools from "./pages/solutions/PrimarySchools";
import SecondarySchools from "./pages/solutions/SecondarySchools";
import Universities from "./pages/solutions/Universities";
import IndependentSchools from "./pages/solutions/IndependentSchools";
import Admissions from "./pages/solutions/Admissions";
import GeneralReports from "./pages/solutions/GeneralReports";
import HRPayroll from "./pages/solutions/HRPayroll";
import Finance from "./pages/solutions/Finance";
import Communication from "./pages/solutions/Communication";
import ResetPassword from "./pages/ResetPassword";
import CookieConsent from "./components/compliance/CookieConsent";
import ConsentManager from "./components/compliance/ConsentManager";
import ScrollToTop from "./hooks/scrollToTop";
import PencilApp from "./pages/PencilApp";
import PencilPage from "./pages/PencilPage";

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SubscriptionProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <ScrollToTop />
              <ErrorBoundary>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/pencil-app" element={<PencilApp />} />
                  <Route path="/pencil" element={<PencilPage />} />
                  <Route path="/landing" element={<LandingPage />} />
                  <Route path="/ai-chatbot" element={<AIChatbot />} />
                  <Route path="/pencil-tools" element={<WizardTools />} />
                  <Route
                    path="/tools-suggestions"
                    element={<ToolsSuggestions />}
                  />
                  <Route path="/output-history" element={<OutputHistory />} />
                  <Route path="/advanced-lms" element={<AdvancedLMS />} />
                  <Route
                    path="/school-administration"
                    element={<SchoolAdministration />}
                  />
                  <Route path="/case-studies" element={<CaseStudies />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/knowledge-base" element={<KnowledgeBase />} />
                  <Route path="/partners-integrations" element={<PartnersIntegrations />} />
                  <Route path="/data-protection" element={<DataProtection />} />
                  <Route path="/contact-us" element={<ContactUs />} />
                  <Route
                    path="/feedback-dashboard"
                    element={<FeedbackDashboard />}
                  />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route
                    path="/terms-of-service"
                    element={<TermsOfService />}
                  />
                  <Route path="/lms" element={<LMSApp />} />
                  <Route path="/student" element={<StudentPortal />} />
                  <Route path="/teacher" element={<TeacherPortal />} />
                  <Route
                    path="/solutions/primary-schools"
                    element={<PrimarySchools />}
                  />
                  <Route
                    path="/solutions/secondary-schools"
                    element={<SecondarySchools />}
                  />
                  <Route
                    path="/solutions/universities"
                    element={<Universities />}
                  />
                  <Route
                    path="/solutions/independent-schools"
                    element={<IndependentSchools />}
                  />
                  <Route
                    path="/solutions/admissions"
                    element={<Admissions />}
                  />
                  <Route
                    path="/solutions/general-reports"
                    element={<GeneralReports />}
                  />
                  <Route path="/solutions/hr-payroll" element={<HRPayroll />} />
                  <Route path="/solutions/finance" element={<Finance />} />
                  <Route
                    path="/solutions/communication"
                    element={<Communication />}
                  />
                  <Route path="/reset-password" element={<ResetPassword />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </ErrorBoundary>
              <CookieConsent />
              <ConsentManager />
            </BrowserRouter>
          </TooltipProvider>
        </SubscriptionProvider>
      </AuthProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
