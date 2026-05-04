import type { SiteContent } from "@/i18n/types";

export const ptBR = {
  site: {
    metadata: {
      title: "Diogo Arthur Gulhak | Produto, Front-end e Mobile",
      description:
        "Portfólio profissional de Diogo Arthur Gulhak, desenvolvedor orientado a produto com experiência em mobile, front-end, arquitetura, UI/UX, apps publicados e SaaS.",
      keywords: [
        "Diogo Arthur Gulhak",
        "portfolio",
        "Next.js",
        "mobile",
        "front-end",
        "produto digital",
        "UI UX",
        "Flutter",
        "TypeScript",
      ],
    },
    brand: {
      shortName: "Diogo Gulhak",
      fullName: "Diogo Arthur Gulhak",
      subtitle: "Produto, front-end e mobile",
    },
  },
  common: {
    actions: {
      contact: "Falar comigo",
      viewProjects: "Ver projetos",
      downloadResume: "Baixar currículo",
    },
    accessibility: {
      toggleTheme: "Alternar tema",
      openMenu: "Abrir menu",
    },
  },
  hero: {
    badge: "Mobile, front-end, arquitetura e produto",
    profilePhotoAlt: "Foto profissional de Diogo Arthur Gulhak",
    productDeliveryBadge: "Produto + entrega",
    productionLabel: "Produção real",
    publishedAppsLabel: "4 apps publicados",
    scaleLabel: "Escala",
    whiteLabelSaasLabel: "White label + SaaS",
  },
  about: {
    baseInBrazil:
      "Base no Brasil, com experiência em produtos digitais, operação e comunicação.",
    educationAligned:
      "Formação alinhada com prática profissional e entrega em produção.",
    workGuidanceTitle: "O que orienta meu trabalho",
  },
  navigation: {
    items: {
      home: "Início",
      about: "Sobre",
      experience: "Experiência",
      projects: "Projetos",
      stack: "Stack",
      contact: "Contato",
    },
    mobileDescription: "Navegação principal do portfólio.",
  },
  experience: {
    labels: {
      productStrengthLabel: "Como isso fortalece produto",
    },
  },
  projects: {
    labels: {
      github: "GitHub",
      demo: "Demo",
      case: "Case",
    },
    carousel: {
      roleDescription: "carousel",
    },
  },
  workMethod: {
    labels: {
      step: "Etapa",
    },
  },
  beyondCode: {
    labels: {
      humanNarrative: "Narrativa humana",
      softSkillsHighlight: "Soft skills em evidência",
      strategicDifferential: "Diferencial estratégico",
    },
  },
  sections: {
    about: {
      eyebrow: "Sobre",
      title: "Tecnologia como meio para construir produto útil, coerente e pronto para crescer.",
      description:
        "O posicionamento não gira em torno de uma stack específica. Ele parte de produto, contexto, entrega e da capacidade de transformar problema em solução utilizável.",
    },
    experience: {
      eyebrow: "Experiência profissional",
      title: "Uma trajetória orientada a produto, entrega e operação em contexto real.",
      description:
        "A experiência principal concentra a carreira formal: software, produto, operação e conversão aplicados a ambientes com responsabilidade de execução, impacto de negócio e qualidade de entrega.",
    },
    projects: {
      eyebrow: "Projetos",
      title:
        "Projetos apresentados com foco editorial, hierarquia clara e um spotlight que valoriza contexto, solução e impacto.",
      description:
        "Em vez de uma grade genérica, a seção agora destaca um projeto por vez e usa os previews laterais para sugerir continuidade sem competir pela atenção principal.",
    },
    capabilities: {
      eyebrow: "Capacidades",
      title: "A stack existe, mas o valor está em como cada área sustenta o produto.",
      description:
        "Em vez de listar tecnologias soltas, a V1 organiza competências por contexto de trabalho: engenharia mobile, front-end e SaaS, arquitetura e qualidade, além da camada de produto e negócio.",
    },
    workMethod: {
      eyebrow: "Método",
      title: "Uma forma de trabalhar que equilibra contexto, execução e evolução contínua.",
      description:
        "O processo é simples na superfície, mas disciplinado por dentro: entender bem, estruturar com critério, construir com qualidade e validar o que precisa mudar.",
    },
    beyondCode: {
      eyebrow: "Além do código",
      title: "Liderança, comunidade e formação humana como diferencial estratégico.",
      description:
        "Estas vivências não entram como extra. Elas reforçam maturidade profissional, capacidade de conduzir pessoas, presença em comunidade e disciplina de execução, ampliando o valor da atuação técnica.",
    },
    finalCta: {
      eyebrow: "Contato",
      title: "Quer construir algo bem feito?",
      description:
        "Se você procura alguém para desenvolver, evoluir ou organizar um produto digital com qualidade técnica e visão de negócio, vamos conversar.",
    },
  },
  projectSpotlight: {
    carouselLabel: "Spotlight Carousel",
    carouselDescription:
      "O projeto central recebe leitura completa; os laterais funcionam como continuidade visual e navegação contextual.",
    carouselAriaLabel: "Carrossel spotlight de projetos",
    previousProjectAriaLabel: "Ver projeto anterior",
    nextProjectAriaLabel: "Ver próximo projeto",
    currentProjectSrLabel: " Projeto atual: {name}.",
    problemLabel: "Problema",
    solutionLabel: "Solução",
    impactLabel: "Impacto",
    viewHighlightLabel: "Ver destaque",
    selectProjectAriaLabel: "Destacar projeto {name}",
  },
  footer: {
    socialLinksAriaLabel: "Links sociais",
  },
} satisfies SiteContent;
