"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlurFade } from "@/components/magicui/blur-fade";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteNav } from "@/components/sections/site-nav";
import { ARTICLES } from "@/lib/content/articles-data";
import { SITE_CONFIG } from "@/lib/config/site";

export default function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const article = ARTICLES.find((a) => a.slug === resolvedParams.slug);
  const [isNavVisible, setIsNavVisible] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      setIsNavVisible(true);
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        if (window.scrollY > 150) {
          setIsNavVisible(false);
        }
      }, 1500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (article) {
      document.title = `${article.title} | ${SITE_CONFIG.name}`;
    }
  }, [article]);

  if (!article) {
    notFound();
  }

  return (
    <article className="relative min-h-screen bg-bg-primary text-text-primary font-sans selection:bg-[#0006FF] selection:text-white pb-24">
      <div 
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ease-in-out ${
          isNavVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <SiteNav />
      </div>

      <div className="relative w-full h-[65vh] min-h-[480px] flex flex-col">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover grayscale opacity-80" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-[#09090b]/30" />
        </div>

        <div className="relative z-10 w-full max-w-[800px] mx-auto px-6 h-full flex flex-col justify-end pt-12 pb-16">
          <BlurFade delay={0.1}>
            <Link 
              href="/#conteudos" 
              className="font-mono text-[16px] text-text-secondary hover:text-white transition-colors block mb-6 w-fit"
            >
              voltar
            </Link>
          </BlurFade>

          <BlurFade delay={0.2}>
            <header>
              <h1 className="text-[clamp(38px,6vw,58px)] font-mono leading-[1.1] tracking-tight text-white drop-shadow-lg max-w-[720px]">
                {article.title}
              </h1>
            </header>
          </BlurFade>
        </div>
      </div>

      <div className="mx-auto max-w-[680px] px-6 mt-16">
        <div className="space-y-8 font-sans text-[20px] md:text-[22px] font-light leading-[1.8] text-zinc-300">
          {article.content.map((paragraph, index) => (
            <BlurFade key={index} delay={0.3 + (index * 0.1)}>
              <p>{paragraph}</p>
            </BlurFade>
          ))}
        </div>
      </div>
      
      <div className="mt-24">
        <SiteFooter /> 
      </div>
    </article>
  );
}