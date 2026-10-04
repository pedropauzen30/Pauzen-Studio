import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MessageSquare, Bug, Sparkles, Building2 } from 'lucide-react';
import { APPS_DATA } from '../data/apps';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Geral / Parceria');
  const [selectedApp, setSelectedApp] = useState('Todos / Estúdio');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#090A0F] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Studio Inquiries Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                Canal Oficial de Contato
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Fale com a Pauzen Studio
              </h2>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                Tem uma sugestão de recurso, relatório de erro em nossos aplicativos ou interesse
                em parcerias de distribuição? Entre em contato diretamente com o desenvolvedor.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                <div className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  <span>E-mail Direto do Desenvolvedor</span>
                </div>
                <a
                  href="mailto:pedropauzen30@gmail.com"
                  className="text-base font-mono font-semibold text-white hover:text-emerald-400 transition-colors block"
                >
                  pedropauzen30@gmail.com
                </a>
                <span className="text-[11px] text-slate-500 block">
                  Tempo médio de resposta: menos de 24 horas úteis.
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-900/30 border border-slate-800/80 space-y-1">
                  <div className="font-semibold text-slate-200 flex items-center gap-1.5">
                    <Bug className="w-3.5 h-3.5 text-amber-400" />
                    <span>Relatórios de Bug</span>
                  </div>
                  <p className="text-slate-400 text-[11px]">
                    Envie logs de travamento e modelo do aparelho para correção rápida.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/30 border border-slate-800/80 space-y-1">
                  <div className="font-semibold text-slate-200 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                    <span>Novas Ideias de App</span>
                  </div>
                  <p className="text-slate-400 text-[11px]">
                    Estamos sempre prototipando novos utilitários para Android.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Mensagem Enviada com Sucesso!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Obrigado pelo contato, <strong className="text-white">{name || 'Desenvolvedor'}</strong>!
                    Retornaremos para o endereço{' '}
                    <strong className="text-emerald-400 font-mono">{email}</strong> em breve.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="mt-4 px-4 py-2 rounded-lg text-xs font-semibold text-slate-900 bg-white hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Seu Nome *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Nome ou Organização"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/90 border border-slate-800 text-slate-200 text-xs focus:outline-hidden focus:border-emerald-500 placeholder:text-slate-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Seu E-mail *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="seu.email@exemplo.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/90 border border-slate-800 text-slate-200 text-xs focus:outline-hidden focus:border-emerald-500 placeholder:text-slate-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Assunto
                      </label>
                      <select
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/90 border border-slate-800 text-slate-200 text-xs focus:outline-hidden focus:border-emerald-500 transition-colors"
                      >
                        <option value="Geral / Parceria">Geral / Parceria</option>
                        <option value="Relatório de Bug">Relatório de Bug / Falha Técnica</option>
                        <option value="Sugestão de Recurso">Sugestão de Recurso</option>
                        <option value="Programa Closed Beta">Dúvida sobre Closed Beta</option>
                        <option value="Imprensa / Press Kit">Imprensa / Review de App</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Aplicativo Relacionado
                      </label>
                      <select
                        value={selectedApp}
                        onChange={(e) => setSelectedApp(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/90 border border-slate-800 text-slate-200 text-xs focus:outline-hidden focus:border-emerald-500 transition-colors"
                      >
                        <option value="Todos / Estúdio">Geral / Toda a Linha</option>
                        {APPS_DATA.map((a) => (
                          <option key={a.id} value={a.name}>
                            {a.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Sua Mensagem *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Descreva detalhes, passos para reproduzir o problema ou proposta de colaboração..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/90 border border-slate-800 text-slate-200 text-xs focus:outline-hidden focus:border-emerald-500 placeholder:text-slate-600 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl font-semibold text-xs text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Enviar Mensagem para Pauzen Studio</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
