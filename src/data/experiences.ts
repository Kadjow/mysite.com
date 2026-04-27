export type Experience = {
  company: string;
  role: string;
  category: string;
  icon: "atlas" | "slingui" | "gocoffee" | "marcondes" | "devpr" | "escotismo";
  summary: string;
  highlights: string[];
  whyItMatters: string;
  tags: string[];
};

export const experiences: Experience[] = [
  {
    company: "Atlas",
    role: "Software Engineer Mobile Flutter",
    category: "Mobile / Produção",
    icon: "atlas",
    summary:
      "Atuação com produto mobile em produção, cobrindo publicação, arquitetura, integrações e consistência visual.",
    highlights: [
      "Entregou e publicou 4 apps do zero até aprovação em Play Store e App Store.",
      "Implementou white label e multi-tenant para 3 clientes com variação de tema, marca e contexto.",
      "Automatizou CI/CD com CodeMagic e GitHub Actions e estruturou uma base modular para evolução do app.",
      "Integrau APIs REST, OAuth/OIDC, JWT, Firebase, FCM, permissões e WebView com foco em fluxo real de uso.",
    ],
    whyItMatters:
      "Reforça capacidade de tirar produto do papel, organizar arquitetura para crescer e sustentar qualidade sob condições reais de produção.",
    tags: ["Flutter", "Dart", "CI/CD", "OAuth", "Firebase", "Arquitetura modular"],
  },
  {
    company: "Slingui",
    role: "Desenvolvedor Web Angular",
    category: "SaaS / Front-end",
    icon: "slingui",
    summary:
      "Trabalho em SaaS multi-tenant com foco em onboarding, autenticação, navegação e consistência visual escalável.",
    highlights: [
      "Desenvolveu funcionalidades de onboarding, autenticação e navegação em um ambiente SaaS multi-tenant.",
      "Implementou white label dinâmico com cores, logos e temas adaptáveis por cliente.",
      "Estruturou design tokens com CSS variables e mat-sys e refatorou componentes mais complexos.",
      "Corrigiu bugs de UI/UX, estado, DOM e i18n para melhorar previsibilidade e experiência em uso.",
    ],
    whyItMatters:
      "Mostra maturidade em sistemas que exigem organização visual, flexibilidade por cliente e manutenção contínua sem perder legibilidade.",
    tags: ["Angular", "TypeScript", "White label", "Design tokens", "i18n", "SaaS"],
  },
  {
    company: "GoCoffee",
    role: "Barista / Operação",
    category: "Operação / Liderança",
    icon: "gocoffee",
    summary:
      "Experiência de operação e liderança em ambiente com ritmo alto, foco no cliente e disciplina de execução.",
    highlights: [
      "Liderança de equipe e treinamento de baristas em rotina de operação.",
      "Controle de estoque, organização e resposta rápida em momentos de pressão.",
      "Atendimento ao cliente com cuidado de experiência e consistência no serviço.",
    ],
    whyItMatters:
      "Fortalece repertório de liderança, comunicação, disciplina operacional e percepção de experiência do usuário fora da bolha técnica.",
    tags: ["Liderança", "Operação", "Atendimento", "Organização"],
  },
  {
    company: "Marcondes Comunicação",
    role: "Traffic Manager",
    category: "Métricas / Conversão",
    icon: "marcondes",
    summary:
      "Atuação em tráfego, analytics e conversão, aproximando tecnologia de funil, comportamento e resultado.",
    highlights: [
      "Trabalhou com Google Ads, Meta Ads e Google Analytics.",
      "Aplicou testes A/B e leitura de ROI para decisões com foco em performance.",
      "Participou de raciocínio sobre landing pages, funil e comportamento do usuário.",
    ],
    whyItMatters:
      "Ajuda a construir interfaces e produtos com mais consciência de conversão, clareza de mensagem e leitura de métricas.",
    tags: ["ROI", "Conversão", "Analytics", "A/B", "Landing pages"],
  },
  {
    company: "DevPR / DevParaná",
    role: "Comunidade e organização de meetups",
    category: "Comunidade / Networking",
    icon: "devpr",
    summary:
      "Envolvimento com encontros técnicos, conexão entre pessoas e fortalecimento de comunidade local.",
    highlights: [
      "Organização de meetups técnicos e apoio na divulgação da comunidade.",
      "Fomento de networking e troca de repertório entre profissionais da área.",
    ],
    whyItMatters:
      "Reforça colaboração, comunicação e presença em comunidade, algo importante para crescer com outras pessoas e não só sozinho.",
    tags: ["Comunidade", "Eventos", "Networking"],
  },
  {
    company: "Grupo Escoteiro Aldeia Verde",
    role: "Escotismo e mentoria",
    category: "Disciplina / Valores",
    icon: "escotismo",
    summary:
      "Vivência contínua desde 2016, com formação em liderança, mentoria, trabalho em equipe e responsabilidade.",
    highlights: [
      "Escotismo desde 2016 com destaque para o título de Escoteiro da Pátria.",
      "Vivência em mentoria, organização, tomada de decisão e colaboração em grupo.",
    ],
    whyItMatters:
      "Sustenta uma camada humana importante: constância, responsabilidade, autonomia e capacidade de conduzir gente e contexto.",
    tags: ["Disciplina", "Mentoria", "Trabalho em equipe", "Responsabilidade"],
  },
];
