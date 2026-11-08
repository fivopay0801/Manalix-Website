import React from "react";
import { SolutionLandingTemplate } from "@/components/solutions/solution-landing-template";
import {
  Landmark,
  Smartphone,
  Coins,
  ShieldCheck,
  Award,
  FileCheck2,
  FileSpreadsheet,
  Users2,
  Scale,
  Receipt,
  Server,
  Building2,
} from "lucide-react";

const PatsansthaSoftwarePage: React.FC = () => {
  return (
    <SolutionLandingTemplate
      slug="/patsanstha-software"
      title="Patsanstha Software Maharashtra | Cloud CBS for Nagari & Gramin Patsansthas"
      metaDescription="Leading patsanstha software in Maharashtra. Built for Nagari & Gramin Patsansthas with Sahakar Ayuktalay 99-parameter audit compliance, pigmy app & loans. Book demo."
      targetKeyword="patsanstha software Maharashtra"
      secondaryKeywords={[
        "patsanstha core banking software",
        "nagari patsanstha software Pune",
        "gramin patsanstha CBS Maharashtra",
        "pigmy machine software Maharashtra",
        "sahakar ayuktalay audit software",
        "patsanstha accounting software",
        "section 101 recovery notice software",
      ]}
      badgeText="Maharashtra's #1 Cloud Patsanstha Software"
      h1Title="Cloud Patsanstha Software for"
      h1Highlight="Maharashtra Credit Societies"
      heroSubtitle="Specifically engineered for Nagari, Gramin, Mahila, and Karmachari Patsansthas across Maharashtra. 100% compliant with Sahakar Ayuktalay guidelines, automated 99-parameter audit reports (वर्ग 'अ' रेटिंग), Pigmy Android app with Bluetooth printing, and Section 101 recovery notices."
      stats={[
        { value: "180+", label: "Patsansthas in Maharashtra" },
        { value: "Class 'A'", label: "Audit Rating Compliance" },
        { value: "99 मुद्द्यांचे", label: "वैधानिक ऑडिट अहवाल" },
        { value: "100%", label: "Cloud Uptime & Data Security" },
      ]}
      overviewHeading="Maharashtra Sahakar Ayuktalay Compliant Cloud Core Banking"
      overviewParagraphs={[
        "Maharashtra houses over 16,000 Urban and Rural Credit Cooperative Societies (नागरी व ग्रामीण सहकारी पतसंस्था) that manage thousands of crores in public savings and micro-loans. However, regulatory oversight by the Cooperative Commissionerate (सहकार आयुक्तालय, पुणे) has tightened significantly. Patsansthas are required to maintain strict liquidity norms (CRR/SLR), transparent non-performing asset (NPA) classification, and comprehensive 99-parameter statutory audit records to achieve and preserve Class 'A' audit ratings.",
        "Traditional desktop patsanstha softwares installed on local branch computers are no longer adequate. They suffer from frequent operating system corruption, absence of automated offsite cloud backups, lack of branch-to-branch synchronization, and inability to integrate with modern digital tools like pigmy mobile collections, member passbook apps, and instant SMS alerts.",
        "Manalix Core Banking Cloud is designed specifically according to the Maharashtra Co-operative Societies Act 1960 and the latest circulars issued by the Commissioner of Cooperation and Registrar of Co-operative Societies, Maharashtra State, Pune. It automates every operational nuance of a patsanstha: from daily pigmy collection by field agents using thermal Bluetooth printers to complex loan management (gold loans, mortgage loans, employee surety loans), automated dividend calculation, and single-click generation of the 99-parameter statutory audit report.",
        "With Manalix, patsanstha managers and boards of directors gain complete real-time visibility into branch liquidity, cash on hand, daily deposit collections, overdue loan recovery, and legal notices under Section 101 and Section 91, all while saving up to 60% on IT infrastructure and server maintenance costs.",
      ]}
      featuresHeading="Specialized Modules for Maharashtra Patsansthas"
      featuresSubtitle="Built in Maharashtra, for Maharashtra's cooperative banking sector."
      features={[
        {
          title: "दैनंदिन ठेव (Pigmy) Agent Mobile App",
          description:
            "Android app for daily collection agents with Bluetooth thermal printer slip printing, offline capability in remote villages, instant Marathi/English SMS to members, and live GPS location tracking.",
          icon: Smartphone,
          tags: ["पिग्मी ॲप", "थर्मल प्रिंटर", "SMS अलर्ट"],
        },
        {
          title: "सहकार आयुक्त ९९ मुद्द्यांचे वैधानिक ऑडिट",
          description:
            "Automated generation of the 99-parameter statutory audit questionnaire required by the Maharashtra Sahakar Ayuktalay. Helps patsansthas achieve and consistently retain Class 'A' (वर्ग 'अ') audit ratings.",
          icon: Award,
          tags: ["वर्ग 'अ' ऑडिट", "९९ मुद्दे अहवाल", "ऑडिट रेडी"],
        },
        {
          title: "कर्ज व्यवस्थापन (LOS & LMS)",
          description:
            "Personal loans, gold loans (सोने तारण कर्ज with weight/carat valuation), mortgage loans (मालमत्ता तारण), salary-earner loans, and cash credit (CC). Automated EMI calculation, penal interest, and guarantor verification.",
          icon: Landmark,
          tags: ["सोने तारण कर्ज", "ईएमआय शेड्युल", "हमीदार व्यवस्थापन"],
        },
        {
          title: "कलम १०१ व ९१ वसुली नोटिसा",
          description:
            "Automatic generation of overdue demand notices, legal recovery notices under Section 101 and arbitration dispute filings under Section 91 of the Maharashtra Co-operative Societies Act 1960.",
          icon: Scale,
          tags: ["कलम १०१ वसुली", "कलम ९१ दावा", "थकबाकीदार नोटिसा"],
        },
        {
          title: "मुदत व आवर्ती ठेवी (FD / RD / Re-investment)",
          description:
            "Fixed Deposit, Recurring Deposit, Damduppat schemes, and Monthly Income Schemes (MIS) with customizable interest slabs, senior citizen rates, automated maturity alerts, and interest TDS calculation.",
          icon: Coins,
          tags: ["दामदुप्पट योजना", "मुदत ठेव", "व्याज दर स्लॅब"],
        },
        {
          title: "सभासद डिजिटल पासबुक मोबाइल ॲप",
          description:
            "White-labeled Android & iOS app for patsanstha members to view live balance, mini statements, loan dues, and interest certificates in Marathi and English directly on their smartphones.",
          icon: Smartphone,
          tags: ["डिजिटल पासबुक", "मराठी भाषा सपोर्ट", "खाते शिल्लक"],
        },
        {
          title: "जनरल लेजर, रोजकीर्द व ताळेबंद (Balance Sheet)",
          description:
            "Complete double-entry accounting with real-time Day Book (रोजकीर्द), Cash Book (रोख वही), Trial Balance (तेरीज पत्रक), Profit & Loss, and automated Balance Sheet with complete drill-down.",
          icon: FileSpreadsheet,
          tags: ["रोजकीर्द", "तेरीज पत्रक", "ताळेबंद"],
        },
        {
          title: "DCCB बँक व रोख रिकन्सिलिएशन",
          description:
            "Bank reconciliation statements (BRS) with District Central Cooperative Banks (DCCB) and Apex banks, cash-in-hand limit monitoring, and daily balancing validation before day-end closure.",
          icon: Building2,
          tags: ["DCCB रिकन्सिलिएशन", "कॅश लिमिट ट्रॅकिंग", "डे-एंड बॅलन्सिंग"],
        },
        {
          title: "CIBIL / Experian डेटा रिपोर्टिंग",
          description:
            "Automated generation of monthly member loan repayment data in standardized credit bureau formats (CIBIL, Experian, Equifax, CRIF HighMark) to reduce bad loans and enforce borrower discipline.",
          icon: FileCheck2,
          tags: ["CIBIL डेटा", "Equifax", "CRIF HighMark"],
        },
      ]}
      comparisonHeading="पारंपारिक डेस्कटॉप सॉफ्टवेअर वि. मनालिक्स क्लाउड सीबीएस"
      comparisonRows={[
        {
          aspect: "डेटा सुरक्षितता व बॅकअप (Data Backup)",
          legacy: "शाखेतील एकाच कॉम्प्युटरवर सेव्ह; हार्ड डिस्क खराब झाल्यास किंवा व्हायरस आल्यास सर्व डेटा कायमचा नष्ट होण्याचा धोका.",
          manalix: "टियर-४ क्लाउड डेटा सेंटरमध्ये स्वयंचलित दर तासाचा बॅकअप; कॉम्प्युटर खराब झाला तरी नवीन डिव्हाइसवर १ मिनिटात सुरू.",
        },
        {
          aspect: "शाखा विस्तार व रिअल-टाइम नेटवर्किंग",
          legacy: "प्रत्येक शाखेत स्वतंत्र सॉफ्टवेअर; संध्याकाळी पेन ड्राईव्हने डेटा गोळा करून मुख्य शाखेत मॅन्युअली मर्ज करावा लागतो.",
          manalix: "१००% क्लाउड नेटवर्किंग; मुख्य कार्यालय आणि सर्व शाखांचा डेटा एकाच क्षणी रिअल-टाइममध्ये अपडेट होतो.",
        },
        {
          aspect: "पिग्मी (दैनिक ठेव) संकलन",
          legacy: "एजंट जुन्या पिग्मी मशीन वापरतात किंवा वहीत नोंदी ठेवतात; क्लार्कला दुसऱ्या दिवशी सकाळी तासन्‌तास एन्ट्री करावी लागते.",
          manalix: "आधुनिक अँड्रॉइड ॲप + ब्लूटूथ प्रिंटर; पावती निघताच सभासदाला एसएमएस जातो आणि मुख्य खात्यात रक्कम त्वरित जमा होते.",
        },
        {
          aspect: "सहकार ऑडिट व ९९ मुद्दे अहवाल",
          legacy: "ऑडिटर येण्यापूर्वी ३ आठवडे कर्मचाऱ्यांना रात्री उशिरापर्यंत थांबून कागदपत्रे आणि आकडेमोड करावी लागते.",
          manalix: "एका क्लिकवर ९९ मुद्द्यांचा ऑडिट अहवाल, एनपीए वर्गीकरण आणि वैधानिक गुणोत्तर (Ratios) त्वरित तयार होतात.",
        },
        {
          aspect: "सभासदांसाठी डिजिटल सुविधा",
          legacy: "पासबुक भरण्यासाठी सभासदांना शाखेत येऊन रांगेत उभे राहावे लागते; व्यवहारांचा कोणताही तात्काळ मेसेज येत नाही.",
          manalix: "सभासदांच्या मोबाइलवर डिजिटल पासबुक ॲप आणि प्रत्येक व्यवहाराचा मराठीत त्वरित एसएमएस आणि व्हॉट्सॲप अलर्ट.",
        },
      ]}
      securityHeading="सर्वोच्च डेटा सुरक्षितता आणि सहकार नियमांचे पालन"
      securityPoints={[
        "भारतीय रिझर्व्ह बँक (RBI) सायबर सुरक्षा फ्रेमवर्क आणि सहकार आयुक्त मार्गदर्शक तत्त्वांचे १००% पालन",
        "२५६-बिट AES डेटा एन्क्रिप्शन - बँक-दर्जाची सुरक्षा प्रणाली",
        "मेकर-चेकर (Maker-Checker) प्रणाली: रोखपाल व व्यवस्थापक यांच्यातील पडताळणी बंधनकारक",
        "प्रत्येक एन्ट्री व दुरुस्तीचा अपरिवर्तनीय ऑडिट ट्रेल (Audit Trail Log) कायमस्वरूपी नोंद",
        "कर्मचाऱ्यांसाठी द्वि-स्तरीय प्रमाणीकरण (Two-Factor Authentication) आणि सुरक्षित लॉगिन",
        "विजापूर, पुणे, मुंबई, नाशिक आणि संपूर्ण महाराष्ट्रातील संस्थांसाठी २४/७ मराठी व इंग्रजीत तांत्रिक सहाय्य",
      ]}
      faqs={[
        {
          question: "मनालिक्स पतसंस्था सॉफ्टवेअर महाराष्ट्रातील सहकार नियमांनुसार मान्यताप्राप्त आहे का?",
          answer:
            "होय. मनालिक्स क्लाउड कोअर बँकिंग सॉफ्टवेअर हे महाराष्ट्र सहकारी संस्था अधिनियम १९६० आणि सहकार आयुक्त, पुणे यांच्या सर्व मार्गदर्शक सूचना आणि ९९ मुद्द्यांच्या वैधानिक ऑडिट नमुन्यांनुसार परिपूर्ण तयार करण्यात आले आहे.",
        },
        {
          question: "आमच्या जुन्या सॉफ्टवेअरमधील डेटा सुरक्षितपणे मायग्रेट होईल का?",
          answer:
            "होय. आमच्या अनुभवी इंजिनिअर्सची टीम जुन्या कोणत्याही सॉफ्टवेअरमधील (जसे की FoxPro, Tally, स्थानिक सॉफ्टवेअर) सभासदांचे खाते, ठेवी, कर्जे आणि लेजर डेटा संपूर्ण पै-पैच्या पडताळणीसह अवघ्या ४८ ते ७२ तासांत मायग्रेट करून देते. कामकाजात कोणताही खंड पडत नाही.",
        },
        {
          question: "पिग्मी एजंटसाठी मोबाइल ॲप कसे काम करते?",
          answer:
            "एजंटच्या अँड्रॉइड मोबाइलमध्ये आमचे सुरक्षित ॲप इन्स्टॉल केले जाते. एजंट सभासदाकडून रोख रक्कम घेतो, रक्कम ॲपमध्ये टाकतो आणि पोर्टेबल ब्लूटूथ प्रिंटरद्वारे तात्काळ पावती प्रिंट करून देतो. त्याच वेळी सभासदाला व्यवहाराचा एसएमएस जातो आणि शाखेच्या खात्यात रक्कम त्वरित जमा होते.",
        },
        {
          question: "सॉफ्टवेअर चालवण्यासाठी शाखेत सर्वर (Server) बसवावा लागेल का?",
          answer:
            "नाही. मनालिक्स हे १००% क्लाउड-आधारित सॉफ्टवेअर आहे. त्यामुळे शाखेत महागडा सर्वर बसवण्याची किंवा मेंटेनन्स इंजिनिअर ठेवण्याची अजिबात गरज नाही. कोणत्याही साध्या कॉम्प्युटरवर इंटरनेटच्या मदतीने सॉफ्टवेअर अत्यंत जलद गतीने चालते.",
        },
        {
          question: "कलम १०१ वसुली नोटिसा सॉफ्टवेअरमधून आपोआप निघतात का?",
          answer:
            "होय. थकीत कर्जांची मुदत संपताच सिस्टीम आपोआप थकबाकीदारांची यादी तयार करते आणि सहकार कायद्यानुसार विहित नमुन्यातील कलम १०१ व कलम ९१ च्या कायदेशीर वसुली नोटिसा एका क्लिकवर मराठीत प्रिंट करता येतात.",
        },
        {
          question: "आमच्या संचालक मंडळासाठी थेट डेमो कसा पाहता येईल?",
          answer:
            "तुम्ही या पानावर दिलेला फॉर्म भरून किंवा आमच्या पुणे कार्यालयातील हेल्पलाइन नंबर +91 9096081885 वर कॉल करून तुमच्या संचालक मंडळासाठी मोफत आणि थेट ऑनलाइन किंवा प्रत्यक्ष डेमो बुक करू शकता.",
        },
      ]}
    />
  );
};

export default PatsansthaSoftwarePage;

