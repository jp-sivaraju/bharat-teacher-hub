import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { TeacherLogin } from "./pages/TeacherLogin";
import { StudentLogin } from "./pages/StudentLogin";
import { ParentLogin } from "./pages/ParentLogin";
import { SchoolLogin } from "./pages/SchoolLogin";
import { InstitutionLogin } from "./pages/InstitutionLogin";
import { TeacherDashboard } from "./pages/TeacherDashboard";
import { StudentDashboard } from "./pages/StudentDashboard";
import { ParentDashboard } from "./pages/ParentDashboard";
import { SchoolDashboard } from "./pages/SchoolDashboard";
import { InstitutionDashboard } from "./pages/InstitutionDashboard";
import { TeacherRegister } from "./pages/TeacherRegister";
import { StudentRegister } from "./pages/StudentRegister";
import { ParentRegister } from "./pages/ParentRegister";
import { SchoolRegister } from "./pages/SchoolRegister";
import { InstitutionRegister } from "./pages/InstitutionRegister";
import { HomeTuitionRegister } from "./pages/HomeTuitionRegister";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Login Pages */}
          <Route path="/teacher-login" element={<TeacherLogin />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/parent-login" element={<ParentLogin />} />
          <Route path="/school-login" element={<SchoolLogin />} />
          <Route path="/institution-login" element={<InstitutionLogin />} />
          
          {/* Registration Pages */}
          <Route path="/teacher-register" element={<TeacherRegister />} />
          <Route path="/student-register" element={<StudentRegister />} />
          <Route path="/parent-register" element={<ParentRegister />} />
          <Route path="/school-register" element={<SchoolRegister />} />
          <Route path="/institution-register" element={<InstitutionRegister />} />
          <Route path="/home-tuition-register" element={<HomeTuitionRegister />} />
          
          {/* Dashboard Pages */}
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/parent-dashboard" element={<ParentDashboard />} />
          <Route path="/school-dashboard" element={<SchoolDashboard />} />
          <Route path="/institution-dashboard" element={<InstitutionDashboard />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
