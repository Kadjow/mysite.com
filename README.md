# Portfólio — Diogo Arthur Gulhak

Este é meu portfólio profissional, desenvolvido para apresentar minha trajetória, meus projetos e minha forma de pensar produto.

A ideia deste projeto não é me limitar a uma stack específica, mas mostrar como eu conecto tecnologia, contexto, experiência do usuário e entrega para construir soluções mais claras, úteis e bem estruturadas.

O portfólio foi desenvolvido com Next.js, TypeScript, Tailwind CSS e shadcn/ui, com suporte a tema claro/escuro, responsividade e conteúdo em português e inglês.

## O que este portfólio apresenta

- Minha experiência profissional.
- Projetos organizados como cases.
- Minha forma de trabalhar.
- Capacidades técnicas e de produto.
- Experiências além do código.
- Contato e currículo para download.

## Stack principal

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide React
- next-themes
- Framer Motion

## Funcionalidades

- Tema claro e escuro.
- Conteúdo em PT-BR e EN-US.
- Seletor de idioma com persistência.
- Layout responsivo para desktop e mobile.
- Seção de projetos em formato de carrossel.
- Download direto do currículo.
- Componentes organizados e reutilizáveis.
- Conteúdo centralizado em arquivos de i18n.

## Como rodar o projeto

Instale as dependências:

```bash
pnpm install
```

Rode o projeto em ambiente de desenvolvimento:

```bash
pnpm run dev
```

Acesse no navegador:

```bash
http://localhost:3000
```

## Validação

Para verificar lint:

```bash
pnpm run lint
```

Para gerar o build de produção:

```bash
pnpm run build
```

## Estrutura principal

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
    layout/
    sections/
    cards/
    shared/
    ui/

  data/

  i18n/
    config.ts
    dictionaries.ts
    get-content.ts
    index.ts
    locales/
      pt-BR.ts
      en-US.ts
    types.ts

  lib/

  styles/
    tokens.css

public/
  diogo-arthur-gulhak-curriculo.pdf
```

## Organização do conteúdo

Os textos principais do portfólio ficam centralizados nos arquivos de i18n:

```text
src/i18n/locales/pt-BR.ts
src/i18n/locales/en-US.ts
```

Os arquivos em `src/data` mantêm configurações estruturais, como links, ícones, ordem dos itens e informações que não dependem diretamente do idioma.

Essa divisão ajuda a manter o conteúdo mais fácil de revisar e prepara o projeto para evoluções futuras.

## Decisões do projeto

Algumas decisões que guiaram esta V1:

- Usar uma identidade visual limpa, com suporte a tema claro e escuro.
- Apresentar projetos como cases, não apenas como links de repositório.
- Evitar uma comunicação focada apenas em stack.
- Destacar produto, contexto, arquitetura, UI/UX e entrega real.
- Manter componentes pequenos, reutilizáveis e organizados.
- Centralizar textos em i18n para facilitar manutenção.
- Construir uma experiência responsiva para desktop e mobile.

## Projetos em destaque

A seção de projetos foi pensada para mostrar mais do que tecnologias utilizadas. Cada projeto apresenta uma leitura de:

- problema;
- solução;
- impacto;
- contexto técnico;
- decisão de produto.

A ideia é mostrar como cada entrega conecta raciocínio, execução e aprendizado prático.

## Próximos passos

Algumas melhorias que podem entrar em versões futuras:

- Adicionar screenshots reais dos projetos.
- Aprofundar estudos de caso individuais.
- Melhorar SEO e Open Graph.
- Adicionar analytics.
- Revisar performance após deploy.
- Evoluir animações e microinterações.
- Criar páginas dedicadas para projetos selecionados.

## Contato

- LinkedIn: [Diogo Arthur Gulhak](https://www.linkedin.com/in/dagulhak/)
- GitHub: [Kadjow](https://github.com/Kadjow)
- Email: [dgulhak@gmail.com](mailto:dgulhak@gmail.com)
