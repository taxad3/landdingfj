import { Check, Star } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';
import SectionTitle from '../ui/SectionTitle';
import { PLANS } from '../../data/plans';
import { LINKS } from '../../config/links';

export default function Pricing() {
  const handleTalkToUs = (planName: string) => {
    const message = `Oi, tenho interesse no plano ${planName}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`${LINKS.whatsapp}?text=${encodedMessage}`, '_blank');
  };

  return (
    <Section id="planos" className="bg-slate-900/30">
      <SectionTitle subtitle="Escolha o plano ideal para sua operação">
        Planos e preços
      </SectionTitle>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {PLANS.map((plan, index) => (
          <Card
            key={index}
            hover
            className={plan.recommended ? 'border-green-500 ring-2 ring-green-500/20 scale-105' : ''}
          >
            {plan.recommended && (
              <div className="flex items-center gap-2 mb-4 text-green-500 font-semibold">
                <Star className="w-5 h-5 fill-green-500" />
                Mais vendido
              </div>
            )}

            <h3 className="text-2xl font-bold text-white mb-2">
              {plan.name}
            </h3>

            <div className="mb-4">
              <span className="text-4xl font-bold text-white">
                R$ {plan.price}
              </span>
              <span className="text-slate-400">/mês</span>
            </div>

            <div className="space-y-2 mb-6">
              <div className="text-sm text-slate-300">
                <span className="font-semibold text-white">{plan.connections}</span> conexões
              </div>
              <div className="text-sm text-slate-300">
                <span className="font-semibold text-white">{plan.users}</span> {plan.users === 1 ? 'usuário' : 'usuários'}
              </div>
              {plan.trial && (
                <div className="text-sm text-green-500 font-medium">
                  Trial de {plan.trialPeriod} dias
                </div>
              )}
            </div>

            <div className="border-t border-slate-800 pt-6 mb-6">
              <p className="text-sm text-slate-400 italic mb-4">
                {plan.indicatedFor}
              </p>

              <ul className="space-y-3">
                {plan.includes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <Button
                href={LINKS.app}
                target="_blank"
                variant={plan.recommended ? 'primary' : 'secondary'}
                className="w-full"
              >
                Assinar agora
              </Button>
              <Button
                variant="ghost"
                className="w-full text-xs"
                onClick={() => handleTalkToUs(plan.name)}
              >
                Fale com a gente
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <p className="text-slate-400 text-sm">
          Todos os planos incluem suporte via WhatsApp. Pagamento seguro via cartão ou PIX.
        </p>
      </div>
    </Section>
  );
}
