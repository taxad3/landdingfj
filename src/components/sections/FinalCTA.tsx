import { Rocket } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { LINKS } from '../../config/links';

export default function FinalCTA() {
  return (
    <Section className="bg-gradient-to-br from-green-500/10 via-transparent to-green-500/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Pronto para escalar seu atendimento?
        </h2>
        <p className="text-xl text-slate-300 mb-10 leading-relaxed">
          Junte-se a centenas de empresas que já transformaram a forma como vendem e atendem pelo WhatsApp.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button href={LINKS.app} target="_blank" variant="primary" className="text-lg px-8 py-4">
            <Rocket className="w-5 h-5" />
            Criar conta grátis
          </Button>
          <Button href="#planos" variant="secondary" className="text-lg px-8 py-4">
            Ver planos
          </Button>
        </div>
      </div>
    </Section>
  );
}
