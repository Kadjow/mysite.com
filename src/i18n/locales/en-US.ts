import type { SiteContent } from "../types";

export const enUS = {
  capabilities: {
    items: {
      mobileEngineering: {
        title: "Mobile Engineering",
        description:
          "Mobile apps shaped as real products: clear usage, reliable integrations, and care through release and iteration.",
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
          "SaaS interfaces focused on flows, visual consistency, brand adaptation, and foundations that can scale.",
        items: ["Angular", "TypeScript", "React", "Next.js", "Tailwind", "shadcn/ui"],
      },
      architectureQuality: {
        title: "Architecture & Quality",
        description:
          "Structure that makes change more predictable, lowers maintenance friction, and protects quality over time.",
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
        title: "Product & Business",
        description:
          "Context, user, and conversion awareness that keeps technical decisions connected to the product goal.",
        items: [
          "UX",
          "Metrics",
          "Conversion",
          "White label",
          "Multi-tenant",
          "Landing pages",
        ],
      },
    },
  },
  site: {
    metadata: {
      title: "Diogo Arthur Gulhak | Product, Front-end and Mobile",
      description:
        "Professional portfolio of Diogo Arthur Gulhak, a product-oriented developer with experience in mobile, front-end, architecture, UI/UX, published apps, and SaaS.",
      keywords: [
        "Diogo Arthur Gulhak",
        "portfolio",
        "Next.js",
        "mobile",
        "front-end",
        "digital product",
        "UI UX",
        "Flutter",
        "TypeScript",
      ],
    },
    brand: {
      shortName: "Diogo Gulhak",
      fullName: "Diogo Arthur Gulhak",
      subtitle: "Product, front-end and mobile",
    },
  },
  common: {
    person: {
      location: "Brazil / Cascavel-PR",
      education: "Associate Degree in Systems Analysis and Development, 2023-2025",
    },
    actions: {
      contact: "Contact me",
      viewProjects: "View case studies",
      downloadResume: "Download resume",
    },
    accessibility: {
      toggleTheme: "Toggle theme",
      openMenu: "Open menu",
    },
  },
  hero: {
    badge: "Mobile, front-end, architecture, and product",
    title: "I build digital products with product thinking, architecture, and real-world delivery.",
    subtitle:
      "I work across mobile, front-end, UI/UX, architecture, and integrations to turn business context into products that are clearer, more consistent, and built to evolve.",
    profilePhotoAlt: "Professional photo of Diogo Arthur Gulhak",
    productDeliveryBadge: "Product + delivery",
    productionLabel: "Real production",
    publishedAppsLabel: "4 published apps",
    scaleLabel: "Scale",
    whiteLabelSaasLabel: "White label + SaaS",
    metrics: [
      {
        id: "published-apps",
        value: "4",
        label: "published apps",
        description: "From the initial structure to approval in the Play Store and App Store.",
      },
      {
        id: "white-label-clients",
        value: "3",
        label: "white-label clients",
        description: "Experience across brand, theme, and operational context variations.",
      },
      {
        id: "experience-years",
        value: "2+ years",
        label: "of experience",
        description: "Mobile, front-end, UI/UX, integrations, quality, and real delivery.",
      },
      {
        id: "product-vision",
        value: "Mobile + Web",
        label: "with product perspective",
        description: "Code, architecture, interface, and business moving together.",
      },
    ],
  },
  about: {
    quote:
      "I don't like building screens just for the sake of it. I like understanding what is behind the problem, organizing the ideas, and turning them into something simple, useful, and well thought out.",
    differentiators: [
      "Product, business, and user awareness to avoid solutions that are technically correct but not truly useful.",
      "Production experience with mobile apps, white-label systems, multi-tenant architecture, authentication, and real integrations.",
      "Care for architecture, UI/UX, visual consistency, quality, and continuous evolution.",
    ],
    baseInBrazil:
      "Based in Brazil, with experience across digital products, operations, and communication.",
    educationAligned:
      "Academic background aligned with professional practice and production delivery.",
    workGuidanceTitle: "What guides my work",
  },
  navigation: {
    items: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      stack: "Stack",
      contact: "Contact",
    },
    mobileDescription: "Main portfolio navigation.",
  },
  experience: {
    labels: {
      productStrengthLabel: "Practical value",
    },
    items: {
      atlas: {
        company: "Atlas",
        role: "Software Engineer Mobile Flutter",
        category: "Mobile / Production",
        summary:
          "Worked on published mobile products, connecting architecture, integrations, release workflows, and ongoing evolution in real-world apps.",
        highlights: [
          "Owned delivery and publishing for 4 apps, from development through Play Store and App Store approval.",
          "Built white-label and multi-tenant support for 3 clients, handling changes in brand, theme, and usage context.",
          "Automated CI/CD with CodeMagic and GitHub Actions, accelerating the build, test, and distribution cycle for internal releases and app stores.",
          "Integrated REST APIs, OAuth/OIDC, JWT, Firebase, FCM, permissions, and WebView into flows that need to work reliably in production.",
        ],
        whyItMatters:
          "Shows experience shipping real products, caring for the technical base, and keeping them evolving after release.",
        tags: ["Flutter", "Dart", "CI/CD", "OAuth", "Firebase", "Modular architecture"],
      },
      slingui: {
        company: "Slingui",
        role: "Angular Web Developer",
        category: "SaaS / Front-end",
        summary:
          "Worked on a multi-tenant SaaS product, improving critical flows, white-label support, and visual consistency in a live interface.",
        highlights: [
          "Improved onboarding, authentication, and navigation flows across a SaaS product serving different client contexts.",
          "Implemented dynamic white-label support with adaptable colors, logos, and themes without losing experience consistency.",
          "Structured design tokens with CSS variables and mat-sys to make the interface more scalable and predictable.",
          "Refactored components and fixed UI/UX, state, DOM, and i18n issues to support ongoing product maintenance.",
        ],
        whyItMatters:
          "Connects product scale with key flows, interface consistency, and ongoing maintenance.",
        tags: ["Angular", "TypeScript", "White label", "Design tokens", "i18n", "SaaS"],
      },
      gocoffee: {
        company: "GoCoffee",
        role: "Barista / Operations",
        category: "Operations / Leadership",
        summary:
          "Operational and leadership experience in a fast-paced environment, centered on service, training, and reliable execution under pressure.",
        highlights: [
          "Led teams and trained baristas on daily operations and service standards.",
          "Handled inventory, organization, and quick response during peak-pressure moments.",
          "Maintained service consistency through clear communication, ownership, and steady day-to-day execution.",
        ],
        whyItMatters:
          "Connects operations, service, and leadership with a closer read of real users.",
        tags: ["Leadership", "Operations", "Customer service", "Organization"],
      },
      marcondes: {
        company: "Marcondes Comunicação",
        role: "Traffic Manager",
        category: "Metrics / Conversion",
        summary:
          "Worked with paid traffic, metrics, and conversion, with direct exposure to funnels, landing pages, and user behavior.",
        highlights: [
          "Worked with Google Ads, Meta Ads, and Google Analytics to track acquisition and performance.",
          "Used A/B testing and ROI analysis to support decisions tied to measurable outcomes.",
          "Contributed to analyzing and creating landing pages, funnel steps, and user behavior across the journey.",
        ],
        whyItMatters:
          "Links metrics, conversion, and user behavior to clearer business decisions.",
        tags: ["ROI", "Conversion", "Analytics", "A/B", "Landing pages"],
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
        name: "ClawDex / PO Agent",
        description:
          "ClawDex is a digital Product Owner for tracking context, organizing backlog work, and supporting product decisions with Discord, Linear, and OpenClaw.",
        preview: "Digital Product Owner in a real workflow.",
        caseStudy: {
          problem:
            "Project conversations, decisions, and tasks spread across channels, backlog, and history, making prioritization, status clarity, and real progress tracking harder.",
          solution:
            "I modeled ClawDex on OpenClaw, connected it to Discord and Linear, and used it to interpret context, inspect backlog, diagnose issues, and suggest safer next steps.",
          impact:
            "The workflow reduces operational noise, organizes scattered signals, and supports product decisions without automating critical changes before preview and explicit confirmation.",
        },
        tags: ["Node.js", "OpenClaw", "Discord", "Linear", "Product Owner", "AI"],
        status: "Personal product",
        highlight: "Digital Product Owner in a real workflow",
      },
      sparkSalesSystem: {
        name: "Spark / Sales CRM",
        description:
          "A multi-platform sales CRM that connects sales entry, commercial control, data analysis, and middleware.",
        preview: "Mobile, desktop, and API connected.",
        caseStudy: {
          problem:
            "A commercial operation needs to connect sales, customers, products, and data analysis without relying on scattered controls or manual processes that are hard to maintain.",
          solution:
            "I built the Flutter mobile front for sales entry and customer registration, integrated with a C# desktop system and Python middleware connected to Supabase.",
          impact:
            "The project shows the ability to connect interface, operations, and data into a clearer daily-use solution, with defined responsibilities across mobile, desktop, and backend.",
        },
        tags: ["Flutter", "Dart", "C#", "Python", "Supabase", "CRM"],
        status: "Commercial operation",
        highlight: "Mobile, desktop, and API connected",
      },
      pdfOcrPostTranscribe: {
        name: "PDF Transcribe",
        description:
          "An application for turning PDFs and images into content that is easier to review, copy, and structure.",
        preview: "PDF, OCR, and content review.",
        caseStudy: {
          problem:
            "PDFs and images can be hard to access, review, or transcribe manually, which turns useful content into repetitive, low-value work.",
          solution:
            "I built an app with PDF upload, page extraction, thumbnails, review, and transcription, connecting front end and backend around a workflow designed to reduce manual work.",
          impact:
            "The solution turns a heavy process into a more organized experience, making it easier to review, copy, and structure content with less effort.",
        },
        tags: ["React", "FastAPI", "Python", "OCR", "PDF", "Automation"],
        status: "Process automation",
        highlight: "PDF, OCR, and content review",
      },
      gocoffeeLandingPage: {
        name: "LP GoCoffee Cascavel",
        description:
          "A landing page shaped around visual narrative, brand presentation, and a conversion-focused experience.",
        preview: "Brand, UI/UX, and conversion.",
        caseStudy: {
          problem:
            "A local brand needs to present its products, space, and value proposition clearly, building trust and guiding visitors toward a simple action.",
          solution:
            "I developed an Angular landing page focused on UI/UX, visual narrative, editorial product presentation, and clearer navigation.",
          impact:
            "The project shows care for experience, brand, and user decision-making, connecting design, content, and a commercial goal in one interface.",
        },
        tags: ["Angular", "TypeScript", "SCSS", "UI/UX", "Landing page", "Conversion"],
        status: "Landing page",
        highlight: "Brand, UI/UX, and conversion",
      },
      currentPortfolio: {
        name: "Post.IA",
        description:
          "An AI product for turning briefs into clearer, more strategic posts aligned with the right audience.",
        preview: "Briefing, positioning, and content.",
        caseStudy: {
          problem:
            "Strategic content requires turning a brief, context, and positioning into a clear message; without structure, the result tends to become generic copy.",
          solution:
            "I structured an experience that helps translate a brief into more directed content, using AI to support clarity, positioning, and message intent.",
          impact:
            "The project reinforces the connection between product, communication, and applied AI, showing technology as a tool for guiding message, audience, and positioning.",
        },
        tags: ["Next.js", "TypeScript", "AI", "Product", "Content", "Positioning"],
        status: "AI product",
        highlight: "Briefing, positioning, and content",
      },
      seuClimaHoje: {
        name: "Seu Clima Hoje",
        description:
          "A Flutter app for checking current weather in a simple, fast, and organized way.",
        preview: "External API and multi-platform base.",
        caseStudy: {
          problem:
            "Checking basic weather information can feel confusing when the data is not presented directly and objectively.",
          solution:
            "I developed a Flutter app that displays weather information through an external API, with a multi-platform structure prepared for future iterations.",
          impact:
            "The project demonstrates mobile practice with Flutter, external API integration, and the initial organization of an app designed for Android, iOS, Web, and Desktop.",
        },
        tags: ["Flutter", "Dart", "External API", "Mobile", "Multi-platform"],
        status: "Flutter app",
        highlight: "External API and multi-platform base",
      },
    },
  },
  workMethod: {
    labels: {
      step: "Step",
    },
    items: {
      understandProblem: {
        title: "Understand the problem",
        kicker: "Context",
        description:
          "Before writing code, I work to understand the goal, user, constraints, risk, and what the business needs to solve.",
        outcome: "The work starts with clearer direction and less rework.",
      },
      structureSolution: {
        title: "Structure the solution",
        kicker: "Architecture",
        description:
          "I organize flows, responsibilities, states, visual patterns, and integrations to reduce noise during execution.",
        outcome: "The team gets better alignment and a foundation that is easier to evolve.",
      },
      buildWithQuality: {
        title: "Build with quality",
        kicker: "Execution",
        description:
          "I build with care for code, interface behavior, accessibility, states, and maintenance while keeping delivery moving.",
        outcome: "The result is more consistent and ready for real use.",
      },
      validateTestEvolve: {
        title: "Validate, test, and evolve",
        kicker: "Iteration",
        description:
          "I validate flows, refine behavior, and use feedback to evolve the product safely after release.",
        outcome: "The next changes have clearer purpose and lower risk.",
      },
    },
  },
  beyondCode: {
    labels: {
      humanNarrative: "Human narrative",
      softSkillsHighlight: "Soft skills in focus",
      strategicDifferential: "Professional differentiator",
    },
    items: {
      devprDevParana: {
        organization: "DevPR / DevParaná",
        role: "Community, networking, and meetup organization",
        category: "Technical community",
        summary:
          "Work with DevPR through technical meetups that connect professionals, create networking opportunities, and support practical exchange in the local tech scene.",
        narrative:
          "In community work, I practice communication, organization, and context reading by connecting people, supporting events, and keeping technical conversations useful for people building careers and products.",
        highlights: [
          "Organizing and supporting technical meetups with care for relevant people, topics, and conversations.",
          "Networking with professionals from different backgrounds, encouraging technical exchange and collaboration.",
          "Active participation in a community that requires consistency, clear communication, and responsibility toward the group.",
        ],
        strategicValue:
          "It brings a more collaborative way of working, with attention to context, alignment, and people, beyond individual delivery.",
        softSkills: ["Communication", "Organization", "Networking", "Collaboration"],
        tags: ["Community", "Events", "Networking", "Organization"],
      },
      grupoEscoteiroAldeiaVerde: {
        organization: "Grupo Escoteiro Aldeia Verde",
        role: "Scouting, mentorship, and human development",
        category: "Discipline and leadership",
        summary:
          "Ongoing experience since 2016 in environments that call for responsibility, discipline, communication, and group decision-making.",
        narrative:
          "In scouting, leadership happens through practice: guiding people, taking responsibility, making calm decisions, and keeping the group organized when the context changes.",
        highlights: [
          "Scouting journey since 2016, including the Escoteiro da Pátria title.",
          "Experience with mentorship, planning, decision-making, and group collaboration.",
          "Development focused on autonomy, trust, responsibility, and care for people.",
        ],
        strategicValue:
          "It reinforces a steady way of leading, communicating clearly, and taking responsibility for both the group and the work in front of it.",
        softSkills: ["Mentorship", "Discipline", "Responsibility", "Decision-making"],
        tags: ["Scouting", "Mentorship", "Discipline", "Responsibility"],
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
      eyebrow: "About",
      title: "More than choosing the tech, my work is shaping products that make sense.",
      description:
        "I connect context, product thinking, and execution to turn real problems into clear, useful solutions that can keep evolving.",
    },
    experience: {
      eyebrow: "Professional experience",
      title: "A path built across product, operations, technology, and real delivery.",
      description:
        "My experience brings together software, operations, and conversion in environments that call for ownership, clear execution, and business awareness.",
    },
    projects: {
      eyebrow: "Projects",
      title: "Case studies that show how I turn context into product.",
      description:
        "Each project highlights the problem, the decisions behind the solution, and the impact it was built to create.",
    },
    capabilities: {
      eyebrow: "Capabilities",
      title: "Capabilities that connect technology, product, and execution.",
      description:
        "The stack is part of the toolkit for shaping interfaces, architecture, and decisions that support products in real use.",
    },
    workMethod: {
      eyebrow: "Method",
      title: "A simple process for turning context into delivery.",
      description:
        "I start with context, organize the solution, and execute with predictability to align decisions, reduce risk, and keep maintenance manageable.",
    },
    beyondCode: {
      eyebrow: "Beyond code",
      title: "Experiences outside technical delivery that strengthen leadership, communication, and responsibility.",
      description:
        "Community work and scouting are part of how I work professionally: they help me handle people, organize context, make decisions, and follow through with maturity.",
    },
    finalCta: {
      eyebrow: "Contact",
      title: "If the challenge involves product, operations, and delivery, it's worth a conversation.",
      description:
        "I'm open to talking with companies, teams, and people looking to build or evolve digital products with technical clarity, business awareness, and care for user experience.",
    },
  },
  projectSpotlight: {
    carouselLabel: "Project spotlight",
    carouselDescription:
      "One featured project at a time, with side previews that keep navigation quick and contextual.",
    carouselAriaLabel: "Project spotlight carousel",
    previousProjectAriaLabel: "View previous project",
    nextProjectAriaLabel: "View next project",
    currentProjectSrLabel: " Current project: {name}.",
    problemLabel: "Problem",
    solutionLabel: "Solution",
    impactLabel: "Impact",
    viewHighlightLabel: "View project",
    selectProjectAriaLabel: "Select project {name}",
  },
  footer: {
    socialLinksAriaLabel: "Social links",
  },
} satisfies SiteContent;
