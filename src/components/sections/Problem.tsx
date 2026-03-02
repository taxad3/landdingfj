import { AlertCircle, Users, Clock, TrendingDown } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';

export default function Problem() {
  const problems = [
    {
      icon: AlertCircle,
      title: 'Atendimento espalhado e sem histórico',
      description: 'Conversas em vários apps, sem visão única do cliente.',
    },
    {
      icon: Users,
      title: 'Sem fila ou equipe: lead se perde',
      description: 'Um atendente responde, outro não sabe o que foi dito.',
    },
    {
      icon: Clock,
      title: 'Respostas lentas e repetitivas',
      description: 'Digitando as mesmas mensagens dezenas de vezes por dia.',
    },
    {
      icon: TrendingDown,
      title: 'Follow-up esquecido = menos vendas',
      description: 'Leads esfriam porque ninguém lembrou de retornar.',
    },
  ];

  return (
    <Section className="bg-slate-900/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Seu atendimento está <span className="text-green-500">perdendo dinheiro?</span>
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Esses problemas custam caro para quem vende ou atende pelo WhatsApp
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {problems.map((problem, index) => {
          const Icon = problem.icon;
          return (
            <Card key={index} hover>
              <Icon className="w-10 h-10 text-green-500 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">
                {problem.title}
              </h3>
              <p className="text-slate-400 text-sm">
                {problem.description}
              </p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
