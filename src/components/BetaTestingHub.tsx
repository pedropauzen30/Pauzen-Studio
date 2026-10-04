import React, { useState } from 'react';
import {
  Users,
  CheckCircle,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Send,
  AlertCircle,
  Copy,
  Check,
} from 'lucide-react';
import { APPS_DATA } from '../data/apps';

interface BetaTestingHubProps {
  initialSelectedApp?: string;
}

export const BetaTestingHub: React.FC<BetaTestingHubProps> = ({
  initialSelectedApp = 'pauzen-vault',
}) => {
  const [selectedAppId, setSelectedAppId] = useState<string>(initialSelectedApp);
  const [email, setEmail] = useState<string>('');
  const [deviceModel, setDeviceModel] = useState<string>('');
  const [androidVersion, setAndroidVersion] = useState<string>('Android 14 / 15');
  const [feedbackAgreement, setFeedbackAgreement] = useState<boolean>(true);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [copiedGroup, setCopiedGroup] = useState<boolean>(false);

  const betaApps = APPS_DATA.filter((a) => a.stage === 'closed_beta' || a.stage === 'in_development');
  const activeApp = APPS_DATA.find((a) => a.id === selectedAppId) || betaApps[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubmitted(true);
  };

  const copyGoogleGroupLink = () => {
    navigator.clipboard.writeText('pauzen-studio-testers@googlegroups.com');
    setCopiedGroup(true);
    setTimeout(() => setCopiedGroup(false), 2500);
  };

  return (
    <section id="beta-program" className="py-20 relative overflow-hidden">
      {/* Background illumination */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] bg-slate-800/20 blur-[130px] -z-10 rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Context, Google Play Testing Rules & Process (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider">
                <Users className="w-4 h-4" />
                <span>Google Play Closed Testing</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Programa Oficial de Testadores Beta
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                De acordo com os requisitos da <strong>Google Play Store</strong>, novos aplicativos
                passam por uma etapa rigorosa de testes fechados (Closed Testing) com um grupo
                mínimo de 20 testadores ativos por 14 dias contínuos antes da publicação em
                produção.
              </p>
            </div>

            {/* Steps & Milestones */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center justify-center shrink-0 font-mono text-xs font-bold mt-0.5">
                  01
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Inscrição do E-mail Google</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Adicionamos sua conta à lista de permissões da Google Play Console ou ao Google
                    Group oficial de testadores.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center justify-center shrink-0 font-mono text-xs font-bold mt-0.5">
                  02
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Instalação Direta pela Play Store</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Você recebe o link exclusivo da Play Store (`play.google.com/apps/testing/...`)
                    com atualizações automáticas e seguras.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center justify-center shrink-0 font-mono text-xs font-bold mt-0.5">
                  03
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Uso Ativo por 14 Dias</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Abra o app periodicamente no seu dispositivo para validar estabilidade,
                    consumo de energia e reportar eventuais falhas.
                  </p>
                </div>
              </div>
            </div>

            {/* Google Group Copy Helper */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs flex items-center justify-between">
              <div>
                <div className="text-slate-400 font-medium">Google Group de Testes:</div>
                <div className="font-mono text-slate-200 mt-0.5">pauzen-studio-testers@googlegroups.com</div>
              </div>
              <button
                onClick={copyGoogleGroupLink}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
              >
                {copiedGroup ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedGroup ? 'Copiado!' : 'Copiar'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Registration Form (6 cols) */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl relative">
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Inscrição Confirmada com Sucesso!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Registramos seu e-mail <strong className="text-white font-mono">{email}</strong>{' '}
                    para o ciclo de testes fechados do aplicativo{' '}
                    <strong className="text-emerald-400">{activeApp.name}</strong>.
                  </p>
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 text-left space-y-2">
                    <div className="font-semibold text-slate-200">Próximos passos:</div>
                    <p>
                      1. Verifique sua caixa de entrada (e spam) pelo convite oficial da Google Play Console.
                    </p>
                    <p>
                      2. Clique em <em>&quot;Aceitar convite de teste&quot;</em> e baixe o app diretamente pela Play Store.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setEmail('');
                    }}
                    className="px-4 py-2 rounded-lg text-xs font-medium text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
                  >
                    Cadastrar outro participante / dispositivo
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      Inscreva-se como Testador Google Play
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Acesso antecipado aos recursos e participação direta no desenvolvimento.
                    </p>
                  </div>

                  {/* App Selection for Beta */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Selecione o Aplicativo para Testar
                    </label>
                    <select
                      value={selectedAppId}
                      onChange={(e) => setSelectedAppId(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/90 border border-slate-800 text-slate-200 text-xs focus:outline-hidden focus:border-sky-500 transition-colors"
                    >
                      {APPS_DATA.map((app) => (
                        <option key={app.id} value={app.id}>
                          {app.name} ({app.statusLabel})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Google Play Account Email */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      E-mail da sua conta Google Play (Gmail) *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="seu.email.google@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/90 border border-slate-800 text-slate-200 text-xs focus:outline-hidden focus:border-sky-500 placeholder:text-slate-600 transition-colors"
                    />
                    <span className="text-[10px] text-slate-500 mt-1 block">
                      O e-mail deve ser o mesmo utilizado na loja Google Play do seu smartphone.
                    </span>
                  </div>

                  {/* Device and Android version */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Modelo do Aparelho
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: Pixel 8, Galaxy S24, Motorola Edge"
                        value={deviceModel}
                        onChange={(e) => setDeviceModel(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/90 border border-slate-800 text-slate-200 text-xs focus:outline-hidden focus:border-sky-500 placeholder:text-slate-600 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Versão do Android
                      </label>
                      <select
                        value={androidVersion}
                        onChange={(e) => setAndroidVersion(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/90 border border-slate-800 text-slate-200 text-xs focus:outline-hidden focus:border-sky-500 transition-colors"
                      >
                        <option value="Android 15">Android 15 (Mais recente)</option>
                        <option value="Android 14">Android 14</option>
                        <option value="Android 13">Android 13</option>
                        <option value="Android 12">Android 12</option>
                        <option value="Android 11">Android 11</option>
                        <option value="Android 10">Android 10</option>
                      </select>
                    </div>
                  </div>

                  {/* Feedback Agreement */}
                  <div className="pt-2">
                    <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-300 select-none">
                      <input
                        type="checkbox"
                        checked={feedbackAgreement}
                        onChange={(e) => setFeedbackAgreement(e.target.checked)}
                        className="mt-0.5 rounded border-slate-700 text-sky-500 focus:ring-0 focus:ring-offset-0 bg-slate-950"
                      />
                      <span className="text-[11px] leading-relaxed text-slate-400">
                        Concordo em instalar o aplicativo pela Play Store e manter instalado durante
                        o período mínimo de 14 dias para validação de métricas de estabilidade.
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={!email || !feedbackAgreement}
                    className="w-full py-3 px-4 rounded-xl font-semibold text-xs text-slate-950 bg-white hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Solicitar Convite de Testador</span>
                  </button>

                  <div className="text-[10px] text-slate-500 text-center flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    <span>Seu e-mail será utilizado exclusivamente para a lista do Google Play Console.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BetaTestingHub;
