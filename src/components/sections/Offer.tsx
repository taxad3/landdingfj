import { Headset, Megaphone, Sparkles, Gift } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import SectionTitle from '../ui/SectionTitle';
import { BONUSES } from '../../data/bonuses';

export default function Offer() {
  const pillars = [
    {
      icon: Headset,
      title: 'Atendimento Profissional',
      description: 'Inbox unificado, filas e equipes, tags e notas, mensagens rápidas.',
      features: ['Multiusuários', 'Departamentos', 'Histórico completo', 'Atalhos e templates'],
    },
    {
      icon: Megaphone,
      title: 'Comunicação Ativa',
      description: 'Campanhas, disparos, follow-up automático e agendamentos.',
      features: ['Disparo em massa', 'Reativação de leads', 'Agendamento', 'Personalização'],
    },
    {
      icon: Sparkles,
      title: 'Automação & IA',
      description: 'Chatbots, integrações externas e IA via API (chave do cliente).',
      features: ['Typebot/N8N', 'Webhooks', 'Respostas inteligentes', 'Classificação automática'],
    },
  ];

  return (
    <Section id="oferta">
      <SectionTitle subtitle="Tudo que você precisa para vender e atender em escala">
        O que o RocketPost <span className="text-green-500">entrega</span>
      </SectionTitle>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <Card key={index} hover>
              <Icon className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                {pillar.title}
              </h3>
              <p className="text-slate-400 mb-4">
                {pillar.description}
              </p>
              <ul className="space-y-2">
                {pillar.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-slate-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          );
        })}
      </div>

      <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/30">
        <div className="flex items-start gap-4">
          <Gift className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold text-white mb-3">
              Bônus inclusos
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {BONUSES.map((bonus, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-white mb-1">
                    {bonus.title}
                  </h4>
                  <p className="text-sm text-slate-400">
                    {bonus.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </Section>
  );
}
