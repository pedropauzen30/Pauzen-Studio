import React from 'react';
import { PauzenLogo } from './PauzenLogo';
import { ShieldCheck, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenBrandKit: () => void;
  onOpenDomain?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenBrandKit, onOpenDomain }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080c] border-t border-white/[0.08] text-slate-400 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand & Mission (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <PauzenLogo size="md" />
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Estúdio independente focado na engenharia de aplicativos Android nativos de alta
              utilidade, design minimalista e privacidade soberana para a Google Play Store.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono">
              <span className="text-emerald-400">●</span>
              <span>Desenvolvedor Registrado Google Play</span>
              <span aria-hidden="true">·</span>
              <span>Target SDK 35 (Android 15)</span>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-white font-semibold text-xs uppercase tracking-wider">
              Ecossistema
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#apps" className="hover:text-white transition-colors">
                  Catálogo de Aplicativos
                </a>
              </li>
              <li>
                <a href="#standards" className="hover:text-white transition-colors">
                  Filosofia de Engenharia
                </a>
              </li>
              <li>
                <a href="#beta-program" className="hover:text-white transition-colors">
                  Closed Beta (20 Testers)
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenBrandKit}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Kit de Marca & Logo {`{ P`}
                </button>
              </li>
              {onOpenDomain && (
                <li>
                  <button
                    onClick={onOpenDomain}
                    className="hover:text-emerald-400 text-slate-300 transition-colors text-left cursor-pointer flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    <span>Domínio & Hospedagem</span>
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Legal & Compliance (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-white font-semibold text-xs uppercase tracking-wider">
              Conformidade & Suporte
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Política de Privacidade Global
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Declaração Google Play Data Safety
                </button>
              </li>
              <li>
                <a href="mailto:pedropauzen30@gmail.com" className="hover:text-white transition-colors">
                  pedropauzen30@gmail.com
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Relatório de Vulnerabilidade / Bugs
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Pauzen Studio. Todos os direitos reservados.
          </div>

          <div className="text-center md:text-right max-w-md text-[10px] text-slate-600">
            Google Play e o logotipo do Google Play são marcas registradas da Google LLC. Android é
            uma marca registrada da Google LLC.
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
            title="Voltar ao topo"
          >
            <span>Topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
