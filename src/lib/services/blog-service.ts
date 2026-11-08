import { supabase } from "@/integrations/supabase/client";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  author: string;
  date: string;
  read_time: string;
  image: string;
  content: string | null;
  created_at: string;
  updated_at: string;
}

export interface BlogPostInput {
  title: string;
  slug: string;
  category: string;
  author: string;
  date: string;
  read_time: string;
  image: string;
  content: string | null;
}

export const FALLBACK_BLOG_POSTS: BlogPost[] = [
  {
    id: "post-1",
    title: "How Cooperative Credit Societies Can Safely Migrate From Legacy Desktop Software to Cloud CBS",
    slug: "data-migration-guide-cooperative-credit-societies",
    category: "Data Migration",
    author: "Shaikh Mohemmed Amin",
    date: "Nov 5, 2026",
    read_time: "6 min read",
    image: "/images/common/banner-gradient.webp",
    created_at: "2026-11-05T10:00:00Z",
    updated_at: "2026-11-05T10:00:00Z",
    content: `
      <h2>The Urgency to Move Beyond Single-PC Desktop Software</h2>
      <p>For decades, cooperative credit societies and patsansthas across Maharashtra and India have run their entire financial operations on standalone desktop software installed on a single branch PC. While these legacy tools served their purpose in earlier years, they have now become the single greatest operational and regulatory vulnerability facing society management.</p>
      
      <p>Hard drive failures, malicious ransomware attacks, lack of offsite backups, and employee turnover with password lockouts frequently cause catastrophic data loss. Furthermore, desktop tools cannot support modern digital requirements such as daily pigmy mobile collections, member passbook mobile apps, or real-time branch networking.</p>

      <h2>The 5-Stage Zero-Downtime Migration Blueprint</h2>
      <p>At Manalix Technologies, we have executed data migrations for over 150 credit societies without losing a single transaction. Here is the step-by-step process our engineering team employs:</p>

      <h3>1. Pre-Migration Data Audit & Cleansing</h3>
      <p>Before any data is transferred, we run automated validation scripts against the legacy database (FoxPro, Tally, Microsoft Access, or SQL). This step identifies orphaned ledger entries, duplicate member IDs, un-reconciled suspense accounts, and broken interest accrual schedules.</p>

      <h3>2. Schema Normalization & Chart of Accounts Mapping</h3>
      <p>Cooperative accounting structures require strict adherence to regulatory norms. We map your existing Chart of Accounts (COA) directly into the standardized Manalix double-entry general ledger, ensuring complete compatibility with the Maharashtra Co-operative Societies Act 1960.</p>

      <h3>3. Parallel Run & Trial Balance Verification</h3>
      <p>A sandbox migration is executed over a weekend. We import all historical balances and run both systems in parallel for 48 hours. The closing balances of Cash-in-Hand, DCCB Bank Accounts, Term Deposits (FD/RD), and Active Loan Accounts must match down to the last paisa.</p>

      <h3>4. Staff & Teller Training</h3>
      <p>Your branch managers, cashiers, and loan officers undergo hands-on interactive training on the Manalix Cloud interface. Because the UI is intuitive and supports Marathi, Hindi, and English, branch staff achieve full proficiency within 2 to 3 days.</p>

      <h3>5. Final Cutover & Go-Live</h3>
      <p>On cutover day (typically over a Sunday), the final end-of-day balances are synchronized, cloud backups are locked, and the society opens on Monday morning operating 100% on cloud CBS with zero downtime for members.</p>
    `,
  },
  {
    id: "post-2",
    title: "Complete Guide to Achieving Class 'A' Audit Rating for Maharashtra Patsansthas (99-Parameter Checklist)",
    slug: "sahakar-compliance-audit-guide-maharashtra",
    category: "Regulatory Compliance",
    author: "Sanjay Kulkarni (FCA)",
    date: "Nov 3, 2026",
    read_time: "8 min read",
    image: "/images/common/banner-gradient.webp",
    created_at: "2026-11-03T10:00:00Z",
    updated_at: "2026-11-03T10:00:00Z",
    content: `
      <h2>Why Audit Class 'A' (वर्ग 'अ') Rating is Critical for Your Patsanstha</h2>
      <p>In Maharashtra, a cooperative credit society's statutory audit rating is its primary public badge of trust. Under the oversight of the Commissioner for Cooperation and Registrar of Co-operative Societies (सहकार आयुक्तालय, पुणे), societies securing Class 'A' ratings enjoy regulatory goodwill, higher public deposit inflows, and authorization to expand branches and introduce new deposit schemes.</p>
      
      <p>Conversely, falling to Class 'B' or 'C' triggers mandatory audit remarks, board scrutiny, restricted dividend distribution, and increased inspection frequencies.</p>

      <h2>Key Pillars of the 99-Parameter Statutory Audit</h2>
      <p>The Maharashtra statutory audit questionnaire evaluates 99 distinct parameters categorized into four primary dimensions:</p>

      <h3>1. Capital Adequacy & Net Worth</h3>
      <p>Maintaining an adequate ratio of owned funds (Share Capital + Statutory Reserve Funds) relative to total outside borrowings and member deposits. The society must ensure that minimum statutory reserve fund transfers (at least 25% of net profits) are calculated and credited correctly.</p>

      <h3>2. NPA Classification & Mandatory Provisioning</h3>
      <p>Non-performing assets (NPAs) are scrutinized ruthlessly by cooperative panel auditors. Overdue loans must be classified accurately into Standard, Sub-standard, Doubtful 1/2/3, and Loss assets. Societies utilizing Manalix Cloud CBS generate automated provisioning matrices that match statutory directives precisely.</p>

      <h3>3. Cash Retention Limits & Bank Reconciliation (BRS)</h3>
      <p>Holding cash in excess of the sanctioned daily retention limit without prior approval from the District Deputy Registrar (DDR) is a frequent cause of audit downgrades. Manalix enforces daily cash threshold alerts and automated daily BRS with DCCBs.</p>

      <h3>4. Section 101 Recovery Action Against Defaulters</h3>
      <p>Auditors verify whether the management has initiated formal legal recovery against chronic defaulters under Section 101 of the Maharashtra Co-operative Societies Act 1960. Automated generation of demand notices and dispute filings demonstrates diligent governance.</p>
    `,
  },
  {
    id: "post-3",
    title: "Implementing Digital KYC, Aadhaar Verification & Mobile Banking for Modern Credit Societies",
    slug: "digital-kyc-mobile-banking-patsanstha",
    category: "Digital Banking",
    author: "Shaikh Mohemmed Amin",
    date: "Oct 28, 2026",
    read_time: "5 min read",
    image: "/images/common/banner-gradient.webp",
    created_at: "2026-10-28T10:00:00Z",
    updated_at: "2026-10-28T10:00:00Z",
    content: `
      <h2>Bridging the Generational Divide in Cooperative Banking</h2>
      <p>As the younger generation of depositors and small business owners enters the workforce, their expectations of banking have fundamentally transformed. They demand instant balance inquiries on their smartphones, instant SMS transaction alerts, and paperless onboarding.</p>

      <p>Credit cooperative societies that fail to offer modern digital channels face an aging member base and declining deposit growth. Fortunately, modern cloud CBS platforms like Manalix allow even small rural and urban patsansthas to deploy enterprise-grade digital banking without hefty upfront capital investment.</p>

      <h2>Core Digital Capabilities for Credit Societies</h2>
      <h3>1. Paperless Onboarding with Digital KYC</h3>
      <p>Replace paper photocopy archives with digital member onboarding. Capture Aadhaar, PAN, and photo proofs directly via tablet or mobile camera. Verification data is stored securely in compliance with the Digital Personal Data Protection (DPDP) Act.</p>

      <h3>2. The Member Mobile Passbook App</h3>
      <p>Provide your members with a branded mobile application available on Android and iOS. Members can view live account balances, monitor daily pigmy collection deposits, review active loan EMI schedules, and download annual interest certificates for tax filing.</p>

      <h3>3. Two-Way SMS & WhatsApp Notifications</h3>
      <p>Eliminate member anxiety by sending automated notifications for every credit, debit, interest capitalization, and maturity milestone. Pre-debit loan reminders sent 3 days before EMI due dates reduce bounce rates by up to 35%.</p>
    `,
  },
  {
    id: "post-4",
    title: "10 Essential Factors to Consider When Choosing Core Banking Software for Your Credit Society in 2026",
    slug: "how-to-choose-best-cooperative-banking-software",
    category: "Software Guide",
    author: "Manalix Editorial Team",
    date: "Oct 20, 2026",
    read_time: "7 min read",
    image: "/images/common/banner-gradient.webp",
    created_at: "2026-10-20T10:00:00Z",
    updated_at: "2026-10-20T10:00:00Z",
    content: `
      <h2>Navigating the Core Banking Software Evaluation Process</h2>
      <p>Selecting the right Core Banking Solution (CBS) is one of the most critical decisions a cooperative society's Board of Directors will ever make. The software you choose directly dictates your operational efficiency, member satisfaction, regulatory compliance, and total cost of ownership for the next decade.</p>

      <h2>The 10-Point Evaluation Checklist</h2>
      <ol>
        <li><strong>True Cloud Architecture vs Remote Desktop:</strong> Ensure the software is genuinely cloud-native (accessible via web browser without installing clunky EXE files or TeamViewer).</li>
        <li><strong>Automated Pigmy Collection App:</strong> Verify that the agent mobile app supports Bluetooth thermal printing and works reliably offline in weak network areas.</li>
        <li><strong>State Cooperative Department Compliance:</strong> Check for built-in 99-parameter audit questionnaires, Form 1 and Form 28 formats, and Section 101 recovery notice templates.</li>
        <li><strong>Data Security & Tier-4 Hosting:</strong> Verify ISO 27001 certification, data residency within India, 256-bit AES encryption, and automated hourly backups.</li>
        <li><strong>Data Migration Track Record:</strong> Ask for proven case studies of successful zero-downtime balance sheet migrations from your current software.</li>
        <li><strong>Maker-Checker Authorization:</strong> The software must enforce strict dual authorization for cash withdrawals, loan sanctions, and ledger modifications.</li>
        <li><strong>Comprehensive Loan Management:</strong> Native support for Gold Loans (with carat purity and net weight calculators), Personal Surety Loans, and Mortgage Loans.</li>
        <li><strong>Member Mobile Experience:</strong> Ensure a white-labeled mobile passbook app is included for members in regional languages (Marathi, Hindi, English).</li>
        <li><strong>Credit Bureau Integration:</strong> Automated monthly export in CIBIL, Experian, Equifax, and CRIF HighMark formats.</li>
        <li><strong>Transparent Pricing with No Hidden Fees:</strong> Avoid vendors who charge unexpected fees for annual maintenance (AMC), server backups, or regulatory updates.</li>
      </ol>
    `,
  },
];

export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

export const calculateReadTime = (content: string | null): string => {
  if (!content) return "1 min read";
  const text = content.replace(/<[^>]*>/g, "");
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
};

export const getBlogPosts = async (category?: string): Promise<BlogPost[]> => {
  try {
    let query = supabase.from("blog_posts").select("*").order("created_at", { ascending: false });
    if (category) {
      query = query.eq("category", category);
    }
    const { data, error } = await query;
    if (!error && data && data.length > 0) {
      return data;
    }
  } catch (err) {
    console.warn("Supabase blog query failed, falling back to static posts:", err);
  }

  if (category) {
    return FALLBACK_BLOG_POSTS.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  }
  return FALLBACK_BLOG_POSTS;
};

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  try {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("slug", slug)
      .maybeSingle();

    if (!error && data) {
      return data;
    }
  } catch (err) {
    console.warn("Supabase single post query failed, searching fallbacks:", err);
  }

  const fallback = FALLBACK_BLOG_POSTS.find((p) => p.slug === slug);
  return fallback || null;
};

export const getBlogPostById = async (id: string): Promise<BlogPost | null> => {
  try {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("id", id)
      .maybeSingle();

    if (!error && data) {
      return data;
    }
  } catch (err) {
    console.warn("Supabase query failed:", err);
  }

  return FALLBACK_BLOG_POSTS.find((p) => p.id === id) || null;
};

export const getCategories = async (): Promise<string[]> => {
  try {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("category")
      .order("category");

    if (!error && data && data.length > 0) {
      const cats = Array.from(new Set(data.map((p) => p.category)));
      return cats;
    }
  } catch (err) {
    console.warn("Supabase categories query failed:", err);
  }

  return ["Data Migration", "Regulatory Compliance", "Digital Banking", "Software Guide"];
};

export const getFeaturedPosts = async (): Promise<BlogPost[]> => {
  try {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(2);

    if (!error && data && data.length > 0) {
      return data;
    }
  } catch (err) {
    console.warn("Supabase featured query failed:", err);
  }

  return FALLBACK_BLOG_POSTS.slice(0, 2);
};

export const getRelatedPosts = async (currentSlug: string, limit: number = 3): Promise<BlogPost[]> => {
  try {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .neq("slug", currentSlug)
      .order("created_at", { ascending: false })
      .limit(limit);

    if (!error && data && data.length > 0) {
      return data;
    }
  } catch (err) {
    console.warn("Supabase related query failed:", err);
  }

  return FALLBACK_BLOG_POSTS.filter((p) => p.slug !== currentSlug).slice(0, limit);
};

export const createBlogPost = async (post: BlogPostInput): Promise<BlogPost | null> => {
  const { data, error } = await supabase.from("blog_posts").insert(post).select().single();
  if (error) throw error;
  return data;
};

export const updateBlogPost = async (id: string, post: Partial<BlogPostInput>): Promise<BlogPost | null> => {
  const { data, error } = await supabase.from("blog_posts").update(post).eq("id", id).select().single();
  if (error) throw error;
  return data;
};

export const deleteBlogPost = async (id: string): Promise<void> => {
  const { error } = await supabase.from("blog_posts").delete().eq("id", id);
  if (error) throw error;
};

export const uploadBlogImage = async (file: File): Promise<string> => {
  const fileExt = file.name.split(".").pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
  const filePath = `posts/${fileName}`;

  const { error: uploadError } = await supabase.storage.from("blog-images").upload(filePath, file);
  if (uploadError) throw uploadError;

  const { data } = supabase.storage.from("blog-images").getPublicUrl(filePath);
  return data.publicUrl;
};

export const getPaginatedBlogPosts = async (
  page: number = 1,
  pageSize: number = 10,
  category?: string,
  search?: string
): Promise<{ posts: BlogPost[]; total: number }> => {
  try {
    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;

    let query = supabase
      .from("blog_posts")
      .select("*", { count: "exact" })
      .order("created_at", { ascending: false })
      .range(from, to);

    if (category) {
      query = query.eq("category", category);
    }

    if (search) {
      query = query.or(`title.ilike.%${search}%,author.ilike.%${search}%`);
    }

    const { data, error, count } = await query;
    if (!error && data && data.length > 0) {
      return { posts: data, total: count || 0 };
    }
  } catch (err) {
    console.warn("Supabase paginated query failed:", err);
  }

  let posts = FALLBACK_BLOG_POSTS;
  if (category) {
    posts = posts.filter((p) => p.category.toLowerCase() === category.toLowerCase());
  }
  if (search) {
    const s = search.toLowerCase();
    posts = posts.filter((p) => p.title.toLowerCase().includes(s) || p.author.toLowerCase().includes(s));
  }
  return { posts, total: posts.length };
};
