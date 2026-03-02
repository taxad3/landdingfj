# RocketPost - Landing Page

Landing page one-page para RocketPost, plataforma de multiatendimento WhatsApp com automação e IA.

## Stack

- **React 18** + **Vite**
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (ícones)

## Estrutura do Projeto

```
src/
├── components/
│   ├── ui/                  # Componentes reutilizáveis
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── Card.tsx
│   │   ├── Section.tsx
│   │   └── SectionTitle.tsx
│   ├── sections/            # Seções da landing page
│   │   ├── Hero.tsx
│   │   ├── Problem.tsx
│   │   ├── Offer.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Pricing.tsx
│   │   ├── UseCases.tsx
│   │   ├── FAQ.tsx
│   │   └── FinalCTA.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── FloatingWhatsApp.tsx
├── config/
│   └── links.ts             # URLs e links externos
├── data/
│   ├── plans.ts             # Planos e preços
│   ├── features.ts          # Funcionalidades
│   ├── bonuses.ts           # Bônus inclusos
│   ├── useCases.ts          # Casos de uso
│   └── faq.ts               # Perguntas frequentes
├── App.tsx
├── main.tsx
└── index.css
```

## Comandos

### Instalar dependências

```bash
npm install
```

### Executar em desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### Build para produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`

### Preview do build

```bash
npm run preview
```

## Deploy

Após executar `npm run build`, faça upload do conteúdo da pasta `dist/` para seu servidor web ou serviço de hospedagem (Vercel, Netlify, etc).

## Personalização

### Links e URLs

Edite o arquivo `src/config/links.ts` para alterar URLs do app, WhatsApp, email, etc.

### Planos e Preços

Edite o arquivo `src/data/plans.ts` para modificar planos, valores e features incluídas.

### Conteúdo

Todos os conteúdos estão organizados em arquivos na pasta `src/data/`:

- `features.ts` - Funcionalidades
- `bonuses.ts` - Bônus inclusos nos planos
- `useCases.ts` - Casos de uso
- `faq.ts` - Perguntas frequentes

## SEO

Meta tags configuradas em `index.html`:

- Title e description otimizados
- Open Graph tags (Facebook, LinkedIn)
- Twitter Card
- Keywords e canonical URL
- Favicon usando logo da empresa

## Performance

- Componentes otimizados
- Lazy loading quando apropriado
- Assets leves
- Build otimizado com Vite

## Acessibilidade

- Contraste de cores adequado (WCAG AA)
- Labels descritivos (aria-label)
- Navegação por teclado
- Semântica HTML apropriada

## Suporte

Para dúvidas ou suporte, entre em contato:

- Email: contato@rocketpost.com.br
- WhatsApp: +55 43 9147-3254
