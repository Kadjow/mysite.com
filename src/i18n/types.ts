export type SiteContent = {
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
    actions: {
      contact: string;
    };
    accessibility: {
      toggleTheme: string;
      openMenu: string;
    };
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
