"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/config/navigation";
import { SITE_CONFIG } from "@/lib/config/site";
import { motion, AnimatePresence } from "framer-motion";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = ["sobre", "servicos", "conteudos", "faq", "contato"];
    
    const handleScrollTracking = () => {
      let activeSection = "";
      const triggerPoint = window.innerHeight * 0.5; 

      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerPoint) {
            activeSection = id;
            break;
          }
        }
      }

      if (!activeSection) {
        document.title = `Home | ${SITE_CONFIG.name}`;
      } else {
        let label = activeSection.charAt(0).toUpperCase() + activeSection.slice(1);
        
        if (activeSection === "servicos") label = "Serviços";
        if (activeSection === "conteudos") label = "Conteúdos";
        if (activeSection === "faq") label = "FAQ";
        
        document.title = `${label} | ${SITE_CONFIG.name}`;
      }
    };

    window.addEventListener("scroll", handleScrollTracking, { passive: true });
    handleScrollTracking();

    return () => {
      window.removeEventListener("scroll", handleScrollTracking);
    };
  }, [pathname]);

  const handleLogoClick = () => {
    setIsMobileMenuOpen(false);
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-[200] transition-all duration-350", 
      scrolled || isMobileMenuOpen ? "bg-[#09090b]/95 backdrop-blur-md border-b border-border h-[72px]" : "bg-transparent border-transparent h-[72px]"
    )}>
      <div className="px-6 lg:px-[clamp(24px,5vw,64px)] h-full">
        <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between">
          <button onClick={handleLogoClick} className="font-mono text-[28px] font-medium text-text-primary z-50 transition-opacity hover:opacity-80">
            {SITE_CONFIG.name.toLowerCase().replace(' ', '-')}
          </button>

          <nav className="font-mono hidden items-center gap-12 lg:flex">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className={cn("text-[18px] transition-colors duration-300", scrolled ? "text-text-tertiary hover:text-text-primary" : "text-white hover:text-white/80")}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4 z-50">
            <Button variant="nav" size="sm" asChild className="hidden lg:flex">
              <Link href="/#contato">falar conosco</Link>
            </Button>

            <Button variant="nav" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden px-3 flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <motion.line
                  x1="4" y1="6" x2="20" y2="6"
                  animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  style={{ originX: "12px", originY: "6px" }}
                />
                <motion.line
                  x1="4" y1="12" x2="20" y2="12"
                  animate={isMobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  style={{ originX: "12px", originY: "12px" }}
                />
                <motion.line
                  x1="4" y1="18" x2="20" y2="18"
                  animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  style={{ originX: "12px", originY: "18px" }}
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[72px] left-0 w-full bg-[#09090b] lg:hidden border-b border-zinc-800 shadow-2xl overflow-hidden"
          >
            <div className="p-8 flex flex-col gap-8">
              <nav className="flex flex-col gap-6 font-mono">
                {NAV_LINKS.map((link) => (
                  <a key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-[20px] text-zinc-300 hover:text-white transition-colors">{link.label}</a>
                ))}
              </nav>
              <div className="pt-6 border-t border-zinc-800">
                <Button variant="primary-flat" asChild className="w-full">
                  <Link href="/#contato" onClick={() => setIsMobileMenuOpen(false)}>falar conosco</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}