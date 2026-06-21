"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { DataMock } from "./case-mocks";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/section-label";
import Link from "next/link";

export function Cases() {
  return (
    <section className="bg-[#0e0e0e] py-28 sm:py-36 px-6 lg:px-[clamp(24px,5vw,64px)]">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[440px_1fr] lg:gap-28 items-center">
          <div className="flex flex-col justify-center">
            <BlurFade>
              <SectionLabel>casos de sucesso</SectionLabel>
            </BlurFade>
            
            <BlurFade delay={0.1}>
              <h2 className="mt-10 font-mono text-[clamp(34px,4.5vw,52px)] font-normal leading-[1.2] tracking-[-0.03em] text-text-primary">
                Aplicações que movem operações reais
              </h2>
            </BlurFade>

            <BlurFade delay={0.2}>
              <p className="mt-8 text-[18px] font-light leading-[1.8] text-text-secondary">
                Do MVP ao software enterprise, construímos interfaces que reduzem atrito e arquiteturas que escalam sem gargalos.
              </p>
            </BlurFade>

            <BlurFade delay={0.3}>
              <Button variant="primary-flat" className="mt-14 w-full sm:w-auto text-[18px]" asChild>
                <Link href="/#contato">falar sobre meu projeto</Link>
              </Button>
            </BlurFade>
          </div>

          <BlurFade delay={0.2} className="relative mt-10 lg:mt-0">
            <DataMock />
          </BlurFade>
        </div>
      </div>
    </section>
  );
}