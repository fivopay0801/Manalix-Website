"use client";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { ChevronDown, Menu, XIcon, Building2, Landmark, ShieldCheck, FileCheck, Layers, Sparkles } from "lucide-react";
import React from "react";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/Manalix_Logo_CorelDRAW_Import.svg";
import { useLanguage } from "@/context/language-context";
import { LanguageSwitcher } from "@/components/ui/language-switcher";

const solutions = [
  {
    name: "Credit Society Software",
    desc: "Cloud core banking for credit cooperatives",
    href: "/credit-society-software",
    icon: Building2,
  },
  {
    name: "Patsanstha Software Maharashtra",
    desc: "Sahakar Ayuktalay compliant pigmy & loans",
    href: "/patsanstha-software",
    icon: Landmark,
  },
  {
    name: "NBFC Loan Management",
    desc: "Scalable LOS & LMS with FivoPay rails",
    href: "/nbfc-loan-management-software",
    icon: Layers,
  },
  {
    name: "Interest-Free Banking",
    desc: "Shariah-compliant Murabaha & Mudarabah",
    href: "/shariah-compliant-banking-software",
    icon: Sparkles,
  },
  {
    name: "Cooperative Audit Software",
    desc: "Class 'A' 99-parameter audit reporting",
    href: "/cooperative-audit-software",
    icon: FileCheck,
  },
  {
    name: "पतसंस्था सॉफ्टवेअर (मराठी)",
    desc: "महाराष्ट्रासाठी परिपूर्ण मराठी कोअर बँकिंग",
    href: "/mr/patsanstha-software",
    icon: ShieldCheck,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = React.useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  const pages = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.products, href: "/product" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.pricing, href: "/pricing" },
    { name: t.nav.contact, href: "/contact" },
  ];

  return (
    <header className="w-full md:top-6 top-4 mx-auto absolute z-40 px-4">
      <Container className="flex justify-between items-center bg-gradient-to-r from-white via-slate-100/95 to-slate-200/90 backdrop-blur-xl border border-white/80 rounded-full py-2.5 md:py-3 px-6 md:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.25)] min-h-[76px] md:min-h-[88px]">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 w-fit shrink-0">
          <img
            src={logo}
            alt="Manalix Technologies Private Limited"
            className="h-12 md:h-16 lg:h-[68px] w-auto object-contain transition-transform hover:scale-105"
          />
        </Link>

        {/* Mobile Toggle Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher variant="navbar" className="px-2.5 py-1 text-xs" />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer lg:hidden text-slate-900 h-11 w-11 flex items-center justify-center"
              >
                <Menu className="w-6 h-6" aria-hidden="true" />
              </button>
            </SheetTrigger>

            <SheetContent className="flex flex-col justify-between bg-black border-border overflow-y-auto">
              <div className="h-full flex flex-col">
                <SheetHeader className="flex flex-row justify-between border-b border-foreground pb-4">
                  <SheetTitle className="flex items-center">
                    <Link
                      to="/"
                      className="flex items-center bg-white/90 px-3 py-1.5 rounded-xl"
                      onClick={() => setIsOpen(false)}
                    >
                      <img
                        src={logo}
                        alt="Manalix Technologies Private Limited"
                        className="h-9 md:h-10 w-auto object-contain"
                      />
                    </Link>
                  </SheetTitle>
                  <div className="flex items-center gap-2">
                    <SheetPrimitive.Close className="h-11 w-11 flex items-center justify-center opacity-70 transition-opacity hover:opacity-100">
                      <XIcon className="size-5 text-white" />
                      <span className="sr-only">Close</span>
                    </SheetPrimitive.Close>
                  </div>
                </SheetHeader>

                <div className="px-3 py-6 flex flex-col justify-between flex-1">
                  <div className="flex flex-col gap-1">
                    <Link
                      to="/"
                      onClick={() => setIsOpen(false)}
                      className="block py-2.5 px-2 text-base text-white/90 hover:text-primary font-semibold transition-colors border-b border-white/10"
                    >
                      {t.nav.home}
                    </Link>

                    {/* Mobile Solutions Accordion */}
                    <div className="border-b border-white/10 py-2">
                      <button
                        type="button"
                        onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                        className="flex w-full items-center justify-between py-1 px-2 text-base text-white/90 font-semibold"
                      >
                        <span>Solutions</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            mobileSolutionsOpen ? "rotate-180 text-primary" : ""
                          }`}
                        />
                      </button>

                      {mobileSolutionsOpen && (
                        <div className="pl-4 pt-2 space-y-2">
                          {solutions.map((item) => (
                            <Link
                              key={item.href}
                              to={item.href}
                              onClick={() => setIsOpen(false)}
                              className="block py-1.5 text-sm text-white/70 hover:text-primary transition-colors"
                            >
                              <div className="font-medium text-white">{item.name}</div>
                              <div className="text-xs text-white/50">{item.desc}</div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    <Link
                      to="/product"
                      onClick={() => setIsOpen(false)}
                      className="block py-2.5 px-2 text-base text-white/90 hover:text-primary font-semibold transition-colors border-b border-white/10"
                    >
                      {t.nav.products}
                    </Link>

                    <Link
                      to="/about"
                      onClick={() => setIsOpen(false)}
                      className="block py-2.5 px-2 text-base text-white/90 hover:text-primary font-semibold transition-colors border-b border-white/10"
                    >
                      {t.nav.about}
                    </Link>

                    <Link
                      to="/pricing"
                      onClick={() => setIsOpen(false)}
                      className="block py-2.5 px-2 text-base text-white/90 hover:text-primary font-semibold transition-colors border-b border-white/10"
                    >
                      {t.nav.pricing}
                    </Link>

                    <Link
                      to="/contact"
                      onClick={() => setIsOpen(false)}
                      className="block py-2.5 px-2 text-base text-white/90 hover:text-primary font-semibold transition-colors border-b border-white/10"
                    >
                      {t.nav.contact}
                    </Link>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
                    <div className="space-y-2">
                      <span className="text-xs text-white/50 uppercase tracking-wider font-semibold">
                        {t.nav.language}
                      </span>
                      <LanguageSwitcher variant="mobile" />
                    </div>
                    <Button asChild className="w-full rounded-full py-3 h-auto">
                      <Link to="/contact" onClick={() => setIsOpen(false)}>
                        Book Free Demo
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          <Link
            to="/"
            className={`px-3 py-2 text-[16px] xl:text-[17px] font-semibold transition-colors ${
              location.pathname === "/" ? "text-primary" : "text-slate-800 hover:text-primary"
            }`}
          >
            {t.nav.home}
          </Link>

          {/* Solutions Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 px-3 py-2 text-[16px] xl:text-[17px] font-semibold text-slate-800 hover:text-primary transition-colors outline-none cursor-pointer">
              <span>Solutions</span>
              <ChevronDown className="w-4 h-4 opacity-70" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-80 p-2 bg-[#0E131F]/95 backdrop-blur-xl border border-white/15 text-white shadow-2xl rounded-2xl"
            >
              {solutions.map((item) => (
                <DropdownMenuItem key={item.href} asChild className="focus:bg-white/10 rounded-xl cursor-pointer">
                  <Link to={item.href} className="flex items-start gap-3 p-2.5 transition-colors">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary border border-primary/20 shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white leading-tight">{item.name}</div>
                      <div className="text-xs text-white/60 mt-0.5 leading-tight">{item.desc}</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            to="/product"
            className={`px-3 py-2 text-[16px] xl:text-[17px] font-semibold transition-colors ${
              location.pathname === "/product" ? "text-primary" : "text-slate-800 hover:text-primary"
            }`}
          >
            {t.nav.products}
          </Link>

          <Link
            to="/pricing"
            className={`px-3 py-2 text-[16px] xl:text-[17px] font-semibold transition-colors ${
              location.pathname === "/pricing" ? "text-primary" : "text-slate-800 hover:text-primary"
            }`}
          >
            {t.nav.pricing}
          </Link>

          <Link
            to="/about"
            className={`px-3 py-2 text-[16px] xl:text-[17px] font-semibold transition-colors ${
              location.pathname === "/about" ? "text-primary" : "text-slate-800 hover:text-primary"
            }`}
          >
            {t.nav.about}
          </Link>

          <Link
            to="/contact"
            className={`px-3 py-2 text-[16px] xl:text-[17px] font-semibold transition-colors ${
              location.pathname === "/contact" ? "text-primary" : "text-slate-800 hover:text-primary"
            }`}
          >
            {t.nav.contact}
          </Link>
        </nav>

        {/* Desktop CTA & Language */}
        <div className="hidden lg:flex gap-3 items-center w-fit shrink-0 justify-end">
          <LanguageSwitcher variant="navbar" />
          <Button
            asChild
            className="relative overflow-hidden group bg-gradient-to-b from-slate-900 to-black hover:from-slate-800 hover:to-slate-900 text-white font-semibold text-[15px] px-6 py-2.5 h-auto rounded-full border border-white/20 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl cursor-pointer"
          >
            <Link to="/contact">Book Free Demo</Link>
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
