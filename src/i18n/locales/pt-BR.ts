import type { SiteContent } from "@/i18n/types";

export const ptBR = {
  capabilities: {
    items: {
      mobileEngineering: {
        title: "Mobile Engineering",
        description:
          "Construção de apps com experiência de uso coerente, integração real e visão de ciclo completo até publicação.",
        items: [
          "Flutter",
          "Dart",
          "React Native",
          "Firebase",
          "FCM",
          "Android/iOS",
        ],
      },
      frontEndSaas: {
        title: "Front-end & SaaS",
        description:
          "Interfaces para produto, onboarding, navegação, temas dinâmicos e white label com base escalável.",
        items: ["Angular", "TypeScript", "React", "Next.js", "Tailwind", "shadcn/ui"],
      },
      architectureQuality: {
        title: "Arquitetura & Qualidade",
        description:
          "Organização para manter clareza de código, previsibilidade de evolução e menos atrito na manutenção.",
        items: [
          "Clean Architecture",
          "MVVM",
          "Modular",
          "BLoC",
          "QA",
          "CI/CD",
        ],
      },
      productBusiness: {
        title: "Produto & Negócio",
        description:
          "Leitura de problema, contexto e conversão para construir soluções melhores antes, durante e depois da entrega.",
        items: [
          "UX",
          "Métricas",
          "Conversão",
          "White label",
          "Multi-tenant",
          "Landing pages",
        ],
      },
    },
  },
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
    person: {
      location: "Brasil / Cascavel-PR",
      education: "Tecnólogo em Análise e Desenvolvimento de Sistemas, 2023–2025",
    },
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
    title:
      "Construo produtos digitais com código, arquitetura e visão de negócio.",
    subtitle:
      "Sou desenvolvedor mobile e front-end, com experiência em apps publicados, soluções white label, SaaS, automações, UI/UX e integrações reais em produção.",
    profilePhotoAlt: "Foto profissional de Diogo Arthur Gulhak",
    productDeliveryBadge: "Produto + entrega",
    productionLabel: "Produção real",
    publishedAppsLabel: "4 apps publicados",
    scaleLabel: "Escala",
    whiteLabelSaasLabel: "White label + SaaS",
    metrics: [
      {
        id: "published-apps",
        value: "4",
        label: "apps publicados",
        description: "Da estrutura inicial até aprovação em Play Store e App Store.",
      },
      {
        id: "white-label-clients",
        value: "3",
        label: "clientes white label",
        description: "Experiência com variações de marca, tema e contexto operacional.",
      },
      {
        id: "experience-years",
        value: "2+ anos",
        label: "de experiência",
        description: "Mobile, front-end, UI/UX, integrações, qualidade e entrega real.",
      },
      {
        id: "product-vision",
        value: "Mobile + Web",
        label: "com visão de produto",
        description: "Código, arquitetura, interface e negócio andando juntos.",
      },
    ],
  },
  about: {
    quote:
      "Minha atuação vai além de escolher uma tecnologia. Eu gosto de entender o problema, organizar a solução e transformar isso em produto funcional, escalável e bem apresentado.",
    differentiators: [
      "Leitura de produto, negócio e usuário para evitar soluções tecnicamente corretas, mas pouco úteis.",
      "Experiência em produção com apps mobile, white label, multi-tenant, autenticação e integrações reais.",
      "Cuidado com arquitetura, UI/UX, consistência visual, qualidade e evolução contínua.",
    ],
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
    items: {
      atlas: {
        company: "Atlas",
        role: "Software Engineer Mobile Flutter",
        category: "Mobile / Produção",
        summary:
          "Atuação com produto mobile em produção, cobrindo publicação, arquitetura, integrações e consistência visual.",
        highlights: [
          "Entregou e publicou 4 apps do zero até aprovação em Play Store e App Store.",
          "Implementou white label e multi-tenant para 3 clientes com variação de tema, marca e contexto.",
          "Automatizou CI/CD com CodeMagic e GitHub Actions e estruturou uma base modular para evolução do app.",
          "Integrou APIs REST, OAuth/OIDC, JWT, Firebase, FCM, permissões e WebView com foco em fluxo real de uso.",
        ],
        whyItMatters:
          "Reforça capacidade de tirar produto do papel, organizar arquitetura para crescer e sustentar qualidade sob condições reais de produção.",
        tags: ["Flutter", "Dart", "CI/CD", "OAuth", "Firebase", "Arquitetura modular"],
      },
      slingui: {
        company: "Slingui",
        role: "Desenvolvedor Web Angular",
        category: "SaaS / Front-end",
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
      gocoffee: {
        company: "GoCoffee",
        role: "Barista / Operação",
        category: "Operação / Liderança",
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
      marcondes: {
        company: "Marcondes Comunicação",
        role: "Traffic Manager",
        category: "Métricas / Conversão",
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
    items: {
      poAgentOpenclaw: {
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
        highlight: "Coordenação, contexto e decisão",
      },
      sparkSalesSystem: {
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
        highlight: "Operação e multi-plataforma",
      },
      pdfOcrPostTranscribe: {
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
        highlight: "Problema real com deploy público",
      },
      gocoffeeLandingPage: {
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
        highlight: "Narrativa visual e conversão",
      },
      currentPortfolio: {
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
        highlight: "Narrativa e identidade",
      },
      seuClimaHoje: {
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
        highlight: "Repositório público do GitHub",
      },
    },
  },
  workMethod: {
    labels: {
      step: "Etapa",
    },
    items: {
      understandProblem: {
        title: "Entender o problema",
        kicker: "Contexto",
        description:
          "Antes de sair implementando, busco clareza sobre objetivo, usuário, restrições, risco e impacto no negócio.",
        outcome: "O resultado é menos retrabalho e mais direção.",
      },
      structureSolution: {
        title: "Estruturar a solução",
        kicker: "Arquitetura",
        description:
          "Defino fluxo, responsabilidades, estados, padrões visuais e pontos de integração para a solução nascer organizada.",
        outcome: "Isso ajuda o produto a crescer sem virar improviso.",
      },
      buildWithQuality: {
        title: "Construir com qualidade",
        kicker: "Execução",
        description:
          "Implemento com cuidado em código, consistência visual, componentização, acessibilidade e previsibilidade técnica.",
        outcome: "A entrega fica mais madura desde a primeira versão.",
      },
      validateTestEvolve: {
        title: "Validar, testar e evoluir",
        kicker: "Iteração",
        description:
          "Ajusto comportamento, testo fluxos, acompanho feedback e uso sinais reais para melhorar o que mais importa.",
        outcome: "Produto bom não para no deploy.",
      },
    },
  },
  beyondCode: {
    labels: {
      humanNarrative: "Narrativa humana",
      softSkillsHighlight: "Soft skills em evidência",
      strategicDifferential: "Diferencial estratégico",
    },
    items: {
      devprDevParana: {
        organization: "DevPR / DevParaná",
        role: "Comunidade, networking e organização de meetups",
        category: "Liderança comunitária",
        summary:
          "Atuação em encontros técnicos que aproximam profissionais, ampliam repertório e fortalecem a cena local de tecnologia.",
        narrative:
          "Essa vivência evidencia presença de comunidade, articulação entre pessoas e capacidade de transformar networking em ambiente de troca útil e consistente.",
        highlights: [
          "Organização de meetups técnicos e apoio ativo na divulgação da comunidade.",
          "Conexão entre profissionais com diferentes repertórios, promovendo networking qualificado.",
          "Fortalecimento de um espaço de troca que amplia visibilidade, colaboração e maturidade profissional.",
        ],
        strategicValue:
          "Mostra que Diogo não atua só na entrega individual. Ele também contribui para ecossistema, relacionamento e circulação de conhecimento.",
        softSkills: ["Comunicação", "Articulação", "Presença em comunidade", "Networking"],
        tags: ["Comunidade", "Eventos", "Networking", "Organização"],
      },
      grupoEscoteiroAldeiaVerde: {
        organization: "Grupo Escoteiro Aldeia Verde",
        role: "Escotismo, mentoria e formação humana",
        category: "Disciplina e liderança",
        summary:
          "Vivência contínua desde 2016 com formação prática em responsabilidade, disciplina, mentoria e condução de pessoas.",
        narrative:
          "O escotismo adiciona uma camada rara ao portfólio: maturidade relacional, constância e liderança construída em contexto real, não apenas em discurso.",
        highlights: [
          "Trajetória no escotismo desde 2016, com destaque para o título de Escoteiro da Pátria.",
          "Vivência em mentoria, organização, tomada de decisão e colaboração em grupo.",
          "Formação humana orientada a responsabilidade, autonomia e construção de confiança.",
        ],
        strategicValue:
          "Reforça capacidade de liderar com responsabilidade, sustentar disciplina no longo prazo e conduzir pessoas com equilíbrio e senso de dever.",
        softSkills: ["Mentoria", "Disciplina", "Responsabilidade", "Trabalho em equipe"],
        tags: ["Escotismo", "Mentoria", "Disciplina", "Responsabilidade"],
      },
    },
  },
  socialLinks: {
    labels: {
      linkedin: "LinkedIn",
      github: "GitHub",
      email: "Email",
      whatsapp: "WhatsApp",
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
    carouselLabel: "Projeto em destaque",
    carouselDescription:
      "Um projeto por vez em leitura completa, com previews laterais para navegação contextual.",
    carouselAriaLabel: "Carrossel spotlight de projetos",
    previousProjectAriaLabel: "Ver projeto anterior",
    nextProjectAriaLabel: "Ver próximo projeto",
    currentProjectSrLabel: " Projeto atual: {name}.",
    problemLabel: "Problema",
    solutionLabel: "Solução",
    impactLabel: "Impacto",
    viewHighlightLabel: "Ver projeto",
    selectProjectAriaLabel: "Selecionar projeto {name}",
  },
  footer: {
    socialLinksAriaLabel: "Links sociais",
  },
} satisfies SiteContent;
