import { BlurFade } from "@/components/magicui/blur-fade";

export function Statement() {
  return (
    <section className="bg-bg-primary px-6 py-24 lg:px-[clamp(24px,5vw,64px)]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 lg:grid-cols-[280px_1fr] lg:gap-20">
        <BlurFade>
          <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.12em] text-accent">
            <span className="h-px w-6 bg-accent" />
            resultados
          </div>
        </BlurFade>

        <BlurFade delay={0.1}>
          <blockquote className="max-w-[640px] font-display text-[clamp(20px,5vw,26px)] font-light leading-[1.45] text-text-primary">
            &ldquo;Em três meses transformamos nossa operação inteira.
            Processos que levavam horas hoje são automáticos.&rdquo;
          </blockquote>
          <div className="mt-8 font-mono text-xs tracking-[0.02em] text-text-tertiary">
            Daniela S. · Head of Operations
            <br />
            Empresa de saúde · Rio de Janeiro
          </div>
        </BlurFade>
      </div>
    </section>
  );
}