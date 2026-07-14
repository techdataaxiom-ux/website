"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { useLocale } from "@/lib/LocaleProvider";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";

// nav link hrefs remain fixed; labels are provided by translations inside the component

export default function Navbar() {
  const { locale, setLocale, t } = useLocale();

  const navLinks = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.skills"), href: "#expertise" },
    { name: t("nav.training"), href: "#training" },
    { name: t("nav.clients"), href: "#clients" },
    { name: t("nav.contact"), href: "#contact" },
  ];
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const el = document.getElementById(link.href.substring(1));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 z-[60] origin-left"
        style={{ scaleX }}
      />
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/70 dark:bg-[#050505]/70 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 shadow-sm pt-1"
            : "bg-transparent pt-1"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="#home" className="font-bold text-xl tracking-tight">
            Tech Data <span className="text-blue-600 dark:text-blue-400">Axiom</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`relative text-sm font-medium transition-colors group px-1 py-2 ${
                        isActive 
                          ? "text-blue-600 dark:text-blue-400" 
                          : "text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400"
                      }`}
                    >
                      {link.name}
                      <span 
                        className={`absolute left-0 bottom-0 w-full h-[2px] bg-blue-600 dark:bg-blue-400 transform origin-left transition-transform duration-300 ${
                          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`} 
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="w-px h-6 bg-neutral-300 dark:bg-neutral-700" />
            <select
              aria-label="Select language"
              value={locale}
              onChange={(e) => setLocale(e.target.value as any)}
              className="text-sm bg-transparent border border-neutral-200 dark:border-neutral-800 rounded-md px-2 py-1"
            >
              <option value="en">EN</option>
              <option value="fr">FR</option>
              <option value="ar">AR</option>
            </select>
            <ThemeToggle />
          </nav>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-neutral-800 dark:text-neutral-200"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-[84px] left-0 w-full bg-white dark:bg-[#050505] border-b border-neutral-200 dark:border-neutral-800 shadow-lg px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-medium py-2 ${
                    isActive ? "text-blue-600 dark:text-blue-400" : "text-neutral-800 dark:text-neutral-200"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div>
              <label className="text-sm text-neutral-600 dark:text-neutral-400 block mb-1">Language</label>
              <select
                aria-label="Select language"
                value={locale}
                onChange={(e) => setLocale(e.target.value as any)}
                className="w-full text-base bg-transparent border border-neutral-200 dark:border-neutral-800 rounded-md px-3 py-2"
              >
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="ar">العربية</option>
              </select>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
