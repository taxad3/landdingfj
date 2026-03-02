import { Wrench, Stethoscope, ShoppingBag, Home, Briefcase } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import SectionTitle from '../ui/SectionTitle';
import { USE_CASES } from '../../data/useCases';

const icons = [Wrench, Stethoscope, ShoppingBag, Home, Briefcase];

export default function UseCases() {
  return (
    <Section>
      <SectionTitle subtitle="Soluções específicas para diferentes necessidades">
        Feito para o seu negócio
      </SectionTitle>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {USE_CASES.map((useCase, index) => {
          const Icon = icons[index];
          return (
            <Card key={index} hover>
              <Icon className="w-10 h-10 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                {useCase.title}
              </h3>
              <p className="text-slate-400">
                {useCase.description}
              </p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
