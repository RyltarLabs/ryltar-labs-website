import { BlurFade } from "@/components/magicui/blur-fade";
import { SectionLabel } from "@/components/ui/section-label";

export function Statement() {
  return (
    <section className="border-t border-border bg-bg-primary px-6 py-36 lg:px-[clamp(24px,5vw,64px)]">
      <div className="mx-auto flex max-w-[1000px] flex-col items-center text-center">
        <BlurFade>
          <SectionLabel className="justify-center">nossa visão</SectionLabel>
        </BlurFade>

        <BlurFade delay={0.1}>
          <h2 className="mt-10 font-mono text-[clamp(30px,5vw,58px)] font-normal leading-[1.4] tracking-[-0.02em] text-text-primary">
            "Tecnologia só é útil quando se torna <span className="italic text-text-secondary">invisível</span>. Nosso papel não é vender código, é remover os obstáculos entre o seu negócio e o crescimento."
          </h2>
        </BlurFade>
      </div>
    </section>
  );
}