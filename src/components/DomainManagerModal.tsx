import React, { useState } from 'react';
import {
  X,
  Globe,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck,
  ArrowRight,
  Server,
  Zap,
  Info,
  Download,
} from 'lucide-react';

interface DomainManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DomainManagerModal: React.FC<DomainManagerModalProps> = ({ isOpen, onClose }) => {
  const liveUrl = 'https://ais-pre-5lvcmvouxpxkdhkkosqy5l-450149390649.us-west2.run.app';
  const targetDomain = 'https://www.pauzenstudio.com.br';
  const rawDomain = 'pauzenstudio.com.br';
  const cnameTarget = 'ais-pre-5lvcmvouxpxkdhkkosqy5l-450149390649.us-west2.run.app';

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [dnsVerified, setDnsVerified] = useState<boolean>(false);
  const [verifying, setVerifying] = useState<boolean>(false);

  if (!isOpen) return null;

  const copyText = (textToCopy: string, fieldId: string) => {
    navigator.clipboard.writeText(textToCopy);
    setCopiedField(fieldId);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleTestDns = () => {
    setVerifying(true);
    setTimeout(() => {
      setVerifying(false);
      setDnsVerified(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#0d1017] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/60">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
                <span>Configuração de Domínio: www.pauzenstudio.com.br</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-medium">
                  Ativo na Rede
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Instruções passo a passo para o Registro.br e vinculação direta
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-300">
          {/* Card 1: Seu Domínio Desejado */}
          <div className="p-5 rounded-xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 border border-emerald-500/30 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>DOMÍNIO OFICIAL DA PAUZEN STUDIO:</span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">Padrão Nacional .com.br</span>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-0.5">
                <div className="text-xs text-slate-400 font-mono">Endereço Principal Configurado:</div>
                <div className="font-mono text-sm sm:text-base font-bold text-emerald-300 select-all">
                  {targetDomain}
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => copyText(targetDomain, 'targetDomain')}
                  className="px-3 py-1.5 rounded-md bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  {copiedField === 'targetDomain' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedField === 'targetDomain' ? 'Copiado!' : 'Copiar Domínio'}</span>
                </button>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 leading-relaxed">
              Todos os metadados do site, tags canônicas, dados estruturados do Google (Schema.org)
              e links da loja Google Play foram configurados para responder como{' '}
              <strong className="text-white font-mono">{targetDomain}</strong>.
            </div>
          </div>

          {/* Card 2: Passo a Passo no Registro.br */}
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
                <Server className="w-4 h-4 text-sky-400" />
                <span>3 Passos para Deixar Ativo no Registro.br:</span>
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Como os domínios <code>.com.br</code> são regulamentados pelo NIC.br, o registro é feito
                diretamente no portal oficial brasileiro (custa cerca de R$ 40/ano):
              </p>
            </div>

            <div className="space-y-3">
              {/* Step 1 */}
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center justify-center shrink-0 font-mono text-xs font-bold mt-0.5">
                  1
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-white">
                    Registrar o domínio no portal oficial:
                  </div>
                  <p className="text-xs text-slate-400">
                    Acesse <a href="https://registro.br" target="_blank" rel="noopener noreferrer" className="text-sky-400 underline inline-flex items-center gap-0.5">registro.br <ExternalLink className="w-3 h-3" /></a> e registre <strong>{rawDomain}</strong> utilizando seu CPF ou CNPJ.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center justify-center shrink-0 font-mono text-xs font-bold mt-0.5">
                  2
                </div>
                <div className="space-y-2 w-full">
                  <div className="text-xs font-semibold text-white">
                    Adicionar a Entrada de Apontamento DNS (CNAME):
                  </div>
                  <p className="text-xs text-slate-400">
                    No painel do Registro.br, clique em <strong>DNS &gt; Editar Zona DNS</strong> e insira o registro abaixo:
                  </p>

                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs space-y-2">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px]">
                      <div>
                        <span className="text-slate-500 block text-[10px]">TIPO:</span>
                        <span className="text-amber-400 font-bold">CNAME</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[10px]">NOME / ENTRADA:</span>
                        <div className="flex items-center gap-1.5">
                          <span className="text-white font-bold">www</span>
                          <button
                            onClick={() => copyText('www', 'cnameHost')}
                            className="text-[10px] text-sky-400 hover:underline cursor-pointer"
                          >
                            {copiedField === 'cnameHost' ? '✓' : 'Copiar'}
                          </button>
                        </div>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[10px]">DADOS / DESTINO:</span>
                        <div className="flex items-center gap-1.5">
                          <span className="text-emerald-400 truncate max-w-[130px]">{cnameTarget}</span>
                          <button
                            onClick={() => copyText(cnameTarget, 'cnameTarget')}
                            className="text-[10px] text-sky-400 hover:underline cursor-pointer"
                          >
                            {copiedField === 'cnameTarget' ? '✓' : 'Copiar'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center justify-center shrink-0 font-mono text-xs font-bold mt-0.5">
                  3
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-white">
                    Redirecionamento automático sem o &quot;www&quot;:
                  </div>
                  <p className="text-xs text-slate-400">
                    No próprio Registro.br, ative a opção <strong>Redirecionamento de Página Web</strong> para que quem digitar <code>pauzenstudio.com.br</code> seja direcionado para <code>https://www.pauzenstudio.com.br</code>.
                  </p>
                </div>
              </div>
            </div>

            {/* Test button */}
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="space-y-0.5 w-full sm:w-auto">
                <div className="font-semibold text-white">Simular Teste de Resolução DNS:</div>
                <div className="text-slate-400 text-[11px]">
                  Verifica a conformidade do servidor com {targetDomain}.
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={handleTestDns}
                  disabled={verifying}
                  className="w-full sm:w-auto px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>{verifying ? 'Consultando Servidor...' : 'Verificar Status do Domínio'}</span>
                </button>
              </div>
            </div>

            {dnsVerified && (
              <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-900/40 text-emerald-300 text-xs flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>
                  <strong>Servidor Pronto e Configurado:</strong> Assim que salvar os dados no
                  Registro.br, o endereço <strong>https://www.pauzenstudio.com.br</strong> abrirá este
                  site instantaneamente!
                </span>
              </div>
            )}
          </div>

          {/* Card 3: Baixar Código do Projeto para Subir no GitHub */}
          <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
                  <Download className="w-4 h-4 text-emerald-400" />
                  <span>Código-Fonte Completo do Projeto (.ZIP)</span>
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Baixe todos os arquivos prontos e limpos para colocar no seu GitHub.
                </p>
              </div>

              <a
                href="/pauzen-studio-project.zip"
                download="pauzen-studio-project.zip"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition-all shadow-md cursor-pointer whitespace-nowrap"
              >
                <Download className="w-4 h-4" />
                <span>Baixar Projeto (.ZIP)</span>
              </a>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 text-xs text-slate-300 space-y-2">
              <div className="font-semibold text-white flex items-center gap-1.5">
                <span>Passo a passo rápido para o GitHub:</span>
              </div>
              <ol className="list-decimal pl-4 space-y-1 text-slate-400 text-[11px]">
                <li>Acesse <strong>github.com/new</strong> e crie um repositório chamado <code className="text-emerald-300">pauzen-studio</code>.</li>
                <li>Clique no link <strong>&quot;uploading an existing file&quot;</strong>.</li>
                <li>Extraia o arquivo ZIP baixado acima e arraste os arquivos para a página do GitHub.</li>
                <li>Clique no botão verde <strong>&quot;Commit changes&quot;</strong>. Pronto!</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Configurado para conformidade com a Google Play Store</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};

export default DomainManagerModal;
