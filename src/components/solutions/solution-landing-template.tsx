import React from "react";
import Layout from "@/components/layout";
import SEO from "@/components/seo";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Phone,
  MessageCircle,
  ArrowRight,
  TrendingUp,
  Database,
  Lock,
  Smartphone,
  Award,
  Users,
  FileSpreadsheet,
  Building,
  HelpCircle,
  Sparkles,
} from "lucide-react";
import ContactForm from "@/components/sections/contact/contact-form";
import {
  createBreadcrumbSchema,
  createSoftwareApplicationSchema,
  createFAQSchema,
  FAQItem,
} from "@/lib/seo-schemas";
import { appConfig } from "@/utils/app-config";

export interface SolutionFeature {
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
  tags?: string[];
}

export interface ComparisonRow {
  aspect: string;
  legacy: string;
  manalix: string;
}

export interface ClientProof {
  quote: string;
  author: string;
  role: string;
  organization: string;
  location: string;
}

export interface SolutionPageProps {
  // SEO Metadata
  slug: string;
  title: string;
  metaDescription: string;
  targetKeyword: string;
  secondaryKeywords: string[];

  // Hero Section
  badgeText: string;
  h1Title: string;
  h1Highlight?: string;
  heroSubtitle: string;
  stats: { value: string; label: string }[];

  // Detailed Narrative (800+ words target)
  overviewHeading: string;
  overviewParagraphs: string[];

  // Comparison
  comparisonHeading?: string;
  comparisonRows?: ComparisonRow[];

  // Features List
  featuresHeading: string;
  featuresSubtitle: string;
  features: SolutionFeature[];

  // Technical Architecture / Security
  securityHeading?: string;
  securityPoints?: string[];

  // Testimonials / Proof
  clientProofs?: ClientProof[];

  // FAQs
  faqs: FAQItem[];

  // Localisation
  isMarathi?: boolean;
}

export const SolutionLandingTemplate: React.FC<SolutionPageProps> = ({
  slug,
  title,
  metaDescription,
  targetKeyword,
  secondaryKeywords,
  badgeText,
  h1Title,
  h1Highlight,
  heroSubtitle,
  stats,
  overviewHeading,
  overviewParagraphs,
  comparisonHeading = "Legacy Software vs Manalix Core Banking Cloud",
  comparisonRows = [],
  featuresHeading,
  featuresSubtitle,
  features,
  securityHeading = "Bank-Grade Infrastructure & Regulatory Security",
  securityPoints = [],
  clientProofs = [],
  faqs,
  isMarathi = false,
}) => {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: isMarathi ? "सोल्युशन्स" : "Solutions", url: slug },
  ]);

  const softwareSchema = createSoftwareApplicationSchema({
    name: `${title} - Manalix Cloud CBS`,
    description: metaDescription,
    url: `${appConfig.url}${slug}`,
    featureList: features.map((f) => `${f.title}: ${f.description}`),
  });

  const faqSchema = createFAQSchema(faqs);

  return (
    <Layout>
      <SEO
        title={title}
        description={metaDescription}
        canonicalUrl={slug}
        keywords={[targetKeyword, ...secondaryKeywords]}
        jsonLd={[breadcrumbSchema, softwareSchema, faqSchema]}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary/15 via-background to-background pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs md:text-sm font-semibold animate-pulse">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{badgeText}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              {h1Title}{" "}
              {h1Highlight && (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400">
                  {h1Highlight}
                </span>
              )}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              {heroSubtitle}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button asChild size="lg" className="rounded-full px-8 py-6 text-base font-semibold shadow-lg hover:shadow-primary/30 transition-all">
                <a href="#demo-section">
                  {isMarathi ? "मोफत थेट डेमो बुक करा" : "Book Free Live Demo"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>

              <Button asChild variant="outline" size="lg" className="rounded-full px-7 py-6 text-base border-white/20 hover:bg-white/10 text-white">
                <a
                  href={`https://wa.me/919096081885?text=Hello%20Manalix,%20I%20am%20interested%20in%20${encodeURIComponent(targetKeyword)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-2 text-emerald-400" />
                  {isMarathi ? "व्हॉट्सॲपवर बोला" : "WhatsApp Inquiry"}
                </a>
              </Button>
            </div>

            {/* Quick stats counter bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-white/10 mt-10">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-white/60 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* In-Depth Overview & Context (Word Count & SEO Depth) */}
      <section className="py-16 md:py-20 bg-card/40 border-y border-white/5">
        <Container>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
              <Award className="w-4 h-4" />
              <span>{isMarathi ? "सखोल विहंगावलोकन" : "Comprehensive Technical Analysis"}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              {overviewHeading}
            </h2>

            <div className="space-y-4 text-white/80 leading-relaxed text-base sm:text-lg">
              {overviewParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Feature Modules Breakdown */}
      <section className="py-20 md:py-28 bg-background">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">
              <Building className="w-3.5 h-3.5" />
              <span>{isMarathi ? "प्रमुख मॉड्यूल" : "Core Banking Modules"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              {featuresHeading}
            </h2>
            <p className="text-white/70 text-base sm:text-lg">
              {featuresSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, idx) => {
              const IconComp = feature.icon || ShieldCheck;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-3xl bg-card border border-white/10 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 shadow-lg group relative flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/25 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>

                    <p className="text-white/70 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {feature.tags && feature.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-white/5">
                      {feature.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md bg-white/5 text-[11px] font-medium text-white/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Comparison: Legacy Desktop Software vs Manalix Cloud CBS */}
      {comparisonRows.length > 0 && (
        <section className="py-16 md:py-24 bg-card/30 border-y border-white/5">
          <Container>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-3">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  {comparisonHeading}
                </h2>
                <p className="text-white/60 text-sm sm:text-base">
                  {isMarathi
                    ? "जुन्या ऑफलाइन सॉफ्टवेअर आणि मनालिक्स क्लाउड सीबीएसमधील थेट तुलना"
                    : "Why modern institutions are migrating to Manalix Cloud CBS"}
                </p>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-white/10 bg-card shadow-xl">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/[0.03]">
                      <th className="p-4 text-white font-semibold w-1/3">
                        {isMarathi ? "वैशिष्ट्य / पैलू" : "Key Capability"}
                      </th>
                      <th className="p-4 text-rose-400 font-semibold w-1/3">
                        {isMarathi ? "जुने ऑफलाइन सॉफ्टवेअर" : "Legacy Desktop Software"}
                      </th>
                      <th className="p-4 text-emerald-400 font-semibold w-1/3">
                        {isMarathi ? "मनालिक्स क्लाउड कोअर बँकिंग" : "Manalix Cloud CBS"}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {comparisonRows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 text-white font-medium">{row.aspect}</td>
                        <td className="p-4 text-white/60 flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                          <span>{row.legacy}</span>
                        </td>
                        <td className="p-4 text-white/90 font-medium">
                          <div className="flex items-start gap-2 text-emerald-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{row.manalix}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Security & Regulatory Compliance Overview */}
      {securityPoints.length > 0 && (
        <section className="py-16 md:py-24 bg-background">
          <Container>
            <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-card via-[#0F172A] to-card border border-white/15 p-8 sm:p-12 shadow-2xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-primary/20 text-primary border border-primary/30">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{securityHeading}</h3>
                  <p className="text-xs sm:text-sm text-white/60">
                    {isMarathi ? "आरबीआय व सहकार आयुक्त सुरक्षा मानकांचे १००% पालन" : "Compliant with RBI Cybersecurity Framework & Sahakar Ayuktalay Norms"}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {securityPoints.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-white/80 leading-snug">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Client Proof & Testimonials */}
      {clientProofs.length > 0 && (
        <section className="py-16 md:py-24 bg-card/40 border-y border-white/5">
          <Container>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-primary font-semibold">
                  <Users className="w-4 h-4" />
                  <span>{isMarathi ? "ग्राहकांचे अनुभव" : "Customer Success Stories"}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  {isMarathi ? "महाराष्ट्रातील आघाडीच्या संस्थांचा विश्वास" : "Trusted by Leading Cooperative Societies"}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {clientProofs.map((proof, cIdx) => (
                  <div key={cIdx} className="p-6 sm:p-8 rounded-2xl bg-card border border-white/10 space-y-4 shadow-lg">
                    <p className="text-white/80 italic text-sm leading-relaxed">&ldquo;{proof.quote}&rdquo;</p>
                    <div className="pt-2 border-t border-white/5">
                      <div className="font-semibold text-white text-sm">{proof.author}</div>
                      <div className="text-xs text-primary font-medium">{proof.role} • {proof.organization}</div>
                      <div className="text-xs text-white/50">{proof.location}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Comprehensive FAQ Section (Schema Markup Included) */}
      <section className="py-20 md:py-28 bg-background">
        <Container>
          <div className="max-w-3xl mx-auto space-y-10">
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>FAQ</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {isMarathi ? "नेहमी विचारले जाणारे प्रश्न" : "Frequently Asked Questions"}
              </h2>
              <p className="text-white/70 text-sm sm:text-base">
                {isMarathi
                  ? "सॉफ्टवेअर, मायग्रेशन आणि नियमांबद्दल सर्व शंकांचे निरसन"
                  : "Everything you need to know about implementation, migration, and compliance."}
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4 w-full">
              {faqs.map((faq, fIdx) => (
                <AccordionItem
                  key={fIdx}
                  value={`item-${fIdx}`}
                  className="rounded-2xl border border-white/10 bg-card px-5 sm:px-6 py-1 data-[state=open]:border-primary/40 transition-colors"
                >
                  <AccordionTrigger className="text-base sm:text-lg font-semibold text-white hover:text-primary text-left py-4 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70 text-sm sm:text-base leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>

      {/* Demo Booking / Lead Capture Section */}
      <section id="demo-section" className="py-20 md:py-28 bg-card/60 border-t border-white/10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{isMarathi ? "विनामूल्य सल्लामसलत" : "Free Custom Consultation"}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                {isMarathi
                  ? "तुमच्या संस्थेसाठी थेट डेमो आणि दरपत्रक मिळवा"
                  : "Experience the Future of Core Banking. Book Your Free Demo Today."}
              </h2>

              <p className="text-white/75 text-base sm:text-lg leading-relaxed">
                {isMarathi
                  ? "आमचे तज्ज्ञ तुमच्या पतसंस्थेच्या आवश्यकतेनुसार संपूर्ण सॉफ्टवेअर, पिग्मी ॲप आणि ९९ मुद्द्यांचे ऑडिट रिपोर्ट लाइव्ह दाखवतील."
                  : "Our cooperative banking solution architects will walk your board of directors and management through live pigmy collection, loan underwriting, automated audit reports, and seamless data migration."}
              </p>

              <div className="space-y-3 pt-2 text-sm text-white/70">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{isMarathi ? "४८ तासांत सुरक्षित डेटा मायग्रेशन" : "Zero-downtime data migration in 48-72 hours"}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{isMarathi ? "सहकार आयुक्त ९९ मुद्दे वैधानिक ऑडिट वर्ग 'अ' खात्री" : "Full 99-parameter Sahakar audit report automation"}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{isMarathi ? "२४/७ समर्पित ग्राहक सेवा व मोफत कर्मचारी प्रशिक्षण" : "24/7 dedicated support & free staff training included"}</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-white/50">{isMarathi ? "थेट फोनवर बोला" : "Direct Helpline"}</div>
                  <a href={`tel:${appConfig.phone}`} className="text-lg font-bold text-white hover:text-primary transition-colors">
                    {appConfig.displayPhone}
                  </a>
                </div>
              </div>
            </div>

            {/* Contact / Demo Form */}
            <div className="p-8 sm:p-10 rounded-3xl bg-card border border-white/15 shadow-2xl relative">
              <h3 className="text-2xl font-bold text-white mb-2">
                {isMarathi ? "डेमोसाठी माहिती भरा" : "Schedule Live Demonstration"}
              </h3>
              <p className="text-sm text-white/60 mb-6">
                {isMarathi
                  ? "खालील फॉर्म भरा, आमचे प्रतिनिधी २४ तासांच्या आत संपर्क साधतील."
                  : "Fill in your society details and our team will get in touch within 24 hours."}
              </p>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

