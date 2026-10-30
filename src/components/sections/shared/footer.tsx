import Container from "@/components/container";
import { Newsletter } from "@/components/ui/newsletter";
import { Linkedin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/Manalix_Logo_CorelDRAW_Import_dark.svg";
import { useLanguage } from "@/context/language-context";
import { LanguageSwitcher } from "@/components/ui/language-switcher";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/fivopay/", label: "LinkedIn" },
  { icon: MessageCircle, href: "https://wa.me/919096081885", label: "WhatsApp" },
];

const Footer = () => {
  const { t } = useLanguage();

  const navLinks = [
    { title: t.nav.home, href: "/" },
    { title: t.nav.products, href: "/product" },
    { title: t.nav.about, href: "/about" },
    { title: t.nav.pricing, href: "/pricing" },
    { title: t.nav.contact, href: "/contact" },
  ];

  const legalLinks = [
    { title: t.footer.privacyPolicy, href: "/privacy-policy" },
    { title: t.footer.termsConditions, href: "/terms-and-conditions" },
    { title: t.footer.refundPolicy, href: "/refund-policy" },
    { title: t.footer.serviceFulfillment, href: "/service-fulfillment" },
  ];

  return (
    <footer className="bg-[#0A0A0A] text-white pt-12 pb-8 md:pt-16 md:pb-12">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 mb-10 md:mb-12">
          {/* Left Column: Newsletter & Logo */}
          <div className="space-y-6 md:space-y-7">
            <div className="space-y-4">
              <h3 className="text-[18px] md:text-[20px] font-medium leading-[140%] tracking-[-0.02em]">
                {t.footer.newsletterTitle}
              </h3>
              <Newsletter
                className="max-w-[420px]"
                placeholder={t.footer.newsletterPlaceholder}
                buttonText={t.footer.newsletterButton}
                successText={t.footer.newsletterSuccess}
              />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <Link to="/" className="inline-block group">
                <img
                  src={logo}
                  alt="Manalix Technology Pvt Ltd"
                  className="h-10 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
              <div className="flex items-center gap-2">
                <LanguageSwitcher variant="footer" />
              </div>
            </div>
          </div>

          {/* Right Column: Links */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 lg:gap-20">
            <div>
              <h4 className="font-semibold text-white mb-3 md:mb-4">{t.footer.navigation}</h4>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="text-white/70 hover:text-white transition-colors text-[15px]">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-3 md:mb-4">{t.footer.legal}</h4>
              <ul className="space-y-2.5">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="text-white/70 hover:text-white transition-colors text-[15px]">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {new Date().getFullYear()} {t.footer.allRightsReserved}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              {t.footer.privacyPolicy}
            </Link>
            <span className="text-white/20">•</span>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">
              {t.footer.termsConditions}
            </Link>
            <span className="text-white/20">•</span>
            <Link to="/refund-policy" className="hover:text-white transition-colors">
              {t.footer.refundPolicy}
            </Link>
            <span className="text-white/20">•</span>
            <Link to="/service-fulfillment" className="hover:text-white transition-colors">
              {t.footer.serviceFulfillment}
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all text-white/70 hover:text-white"
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
