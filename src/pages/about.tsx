import Layout from "@/components/layout";
import SEO from "@/components/seo";
import AboutHero from "@/components/sections/about/about-hero";
import ConfidenceSection from "@/components/sections/about/confidence-section";
import InnovationSection from "@/components/sections/about/innovation-section";
import JourneySection from "@/components/sections/about/journey-section";
import TeamGrid from "@/components/sections/about/team-grid";
import JoinJourney from "@/components/sections/about/join-journey";
import { createBreadcrumbSchema } from "@/lib/seo-schemas";

const About = () => {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About Manalix Technologies", url: "/about" },
  ]);

  return (
    <Layout>
      <SEO
        title="About Us | Manalix Technologies Private Limited"
        description="Learn about Manalix Technologies Private Limited, our mission to modernize cooperative banking in India, and our team based in Viman Nagar, Pune."
        canonicalUrl="/about"
        keywords={[
          "Manalix Technologies Private Limited",
          "about Manalix",
          "cooperative banking software Pune",
          "fintech company Viman Nagar Pune",
          "FivoPay parent company",
        ]}
        jsonLd={[breadcrumbSchema]}
      />
      <AboutHero />
      <ConfidenceSection />
      <InnovationSection />
      <JourneySection />
      <TeamGrid />
      <JoinJourney />
    </Layout>
  );
};

export default About;
