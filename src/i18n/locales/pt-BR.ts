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
      productStrengthLabel: "Como isso fortalece produto",
    },
    items: {
      atlas: {
        company: "Atlas",
        role: "Software Engineer Mobile Flutter",
        category: "Mobile / Produção",
        summary:
          "Atuação em produto mobile publicado, conectando arquitetura, integrações, release e evolução contínua em aplicações reais.",
        highlights: [
          "Conduziu a entrega e publicação de 4 apps, do desenvolvimento à aprovação em Play Store e App Store.",
          "Estruturou white label e multi-tenant para 3 clientes, acomodando variações de marca, tema e contexto de uso.",
          "Organizou CI/CD com CodeMagic e GitHub Actions e uma base modular pensada para manutenção e evolução contínua.",
          "Integrou APIs REST, OAuth/OIDC, JWT, Firebase, FCM, permissões e WebView em fluxos que precisavam funcionar em produção.",
        ],
        whyItMatters:
          "Fortalece a capacidade de construir produto com responsabilidade de entrega, arquitetura sustentável e atenção ao que acontece depois do release.",
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
          "Implementou white label dinâmico com adaptação de cores, logos e temas sem perder coerência de experiência.",
          "Estruturou design tokens com CSS variables e mat-sys para dar escala e previsibilidade à interface.",
          "Refinou componentes e corrigiu problemas de UI/UX, estado, DOM e i18n para sustentar manutenção contínua.",
        ],
        whyItMatters:
          "Reforça visão de produto escalável, com atenção a fluxos essenciais, consistência visual e manutenção saudável ao longo do tempo.",
        tags: ["Angular", "TypeScript", "White label", "Design tokens", "i18n", "SaaS"],
      },
      gocoffee: {
        company: "GoCoffee",
        role: "Barista / Operação",
        category: "Operação / Liderança",
        summary:
          "Vivência de operação e liderança em ambiente de ritmo intenso, com foco em atendimento, treinamento e execução sob pressão.",
        highlights: [
          "Liderou equipe e treinou baristas na rotina operacional e no padrão de atendimento.",
          "Cuidou de estoque, organização e resposta rápida em momentos de maior pressão.",
          "Sustentou a experiência de serviço com comunicação clara, responsabilidade e consistência no dia a dia.",
        ],
        whyItMatters:
          "Aproxima a construção de produto da operação real e fortalece leitura de processo, serviço e expectativa do usuário final.",
        tags: ["Liderança", "Operação", "Atendimento", "Organização"],
      },
      marcondes: {
        company: "Marcondes Comunicação",
        role: "Traffic Manager",
        category: "Métricas / Conversão",
        summary:
          "Atuação em tráfego pago, métricas e conversão, com leitura de funil, landing pages e comportamento do usuário.",
        highlights: [
          "Trabalhou com Google Ads, Meta Ads e Google Analytics para acompanhar aquisição e performance.",
          "Aplicou testes A/B e leitura de ROI como base para decisões orientadas por resultado.",
          "Participou da análise de landing pages, etapas de funil e comportamento do usuário ao longo da jornada.",
        ],
        whyItMatters:
          "Fortalece decisões de produto mais conectadas a conversão, clareza de mensagem e leitura de comportamento baseada em dados.",
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
        name: "PO Agent / OpenClaw",
        description:
          "Agente de produto integrado a Discord e Linear para acompanhar contexto, ler sinais de progresso e apoiar decisões em um fluxo real de trabalho.",
        preview: "Contexto de produto, progresso e decisão no mesmo fluxo.",
        caseStudy: {
          problem:
            "Projetos com conversas no Discord e tarefas no Linear tendem a espalhar contexto, dificultando priorização e leitura do que realmente avançou.",
          solution:
            "Modelei o agente para acompanhar canais, interpretar status e transformar sinais dispersos em um resumo acionável para decisões de produto.",
          impact:
            "O fluxo ganha mais clareza sobre progresso e próximos passos, reduzindo checagens manuais e ajudando a manter foco no que precisa ser decidido.",
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
        highlight: "Contexto de produto em fluxo real",
      },
      sparkSalesSystem: {
        name: "Spark / Sistema de Vendas",
        description:
          "Projeto de operação comercial multi-plataforma para vendas, catálogo, estoque e visão operacional, conectando mobile Flutter, desktop C# e API Python.",
        preview: "Operação comercial conectada entre vendas, estoque e canais.",
        caseStudy: {
          problem:
            "A operação precisava vender, consultar catálogo e acompanhar estoque com continuidade entre balcão, rotina móvel e leitura gerencial.",
          solution:
            "Desenhei uma arquitetura multi-plataforma conectando app mobile, sistema desktop e API para organizar vendas, produtos, estoque e dashboard.",
          impact:
            "A solução dá uma visão mais coesa da rotina comercial e reduz a ruptura entre canais, facilitando acompanhamento e execução no dia a dia.",
        },
        tags: ["Flutter", "Python", "API REST", "C#", "Vendas", "Estoque", "Dashboard"],
        status: "Operação comercial",
        highlight: "Vendas, estoque e visão operacional",
      },
      pdfOcrPostTranscribe: {
        name: "PDF OCR / post_transcribe",
        description:
          "Aplicação para extrair e estruturar texto de PDFs e imagens, com interface de revisão e backend preparado para automatizar um processo manual.",
        preview: "Texto extraído, estruturado e pronto para revisão.",
        caseStudy: {
          problem:
            "Conteúdos em PDFs e imagens exigiam leitura e transcrição manual antes de poderem ser revisados, reaproveitados ou organizados.",
          solution:
            "Construí um fluxo com upload, extração OCR, estruturação do texto e retorno em interface web para acelerar revisão e ajustes.",
          impact:
            "O processo fica mais rápido e menos dependente de transcrição manual, mantendo espaço para validação humana quando o conteúdo precisa ser conferido.",
        },
        tags: ["React", "FastAPI", "Python", "OCR", "PDFs", "Deploy"],
        status: "Produto pessoal",
        highlight: "Automação com revisão humana",
      },
      gocoffeeLandingPage: {
        name: "GoCoffee Landing Page",
        description:
          "Landing page orientada à conversão para a unidade GoCoffee Cascavel, conectando apelo visual, posicionamento de marca e contato pelo WhatsApp.",
        preview: "Marca local, experiência visual e contato direto.",
        caseStudy: {
          problem:
            "A unidade precisava apresentar a marca com mais força, explicar a oferta com clareza e levar o visitante ao contato sem fricção.",
          solution:
            "Organizei uma experiência visual focada em percepção de marca, hierarquia comercial e CTA para WhatsApp como caminho principal de conversão.",
          impact:
            "A página torna a decisão de contato mais simples e alinhada ao negócio, com uma presença digital mais clara e consistente.",
        },
        tags: ["Angular", "SCSS", "Landing page", "UI/UX", "Conversão"],
        status: "Landing page",
        highlight: "Marca local e conversão",
      },
      currentPortfolio: {
        name: "Portfólio orientado a produto",
        description:
          "Reposicionamento do portfólio profissional para comunicar produto, arquitetura, UX e entrega real com narrativa bilíngue, design system e acessibilidade.",
        preview: "Narrativa profissional, sistema visual e posicionamento claro.",
        caseStudy: {
          problem:
            "O portfólio precisava deixar de parecer apenas uma vitrine de projetos e comunicar com clareza como Diogo pensa produto, arquitetura e execução.",
          solution:
            "Reorganizei narrativa, hierarquia visual, i18n, componentes e padrões de acessibilidade para sustentar uma leitura consistente em desktop e mobile.",
          impact:
            "A experiência passa a transmitir mais maturidade, contexto e clareza de posicionamento sem depender de explicações longas.",
        },
        tags: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui", "Design System"],
        status: "Posicionamento profissional",
        highlight: "Narrativa, produto e maturidade",
      },
      seuClimaHoje: {
        name: "Seu Clima Hoje",
        description:
          "Aplicativo Flutter para consulta do clima atual com leitura rápida, integração com API externa e interface mobile direta.",
        preview: "Clima atual apresentado com foco em rapidez e clareza.",
        caseStudy: {
          problem:
            "A consulta de clima precisava ser simples no celular, com dados externos apresentados sem ruído visual.",
          solution:
            "Construí uma experiência Flutter enxuta, conectada a API, priorizando hierarquia de informação e resposta rápida.",
          impact:
            "O app entrega uma consulta objetiva e reforça cuidado com integração, estado da interface e leitura mobile.",
        },
        tags: ["Flutter", "API", "UX mobile", "Estudo aplicado"],
        status: "Projeto complementar",
        highlight: "Consulta mobile direta",
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
