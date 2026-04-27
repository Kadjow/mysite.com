export type WorkMethodItem = {
  step: string;
  title: string;
  kicker: string;
  description: string;
  outcome: string;
};

export const workMethod: WorkMethodItem[] = [
  {
    step: "01",
    title: "Entender o problema",
    kicker: "Contexto",
    description:
      "Antes de sair implementando, busco clareza sobre objetivo, usuário, restrições, risco e impacto no negócio.",
    outcome: "O resultado é menos retrabalho e mais direção.",
  },
  {
    step: "02",
    title: "Estruturar a solução",
    kicker: "Arquitetura",
    description:
      "Defino fluxo, responsabilidades, estados, padrões visuais e pontos de integração para a solução nascer organizada.",
    outcome: "Isso ajuda o produto a crescer sem virar improviso.",
  },
  {
    step: "03",
    title: "Construir com qualidade",
    kicker: "Execução",
    description:
      "Implemento com cuidado em código, consistência visual, componentização, acessibilidade e previsibilidade técnica.",
    outcome: "A entrega fica mais madura desde a primeira versão.",
  },
  {
    step: "04",
    title: "Validar, testar e evoluir",
    kicker: "Iteração",
    description:
      "Ajusto comportamento, testo fluxos, acompanho feedback e uso sinais reais para melhorar o que mais importa.",
    outcome: "Produto bom não para no deploy.",
  },
];
