import React, { useState } from 'react';
import { APPS_DATA, AppItem } from '../data/apps';
import { PhoneSimulator } from './PhoneSimulator';
import {
  Shield,
  Download,
  ExternalLink,
  Cpu,
  Layers,
  CheckCircle,
  FileCode,
  Terminal,
  Info,
} from 'lucide-react';

interface ShowcaseProps {
  onOpenPrivacy?: () => void;
  onSelectAppForBeta?: (appId: string) => void;
}

export const InteractiveAppShowcase: React.FC<ShowcaseProps> = ({
  onOpenPrivacy,
  onSelectAppForBeta,
}) => {
  const [selectedAppId, setSelectedAppId] = useState<string>(APPS_DATA[0].id);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [showTechnicalDetails, setShowTechnicalDetails] = useState<boolean>(false);

  const selectedApp = APPS_DATA.find((a) => a.id === selectedAppId) || APPS_DATA[0];

  const filteredApps = APPS_DATA.filter((app) => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'production') return app.stage === 'production';
    if (filterCategory === 'beta') return app.stage === 'closed_beta';
    if (filterCategory === 'pipeline') return app.stage === 'in_development';
    return true;
  });

  return (
    <section id="apps" className="py-20 bg-[#0B0E14] border-t border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
              Portfólio de Aplicativos
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Catálogo de Aplicativos Google Play
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400">
              Projetos projetados com rigor estético, eficiência de bateria e zero dependência de
              nuvem para funcionalidades essenciais.
            </p>
          </div>

          {/* Interactive Filter Controls (Functional segmented buttons) */}
          <div className="flex items-center gap-1 p-1 bg-slate-900/90 border border-slate-800 rounded-xl self-start md:self-auto">
            {[
              { id: 'all', label: 'Todos os Apps' },
              { id: 'production', label: 'Play Store' },
              { id: 'beta', label: 'Closed Beta' },
              { id: 'pipeline', label: 'Em Desenvolvimento' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterCategory(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  filterCategory === tab.id
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Showcase Layout: Two Columns (Left: App Selector & Specs; Right: Live Phone Simulator) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: App Selector Cards & Detailed Spec Sheet (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* App Card Picker Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredApps.map((item) => {
                const isSelected = item.id === selectedApp.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedAppId(item.id)}
                    className={`text-left p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-slate-900/90 border-slate-600 shadow-md ring-1 ring-white/20'
                        : 'bg-slate-900/30 border-slate-800/80 hover:bg-slate-900/60 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-white tracking-tight">
                          {item.name}
                        </span>
                        <span
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md"
                          style={{
                            backgroundColor: `${item.accentColor}18`,
                            color: item.accentColor,
                          }}
                        >
                          {item.version}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {item.tagline}
                      </p>
                    </div>

                    <div className="mt-3 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-500 font-mono">
                      <span>{item.category}</span>
                      <span className="text-slate-400">{item.fileSize}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected App Detailed Deep-Dive Card */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/90 space-y-6">
              {/* Header of Active App */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1">
                    <span>{selectedApp.packageId}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-emerald-400">{selectedApp.statusLabel}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {selectedApp.name}
                  </h3>
                </div>

                <div className="flex items-center gap-2.5">
                  {selectedApp.stage === 'production' ? (
                    <a
                      href={selectedApp.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs rounded-xl transition-colors shadow-sm"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Google Play</span>
                    </a>
                  ) : (
                    <button
                      onClick={() => onSelectAppForBeta?.(selectedApp.id)}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-slate-200 text-slate-900 font-semibold text-xs rounded-xl transition-colors shadow-sm cursor-pointer"
                    >
                      <span>Entrar no Closed Beta</span>
                    </button>
                  )}

                  <button
                    onClick={() => setShowTechnicalDetails(!showTechnicalDetails)}
                    className="p-2 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white rounded-xl text-xs transition-colors cursor-pointer"
                    title="Ver ficha técnica completa"
                  >
                    <FileCode className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedApp.description}
              </p>

              {/* Key Features List */}
              <div className="space-y-2.5">
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Recursos em Destaque
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {selectedApp.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications Accordion / Panel */}
              {showTechnicalDetails && (
                <div className="mt-4 p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3 font-mono text-xs">
                  <div className="text-slate-300 font-semibold flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="flex items-center gap-1.5 font-sans">
                      <Terminal className="w-3.5 h-3.5 text-sky-400" />
                      Ficha Técnica do Pacote Android
                    </span>
                    <span className="text-[10px] text-slate-500">Android SDK 35 Target</span>
                  </div>

                  <div className="grid grid-cols-2 gap-y-2 text-[11px]">
                    <div>
                      <span className="text-slate-500">Package Name:</span>
                      <div className="text-slate-200 select-all">{selectedApp.packageId}</div>
                    </div>
                    <div>
                      <span className="text-slate-500">Versão:</span>
                      <div className="text-slate-200">{selectedApp.version}</div>
                    </div>
                    <div>
                      <span className="text-slate-500">Compatibilidade Mínima:</span>
                      <div className="text-slate-200">{selectedApp.minSdk}</div>
                    </div>
                    <div>
                      <span className="text-slate-500">Alvo do SDK:</span>
                      <div className="text-slate-200">{selectedApp.targetSdk}</div>
                    </div>
                    <div>
                      <span className="text-slate-500">Tamanho do APK:</span>
                      <div className="text-slate-200">{selectedApp.fileSize}</div>
                    </div>
                    <div>
                      <span className="text-slate-500">Privacidade de Dados:</span>
                      <div className="text-emerald-400">{selectedApp.privacyBadge}</div>
                    </div>
                  </div>

                  {selectedApp.permissions.length > 0 && (
                    <div className="pt-2 border-t border-slate-800/80">
                      <div className="text-slate-400 text-[10px] mb-1">
                        Permissões Solicitadas no AndroidManifest.xml:
                      </div>
                      <div className="space-y-1">
                        {selectedApp.permissions.map((perm, i) => (
                          <div key={i} className="text-[10px] text-slate-300 bg-slate-900 px-2 py-1 rounded">
                            {perm}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="pt-2 flex items-center justify-between text-[10px] text-slate-500">
                    <span>Stack: {selectedApp.techStack.join(' · ')}</span>
                    <button
                      onClick={onOpenPrivacy}
                      className="text-slate-400 hover:text-white underline cursor-pointer"
                    >
                      Declaração Data Safety
                    </button>
                  </div>
                </div>
              )}

              {/* Bottom Quick Bar */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-slate-500" />
                  <span>{selectedApp.techStack.slice(0, 3).join(' · ')}</span>
                </div>
                <div className="text-slate-400">
                  Privacidade: <strong className="text-emerald-400 font-medium">{selectedApp.privacyBadge}</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Smartphone Simulator (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <PhoneSimulator app={selectedApp} />
            <div className="mt-4 text-center text-xs text-slate-500 max-w-xs">
              Alterne as abas na tela ou mude o tema acima para testar a experiência de uso do app.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveAppShowcase;
