import Layout from "@/components/layout";
import SEO from "@/components/seo";
import PricingSection from "@/components/sections/home/pricing";
import FAQ from "@/components/sections/shared/faq";
import { createBreadcrumbSchema, createSoftwareApplicationSchema } from "@/lib/seo-schemas";

const Pricing = () => {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Pricing Plans", url: "/pricing" },
  ]);

  const appSchema = createSoftwareApplicationSchema({
    name: "Manalix Core Banking Cloud Pricing",
    description:
      "Transparent, scalable pricing plans for cooperative credit societies, patsansthas, and NBFCs in India. No hidden charges, includes free setup & migration.",
    url: "https://www.manalix.com/pricing",
  });

  return (
    <Layout>
      <SEO
        title="Core Banking Software Pricing & Plans | Manalix CBS"
        description="Transparent pricing for cooperative credit societies, patsansthas, and NBFCs. Scalable cloud plans with zero hidden fees. Book a free consultation."
        canonicalUrl="/pricing"
        keywords={[
          "core banking software price India",
          "patsanstha software cost",
          "credit society software pricing",
          "cloud CBS subscription",
          "pigmy software rates",
        ]}
        jsonLd={[breadcrumbSchema, appSchema]}
      />
      <div className="pt-20">
        <PricingSection />
      </div>
      <FAQ />
    </Layout>
  );
};

export default Pricing;
