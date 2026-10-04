import React, { useState } from 'react';
import { X, Shield, Lock, FileText, CheckCircle2, Mail, ExternalLink } from 'lucide-react';
import { PauzenLogo } from './PauzenLogo';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CompliancePolicyModal: React.FC<PolicyModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'datasafety'>('privacy');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#0d1017] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/60">
          <div className="flex items-center gap-3">
            <PauzenLogo size="sm" variant="mark-only" />
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">
                Pauzen Studio · Central de Conformidade & Políticas
              </h3>
              <p className="text-xs text-slate-400">
                Diretrizes de Privacidade e Termos de Uso para a Google Play Store
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="px-6 pt-3 border-b border-slate-800/80 flex items-center gap-2 bg-slate-950/40 text-xs">
          {[
            { id: 'privacy', label: 'Política de Privacidade Global' },
            { id: 'datasafety', label: 'Declaração Google Play Data Safety' },
            { id: 'terms', label: 'Termos de Serviço & Licença' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-2.5 px-3 font-medium transition-colors border-b-2 cursor-pointer ${
                activeTab === tab.id
                  ? 'border-emerald-400 text-white font-semibold'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Body / Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          {activeTab === 'privacy' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/40 text-emerald-300 text-xs flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  <strong>Compromisso de Privacidade Nativa:</strong> Os aplicativos desenvolvidos
                  pela <strong>Pauzen Studio</strong> operam segundo a arquitetura <em>offline-first</em>.
                  Seus dados não são enviados a servidores externos, nem comercializados com
                  terceiros.
                </span>
              </div>

              <div>
                <h4 className="text-base font-semibold text-white mb-1">
                  1. Identificação do Desenvolvedor
                </h4>
                <p>
                  Esta Política de Privacidade se aplica a todos os aplicativos e serviços
                  publicados na Google Play Store sob o nome de desenvolvedor{' '}
                  <strong>Pauzen Studio</strong>, representado pelo engenheiro responsável (contato:
                  <code className="text-emerald-400 ml-1">pedropauzen30@gmail.com</code>).
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-white mb-1">
                  2. Coleta e Tratamento de Dados
                </h4>
                <p>
                  Nossos aplicativos (incluindo <em>Pauzen Chrono</em>, <em>Pauzen Vault</em>,{' '}
                  <em>Pauzen Horizon</em>, <em>Pauzen NetMetric</em> e <em>Pauzen Ledger</em>) foram
                  projetados com a premissa de minimização de dados:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-400">
                  <li>
                    <strong>Armazenamento Local:</strong> Todas as informações inseridas pelo usuário
                    (como sessões de foco, notas criptografadas, registros de despesas e hábitos) são
                    gravadas exclusivamente na memória interna segura do próprio aparelho (via
                    SQLite Room / EncryptedSharedPreferences).
                  </li>
                  <li>
                    <strong>Ausência de Rastreadores de Terceiros:</strong> Não integramos SDKs de
                    redes de publicidade intrusivas ou ferramentas de perfilamento comportamental.
                  </li>
                  <li>
                    <strong>Diagnósticos Opcionais da Loja:</strong> Caso você opte pelas
                    configurações padrão do Android, o Google Play Console pode coletar relatórios
                    anônimos de travamento (ANRs e crash logs) agregados para fins de correção de bugs.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-base font-semibold text-white mb-1">
                  3. Permissões do Sistema Operacional
                </h4>
                <p>
                  Cada permissão solicitada no <code>AndroidManifest.xml</code> é estritamente
                  justificada pelo funcionamento da ferramenta:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-400">
                  <li>
                    <code>POST_NOTIFICATIONS</code>: Para alertar sobre o término de blocos de foco
                    ou lembretes de hábitos agendados pelo usuário.
                  </li>
                  <li>
                    <code>USE_BIOMETRIC</code>: Para destravar localmente o cofre (Pauzen Vault)
                    através da biometria nativa do hardware.
                  </li>
                  <li>
                    <code>ACCESS_FINE_LOCATION</code>: Exigido pela API do Android especificamente
                    para medição e varredura de sinais Wi-Fi locais (Pauzen NetMetric). Nenhuma
                    coordenada geográfica é transmitida pela internet.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-base font-semibold text-white mb-1">
                  4. Exclusão e Soberania dos Dados
                </h4>
                <p>
                  Como não mantemos bancos de dados em nuvem com seus registros, a exclusão dos seus
                  dados ocorre instantaneamente:
                </p>
                <p className="mt-1 text-slate-400">
                  - Ao desinstalar o aplicativo ou limpar o cache/dados através das Configurações do
                  Android, todas as chaves e dados locais são permanentemente removidos.
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-white mb-1">
                  5. Contato do Encarregado de Privacidade
                </h4>
                <p>
                  Dúvidas sobre conformidade, LGPD, GDPR ou relatórios de segurança podem ser
                  enviados diretamente para:{' '}
                  <strong className="text-white">pedropauzen30@gmail.com</strong>.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'datasafety' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-base font-semibold text-white mb-1">
                  Declaração Oficial Google Play Data Safety
                </h4>
                <p className="text-slate-400">
                  Em conformidade com a seção obrigatória de Segurança de Dados da Google Play Store:
                </p>
              </div>

              <div className="border border-slate-800 rounded-xl overflow-hidden font-mono text-xs">
                <table className="w-full text-left">
                  <thead className="bg-slate-900 border-b border-slate-800 text-slate-300">
                    <tr>
                      <th className="p-3">Categoria</th>
                      <th className="p-3">Coletado</th>
                      <th className="p-3">Compartilhado</th>
                      <th className="p-3">Criptografado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80 text-slate-400">
                    <tr>
                      <td className="p-3 font-semibold text-white">Localização Pessoal</td>
                      <td className="p-3 text-rose-400">Não</td>
                      <td className="p-3 text-rose-400">Não</td>
                      <td className="p-3 text-emerald-400">N/A</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-white">Identificadores Pessoais</td>
                      <td className="p-3 text-rose-400">Não</td>
                      <td className="p-3 text-rose-400">Não</td>
                      <td className="p-3 text-emerald-400">N/A</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-white">Informações Financeiras</td>
                      <td className="p-3 text-rose-400">Não</td>
                      <td className="p-3 text-rose-400">Não</td>
                      <td className="p-3 text-emerald-400">N/A</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-white">Dados do Cofre (Vault)</td>
                      <td className="p-3 text-slate-300">Salvo no Aparelho</td>
                      <td className="p-3 text-rose-400">Não</td>
                      <td className="p-3 text-emerald-400">AES-256 no Repouso</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-white">Diagnósticos de Crash</td>
                      <td className="p-3 text-slate-300">Apenas via Play Console</td>
                      <td className="p-3 text-rose-400">Não compartilhado</td>
                      <td className="p-3 text-emerald-400">Sim (HTTPS)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="text-xs text-slate-400 space-y-1">
                <p>
                  ✓ <strong>Mecanismo de Exclusão de Conta:</strong> Como os apps não requerem criação
                  de conta para funcionar, não há credenciais retidas na nuvem.
                </p>
                <p>
                  ✓ <strong>Público-Alvo:</strong> Adequado para público geral. Aplicativos em total
                  conformidade com a política de famílias e menores do Google Play.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-base font-semibold text-white mb-1">
                  Termos de Uso e Licença de Software
                </h4>
                <p>
                  Ao baixar, instalar ou utilizar qualquer aplicativo do desenvolvedor{' '}
                  <strong>Pauzen Studio</strong> através da Google Play Store, você concorda com os
                  seguintes termos:
                </p>
              </div>

              <div className="space-y-3 text-slate-400">
                <p>
                  <strong className="text-white">1. Licença de Uso:</strong> É concedida a você uma
                  licença pessoal, não exclusiva, intransferível e revogável para utilizar o
                  software em seus dispositivos Android compatíveis.
                </p>
                <p>
                  <strong className="text-white">2. Responsabilidade do Usuário no Cofre:</strong> Em
                  aplicativos de criptografia (como <em>Pauzen Vault</em>), a perda da chave mestre ou
                  senha de descriptografia impossibilita a recuperação dos dados, uma vez que o
                  desenvolvedor não possui acesso ou cópia de segurança de chaves.
                </p>
                <p>
                  <strong className="text-white">3. Atualizações e Compatibilidade:</strong> O
                  desenvolvedor empenha-se em manter os aplicativos atualizados para as versões mais
                  recentes do Android (incluindo Android 15), aplicando patches de desempenho e
                  segurança regularmente.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-slate-400" />
            <span>pedropauzen30@gmail.com</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompliancePolicyModal;
