import Container from "@/components/container";
import { Newsletter } from "@/components/ui/newsletter";
import { Linkedin, MessageCircle, Twitter, MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/Manalix_Logo_CorelDRAW_Import_dark.svg";
import { useLanguage } from "@/context/language-context";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { appConfig } from "@/utils/app-config";

const socialLinks = [
  { icon: Linkedin, href: appConfig.socialLinks.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: appConfig.socialLinks.twitter, label: "X (Twitter)" },
  { icon: MessageCircle, href: appConfig.socialLinks.whatsapp, label: "WhatsApp" },
];

const solutionsLinks = [
  { title: "Credit Society Software", href: "/credit-society-software" },
  { title: "Patsanstha Software Maharashtra", href: "/patsanstha-software" },
  { title: "NBFC Loan Management", href: "/nbfc-loan-management-software" },
  { title: "Interest-Free / Islamic Banking", href: "/shariah-compliant-banking-software" },
  { title: "Cooperative Audit Software", href: "/cooperative-audit-software" },
  { title: "पतसंस्था सॉफ्टवेअर (मराठी)", href: "/mr/patsanstha-software" },
];

const Footer = () => {
  const { t } = useLanguage();

  const navLinks = [
    { title: t.nav.home, href: "/" },
    { title: t.nav.products, href: "/product" },
    { title: t.nav.about, href: "/about" },
    { title: t.nav.pricing, href: "/pricing" },
    { title: "Blog & Insights", href: "/blog" },
    { title: t.nav.contact, href: "/contact" },
  ];

  const legalLinks = [
    { title: t.footer.privacyPolicy, href: "/privacy-policy" },
    { title: t.footer.termsConditions, href: "/terms-and-conditions" },
    { title: t.footer.refundPolicy, href: "/refund-policy" },
    { title: t.footer.serviceFulfillment, href: "/service-fulfillment" },
    { title: "Cookie Policy", href: "/cookie-policy" },
  ];

  return (
    <footer className="bg-[#0A0A0A] text-white pt-12 pb-8 md:pt-16 md:pb-12 border-t border-white/10">
      <Container>
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-12">
          {/* Left Column: Brand & Newsletter */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-block group">
              <img
                src={logo}
                alt="Manalix Technologies Private Limited"
                className="h-10 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              Next-generation cloud core banking software, pigmy automation, and financial infrastructure for credit societies, patsansthas, and NBFCs across India.
            </p>

            {/* Ecosystem cross-link */}
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-white/80 space-y-1">
              <div className="font-semibold text-white flex items-center gap-1.5">
                <span>Enterprise Fintech Ecosystem</span>
              </div>
              <p className="text-white/60">
                A product of <strong className="text-white">Manalix Technologies Private Limited</strong>.
                Powers digital payment infrastructure on{" "}
                <a
                  href="https://www.fivopay.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-0.5 font-medium"
                >
                  FivoPay <ExternalLink className="w-3 h-3" />
                </a>.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-medium text-white/90">{t.footer.newsletterTitle}</h4>
              <Newsletter
                className="max-w-[360px]"
                placeholder={t.footer.newsletterPlaceholder}
                buttonText={t.footer.newsletterButton}
                successText={t.footer.newsletterSuccess}
              />
            </div>

            <div className="flex items-center gap-3 pt-2">
              <LanguageSwitcher variant="footer" />
            </div>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-3">
            <h4 className="font-semibold text-white mb-3 md:mb-4 text-base">Banking Solutions</h4>
            <ul className="space-y-2.5">
              {solutionsLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block duration-200"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-white mb-3 md:mb-4 text-base">{t.footer.navigation}</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-semibold text-white mb-3 md:mb-4 text-base">Registered Office</h4>
            <div className="space-y-2.5 text-xs text-white/70">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  <strong>Manalix Technologies Private Limited</strong>
                  <br />
                  10 Biz Park, Viman Nagar, Pune, Maharashtra 411014, India
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href={`tel:${appConfig.phone}`} className="hover:text-white transition-colors">
                  {appConfig.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href={`mailto:${appConfig.email}`} className="hover:text-white transition-colors">
                  {appConfig.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <h5 className="font-medium text-xs text-white/90 mb-2">{t.footer.legal}</h5>
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-white/60">
                {legalLinks.map((link) => (
                  <Link key={link.href} to={link.href} className="hover:text-white transition-colors">
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-xs text-center md:text-left">
            © {new Date().getFullYear()} {appConfig.legalName}. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-primary/50 transition-all text-white/70 hover:text-white"
                aria-label={social.label || "Social Link"}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
