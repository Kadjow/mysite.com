export type SiteContent = {
  capabilities: {
    items: {
      mobileEngineering: {
        title: string;
        description: string;
        items: string[];
      };
      frontEndSaas: {
        title: string;
        description: string;
        items: string[];
      };
      architectureQuality: {
        title: string;
        description: string;
        items: string[];
      };
      productBusiness: {
        title: string;
        description: string;
        items: string[];
      };
    };
  };
  site: {
    metadata: {
      title: string;
      description: string;
      keywords: string[];
    };
    brand: {
      shortName: string;
      fullName: string;
      subtitle: string;
    };
  };
  common: {
    person: {
      location: string;
      education: string;
    };
    actions: {
      contact: string;
      viewProjects: string;
      downloadResume: string;
    };
    accessibility: {
      toggleTheme: string;
      openMenu: string;
    };
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    profilePhotoAlt: string;
    productDeliveryBadge: string;
    productionLabel: string;
    publishedAppsLabel: string;
    scaleLabel: string;
    whiteLabelSaasLabel: string;
    metrics: Array<{
      id: string;
      value: string;
      label: string;
      description: string;
    }>;
  };
  about: {
    quote: string;
    differentiators: string[];
    baseInBrazil: string;
    educationAligned: string;
    workGuidanceTitle: string;
  };
  navigation: {
    items: {
      home: string;
      about: string;
      experience: string;
      projects: string;
      stack: string;
      contact: string;
    };
    mobileDescription: string;
  };
  experience: {
    labels: {
      productStrengthLabel: string;
    };
    items: {
      atlas: {
        company: string;
        role: string;
        category: string;
        summary: string;
        highlights: string[];
        whyItMatters: string;
        tags: string[];
      };
      slingui: {
        company: string;
        role: string;
        category: string;
        summary: string;
        highlights: string[];
        whyItMatters: string;
        tags: string[];
      };
      gocoffee: {
        company: string;
        role: string;
        category: string;
        summary: string;
        highlights: string[];
        whyItMatters: string;
        tags: string[];
      };
      marcondes: {
        company: string;
        role: string;
        category: string;
        summary: string;
        highlights: string[];
        whyItMatters: string;
        tags: string[];
      };
    };
  };
  projects: {
    labels: {
      github: string;
      demo: string;
      case: string;
    };
    carousel: {
      roleDescription: string;
    };
    items: {
      poAgentOpenclaw: {
        name: string;
        description: string;
        preview: string;
        caseStudy: {
          problem: string;
          solution: string;
          impact: string;
        };
        tags: string[];
        status: string;
        highlight?: string;
      };
      sparkSalesSystem: {
        name: string;
        description: string;
        preview: string;
        caseStudy: {
          problem: string;
          solution: string;
          impact: string;
        };
        tags: string[];
        status: string;
        highlight?: string;
      };
      pdfOcrPostTranscribe: {
        name: string;
        description: string;
        preview: string;
        caseStudy: {
          problem: string;
          solution: string;
          impact: string;
        };
        tags: string[];
        status: string;
        highlight?: string;
      };
      gocoffeeLandingPage: {
        name: string;
        description: string;
        preview: string;
        caseStudy: {
          problem: string;
          solution: string;
          impact: string;
        };
        tags: string[];
        status: string;
        highlight?: string;
      };
      currentPortfolio: {
        name: string;
        description: string;
        preview: string;
        caseStudy: {
          problem: string;
          solution: string;
          impact: string;
        };
        tags: string[];
        status: string;
        highlight?: string;
      };
      seuClimaHoje: {
        name: string;
        description: string;
        preview: string;
        caseStudy: {
          problem: string;
          solution: string;
          impact: string;
        };
        tags: string[];
        status: string;
        highlight?: string;
      };
    };
  };
  workMethod: {
    labels: {
      step: string;
    };
    items: {
      understandProblem: {
        title: string;
        kicker: string;
        description: string;
        outcome: string;
      };
      structureSolution: {
        title: string;
        kicker: string;
        description: string;
        outcome: string;
      };
      buildWithQuality: {
        title: string;
        kicker: string;
        description: string;
        outcome: string;
      };
      validateTestEvolve: {
        title: string;
        kicker: string;
        description: string;
        outcome: string;
      };
    };
  };
  beyondCode: {
    labels: {
      humanNarrative: string;
      softSkillsHighlight: string;
      strategicDifferential: string;
    };
    items: {
      devprDevParana: {
        organization: string;
        role: string;
        category: string;
        summary: string;
        narrative: string;
        highlights: string[];
        strategicValue: string;
        softSkills: string[];
        tags: string[];
      };
      grupoEscoteiroAldeiaVerde: {
        organization: string;
        role: string;
        category: string;
        summary: string;
        narrative: string;
        highlights: string[];
        strategicValue: string;
        softSkills: string[];
        tags: string[];
      };
    };
  };
  socialLinks: {
    labels: {
      linkedin: string;
      github: string;
      email: string;
      whatsapp: string;
    };
  };
  sections: {
    about: {
      eyebrow: string;
      title: string;
      description: string;
    };
    experience: {
      eyebrow: string;
      title: string;
      description: string;
    };
    projects: {
      eyebrow: string;
      title: string;
      description: string;
    };
    capabilities: {
      eyebrow: string;
      title: string;
      description: string;
    };
    workMethod: {
      eyebrow: string;
      title: string;
      description: string;
    };
    beyondCode: {
      eyebrow: string;
      title: string;
      description: string;
    };
    finalCta: {
      eyebrow: string;
      title: string;
      description: string;
    };
  };
  projectSpotlight: {
    carouselLabel: string;
    carouselDescription: string;
    carouselAriaLabel: string;
    previousProjectAriaLabel: string;
    nextProjectAriaLabel: string;
    currentProjectSrLabel: string;
    problemLabel: string;
    solutionLabel: string;
    impactLabel: string;
    viewHighlightLabel: string;
    selectProjectAriaLabel: string;
  };
  footer: {
    socialLinksAriaLabel: string;
  };
};
