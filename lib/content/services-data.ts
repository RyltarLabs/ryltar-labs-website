export interface ServiceDef {
  id: string;
  menuName: string;
  headline: string;
  body: string;
  deliverables: string[];
  icon: "code" | "pencil" | "wrench" | "chart" | "search";
}

export const SERVICES: ServiceDef[] = [
  {
    id: "desenvolvimento",
    menuName: "Desenvolvimento\nde software",
    headline: "Sistemas robustos construídos\npara durar e escalar",
    body: "Desenvolvemos software sob medida para operações que não podem falhar. Nossa abordagem conecta arquitetura sólida, código testado e entendimento real do negócio — sempre de forma ágil e iterativa. Cada decisão técnica é tomada considerando o crescimento futuro do produto, não apenas a entrega imediata.",
    deliverables: ["Arquitetura de sistema documentada e versionada", "APIs REST/GraphQL com testes automatizados", "Pipeline de CI/CD configurado", "Documentação técnica viva do produto"],
    icon: "code",
  },
  {
    id: "design",
    menuName: "UX/UI Design",
    headline: "Interfaces que reduzem atrito\ne guiam a ação",
    body: "Design não é apenas estética, é como a ferramenta funciona nas mãos de quem a usa todos os dias. Mapeamos jornadas complexas para criar fluxos de tela lógicos, limpos e sem ambiguidades. O objetivo final é sempre a eficiência da operação e a clareza da informação.",
    deliverables: ["Mapeamento de jornada do usuário", "Wireframes e fluxos de navegação", "Protótipos de alta fidelidade interativos", "Design System completo e escalável"],
    icon: "pencil",
  },
  {
    id: "modernizacao",
    menuName: "Modernização\nde legado",
    headline: "Evolução técnica sem paralisar\na sua operação",
    body: "Sistemas antigos não precisam ser um peso. Refatoramos, migramos e modernizamos plataformas legado de forma incremental. Reduzimos custos de manutenção e habilitamos novas integrações, protegendo as regras de negócio que já funcionam na sua empresa.",
    deliverables: ["Análise de débito técnico e risco", "Plano de migração em fases (strangler fig)", "Refatoração e documentação de código legado", "Adequação a novos padrões de segurança"],
    icon: "wrench",
  },
  {
    id: "dados",
    menuName: "Dados e Integração",
    headline: "Informação fluida entre\ntodas as suas ferramentas",
    body: "Eliminamos silos de informação conectando as plataformas que sua empresa já utiliza. Criamos pipelines que coletam, tratam e unificam dados de diferentes fontes, entregando painéis confiáveis para que você tome decisões baseadas na realidade da operação.",
    deliverables: ["Modelagem e arquitetura de dados", "Pipelines de ETL (Extração, Transformação e Carga)", "Integração via APIs (ERPs, CRMs, etc)", "Dashboards gerenciais em tempo real"],
    icon: "chart",
  },
  {
    id: "consultoria",
    menuName: "Consultoria e\nArquitetura",
    headline: "Clareza técnica para\ndecisões estratégicas",
    body: "Antes de escrever a primeira linha de código, avaliamos se ela realmente precisa ser escrita. Entramos como parceiros técnicos para auditar projetos, definir arquiteturas, escolher tecnologias e garantir que o investimento de engenharia está alinhado ao momento do negócio.",
    deliverables: ["Auditoria técnica de projetos em andamento", "Definição de stack tecnológica e cloud", "Desenho de arquitetura de software", "Planejamento de escalabilidade"],
    icon: "search",
  }
];