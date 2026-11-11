import Layout from "@/components/layout";
import Hero from "@/components/sections/home/hero";
import SEO from "@/components/seo";
import GatewayPartners from "@/components/sections/home/gateway-partners";
import CoreModules from "@/components/sections/home/core-modules";
import KycPartners from "@/components/sections/home/kyc-partners";
import Confidence from "@/components/sections/home/confidence";
import Content from "@/components/sections/home/content";
import Testimonials from "@/components/sections/home/testimonials";
import FAQ from "@/components/sections/shared/faq";
import {
  createWebSiteSchema,
  createSoftwareApplicationSchema,
  createFAQSchema,
} from "@/lib/seo-schemas";

const homeFaqs = [
  {
    question: "What is Manalix Technologies Private Limited?",
    answer:
      "Manalix Technologies Private Limited is a premier core banking software and fintech infrastructure company powering cooperative credit societies, patsansthas, employee credit societies, and NBFCs across Maharashtra and India. It also powers modern digital payment platforms like FivoPay.",
  },
  {
    question: "How does Manalix Core Banking Cloud differ from legacy desktop software?",
    answer:
      "Unlike traditional offline, single-computer desktop software, Manalix is 100% cloud-native. It offers real-time branch synchronization, daily automated backups, end-to-end 256-bit encryption, member mobile passbook app, agent pigmy collection app with Bluetooth thermal printing, and automated statutory audit reports compliant with the Sahakar Commissionerate.",
  },
  {
    question: "Is Manalix software compliant with Maharashtra Sahakar Ayuktalay and RBI guidelines?",
    answer:
      "Yes. Manalix provides full 99-parameter statutory audit automation, NPA classification, CRR/SLR liquidity monitoring, CIBIL/Equifax data exports, Section 101/91 recovery notices, and complete regulatory reporting to help societies secure and maintain Class 'A' audit ratings.",
  },
  {
    question: "How long does data migration from old software take?",
    answer:
      "Our specialized data migration engineers migrate all historical ledgers, member accounts, active loans, and term deposits from legacy software (like Tally, FoxPro, or custom local databases) with 100% data validation within 48 to 72 hours, with zero downtime for society members.",
  },
  {
    question: "Can society members access mobile banking and SMS transaction alerts?",
    answer:
      "Yes. Manalix comes with a dedicated Member Mobile App (Android & iOS) enabling members to view live account balances, download digital passbooks, track loan repayment schedules, and receive instant 2-way SMS and WhatsApp transaction alerts.",
  },
  {
    question: "How can our society book a free live demo?",
    answer:
      "You can schedule a free, personalized live demonstration by clicking 'Book Free Demo', calling our Pune office directly at +91 9096081885, or emailing info@fivopay.com. Our banking solutions consultants will demonstrate the platform live with your specific workflow requirements.",
  },
];

const Home = () => {
  const schemas = [
    createWebSiteSchema(),
    createSoftwareApplicationSchema({
      name: "Manalix Cooperative Core Banking Software",
      description:
        "Leading cooperative software provider in India. Cloud core banking for credit cooperative societies, pathpidhi, and pathsansthas. Powers FivoPay. Book a demo.",
      url: "https://www.manalix.com/",
    }),
    createFAQSchema(homeFaqs),
  ];

  return (
    <Layout>
      <SEO
        title="Cooperative Software Provider | Credit Society & Pathsantha | Manalix"
        description="Leading cooperative software provider in India. Cloud core banking for credit cooperative societies, pathpidhi, and pathsansthas. Powers FivoPay. Book a demo."
        canonicalUrl="/"
        keywords={[
          "cooperative software provider",
          "cooperative software",
          "credit cooperative software",
          "credit society software",
          "credit society",
          "pathsantha",
          "pathsantha software",
          "pathpidhi",
          "pathpidhi software",
          "credit",
          "cooperative",
          "software",
          "core banking software for cooperative societies",
          "patsanstha software Maharashtra",
          "credit society software Pune",
          "Manalix Technologies Private Limited",
          "FivoPay banking infrastructure",
        ]}
        jsonLd={schemas}
      />
      <Hero />
      <GatewayPartners />
      <CoreModules />
      <KycPartners />
      <Confidence />
      <Content />
      <Testimonials />
      <FAQ />
    </Layout>
  );
};

export default Home;
