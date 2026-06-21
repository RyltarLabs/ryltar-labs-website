import { BlurFade } from "@/components/magicui/blur-fade";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/section-label";
import { FAQ_ITEMS } from "@/lib/content/faq-data";
import Link from "next/link";

export function Faq() {
  return (
    <section id="faq" className="bg-bg-surface px-6 py-28 lg:px-[clamp(24px,5vw,64px)]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 lg:grid-cols-[340px_1fr] lg:gap-24">
        <div>
          <BlurFade>
            <SectionLabel>faq</SectionLabel>
          </BlurFade>
        
          <BlurFade>
            <div className="mt-10 mx-auto max-w-[420px] border border-border-active p-10">
              <h4 className="font-mono text-[22px] font-normal leading-[1.3] tracking-[-0.01em] text-text-primary">Não encontrou o que estava procurando?</h4>
              <p className="mt-5 text-[16px] leading-[1.75] font-light text-text-secondary">Nossa equipe pode ajudar a identificar a solução ideal para você. Envie uma mensagem e nós entraremos em contato para orientá-lo.</p>
              <Button variant="primary-flat" className="mt-8 w-full sm:w-auto text-[18px]" asChild>
                <Link href="/#contato">entre em contato</Link>
              </Button>
            </div>
          </BlurFade>
        </div>

        <BlurFade delay={0.15}>
          <Accordion type="single" collapsible>
            {FAQ_ITEMS.map((item) => (
              <AccordionItem key={item.q} value={item.q}>
                <AccordionTrigger className="text-left text-[18px] font-mono">{item.q}</AccordionTrigger>
                <AccordionContent className="text-[16px] leading-relaxed text-text-secondary">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </BlurFade>
      </div>
    </section>
  );
}