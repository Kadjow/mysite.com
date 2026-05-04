export type ProjectCaseStudy = {
  problem: string;
  solution: string;
  impact: string;
};

export type Project = {
  name: string;
  description: string;
  preview: string;
  caseStudy: ProjectCaseStudy;
  tags: string[];
  status: string;
  tone: "cyan" | "emerald" | "amber" | "violet" | "rose" | "indigo";
  featured: boolean;
  highlight?: string;
  repoUrl?: string;
  demoUrl?: string;
  caseUrl?: string;
};

export const projects: Project[] = [
  {
    name: "PO Agent / OpenClaw",
    description:
      "Agente de Product Owner integrado a Discord e Linear para acompanhar projetos, interpretar status, organizar progresso e apoiar decisões com IA.",
    preview: "Coordena contexto, progresso e priorização em um único fluxo.",
    caseStudy: {
      problem:
        "Times com atualizações dispersas em Discord e Linear perdem contexto, priorização e clareza operacional ao longo do projeto.",
      solution:
        "Centralizei leitura de status, organização de progresso e apoio à decisão em um agente que transforma sinais soltos em contexto acionável.",
      impact:
        "O acompanhamento fica mais legível, consistente e útil para decisões de produto sem depender de checagens manuais o tempo todo.",
    },
    tags: [
      "Node.js",
      "IA",
      "Discord",
      "Linear",
      "Product Owner",
      "Automação",
      "Arquitetura modular",
    ],
    status: "Produto pessoal",
    tone: "cyan",
    featured: true,
    highlight: "Coordenação, contexto e decisão",
  },
  {
    name: "Spark / Sistema de Vendas",
    description:
      "Sistema com mobile Flutter, desktop em C# e middleware/API Python para emissão de vendas, catálogo, estoque e dashboard.",
    preview: "Operação comercial conectada entre mobile, desktop e API.",
    caseStudy: {
      problem:
        "A operação comercial precisava consultar produtos, acompanhar estoque e emitir vendas sem fricção entre diferentes pontos do sistema.",
      solution:
        "Estruturei uma solução multi-plataforma com Flutter, desktop em C# e middleware Python para integrar catálogo, vendas e métricas.",
      impact:
        "A rotina diária ganha fluidez, com menos ruptura entre canais e leitura mais objetiva do que está acontecendo na operação.",
    },
    tags: ["Flutter", "Python", "API REST", "C#", "Vendas", "Estoque", "Dashboard"],
    status: "Produção",
    tone: "emerald",
    featured: true,
    highlight: "Operação e multi-plataforma",
  },
  {
    name: "PDF OCR / post_transcribe",
    description:
      "Aplicação para extração e estruturação de texto de PDFs e imagens, com front-end React/Vite e backend FastAPI.",
    preview: "OCR aplicado a um problema real, com deploy público.",
    caseStudy: {
      problem:
        "A transcrição e a organização manual de conteúdo em PDFs e imagens tornam o consumo e o reaproveitamento dessas informações mais lentos.",
      solution:
        "Combinei uma interface React/Vite com backend FastAPI para extrair, estruturar e devolver texto utilizável a partir de arquivos difíceis de consumir.",
      impact:
        "O material passa a ser reaproveitado com mais rapidez, reduzindo etapas manuais e tornando o conteúdo muito mais acessível.",
    },
    tags: ["React", "FastAPI", "Python", "OCR", "PDFs", "Deploy"],
    status: "Produto pessoal",
    tone: "violet",
    featured: true,
    highlight: "Problema real com deploy público",
    repoUrl: "https://github.com/Kadjow/post_transcribe",
    demoUrl: "https://post-transcribe-web.vercel.app",
  },
  {
    name: "GoCoffee Landing Page",
    description:
      "Landing page premium e orientada à conversão para a unidade GoCoffee Cascavel, com foco em marca e WhatsApp como canal principal.",
    preview: "Marca e conversão organizadas em uma narrativa visual única.",
    caseStudy: {
      problem:
        "A presença digital precisava traduzir marca, proposta comercial e caminho de contato com mais clareza e percepção premium.",
      solution:
        "Desenhei uma landing page com foco editorial, hierarquia forte e CTA direto para WhatsApp como principal canal de conversão.",
      impact:
        "A proposta fica mais clara, o percurso até o contato encurta e a experiência reforça melhor o posicionamento da marca.",
    },
    tags: ["Angular", "SCSS", "Landing page", "UI/UX", "Conversão"],
    status: "Landing page",
    tone: "amber",
    featured: false,
    highlight: "Narrativa visual e conversão",
    repoUrl: "https://github.com/Kadjow/LP_gocoffeeCascavel",
  },
  {
    name: "Portfólio atual / novo portfólio",
    description:
      "Evolução do portfólio profissional com foco em narrativa, design system, posicionamento estratégico e arquitetura front-end.",
    preview: "Reposicionamento visual com narrativa, sistema e clareza.",
    caseStudy: {
      problem:
        "A apresentação profissional precisava valorizar contexto, produto e entrega real em vez de listar apenas stack e ferramentas.",
      solution:
        "Reestruturei narrativa, hierarquia visual e componentes para conectar posicionamento, UX e arquitetura front-end em uma experiência coesa.",
      impact:
        "A percepção de senioridade fica mais clara e a leitura do portfólio comunica melhor a relação entre estratégia e execução.",
    },
    tags: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui", "Design System"],
    status: "Posicionamento",
    tone: "indigo",
    featured: false,
    highlight: "Narrativa e identidade",
    repoUrl: "https://github.com/Kadjow/diogo.a.gulhak.github.io",
    demoUrl: "https://kadjow.github.io/diogo.a.gulhak.github.io/",
  },
  {
    name: "Seu Clima Hoje",
    description:
      "Aplicativo Flutter para visualizar o clima atual de forma simples e rápida, reforçando integração com API e clareza de interface.",
    preview: "Consulta de clima mobile com foco em leitura rápida.",
    caseStudy: {
      problem:
        "Era preciso consumir dados externos de clima em uma interface mobile direta, sem poluição e com leitura imediata.",
      solution:
        "Construí uma experiência Flutter enxuta para apresentar o clima atual de forma simples, clara e integrada a API externa.",
      impact:
        "O app entrega consulta rápida e legível, ao mesmo tempo em que reforça integração com API e organização da experiência mobile.",
    },
    tags: ["Flutter", "API", "UX mobile", "Estudo aplicado"],
    status: "Projeto complementar",
    tone: "rose",
    featured: false,
    highlight: "Repositório público do GitHub",
    repoUrl: "https://github.com/Kadjow/Seu-Clima-Hoje",
  },
];
