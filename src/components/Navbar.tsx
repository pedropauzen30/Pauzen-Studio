import React, { useState } from 'react';
import { PauzenLogo } from './PauzenLogo';
import { ExternalLink, Sparkles, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenBrandKit?: () => void;
  onOpenPrivacy?: () => void;
  onOpenDomain?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBrandKit, onOpenPrivacy, onOpenDomain }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#090A0F]/85 border-b border-white/[0.07] transition-all">
      {/* 3-Zone Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Single text element / brand mark */}
        <a
          href="#"
          className="flex items-center group transition-transform active:scale-98"
          aria-label="Pauzen Studio Home"
        >
          <PauzenLogo size="md" theme="dark" />
        </a>

        {/* Zone 2: 4–6 nav links, 1–2 word labels, single-line text links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a
            href="#apps"
            className="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            Aplicativos
          </a>
          <a
            href="#standards"
            className="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            Engenharia
          </a>
          <a
            href="#beta-program"
            className="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            Programa Beta
          </a>
          <button
            onClick={onOpenPrivacy}
            className="hover:text-white transition-colors relative py-1 text-slate-300 text-sm font-medium cursor-pointer"
          >
            Políticas
          </button>
          <a
            href="#contact"
            className="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            Contato
          </a>
        </nav>

        {/* Zone 3: 1–2 primary actions */}
        <div className="flex items-center gap-3">
          {onOpenDomain && (
            <button
              onClick={onOpenDomain}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-xs font-medium text-emerald-300 transition-colors whitespace-nowrap cursor-pointer"
              title="Gerenciar e visualizar link público do domínio"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Domínio Ativo</span>
            </button>
          )}

          {onOpenBrandKit && (
            <button
              onClick={onOpenBrandKit}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700/60 text-xs font-medium text-slate-300 hover:text-white hover:border-slate-500 transition-colors whitespace-nowrap cursor-pointer"
              title="Identidade visual & Logo oficial"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-400" />
              <span>Brand Kit</span>
            </button>
          )}

          <a
            href="#beta-program"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-lg transition-colors shadow-sm whitespace-nowrap"
          >
            <span>Ser Testador Beta</span>
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Clean, non-intrusive) */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#0c0e15] px-6 py-5 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-300">
            <a
              href="#apps"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1"
            >
              Aplicativos
            </a>
            <a
              href="#standards"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1"
            >
              Engenharia & Padrões
            </a>
            <a
              href="#beta-program"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1"
            >
              Programa Beta (Play Store)
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPrivacy?.();
              }}
              className="text-left text-slate-300 hover:text-white py-1"
            >
              Políticas de Privacidade
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1"
            >
              Contato
            </a>
          </nav>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="#beta-program"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-4 py-2.5 text-xs font-semibold text-slate-900 bg-white rounded-lg"
            >
              Entrar no Closed Beta
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
