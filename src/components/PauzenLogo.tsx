import React from 'react';

// Exact representation of the user's Pauzen Studio brand mark:
// - Bold curly brace '{'
// - Matrix-pixel grid forming the letter 'P'
// - Precision typography "Pauzen Studio"

interface LogoProps {
  className?: string;
  variant?: 'full' | 'mark-only' | 'horizontal';
  theme?: 'dark' | 'light' | 'auto';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const PauzenMark: React.FC<{ size?: number; className?: string; inverted?: boolean }> = ({
  size = 40,
  className = '',
  inverted = false,
}) => {
  // 6 columns x 11 rows dot matrix for the iconic 'P'
  // 1 = filled square, 0 = empty space
  const pMatrix = [
    [1, 1, 1, 1, 1, 1], // row 0: top bar
    [1, 1, 1, 1, 1, 1], // row 1: top bar double depth
    [1, 1, 0, 0, 1, 1], // row 2: loop opening
    [1, 1, 0, 0, 1, 1], // row 3: loop middle
    [1, 1, 0, 0, 1, 1], // row 4: loop bottom
    [1, 1, 1, 1, 1, 1], // row 5: middle bar
    [1, 1, 1, 1, 1, 1], // row 6: middle bar double depth
    [1, 1, 0, 0, 0, 0], // row 7: lower stem
    [1, 1, 0, 0, 0, 0], // row 8: lower stem
    [1, 1, 0, 0, 0, 0], // row 9: lower stem
    [1, 1, 0, 0, 0, 0], // row 10: lower stem
  ];

  const dotSize = 8;
  const dotGap = 3;
  const dotRadius = 1.2;
  const pWidth = 6 * dotSize + 5 * dotGap; // 63px
  const pHeight = 11 * dotSize + 10 * dotGap; // 118px
  const pOffsetX = 38; // space for bracket
  const pOffsetY = 10;
  const viewBoxWidth = 120;
  const viewBoxHeight = 138;

  const color = inverted ? '#090A0F' : '#FFFFFF';

  return (
    <svg
      width={size}
      height={(size * viewBoxHeight) / viewBoxWidth}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Pauzen Studio Icon"
    >
      {/* Curly bracket '{' */}
      <path
        d="M 28 12 
           C 16 12, 10 22, 10 36 
           L 10 54 
           C 10 63, 4 67, 1 69 
           C 4 71, 10 75, 10 84 
           L 10 102 
           C 10 116, 16 126, 28 126
           L 28 114
           C 20 114, 18 108, 18 99
           L 18 85
           C 18 76, 12 71, 9 69
           C 12 67, 18 62, 18 53
           L 18 39
           C 18 30, 20 24, 28 24
           Z"
        fill={color}
      />

      {/* Pixelated matrix 'P' */}
      {pMatrix.map((row, rowIndex) =>
        row.map((active, colIndex) => {
          if (!active) return null;
          return (
            <rect
              key={`dot-${rowIndex}-${colIndex}`}
              x={pOffsetX + colIndex * (dotSize + dotGap)}
              y={pOffsetY + rowIndex * (dotSize + dotGap)}
              width={dotSize}
              height={dotSize}
              rx={dotRadius}
              fill={color}
            />
          );
        })
      )}
    </svg>
  );
};

export const PauzenLogo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  theme = 'dark',
  size = 'md',
}) => {
  const isLight = theme === 'light';
  const textColor = isLight ? 'text-slate-900' : 'text-white';
  const markInverted = isLight;

  const sizeMap = {
    sm: { markSize: 24, textClass: 'text-base', subClass: 'text-sm' },
    md: { markSize: 32, textClass: 'text-xl', subClass: 'text-lg' },
    lg: { markSize: 44, textClass: 'text-2xl', subClass: 'text-xl' },
    xl: { markSize: 60, textClass: 'text-4xl', subClass: 'text-3xl' },
  };

  const { markSize, textClass, subClass } = sizeMap[size];

  if (variant === 'mark-only') {
    return <PauzenMark size={markSize} className={className} inverted={markInverted} />;
  }

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      <PauzenMark size={markSize} inverted={markInverted} />
      <div className="flex flex-col leading-[1.05] tracking-tight">
        <span className={`font-extrabold ${textClass} ${textColor} tracking-tight font-sans`}>
          Pauzen
        </span>
        <span className={`font-bold ${subClass} ${textColor} tracking-tight font-sans`}>
          Studio
        </span>
      </div>
    </div>
  );
};

export default PauzenLogo;
