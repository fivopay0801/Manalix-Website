import Container from "@/components/container";
import Layout from "@/components/layout";
import LegalHero from "@/components/sections/legal/hero";
import SEO from "@/components/seo";
import { appConfig } from "@/utils/app-config";
import { Cookie, ShieldCheck, Settings } from "lucide-react";

const CookiePolicyPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Cookie Policy | ${appConfig.name}`,
    description: `Cookie Policy for ${appConfig.name} - Understand how we use cookies and tracking technologies.`,
    url: `${appConfig.url}/cookie-policy`,
  };

  return (
    <>
      <SEO
        title={`Cookie Policy | ${appConfig.name}`}
        description={`Cookie Policy for ${appConfig.name} - Understand how cookies are used to improve your core banking and platform experience.`}
        canonicalUrl={`/cookie-policy`}
        ogType="website"
        jsonLd={jsonLd}
      />
      <Layout>
        <LegalHero
          title="Cookie Policy"
          description="Last Updated: March 20, 2026"
        />
        <section className="py-12 md:py-16">
          <Container className="flex flex-col justify-center items-center">
            <article className="w-full max-w-[880px] space-y-10 text-white/80 leading-relaxed text-[16px] md:text-[17px]">
              {/* Introduction */}
              <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20 text-primary text-sm font-bold">1</span>
                  What Are Cookies?
                </h3>
                <p className="text-white/80">
                  This Cookie Policy explains how <strong className="text-white">{appConfig.legalName}</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) uses cookies and similar tracking technologies when you visit our website at <strong className="text-white">manalix.com</strong> and use our enterprise core banking cloud solutions.
                </p>
                <p className="text-white/80">
                  Cookies are small data files stored on your browser or device that enable website functionality, session management, and aggregated analytics.
                </p>
              </div>

              {/* Types of Cookies */}
              <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20 text-primary text-sm font-bold">2</span>
                  Categories of Cookies We Use
                </h3>
                <ul className="space-y-4">
                  <li className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <strong className="text-white flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" /> Essential / Strictly Necessary Cookies
                    </strong>
                    <p className="text-white/70 text-sm">
                      Required for secure login, CSRF token validation, session persistence, and basic navigation across the core banking portal.
                    </p>
                  </li>
                  <li className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <strong className="text-white flex items-center gap-2">
                      <Settings className="w-4 h-4 text-primary" /> Performance & Analytics Cookies
                    </strong>
                    <p className="text-white/70 text-sm">
                      We use Google Analytics 4 (GA4) with IP anonymization to understand user visits, page response times, and feature engagement.
                    </p>
                  </li>
                  <li className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <strong className="text-white flex items-center gap-2">
                      <Cookie className="w-4 h-4 text-amber-400" /> Functional Preferences Cookies
                    </strong>
                    <p className="text-white/70 text-sm">
                      Remembers your chosen language (English, Marathi, Hindi) and UI theme settings.
                    </p>
                  </li>
                </ul>
              </div>

              {/* Controlling Cookies */}
              <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20 text-primary text-sm font-bold">3</span>
                  How to Control Cookies
                </h3>
                <p className="text-white/80">
                  You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website, though your access to some functionality and areas may be restricted.
                </p>
              </div>

              {/* Contact Us */}
              <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm space-y-3">
                <h3 className="text-lg font-bold text-white">Questions Regarding Cookies?</h3>
                <p className="text-white/70 text-sm">
                  Contact our Data Protection Team at <a href={`mailto:${appConfig.email}`} className="text-primary hover:underline">{appConfig.email}</a> or visit us at {appConfig.address.street}, {appConfig.address.city}, {appConfig.address.state}.
                </p>
              </div>
            </article>
          </Container>
        </section>
      </Layout>
    </>
  );
};

export default CookiePolicyPage;
