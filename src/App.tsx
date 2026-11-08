import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/hooks/use-auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Feature from "./pages/feature";
import Home from "./pages/home";
import Pricing from "./pages/pricing";
import Blog from "./pages/blog";
import BlogPost from "./pages/blog/[slug]";
import PrivacyPolicyPage from "./pages/legal/privacy-&-policy";
import TermsAndConditionPage from "./pages/legal/terms-&-condition";
import CookiePolicyPage from "./pages/legal/cookie-policy";
import RefundPolicyPage from "./pages/legal/refund-policy";
import ServiceFulfillmentPage from "./pages/legal/service-fulfillment";

// High-Ranking Solution Landing Pages
import CreditSocietySoftwarePage from "./pages/solutions/credit-society-software";
import PatsansthaSoftwarePage from "./pages/solutions/patsanstha-software";
import NbfcLoanManagementSoftwarePage from "./pages/solutions/nbfc-loan-management-software";
import ShariahCompliantBankingSoftwarePage from "./pages/solutions/shariah-compliant-banking-software";
import CooperativeAuditSoftwarePage from "./pages/solutions/cooperative-audit-software";
import MrPatsansthaSoftwarePage from "./pages/solutions/mr-patsanstha-software";

import { LanguageProvider } from "@/context/language-context";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <BrowserRouter>
            <AuthProvider>
              <Toaster />
              <Sonner />
              <Routes>
                {/* Core Marketing Pages */}
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Feature />} />
                <Route path="/feature" element={<Navigate to="/product" replace />} />
                <Route path="/products" element={<Navigate to="/product" replace />} />
                <Route path="/about" element={<About />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />

                {/* Priority Search Intent Landing Pages */}
                <Route path="/credit-society-software" element={<CreditSocietySoftwarePage />} />
                <Route path="/patsanstha-software" element={<PatsansthaSoftwarePage />} />
                <Route path="/nbfc-loan-management-software" element={<NbfcLoanManagementSoftwarePage />} />
                <Route path="/shariah-compliant-banking-software" element={<ShariahCompliantBankingSoftwarePage />} />
                <Route path="/cooperative-audit-software" element={<CooperativeAuditSoftwarePage />} />
                <Route path="/mr/patsanstha-software" element={<MrPatsansthaSoftwarePage />} />

                {/* Blog & Knowledge Base */}
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />

                {/* Legal & Compliance */}
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/legal/privacy-&-policy" element={<Navigate to="/privacy-policy" replace />} />
                <Route path="/terms-and-conditions" element={<TermsAndConditionPage />} />
                <Route path="/legal/terms-&-condition" element={<Navigate to="/terms-and-conditions" replace />} />
                <Route path="/refund-policy" element={<RefundPolicyPage />} />
                <Route path="/refund-and-cancellation" element={<Navigate to="/refund-policy" replace />} />
                <Route path="/legal/refund-policy" element={<Navigate to="/refund-policy" replace />} />
                <Route path="/service-fulfillment" element={<ServiceFulfillmentPage />} />
                <Route path="/shipping-and-delivery" element={<Navigate to="/service-fulfillment" replace />} />
                <Route path="/legal/service-fulfillment" element={<Navigate to="/service-fulfillment" replace />} />
                <Route path="/cookie-policy" element={<CookiePolicyPage />} />
                <Route path="/legal/cookie-policy" element={<Navigate to="/cookie-policy" replace />} />

                {/* Catch-all redirect */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </AuthProvider>
          </BrowserRouter>
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
