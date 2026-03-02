import { UserPlus, Smartphone, Settings, Rocket, TrendingUp } from 'lucide-react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';

export default function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      title: 'Crie sua conta',
      description: 'Cadastro rápido em poucos cliques.',
    },
    {
      icon: Smartphone,
      title: 'Conecte seus canais',
      description: 'Adicione números WhatsApp, Telegram e outros.',
    },
    {
      icon: Settings,
      title: 'Configure equipes e filas',
      description: 'Organize departamentos e permissões.',
    },
    {
      icon: Rocket,
      title: 'Ative automações',
      description: 'Campanhas, chatbots e integrações.',
    },
    {
      icon: TrendingUp,
      title: 'Acompanhe e otimize',
      description: 'Relatórios e melhoria contínua.',
    },
  ];

  return (
    <Section id="como-funciona">
      <SectionTitle subtitle="Começar é fácil e rápido">
        Como funciona
      </SectionTitle>

      <div className="grid md:grid-cols-5 gap-6 relative">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/10 border-2 border-green-500 flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-green-500" />
                </div>
                <div className="text-sm font-bold text-green-500 mb-2">
                  Passo {index + 1}
                </div>
                <h3 className="font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-400">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-green-500/50 to-transparent" />
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
