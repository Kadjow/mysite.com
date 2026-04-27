# Portfólio V1 — Diogo Arthur Gulhak

Portfólio profissional construído em Next.js com foco em posicionamento orientado a produto.

Em vez de vender Diogo como "dev de uma stack específica", esta V1 apresenta uma narrativa centrada em:

- produto
- arquitetura
- mobile e front-end
- UI/UX
- entrega em produção
- visão de negócio

## Stack

- Next.js 16
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Lucide React
- next-themes
- Framer Motion

## Comandos

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Arquitetura de pastas

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  assets/
    images/
      profile/
      projects/
  components/
    ui/
    layout/
      site-header.tsx
      site-footer.tsx
      section-wrapper.tsx
      theme-toggle.tsx
    sections/
      hero-section.tsx
      about-section.tsx
      experience-section.tsx
      projects-section.tsx
      capabilities-section.tsx
      work-method-section.tsx
      beyond-code-section.tsx
      final-cta-section.tsx
    cards/
      metric-card.tsx
      project-card.tsx
      experience-card.tsx
      capability-card.tsx
      method-card.tsx
    shared/
      section-heading.tsx
      external-link-button.tsx
      tag-list.tsx
      reveal.tsx
      theme-provider.tsx
  data/
    profile.ts
    metrics.ts
    experiences.ts
    projects.ts
    capabilities.ts
    work-method.ts
    social-links.ts
  lib/
    utils.ts
  styles/
    tokens.css
public/
  diogo-arthur-gulhak-curriculo.html
```

## Decisões de Design System

- Tokens semânticos em `src/styles/tokens.css` para `background`, `foreground`, `card`, `muted`, `primary`, `accent`, `border`, `ring`, `success` e `warning`.
- Tema claro/escuro com `next-themes` e estilo visual premium baseado em neutros + acento ciano/verde suave.
- Componentes organizados em camadas pequenas e reutilizáveis para evitar dados hardcoded dentro das seções.
- Layout editorial com bastante respiro, cards arredondados, blur leve, gradientes sutis e bordas suaves.
- `shadcn/ui` como base dos botões, cards, badges, menu de tema e sheet mobile.

## O que foi implementado

- Header responsivo com CTA e toggle de tema.
- Hero forte com métricas, CTAs e foto local.
- Seções de sobre, experiência, projetos, capacidades, método, fora do código e CTA final.
- Projetos e experiências renderizados a partir de `src/data`.
- Currículo em arquivo HTML para download inicial na V1.

## Próximos passos para V2

- Adicionar screenshots reais por projeto em `src/assets/images/projects`.
- Publicar a V1 e trocar o link do projeto "novo portfólio" para a versão online.
- Substituir o currículo HTML por PDF final revisado.
- Incluir estudos de caso mais profundos para Atlas, Slingui, Spark e PO Agent.
- Adicionar analytics, SEO expandido e Open Graph customizado.
- Refinar microinterações e validação visual no browser após deploy.
