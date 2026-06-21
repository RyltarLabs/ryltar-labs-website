"use client";

import Link from "next/link";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/section-label";
import { ARTICLES } from "@/lib/content/articles-data";

export function ArticlesSection() {
  return (
    <section id="conteudos" className="overflow-hidden bg-bg-primary py-28">
      <div className="px-6 lg:px-[clamp(24px,5vw,64px)]">
        <div className="mx-auto max-w-[1280px]">
          <BlurFade>
            <SectionLabel>conteúdos</SectionLabel>
          </BlurFade>
        </div>
      </div>

      <BlurFade delay={0.15}>
        <div className="mt-20">
          <Carousel opts={{ align: "start", loop: true, startIndex: 1, dragFree: true }}>
            <CarouselContent 
              style={{ 
                paddingLeft: "max(clamp(24px, 5vw, 64px), calc(50vw - 640px))",
                paddingRight: "max(clamp(24px, 5vw, 64px), calc(50vw - 640px))"
              }}
            >
              {ARTICLES.map((article) => (
                <CarouselItem key={article.title} className="basis-[85%] md:basis-[400px] lg:basis-[440px]">
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

function ArticleCard({ category, title, image, slug }: { category: string; title: string; image: string; slug: string }) {
  return (
    <div className="group relative aspect-[3/4] w-full overflow-hidden rounded-[2px]">
      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url('${image}')` }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(9,9,9,0.92) 0%, rgba(9,9,9,0.55) 38%, rgba(9,9,9,0.05) 65%, transparent 100%)" }} />
      <div className="relative z-10 flex h-full flex-col justify-end p-8">
        <span className="font-mono text-[13px] tracking-[0.04em] text-white/70">{category}</span>
        <h3 className="mt-4 font-mono text-[26px] font-normal leading-[1.25] tracking-[-0.01em] text-white">{title}</h3>
        <Button variant="primary-flat" size="sm" asChild className="mt-8 w-full sm:w-fit text-[16px] sm:self-end">
          <Link href={`/conteudos/${slug}`}>Ler</Link>
        </Button>
      </div>
    </div>
  );
}