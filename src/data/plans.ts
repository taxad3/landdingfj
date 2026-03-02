export interface Plan {
  name: string;
  price: number;
  connections: number;
  users: number;
  trial: boolean;
  trialPeriod: number;
  recommended?: boolean;
  indicatedFor: string;
  includes: string[];
}

export const PLANS: Plan[] = [
  {
    name: 'START',
    price: 149,
    connections: 3,
    users: 1,
    trial: true,
    trialPeriod: 3,
    indicatedFor: 'Começando com atendimento organizado',
    includes: [
      'Inbox unificado',
      'Filas básicas',
      'Tags e notas',
      'Mensagens rápidas',
      'Campanhas básicas',
    ],
  },
  {
    name: 'PLUS',
    price: 199,
    connections: 3,
    users: 3,
    trial: true,
    trialPeriod: 3,
    recommended: true,
    indicatedFor: 'Time pequeno com fila e produtividade',
    includes: [
      'Tudo do START',
      'Bônus e modelos prontos',
      'Guia de implantação',
      'Suporte prioritário',
    ],
  },
  {
    name: 'SUPER',
    price: 299,
    connections: 10,
    users: 10,
    trial: false,
    trialPeriod: 0,
    indicatedFor: 'Operação completa com múltiplos atendentes e canais',
    includes: [
      'Tudo do PLUS',
      'Mais conexões e usuários',
      'Prioridade máxima no suporte',
      'Consultoria de implantação',
    ],
  },
];
