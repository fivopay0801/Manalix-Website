import React from "react";
import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { useLanguage } from "@/context/language-context";

export const IntegrationsCompliance: React.FC = () => {
  const { t } = useLanguage();

  const npciTags = [
    "NPCI e-Mandate",
    "UPI Autopay",
    "Aadhaar eKYC",
    "PAN / NSDL",
    "GSTN APIs",
    "CKYCR",
  ];

  const complianceTags = [
    "PCI DSS Certified",
    "RBI Cybersecurity Framework",
    "IDRBT Cloud Norms",
    "Indian Data Localization",
    "AES-256 Encryption",
    "Statutory Audit Ready",
  ];

  return (
    <section className="py-14 md:py-20 lg:py-24 relative overflow-hidden bg-background border-t border-white/[0.06]">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <Container>
        {/* Section Header */}
        <AnimateOnView y={20} className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight text-white leading-tight">
            {t.home.integrationsCompliance.title}
          </h2>
          {/* Exact Teal Accent Line matching the reference image */}
          <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mx-auto mt-3.5 mb-4 shadow-[0_0_12px_rgba(45,212,191,0.5)]" />
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
            {t.home.integrationsCompliance.subtitle}
          </p>
        </AnimateOnView>

        {/* 2-Column Content Card */}
        <div className="relative rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border border-white/10 bg-gradient-to-b from-white/[0.04] via-white/[0.02] to-transparent backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: 3D Security & Compliance Illustration */}
            <AnimateOnView
              y={30}
              delay={0.1}
              className="lg:col-span-5 flex items-center justify-center"
            >
              <div className="relative group w-full max-w-[480px] mx-auto p-2 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-teal-400/40 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-blue-500/10 to-transparent rounded-2xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity -z-10" />
                <picture>
                  <source
                    srcSet="/images/home/pci-dss-security-compliance.webp"
                    type="image/webp"
                  />
                  <img
                    src="/images/home/pci-dss-security-compliance.png"
                    alt="Manalix Integrations & Compliance - PCI DSS Compliant, NPCI Payments, RBI & IDRBT Banking Security"
                    className="w-full h-auto object-contain mx-auto transition-transform duration-500 group-hover:scale-[1.03] drop-shadow-[0_20px_40px_rgba(6,182,212,0.3)]"
                    loading="lazy"
                    width={1024}
                    height={682}
                  />
                </picture>
              </div>
            </AnimateOnView>

            {/* Right Column: The 2 Target Cards */}
            <div className="lg:col-span-7 space-y-5 md:space-y-6">
              {/* Card 1: NPCI, Aadhaar, PAN, GST, CKYC APIs */}
              <AnimateOnView y={30} delay={0.2}>
                <div className="group relative flex flex-col sm:flex-row items-start gap-4 p-5 sm:p-6 rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-teal-400/40 transition-all duration-300 shadow-md">
                  {/* Cyan Rounded-Square Checkmark Icon (matching image) */}
                  <div className="w-10 h-10 rounded-xl bg-teal-400/15 border border-teal-400/40 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(45,212,191,0.2)]">
                    <svg
                      className="w-5 h-5 text-teal-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="4" ry="4" />
                      <polyline points="8 12 11 15 16 9" />
                    </svg>
                  </div>

                  <div className="space-y-2 flex-1">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-teal-300 transition-colors leading-snug">
                      {t.home.integrationsCompliance.card1Title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {t.home.integrationsCompliance.card1Desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {npciTags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateOnView>

              {/* Card 2: Fully RBI/IDRBT compliant */}
              <AnimateOnView y={30} delay={0.3}>
                <div className="group relative flex flex-col sm:flex-row items-start gap-4 p-5 sm:p-6 rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-teal-400/40 transition-all duration-300 shadow-md">
                  {/* Cyan Rounded-Square Checkmark Icon (matching image) */}
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/15 border border-cyan-400/40 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                    <svg
                      className="w-5 h-5 text-cyan-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="4" ry="4" />
                      <polyline points="8 12 11 15 16 9" />
                    </svg>
                  </div>

                  <div className="space-y-2 flex-1">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      {t.home.integrationsCompliance.card2Title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {t.home.integrationsCompliance.card2Desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {complianceTags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateOnView>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default IntegrationsCompliance;
