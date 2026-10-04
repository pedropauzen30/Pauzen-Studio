export interface AppItem {
  id: string;
  name: string;
  tagline: string;
  category: string;
  stage: 'production' | 'closed_beta' | 'in_development';
  statusLabel: string;
  packageId: string;
  version: string;
  targetSdk: string;
  minSdk: string;
  fileSize: string;
  rating?: number;
  reviewCount?: string;
  downloads?: string;
  privacyBadge: string;
  accentColor: string;
  accentBg: string;
  gradient: string;
  features: string[];
  permissions: string[];
  techStack: string[];
  description: string;
  playStoreUrl?: string;
  betaEnrollUrl?: string;
  screens: {
    title: string;
    subtitle: string;
    type: 'timer' | 'vault' | 'habits' | 'network' | 'ledger' | 'canvas';
  }[];
}

export const APPS_DATA: AppItem[] = [
  {
    id: 'pauzen-chrono',
    name: 'Pauzen Chrono',
    tagline: 'Gestão de tempo profundo, técnica Pomodoro e rotinas sem distrações',
    category: 'Produtividade & Foco',
    stage: 'production',
    statusLabel: 'Disponível na Play Store',
    packageId: 'com.pauzenstudio.chrono',
    version: 'v1.4.2',
    targetSdk: 'Android 15 (API 35)',
    minSdk: 'Android 10 (API 29)',
    fileSize: '7.8 MB',
    rating: 4.9,
    reviewCount: '1.240',
    downloads: '15.000+',
    privacyBadge: '100% Offline · Sem Rastreamento',
    accentColor: '#10B981', // emerald-500
    accentBg: 'bg-emerald-500/10',
    gradient: 'from-emerald-500 to-teal-700',
    features: [
      'Ciclos adaptativos de foco (Pomodoro 25/50m, 90m ultradiano ou personalizado)',
      'Design nativo Material You com paleta dinâmica baseada no papel de parede do sistema',
      'Modo Foco Profundo com bloqueador de notificações durante a sessão',
      'Estatísticas e relatórios em gráficos vetoriais diários, semanais e anuais',
      'Backup e restauração em formato aberto JSON sem necessidade de criar conta',
    ],
    permissions: [
      'android.permission.POST_NOTIFICATIONS (para alertas de fim de bloco)',
      'android.permission.VIBRATE (feedback tátil discreto)',
    ],
    techStack: ['Kotlin 2.0', 'Jetpack Compose', 'Room DB', 'Coroutines / Flow', 'Material 3'],
    description:
      'Projetado para quem valoriza clareza mental e concentração. Pauzen Chrono elimina métricas de vaidade e foca na execução ininterrupta. Não requer login, não envia telemetria e consome menos de 0.5% de bateria por ciclo.',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.pauzenstudio.chrono',
    screens: [
      { title: 'Sessão de Foco', subtitle: 'Temporizador minimalista com anel de progresso', type: 'timer' },
      { title: 'Métricas Semanais', subtitle: 'Horas ativas e consistência por disciplina', type: 'timer' },
      { title: 'Configurações de Bloco', subtitle: 'Intervalos customizados e sons binaurais locais', type: 'timer' },
    ],
  },
  {
    id: 'pauzen-vault',
    name: 'Pauzen Vault',
    tagline: 'Cofre offline de senhas, notas criptografadas e códigos 2FA',
    category: 'Segurança & Utilidades',
    stage: 'closed_beta',
    statusLabel: 'Closed Beta (20 Testers)',
    packageId: 'com.pauzenstudio.vault',
    version: 'v0.9.4-rc',
    targetSdk: 'Android 15 (API 35)',
    minSdk: 'Android 11 (API 30)',
    fileSize: '9.2 MB',
    rating: 4.9,
    reviewCount: 'Fase de Testes',
    downloads: 'Acesso Restrito',
    privacyBadge: 'AES-256-GCM · Zero-Knowledge',
    accentColor: '#38BDF8', // sky-400
    accentBg: 'bg-sky-500/10',
    gradient: 'from-sky-500 to-blue-700',
    features: [
      'Criptografia de ponta a ponta no dispositivo com chave mestre derivada via Argon2id',
      'Desbloqueio biométrico com BiometricPrompt nativo e fallback de PIN numérico com decoy',
      'Gerador de senhas de alta entropia com verificação de complexidade offline',
      'Autenticador 2FA integrado (TOTP compatível com RFC 6238)',
      'Exportação e importação de backups cifrados protegidos por senha única',
    ],
    permissions: [
      'android.permission.USE_BIOMETRIC (desbloqueio por impressão digital / face)',
    ],
    techStack: ['Android KeyStore API', 'Jetpack Crypto', 'SQLCipher', 'Jetpack Compose'],
    description:
      'O cofre definitivo para quem não aceita confiar suas credenciais mais sensíveis aos servidores de grandes corporações. Tudo é processado localmente na memória protegida do chip do seu smartphone.',
    betaEnrollUrl: '#beta-program',
    screens: [
      { title: 'Cofre Principal', subtitle: 'Credenciais organizadas por categorias seguras', type: 'vault' },
      { title: 'Gerador 2FA', subtitle: 'Tokens de 6 dígitos com rotação sincronizada', type: 'vault' },
      { title: 'Nota Segura', subtitle: 'Editor de texto cifrado com auto-bloqueio', type: 'vault' },
    ],
  },
  {
    id: 'pauzen-horizon',
    name: 'Pauzen Horizon',
    tagline: 'Rastreador de hábitos contínuos com mapa de calor e widgets de tela inicial',
    category: 'Estilo de Vida & Hábitos',
    stage: 'closed_beta',
    statusLabel: 'Closed Beta Ativo',
    packageId: 'com.pauzenstudio.horizon',
    version: 'v0.8.1',
    targetSdk: 'Android 15 (API 35)',
    minSdk: 'Android 10 (API 29)',
    fileSize: '6.4 MB',
    downloads: 'Testadores Play Store',
    privacyBadge: 'Sem Anúncios · Dados no Aparelho',
    accentColor: '#A855F7', // purple-500
    accentBg: 'bg-purple-500/10',
    gradient: 'from-purple-500 to-indigo-700',
    features: [
      'Visualização por mapa de calor anual estilo contribuição de código',
      'Widgets personalizáveis para tela inicial com suporte a temas claros e escuros',
      'Notificações suaves e personalizadas que respeitam o modo não perturbe',
      'Metas flexíveis: diárias, X vezes por semana ou contagem cumulativa',
      'Sem gamificação boba ou pressão psicológica: foco no progresso sustentável',
    ],
    permissions: [
      'android.permission.POST_NOTIFICATIONS (lembretes diários)',
    ],
    techStack: ['Jetpack Compose Glance (Widgets)', 'DataStore Preferences', 'Room', 'Kotlin Coroutines'],
    description:
      'Construa hábitos duradouros através de pequenos passos consistentes. Visual elegante com visão ampla do ano e integração nativa com o sistema Android através de widgets modernos.',
    betaEnrollUrl: '#beta-program',
    screens: [
      { title: 'Mural de Hábitos', subtitle: 'Grade de hábitos ativos e sequências', type: 'habits' },
      { title: 'Mapa de Calor', subtitle: 'Consistência anual em grade interativa', type: 'habits' },
      { title: 'Resumo Mensal', subtitle: 'Porcentagem de aderência e ritmo', type: 'habits' },
    ],
  },
  {
    id: 'pauzen-netmetric',
    name: 'Pauzen NetMetric',
    tagline: 'Diagnóstico de rede móvel, Wi-Fi 6/7, análise de ping e latência DNS',
    category: 'Ferramentas de Sistema',
    stage: 'in_development',
    statusLabel: 'Em Breve na Play Store',
    packageId: 'com.pauzenstudio.netmetric',
    version: 'v0.5.0-alpha',
    targetSdk: 'Android 15 (API 35)',
    minSdk: 'Android 11 (API 30)',
    fileSize: '5.1 MB',
    downloads: 'Em Desenvolvimento',
    privacyBadge: 'Sem Coleta de Telemetria',
    accentColor: '#F59E0B', // amber-500
    accentBg: 'bg-amber-500/10',
    gradient: 'from-amber-500 to-orange-700',
    features: [
      'Medição em tempo real de latência, jitter, perda de pacotes e DNS lookup',
      'Mapeamento de espectro de canais Wi-Fi 2.4 GHz, 5 GHz e 6 GHz (Wi-Fi 6E/7)',
      'Detector de gargalos de rede local com ping contínuo e gráfico em tempo real',
      'Exportação de relatórios técnicos em formato TXT e CSV para administradores de rede',
      'Arquitetura ultraleve com inicialização instantânea em menos de 100ms',
    ],
    permissions: [
      'android.permission.ACCESS_FINE_LOCATION (exigido pelo Android para leitura de canais Wi-Fi)',
      'android.permission.INTERNET (para testes de conectividade e ping)',
    ],
    techStack: ['Android NDK / C++ Socket hooks', 'Kotlin Flow', 'Jetpack Compose', 'MPAndroidChart modern port'],
    description:
      'Uma ferramenta cirúrgica para técnicos, desenvolvedores e entusiastas de conectividade. Diagnósticos precisos sem propagandas intrusivas ou assinaturas abusivas.',
    screens: [
      { title: 'Monitor de Latência', subtitle: 'Gráfico em tempo real de ping e jitter', type: 'network' },
      { title: 'Canais Wi-Fi', subtitle: 'Gráfico de sobreposição de canais 2.4/5/6 GHz', type: 'network' },
      { title: 'Diagnóstico Rápido', subtitle: 'Status de gateway, DNS e MTU', type: 'network' },
    ],
  },
  {
    id: 'pauzen-ledger',
    name: 'Pauzen Ledger',
    tagline: 'Gestão financeira minimalista com lançamento em 1 toque e orçamento visual',
    category: 'Finanças Pessoais',
    stage: 'in_development',
    statusLabel: 'Em Breve na Play Store',
    packageId: 'com.pauzenstudio.ledger',
    version: 'v0.3.2-alpha',
    targetSdk: 'Android 15 (API 35)',
    minSdk: 'Android 10 (API 29)',
    fileSize: '6.9 MB',
    downloads: 'Em Desenvolvimento',
    privacyBadge: 'Zero Acesso Bancário · 100% Privado',
    accentColor: '#14B8A6', // teal-500
    accentBg: 'bg-teal-500/10',
    gradient: 'from-teal-500 to-emerald-800',
    features: [
      'Registro ultra-rápido de despesas e receitas em menos de 3 segundos',
      'Sem necessidade de conectar conta bancária nem compartilhar tokens',
      'Orçamentos por categorias com alertas visuais de teto de gastos',
      'Gráficos elegantes de distribuição de despesas por período',
      'Exportação completa de dados em planilha CSV compatível com Excel e Google Sheets',
    ],
    permissions: [],
    techStack: ['Room Database', 'Kotlin Coroutines', 'Jetpack Compose', 'Material 3'],
    description:
      'Controle financeiro que coloca o usuário no comando sem espionar suas compras. Simplicidade radical, rapidez e privacidade financeira total.',
    screens: [
      { title: 'Painel do Mês', subtitle: 'Balanço corrente e teto orçamentário', type: 'ledger' },
      { title: 'Novo Lançamento', subtitle: 'Teclado numérico integrado e categorias rápidas', type: 'ledger' },
      { title: 'Distribuição', subtitle: 'Gráfico de pizza com categorias essenciais', type: 'ledger' },
    ],
  },
];
