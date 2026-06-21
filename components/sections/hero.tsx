"use client";

import { Button } from "@/components/ui/button";
import { TextRotate } from "@/components/reactbits/text-rotate";
import { ScrollDot } from "@/components/reactbits/scroll-dot";
import { BlurFade } from "@/components/magicui/blur-fade";
import { WhatsAppIcon, WHATSAPP_URL } from "@/components/sections/site-nav";

const ROTATING_WORDS = [
  "apps",
  "automações",
  "inteligência",
  "dados",
  "produtos",
  "integrações",
  "soluções",
  "plataformas",
  "experiências",
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden px-6 pb-12 pt-[60px] lg:px-[clamp(24px,5vw,64px)] lg:pb-20">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2400&auto=format&fit=crop')",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(9,9,9,0.97) 0%, rgba(9,9,9,0.85) 45%, rgba(9,9,9,0.55) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1280px]">
        <BlurFade delay={0.1}>
          <h1 className="font-display text-[clamp(56px,8.5vw,104px)] font-light leading-[1.05] tracking-[-0.04em] text-text-primary">
            building better
            <br />
            <TextRotate words={ROTATING_WORDS} className="text-text-primary text-[clamp(56px,8.5vw,90px)]" />
          </h1>
        </BlurFade>

        <BlurFade delay={0.2}>
          <div className="mt-10 flex flex-col gap-8 pt-10 lg:flex-row lg:items-end">            
            <div className="flex flex-shrink-0 items-center gap-6 ml-auto border-transparent">
              <Button
                variant="primary"
                asChild
                className="font-mono rounded-none border-0 bg-white text-black px-[clamp(20px,2vw,36px)] text-[clamp(14px,1vw,18px)] shadow-none ring-0 hover:bg-white hover:shadow-none hover:ring-0 focus-visible:ring-0 focus-visible:shadow-none"
              >
                <a href="#sobre">conheça</a>
              </Button>
              <a
                href="#servicos"
                className="font-mono text-xs text-text-tertiary tracking-[0.04em] border-transparent pb-0.5 transition-colors duration-200 hover:text-text-primary hover:border-text-secondary"
              >
                ver serviços
              </a>
            </div>
          </div>
        </BlurFade>
      </div>

    </section>
  );
}
