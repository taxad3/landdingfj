import { Rocket, Users, Zap, Bot } from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { LINKS } from '../../config/links';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-[#0b0f14]" />

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/30 rounded-full blur-[128px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/20 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Badge>
            <Zap className="w-4 h-4" />
            Inbox unificado
          </Badge>
          <Badge>
            <Users className="w-4 h-4" />
            Multiusuários e filas
          </Badge>
          <Badge>
            <Rocket className="w-4 h-4" />
            Campanhas
          </Badge>
          <Badge>
            <Bot className="w-4 h-4" />
            Automações + IA
          </Badge>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Centralize o atendimento,{' '}
          <span className="text-green-500">automatize respostas</span> e escale conversas no WhatsApp
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Multiatendimento, filas, campanhas, chatbots e integrações com IA para vender e atender com mais velocidade.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button href={LINKS.app} target="_blank" variant="primary" className="text-lg px-8 py-4">
            <Rocket className="w-5 h-5" />
            Criar conta
          </Button>
          <Button href="#planos" variant="secondary" className="text-lg px-8 py-4">
            Ver planos
          </Button>
        </div>
      </div>
    </section>
  );
}
