import Layout from "@/components/layout";
import ContactForm from "@/components/sections/contact/contact-form";
import Container from "@/components/container";
import SEO from "@/components/seo";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { useLanguage } from "@/context/language-context";
import { createBreadcrumbSchema } from "@/lib/seo-schemas";
import { appConfig } from "@/utils/app-config";

const Contact = () => {
  const { t } = useLanguage();

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact & Demo Booking", url: "/contact" },
  ]);

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Manalix Technologies Private Limited",
    description: "Get in touch with Manalix Technologies for cooperative core banking software, demo bookings, and technical support.",
    url: "https://www.manalix.com/contact",
    mainEntity: {
      "@type": "Organization",
      name: appConfig.legalName,
      telephone: appConfig.phone,
      email: appConfig.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: appConfig.address.street,
        addressLocality: appConfig.address.city,
        addressRegion: appConfig.address.state,
        postalCode: appConfig.address.postalCode,
        addressCountry: "IN",
      },
    },
  };

  const contactDetails = [
    {
      icon: Mail,
      title: t.contact.emailUs,
      detail: appConfig.email,
      subtext: t.contact.emailSub,
    },
    {
      icon: Phone,
      title: t.contact.callUs,
      detail: appConfig.displayPhone,
      subtext: t.contact.callSub,
    },
    {
      icon: MapPin,
      title: t.contact.visitUs,
      detail: `${appConfig.address.street}, ${appConfig.address.city}`,
      subtext: `${appConfig.address.state}, ${appConfig.address.country}`,
    },
    {
      icon: Clock,
      title: t.contact.supportHours,
      detail: t.contact.supportDetail,
      subtext: t.contact.supportSub,
    },
  ];

  return (
    <Layout>
      <SEO
        title="Contact Manalix Technologies | Book a Free Core Banking Demo"
        description="Contact Manalix Technologies Private Limited in Viman Nagar, Pune. Call +91 9096081885 or book a free live demo of our cloud core banking software."
        canonicalUrl="/contact"
        keywords={[
          "contact Manalix Technologies",
          "book core banking demo",
          "patsanstha software demo",
          "cooperative banking office Pune",
          "credit society software support",
        ]}
        jsonLd={[breadcrumbSchema, contactPageSchema]}
      />
      <section className="py-20 md:py-[120px] bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none -z-10"></div>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-10">
            {/* Left side: Contact Details */}
            <div className="space-y-8">
              <AnimateOnView blur>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-3">
                  <span>Pune, Maharashtra • Head Office</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
                  Get in Touch with Manalix Technologies
                </h1>
                <p className="text-muted-foreground text-lg">
                  Speak directly with our cooperative banking and fintech software specialists. We are here to help your institution migrate smoothly to the cloud.
                </p>
              </AnimateOnView>

              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {contactDetails.map((item, index) => (
                  <AnimateOnView
                    key={index}
                    blur
                    delay={index * 0.1}
                    className="p-6 rounded-2xl bg-card border border-white/5 hover:border-primary/20 transition-all duration-300 shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white font-medium mb-1">{item.detail}</p>
                    <p className="text-sm text-muted-foreground">{item.subtext}</p>
                  </AnimateOnView>
                ))}
              </StaggerContainer>

              <div className="p-6 rounded-2xl bg-card/60 border border-white/10 space-y-2">
                <h4 className="text-sm font-semibold text-white">Corporate Identity & Legal Entity</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <strong>Manalix Technologies Private Limited</strong> (formerly known as <strong>Saikhlearn &amp; Scholar Nexus Private Limited</strong>) is a registered corporate technology entity in Pune, Maharashtra. We adhere to ISO 27001 data security standards, RBI cybersecurity guidelines for cooperative banks, and Sahakar Commissioner compliance benchmarks.
                </p>
              </div>
            </div>

            {/* Right side: Form */}
            <div className="bg-card p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">Schedule a Free Live Demo</h2>
                <p className="text-muted-foreground text-sm">
                  Fill in your details below and our team will get in touch within 24 hours.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default Contact;
