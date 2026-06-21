"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/magicui/blur-fade";
import { WhatsAppIcon, WHATSAPP_URL } from "@/components/sections/site-nav";

function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5Z" />
    </svg>
  );
}

export function Contato() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Observador para disparar a animação apenas quando a seção aparecer na tela
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 } // Dispara quando 30% da seção estiver visível
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contato"
      ref={sectionRef}
      className="flex flex-col items-center bg-bg-primary px-6 py-28 text-center lg:px-[clamp(24px,5vw,64px)]"
    >
      {/* Estilos da animação de seleção */}
      <style>{`
        @keyframes highlight-text {
          0% { background-position: 100% 0; color: inherit; }
          100% { background-position: 0 0; color: white; }
        }
        .highlight-effect {
          background-image: linear-gradient(to right, #0006FF 50%, transparent 50%);
          background-size: 200% 100%;
          background-position: 100% 0;
          display: inline;
        }
        .animate-highlight {
          animation: highlight-text 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
      `}</style>

      <BlurFade>
        <div className="flex items-center justify-center gap-3 text-[16px] tracking-[0.12em] font-bold">
          <span className={`highlight-effect px-1 ${isInView ? 'animate-highlight' : ''}`} style={{ animationDelay: '0.2s' }}>
            vamos conversar
          </span>
        </div>
      </BlurFade>

      <BlurFade delay={0.1}>
        <h2 className="font-mono mt-6 max-w-[640px] font-display text-[clamp(36px,5vw,60px)] font-light leading-[1.05] tracking-[-0.035em] text-text-primary">
          Tem um projeto
          <br />
          em mente?
        </h2>
      </BlurFade>

      <BlurFade delay={0.2}>
        <a
          href="mailto:contato@ryltarlabs.com.br"
          className="mt-6 font-mono text-[15px] text-text-secondary transition-colors duration-200 hover:text-text-primary"
        >
          contato@ryltarlabs.com.br
        </a>
      </BlurFade>

      <BlurFade delay={0.3}>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button variant="ghost" className="font-mono text-[16px]" asChild>
            <a href="mailto:contato@ryltarlabs.com.br">
              <MailIcon className="h-4 w-4" />
              enviar email
            </a>
          </Button>
          <Button variant="whatsapp" asChild className="rounded-none border-0 bg-[#00AA33] font-mono text-[16px] text-white shadow-none ring-0 hover:shadow-none hover:ring-0 focus-visible:ring-0 focus-visible:shadow-none">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="h-4 w-4" />
              conversar no WhatsApp
            </a>
          </Button>
        </div>
      </BlurFade>

      <BlurFade delay={0.4}>
        <div className="mt-12 font-mono text-[11px] tracking-[0.08em] text-text-tertiary">
          Salvador, Bahia · Brasil
        </div>
      </BlurFade>
    </section>
  );
}