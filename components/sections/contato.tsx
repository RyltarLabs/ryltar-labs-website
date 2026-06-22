"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/magicui/blur-fade";
import { SectionLabel } from "@/components/ui/section-label";
import { WhatsAppIcon, MailIcon } from "@/components/ui/icons";
import { SITE_CONFIG, getWhatsAppUrl } from "@/lib/config/site";

export function Contato() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsInView(true); }, { threshold: 0.3 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contato" ref={sectionRef} className="flex flex-col items-center bg-bg-primary px-6 py-32 text-center lg:px-[clamp(24px,5vw,64px)] w-full">
      <style>{`
        @keyframes highlight-text { 0% { background-position: 100% 0; color: inherit; } 100% { background-position: 0 0; color: white; } }
        .highlight-effect { background-image: linear-gradient(to right, var(--color-accent) 50%, transparent 50%); background-size: 200% 100%; background-position: 100% 0; display: inline; }
        .animate-highlight { animation: highlight-text 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards; }
      `}</style>
      
      <BlurFade>
        <SectionLabel showLine={false} className="justify-center text-transparent bg-transparent bg-clip-text">
          <span className={`highlight-effect px-1 text-text-primary ${isInView ? 'animate-highlight' : ''}`} style={{ animationDelay: '0.2s' }}>vamos conversar</span>
        </SectionLabel>
      </BlurFade>

      <BlurFade delay={0.1}>
        <h2 className="font-mono mt-8 max-w-[800px] font-display text-[clamp(44px,6vw,72px)] font-light leading-[1.05] tracking-[-0.035em] text-text-primary mx-auto">
          Tem um projeto<br />em mente?
        </h2>
      </BlurFade>

      <BlurFade delay={0.2}>
        <a href={`mailto:${SITE_CONFIG.email}`} className="mt-8 font-mono text-[18px] text-text-secondary transition-colors duration-200 hover:text-text-primary block mx-auto w-fit">
          {SITE_CONFIG.email}
        </a>
      </BlurFade>

      <BlurFade delay={0.3} className="w-full flex justify-center">
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5 w-full max-w-[500px] sm:max-w-none mx-auto">
          <Button variant="ghost" asChild className="w-full sm:w-auto justify-center">
            <a href={`mailto:${SITE_CONFIG.email}`}><MailIcon className="h-5 w-5" />enviar email</a>
          </Button>
          <Button variant="whatsapp" asChild className="w-full sm:w-auto justify-center">
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer"><WhatsAppIcon className="h-5 w-5" />conversar no WhatsApp</a>
          </Button>
        </div>
      </BlurFade>
    </section>
  );
}