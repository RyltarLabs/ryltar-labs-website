import { SiteNav } from "@/components/sections/site-nav";
import { Hero } from "@/components/sections/hero";
import { Statement } from "@/components/sections/statement";
import { Sobre } from "@/components/sections/sobre";
import { Servicos } from "@/components/sections/servicos";
import { Cases } from "@/components/sections/cases";
import { Faq } from "@/components/sections/faq";
import { Contato } from "@/components/sections/contato";
import { SiteFooter } from "@/components/sections/site-footer";
import { ArticlesSection } from "@/components/sections/conteudos";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        {/* <Statement /> */}
        <Sobre />
        <Servicos />
        {/* <Cases /> */}
        <ArticlesSection />
        <Faq />
        <Contato />
      </main>
      <SiteFooter />
    </>
  );
}
