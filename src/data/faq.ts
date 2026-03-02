export interface FAQ {
  question: string;
  answer: string;
}

export const FAQS: FAQ[] = [
  {
    question: 'O que é uma conexão?',
    answer: 'Uma conexão é um número ou canal conectado ao sistema (WhatsApp, Telegram, etc). Por exemplo: 3 conexões = 3 números diferentes atendendo no mesmo inbox.',
  },
  {
    question: 'Posso usar WhatsApp oficial (WABA)?',
    answer: 'Sim! Oferecemos integração com WhatsApp Business API (oficial do Meta). Custos de envio e número verificado são cobrados separadamente conforme uso e fornecedor (BSP).',
  },
  {
    question: 'Posso usar QR Code ou alternativas?',
    answer: 'Sim. Além do WhatsApp oficial, você pode conectar via QR Code para testes ou uso de números pessoais/não verificados.',
  },
  {
    question: 'Quais canais além do WhatsApp?',
    answer: 'Atualmente oferecemos WhatsApp (oficial e alternativas) e Telegram. Novos canais podem ser adicionados conforme demanda.',
  },
  {
    question: 'IA tem custo adicional?',
    answer: 'A integração com IA funciona via API (você usa sua própria chave OpenAI, Anthropic, etc). Custos são cobrados diretamente pelo fornecedor da IA conforme seu uso.',
  },
  {
    question: 'Integra com Typebot e N8N?',
    answer: 'Sim! Você pode conectar fluxos de automação externos via webhooks e APIs, incluindo Typebot para chatbots e N8N para integrações.',
  },
  {
    question: 'Como funcionam usuários e filas?',
    answer: 'Cada usuário é um atendente com login próprio. Filas distribuem conversas automaticamente entre setores (Comercial, Suporte, etc) e atendentes disponíveis.',
  },
  {
    question: 'Como funciona o período de trial?',
    answer: 'Planos START e PLUS incluem 3 dias de teste grátis. O SUPER não possui trial, mas você pode testar nos planos menores antes de migrar.',
  },
  {
    question: 'Como é o suporte?',
    answer: 'Oferecemos suporte via WhatsApp e ticket. Planos PLUS e SUPER têm prioridade no atendimento.',
  },
  {
    question: 'Posso migrar de plano?',
    answer: 'Sim! Você pode fazer upgrade ou downgrade a qualquer momento. Ajustes de valor são proporcionais ao período restante.',
  },
];
