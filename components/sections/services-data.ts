export interface ServiceDef {
  id: string;
  number: string;
  menuName: string;
  headline: string;
  body: string;
  deliverables: string[];
  icon: "code" | "pencil" | "wrench" | "chart" | "search";
}

export const SERVICES: ServiceDef[] = [
  {
    id: "desenvolvimento",
    number: "01",
    menuName: "Desenvolvimento\nde software",
    headline: "Sistemas robustos construídos\npara durar e escalar",
    body: "Desenvolvemos software sob medida para operações que não podem falhar. Nossa abordagem conecta arquitetura sólida, código testado e entendimento real do negócio — sempre de forma ágil e iterativa. Cada decisão técnica é tomada considerando o crescimento futuro do produto, não apenas a entrega imediata.",
    deliverables: [
      "Arquitetura de sistema documentada e versionada",
      "APIs REST/GraphQL com testes automatizados",
      "Pipeline de CI/CD configurado",
      "Documentação técnica viva do produto",
    ],
    icon: "code",
  },
  {
    id: "manutencao",
    number: "02",
    menuName: "Manutenção\nde software",
    headline: "Evolução contínua sem\nperder estabilidade",
    body: "Software em produção precisa de cuidado constante. Oferecemos manutenção contínua com SLA de resposta, monitoramento proativo e atualizações de segurança — para que pequenos problemas nunca se transformem em incidentes críticos. Atuamos como extensão do seu time técnico.",
    deliverables: [
      "SLA de resposta para incidentes críticos",
      "Monitoramento e alertas de saúde do sistema",
      "Atualizações de dependências e segurança",
      "Relatórios mensais de performance e uptime",
    ],
    icon: "wrench",
  },
  {
    id: "legado",
    number: "03",
    menuName: "Modernização de\nsistemas legados",
    headline: "De sistema intocável\na plataforma viva",
    body: "Migramos sistemas críticos de forma gradual e segura, sem paralisar a operação. Mapeamos o que existe, documentamos o que ninguém sabe explicar e eliminamos dívida técnica acumulada — restaurando a capacidade do seu time de evoluir o produto com confiança.",
    deliverables: [
      "Mapeamento e documentação do sistema atual",
      "Plano de migração gradual sem downtime",
      "Cobertura de testes para o código migrado",
      "Treinamento do time interno na nova stack",
    ],
    icon: "search",
  },
  {
    id: "design",
    number: "04",
    menuName: "Design\nUX/UI",
    headline: "Interfaces que reduzem\nfricção operacional",
    body: "Desenhamos experiências digitais a partir de pesquisa real com usuários — não de tendências visuais passageiras. Cada tela é pensada para reduzir cliques, eliminar ambiguidade e fazer o time adotar a ferramenta no primeiro dia, sem treinamento extenso.",
    deliverables: [
      "Pesquisa de usuário e mapeamento de jornadas",
      "Wireframes e prototipação navegável",
      "Design system documentado e escalável",
      "Testes de usabilidade com usuários reais",
    ],
    icon: "pencil",
  },
  {
    id: "dados",
    number: "05",
    menuName: "Dados",
    headline: "Inteligência que sustenta\ndecisões reais",
    body: "Construímos pipelines de dados, modelos preditivos e dashboards que transformam volume de informação fragmentada em decisões fundamentadas. Do ingestion ao insight, com rastreabilidade e governança em cada etapa do processo.",
    deliverables: [
      "Pipeline de ingestão e transformação de dados",
      "Dashboards analíticos com KPIs em tempo real",
      "Modelos preditivos validados estatisticamente",
      "Governança e documentação das fontes de dados",
    ],
    icon: "chart",
  },
];
