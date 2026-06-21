"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/section-label";
import { SERVICES } from "@/lib/content/services-data";
import { ICON_MAP } from "@/components/sections/service-icons";
import { MEDIA } from "@/lib/content/media";
import { cn } from "@/lib/utils";

export function Servicos() {
  const [activeId, setActiveId] = useState(SERVICES[0].id);
  const [fillProgress, setFillProgress] = useState(0);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const handleScroll = () => {
      const viewportAnchor = window.innerHeight * 0.4;
      let current = SERVICES[0];
      let progress = 0;
      for (const service of SERVICES) {
        const el = sectionRefs.current[service.id];
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= viewportAnchor && rect.bottom >= 0) {
          current = service;
          const total = rect.height;
          const traveled = viewportAnchor - rect.top;
          progress = Math.min(100, Math.max(0, (traveled / total) * 100));
        }
      }
      setActiveId(current.id);
      setFillProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="servicos" className="bg-bg-primary px-6 lg:px-[clamp(24px,5vw,64px)]">
      <div className="mx-auto max-w-[1280px] pt-32">
        <BlurFade>
          <SectionLabel>nossos serviços</SectionLabel>
        </BlurFade>

        <BlurFade delay={0.06}>
          <div className="relative mt-12 w-full overflow-hidden rounded-[4px] flex justify-center">
            <Image src={MEDIA.serviceHero} alt="..." width={2424} height={1536} className="h-auto w-full md:w-[85%] lg:w-[70%]" />
          </div>
        </BlurFade>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          <BlurFade delay={0.1}>
            <h2 className="font-mono text-[clamp(34px,4.5vw,52px)] font-normal leading-[1.5] tracking-[-0.03em] text-text-primary">
              Sua visão, nossa <span className="bg-accent px-1.5 text-white">execução</span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.2} className="flex items-center">
            <p className="text-[18px] font-light leading-[1.85] text-text-secondary">
              Reunimos estratégia, design e desenvolvimento em um único processo eficiente. Menos complexidade, mais agilidade e resultados que acompanham a evolução do seu negócio.
            </p>
          </BlurFade>
        </div>
      </div>

      <div className="mt-32 mx-auto max-w-[1280px] grid grid-cols-1 px-6 lg:grid-cols-[340px_1fr] lg:gap-16 lg:px-[clamp(24px,5vw,64px)]">
        <nav className="hidden lg:block lg:sticky lg:top-[120px] lg:h-fit">
          <div className="flex flex-col gap-3">
            {SERVICES.map((s) => {
              const Icon = ICON_MAP[s.icon];
              const isActive = s.id === activeId;
              return (
                <button 
                  key={s.id} 
                  className="relative overflow-hidden text-left" 
                  onClick={() => {
                    const el = sectionRefs.current[s.id];
                    if (el) {
                      const top = el.getBoundingClientRect().top + window.scrollY - 100;
                      window.scrollTo({ top, behavior: "smooth" });
                    }
                  }}
                >
                  <div className={cn("flex items-center gap-4 px-5 py-5 transition-colors duration-200", isActive ? "" : "hover:bg-white/[0.03]")}>
                    <Icon className="w-6 h-6" /><span className="whitespace-pre-line font-mono text-[18px] text-text-tertiary">{s.menuName}</span>
                  </div>
                  {isActive && (
                    <>
                      <div className="absolute inset-x-0 top-0 bg-accent" style={{ height: `${fillProgress}%` }} />
                      <div className="pointer-events-none absolute inset-0 flex items-center gap-4 px-5 py-5">
                        <Icon className="w-6 h-6" /><span className="whitespace-pre-line font-mono text-[18px] font-medium text-white">{s.menuName}</span>
                      </div>
                    </>
                  )}
                </button>
              );
            })}
          </div>
        </nav>

        <div className="flex flex-col">
          {SERVICES.map((s, i) => {
            const Icon = ICON_MAP[s.icon];
            return (
              <div key={s.id} ref={(el) => { sectionRefs.current[s.id] = el; }} className={cn("flex min-h-[70vh] flex-col justify-center py-16", i > 0 && "border-t border-border")}>
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
                  <div className="flex items-center justify-start gap-4 mb-8 text-accent lg:hidden">
                    <Icon className="w-6 h-6" /><span className="font-mono text-[18px] font-medium uppercase">{s.menuName}</span>
                  </div>
                  <h3 className="whitespace-pre-line text-left font-mono text-[clamp(28px,3.5vw,42px)] text-text-primary">{s.headline}</h3>
                  <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
                    <p className="text-[18px] leading-[1.85] font-light text-text-secondary">{s.body}</p>
                    <div>
                      <p className="text-[18px] text-text-primary">Os possíveis entregáveis incluem:</p>
                      <ul className="mt-6 flex flex-col gap-4">
                        {s.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-4 text-[16px] text-text-secondary"><span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />{d}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="px-6 py-28 lg:px-[clamp(24px,5vw,64px)]">
        <BlurFade>
          <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[4px] border border-border-subtle">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${MEDIA.ctaBg}')` }} />
            <div className="absolute inset-0 bg-bg-primary/80" />
            <div className="relative z-10 flex flex-col items-center px-8 py-32 text-center">
              <h3 className="max-w-[800px] font-mono text-[clamp(28px,3.8vw,46px)] text-text-primary">
                Acreditamos que grandes resultados nascem quando tecnologia e propósito caminham na mesma direção.
              </h3>
              <Button variant="primary-flat" className="mt-16 w-full sm:w-auto text-[18px]" asChild>
                <a href="#contato">entre em contato</a>
              </Button>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}