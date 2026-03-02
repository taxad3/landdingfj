import {
  Users,
  Folder,
  Tag,
  Kanban,
  CheckSquare,
  Megaphone,
  RotateCcw,
  Calendar,
  Bot,
  Webhook,
  Puzzle,
  Sparkles,
  MessageCircle,
  Smartphone,
  Send,
  BarChart3,
  Info
} from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import SectionTitle from '../ui/SectionTitle';

export default function Features() {
  const features = [
    { icon: Users, title: 'Multiusuários', description: 'Vários atendentes, cada um com login e permissões.' },
    { icon: Folder, title: 'Filas e Setores', description: 'Organize por departamento: Comercial, Suporte, Financeiro.' },
    { icon: Tag, title: 'Tags e Notas', description: 'Classifique e encontre conversas rapidamente.' },
    { icon: Kanban, title: 'Funil Kanban', description: 'Visualize leads em etapas do processo.' },
    { icon: CheckSquare, title: 'Tarefas e Lembretes', description: 'Agende follow-ups automáticos.' },
    { icon: Megaphone, title: 'Campanhas', description: 'Disparo em massa com personalização.' },
    { icon: RotateCcw, title: 'Follow-up Automático', description: 'Reative leads frios com sequências.' },
    { icon: Calendar, title: 'Agendamentos', description: 'Programe envios para melhor horário.' },
    { icon: Bot, title: 'Chatbots', description: 'Automatize respostas 24/7.' },
    { icon: Webhook, title: 'Webhooks', description: 'Conecte com outros sistemas via API.' },
    { icon: Puzzle, title: 'Typebot/N8N', description: 'Automações avançadas sem código.' },
    { icon: Sparkles, title: 'IA via API', description: 'Respostas sugeridas e classificação (chave própria).' },
    { icon: MessageCircle, title: 'WhatsApp Oficial', description: 'Número verificado pelo Meta Business.' },
    { icon: Smartphone, title: 'WhatsApp QR', description: 'Alternativas para testes.' },
    { icon: Send, title: 'Telegram', description: 'Mais canais no mesmo inbox.' },
    { icon: BarChart3, title: 'Relatórios', description: 'Desempenho e tempo de resposta.' },
  ];

  return (
    <Section id="funcionalidades" className="bg-slate-900/30">
      <SectionTitle subtitle="Tudo em uma única plataforma para escalar seu atendimento">
        Funcionalidades completas
      </SectionTitle>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card key={index} hover>
              <Icon className="w-8 h-8 text-green-500 mb-3" />
              <h3 className="font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-400">
                {feature.description}
              </p>
            </Card>
          );
        })}
      </div>

      <Card className="border-yellow-500/30 bg-yellow-500/5">
        <div className="flex gap-3">
          <Info className="w-6 h-6 text-yellow-500 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-white mb-2">Transparência sobre custos</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              Custos de WhatsApp Oficial (WABA/BSP), IA via API e algumas integrações externas são cobrados à parte conforme uso.
              Você tem controle total e paga apenas pelo que consumir.
            </p>
          </div>
        </div>
      </Card>
    </Section>
  );
}
