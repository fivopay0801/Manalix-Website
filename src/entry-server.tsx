import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LanguageProvider } from "@/context/language-context";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Feature from "./pages/feature";
import About from "./pages/about";
import Pricing from "./pages/pricing";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import BlogPost from "./pages/blog/[slug]";
import PrivacyPolicyPage from "./pages/legal/privacy-&-policy";
import TermsAndConditionPage from "./pages/legal/terms-&-condition";
import CookiePolicyPage from "./pages/legal/cookie-policy";
import RefundPolicyPage from "./pages/legal/refund-policy";
import ServiceFulfillmentPage from "./pages/legal/service-fulfillment";

import CreditSocietySoftwarePage from "./pages/solutions/credit-society-software";
import PatsansthaSoftwarePage from "./pages/solutions/patsanstha-software";
import NbfcLoanManagementSoftwarePage from "./pages/solutions/nbfc-loan-management-software";
import ShariahCompliantBankingSoftwarePage from "./pages/solutions/shariah-compliant-banking-software";
import CooperativeAuditSoftwarePage from "./pages/solutions/cooperative-audit-software";
import MrPatsansthaSoftwarePage from "./pages/solutions/mr-patsanstha-software";

export function render(url: string, helmetContext: any = {}) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  const appHtml = ReactDOMServer.renderToString(
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <LanguageProvider>
            <StaticRouter location={url}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Feature />} />
                <Route path="/about" element={<About />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/credit-society-software" element={<CreditSocietySoftwarePage />} />
                <Route path="/patsanstha-software" element={<PatsansthaSoftwarePage />} />
                <Route path="/nbfc-loan-management-software" element={<NbfcLoanManagementSoftwarePage />} />
                <Route path="/shariah-compliant-banking-software" element={<ShariahCompliantBankingSoftwarePage />} />
                <Route path="/cooperative-audit-software" element={<CooperativeAuditSoftwarePage />} />
                <Route path="/mr/patsanstha-software" element={<MrPatsansthaSoftwarePage />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/terms-and-conditions" element={<TermsAndConditionPage />} />
                <Route path="/refund-policy" element={<RefundPolicyPage />} />
                <Route path="/service-fulfillment" element={<ServiceFulfillmentPage />} />
                <Route path="/cookie-policy" element={<CookiePolicyPage />} />
              </Routes>
            </StaticRouter>
          </LanguageProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );

  return { appHtml, helmet: helmetContext.helmet };
}

