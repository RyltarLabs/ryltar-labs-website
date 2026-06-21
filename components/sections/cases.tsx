import { BlurFade } from "@/components/magicui/blur-fade";
import {
  DashboardMock,
  AutomationMock,
  DataMock,
} from "@/components/sections/case-mocks";

const CASES = [
  {
    Mock: DashboardMock,
    tag: "dashboard · bi",
    title: "Painel operacional em tempo real",
    desc: "Sistema de monitoramento de KPIs com atualização contínua e visão 360° da operação para tomada de decisão.",
  },
  {
    Mock: AutomationMock,
    tag: "automação · whatsapp",
    title: "Atendimento inteligente multicanal",
    desc: "Integração WhatsApp + CRM com agente de IA para triagem automática, reduzindo 68% do volume de atendimento manual.",
  },
  {
    Mock: DataMock,
    tag: "ciência de dados · ml",
    title: "Plataforma analítica preditiva",
    desc: "Pipeline de dados com modelos preditivos de demanda e churn, integrado a dashboards executivos automáticos.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "A migração do sistema legado foi feita sem interrupção. Qualidade técnica excepcional do início ao fim.",
    name: "Carlos M.",
    role: "CTO · Empresa de logística, SP",
  },
  {
    quote:
      "Dashboard entregue em seis semanas. Nosso time passou a tomar decisões em tempo real desde o primeiro dia.",
    name: "Fernanda L.",
    role: "COO · Rede de varejo, BA",
  },
];

export function Cases() {
  return (
    <section
      id="cases"
      className="bg-bg-surface px-6 py-24 lg:px-[clamp(24px,5vw,64px)]"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <BlurFade>
              <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.12em] text-accent">
                <span className="h-px w-6 bg-accent" />
                resultados digitais
              </div>
            </BlurFade>
            <BlurFade delay={0.1}>
              <h2 className="mt-6 font-display text-[clamp(28px,3.2vw,44px)] font-light leading-[1.15] tracking-[-0.025em] text-text-primary">
                Produtos que operam
                <br />
                em produção.
              </h2>
            </BlurFade>
          </div>
          <BlurFade delay={0.2}>
            <a
              href="#contato"
              className="font-mono text-xs text-text-tertiary tracking-[0.04em] border-b border-text-tertiary pb-0.5 transition-colors duration-200 hover:text-text-primary hover:border-text-secondary"
            >
              ver todos →
            </a>
          </BlurFade>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CASES.map((c, i) => (
            <BlurFade key={c.title} delay={0.1 + i * 0.1}>
              <div className="group overflow-hidden rounded-[6px] border border-border-subtle bg-bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/25">
                <div className="aspect-[16/10] p-3">
                  <c.Mock />
                </div>
                <div className="border-t border-border-subtle p-6">
                  <div className="font-mono text-[9px] uppercase tracking-[0.12em] text-accent">
                    {c.tag}
                  </div>
                  <h3 className="mt-2.5 font-mono text-[15px] font-medium tracking-[-0.01em] text-text-primary">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.7] font-light text-text-secondary">
                    {c.desc}
                  </p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <BlurFade key={t.name} delay={0.1 + i * 0.1}>
              <div className="border-l-2 border-border-subtle pl-6">
                <p className="text-[14px] leading-[1.8] font-light text-text-secondary">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-4 font-mono text-[11px] text-text-tertiary">
                  <span className="text-text-secondary">{t.name}</span> ·{" "}
                  {t.role}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
