import type { SiteContent } from "@/i18n/types";

export const ptBR = {
  capabilities: {
    items: {
      mobileEngineering: {
        title: "Mobile Engineering",
        description:
          "Apps pensados como produto em produção: uso claro, integrações confiáveis e cuidado até release e evolução.",
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
          "Interfaces para SaaS com foco em fluxo, consistência visual, adaptação de marca e base pronta para escalar.",
        items: ["Angular", "TypeScript", "React", "Next.js", "Tailwind", "shadcn/ui"],
      },
      architectureQuality: {
        title: "Arquitetura & Qualidade",
        description:
          "Estrutura para tornar evolução previsível, reduzir atrito de manutenção e proteger qualidade ao longo do tempo.",
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
          "Leitura de contexto, usuário e conversão para tomar decisões técnicas mais conectadas ao objetivo do produto.",
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
      "Construo produtos digitais com visão de produto, arquitetura e entrega em produção.",
    subtitle:
      "Atuo entre mobile, front-end, UI/UX, arquitetura e integrações para transformar contexto de negócio em produtos mais claros, consistentes e prontos para evoluir.",
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
      "Eu não gosto de construir tela por construir. Gosto de entender o que está por trás do problema, organizar as ideias e transformar isso em algo simples, funcional e bem pensado.",
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
      productStrengthLabel: "Valor na prática",
    },
    items: {
      atlas: {
        company: "Atlas",
        role: "Software Engineer Mobile Flutter",
        category: "Mobile / Produção",
        summary:
          "Atuei em +4 produtos mobile trabalhando desde sua criação até o deploy para produção, conectando arquitetura, integrações, release e evolução contínua em aplicações reais.",
        highlights: [
          "Entreguei e publiquei 4 aplicativos (do zero até aprovação na Play Store / App Store), garantindo releases estáveis em produção.",
          "Implementei fluxo white label / multi-tenant para 3 clientes, mantendo identidade visual e configurações específicas por marca com uma única base de código.",
          " Automatizei CI/CD com CodeMagic e GitHub Actions, acelerando o ciclo de build/test/distribuição (interno + lojas).",
          "Integrou APIs REST, OAuth/OIDC, JWT, Firebase, FCM, permissões e WebView em fluxos que precisam funcionar em produção.",
        ],
        whyItMatters:
          "Mostra experiência em levar produto para produção, cuidar da base técnica e manter evolução depois do release.",
        tags: ["Flutter", "Dart", "CI/CD", "OAuth", "Firebase", "Arquitetura modular"],
      },
      slingui: {
        company: "Slingui",
        role: "Desenvolvedor Web Angular",
        category: "SaaS / Front-end",
        summary:
          "Atuação em SaaS multi-tenant, evoluindo fluxos críticos de produto, white label e consistência visual em interface mantida em produção.",
        highlights: [
          "Evoluiu onboarding, autenticação e navegação em um produto SaaS com diferentes contextos de cliente.",
          "Implementei o white label dinâmico com adaptação de cores, logos e temas sem perder coerência de experiência.",
          "Estruturei design tokens com CSS variables e mat-sys para dar escala e previsibilidade à interface.",
          "Refatorei componentes e corrigiu problemas de UI/UX, estado, DOM e i18n para sustentar manutenção contínua.",
        ],
        whyItMatters:
          "Mostra cuidado com produto em escala: fluxos importantes, consistência visual e manutenção contínua.",
        tags: ["Angular", "TypeScript", "White label", "Design tokens", "i18n", "SaaS"],
      },
      gocoffee: {
        company: "GoCoffee",
        role: "Barista / Operação",
        category: "Operação / Liderança",
        summary:
          "Vivência de operação e liderança em ambiente de ritmo intenso, com foco em atendimento, treinamento e execução sob pressão.",
        highlights: [
          "Liderei as equipes e treinei baristas na rotina operacional e no padrão de atendimento.",
          "Cuidei de estoque, organização e resposta rápida em momentos de maior pressão.",
          "Sustentou a experiência de serviço com comunicação clara, responsabilidade e consistência no dia a dia.",
        ],
        whyItMatters:
          "Conecta operação, atendimento e liderança com uma leitura mais próxima do usuário real.",
        tags: ["Liderança", "Operação", "Atendimento", "Organização"],
      },
      marcondes: {
        company: "Marcondes Comunicação",
        role: "Traffic Manager",
        category: "Métricas / Conversão",
        summary:
          "Atuação em tráfego pago, métricas e conversão, com leitura de funil, landing pages e comportamento do usuário.",
        highlights: [
          "Trabalhei com Google Ads, Meta Ads e Google Analytics para acompanhar aquisição e performance.",
          "Aplicou testes A/B e leitura de ROI como base para decisões orientadas por resultado.",
          "Participou da análise e criação de landing pages, etapas de funil e comportamento do usuário ao longo da jornada.",
        ],
        whyItMatters:
          "Ajuda a ligar métricas, conversão e comportamento do usuário a decisões de negócio mais claras.",
        tags: ["ROI", "Conversão", "Analytics", "A/B", "Landing pages"],
      },
    },
  },
  projects: {
    labels: {
      github: "GitHub",
      demo: "Demo",
      case: "Projeto",
    },
    carousel: {
      roleDescription: "carousel",
    },
    items: {
      poAgentOpenclaw: {
        name: "ClawDex / PO Agent",
        description:
          "ClawDex é um Product Owner digital para acompanhar contexto, organizar backlog e apoiar decisões de produto usando Discord, Linear e OpenClaw.",
        preview: "Product Owner digital em fluxo real.",
        caseStudy: {
          problem:
            "Conversas, decisões e tarefas de projeto se espalham entre canais, backlog e histórico, dificultando priorização, clareza de status e acompanhamento real do progresso.",
          solution:
            "Modelei o ClawDex sobre OpenClaw, conectado ao Discord e ao Linear, para interpretar contexto, consultar backlog, diagnosticar issues e sugerir próximos passos com segurança.",
          impact:
            "O fluxo reduz ruído operacional, organiza sinais dispersos e apoia decisões de produto sem automatizar mudanças críticas sem preview e confirmação explícita.",
        },
        tags: ["Node.js", "OpenClaw", "Discord", "Linear", "Product Owner", "IA"],
        status: "Produto pessoal",
        highlight: "Product Owner digital em fluxo real",
      },
      sparkSalesSystem: {
        name: "Spark / CRM de Vendas",
        description:
          "CRM de vendas multi-plataforma que conecta emissão de vendas, controle comercial, análise de dados e middleware.",
        preview: "Mobile, desktop e API conectados.",
        caseStudy: {
          problem:
            "Uma operação comercial precisa conectar vendas, clientes, produtos e análise de dados sem depender de controles soltos ou processos manuais difíceis de manter.",
          solution:
            "Construí a frente mobile em Flutter para emissão de vendas e cadastro de clientes, integrada a um ecossistema com desktop em C# e middleware Python conectado ao Supabase.",
          impact:
            "O projeto mostra capacidade de conectar interface, operação e dados em uma solução mais clara para uso diário, com responsabilidades bem definidas entre mobile, desktop e backend.",
        },
        tags: ["Flutter", "Dart", "C#", "Python", "Supabase", "CRM"],
        status: "Operação comercial",
        highlight: "Mobile, desktop e API conectados",
      },
      pdfOcrPostTranscribe: {
        name: "PDF Transcribe",
        description:
          "Aplicação para transformar PDFs e imagens em conteúdo revisável, copiável e melhor estruturado.",
        preview: "PDF, OCR e revisão de conteúdo.",
        caseStudy: {
          problem:
            "Materiais em PDF e imagens podem ser difíceis de acessar, revisar ou transcrever manualmente, consumindo tempo em tarefas repetitivas e pouco produtivas.",
          solution:
            "Construí uma aplicação com upload de PDF, extração de páginas, miniaturas, revisão e transcrição, conectando front-end e backend com fluxo pensado para reduzir trabalho manual.",
          impact:
            "A solução transforma um processo pesado em uma experiência mais organizada, permitindo revisar, copiar e estruturar conteúdo com menos esforço.",
        },
        tags: ["React", "FastAPI", "Python", "OCR", "PDF", "Automação"],
        status: "Automação de processo",
        highlight: "PDF, OCR e revisão de conteúdo",
      },
      gocoffeeLandingPage: {
        name: "LP GoCoffee Cascavel",
        description:
          "Landing page para trabalhar narrativa visual, apresentação de marca e experiência focada em conversão.",
        preview: "Marca, UI/UX e conversão.",
        caseStudy: {
          problem:
            "Uma marca local precisa apresentar produtos, ambiente e proposta de valor com clareza, criando confiança e levando o visitante para uma ação simples.",
          solution:
            "Desenvolvi uma landing page em Angular com foco em UI/UX, narrativa visual, apresentação editorial dos produtos e experiência de navegação mais clara.",
          impact:
            "O projeto mostra cuidado com experiência, marca e decisão do usuário, conectando design, conteúdo e objetivo comercial em uma interface única.",
        },
        tags: ["Angular", "TypeScript", "SCSS", "UI/UX", "Landing page", "Conversão"],
        status: "Landing page",
        highlight: "Marca, UI/UX e conversão",
      },
      currentPortfolio: {
        name: "Post.IA",
        description:
          "Produto com IA para transformar briefing em posts mais claros, estratégicos e alinhados ao público certo.",
        preview: "Briefing, posicionamento e conteúdo.",
        caseStudy: {
          problem:
            "Criar conteúdo estratégico exige transformar briefing, contexto e posicionamento em mensagens claras; sem estrutura, o resultado tende a virar texto genérico.",
          solution:
            "Estruturei uma experiência para apoiar a tradução de briefing em conteúdo mais direcionado, usando IA como apoio à clareza, posicionamento e intenção da mensagem.",
          impact:
            "O projeto reforça a conexão entre produto, comunicação e IA aplicada, mostrando tecnologia como ferramenta para orientar mensagem, público e posicionamento.",
        },
        tags: ["Next.js", "TypeScript", "IA", "Produto", "Conteúdo", "Posicionamento"],
        status: "Produto com IA",
        highlight: "Briefing, posicionamento e conteúdo",
      },
      seuClimaHoje: {
        name: "Seu Clima Hoje",
        description:
          "Aplicativo Flutter para consultar clima atual de forma simples, rápida e organizada.",
        preview: "API externa e multi-plataforma.",
        caseStudy: {
          problem:
            "Consultar informações básicas de clima pode ser uma experiência confusa quando os dados não são apresentados de forma direta e objetiva.",
          solution:
            "Desenvolvi um app Flutter para exibir informações de clima com consumo de API externa, estrutura multi-plataforma e base preparada para evoluções futuras.",
          impact:
            "O projeto demonstra prática mobile com Flutter, integração com API externa e organização inicial de uma aplicação pensada para Android, iOS, Web e Desktop.",
        },
        tags: ["Flutter", "Dart", "API externa", "Mobile", "Multi-plataforma"],
        status: "App Flutter",
        highlight: "API externa e multi-plataforma",
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
          "Antes de codar, busco entender objetivo, usuário, restrições, risco e o que a empresa precisa resolver.",
        outcome: "A entrega começa com mais clareza e menos retrabalho.",
      },
      structureSolution: {
        title: "Estruturar a solução",
        kicker: "Arquitetura",
        description:
          "Organizo fluxos, responsabilidades, estados, padrões visuais e integrações para reduzir ruído na execução.",
        outcome: "O time ganha alinhamento e uma base mais fácil de evoluir.",
      },
      buildWithQuality: {
        title: "Construir com qualidade",
        kicker: "Execução",
        description:
          "Implemento com atenção a código, interface, acessibilidade, estados e manutenção sem perder ritmo de entrega.",
        outcome: "A solução chega mais consistente e preparada para uso real.",
      },
      validateTestEvolve: {
        title: "Validar, testar e evoluir",
        kicker: "Iteração",
        description:
          "Valido fluxos, ajusto comportamento e uso feedback para evoluir o produto com segurança depois da entrega.",
        outcome: "As próximas mudanças acontecem com mais propósito e menos risco.",
      },
    },
  },
  beyondCode: {
    labels: {
      humanNarrative: "Narrativa humana",
      softSkillsHighlight: "Soft skills em evidência",
      strategicDifferential: "Diferencial profissional",
    },
    items: {
      devprDevParana: {
        organization: "DevPR / DevParaná",
        role: "Comunidade, networking e organização de meetups",
        category: "Comunidade técnica",
        summary:
          "Atuação na DevPR em encontros técnicos que aproximam profissionais, criam networking e fortalecem a troca prática entre pessoas da área.",
        narrative:
          "Na comunidade, pratico comunicação, organização e leitura de contexto ao conectar pessoas, apoiar encontros e manter conversas técnicas úteis para quem está construindo carreira e produto.",
        highlights: [
          "Organização e apoio a meetups técnicos, com cuidado para aproximar pessoas e temas relevantes.",
          "Networking com profissionais de diferentes repertórios, favorecendo troca técnica e colaboração.",
          "Participação ativa em uma comunidade que exige constância, comunicação clara e responsabilidade com o coletivo.",
        ],
        strategicValue:
          "Traz para o trabalho uma postura mais aberta a contexto, colaboração e alinhamento entre pessoas, além da entrega individual.",
        softSkills: ["Comunicação", "Organização", "Networking", "Colaboração"],
        tags: ["Comunidade", "Eventos", "Networking", "Organização"],
      },
      grupoEscoteiroAldeiaVerde: {
        organization: "Grupo Escoteiro Aldeia Verde",
        role: "Escotismo, mentoria e formação humana",
        category: "Disciplina e liderança",
        summary:
          "Vivência contínua desde 2016 em ambientes que exigem responsabilidade, disciplina, comunicação e tomada de decisão em grupo.",
        narrative:
          "No escotismo, liderança acontece em situações práticas: orientar pessoas, assumir responsabilidades, decidir com calma e manter o grupo organizado mesmo quando o contexto muda.",
        highlights: [
          "Trajetória no escotismo desde 2016, incluindo o título de Escoteiro da Pátria.",
          "Experiência com mentoria, planejamento, tomada de decisão e colaboração em grupo.",
          "Formação orientada a autonomia, confiança, responsabilidade e cuidado com pessoas.",
        ],
        strategicValue:
          "Reforça uma forma de liderar com constância, comunicar com clareza e assumir responsabilidade pelo andamento do grupo e das entregas.",
        softSkills: ["Mentoria", "Disciplina", "Responsabilidade", "Tomada de decisão"],
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
      title: "Mais do que escolher tecnologia, meu trabalho é dar forma a produtos que façam sentido.",
      description:
        "Atuo conectando contexto, produto e execução para transformar problemas reais em soluções claras, úteis e prontas para evoluir.",
    },
    experience: {
      eyebrow: "Experiência profissional",
      title: "Uma trajetória construída entre produto, operação, tecnologia e entrega real.",
      description:
        "Minha experiência reúne software, operação e conversão em contextos que pedem responsabilidade, clareza de execução e leitura de negócio.",
    },
    projects: {
      eyebrow: "Projetos",
      title: "Projetos que mostram como transformo contexto em produto.",
      description:
        "Cada projeto evidencia o problema, as escolhas feitas e o impacto buscado, com foco em solução aplicável e resultado percebido.",
    },
    capabilities: {
      eyebrow: "Capacidades",
      title: "Capacidades que conectam tecnologia, produto e execução.",
      description:
        "As stacks entram como ferramentas para construir interfaces, arquitetura e decisões que sustentam produto em uso real.",
    },
    workMethod: {
      eyebrow: "Método",
      title: "Um processo simples para transformar contexto em entrega.",
      description:
        "Começo pelo contexto, organizo a solução e executo com previsibilidade para alinhar decisões, reduzir risco e facilitar manutenção.",
    },
    beyondCode: {
      eyebrow: "Além do código",
      title: "Experiências fora da entrega técnica que fortalecem liderança, comunicação e responsabilidade.",
      description:
        "Comunidade e escotismo fazem parte da minha formação profissional: ajudam a lidar com pessoas, organizar contextos, tomar decisões e sustentar compromissos com maturidade.",
    },
    finalCta: {
      eyebrow: "Contato",
      title: "Se o desafio envolve produto, operação e entrega, vale a conversa.",
      description:
        "Estou aberto a conversar com empresas, times e pessoas que precisem construir ou evoluir produtos digitais com clareza técnica, visão de negócio e cuidado com a experiência.",
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
