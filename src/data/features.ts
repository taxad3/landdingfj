export interface Feature {
  title: string;
  description: string;
  category: 'multiatendimento' | 'organizacao' | 'campanhas' | 'automacao' | 'ia' | 'canais' | 'relatorios';
}

export const FEATURES: Feature[] = [
  {
    title: 'Multiusuários',
    description: 'Vários atendentes na mesma conta, cada um com seu login e permissões.',
    category: 'multiatendimento',
  },
  {
    title: 'Filas e Setores',
    description: 'Organize atendimentos por departamento: Comercial, Suporte, Financeiro.',
    category: 'multiatendimento',
  },
  {
    title: 'Permissões por Usuário',
    description: 'Controle o que cada atendente pode ver e fazer no sistema.',
    category: 'multiatendimento',
  },
  {
    title: 'Gestão de Contatos',
    description: 'CRM integrado com histórico completo de cada cliente.',
    category: 'organizacao',
  },
  {
    title: 'Tags e Notas',
    description: 'Organize e classifique conversas para encontrar rapidamente.',
    category: 'organizacao',
  },
  {
    title: 'Funil Kanban',
    description: 'Visualize leads em etapas (Novo → Negociação → Fechado).',
    category: 'organizacao',
  },
  {
    title: 'Tarefas e Lembretes',
    description: 'Agende follow-ups e não perca oportunidades.',
    category: 'organizacao',
  },
  {
    title: 'Campanhas e Disparos',
    description: 'Envie mensagens em massa com personalização e agendamento.',
    category: 'campanhas',
  },
  {
    title: 'Follow-up Automático',
    description: 'Reative leads frios com sequências programadas.',
    category: 'campanhas',
  },
  {
    title: 'Agendamento de Mensagens',
    description: 'Programe envios para o melhor horário.',
    category: 'campanhas',
  },
  {
    title: 'Chatbots',
    description: 'Automatize respostas e qualifique leads 24/7.',
    category: 'automacao',
  },
  {
    title: 'Fluxos e Webhooks',
    description: 'Conecte com outros sistemas via API.',
    category: 'automacao',
  },
  {
    title: 'Integração Typebot/N8N',
    description: 'Crie automações avançadas sem código.',
    category: 'automacao',
  },
  {
    title: 'IA via API',
    description: 'Respostas sugeridas, resumos e classificação (requer chave própria).',
    category: 'ia',
  },
  {
    title: 'WhatsApp Oficial (WABA)',
    description: 'Conecte número verificado pelo Meta Business.',
    category: 'canais',
  },
  {
    title: 'WhatsApp QR Code',
    description: 'Alternativas via QR para testar ou usar números pessoais.',
    category: 'canais',
  },
  {
    title: 'Telegram',
    description: 'Atenda em mais de um canal no mesmo inbox.',
    category: 'canais',
  },
  {
    title: 'Relatórios de Produtividade',
    description: 'Acompanhe desempenho da equipe e tempo de resposta.',
    category: 'relatorios',
  },
];
