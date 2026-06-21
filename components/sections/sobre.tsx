"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { useEffect, useRef, useState } from "react";
import { MEDIA } from "@/lib/content/media";

export function Sobre() {
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);
  const [isTitle1InView, setIsTitle1InView] = useState(false);
  const [isTitle2InView, setIsTitle2InView] = useState(false);

  useEffect(() => {
    const observerOptions = { threshold: 0.5 };
    const observer1 = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsTitle1InView(true); }, observerOptions);
    const observer2 = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsTitle2InView(true); }, observerOptions);
    if (title1Ref.current) observer1.observe(title1Ref.current);
    if (title2Ref.current) observer2.observe(title2Ref.current);
    return () => { observer1.disconnect(); observer2.disconnect(); };
  }, []);

  return (
    <section id="sobre" className="px-6 py-28 lg:px-[clamp(24px,5vw,64px)]">
      <style>{`
        @keyframes highlight-text { 0% { background-position: 100% 0; color: inherit; } 100% { background-position: 0 0; color: white; } }
        .highlight-effect { background-image: linear-gradient(to right, var(--color-accent) 50%, transparent 50%); background-size: 200% 100%; background-position: 100% 0; display: inline; -webkit-box-decoration-break: clone; box-decoration-break: clone; }
        .animate-highlight { animation: highlight-text 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards; }
      `}</style>

      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-28 items-start">
          <div className="flex flex-col w-full">
            <BlurFade delay={0.1}>
              <h2 ref={title1Ref} className="mb-10 font-mono text-[clamp(38px,9vw,52px)] leading-[1.4] tracking-tight text-text-primary">
                Quando a <span className={`highlight-effect ${isTitle1InView ? 'animate-highlight' : ''}`} style={{ animationDelay: '0.2s' }}>construção de algo sério</span> começa antes de existir um nome
              </h2>
            </BlurFade>

            <BlurFade delay={0.2}>
              <div className="space-y-6 text-[18px] font-light leading-[1.8] text-text-secondary mb-16">
                <p>A Rytlar Labs não surgiu como um plano fechado nem como uma ideia perfeitamente estruturada desde o início. Ela apareceu primeiro como uma necessidade silenciosa dentro de um ambiente onde era evidente que conhecimento técnico, por si só, não bastava para resolver problemas reais com consistência. Havia sempre um intervalo entre entender um conceito e conseguir aplicá-lo de forma confiável em cenários complexos. Foi nesse intervalo que tudo começou a tomar forma.</p>
                <p>Esse processo aconteceu dentro da Universidade Federal da Bahia, não como um evento isolado, mas como um acúmulo de experiências acadêmicas, projetos práticos e tentativas recorrentes de transformar teoria em execução. A universidade funcionou menos como ponto de partida formal e mais como um ambiente de pressão intelectual, onde ideias precisavam sobreviver ao teste da prática mesmo em contextos limitados de tempo, recursos e maturidade técnica.</p>
              </div>
            </BlurFade>

            <BlurFade delay={0.3}>
              <div className="w-full aspect-[4/5] overflow-hidden bg-zinc-900 rounded-sm">
                <img src={MEDIA.aboutTeam} alt="Equipe colaborando" className="h-full w-full object-cover transition-all duration-500 opacity-100 grayscale-0 md:opacity-80 md:grayscale md:hover:opacity-100 md:hover:grayscale-0" />
              </div>
            </BlurFade>
          </div>

          <div className="flex flex-col w-full mt-20 md:mt-[180px]">            
            <BlurFade delay={0.3}>
              <h2 ref={title2Ref} className="mb-10 font-mono text-[clamp(38px,9vw,52px)] leading-[1.1] tracking-tight text-text-primary">
                Nossa <span className={`highlight-effect ${isTitle2InView ? 'animate-highlight' : ''}`} style={{ animationDelay: '0.2s' }}>história</span>
              </h2>
            </BlurFade>

            <BlurFade delay={0.4}>
              <div className="space-y-6 text-[18px] font-light leading-[1.8] text-text-secondary mb-16">
                <p>O final de 2025 marca o momento em que a Rytlar Labs deixa de ser apenas um conjunto disperso de iniciativas e passa a existir como uma identidade mais clara. Não houve um anúncio formal nem uma fundação abrupta. O que houve foi o reconhecimento de que certos projetos, apesar de diferentes entre si, compartilhavam uma mesma forma de pensar e executar.</p>
                <p>Esses projetos nasceram no ambiente universitário, principalmente na UFBA, onde era comum lidar com desafios técnicos que exigiam soluções mais cuidadosas do que aquelas geralmente adotadas em exercícios acadêmicos tradicionais. Com o tempo, a repetição desse tipo de problema criou um padrão. Em vez de abordagens pontuais, começou a surgir uma preocupação com consistência, arquitetura e continuidade.</p>
                <p>A Rytlar Labs passa então a representar esse conjunto de decisões acumuladas. O nome surge como consequência, não como origem. Ele passa a concentrar uma forma específica de trabalho que já existia antes de ser formalizada, marcada por tentativa, revisão constante e uma busca por reduzir a distância entre ideia e implementação real.</p>
                <p>A consolidação não aconteceu por crescimento rápido nem por validação externa imediata. Ela ocorreu pela repetição de entregas, pela evolução gradual das práticas internas e pela percepção de que havia valor em manter esses esforços sob uma mesma estrutura. A partir daí, a Rytlar deixa de ser apenas um contexto de experimentação e passa a operar como um estúdio em formação contínua, ainda em desenvolvimento, mas já com direção definida e base técnica consistente.</p>
              </div>
            </BlurFade>

            <BlurFade delay={0.5}>
              <div className="w-full aspect-[4/5] overflow-hidden bg-zinc-900 rounded-sm">
                <img src={MEDIA.aboutCode} alt="Código e Arquitetura" className="h-full w-full object-cover transition-all duration-500 opacity-100 grayscale-0 md:opacity-80 md:grayscale md:hover:opacity-100 md:hover:grayscale-0" />
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}