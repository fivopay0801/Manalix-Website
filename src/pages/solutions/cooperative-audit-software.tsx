import React from "react";
import { SolutionLandingTemplate } from "@/components/solutions/solution-landing-template";
import {
  FileCheck2,
  Award,
  Scale,
  FileSpreadsheet,
  Coins,
  ShieldCheck,
  Building,
  TrendingUp,
  Receipt,
  Users2,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

const CooperativeAuditSoftwarePage: React.FC = () => {
  return (
    <SolutionLandingTemplate
      slug="/cooperative-audit-software"
      title="Cooperative Society Audit Software Maharashtra | Class 'A' Audit CBS"
      metaDescription="Automated cooperative society audit software in Maharashtra. Class 'A' audit compliance, 99-parameter reports, trial balance & NPA audit. Book a demo."
      targetKeyword="cooperative society audit software Maharashtra"
      secondaryKeywords={[
        "patsanstha audit software Pune",
        "sahakar ayuktalay 99 mudde audit",
        "cooperative credit society statutory audit",
        "class A audit rating software",
        "cooperative society NPA provisioning",
        "Form 1 and Form 28 cooperative audit",
        "CA cooperative audit tool Maharashtra",
      ]}
      badgeText="Engineered for CAs, Certified Auditors & Society Management"
      h1Title="Cooperative Society Audit & Compliance Software for"
      h1Highlight="Maharashtra Institutions"
      heroSubtitle="Streamline statutory cooperative audits and secure Class 'A' (वर्ग 'अ') audit ratings effortlessly. Automate the Sahakar Ayuktalay 99-parameter questionnaire, NPA provisioning, DCCB bank reconciliation, liquidity ratios, and statutory balance sheets in minutes."
      stats={[
        { value: "99 मुद्द्यांचे", label: "स्वयंचलित वैधानिक ऑडिट अहवाल" },
        { value: "Class 'A'", label: "Target Audit Rating Achieved" },
        { value: "85% Less", label: "Audit Preparation Time" },
        { value: "100%", label: "Sahakar Ayuktalay Format Ready" },
      ]}
      overviewHeading="Automating Statutory Cooperative Audits under Maharashtra Sahakar Norms"
      overviewParagraphs={[
        "Statutory audit of cooperative credit societies and patsansthas in Maharashtra is governed by strict statutory frameworks under Section 81 of the Maharashtra Co-operative Societies Act 1960. Panel auditors appointed by the Commissioner of Cooperation (सहकार आयुक्तालय, पुणे), Chartered Accountants (CAs), and certified sub-auditors evaluate hundreds of quantitative and qualitative parameters, from cash book balancing and loan scrutiny to CRR/SLR liquidity compliance and non-performing asset (NPA) classification.",
        "For society managers and staff, preparing for the annual statutory audit is historically one of the most stressful periods of the financial year. Weeks are spent manually reconciling bank passbooks with District Central Cooperative Banks (DCCBs), re-calculating overdue interest across thousands of loan files, verifying gold loan margin coverages, and preparing paper schedules for the mandatory 99-parameter audit questionnaire.",
        "Manalix Cooperative Audit Software eliminates this manual ordeal through intelligent automation. Designed directly against the official circulars and audit formats of the Maharashtra Sahakar Ayuktalay, Manalix maintains an active, continuous audit trail throughout the financial year. Every voucher, journal entry, interest accrual, and loan disbursement is checked against statutory prudential limits in real time.",
        "When the auditor arrives, your team can generate the complete statutory audit pack with a single click. This includes the 99-parameter questionnaire (९९ मुद्दे विहित नमुना), automated NPA aging and provisioning matrices, overdue loan schedules with Section 101 status, cash-on-hand limit compliance logs, Form 1 (Balance Sheet), Form 28 (Profit and Loss), and comprehensive audit notes in both Marathi and English.",
      ]}
      featuresHeading="Complete Audit Automation & Compliance Toolkit"
      featuresSubtitle="Everything certified auditors, CAs, and patsanstha management need for error-free audits."
      features={[
        {
          title: "९९ मुद्द्यांचा विहित नमुना (99-Parameter Audit)",
          description:
            "1-click generation of the complete 99-parameter statutory audit report prescribed by the Commissioner of Cooperation, Maharashtra. All statistical tables, membership counts, and financial figures auto-populate from live ledgers.",
          icon: Award,
          tags: ["९९ मुद्दे अहवाल", "सहकार आयुक्त नमुना", "स्वयंचलित भरणा"],
        },
        {
          title: "NPA Classification & Provisioning Engine",
          description:
            "Automated aging of loan overdues into Standard, Sub-standard, Doubtful 1, Doubtful 2, Doubtful 3, and Loss assets. Instant calculation of mandatory provisioning requirements according to regulatory norms.",
          icon: AlertTriangle,
          tags: ["NPA तरतूद", "Overdue Aging", "Sub-Standard & Doubtful"],
        },
        {
          title: "Cash-in-Hand & DCCB Bank Reconciliation",
          description:
            "Continuous tracking of maximum retention limits for cash-in-hand. Automated daily bank reconciliation statements (BRS) with DCCBs, state cooperative banks, and commercial banks.",
          icon: Building,
          tags: ["BRS रिकन्सिलिएशन", "कॅश लिमिट पडताळणी", "DCCB बँक वही"],
        },
        {
          title: "कर्ज खाती तपासणी व तारण व्हॅल्यूएशन (Loan Scrutiny)",
          description:
            "Audit inspection screens for individual loan files: verifies sanctioned limits, disbursement dates, security margin coverages for gold loans, property mortgages, and guarantor solvency verifications.",
          icon: Scale,
          tags: ["सोने तारण मार्जिन", "हमीदार तपासणी", "कर्ज तपासणी"],
        },
        {
          title: "CRR & SLR Liquidity Ratio Monitoring",
          description:
            "Real-time monitoring of Cash Reserve Ratio (CRR) and Statutory Liquidity Ratio (SLR) balances against total demand and time liabilities (NDTL) to ensure uninterrupted regulatory compliance.",
          icon: TrendingUp,
          tags: ["CRR / SLR मॉनिटरिंग", "तरलता प्रमाण", "NDTL हिशोब"],
        },
        {
          title: "कलम १०१ व ९१ वसुली कारवाई ऑडिट ट्रॅक",
          description:
            "Auditable logs of legal recovery notices issued under Section 101, recovery certificates received, and execution petitions pending before cooperative courts under Section 91.",
          icon: FileCheck2,
          tags: ["कलम १०१ वसुली", "कलम ९१ दावे", "कायदेशीर कारवाई नोंदी"],
        },
        {
          title: "Form 1 (ताळेबंद) व Form 28 (नफा-तोटा)",
          description:
            "Automated compilation of statutory Balance Sheet (Form 1) and Profit & Loss Statement (Form 28) with schedules in exact cooperative department formats, exportable to Excel and PDF.",
          icon: FileSpreadsheet,
          tags: ["Form 1 ताळेबंद", "Form 28 नफा-तोटा", "सविस्तर शेड्युल्स"],
        },
        {
          title: "अपरिवर्तनीय ऑडिट ट्रेल (Immutable Audit Trail)",
          description:
            "Comprehensive, tamper-proof system logs recording every user login, transaction creation, voucher modification, and administrative override, fully complying with statutory IT audit standards.",
          icon: ShieldCheck,
          tags: ["लॉग पडताळणी", "Maker-Checker ट्रेल", "अपरिवर्तनीय ट्रॅक"],
        },
        {
          title: "ऑडिटर स्पेशल डॅशबोर्ड (Auditor Portal)",
          description:
            "Secure, read-only login credential for visiting statutory and internal auditors to inspect ledgers, test random samples, review vouchers, and export working papers independently.",
          icon: Users2,
          tags: ["ऑडिटर लॉगिन", "Read-Only ऍक्सेस", "वर्किंग पेपर्स"],
        },
      ]}
      comparisonHeading="पारंपारिक ऑडिट तयारी वि. मनालिक्स ऑडिट ऑटोमेशन"
      comparisonRows={[
        {
          aspect: "९९ मुद्द्यांचा ऑडिट अहवाल तयार करणे",
          legacy: "कर्मचारी ३ आठवडे खतावणी आणि लेजरमधील आकडे कागदावर मॅन्युअली भरतात; चुका होण्याची दाट शक्यता असते.",
          manalix: "फक्त १ क्लिकवर सर्व ९९ मुद्द्यांचे तक्ते, सभासद आकडेवारी आणि आर्थिक गुणोत्तरे थेट लेजरमधून अचूक भरली जातात.",
        },
        {
          aspect: "एनपीए (NPA) व तरतूद हिशोब",
          legacy: "कर्ज खात्यांचे हप्ते मोजून मॅन्युअल एक्सेल शीटमध्ये एनपीए काढला जातो; नियमांचे उल्लंघन झाल्यास ऑडिट आक्षेप येतो.",
          manalix: "आरबीआय व सहकार निकषांनुसार सब-स्टँडर्ड, डाउटफुल व लॉस वर्गीकरण आणि आवश्यक तरतूद आपोआप अचूक मोजली जाते.",
        },
        {
          aspect: "बँक व रोख शिल्लक जुळवणी (BRS)",
          legacy: "DCCB आणि इतर बँकांच्या पासबुकांचे महिनाअखेर ताळमेळ जुळवताना तासनतास वाया जातात.",
          manalix: "दैनिक ऑटो-BRS: कोणत्याही तारखेची बँक शिल्लक आणि प्रत्यक्ष खात्यातील व्यवहार सेकंदात जुळतात.",
        },
        {
          aspect: "ऑडिटरचा कामाचा वेळ",
          legacy: "ऑडिटरला कागदपत्रे आणि फाइल्स शोधण्यात १५ ते २५ दिवस लागतात; कर्मचाऱ्यांचे नेहमीचे कामकाज ठप्प होते.",
          manalix: "ऑडिटरसाठी स्वतंत्र रीड-ओन्ली पोर्टल; ५ ते ७ दिवसांत संपूर्ण ऑडिट तपासणी शांततेत आणि अचूकतेने पूर्ण होते.",
        },
        {
          aspect: "ऑडिट वर्ग 'अ' (Class A) मानांकन",
          legacy: "कागदपत्रे वेळेवर न मिळाल्याने आणि त्रुटींमुळे संस्थांचे ऑडिट मानांकन घसरण्याचा कायम धोका असतो.",
          manalix: "१००% परिपूर्ण कागदपत्रे आणि पारदर्शक नोंदींमुळे संस्थेला वर्ग 'अ' मानांकन मिळवणे अत्यंत सुलभ होते.",
        },
      ]}
      securityPoints={[
        "महाराष्ट्र सहकारी संस्था अधिनियम १९६० चे कलम ८१ आणि सहकार आयुक्त मार्गदर्शक नियमावलीचे परिपूर्ण पालन",
        "अपरिवर्तनीय ऑडिट ट्रेल (Immutable Audit Trail) - कोणतीही जुनी नोंद परस्पर बदलता किंवा डिलीट करता येत नाही",
        "मेकर-चेकर (Maker-Checker) प्रणाली: रोखपाल, लिपिक व व्यवस्थापक यांच्या अधिकारांचे काटेकोर विभाजन",
        "२५६-बिट AES डेटा एन्क्रिप्शन आणि सुरक्षित टियर-४ क्लाउड सर्व्हर",
        "ऑडिटरसाठी स्वतंत्र डिजिटल लॉग-इन ज्यामुळे संस्थेच्या संवेदनशील डेटाची छेडछाड रोखली जाते",
        "ऑडिट संपताच संपूर्ण वर्षाचा सुरक्षित डिजिटल आर्काइव्ह आणि इन्स्टंट बॅकअप",
      ]}
      clientProofs={[
        {
          quote:
            "आमच्या सहकारी पतसंस्थेचे ऑडिट पूर्ण करण्यासाठी पूर्वी ऑडिटर महाशयांना २० दिवस लागायचे. मनालिक्सच्या ९९ मुद्द्यांच्या ऑटोमेटेड रिपोर्टमुळे यंदाचे ऑडिट अवघ्या ५ दिवसांत पूर्ण झाले आणि संस्थेला १०० पैकी ९६ गुणांसह वर्ग 'अ' मिळाला.",
          author: "संजय कुलकर्णी (CA)",
          role: "वैधानिक लेखापरीक्षक (Statutory Auditor)",
          organization: "महाराष्ट्र सहकार पॅनल ऑडिटर",
          location: "पुणे, महाराष्ट्र",
        },
        {
          quote:
            "एनपीए वर्गीकरण आणि कलम १०१ वसुली नोटिसांची अचूक माहिती मिळाल्यामुळे संचालक मंडळाला थकबाकीदारांवर त्वरित कारवाई करणे शक्य झाले. ऑडिट आक्षेप शून्य राहिले.",
          author: "दीपक पाटील",
          role: "व्यवस्थापक",
          organization: "यशवंत नागरी सहकारी पतसंस्था",
          location: "कोल्हापूर, महाराष्ट्र",
        },
      ]}
      faqs={[
        {
          question: "मनालिक्स ऑडिट सॉफ्टवेअर सहकार आयुक्तांच्या ९९ मुद्द्यांच्या नमुन्याशी सुसंगत आहे का?",
          answer:
            "होय. मनालिक्स प्रणालीमध्ये महाराष्ट्र सहकार आयुक्तालय, पुणे यांनी जारी केलेल्या अधिकृत ९९ मुद्द्यांच्या वैधानिक ऑडिट नमुन्याची अचूक रचना समाविष्ट आहे. सर्व आर्थिक तक्ते थेट संस्थेच्या लेजरमधून स्वयंचलितपणे भरले जातात.",
        },
        {
          question: "ऑडिट वर्ग 'अ' (Class A) मिळवण्यासाठी हे सॉफ्टवेअर कशी मदत करते?",
          answer:
            "वर्ग 'अ' मानांकन मिळवण्यासाठी भांडवल पर्याप्तता, एनपीए मर्यादा, रोख शिल्लक मर्यादा, सीआरआर/एसएलआर तरलता आणि वसुलीचे प्रमाण योग्य असावे लागते. मनालिक्स हे सर्व गुणोत्तरे वर्षभर रिअल-टाइममध्ये मॉनिटर करते आणि कमतरता असल्यास व्यवस्थापकांना त्वरित सूचना देते.",
        },
        {
          question: "ऑडिटरसाठी सॉफ्टवेअरमध्ये स्वतंत्र लॉगिन उपलब्ध आहे का?",
          answer:
            "होय. संस्थेचे नियमित काम सुरू असताना वैधानिक किंवा अंतर्गत ऑडिटरसाठी सुरक्षित 'Read-Only Auditor Portal' तयार करता येते. याद्वारे ऑडिटर कोणत्याही तारखेचे लेजर, रोख शिल्लक, कर्ज फाइल्स आणि व्हाउचर्स तपासू शकतात.",
        },
        {
          question: "सोने तारण कर्ज व्हॅल्यूएशन आणि मार्जिनची तपासणी कशी होते?",
          answer:
            "सिस्टममध्ये प्रत्येक सोने तारण कर्जाचे ग्रॉस वजन, नेट वजन, कॅरेट शुद्धता आणि कर्ज मंजुरीच्या वेळेचा बाजारभाव नोंदवलेला असतो. बाजारभावात घसरण झाल्यास मार्जिन कमी झालेल्या खात्यांची यादी सिस्टीम ऑडिटरसमोर त्वरित सादर करते.",
        },
        {
          question: "Form 1 (ताळेबंद) आणि Form 28 (नफा-तोटा पत्रक) एक्सेलमध्ये एक्सपोर्ट करता येते का?",
          answer:
            "होय. वैधानिक नमुना Form 1 (Balance Sheet) आणि Form 28 (Profit & Loss Account) त्यांच्या सर्व तपशीलवार शेड्युल्ससह एका क्लिकवर मायक्रोसॉफ्ट एक्सेल (Excel) आणि PDF फॉरमॅटमध्ये एक्सपोर्ट करता येतात.",
        },
        {
          question: "आमच्या पतसंस्थेसाठी ऑडिट मॉड्यूलचा थेट डेमो कसा पाहावा?",
          answer:
            "तुम्ही या पानावर दिलेला फॉर्म भरून किंवा आमच्या पुणे कार्यालयात +91 9096081885 वर थेट फोन करून तुमच्या व्यवस्थापक आणि सीए/ऑडिटरसाठी मोफत थेट डेमो आयोजित करू शकता.",
        },
      ]}
    />
  );
};

export default CooperativeAuditSoftwarePage;

