import { LINKS } from '../config/links';

export default function Footer() {
  return (
    <footer className="bg-slate-900/50 border-t border-slate-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src="/foguete_circulo.png" alt="RocketPost" className="w-8 h-8" />
            <span className="text-xl font-bold text-white">
              Rocket<span className="text-green-500">Post</span>
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#" className="text-slate-400 hover:text-green-500 transition-colors text-sm">
              Termos de Uso
            </a>
            <a href="#" className="text-slate-400 hover:text-green-500 transition-colors text-sm">
              Privacidade
            </a>
            <a
              href={LINKS.email}
              className="text-slate-400 hover:text-green-500 transition-colors text-sm"
            >
              Contato
            </a>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm">
            {new Date().getFullYear()} RocketPost. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
