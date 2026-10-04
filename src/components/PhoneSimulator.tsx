import React, { useState } from 'react';
import { AppItem } from '../data/apps';
import {
  Play,
  Pause,
  RotateCcw,
  ShieldCheck,
  Key,
  CheckCircle2,
  Calendar,
  Wifi,
  Activity,
  ArrowUpRight,
  TrendingDown,
  DollarSign,
  Plus,
  Moon,
  Sun,
  Smartphone,
  Lock,
} from 'lucide-react';

interface PhoneSimulatorProps {
  app: AppItem;
}

export const PhoneSimulator: React.FC<PhoneSimulatorProps> = ({ app }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isPhoneDark, setIsPhoneDark] = useState<boolean>(true);
  // Interactive state inside phone
  const [timerRunning, setTimerRunning] = useState<boolean>(false);
  const [timerSeconds, setTimerSeconds] = useState<number>(1500); // 25 mins
  const [habitChecked, setHabitChecked] = useState<{ [key: string]: boolean }>({
    'Código & Kotlin': true,
    'Exercício Físico': true,
    'Leitura Técnica': false,
    'Hidratação 2.5L': true,
  });

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleTimer = () => setTimerRunning(!timerRunning);
  const resetTimer = () => {
    setTimerRunning(false);
    setTimerSeconds(1500);
  };

  return (
    <div className="relative flex flex-col items-center">
      {/* Phone Controls Header Bar */}
      <div className="mb-3 flex items-center justify-between w-full max-w-[320px] px-2 text-xs text-slate-400">
        <div className="flex items-center gap-1.5">
          <Smartphone className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-mono text-[11px] text-slate-300">Simulador Android 15</span>
        </div>
        <button
          onClick={() => setIsPhoneDark(!isPhoneDark)}
          className="flex items-center gap-1 px-2 py-0.5 rounded text-[11px] bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          title="Alternar tema do simulador"
        >
          {isPhoneDark ? <Sun className="w-3 h-3 text-amber-400" /> : <Moon className="w-3 h-3 text-sky-300" />}
          <span>{isPhoneDark ? 'Tema Claro' : 'Tema Escuro'}</span>
        </button>
      </div>

      {/* Hardware Phone Bezel */}
      <div
        className="relative w-[310px] sm:w-[330px] h-[640px] rounded-[44px] p-3 shadow-2xl transition-all duration-300"
        style={{
          background: 'linear-gradient(145deg, #1e2433, #0d1017)',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.08) inset',
        }}
      >
        {/* Antenna / Button indicators */}
        <div className="absolute -left-[3px] top-24 w-[3px] h-9 bg-slate-700 rounded-l-sm" />
        <div className="absolute -left-[3px] top-36 w-[3px] h-14 bg-slate-700 rounded-l-sm" />
        <div className="absolute -right-[3px] top-28 w-[3px] h-12 bg-slate-700 rounded-r-sm" />

        {/* Screen Glass Boundary */}
        <div
          className={`relative w-full h-full rounded-[34px] overflow-hidden flex flex-col transition-colors duration-300 ${
            isPhoneDark ? 'bg-[#0E1118] text-slate-100' : 'bg-[#F8FAFC] text-slate-900'
          }`}
        >
          {/* Android Status Bar */}
          <div className="shrink-0 h-8 px-6 pt-2 flex items-center justify-between text-[11px] font-mono select-none">
            <span className="font-semibold tracking-tight">09:41</span>
            {/* Front Camera Punch-hole */}
            <div className="w-3.5 h-3.5 rounded-full bg-black border border-slate-700/50 shadow-inner flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0a1a2f]" />
            </div>
            <div className="flex items-center gap-1.5">
              <Wifi className="w-3 h-3 opacity-80" />
              <div className="w-4 h-2 border border-current rounded-xs p-[1px] flex items-center">
                <div className="w-2.5 h-full bg-current rounded-2xs" />
              </div>
            </div>
          </div>

          {/* App Header Inside Phone */}
          <div
            className={`px-4 pt-2 pb-2.5 flex items-center justify-between border-b ${
              isPhoneDark ? 'border-slate-800/80 bg-slate-900/40' : 'border-slate-200 bg-white/60'
            }`}
          >
            <div className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-xs"
                style={{ backgroundColor: app.accentColor }}
              >
                {app.name.charAt(7) || 'P'}
              </div>
              <div className="leading-tight">
                <div className="text-xs font-bold truncate max-w-[150px]">{app.name}</div>
                <div className="text-[10px] opacity-60 font-mono">{app.version}</div>
              </div>
            </div>
            <span
              className="text-[9px] font-semibold px-1.5 py-0.5 rounded tracking-wide uppercase"
              style={{
                backgroundColor: `${app.accentColor}20`,
                color: app.accentColor,
              }}
            >
              {app.stage === 'production' ? 'Produção' : 'Beta'}
            </span>
          </div>

          {/* Screen Content Area */}
          <div className="flex-1 overflow-y-auto px-4 py-3 select-none">
            {/* SCREEN 1: PAUZEN CHRONO (TIMER) */}
            {app.id === 'pauzen-chrono' && (
              <div className="space-y-4">
                {activeTab === 0 && (
                  <div className="flex flex-col items-center pt-2">
                    <span className="text-[11px] font-medium tracking-wide uppercase text-emerald-400">
                      Modo Foco Profundo
                    </span>
                    <div className="relative my-4 flex items-center justify-center">
                      <div className="w-36 h-36 rounded-full border-4 border-slate-700/40 flex flex-col items-center justify-center relative">
                        <svg className="absolute inset-0 w-full h-full -rotate-90">
                          <circle
                            cx="72"
                            cy="72"
                            r="68"
                            stroke="currentColor"
                            strokeWidth="4"
                            className="text-emerald-500 transition-all duration-500"
                            strokeDasharray={427}
                            strokeDashoffset={timerRunning ? 180 : 80}
                            fill="transparent"
                          />
                        </svg>
                        <span className="text-3xl font-mono font-bold tracking-tighter">
                          {formatTime(timerSeconds)}
                        </span>
                        <span className="text-[10px] text-slate-400 mt-1">Bloco 1 de 4</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={toggleTimer}
                        className="px-4 py-2 rounded-full font-semibold text-xs flex items-center gap-1.5 text-slate-900 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-sm"
                      >
                        {timerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                        <span>{timerRunning ? 'Pausar' : 'Iniciar'}</span>
                      </button>
                      <button
                        onClick={resetTimer}
                        className={`p-2 rounded-full border transition-colors ${
                          isPhoneDark
                            ? 'border-slate-700 hover:bg-slate-800 text-slate-300'
                            : 'border-slate-300 hover:bg-slate-100 text-slate-700'
                        }`}
                        title="Reiniciar"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div
                      className={`w-full mt-5 p-2.5 rounded-xl border text-left text-xs ${
                        isPhoneDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-100/80 border-slate-200'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[11px] font-medium mb-1">
                        <span>Meta Diária de Foco</span>
                        <span className="text-emerald-400 font-mono">3h 45m / 5h</span>
                      </div>
                      <div className="w-full bg-slate-700/30 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full rounded-full" style={{ width: '75%' }} />
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 1 && (
                  <div className="space-y-3 pt-1">
                    <div className="text-xs font-semibold">Resumo da Semana</div>
                    <div className="grid grid-cols-7 gap-1.5 items-end h-24 pt-4 px-1">
                      {[
                        { day: 'S', h: 4.2 },
                        { day: 'T', h: 5.5 },
                        { day: 'Q', h: 6.0 },
                        { day: 'Q', h: 3.8 },
                        { day: 'S', h: 5.2 },
                        { day: 'S', h: 2.1 },
                        { day: 'D', h: 4.0 },
                      ].map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-1">
                          <div
                            className="w-full bg-emerald-500/80 rounded-t-xs transition-all hover:bg-emerald-400"
                            style={{ height: `${(item.h / 6.5) * 60}px` }}
                          />
                          <span className="text-[9px] font-mono opacity-70">{item.day}</span>
                        </div>
                      ))}
                    </div>
                    <div
                      className={`p-3 rounded-xl border text-xs space-y-1.5 ${
                        isPhoneDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200'
                      }`}
                    >
                      <div className="flex justify-between">
                        <span className="text-slate-400">Total acumulado:</span>
                        <span className="font-mono font-semibold">30h 48min</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Média diária:</span>
                        <span className="font-mono font-semibold">4h 24min</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Consistência:</span>
                        <span className="font-mono text-emerald-400 font-semibold">92%</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 2 && (
                  <div className="space-y-2 pt-1 text-xs">
                    <div className="font-semibold mb-2">Preferências de Ciclo</div>
                    {[
                      { title: 'Duração do Bloco', value: '25 minutos' },
                      { title: 'Pausa Curta', value: '5 minutos' },
                      { title: 'Pausa Longa', value: '15 minutos (a cada 4 blocos)' },
                      { title: 'Alarme Háptico', value: 'Suave / Pulso Duplo' },
                      { title: 'Ruído Branco Local', value: 'Chuva Suave (Offline)' },
                    ].map((pref, i) => (
                      <div
                        key={i}
                        className={`p-2.5 rounded-lg border flex items-center justify-between ${
                          isPhoneDark ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200'
                        }`}
                      >
                        <span className="text-slate-400">{pref.title}</span>
                        <span className="font-mono font-medium text-[11px]">{pref.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* SCREEN 2: PAUZEN VAULT */}
            {app.id === 'pauzen-vault' && (
              <div className="space-y-3 pt-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-sky-400 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Cofre Criptografado</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">AES-256</span>
                </div>

                <div className="space-y-2">
                  {[
                    { service: 'Google Account Dev', user: 'pedropauzen30@gmail.com', updated: 'Hoje' },
                    { service: 'Play Console Keystore', user: 'alias: pauzen-release', updated: 'Ontem' },
                    { service: 'GitHub Studio Org', user: 'pauzen-studio', updated: '3 dias atrás' },
                    { service: 'Proton Mail Business', user: 'contact@pauzen.dev', updated: '1 semana' },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-2.5 rounded-xl border flex items-center justify-between transition-colors ${
                        isPhoneDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-sky-500/15 text-sky-400 flex items-center justify-center">
                          <Key className="w-3.5 h-3.5" />
                        </div>
                        <div className="leading-tight">
                          <div className="text-xs font-semibold">{item.service}</div>
                          <div className="text-[10px] text-slate-400 truncate max-w-[130px] font-mono">
                            {item.user}
                          </div>
                        </div>
                      </div>
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                        {item.updated}
                      </span>
                    </div>
                  ))}
                </div>

                {/* 2FA Token Card */}
                <div
                  className={`p-3 rounded-xl border space-y-1.5 ${
                    isPhoneDark ? 'bg-sky-950/20 border-sky-900/50' : 'bg-sky-50 border-sky-200'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-sky-400 font-semibold">2FA Token Atual</span>
                    <span className="font-mono text-slate-400 text-[10px]">Expira em 18s</span>
                  </div>
                  <div className="font-mono text-2xl font-bold tracking-widest text-center py-1 text-sky-300">
                    842 190
                  </div>
                  <div className="w-full bg-sky-950/60 h-1 rounded-full overflow-hidden">
                    <div className="bg-sky-400 h-full rounded-full transition-all duration-1000" style={{ width: '60%' }} />
                  </div>
                </div>
              </div>
            )}

            {/* SCREEN 3: PAUZEN HORIZON (HABITS) */}
            {app.id === 'pauzen-horizon' && (
              <div className="space-y-3 pt-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-purple-400">Hábitos de Hoje</span>
                  <span className="text-[10px] font-mono text-slate-400">3 de 4 concluídos</span>
                </div>

                <div className="space-y-1.5">
                  {Object.entries(habitChecked).map(([habit, isDone]) => (
                    <div
                      key={habit}
                      onClick={() =>
                        setHabitChecked((prev) => ({ ...prev, [habit]: !prev[habit] }))
                      }
                      className={`p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        isDone
                          ? isPhoneDark
                            ? 'bg-purple-950/20 border-purple-800/40 text-slate-200'
                            : 'bg-purple-50 border-purple-200 text-slate-800'
                          : isPhoneDark
                          ? 'bg-slate-900/40 border-slate-800 text-slate-400'
                          : 'bg-white border-slate-200 text-slate-500'
                      }`}
                    >
                      <span className="text-xs font-medium">{habit}</span>
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors ${
                          isDone ? 'bg-purple-500 text-white' : 'border border-slate-600'
                        }`}
                      >
                        {isDone && <CheckCircle2 className="w-3 h-3" />}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Heatmap Preview */}
                <div
                  className={`p-2.5 rounded-xl border space-y-2 ${
                    isPhoneDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-medium text-slate-300">Mapa de Consistência</span>
                    <span className="font-mono text-[10px] text-purple-400">42 dias seguidos</span>
                  </div>
                  <div className="grid grid-cols-12 gap-1">
                    {Array.from({ length: 48 }).map((_, idx) => {
                      const level = (idx * 7) % 5;
                      const colors = [
                        isPhoneDark ? 'bg-slate-800/60' : 'bg-slate-200',
                        'bg-purple-950',
                        'bg-purple-800',
                        'bg-purple-600',
                        'bg-purple-400',
                      ];
                      return (
                        <div
                          key={idx}
                          className={`h-2.5 rounded-2xs ${colors[level]}`}
                          title={`Dia ${idx + 1}`}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* SCREEN 4: PAUZEN NETMETRIC */}
            {app.id === 'pauzen-netmetric' && (
              <div className="space-y-3 pt-1">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-amber-400 font-semibold">
                    <Activity className="w-3.5 h-3.5" />
                    <span>Monitor de Conexão</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">Conectado (Wi-Fi 6)</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div
                    className={`p-2.5 rounded-xl border ${
                      isPhoneDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
                    }`}
                  >
                    <div className="text-[10px] text-slate-400">Ping Médio</div>
                    <div className="text-xl font-mono font-bold text-amber-400">14 ms</div>
                    <div className="text-[9px] text-emerald-400 font-mono">Jitter: 1.2ms</div>
                  </div>
                  <div
                    className={`p-2.5 rounded-xl border ${
                      isPhoneDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
                    }`}
                  >
                    <div className="text-[10px] text-slate-400">Perda de Pacotes</div>
                    <div className="text-xl font-mono font-bold text-slate-200">0.00%</div>
                    <div className="text-[9px] text-slate-400 font-mono">DNS: 1.1.1.1</div>
                  </div>
                </div>

                <div
                  className={`p-3 rounded-xl border space-y-1.5 ${
                    isPhoneDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
                  }`}
                >
                  <div className="flex justify-between text-[11px] font-medium">
                    <span>Varredura de Banda Wi-Fi</span>
                    <span className="font-mono text-amber-400">5.8 GHz</span>
                  </div>
                  <div className="space-y-1 pt-1">
                    {[
                      { ssid: 'Pauzen_Studio_Lab_5G', ch: 'Canal 48', rssi: '-38 dBm' },
                      { ssid: 'Fiber_Mesh_Guest', ch: 'Canal 36', rssi: '-54 dBm' },
                      { ssid: 'Office_IOT_2.4G', ch: 'Canal 6', rssi: '-68 dBm' },
                    ].map((net, i) => (
                      <div key={i} className="flex items-center justify-between text-[10px] font-mono py-0.5">
                        <span className="truncate max-w-[120px]">{net.ssid}</span>
                        <span className="text-slate-400">{net.ch}</span>
                        <span className="text-emerald-400">{net.rssi}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* SCREEN 5: PAUZEN LEDGER */}
            {app.id === 'pauzen-ledger' && (
              <div className="space-y-3 pt-1">
                <div
                  className={`p-3 rounded-xl border ${
                    isPhoneDark ? 'bg-teal-950/20 border-teal-800/40' : 'bg-teal-50 border-teal-200'
                  }`}
                >
                  <div className="text-[10px] text-slate-400">Saldo Restante do Mês</div>
                  <div className="text-2xl font-mono font-bold text-teal-300">R$ 3.420,50</div>
                  <div className="text-[10px] text-slate-400 mt-1 flex justify-between">
                    <span>Orçamento: R$ 5.000,00</span>
                    <span className="text-teal-400 font-mono">68% livre</span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="text-xs font-semibold">Lançamentos Recentes</div>
                  {[
                    { cat: 'Hospedagem & Servidores', val: '- R$ 189,00', time: '14:20' },
                    { cat: 'Google Play Console', val: '- R$ 125,00', time: 'Ontem' },
                    { cat: 'Café & Coworking', val: '- R$ 34,50', time: 'Ontem' },
                  ].map((exp, idx) => (
                    <div
                      key={idx}
                      className={`p-2.5 rounded-xl border flex items-center justify-between text-xs ${
                        isPhoneDark ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200'
                      }`}
                    >
                      <span className="font-medium">{exp.cat}</span>
                      <div className="text-right font-mono">
                        <div className="font-semibold text-rose-400">{exp.val}</div>
                        <div className="text-[9px] text-slate-400">{exp.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Android In-App Navigation Tabs */}
          <div
            className={`shrink-0 px-2 py-2 border-t flex items-center justify-around text-[10px] font-medium ${
              isPhoneDark ? 'border-slate-800 bg-slate-900/70' : 'border-slate-200 bg-slate-100'
            }`}
          >
            {app.screens.map((screen, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  activeTab === idx
                    ? 'font-semibold text-slate-100 bg-slate-800 shadow-xs'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                style={
                  activeTab === idx
                    ? {
                        color: app.accentColor,
                        backgroundColor: `${app.accentColor}18`,
                      }
                    : {}
                }
              >
                {screen.title}
              </button>
            ))}
          </div>

          {/* Android 15 Gesture Bar */}
          <div className="shrink-0 h-4 flex items-center justify-center pb-1">
            <div className="w-24 h-1 rounded-full bg-slate-500/60" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneSimulator;
