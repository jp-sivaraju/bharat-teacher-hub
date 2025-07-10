
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TeacherLogin  from "./pages/TeacherLogin";
import { SchoolLogin } from "./pages/SchoolLogin";
import { CollegeLogin } from "./pages/CollegeLogin";
import { TeacherDashboard } from "./pages/TeacherDashboard";
import SchoolDashboard  from "./pages/SchoolDashboard";
import { CollegeDashboard } from "./pages/CollegeDashboard";

import  TeacherRegister   from "./pages/TeacherRegister";
import { SchoolRegister } from "./pages/SchoolRegister";
import { CollegeRegister } from "./pages/CollegeRegister";
import { VerificationPlans } from "./pages/VerificationPlans";
import { PostJob } from "./pages/PostJob";
import { JobListingsPage } from "./pages/JobListings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          <Route path="/teacher-login" element={<TeacherLogin />} />
          <Route path="/school-login" element={<SchoolLogin />} />
          <Route path="/college-login" element={<CollegeLogin />} />
          
          <Route path="/teacher-register" element={<TeacherRegister />} />
          <Route path="/school-register" element={<SchoolRegister />} />
          <Route path="/college-register" element={<CollegeRegister />} />
          
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/school-dashboard" element={<SchoolDashboard />} />
          <Route path="/college-dashboard" element={<CollegeDashboard />} />
          
          <Route path="/verification-plans" element={<VerificationPlans />} />
          <Route path="/post-job" element={<PostJob />} />
          <Route path="/jobs" element={<JobListingsPage />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
