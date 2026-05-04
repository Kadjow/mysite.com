export type BeyondCodeExperience = {
  organization: string;
  role: string;
  category: string;
  icon: "community" | "scouting";
  summary: string;
  narrative: string;
  highlights: string[];
  strategicValue: string;
  softSkills: string[];
  tags: string[];
};

export const beyondCodeExperiences: BeyondCodeExperience[] = [
  {
    organization: "DevPR / DevParaná",
    role: "Comunidade, networking e organização de meetups",
    category: "Liderança comunitária",
    icon: "community",
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
  {
    organization: "Grupo Escoteiro Aldeia Verde",
    role: "Escotismo, mentoria e formação humana",
    category: "Disciplina e liderança",
    icon: "scouting",
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
];
