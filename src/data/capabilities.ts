export type Capability = {
  title: string;
  description: string;
  items: string[];
  icon: "mobile" | "frontend" | "architecture" | "product";
};

export const capabilities: Capability[] = [
  {
    title: "Mobile Engineering",
    description:
      "Construção de apps com experiência de uso coerente, integração real e visão de ciclo completo até publicação.",
    icon: "mobile",
    items: ["Flutter", "Dart", "React Native", "Firebase", "FCM", "Android/iOS"],
  },
  {
    title: "Front-end & SaaS",
    description:
      "Interfaces para produto, onboarding, navegação, temas dinâmicos e white label com base escalável.",
    icon: "frontend",
    items: ["Angular", "TypeScript", "React", "Next.js", "Tailwind", "shadcn/ui"],
  },
  {
    title: "Arquitetura & Qualidade",
    description:
      "Organização para manter clareza de código, previsibilidade de evolução e menos atrito na manutenção.",
    icon: "architecture",
    items: ["Clean Architecture", "MVVM", "Modular", "BLoC", "QA", "CI/CD"],
  },
  {
    title: "Produto & Negócio",
    description:
      "Leitura de problema, contexto e conversão para construir soluções melhores antes, durante e depois da entrega.",
    icon: "product",
    items: ["UX", "Métricas", "Conversão", "White label", "Multi-tenant", "Landing pages"],
  },
];
