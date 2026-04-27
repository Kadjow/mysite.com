export type Project = {
  name: string;
  description: string;
  problemSolved: string;
  tags: string[];
  status: string;
  tone: "cyan" | "emerald" | "amber" | "violet" | "rose" | "indigo";
  featured: boolean;
  highlight?: string;
  repoUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    name: "PO Agent / OpenClaw",
    description:
      "Agente de Product Owner integrado a Discord e Linear para acompanhar projetos, interpretar status, organizar progresso e apoiar decisões com IA.",
    problemSolved:
      "Reduzir ruído operacional e dar mais visibilidade para times que precisam transformar atualização dispersa em contexto útil, priorização e acompanhamento consistente.",
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
    problemSolved:
      "Conectar operação comercial, consulta de produtos, estoque em tempo real e leitura de métricas em uma experiência mais objetiva para uso diário.",
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
    problemSolved:
      "Diminuir o esforço manual de transcrição e organização de conteúdo em PDF, transformando material difícil de consumir em texto acessível e utilizável.",
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
    problemSolved:
      "Traduzir marca e proposta comercial em uma interface mais premium, clara e preparada para conversão direta em canal de contato.",
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
    problemSolved:
      "Reposicionar a apresentação profissional para valorizar produto, contexto e entrega real, em vez de vender apenas uma stack específica.",
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
    problemSolved:
      "Criar uma experiência mobile direta para consulta de clima, com foco em leitura rápida e consumo simples de dados externos.",
    tags: ["Flutter", "API", "UX mobile", "Estudo aplicado"],
    status: "Projeto complementar",
    tone: "rose",
    featured: false,
    highlight: "Repositório público do GitHub",
    repoUrl: "https://github.com/Kadjow/Seu-Clima-Hoje",
  },
];
