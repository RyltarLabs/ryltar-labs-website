"use client";

import { Button } from "@/components/ui/button";
import { TextRotate } from "@/components/reactbits/text-rotate";
import { BlurFade } from "@/components/magicui/blur-fade";
import { motion } from "framer-motion";
import { MEDIA } from "@/lib/content/media";

const ROTATING_WORDS = ["apps", "automações", "inteligência", "dados", "produtos", "integrações", "soluções", "plataformas", "experiências"];

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden px-6 pb-16 pt-[72px] lg:px-[clamp(24px,5vw,64px)] lg:pb-28">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          initial={{ scale: 1.15 }} animate={{ scale: 1 }} transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${MEDIA.heroBg}')` }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(9,9,9,0.97) 0%, rgba(9,9,9,0.85) 45%, rgba(9,9,9,0.55) 100%)" }} />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1280px]">
        <BlurFade delay={0.1}>
          <h1 className="font-display text-[clamp(48px,10vw,124px)] font-light leading-[1.05] tracking-[-0.04em] text-text-primary">
            building better<br />
            <TextRotate words={ROTATING_WORDS} className="text-text-primary text-[clamp(48px,10vw,108px)]" />
          </h1>
        </BlurFade>

        <BlurFade delay={0.2}>
          <div className="mt-12 flex flex-col gap-10 pt-12 lg:flex-row lg:items-end">            
            <div className="flex flex-col sm:flex-row w-full sm:w-auto flex-shrink-0 items-start sm:items-center gap-8 lg:ml-auto border-transparent">
              <Button variant="primary-flat" asChild className="bg-white text-black hover:bg-white text-[18px] sm:text-[clamp(18px,1.5vw,22px)] sm:px-[clamp(24px,2.5vw,42px)] w-full sm:w-auto">
                <a href="#sobre">conheça</a>
              </Button>
              <a href="#servicos" className="font-mono text-[16px] sm:text-[15px] text-text-tertiary tracking-[0.04em] border-transparent pb-0.5 transition-colors duration-200 hover:text-text-primary hover:border-text-secondary">
                ver serviços
              </a>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}