import React from 'react';
import { ArrowDown, Check, Shield, Layers, Smartphone, Sparkles } from 'lucide-react';
import { PauzenMark } from './PauzenLogo';

interface HeroProps {
  onOpenDomain?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDomain }) => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Background subtle radial illumination (minimalist, strictly neutral) */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-slate-800/20 blur-[140px] -z-10 rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Active Domain Live Badge */}
          {onOpenDomain && (
            <button
              onClick={onOpenDomain}
              className="mb-4 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300 hover:bg-emerald-500/20 transition-all cursor-pointer shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Domínio: www.pauzenstudio.com.br · Ativo & DNS</span>
            </button>
          )}

          {/* Quiet, unboxed metadata kicker */}
          <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-6 select-none">
            <span className="text-emerald-400 font-semibold">Google Play Developer</span>
            <span aria-hidden="true">·</span>
            <span>Android 15 Architecture</span>
            <span aria-hidden="true">·</span>
            <span>Native Jetpack Compose</span>
          </div>

          {/* Primary Studio Headline with balance */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6"
            style={{ textWrap: 'balance' }}
          >
            Aplicativos Android construídos com precisão, utilidade e privacidade real.
          </h1>

          {/* Subtitle with craftsmanship authority */}
          <p
            className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mb-10"
            style={{ textWrap: 'balance' }}
          >
            A <strong>Pauzen Studio</strong> desenvolve ferramentas móveis nativas para a Google
            Play Store. Criamos soluções com inicialização instantânea, zero anúncios abusivos e
            respeito absoluto aos dados do usuário.
          </p>

          {/* Primary Action Zone */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
            <a
              href="#apps"
              className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>Explorar Aplicativos</span>
              <ArrowDown className="w-4 h-4 text-slate-700" />
            </a>
            <a
              href="#beta-program"
              className="w-full sm:w-auto px-6 py-3.5 text-sm font-medium text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/70 rounded-xl transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>Programa de Testes Beta (20 Testers)</span>
            </a>
          </div>

          {/* Claim-to-Proof Adjacency: Studio Foundations Strip */}
          <div className="w-full border-t border-b border-white/[0.08] py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div className="space-y-1">
              <div className="text-xs font-medium text-slate-400">Padrão de Qualidade</div>
              <div className="text-sm font-semibold text-white">100% Kotlin & Compose</div>
              <div className="text-xs text-slate-500">Sem webviews ou camadas híbridas</div>
            </div>

            <div className="space-y-1">
              <div className="text-xs font-medium text-slate-400">Privacidade do Usuário</div>
              <div className="text-sm font-semibold text-emerald-400">Zero Rastreamento</div>
              <div className="text-xs text-slate-500">Dados protegidos no próprio aparelho</div>
            </div>

            <div className="space-y-1">
              <div className="text-xs font-medium text-slate-400">Eficiência Energética</div>
              <div className="text-sm font-semibold text-white">APKs Ultraleves (&lt;10 MB)</div>
              <div className="text-xs text-slate-500">Baixo consumo de bateria e memória</div>
            </div>

            <div className="space-y-1">
              <div className="text-xs font-medium text-slate-400">Políticas Google Play</div>
              <div className="text-sm font-semibold text-white">Conformidade 2026</div>
              <div className="text-xs text-slate-500">Segurança de dados e Target SDK 35</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
