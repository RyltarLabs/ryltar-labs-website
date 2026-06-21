"use client";

import Link from "next/link";
import { BlurFade } from "@/components/magicui/blur-fade";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const ARTICLES = [
  {
    slug: "sistema-limitando-crescimento",
    category: "modernização",
    title: "Seu sistema ainda funciona. Então por que ele está limitando o crescimento da empresa?",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=900&auto=format&fit=crop",
  },
  {
    slug: "contratar-ou-terceirizar",
    category: "equipes de tecnologia",
    title: "Contratar ou terceirizar? Como escolher a estrutura ideal para desenvolver software",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=900&auto=format&fit=crop",
  },
  {
    slug: "cinco-perguntas-aplicativo",
    category: "aplicações digitais",
    title: "Antes de criar um aplicativo, responda estas cinco perguntas",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=900&auto=format&fit=crop",
  },
  {
    slug: "erro-projetos-software",
    category: "estratégia digital",
    title: "O erro mais comum em projetos de software corporativo",
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?q=80&w=900&auto=format&fit=crop",
  },
  {
    slug: "equipe-dedicada-entregas",
    category: "desenvolvimento de software",
    title: "Quando faz sentido montar uma equipe dedicada para acelerar entregas",
    image: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?q=80&w=900&auto=format&fit=crop",
  },
  {
    slug: "ia-gera-valor",
    category: "inteligência artificial",
    title: "Inteligência Artificial no dia a dia das empresas e onde ela realmente gera valor",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=900&auto=format&fit=crop",
  },
  {
    slug: "dashboards-falham",
    category: "dados e analytics",
    title: "Por que muitos dashboards falham em apoiar decisões",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
  },
];

export function ArticlesSection() {
  return (
    <section id="conteudos" className="overflow-hidden bg-bg-primary py-24">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 lg:grid-cols-[280px_1fr] lg:gap-20">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <BlurFade>
              <div className="flex items-center gap-3 font-mono text-[16px] tracking-[0.12em] text-[#0006FF]">
                <span className="h-px w-6 bg-[#0006FF]" />
                conteúdos
              </div>
            </BlurFade>
          </div>
        </div>
      </div>

      <BlurFade delay={0.15}>
        <div className="mt-16">
          <Carousel opts={{ align: "start", dragFree: true }}>
            <CarouselContent className="px-6 lg:px-[clamp(24px,5vw,64px)]">
              {ARTICLES.map((article) => (
                <CarouselItem
                  key={article.title}
                  className="basis-[290px] sm:basis-[320px]"
                >
                  <ArticleCard {...article} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </BlurFade>
    </section>
  );
}

function ArticleCard({
  category,
  title,
  image,
  slug,
}: {
  category: string;
  title: string;
  image: string;
  slug: string;
}) {
  return (
    <div className="group relative aspect-[3/4] w-full overflow-hidden rounded-[2px]">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(9,9,9,0.92) 0%, rgba(9,9,9,0.55) 38%, rgba(9,9,9,0.05) 65%, transparent 100%)",
        }}
      />

      <div className="relative z-10 flex h-full flex-col justify-end p-6">
        <span className="font-mono text-[11px] tracking-[0.04em] text-white/70">
          {category}
        </span>
        <h3 className="mt-3 font-mono text-[22px] font-normal leading-[1.25] tracking-[-0.01em] text-white">
          {title}
        </h3>

        <Button
          variant="primary"
          size="sm"
          asChild
          className="mt-6 w-fit rounded-none font-mono text-[16px] border-0 bg-[#0006FF] text-white shadow-none ring-0 hover:bg-blue-900 hover:shadow-none hover:ring-0 focus-visible:ring-0 focus-visible:shadow-none self-end"
        >
          <Link href={`/conteudos/${slug}`}>Ler</Link>
        </Button>
      </div>
    </div>
  );
}