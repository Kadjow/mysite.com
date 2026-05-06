import type { SiteContent } from "../types";

export const enUS = {
  capabilities: {
    items: {
      mobileEngineering: {
        title: "Mobile Engineering",
        description:
          "Building apps with a consistent user experience, real integrations, and full-cycle ownership through release.",
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
          "Product interfaces, onboarding, navigation, dynamic themes, and white-label systems built on a scalable foundation.",
        items: ["Angular", "TypeScript", "React", "Next.js", "Tailwind", "shadcn/ui"],
      },
      architectureQuality: {
        title: "Architecture & Quality",
        description:
          "Structure that keeps code clear, evolution predictable, and maintenance friction low over time.",
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
          "Problem framing, context reading, and conversion awareness to build stronger solutions before, during, and after delivery.",
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
      viewProjects: "View projects",
      downloadResume: "Download resume",
    },
    accessibility: {
      toggleTheme: "Toggle theme",
      openMenu: "Open menu",
    },
  },
  hero: {
    badge: "Mobile, front-end, architecture, and product",
    title: "I build digital products with code, architecture, and business awareness.",
    subtitle:
      "I am a mobile and front-end developer with experience in published apps, white-label solutions, SaaS, automations, UI/UX, and real production integrations.",
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
      "My work goes beyond choosing a technology. I like understanding the problem, structuring the solution, and turning it into a functional, scalable, and well-presented product.",
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
      productStrengthLabel: "How this strengthens the product",
    },
    items: {
      atlas: {
        company: "Atlas",
        role: "Software Engineer Mobile Flutter",
        category: "Mobile / Production",
        summary:
          "Worked on a production mobile product covering publishing, architecture, integrations, and visual consistency.",
        highlights: [
          "Delivered and published 4 apps from scratch through approval in the Play Store and App Store.",
          "Implemented white-label and multi-tenant support for 3 clients with variations in theme, brand, and operating context.",
          "Automated CI/CD with CodeMagic and GitHub Actions and structured a modular foundation for app evolution.",
          "Integrated REST APIs, OAuth/OIDC, JWT, Firebase, FCM, permissions, and WebView with focus on real user flows.",
        ],
        whyItMatters:
          "Shows the ability to take a product from idea to release, structure architecture for growth, and sustain quality under real production conditions.",
        tags: ["Flutter", "Dart", "CI/CD", "OAuth", "Firebase", "Modular architecture"],
      },
      slingui: {
        company: "Slingui",
        role: "Angular Web Developer",
        category: "SaaS / Front-end",
        summary:
          "Worked on multi-tenant SaaS with focus on onboarding, authentication, navigation, and scalable visual consistency.",
        highlights: [
          "Built onboarding, authentication, and navigation features in a multi-tenant SaaS environment.",
          "Implemented dynamic white-label support with adaptable colors, logos, and themes per client.",
          "Structured design tokens with CSS variables and mat-sys and refactored more complex components.",
          "Fixed UI/UX, state, DOM, and i18n issues to improve predictability and the product experience.",
        ],
        whyItMatters:
          "Demonstrates maturity in systems that require visual organization, client-level flexibility, and continuous maintenance without losing readability.",
        tags: ["Angular", "TypeScript", "White label", "Design tokens", "i18n", "SaaS"],
      },
      gocoffee: {
        company: "GoCoffee",
        role: "Barista / Operations",
        category: "Operations / Leadership",
        summary:
          "Operations and leadership experience in a fast-paced environment with strong focus on customers and execution discipline.",
        highlights: [
          "Led the team and trained baristas in day-to-day operations.",
          "Handled inventory control, organization, and quick response under pressure.",
          "Served customers with attention to experience and consistency in service.",
        ],
        whyItMatters:
          "Strengthens leadership, communication, operational discipline, and user-experience awareness beyond the technical bubble.",
        tags: ["Leadership", "Operations", "Customer service", "Organization"],
      },
      marcondes: {
        company: "Marcondes Comunicação",
        role: "Traffic Manager",
        category: "Metrics / Conversion",
        summary:
          "Worked with traffic, analytics, and conversion, bringing technology closer to funnels, behavior, and business outcomes.",
        highlights: [
          "Worked with Google Ads, Meta Ads, and Google Analytics.",
          "Applied A/B testing and ROI analysis to support performance-driven decisions.",
          "Contributed to thinking around landing pages, funnels, and user behavior.",
        ],
        whyItMatters:
          "Helps build interfaces and products with stronger conversion awareness, message clarity, and metric literacy.",
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
        name: "PO Agent / OpenClaw",
        description:
          "A Product Owner agent integrated with Discord and Linear to track projects, interpret status, organize progress, and support decisions with AI.",
        preview: "Coordinates context, progress, and prioritization in a single flow.",
        caseStudy: {
          problem:
            "Teams with updates scattered across Discord and Linear lose context, prioritization, and operational clarity throughout the project.",
          solution:
            "I centralized status reading, progress organization, and decision support in an agent that turns loose signals into actionable context.",
          impact:
            "Project follow-up becomes clearer, more consistent, and more useful for product decisions without relying on constant manual checks.",
        },
        tags: [
          "Node.js",
          "AI",
          "Discord",
          "Linear",
          "Product Owner",
          "Automation",
          "Modular architecture",
        ],
        status: "Personal product",
        highlight: "Coordination, context, and decision-making",
      },
      sparkSalesSystem: {
        name: "Spark / Sales System",
        description:
          "A system with Flutter mobile, C# desktop, and Python middleware/API for sales issuance, catalog management, inventory, and dashboards.",
        preview: "Connected commercial operations across mobile, desktop, and API.",
        caseStudy: {
          problem:
            "The sales operation needed to browse products, track inventory, and issue sales without friction across different parts of the system.",
          solution:
            "I structured a multi-platform solution with Flutter, C# desktop, and Python middleware to connect catalog, sales, and metrics.",
          impact:
            "Daily operations become smoother, with less friction between channels and a clearer view of what is happening across the business.",
        },
        tags: ["Flutter", "Python", "API REST", "C#", "Sales", "Inventory", "Dashboard"],
        status: "Production",
        highlight: "Operations and multi-platform delivery",
      },
      pdfOcrPostTranscribe: {
        name: "PDF OCR / post_transcribe",
        description:
          "An application for extracting and structuring text from PDFs and images, with a React/Vite front end and FastAPI backend.",
        preview: "OCR applied to a real problem, with public deployment.",
        caseStudy: {
          problem:
            "Manual transcription and organization of content from PDFs and images make reuse slower and harder than it should be.",
          solution:
            "I combined a React/Vite interface with a FastAPI backend to extract, structure, and return usable text from hard-to-consume files.",
          impact:
            "Content becomes faster to reuse, reduces manual steps, and is much more accessible in practice.",
        },
        tags: ["React", "FastAPI", "Python", "OCR", "PDFs", "Deploy"],
        status: "Personal product",
        highlight: "Real problem with public deployment",
      },
      gocoffeeLandingPage: {
        name: "GoCoffee Landing Page",
        description:
          "A premium, conversion-oriented landing page for the GoCoffee Cascavel unit, focused on brand positioning and WhatsApp as the main channel.",
        preview: "Brand and conversion organized into a single visual narrative.",
        caseStudy: {
          problem:
            "The digital presence needed to communicate the brand, commercial offer, and contact path with more clarity and a stronger premium feel.",
          solution:
            "I designed a landing page with editorial focus, strong hierarchy, and a direct CTA to WhatsApp as the main conversion channel.",
          impact:
            "The offer becomes clearer, the path to contact gets shorter, and the experience reinforces the brand position more effectively.",
        },
        tags: ["Angular", "SCSS", "Landing page", "UI/UX", "Conversion"],
        status: "Landing page",
        highlight: "Visual narrative and conversion",
      },
      currentPortfolio: {
        name: "Current portfolio / new portfolio",
        description:
          "An evolution of the professional portfolio focused on narrative, design system, strategic positioning, and front-end architecture.",
        preview: "Visual repositioning with narrative, system, and clarity.",
        caseStudy: {
          problem:
            "The professional presentation needed to emphasize context, product, and real delivery instead of just listing stack and tools.",
          solution:
            "I restructured the narrative, visual hierarchy, and components to connect positioning, UX, and front-end architecture in a cohesive experience.",
          impact:
            "Seniority is communicated more clearly, and the portfolio better connects strategy with execution.",
        },
        tags: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui", "Design System"],
        status: "Positioning",
        highlight: "Narrative and identity",
      },
      seuClimaHoje: {
        name: "Seu Clima Hoje",
        description:
          "A Flutter app for viewing the current weather quickly and clearly, reinforcing API integration and interface clarity.",
        preview: "Mobile weather lookup focused on quick reading.",
        caseStudy: {
          problem:
            "It was necessary to consume external weather data in a direct mobile interface, without clutter and with immediate readability.",
          solution:
            "I built a lean Flutter experience to present current weather in a simple, clear way integrated with an external API.",
          impact:
            "The app delivers fast, readable lookup while reinforcing API integration and well-structured mobile experience design.",
        },
        tags: ["Flutter", "API", "Mobile UX", "Applied study"],
        status: "Complementary project",
        highlight: "Public GitHub repository",
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
          "Before jumping into implementation, I look for clarity around the objective, user, constraints, risk, and business impact.",
        outcome: "The result is less rework and stronger direction.",
      },
      structureSolution: {
        title: "Structure the solution",
        kicker: "Architecture",
        description:
          "I define flows, responsibilities, states, visual patterns, and integration points so the solution starts organized.",
        outcome: "That helps the product grow without turning into improvisation.",
      },
      buildWithQuality: {
        title: "Build with quality",
        kicker: "Execution",
        description:
          "I implement with care for code, visual consistency, componentization, accessibility, and technical predictability.",
        outcome: "Delivery feels more mature from the first version.",
      },
      validateTestEvolve: {
        title: "Validate, test, and evolve",
        kicker: "Iteration",
        description:
          "I adjust behavior, test flows, follow feedback, and use real signals to improve what matters most.",
        outcome: "A good product does not stop at deployment.",
      },
    },
  },
  beyondCode: {
    labels: {
      humanNarrative: "Human narrative",
      softSkillsHighlight: "Soft skills in focus",
      strategicDifferential: "Strategic differentiator",
    },
    items: {
      devprDevParana: {
        organization: "DevPR / DevParaná",
        role: "Community, networking, and meetup organization",
        category: "Community leadership",
        summary:
          "Participation in technical meetups that connect professionals, expand perspectives, and strengthen the local tech scene.",
        narrative:
          "This experience reflects community presence, people connection, and the ability to turn networking into a useful and consistent exchange environment.",
        highlights: [
          "Organized technical meetups and actively supported community outreach.",
          "Connected professionals with different backgrounds, encouraging meaningful networking.",
          "Helped strengthen a space for exchange that increases visibility, collaboration, and professional maturity.",
        ],
        strategicValue:
          "Shows that Diogo contributes beyond individual delivery. He also adds value to the ecosystem, relationships, and circulation of knowledge.",
        softSkills: ["Communication", "Articulation", "Community presence", "Networking"],
        tags: ["Community", "Events", "Networking", "Organization"],
      },
      grupoEscoteiroAldeiaVerde: {
        organization: "Grupo Escoteiro Aldeia Verde",
        role: "Scouting, mentorship, and human development",
        category: "Discipline and leadership",
        summary:
          "Ongoing experience since 2016 with practical development in responsibility, discipline, mentorship, and guiding people.",
        narrative:
          "Scouting adds a rare layer to the portfolio: relational maturity, consistency, and leadership built in real contexts, not just in discourse.",
        highlights: [
          "Scouting journey since 2016, including the Escoteiro da Pátria title.",
          "Experience in mentorship, organization, decision-making, and collaboration in groups.",
          "Human development grounded in responsibility, autonomy, and trust-building.",
        ],
        strategicValue:
          "Reinforces the ability to lead responsibly, sustain discipline over the long term, and guide people with balance and a sense of duty.",
        softSkills: ["Mentorship", "Discipline", "Responsibility", "Teamwork"],
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
      title: "Technology as a means to build useful, coherent products ready to grow.",
      description:
        "The positioning is not centered on a specific stack. It starts from product, context, delivery, and the ability to turn problems into usable solutions.",
    },
    experience: {
      eyebrow: "Professional experience",
      title: "A path shaped by product thinking, delivery, and operations in real contexts.",
      description:
        "The core experience brings together formal career work across software, product, operations, and conversion in environments that demand execution ownership, business impact, and delivery quality.",
    },
    projects: {
      eyebrow: "Projects",
      title:
        "Projects presented with editorial focus, clear hierarchy, and a spotlight that highlights context, solution, and impact.",
      description:
        "Instead of a generic grid, the section now highlights one project at a time and uses side previews to suggest continuity without competing for primary attention.",
    },
    capabilities: {
      eyebrow: "Capabilities",
      title: "The stack matters, but the value is in how each area supports the product.",
      description:
        "Instead of listing disconnected technologies, the V1 organizes capabilities by work context: mobile engineering, front-end and SaaS, architecture and quality, plus the product and business layer.",
    },
    workMethod: {
      eyebrow: "Method",
      title: "A way of working that balances context, execution, and continuous evolution.",
      description:
        "The process is simple on the surface but disciplined underneath: understand well, structure carefully, build with quality, and validate what needs to change.",
    },
    beyondCode: {
      eyebrow: "Beyond code",
      title: "Leadership, community, and human development as a strategic differentiator.",
      description:
        "These experiences are not extras. They reinforce professional maturity, the ability to guide people, community presence, and execution discipline, expanding the value of technical work.",
    },
    finalCta: {
      eyebrow: "Contact",
      title: "Want to build something well crafted?",
      description:
        "If you are looking for someone to build, evolve, or organize a digital product with technical quality and business awareness, let's talk.",
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
