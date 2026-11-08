import Layout from '@/components/layout';
import SEO from '@/components/seo';
import FeatureGrid from '@/components/sections/feature/feature-grid';
import Features from '@/components/sections/home/features';
import FutureReadyFinance from '@/components/sections/feature/future-ready';
import FeatureGrowth from '@/components/sections/feature/growth';
import FeatureHero from '@/components/sections/feature/hero';
import FeatureIntegration from '@/components/sections/feature/integration';
import { createBreadcrumbSchema, createSoftwareApplicationSchema } from '@/lib/seo-schemas';

const Feature = () => {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Core Banking Features & Modules', url: '/product' },
  ]);

  const appSchema = createSoftwareApplicationSchema({
    name: 'Manalix Enterprise Core Banking Modules',
    description:
      'Comprehensive cloud CBS modules: pigmy deposit collection app, loan management, savings, term deposits, general ledger & mobile banking for societies.',
    url: 'https://www.manalix.com/product',
  });

  return (
    <Layout>
      <SEO
        title="Core Banking Software Features & Modules | Manalix"
        description="Comprehensive cloud CBS modules: pigmy deposit collection app, loan management, savings, term deposits, general ledger & mobile banking for societies."
        canonicalUrl="/product"
        keywords={[
          "core banking software features",
          "cooperative banking modules",
          "pigmy deposit app",
          "loan origination system India",
          "general ledger cooperative society",
          "mobile banking for credit society",
        ]}
        jsonLd={[breadcrumbSchema, appSchema]}
      />
      <FeatureHero />
      <FeatureGrid />
      <Features />
      <FeatureIntegration />
      <FutureReadyFinance />
      <FeatureGrowth />
    </Layout>
  );
};

export default Feature;
