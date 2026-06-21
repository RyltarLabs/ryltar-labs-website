"use client";

import { use, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlurFade } from "@/components/magicui/blur-fade";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteNav } from "@/components/sections/site-nav"; // Importe a sua navbar aqui

const articlesData = {
  "sistema-limitando-crescimento": {
    category: "modernização",
    title: "Seu sistema ainda funciona. Então por que ele está limitando o crescimento da empresa?",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",
    content: [
      "Muitas empresas possuem softwares que cumprem suas tarefas diárias sem falhas aparentes. A operação roda e os boletos são pagos. Porém a verdadeira métrica de sucesso de uma plataforma corporativa não é apenas funcionar mas sim o quão rápido ela permite que o negócio se adapte a novas demandas.",
      "Um sistema legado cria uma dívida técnica silenciosa. Cada nova funcionalidade exige semanas de desenvolvimento porque o código original é rígido. A lentidão para inovar permite que concorrentes ganhem mercado rapidamente.",
      "Modernizar não significa necessariamente descartar tudo e começar do zero. A engenharia moderna utiliza padrões arquiteturais que substituem partes antigas gradativamente. Dessa forma a empresa ganha flexibilidade segurança e capacidade de escalar sem interromper a operação atual."
    ]
  },
  "contratar-ou-terceirizar": {
    category: "equipes de tecnologia",
    title: "Contratar ou terceirizar? Como escolher a estrutura ideal para desenvolver software",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop",
    content: [
      "A decisão sobre como formar um time de engenharia assombra líderes técnicos e fundadores. Terceirizar parece arriscado pela perda de controle cultural enquanto contratar internamente exige meses de recrutamento e alto custo operacional.",
      "A resposta ideal depende do ciclo de vida do produto. Projetos que demandam descobertas de mercado constantes e mudanças de rota semanais costumam exigir equipes internas fortes. A comunicação rápida e a cultura compartilhada fazem muita diferença nesse cenário.",
      "Por outro lado operações que precisam acelerar entregas específicas ou modernizar uma infraestrutura complexa ganham velocidade extrema com a terceirização estratégica. Ao trazer um estúdio especializado a empresa absorve conhecimento sênior instantâneo e pula a curva de aprendizado inicial garantindo um software bem construído desde o primeiro dia."
    ]
  },
  "cinco-perguntas-aplicativo": {
    category: "aplicações digitais",
    title: "Antes de criar um aplicativo, responda estas cinco perguntas",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2000&auto=format&fit=crop",
    content: [
      "A frase mais comum em reuniões de inovação costuma ser a sugestão de criar um novo aplicativo. No entanto a maioria das iniciativas falha nos primeiros meses porque a construção começou antes de uma validação essencial.",
      "A primeira reflexão deve ser sobre a real necessidade de instalação. O usuário realmente precisa baixar algo no celular ou um sistema web responsivo resolveria o problema com menos fricção e custo reduzido.",
      "Em seguida pense na retenção. Qual é o valor contínuo que fará a pessoa abrir a ferramenta todos os dias ou semanas. Produtos digitais de sucesso nascem de dores reais e não apenas do desejo da diretoria de modernizar a marca. Responder essas questões poupa recursos valiosos e direciona a engenharia para o que realmente importa."
    ]
  },
  "erro-projetos-software": {
    category: "estratégia digital",
    title: "O erro mais comum em projetos de software corporativo",
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?q=80&w=2000&auto=format&fit=crop",
    content: [
      "Plataformas corporativas costumam nascer com a premissa de resolver todos os problemas de todos os departamentos de uma única vez. Esse desejo por completude é o maior inimigo de entregas de qualidade no ambiente de tecnologia.",
      "Quando o escopo inicial tenta englobar fluxos financeiros ferramentas de marketing e controle de estoque o sistema entra em um longo ciclo de desenvolvimento invisível. O negócio gasta meses investindo recursos sem ter contato com uma tela funcional.",
      "A abordagem mais segura é o fatiamento arquitetural. Começar pela dor que gera mais prejuízo ou ineficiência e entregar um módulo central sólido. A partir dessa vitória inicial o sistema se expande organicamente absorvendo as necessidades reais que surgem durante o uso dos colaboradores."
    ]
  },
  "equipe-dedicada-entregas": {
    category: "desenvolvimento de software",
    title: "Quando faz sentido montar uma equipe dedicada para acelerar entregas",
    image: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?q=80&w=2000&auto=format&fit=crop",
    content: [
      "Existe um momento na trajetória de um produto em que adicionar mais desenvolvedores no mesmo código deixa as coisas ainda mais lentas. O choque de comunicação e a revisão constante de ferramentas paralisam operações inteiras.",
      "Formar uma equipe dedicada e isolada também chamada de squad faz sentido quando existe um desafio claro e desconectado do sistema principal. Essa célula ganha autonomia para tomar decisões arquiteturais e escolher as melhores ferramentas para resolver aquele problema específico.",
      "O resultado dessa estratégia é a eliminação da burocracia técnica. O foco deixa de ser manter o que já existe e passa a ser exclusivamente construir o futuro com qualidade permitindo um lançamento muito mais ágil e focado na experiência do usuário."
    ]
  },
  "ia-gera-valor": {
    category: "inteligência artificial",
    title: "Inteligência Artificial no dia a dia das empresas e onde ela realmente gera valor",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop",
    content: [
      "Muito tem sido dito sobre robôs substituindo decisões gerenciais complexas e gerando lucro de forma autônoma. Essa visão futurista obscurece o impacto prático e imediato que a automação inteligente pode trazer para as rotinas corporativas de hoje.",
      "O verdadeiro valor acontece na remoção do atrito. Analisar milhares de documentos jurídicos para encontrar inconsistências cruzar dados de compras para prever rupturas de estoque ou estruturar respostas ágeis para demandas previsíveis de clientes. A tecnologia brilha nas tarefas repetitivas de alta densidade.",
      "Para implementar isso com sucesso a empresa não precisa reinventar seu modelo de negócio. Basta acoplar modelos analíticos precisos aos sistemas que as equipes já utilizam transformando um software comum em uma ferramenta que antecipa necessidades reais de forma silenciosa e eficiente."
    ]
  },
  "dashboards-falham": {
    category: "dados e analytics",
    title: "Por que muitos dashboards falham em apoiar decisões",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    content: [
      "É muito comum encontrar empresas que investiram pesadamente em infraestrutura de dados e possuem telas maravilhosas cheias de gráficos e painéis coloridos. Apesar de toda essa beleza os gestores continuam tomando decisões baseadas em intuição.",
      "O excesso de informação é equivalente a nenhuma informação. Um dashboard que tenta mostrar todas as métricas da empresa ao mesmo tempo confunde o usuário e não deixa claro qual ação deve ser tomada caso um número caia ou suba.",
      "A construção de painéis eficientes exige foco absoluto. Cada tela deve responder a uma pergunta de negócio específica e evidenciar gargalos de forma limpa. A visualização de dados só é útil quando aponta caminhos e provoca mudanças diretas no rumo da companhia."
    ]
  }
};

export default function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const article = articlesData[resolvedParams.slug as keyof typeof articlesData];
  
  // Estado para controlar a visibilidade da Navbar
  const [isNavVisible, setIsNavVisible] = useState(true);

  // Lógica do Modo Leitura: Esconde a nav se o usuário parar de rolar
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      // Quando rola a página, a navbar aparece
      setIsNavVisible(true);
      clearTimeout(timeoutId);

      // Depois de 1.5s parado, se ele não estiver no topo absoluto da página, esconde
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

  if (!article) {
    notFound();
  }

  return (
    <article className="relative min-h-screen bg-bg-primary text-text-primary font-sans selection:bg-[#0006FF] selection:text-white pb-24">
      
      {/* NAVBAR COM ANIMAÇÃO DE ENTRADA/SAÍDA */}
      <div 
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ease-in-out ${
          isNavVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <SiteNav />
      </div>

      {/* HEADER HERO FULL-WIDTH */}
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
              className="font-mono text-[14px] text-text-secondary hover:text-white transition-colors block mb-6 w-fit"
            >
              voltar
            </Link>
          </BlurFade>

          <BlurFade delay={0.2}>
            <header>
              <h1 className="text-[clamp(32px,5vw,48px)] font-mono leading-[1.1] tracking-tight text-white drop-shadow-lg max-w-[720px]">
                {article.title}
              </h1>
            </header>
          </BlurFade>
        </div>
      </div>

      <div className="mx-auto max-w-[680px] px-6 mt-16">
        <div className="space-y-8 font-sans text-[17px] md:text-[19px] font-light leading-[1.8] text-zinc-300">
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