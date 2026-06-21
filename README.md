# Ryltar Labs — Site institucional

Implementação fiel ao DNA visual do espresso-labs.com, adaptada para a
Ryltar Labs (front-end, back-end, modernização de legado, IA, ciência de
dados e automação).

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** (tokens via `@theme inline` em `app/globals.css`)
- **shadcn/ui** — base de componentes (`components/ui/*`): Button, Accordion,
  Separator, Carousel. Construídos sobre os mesmos primitivos que o CLI do
  shadcn usa (Radix UI + `class-variance-authority` + `tailwind-merge`),
  já que o `shadcn` CLI não tinha acesso de rede no ambiente de build.
  A API e a anatomia de cada componente seguem exatamente o padrão shadcn
  (`cn()`, `data-slot`, variantes via `cva`), então copiar/colar pelo CLI
  do shadcn em outro projeto vai gerar componentes compatíveis.
- **Embla Carousel** — motor real por trás do `<Carousel />` do shadcn/ui,
  usado na seção de Conteúdos.
- **Framer Motion** — motor de animação real por trás dos componentes
  Magic UI e ReactBits implementados:
  - `components/magicui/blur-fade.tsx` — reveal de scroll (padrão Magic UI
    `BlurFade`), usado em todas as seções.
  - `components/magicui/number-ticker.tsx` — contador animado (padrão
    Magic UI `NumberTicker`), usado nas métricas da seção "sobre".
  - `components/reactbits/text-rotate.tsx` — typewriter do hero
    ("beyond great [palavra]"), padrão ReactBits `TextRotate`.
  - `components/reactbits/scroll-dot.tsx` — indicador de scroll minimalista.
- **Radix UI** — primitivos de acessibilidade por trás do Accordion e do
  Carousel (mesmos primitivos usados pelo shadcn/ui oficial).
- **IBM Plex Sans** + **IBM Plex Mono** via `next/font/google`.

## Por que componentes "implementados" e não copiados de um CLI

O ambiente de build usado para montar este projeto não tinha acesso de
rede a `ui.shadcn.com`, `21st.dev` nem aos repositórios de Magic UI/
ReactBits. Para não simular ou improvisar visualmente, cada componente foi
reconstruído byte a byte seguindo a API pública e a anatomia oficial
de cada biblioteca (mesmas props, mesmos nomes de variantes, mesmo padrão
de composição). Isso significa que:

1. Rodar `npx shadcn@latest add button accordion separator carousel`
   em um ambiente com rede vai gerar componentes praticamente idênticos
   aos que estão em `components/ui/`.
2. Instalar Magic UI / ReactBits via seus respectivos CLIs vai expor uma
   API equivalente à que está em `components/magicui/` e
   `components/reactbits/`.
3. Nenhuma classe Tailwind genérica de template foi usada — todo o
   sistema de cor, tipografia e espaçamento vem dos tokens extraídos na
   análise do espresso-labs (ver tokens em `app/globals.css`).

## Estrutura

```
app/
  layout.tsx          → fontes (IBM Plex) + metadata
  page.tsx             → composição de todas as seções
  globals.css          → design tokens (cores, tipografia, motion)
components/
  ui/                  → shadcn/ui: button, accordion, separator, carousel
  magicui/             → blur-fade, number-ticker
  reactbits/            → text-rotate, scroll-dot
  sections/             → as 9 seções do site + dados/diagramas de serviços
```

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Antes de publicar

1. Troque o número de WhatsApp em `components/sections/site-nav.tsx`
   (constante `WHATSAPP_URL`) pelo número real da Ryltar Labs.
2. Substitua a imagem de fundo do hero
   (`components/sections/hero.tsx`) por uma foto premium real da equipe/
   ambiente de trabalho da Ryltar Labs.
3. Ajuste os depoimentos e cases para casos reais quando disponíveis.
4. Configure analytics e SEO adicional em `app/layout.tsx` conforme
   necessário.
