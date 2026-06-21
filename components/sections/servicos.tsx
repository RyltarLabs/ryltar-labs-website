"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/components/sections/services-data";
import { ICON_MAP } from "@/components/sections/service-icons";
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

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToService = (id: string) => {
    const el = sectionRefs.current[id];
    if (!el) return; 
    const top = el.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section id="servicos" className="bg-bg-primary px-6 lg:px-[clamp(24px,5vw,64px)]">
      <div className="mx-auto max-w-[1280px] pt-24">
        <BlurFade>
          <div className="flex items-center gap-3 font-mono text-[16px] tracking-[0.12em] text-[#0006FF]">
            <span className="h-px w-6 bg-[#0006FF]" />
            nossos serviços
          </div>
        </BlurFade>

        <BlurFade delay={0.06}>
          <div className="relative mt-10 w-full overflow-hidden rounded-[4px] flex justify-center">
            <Image
              src="/images/sections/service-hero.png"
              alt="..."
              width={2424}
              height={1536}
              className="h-auto w-full md:w-[70%] lg:w-[50%] items-center"
            />
          </div>
        </BlurFade>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
          <BlurFade delay={0.1}>
            <h2 className="font-mono text-[clamp(28px,3.6vw,44px)] font-normal leading-[1.5] tracking-[-0.03em] text-text-primary">
              Sua visão, nossa{" "}
              <span className="bg-[#0006FF] px-1.5 text-white">execução</span>
              <br />
            </h2>
          </BlurFade>

          <BlurFade delay={0.2}>
            <p className="text-[15px] leading-[1.85] font-light text-text-secondary">
                Reunimos estratégia, design e desenvolvimento em um único processo eficiente. 
                Menos complexidade, mais agilidade e resultados que acompanham a evolução do seu negócio.
            </p>
          </BlurFade>
        </div>
      </div>

      <div className="mt-28">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 px-6 lg:grid-cols-[300px_1fr] lg:gap-12 lg:px-[clamp(24px,5vw,64px)]">
          {/* MENU OCULTO NO MOBILE, VISÍVEL NO DESKTOP */}
          <nav className="hidden lg:block lg:sticky lg:top-[100px] lg:h-fit">
            <div className="flex flex-col gap-2">
              {SERVICES.map((s) => {
                const Icon = ICON_MAP[s.icon];
                const isActive = s.id === activeId;
                return (
                  <button
                    key={s.id}
                    onClick={() => scrollToService(s.id)}
                    className="relative overflow-hidden text-left"
                  >
                    <div
                      className={cn(
                        "flex items-center gap-3 px-4 py-4 transition-colors duration-200",
                        isActive ? "" : "hover:bg-white/[0.03]"
                      )}
                    >
                      <Icon />
                      <span className="whitespace-pre-line font-mono text-[16px] leading-[1.35] tracking-[0.01em] text-text-tertiary">
                        {s.menuName}
                      </span>
                    </div>

                    {isActive && (
                      <>
                        <div
                          className="absolute inset-x-0 top-0 bg-[#0006FF]"
                          style={{ height: `${fillProgress}%` }}
                        />
                        <div className="pointer-events-none absolute inset-0 flex items-center gap-3 px-4 py-4">
                          <Icon />
                          <span className="whitespace-pre-line font-mono text-[16px] font-medium leading-[1.35] tracking-[0.01em] text-white">
                            {s.menuName}
                          </span>
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
                <div
                  key={s.id}
                  ref={(el) => {
                    sectionRefs.current[s.id] = el;
                  }}
                  className={cn(
                    "flex min-h-[70vh] flex-col justify-center py-12 ",
                    i > 0 && "border-t border-border"
                  )}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {/* TÓPICO DO MENU - VISÍVEL APENAS NO MOBILE */}
                    <div className="flex items-center gap-3 mb-6 text-[#0006FF] lg:hidden">
                      <Icon />
                      <span className="font-mono text-[15px] font-medium tracking-[0.01em] uppercase">
                        {s.menuName}
                      </span>
                    </div>

                    <h3 className="whitespace-pre-line font-mono text-[clamp(24px,2.8vw,36px)] font-normal leading-[1.25] tracking-[-0.015em] text-text-primary">
                      {s.headline}
                    </h3>

                    <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
                      <p className="text-[15px] leading-[1.85] font-light text-text-secondary">
                        {s.body}
                      </p>

                      <div>
                        <p className="text-[15px] leading-[1.7] text-text-primary">
                          Os possíveis entregáveis incluem:
                        </p>
                        <ul className="mt-4 flex flex-col gap-3">
                          {s.deliverables.map((d) => (
                            <li
                              key={d}
                              className="flex items-start gap-3 text-[14px] leading-[1.7] font-light text-text-secondary"
                            >
                              <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                              {d}
                            </li>
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
      </div>

      <div className="px-6 py-20 lg:px-[clamp(24px,5vw,64px)]">
        <BlurFade>
          <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[4px] border border-border-subtle">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop')",
              }}
            />
            <div className="absolute inset-0 bg-bg-primary/80" />
            <div className="relative z-10 flex flex-col items-center px-6 py-24 text-center">
              <h3 className="max-w-[700px] font-mono text-[clamp(24px,3.2vw,38px)] font-normal leading-[1.3] tracking-[-0.015em] text-text-primary">
                Acreditamos que grandes resultados nascem quando tecnologia e propósito caminham na mesma direção.
              </h3>
              <Button variant="primary" className="mt-16 w-full sm:w-auto rounded-none border-0 bg-[#0006FF] text-white shadow-none ring-0 
                      hover:bg-blue-900 hover:shadow-none hover:ring-0 focus-visible:ring-0 focus-visible:shadow-none font-mono text-[16px]" asChild>
                <a href="#contato">entre em contato</a>
              </Button>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}