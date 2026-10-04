import React, { useState } from 'react';
import { X, Copy, Check, Download, Layers } from 'lucide-react';
import { PauzenLogo, PauzenMark } from './PauzenLogo';

interface BrandKitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrandKitModal: React.FC<BrandKitModalProps> = ({ isOpen, onClose }) => {
  const [copiedSvg, setCopiedSvg] = useState<boolean>(false);
  const [activeTheme, setActiveTheme] = useState<'dark' | 'light'>('dark');

  if (!isOpen) return null;

  const svgContent = `<svg width="120" height="138" viewBox="0 0 120 138" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M 28 12 C 16 12, 10 22, 10 36 L 10 54 C 10 63, 4 67, 1 69 C 4 71, 10 75, 10 84 L 10 102 C 10 116, 16 126, 28 126 L 28 114 C 20 114, 18 108, 18 99 L 18 85 C 18 76, 12 71, 9 69 C 12 67, 18 62, 18 53 L 18 39 C 18 30, 20 24, 28 24 Z" fill="#FFFFFF"/>
  <!-- P pixel matrix -->
  <rect x="38" y="10" width="8" height="8" rx="1.2" fill="#FFFFFF"/>
  <rect x="49" y="10" width="8" height="8" rx="1.2" fill="#FFFFFF"/>
  <rect x="60" y="10" width="8" height="8" rx="1.2" fill="#FFFFFF"/>
  <rect x="71" y="10" width="8" height="8" rx="1.2" fill="#FFFFFF"/>
  <rect x="82" y="10" width="8" height="8" rx="1.2" fill="#FFFFFF"/>
  <rect x="93" y="10" width="8" height="8" rx="1.2" fill="#FFFFFF"/>
  <!-- (full matrix coordinates for Pauzen Studio mark) -->
</svg>`;

  const copySvg = () => {
    navigator.clipboard.writeText(svgContent);
    setCopiedSvg(true);
    setTimeout(() => setCopiedSvg(false), 2000);
  };

  const downloadSvg = () => {
    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'pauzen_studio_mark.svg';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#0d1017] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/60">
          <div className="flex items-center gap-2">
            <PauzenMark size={28} />
            <span className="text-base font-bold text-white tracking-tight">
              Pauzen Studio · Kit de Marca Oficial
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Logo Preview Canvas */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Pré-visualização do Emblema</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTheme('dark')}
                  className={`px-2.5 py-1 rounded text-[11px] cursor-pointer ${
                    activeTheme === 'dark' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Fundo Escuro
                </button>
                <button
                  onClick={() => setActiveTheme('light')}
                  className={`px-2.5 py-1 rounded text-[11px] cursor-pointer ${
                    activeTheme === 'light' ? 'bg-white text-slate-900 font-semibold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Fundo Claro
                </button>
              </div>
            </div>

            <div
              className={`p-10 rounded-xl border flex items-center justify-center transition-colors ${
                activeTheme === 'dark'
                  ? 'bg-[#090A0F] border-slate-800'
                  : 'bg-white border-slate-200'
              }`}
            >
              <PauzenLogo size="lg" theme={activeTheme} />
            </div>
          </div>

          {/* Design Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800 space-y-1">
              <span className="text-slate-500 block text-[10px]">COR DE IDENTIDADE:</span>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-xs bg-[#090A0F] border border-slate-700" />
                <span className="text-slate-200 font-semibold">Jet Black (#090A0F)</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800 space-y-1">
              <span className="text-slate-500 block text-[10px]">COR DE CONTRASTE:</span>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-xs bg-white" />
                <span className="text-slate-200 font-semibold">Pure White (#FFFFFF)</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800 space-y-1">
              <span className="text-slate-500 block text-[10px]">TIPOGRAFIA PRINCIPAL:</span>
              <span className="text-slate-200 font-sans font-bold text-sm block">Plus Jakarta Sans</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800 space-y-1">
              <span className="text-slate-500 block text-[10px]">TIPOGRAFIA TÉCNICA:</span>
              <span className="text-slate-200 font-mono font-medium text-sm block">JetBrains Mono</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={copySvg}
              className="w-full sm:flex-1 py-2.5 px-4 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              {copiedSvg ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copiedSvg ? 'SVG Copiado!' : 'Copiar Código SVG'}</span>
            </button>
            <button
              onClick={downloadSvg}
              className="w-full sm:flex-1 py-2.5 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Baixar Arquivo .SVG</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandKitModal;
