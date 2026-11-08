import React from "react";
import { SolutionLandingTemplate } from "@/components/solutions/solution-landing-template";
import {
  Sparkles,
  Coins,
  ShieldCheck,
  Scale,
  Building2,
  FileCheck2,
  TrendingUp,
  Receipt,
  Users2,
  Lock,
  HeartHandshake,
  BookOpen,
} from "lucide-react";

const ShariahCompliantBankingSoftwarePage: React.FC = () => {
  return (
    <SolutionLandingTemplate
      slug="/shariah-compliant-banking-software"
      title="Interest-Free & Shariah Compliant Banking Software | Cloud CBS"
      metaDescription="Cloud interest-free & Shariah-compliant core banking software in India. Murabaha, Mudarabah, Diminishing Musharakah, Qard Hasan & audit. Free demo."
      targetKeyword="interest-free / Islamic banking software India"
      secondaryKeywords={[
        "Shariah compliant core banking system",
        "Islamic cooperative credit society software",
        "Murabaha financing software",
        "Mudarabah profit sharing CBS",
        "interest free microfinance software India",
        "halal banking software India",
        "ethical core banking platform",
      ]}
      badgeText="India's Foremost Ethical & Shariah-Compliant CBS"
      h1Title="Interest-Free & Shariah-Compliant Core Banking Software for"
      h1Highlight="Ethical Cooperative Institutions"
      heroSubtitle="Empowering interest-free cooperative societies, ethical mutual benefit trusts, and Shariah-compliant microfinance institutions with cloud core banking. Seamlessly execute Murabaha, Mudarabah, Diminishing Musharakah, and Qard Hasan contracts with complete Shariah audit compliance."
      stats={[
        { value: "100%", label: "Riba-Free Accounting" },
        { value: "45+", label: "Ethical Societies & Trusts" },
        { value: "₹850 Cr+", label: "Ethical Financing Managed" },
        { value: "AAOIFI", label: "Accounting Standards Ready" },
      ]}
      overviewHeading="Ethical, Transparent & Rigorously Shariah-Compliant Core Banking"
      overviewParagraphs={[
        "Across India and global emerging markets, millions of individuals, community trusts, and entrepreneurs seek interest-free, ethical financial alternatives that strictly avoid Riba (interest), Gharar (excessive ambiguity), and Maysir (gambling/speculation). Interest-free cooperative credit societies, employee mutual funds, and community microfinance institutions provide vital socio-economic development, asset financing, and welfare support based on risk-sharing and asset-backed commerce.",
        "However, nearly all conventional core banking softwares are fundamentally built around debt-interest paradigms. Attempting to fit ethical contracts like Murabaha (cost-plus sale), Mudarabah (trust financing), Musharakah (partnership financing), or Qard Hasan (benevolent interest-free loans) into standard interest-driven systems leads to severe accounting discrepancies, operational friction, and failure during Shariah supervisory board audits.",
        "Manalix provides a purpose-built, cloud-native Shariah-Compliant Core Banking Platform. Engineered in collaboration with leading Islamic finance scholars, cooperative chartered accountants, and fintech architects, our software implements genuine contract workflows rather than cosmetic labels. From inventory asset tracking and offer-acceptance (Ijab & Qabul) timestamps in Murabaha sales to dynamic profit-sharing ratio (PSR) calculations and monthly weightage distribution in Mudarabah deposits, every transaction adheres to AAOIFI guidelines and the Indian Co-operative Societies Act.",
        "In addition, the platform includes dedicated modules for institutional Zakat calculation, charity/sadaqah fund segregation, and benevolent Qard Hasan tracking with nominal administrative expense recovery. Backed by bank-grade cloud security, mobile apps for members, and automated audit reporting, Manalix empowers ethical institutions to operate at modern commercial standards.",
      ]}
      featuresHeading="Specialized Shariah Financial Modules"
      featuresSubtitle="Authentic contract execution and accounting for ethical financial institutions."
      features={[
        {
          title: "Murabaha (Cost-Plus Sale Financing)",
          description:
            "Asset-backed trade financing module for consumer durables, vehicles, raw materials, and machinery. Implements vendor purchase, society ownership, offer-and-acceptance (Ijab & Qabul), and deferred installment recovery.",
          icon: Scale,
          tags: ["Murabaha", "Cost-Plus Sale", "Asset Ownership Audit"],
        },
        {
          title: "Mudarabah (Profit-Sharing Deposits)",
          description:
            "Profit-and-loss sharing deposit accounts. Configurable Profit Sharing Ratios (PSR), dynamic daily product weightage calculation, and transparent monthly profit pool distribution without fixed interest promises.",
          icon: TrendingUp,
          tags: ["Mudarabah", "Weightage System", "Profit Distribution"],
        },
        {
          title: "Diminishing Musharakah & Ijara",
          description:
            "Joint ownership and declining co-partnership model for housing, commercial real estate, and capital equipment. Automated unit-redemption schedules and monthly fair-market rental billing.",
          icon: Building2,
          tags: ["Diminishing Musharakah", "Ijara Leasing", "Property Financing"],
        },
        {
          title: "Qard Hasan (Benevolent Interest-Free Loans)",
          description:
            "Module for microfinance and emergency welfare loans with 0% interest and 0% markup. Transparent recovery of actual operational overhead expenses in accordance with Shariah standards.",
          icon: HeartHandshake,
          tags: ["Qard Hasan", "Zero Interest", "Welfare Lending"],
        },
        {
          title: "Wadiah & Amanah (Safe Custody Accounts)",
          description:
            "Savings and current deposit accounts based on Wadiah Yad Dhamanah (guaranteed safe custody) or Amanah. Full capital guarantee with option for voluntary non-guaranteed promotional gifts (Hiba).",
          icon: ShieldCheck,
          tags: ["Wadiah", "Safe Custody", "Voluntary Hiba"],
        },
        {
          title: "Automated Zakat & Charity Fund Accounting",
          description:
            "Built-in Zakat calculator assessing net zakatable society assets, idle capital, and member request options. Strict physical and ledger segregation of non-compliant income for mandatory charity disbursement.",
          icon: BookOpen,
          tags: ["Zakat Engine", "Charity Segregation", "Shariah Cleansing"],
        },
        {
          title: "Shariah Supervisory Board Audit Trail",
          description:
            "Immutable audit trails verifying physical vendor invoices, delivery orders, ownership title transfers, and contract execution timestamps to ensure 100% compliance during Shariah governance reviews.",
          icon: FileCheck2,
          tags: ["Shariah Audit Log", "AAOIFI Compliant", "Title Verification"],
        },
        {
          title: "Member Ethical Mobile Passbook App",
          description:
            "White-labeled Android & iOS mobile app for members to monitor deposit profit declarations, view Murabaha installment schedules, download statements, and receive SMS alerts.",
          icon: Sparkles,
          tags: ["Mobile Passbook", "Profit Declarations", "Android & iOS"],
        },
        {
          title: "Regulatory & Cooperative Double-Entry Ledger",
          description:
            "Standard double-entry accounting that complies simultaneously with the Indian Co-operative Societies Act, Registrar guidelines, Income Tax norms, and Shariah financial reporting.",
          icon: Receipt,
          tags: ["General Ledger", "Cooperative Act Compliant", "Day Book"],
        },
      ]}
      comparisonHeading="Conventional Banking Software vs Manalix Shariah Cloud CBS"
      comparisonRows={[
        {
          aspect: "Core Accounting Philosophy",
          legacy: "Built entirely around debt interest (Riba) calculation with fixed compounding formulas.",
          manalix: "Built on real trade sales, equity partnerships, and risk-sharing contracts (Murabaha, Mudarabah).",
        },
        {
          aspect: "Deposit Return Mechanism",
          legacy: "Guaranteed fixed interest rate regardless of actual institution profit or economic loss.",
          manalix: "Dynamic monthly profit-sharing ratio (PSR) and weightage distribution based on real audited pool earnings.",
        },
        {
          aspect: "Loan Default Treatment",
          legacy: "Compounding penal interest and overdue interest penalties that enrich the lender from the debtor's distress.",
          manalix: "Pre-agreed late payment commitments channeled directly to charity funds, never booked into society profit.",
        },
        {
          aspect: "Contract Workflow Validation",
          legacy: "Treats loans as generic cash disbursements without tracking underlying asset purchase or ownership transfer.",
          manalix: "Strict digital workflow ensuring vendor purchase, society asset ownership, and valid sale execution.",
        },
        {
          aspect: "Shariah Audit Readiness",
          legacy: "Requires tedious manual explanation and complex accounting adjustments to pass Shariah inspection.",
          manalix: "One-click Shariah governance reports with complete document attachments, contract timestamps, and Zakat logs.",
        },
      ]}
      securityPoints={[
        "Strict adherence to AAOIFI accounting standards for Islamic financial institutions",
        "Dual-engine ledger ensuring seamless compliance with Indian Cooperative Societies legislation",
        "Automated segregation of charity funds preventing commingling with operational income",
        "256-bit AES encryption at rest and TLS 1.3 encryption across all client endpoints",
        "Role-based access control with Maker-Checker dual authorization for all financial vouchers",
        "Hosted in certified Tier-4 Indian data centers ensuring data localization compliance",
      ]}
      clientProofs={[
        {
          quote:
            "Finding a core banking software that genuinely understands the difference between a Murabaha contract and an interest-bearing loan in India was nearly impossible until we found Manalix. Our Shariah Advisory Board gave the platform unconditional certification.",
          author: "Maulana Dr. Tariq Mansoor",
          role: "Shariah Board Member & Trustee",
          organization: "Bait-un-Nasr Cooperative Credit Society",
          location: "Mumbai, Maharashtra",
        },
        {
          quote:
            "Managing profit distribution among 3,500 Mudarabah depositors used to take our accounting team 10 days of manual spreadsheet work every month. Manalix calculates weightages and distributes audited profits to all accounts in 30 seconds.",
          author: "Syed Abdul Rahman",
          role: "Chief Executive Officer",
          organization: "Al-Ameen Mutual Benefit Trust",
          location: "Bengaluru, Karnataka",
        },
      ]}
      faqs={[
        {
          question: "How does Manalix software ensure genuine Shariah compliance?",
          answer:
            "Manalix models real-world Islamic legal contracts (Aqad). For Murabaha, it enforces a verified workflow: vendor PO generation, society title acquisition, offer-acceptance (Ijab & Qabul), and deferred sale execution with timestamped audit logs. Penalties for delayed payments are segregated into designated charity accounts and never booked into operational income.",
        },
        {
          question: "Can an interest-free society legally operate under Indian cooperative laws?",
          answer:
            "Yes. Multi-State Cooperative Societies, State Cooperative Credit Societies, and Mutual Benefit Trusts legally operate under the Multi-State Cooperative Societies Act 2002 and state-specific Cooperative Acts using trade financing, hire-purchase, mutual aid, and profit-sharing models. Manalix generates standard statutory financial statements (Form 1 Balance Sheet, Trial Balance) that satisfy Registrar norms perfectly.",
        },
        {
          question: "How does the Mudarabah profit distribution engine work?",
          answer:
            "At the close of each accounting month, the society enters the net audited profit generated by the financing pool. Manalix applies predefined Profit Sharing Ratios (PSR) and daily-product weightage factors across all active deposit tiers, automatically crediting the accurate profit share to each depositor's account without fixed interest.",
        },
        {
          question: "Does the software support benevolence loans (Qard Hasan)?",
          answer:
            "Yes. Manalix provides a dedicated Qard Hasan module for interest-free welfare financing, educational loans, and micro-business support. It tracks principal repayments, manages guarantor records, and allows nominal actual administrative cost recovery where permitted.",
        },
        {
          question: "Can historical society data from existing software be migrated?",
          answer:
            "Yes. Our migration team maps your historical accounts, share capital, active Murabaha receivables, and Mudarabah balances into Manalix within 48 to 72 hours, ensuring full reconciliation down to zero variance.",
        },
        {
          question: "How can our society trustees or Shariah board review a live demonstration?",
          answer:
            "You can request a dedicated demonstration for your board of directors and Shariah advisors by filling out the form on this page or calling +91 9096081885. We will demonstrate the complete Islamic contract lifecycles and audit trails live.",
        },
      ]}
    />
  );
};

export default ShariahCompliantBankingSoftwarePage;

