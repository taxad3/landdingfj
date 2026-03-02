import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import { FAQS } from '../../data/faq';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" className="bg-slate-900/30">
      <SectionTitle subtitle="Tire suas dúvidas antes de começar">
        Perguntas frequentes
      </SectionTitle>

      <div className="max-w-3xl mx-auto space-y-4">
        {FAQS.map((faq, index) => (
          <div
            key={index}
            className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-green-500/30 transition-all"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 flex items-center justify-between text-left"
            >
              <span className="font-semibold text-white pr-4">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-green-500 flex-shrink-0 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>

            {openIndex === index && (
              <div className="px-6 pb-4 text-slate-300 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
