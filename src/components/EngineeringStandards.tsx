import React from 'react';
import {
  Cpu,
  ShieldCheck,
  Zap,
  Smartphone,
  EyeOff,
  CheckCircle2,
  FileCheck2,
  Layers,
} from 'lucide-react';

export const EngineeringStandards: React.FC = () => {
  return (
    <section id="standards" className="py-20 bg-[#090A0F] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
            Filosofia de Engenharia
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Padrões Rigorosos de Construção
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Desenvolver para Android moderno exige disciplina técnica. Cada linha de código na
            Pauzen Studio segue quatro princípios inegociáveis.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 01 (Span 2): Native Kotlin & Jetpack Compose */}
          <div className="md:col-span-2 p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-emerald-400 font-semibold">01</span>
                <span className="text-[11px] font-mono text-slate-500">Android 15 Ready</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                01. Arquitetura 100% Nativa Kotlin & Jetpack Compose
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Rejeitamos camadas híbridas lentas (como webviews embutidas ou frameworks pesados).
                Nossos apps são escritos diretamente na linguagem oficial recomendada pelo Google,
                garantindo renderização a 60–120 FPS constantes, suporte a temas dinâmicos Material You
                e transições de gestos preditivos de voltar nativas.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/[0.06] text-xs font-mono text-slate-400">
              <div>
                <span className="text-slate-500 block text-[10px]">Renderização:</span>
                <span className="text-white font-semibold">120 Hz Nativo</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">Inicialização (Cold):</span>
                <span className="text-emerald-400 font-semibold">&lt; 180 ms</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">Linguagem:</span>
                <span className="text-white font-semibold">Kotlin 2.0+</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">Design System:</span>
                <span className="text-white font-semibold">Material 3</span>
              </div>
            </div>
          </div>

          {/* Card 02 (Span 1): Zero Telemetria & Soberania dos Dados */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-emerald-400 font-semibold">02</span>
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                02. Privacidade e Dados Locais
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Suas tarefas, notas, métricas e hábitos pertencem unicamente a você. Não usamos SDKs
                de rastreamento de anúncios, não vendemos perfis de navegação e garantimos
                funcionamento pleno em modo avião (100% offline).
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
              <span className="text-slate-500">Conexão Exigida:</span>
              <span className="text-emerald-400 font-semibold">Zero / Opcional</span>
            </div>
          </div>

          {/* Card 03 (Span 1): Pegada Mínima de Armazenamento */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-emerald-400 font-semibold">03</span>
                <Zap className="w-4 h-4 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                03. Tamanho de APK Mínimo
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Aplicativos móveis não devem consumir gigabytes de memória. Com técnicas avançadas de
                R8 code shrinking, minificação de recursos vetoriais e eliminação de bibliotecas
                redundantes, nossos APKs mantêm-se abaixo de 10 MB.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
              <span className="text-slate-500">Média de Download:</span>
              <span className="text-slate-200 font-semibold">7.2 MB</span>
            </div>
          </div>

          {/* Card 04 (Span 2): Total Conformidade Google Play Console */}
          <div className="md:col-span-2 p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-emerald-400 font-semibold">04</span>
                <FileCheck2 className="w-4 h-4 text-sky-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                04. Conformidade Rigorosa com as Políticas do Google Play
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Todas as declarações de <em>Data Safety</em>, permissões de segundo plano, target SDK
                mínimo (Android 15 API 35) e canais de exclusão de dados são cumpridos à risca. Cada
                release passa por testes automatizados de Lint e análise estática antes de qualquer
                submissão.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/[0.06] text-xs font-mono text-slate-400">
              <div>
                <span className="text-slate-500 block text-[10px]">Target SDK Obrigatório:</span>
                <span className="text-white font-semibold">API Level 35</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">Data Safety Form:</span>
                <span className="text-emerald-400 font-semibold">100% Auditado</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">Closed Testing Track:</span>
                <span className="text-white font-semibold">20 Testers / 14 Dias</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringStandards;
