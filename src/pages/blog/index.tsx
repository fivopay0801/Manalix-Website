import Layout from "@/components/layout";
import BlogBanner from "@/components/sections/blog/blog-banner";
import SEO from "@/components/seo";
import { createBreadcrumbSchema } from "@/lib/seo-schemas";

const Blog = () => {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog & Knowledge Base", url: "/blog" },
  ]);

  return (
    <Layout>
      <SEO
        title="Cooperative Banking & Patsanstha Insights | Manalix Blog"
        description="Expert insights for Indian cooperative societies and patsansthas: data migration, Sahakar 99-parameter audit compliance, digital KYC, and cloud core banking."
        canonicalUrl="/blog"
        keywords={[
          "cooperative banking blog",
          "patsanstha software guide",
          "sahakar audit checklist",
          "credit society data migration",
          "pigmy machine app tips",
        ]}
        jsonLd={[breadcrumbSchema]}
      />
      <BlogBanner />
    </Layout>
  );
};

export default Blog;
