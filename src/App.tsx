import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import LoadingSpinner from "@/components/common/LoadingSpinner";

// Lazy load pages that are not immediately needed
const Index = lazy(() => import("./pages/Index"));
const PencilApp = lazy(() => import("./pages/PencilApp"));
const Profile = lazy(() => import("./pages/Profile"));
const OutputHistory = lazy(() => import("./pages/OutputHistory"));
const StudentPortal = lazy(() => import("./pages/StudentPortal"));
const TeacherPortal = lazy(() => import("./pages/TeacherPortal"));
const AdvancedLMS = lazy(() => import("./pages/AdvancedLMS"));
const LMSApp = lazy(() => import("./pages/LMSApp"));
const SchoolAdministration = lazy(() => import("./pages/SchoolAdministration"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const DataProtection = lazy(() => import("./pages/DataProtection"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Solutions pages
const IndependentSchools = lazy(() => import("./pages/solutions/IndependentSchools"));
const PrimarySchools = lazy(() => import("./pages/solutions/PrimarySchools"));
const SecondarySchools = lazy(() => import("./pages/solutions/SecondarySchools"));
const Universities = lazy(() => import("./pages/solutions/Universities"));
const Admissions = lazy(() => import("./pages/solutions/Admissions"));
const Communication = lazy(() => import("./pages/solutions/Communication"));
const Finance = lazy(() => import("./pages/solutions/Finance"));
const GeneralReports = lazy(() => import("./pages/solutions/GeneralReports"));
const HRPayroll = lazy(() => import("./pages/solutions/HRPayroll"));

// Other pages
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Blog = lazy(() => import("./pages/Blog"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const KnowledgeBase = lazy(() => import("./pages/KnowledgeBase"));
const PartnersIntegrations = lazy(() => import("./pages/PartnersIntegrations"));
const AIChatbot = lazy(() => import("./pages/AIChatbot"));
const ToolsSuggestions = lazy(() => import("./pages/ToolsSuggestions"));
const WizardTools = lazy(() => import("./pages/WizardTools"));
const FeedbackDashboard = lazy(() => import("./pages/FeedbackDashboard"));
const LandingPage = lazy(() => import("./pages/LandingPage"));
const PencilPage = lazy(() => import("./pages/PencilPage"));

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <BrowserRouter>
            <Suspense fallback={
              <div className="min-h-screen flex items-center justify-center">
                <LoadingSpinner />
              </div>
            }>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/pencil-app" element={<PencilApp />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/output-history" element={<OutputHistory />} />
                <Route path="/student-portal" element={<StudentPortal />} />
                <Route path="/teacher-portal" element={<TeacherPortal />} />
                <Route path="/lms" element={<AdvancedLMS />} />
                <Route path="/lms-app" element={<LMSApp />} />
                <Route path="/school-administration" element={<SchoolAdministration />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/data-protection" element={<DataProtection />} />
                
                {/* Solutions Routes */}
                <Route path="/solutions/independent-schools" element={<IndependentSchools />} />
                <Route path="/solutions/primary-schools" element={<PrimarySchools />} />
                <Route path="/solutions/secondary-schools" element={<SecondarySchools />} />
                <Route path="/solutions/universities" element={<Universities />} />
                <Route path="/solutions/admissions" element={<Admissions />} />
                <Route path="/solutions/communication" element={<Communication />} />
                <Route path="/solutions/finance" element={<Finance />} />
                <Route path="/solutions/reports" element={<GeneralReports />} />
                <Route path="/solutions/hr-payroll" element={<HRPayroll />} />
                
                {/* Other Routes */}
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/knowledge-base" element={<KnowledgeBase />} />
                <Route path="/partners-integrations" element={<PartnersIntegrations />} />
                <Route path="/ai-chatbot" element={<AIChatbot />} />
                <Route path="/tools-suggestions" element={<ToolsSuggestions />} />
                <Route path="/wizard-tools" element={<WizardTools />} />
                <Route path="/feedback-dashboard" element={<FeedbackDashboard />} />
                <Route path="/landing-page" element={<LandingPage />} />
                <Route path="/pencil" element={<PencilPage />} />
                
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
