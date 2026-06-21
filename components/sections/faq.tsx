import { BlurFade } from "@/components/magicui/blur-fade";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";

const FAQ_ITEMS = [
  {
    q: "Quanto custa desenvolver um software?",
    a: "Depende do escopo, complexidade e tecnologia envolvida. Trabalhamos com projeto fechado ou time dedicado. A conversa começa com um diagnóstico gratuito para entender sua necessidade e propor o melhor formato.",
  },
  {
    q: "Vocês modernizam sistemas antigos?",
    a: "Sim — é uma das nossas principais especialidades. Fazemos isso de forma gradual e segura, sem paralisar o que está em produção. O processo começa com mapeamento e documentação do sistema existente.",
  },
  {
    q: "Como funciona um projeto de IA?",
    a: "Começamos identificando onde a IA gera valor real no seu negócio — não onde parece impressionante. Depois desenhamos, testamos e integramos o modelo ao seu fluxo operacional, com monitoramento contínuo.",
  },
  {
    q: "Vocês trabalham com integrações entre sistemas?",
    a: "Sim. Construímos conectores entre CRMs, ERPs, plataformas de atendimento, WhatsApp Business API, Instagram e sistemas internos — com rastreabilidade e retry automático.",
  },
  {
    q: "Quanto tempo leva um projeto?",
    a: "Um MVP bem delimitado costuma levar de 6 a 12 semanas. Projetos maiores, de 3 a 6 meses. Trabalhamos em ciclos curtos com entregas incrementais desde a primeira semana.",
  },
  {
    q: "Vocês fazem manutenção contínua?",
    a: "Sim. Oferecemos planos de suporte e evolução contínua — com SLA de resposta, atualizações de segurança e desenvolvimento de novas funcionalidades conforme o negócio cresce.",
  },
];

export function Faq() {
  return (
    <section
      id="faq"
      className="bg-bg-surface px-6 py-24 lg:px-[clamp(24px,5vw,64px)] "
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 lg:grid-cols-[280px_1fr] lg:gap-20">
        <div>
          <BlurFade>
            <div className="flex items-center gap-3 font-mono text-[16px] tracking-[0.12em] text-[#0006FF]">
              <span className="h-px w-6 bg-[#0006FF]" />
              faq
            </div>
          </BlurFade>
        
          <BlurFade>
            <div className="mt-8 mx-auto max-w-[420px] border border-border-active p-8">
              <h4 className="font-mono text-[19px] font-normal leading-[1.3] tracking-[-0.01em] text-text-primary">
                Não encontrou o que estava procurando?
              </h4>
              <p className="mt-4 text-[14px] leading-[1.75] font-light text-text-secondary">
                Nossa equipe pode ajudar a identificar a solução ideal para
                você. Envie uma mensagem e nós entraremos em contato para
                orientá-lo.
              </p>
              <Button variant="primary" className="mt-6 w-full sm:w-auto rounded-none border-0 bg-[#0006FF] text-white font-mono text-[16px] shadow-none ring-0 
                      hover:bg-blue-900 hover:shadow-none hover:ring-0 focus-visible:ring-0 focus-visible:shadow-none" asChild>
                <a href="#contato">entre em contato</a>
              </Button>
            </div>
          </BlurFade>
        </div>

        <BlurFade delay={0.15}>
          <Accordion type="single" collapsible>
            {FAQ_ITEMS.map((item) => (
              <AccordionItem key={item.q} value={item.q}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </BlurFade>
      </div>
    </section>
  );
}