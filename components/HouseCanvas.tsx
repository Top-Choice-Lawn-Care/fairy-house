'use client'
import type { HouseConfig } from '@/lib/types'

interface Props { config: Partial<HouseConfig>; isNight?: boolean; isComplete?: boolean }

// ── Shared defs for realism ──────────────────────────────────────────

function SharedDefs({ isNight }: { isNight: boolean }) {
  const skyTop = isNight ? '#05080f' : '#7c3a00'
  const skyBot = isNight ? '#0d1a0e' : '#2d5a1a'
  const grassTop = isNight ? '#0d2e0f' : '#3a6b20'
  const grassBot = isNight ? '#0a1e0b' : '#2a4f15'
  return (
    <defs>
      <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor={skyTop}/>
        <stop offset="100%" stopColor={skyBot}/>
      </linearGradient>
      <linearGradient id="grassGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor={grassTop}/>
        <stop offset="100%" stopColor={grassBot}/>
      </linearGradient>
      <filter id="dropShadow">
        <feDropShadow dx="1.5" dy="3" stdDeviation="2.5" floodColor="#000" floodOpacity="0.5"/>
      </filter>
      <filter id="fireflyGlow">
        <feGaussianBlur stdDeviation="1.5" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
      <filter id="windowGlow">
        <feGaussianBlur stdDeviation="2" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
      <filter id="fairyGlow">
        <feGaussianBlur stdDeviation="2.5" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
      <filter id="softBlur">
        <feGaussianBlur stdDeviation="1.5"/>
      </filter>
      <filter id="mossBlur">
        <feGaussianBlur stdDeviation="1"/>
      </filter>
      {/* Bark texture pattern */}
      <pattern id="barkPattern" x="0" y="0" width="8" height="40" patternUnits="userSpaceOnUse">
        <rect width="8" height="40" fill="#3b1f0a"/>
        <path d="M2 0 Q3 10 2 20 Q1 30 2 40" stroke="#5a3010" strokeWidth="1.5" fill="none"/>
        <path d="M6 0 Q5 12 6 24 Q7 32 6 40" stroke="#2a1208" strokeWidth="1" fill="none"/>
        <path d="M4 5 Q4.5 15 3.5 25 Q4 35 4 40" stroke="#4a2510" strokeWidth="0.7" fill="none"/>
      </pattern>
      {/* Stone texture pattern */}
      <pattern id="stonePattern" x="0" y="0" width="20" height="12" patternUnits="userSpaceOnUse">
        <rect width="20" height="12" fill="#2d3a2d"/>
        <polygon points="1,1 9,0.5 10,11 0,11.5" fill="#374237" stroke="#1a2a1a" strokeWidth="0.5"/>
        <polygon points="10,0.5 19.5,1 20,11.5 9,11" fill="#2a352a" stroke="#1a2a1a" strokeWidth="0.5"/>
      </pattern>
      {/* Wood plank pattern */}
      <pattern id="woodPattern" x="0" y="0" width="16" height="8" patternUnits="userSpaceOnUse">
        <rect width="16" height="8" fill="#2d1b0e"/>
        <line x1="0" y1="4" x2="16" y2="4" stroke="#1a0d05" strokeWidth="0.5" opacity="0.6"/>
        <line x1="8" y1="0" x2="8" y2="4" stroke="#1a0d05" strokeWidth="0.4" opacity="0.4"/>
        <line x1="4" y1="4" x2="4" y2="8" stroke="#1a0d05" strokeWidth="0.4" opacity="0.4"/>
        <line x1="12" y1="4" x2="12" y2="8" stroke="#1a0d05" strokeWidth="0.4" opacity="0.4"/>
      </pattern>
      {/* Mushroom cap radial gradient */}
      <radialGradient id="mushroomCapGrad" cx="50%" cy="30%" r="60%">
        <stop offset="0%" stopColor="#c43a3a"/>
        <stop offset="40%" stopColor="#991b1b"/>
        <stop offset="100%" stopColor="#5a0e0e"/>
      </radialGradient>
      <radialGradient id="mushroomCapCrystal" cx="50%" cy="30%" r="60%">
        <stop offset="0%" stopColor="#2a8a9a"/>
        <stop offset="40%" stopColor="#1e6b7a"/>
        <stop offset="100%" stopColor="#0a3a44"/>
      </radialGradient>
      <radialGradient id="mushroomCapFlower" cx="50%" cy="30%" r="60%">
        <stop offset="0%" stopColor="#9a3a6a"/>
        <stop offset="40%" stopColor="#7a2e52"/>
        <stop offset="100%" stopColor="#3a1028"/>
      </radialGradient>
      <radialGradient id="mushroomCapBark" cx="50%" cy="30%" r="60%">
        <stop offset="0%" stopColor="#6a4020"/>
        <stop offset="40%" stopColor="#4a2810"/>
        <stop offset="100%" stopColor="#2a1508"/>
      </radialGradient>
      {/* Spot gradient for raised look */}
      <radialGradient id="spotGrad" cx="45%" cy="40%" r="50%">
        <stop offset="0%" stopColor="#fffbe8" stopOpacity="0.95"/>
        <stop offset="60%" stopColor="#fef3c7" stopOpacity="0.6"/>
        <stop offset="100%" stopColor="#fef3c7" stopOpacity="0"/>
      </radialGradient>
      <radialGradient id="spotGradCrystal" cx="45%" cy="40%" r="50%">
        <stop offset="0%" stopColor="#e0f7fa" stopOpacity="0.8"/>
        <stop offset="60%" stopColor="#a5f3fc" stopOpacity="0.4"/>
        <stop offset="100%" stopColor="#a5f3fc" stopOpacity="0"/>
      </radialGradient>
      {/* Crystal / obsidian gradient */}
      <linearGradient id="crystalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1a0a2e" stopOpacity="0.95"/>
        <stop offset="30%" stopColor="#2d1050"/>
        <stop offset="50%" stopColor="#3a1560"/>
        <stop offset="70%" stopColor="#2d1050"/>
        <stop offset="100%" stopColor="#1a0a2e" stopOpacity="0.95"/>
      </linearGradient>
      <linearGradient id="crystalFace1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4a1a80"/>
        <stop offset="100%" stopColor="#1a0a2e"/>
      </linearGradient>
      <linearGradient id="crystalFace2" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#2d1050"/>
        <stop offset="100%" stopColor="#0d0518"/>
      </linearGradient>
      {/* Hollow log depth gradient */}
      <radialGradient id="hollowDepth" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#000000"/>
        <stop offset="60%" stopColor="#050200"/>
        <stop offset="100%" stopColor="#1a0d05"/>
      </radialGradient>
      {/* Sun rays gradient for day */}
      {!isNight && (
        <radialGradient id="sunGlow" cx="80%" cy="15%" r="50%">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.3"/>
          <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.1"/>
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
        </radialGradient>
      )}
    </defs>
  )
}

// ── House components with realism ────────────────────────────────────

function MushroomHouse({ roof, door, windows }: { roof?: string; door?: string; windows?: string }) {
  const capGrad = roof === 'crystal' ? 'url(#mushroomCapCrystal)' : roof === 'flower' ? 'url(#mushroomCapFlower)' : roof === 'bark' ? 'url(#mushroomCapBark)' : 'url(#mushroomCapGrad)'
  const spotGr = roof === 'crystal' ? 'url(#spotGradCrystal)' : 'url(#spotGrad)'
  const doorColor = door === 'crystal' ? '#0e4f5c' : door === 'vine' ? '#166534' : door === 'leaf' ? '#15803d' : '#78350f'
  const winColor = '#fbbf24'
  return (
    <g filter="url(#dropShadow)">
      {/* Roots/moss at base */}
      <path d="M42 152 Q35 148 28 155" stroke="#2a5a18" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7"/>
      <path d="M48 154 Q40 150 32 156" stroke="#1a4010" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5"/>
      <path d="M118 152 Q125 148 132 155" stroke="#2a5a18" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7"/>
      <path d="M112 154 Q120 150 128 156" stroke="#1a4010" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5"/>
      {/* Moss patches at base */}
      <ellipse cx="45" cy="152" rx="8" ry="3" fill="#2a6a18" opacity="0.5" filter="url(#mossBlur)"/>
      <ellipse cx="115" cy="152" rx="7" ry="3" fill="#2a6a18" opacity="0.5" filter="url(#mossBlur)"/>

      {/* Stem with vein texture */}
      <path d="M52 152 Q46 110 48 85 Q56 78 80 78 Q104 78 112 85 Q114 110 108 152 Z" fill="#f0e8d8" stroke="#a89070" strokeWidth="1.2"/>
      {/* Stem highlight (left) */}
      <path d="M54 150 Q48 112 50 86 Q58 80 70 80" fill="#f8f2e8" opacity="0.4"/>
      {/* Stem veins */}
      <path d="M58 92 Q70 90 80 91 Q90 90 102 92" stroke="#c4a882" strokeWidth="0.6" fill="none" opacity="0.5"/>
      <path d="M57 100 Q70 98 80 99 Q92 98 103 100" stroke="#c4a882" strokeWidth="0.6" fill="none" opacity="0.45"/>
      <path d="M56 108 Q68 106 80 107 Q94 106 104 108" stroke="#c4a882" strokeWidth="0.6" fill="none" opacity="0.4"/>
      <path d="M55 116 Q70 114 80 115 Q92 114 105 116" stroke="#c4a882" strokeWidth="0.6" fill="none" opacity="0.35"/>
      <path d="M54 124 Q70 122 80 123 Q92 122 106 124" stroke="#c4a882" strokeWidth="0.6" fill="none" opacity="0.3"/>
      <path d="M53 132 Q70 130 80 131 Q92 130 107 132" stroke="#c4a882" strokeWidth="0.6" fill="none" opacity="0.25"/>
      <path d="M53 140 Q70 138 80 139 Q92 138 107 140" stroke="#c4a882" strokeWidth="0.6" fill="none" opacity="0.2"/>

      {/* Windows */}
      {windows && <>
        <ellipse cx="64" cy="108" rx="7" ry="7" fill={winColor} filter="url(#windowGlow)" className="animate-window" stroke="#a89070" strokeWidth="1"/>
        <line x1="64" y1="101" x2="64" y2="115" stroke="#a89070" strokeWidth="0.6" opacity="0.5"/>
        <line x1="57" y1="108" x2="71" y2="108" stroke="#a89070" strokeWidth="0.6" opacity="0.5"/>
        <ellipse cx="96" cy="108" rx="7" ry="7" fill={winColor} filter="url(#windowGlow)" className="animate-window" stroke="#a89070" strokeWidth="1"/>
        <line x1="96" y1="101" x2="96" y2="115" stroke="#a89070" strokeWidth="0.6" opacity="0.5"/>
        <line x1="89" y1="108" x2="103" y2="108" stroke="#a89070" strokeWidth="0.6" opacity="0.5"/>
      </>}

      {/* Door */}
      <path d="M68 152 Q68 128 80 126 Q92 128 92 152 Z" fill={doorColor} stroke="#3b1f0a" strokeWidth="1.5"/>
      <path d="M70 150 Q70 130 80 128 Q82 130 82 150" fill="#ffffff" opacity="0.06"/>
      <circle cx="88" cy="140" r="2.5" fill="#fbbf24" filter="url(#windowGlow)"/>

      {/* Cap shadow underneath */}
      <path d="M28 90 Q50 102 80 103 Q110 102 132 90 Q130 98 80 100 Q30 98 28 90 Z" fill="#000" opacity="0.3"/>

      {/* Main cap */}
      <path d="M80 28 Q30 32 22 75 Q20 88 28 90 Q52 102 80 103 Q108 102 132 90 Q140 88 138 75 Q130 32 80 28 Z" fill={capGrad}/>
      {/* Cap highlight rim */}
      <path d="M80 32 Q50 36 38 62 Q50 40 80 38 Q110 40 122 62 Q110 36 80 32 Z" fill="#ffffff" opacity="0.12"/>
      {/* Cap underside dark */}
      <path d="M30 88 Q52 98 80 100 Q108 98 130 88 Q110 96 80 98 Q50 96 30 88 Z" fill="#000" opacity="0.2"/>

      {/* Raised spots with radial gradient */}
      <ellipse cx="56" cy="56" rx="10" ry="9" fill={spotGr}/>
      <ellipse cx="82" cy="44" rx="12" ry="10" fill={spotGr}/>
      <ellipse cx="108" cy="58" rx="9" ry="8" fill={spotGr}/>
      <ellipse cx="44" cy="74" rx="7" ry="6" fill={spotGr}/>
      <ellipse cx="70" cy="68" rx="5" ry="5" fill={spotGr}/>
      <ellipse cx="118" cy="76" rx="7" ry="6" fill={spotGr}/>
    </g>
  )
}

function TreeHouse({ roof, door, windows }: { roof?: string; door?: string; windows?: string }) {
  const roofColor = roof === 'crystal' ? '#0e4f5c' : roof === 'flower' ? '#5c1a3a' : roof === 'bark' ? '#1a0d05' : '#2d1b0e'
  const doorColor = door === 'crystal' ? '#0e4f5c' : door === 'vine' ? '#166534' : '#3b1f0a'
  const winColor = '#fbbf24'
  return (
    <g filter="url(#dropShadow)">
      {/* Tree trunk with bark texture */}
      <path d="M66 155 Q60 120 58 90 Q66 80 80 80 Q94 80 102 90 Q100 120 94 155 Z" fill="url(#barkPattern)" stroke="#2a1505" strokeWidth="1.2"/>
      {/* Trunk highlight */}
      <path d="M68 153 Q62 120 60 92 Q68 82 76 82" fill="#5a3010" opacity="0.2"/>
      {/* Trunk shadow right */}
      <path d="M92 155 Q98 120 100 92 Q94 82 86 82" fill="#1a0800" opacity="0.2"/>
      {/* Bark crevice details */}
      <path d="M70 95 Q72 105 69 115 Q71 125 70 135" stroke="#1a0800" strokeWidth="0.8" fill="none" opacity="0.4"/>
      <path d="M88 96 Q86 108 89 118 Q87 130 88 140" stroke="#1a0800" strokeWidth="0.7" fill="none" opacity="0.35"/>

      {/* Roots */}
      <path d="M62 152 Q50 146 42 155" stroke="#3b1f0a" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
      <path d="M98 152 Q110 146 118 155" stroke="#3b1f0a" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
      <path d="M58 150 Q45 142 35 152" stroke="#2a1505" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M102 150 Q115 142 125 152" stroke="#2a1505" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* Root moss */}
      <ellipse cx="42" cy="153" rx="6" ry="2" fill="#2a6a18" opacity="0.4" filter="url(#mossBlur)"/>
      <ellipse cx="118" cy="153" rx="5" ry="2" fill="#2a6a18" opacity="0.4" filter="url(#mossBlur)"/>

      {/* Weathered rope ladder */}
      <line x1="72" y1="88" x2="68" y2="155" stroke="#7a5a30" strokeWidth="1.8" opacity="0.8"/>
      <line x1="88" y1="88" x2="92" y2="155" stroke="#7a5a30" strokeWidth="1.8" opacity="0.8"/>
      {/* Rope shadow */}
      <line x1="73" y1="89" x2="69" y2="155" stroke="#3a2510" strokeWidth="1" opacity="0.3"/>
      <line x1="89" y1="89" x2="93" y2="155" stroke="#3a2510" strokeWidth="1" opacity="0.3"/>
      {[98,108,118,128,138,148].map(y => (
        <g key={y}>
          <line x1={69+(y-88)*0.06} y1={y} x2={89+(y-88)*0.06} y2={y+1.5} stroke="#7a5a30" strokeWidth="1.3" opacity="0.75"/>
          <line x1={69+(y-88)*0.06} y1={y+0.8} x2={89+(y-88)*0.06} y2={y+2.3} stroke="#3a2510" strokeWidth="0.6" opacity="0.3"/>
        </g>
      ))}

      {/* Platform with wood texture */}
      <rect x="30" y="80" width="100" height="9" rx="2" fill="url(#woodPattern)" stroke="#1a0d05" strokeWidth="1"/>
      {/* Platform shadow underneath */}
      <path d="M32 89 Q80 92 128 89 L128 91 Q80 94 32 91 Z" fill="#000" opacity="0.2"/>

      {/* House body with wood texture */}
      <rect x="34" y="48" width="92" height="34" rx="3" fill="url(#woodPattern)" stroke="#3b1f0a" strokeWidth="1"/>
      {/* Body shadow right edge */}
      <rect x="118" y="48" width="8" height="34" rx="1" fill="#000" opacity="0.1"/>

      {/* Windows */}
      {windows && <>
        <rect x="42" y="54" width="14" height="16" rx="2" fill={winColor} filter="url(#windowGlow)" className="animate-window" stroke="#5c3a1a" strokeWidth="1"/>
        <line x1="49" y1="54" x2="49" y2="70" stroke="#5c3a1a" strokeWidth="0.5" opacity="0.6"/>
        <line x1="42" y1="62" x2="56" y2="62" stroke="#5c3a1a" strokeWidth="0.5" opacity="0.6"/>
        <rect x="104" y="54" width="14" height="16" rx="2" fill={winColor} filter="url(#windowGlow)" className="animate-window" stroke="#5c3a1a" strokeWidth="1"/>
        <line x1="111" y1="54" x2="111" y2="70" stroke="#5c3a1a" strokeWidth="0.5" opacity="0.6"/>
        <line x1="104" y1="62" x2="118" y2="62" stroke="#5c3a1a" strokeWidth="0.5" opacity="0.6"/>
      </>}

      {/* Door */}
      <path d="M70 82 Q70 64 80 63 Q90 64 90 82 Z" fill={doorColor} stroke="#1a0d05" strokeWidth="1"/>
      <path d="M72 80 Q72 66 80 65 Q82 66 82 80" fill="#ffffff" opacity="0.05"/>
      <circle cx="87" cy="74" r="2" fill="#fbbf24" filter="url(#windowGlow)"/>

      {/* Roof */}
      <polygon points="26,50 80,16 134,50" fill={roofColor}/>
      <polygon points="26,50 80,16 80,20 30,50" fill="#ffffff" opacity="0.08"/>
      {/* Roof shadow underside */}
      <line x1="26" y1="50" x2="134" y2="50" stroke="#000" strokeWidth="2" opacity="0.3"/>

      {/* Layered foliage blobs */}
      <ellipse cx="28" cy="40" rx="16" ry="12" fill="#0a3a0c" opacity="0.7"/>
      <ellipse cx="22" cy="35" rx="14" ry="10" fill="#0d4a10" opacity="0.6"/>
      <ellipse cx="34" cy="32" rx="12" ry="9" fill="#166520" opacity="0.5"/>
      <ellipse cx="132" cy="40" rx="16" ry="12" fill="#0a3a0c" opacity="0.7"/>
      <ellipse cx="138" cy="35" rx="14" ry="10" fill="#0d4a10" opacity="0.6"/>
      <ellipse cx="126" cy="32" rx="12" ry="9" fill="#166520" opacity="0.5"/>
      <ellipse cx="80" cy="14" rx="10" ry="7" fill="#0d4a10" opacity="0.5"/>

      {/* Moss on roof */}
      <path d="M33 48 Q50 44 65 48" stroke="#22c55e" strokeWidth="2.5" fill="none" opacity="0.4" filter="url(#mossBlur)"/>
      <path d="M95 48 Q110 44 127 48" stroke="#22c55e" strokeWidth="2.5" fill="none" opacity="0.35" filter="url(#mossBlur)"/>
    </g>
  )
}

function StoneHouse({ roof, door, windows }: { roof?: string; door?: string; windows?: string }) {
  const roofColor = roof === 'crystal' ? '#0e4f5c' : roof === 'flower' ? '#5c1a3a' : roof === 'thatched' ? '#3b2f10' : roof === 'bark' ? '#1a0d05' : '#1a2e2a'
  const doorColor = door === 'crystal' ? '#0e4f5c' : door === 'vine' ? '#166534' : door === 'arched' ? '#374237' : '#3b1f0a'
  const winColor = '#fb923c'

  // Irregular stones with 3D highlights/shadows
  const stones: Array<{ path: string; fill: string; hi: string; sh: string }> = [
    { path: 'M34,90 L62,89 L63,106 L33,107 Z', fill: '#374237', hi: '#4a5a4a', sh: '#1a2a1a' },
    { path: 'M64,89 L92,90 L93,107 L63,106 Z', fill: '#2a352a', hi: '#3a4a3a', sh: '#1a241a' },
    { path: 'M94,90 L126,89 L127,106 L93,107 Z', fill: '#2d3a2d', hi: '#404f40', sh: '#182218' },
    { path: 'M32,108 L58,107 L59,124 L31,125 Z', fill: '#2a352a', hi: '#3a4a3a', sh: '#1a241a' },
    { path: 'M60,107 L94,108 L95,125 L59,124 Z', fill: '#374237', hi: '#4a5a4a', sh: '#1a2a1a' },
    { path: 'M96,108 L128,107 L129,124 L95,125 Z', fill: '#2d3a2d', hi: '#404f40', sh: '#182218' },
    { path: 'M34,126 L64,125 L65,142 L33,143 Z', fill: '#2d3a2d', hi: '#404f40', sh: '#182218' },
    { path: 'M66,125 L96,126 L97,143 L65,142 Z', fill: '#2a352a', hi: '#3a4a3a', sh: '#1a241a' },
    { path: 'M98,126 L128,125 L129,142 L97,143 Z', fill: '#374237', hi: '#4a5a4a', sh: '#1a2a1a' },
    { path: 'M32,144 L60,143 L61,152 L31,152 Z', fill: '#374237', hi: '#4a5a4a', sh: '#1a2a1a' },
    { path: 'M100,143 L129,144 L129,152 L100,152 Z', fill: '#2d3a2d', hi: '#404f40', sh: '#182218' },
  ]

  return (
    <g filter="url(#dropShadow)">
      {/* Base wall */}
      <path d="M30 88 L130 88 L130 152 L30 152 Z" fill="#243428"/>

      {/* 3D Stones */}
      {stones.map((s, i) => (
        <g key={i}>
          <path d={s.path} fill={s.fill} stroke="#1a2419" strokeWidth="0.8"/>
          {/* Top highlight */}
          <path d={s.path} fill={s.hi} opacity="0.2" clipPath={`inset(0 0 70% 0)`}/>
          {/* Bottom shadow */}
          <path d={s.path} fill={s.sh} opacity="0.3" clipPath={`inset(60% 0 0 0)`}/>
        </g>
      ))}

      {/* Mortar lines (darker gaps) */}
      <line x1="30" y1="107" x2="130" y2="107" stroke="#0a1a0a" strokeWidth="1.5" opacity="0.5"/>
      <line x1="30" y1="125" x2="130" y2="125" stroke="#0a1a0a" strokeWidth="1.5" opacity="0.5"/>
      <line x1="30" y1="143" x2="130" y2="143" stroke="#0a1a0a" strokeWidth="1.5" opacity="0.5"/>

      {/* Ivy/vines */}
      <path d="M32 100 Q28 90 30 80 Q32 74 34 70" stroke="#1a5a20" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7"/>
      <ellipse cx="30" cy="82" rx="3" ry="2" fill="#228a30" opacity="0.5"/>
      <ellipse cx="33" cy="74" rx="2.5" ry="2" fill="#1a7a25" opacity="0.5"/>
      <ellipse cx="31" cy="90" rx="2" ry="1.5" fill="#228a30" opacity="0.4"/>
      <path d="M128 105 Q132 92 130 82 Q128 76 126 72" stroke="#1a5a20" strokeWidth="1.3" fill="none" strokeLinecap="round" opacity="0.6"/>
      <ellipse cx="130" cy="85" rx="2.5" ry="2" fill="#228a30" opacity="0.45"/>
      <ellipse cx="127" cy="76" rx="2" ry="1.8" fill="#1a7a25" opacity="0.45"/>

      {/* Chimney */}
      <rect x="100" y="38" width="16" height="28" rx="2" fill="#374237" stroke="#1a2419" strokeWidth="1"/>
      <rect x="100" y="38" width="8" height="28" rx="1" fill="#4a5a4a" opacity="0.1"/>
      {/* Glowing ember smoke */}
      <path d="M108 36 Q106 28 110 22 Q114 16 112 10" stroke="#fb923c" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.4"/>
      <path d="M108 36 Q104 26 108 18" stroke="#fbbf24" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.3"/>

      {/* Windows */}
      {windows && <>
        <rect x="40" y="98" width="20" height="20" rx={windows==='porthole'?'10':'3'} fill={winColor} filter="url(#windowGlow)" className="animate-window" stroke="#4a5a4a" strokeWidth="1.5"/>
        <line x1="50" y1="98" x2="50" y2="118" stroke="#4a5a4a" strokeWidth="0.6" opacity="0.5"/>
        <line x1="40" y1="108" x2="60" y2="108" stroke="#4a5a4a" strokeWidth="0.6" opacity="0.5"/>
        <rect x="100" y="98" width="20" height="20" rx={windows==='porthole'?'10':'3'} fill={winColor} filter="url(#windowGlow)" className="animate-window" stroke="#4a5a4a" strokeWidth="1.5"/>
        <line x1="110" y1="98" x2="110" y2="118" stroke="#4a5a4a" strokeWidth="0.6" opacity="0.5"/>
        <line x1="100" y1="108" x2="120" y2="108" stroke="#4a5a4a" strokeWidth="0.6" opacity="0.5"/>
      </>}

      {/* Door */}
      <path d="M66 152 Q66 124 80 122 Q94 124 94 152 Z" fill={doorColor} stroke="#1a2419" strokeWidth="1.5"/>
      <path d="M68 150 Q68 126 80 124 Q84 126 84 150" fill="#ffffff" opacity="0.05"/>
      <circle cx="91" cy="138" r="2.5" fill="#fbbf24" filter="url(#windowGlow)"/>

      {/* Roof */}
      {roof === 'thatched' ? <>
        <polygon points="22,90 80,40 138,90" fill="#3b2f10"/>
        <polygon points="22,90 80,40 80,44 26,90" fill="#5a4a1a" opacity="0.15"/>
        {/* Thatched straw lines */}
        {[50,58,66,74,82].map((y,i) => (
          <path key={i} d={`M${24+i*3},${90-i*8} Q80,${38-i*3} ${136-i*3},${90-i*8}`} stroke="#2a1f0a" strokeWidth="2" fill="none" opacity="0.5"/>
        ))}
        {/* Individual straw hints */}
        {[30,45,60,75,90,105,120].map((x,i) => (
          <path key={`s${i}`} d={`M${x} 88 Q${x+2} 82 ${x-1} 76`} stroke="#4a3a12" strokeWidth="0.8" fill="none" opacity="0.4"/>
        ))}
      </> : <>
        <polygon points="22,90 80,40 138,90" fill={roofColor}/>
        <polygon points="22,90 80,40 80,46 26,90" fill="#ffffff" opacity="0.08"/>
      </>}
    </g>
  )
}

function CrystalTower({ roof, door, windows }: { roof?: string; door?: string; windows?: string }) {
  const winColor = '#c4a0ff'
  const isFlower = roof === 'flower'
  return (
    <g filter="url(#dropShadow)">
      {/* Dark volcanic ground */}
      <ellipse cx="80" cy="152" rx="45" ry="6" fill="#1a1a1a" opacity="0.5"/>
      <path d="M40 152 Q50 148 60 152 Q70 149 80 152 Q90 149 100 152 Q110 148 120 152" stroke="#2a2a2a" strokeWidth="1" fill="none" opacity="0.4"/>

      {/* Main tower body — faceted crystal */}
      <path d="M52 152 L46 100 Q46 86 60 82 L80 78 L100 82 Q114 86 114 100 L108 152 Z" fill="url(#crystalGrad)"/>
      {/* Left face */}
      <path d="M52 152 L46 100 Q46 86 60 82 L80 78 L80 152 Z" fill="url(#crystalFace1)" opacity="0.4"/>
      {/* Right face */}
      <path d="M108 152 L114 100 Q114 86 100 82 L80 78 L80 152 Z" fill="url(#crystalFace2)" opacity="0.3"/>

      {/* Glowing seams between faces */}
      <line x1="80" y1="78" x2="80" y2="152" stroke="#8844cc" strokeWidth="1" opacity="0.6"/>
      <line x1="80" y1="78" x2="52" y2="152" stroke="#6633aa" strokeWidth="0.7" opacity="0.3"/>
      <line x1="80" y1="78" x2="108" y2="152" stroke="#6633aa" strokeWidth="0.7" opacity="0.3"/>
      {/* Horizontal seams */}
      <line x1="48" y1="110" x2="112" y2="110" stroke="#7740bb" strokeWidth="0.6" opacity="0.3"/>
      <line x1="47" y1="130" x2="113" y2="130" stroke="#7740bb" strokeWidth="0.6" opacity="0.25"/>
      {/* Seam glow dots */}
      <circle cx="80" cy="110" r="1.5" fill="#aa66ee" opacity="0.5" filter="url(#fireflyGlow)"/>
      <circle cx="80" cy="130" r="1.5" fill="#aa66ee" opacity="0.4" filter="url(#fireflyGlow)"/>

      {/* Windows */}
      {windows && [93,112,132].map(y => (
        <g key={y}>
          <ellipse cx="80" cy={y} rx="9" ry="9" fill={winColor} filter="url(#windowGlow)" className="animate-window" stroke="#5520aa" strokeWidth="1" opacity="0.85"/>
          {/* Window facet lines */}
          <line x1="80" y1={y-9} x2="80" y2={y+9} stroke="#5520aa" strokeWidth="0.4" opacity="0.4"/>
          <line x1="71" y1={y} x2="89" y2={y} stroke="#5520aa" strokeWidth="0.4" opacity="0.4"/>
        </g>
      ))}

      {/* Door */}
      <path d="M67 152 Q67 130 80 128 Q93 130 93 152 Z" fill={door==='crystal'?'#0e4f5c':'#1e0a3c'} stroke="#5520aa" strokeWidth="1.2"/>
      <path d="M69 150 Q69 132 80 130 Q83 132 83 150" fill="#ffffff" opacity="0.05"/>
      <circle cx="90" cy="140" r="2" fill="#c4a0ff" filter="url(#windowGlow)"/>

      {/* Spire — faceted obsidian/amethyst */}
      <polygon points="80,6 60,46 100,46" fill={isFlower ? '#3b1a5c' : '#1a0a2e'} stroke="#5520aa" strokeWidth="0.8"/>
      {/* Spire face highlights */}
      <polygon points="80,6 60,46 80,36" fill="#3a1560" opacity="0.3"/>
      <polygon points="80,6 100,46 80,36" fill="#0d0518" opacity="0.3"/>
      {/* Side crystals */}
      <polygon points="55,38 46,60 64,60" fill={isFlower ? '#3b1a5c' : '#1a0a2e'} stroke="#5520aa" strokeWidth="0.6" opacity="0.85"/>
      <polygon points="55,38 46,60 55,52" fill="#2d1050" opacity="0.25"/>
      <polygon points="105,38 96,60 114,60" fill={isFlower ? '#3b1a5c' : '#1a0a2e'} stroke="#5520aa" strokeWidth="0.6" opacity="0.85"/>
      <polygon points="105,38 114,60 105,52" fill="#0d0518" opacity="0.25"/>

      {/* Crystal tip glow */}
      <circle cx="80" cy="8" r="3" fill="#aa66ee" opacity="0.3" filter="url(#fireflyGlow)"/>
    </g>
  )
}

function HollowLog({ roof, door, windows }: { roof?: string; door?: string; windows?: string }) {
  const winColor = '#fbbf24'
  return (
    <g filter="url(#dropShadow)">
      {/* Ground shadow */}
      <ellipse cx="80" cy="140" rx="78" ry="16" fill="#0a0500" opacity="0.35"/>

      {/* Main log body with bark texture */}
      <path d="M8 100 Q8 68 80 68 Q152 68 152 100 L152 124 Q152 156 80 156 Q8 156 8 124 Z" fill="url(#barkPattern)"/>
      {/* Log body highlight top */}
      <path d="M10 98 Q10 70 80 70 Q150 70 150 98 Q150 80 80 78 Q10 80 10 98 Z" fill="#5a3010" opacity="0.15"/>
      {/* Log body shadow bottom */}
      <path d="M10 124 Q10 154 80 154 Q150 154 150 124 Q150 146 80 148 Q10 146 10 124 Z" fill="#000" opacity="0.15"/>
      {/* Extra bark texture stripes */}
      {[0,1,2,3,4].map(i => (
        <path key={i} d={`M${16+i*28} 70 Q${20+i*28} 82 ${18+i*28} 100 Q${16+i*28} 120 ${18+i*28} 140 Q${20+i*28} 148 ${16+i*28} 155`} stroke="#120800" strokeWidth="2" fill="none" opacity="0.3" strokeLinecap="round"/>
      ))}
      {/* Knots */}
      <ellipse cx="40" cy="100" rx="4" ry="5" fill="#2a1808" stroke="#120800" strokeWidth="0.8" opacity="0.5"/>
      <ellipse cx="120" cy="95" rx="3" ry="4" fill="#2a1808" stroke="#120800" strokeWidth="0.7" opacity="0.45"/>

      {/* Fluffy moss patches on top */}
      <ellipse cx="50" cy="82" rx="18" ry="5" fill="#2a8a18" opacity="0.6" filter="url(#mossBlur)"/>
      <ellipse cx="80" cy="80" rx="14" ry="4" fill="#35a025" opacity="0.5" filter="url(#mossBlur)"/>
      <ellipse cx="110" cy="82" rx="16" ry="5" fill="#2a8a18" opacity="0.55" filter="url(#mossBlur)"/>
      <ellipse cx="65" cy="78" rx="8" ry="3" fill="#40b035" opacity="0.35" filter="url(#mossBlur)"/>
      <ellipse cx="95" cy="79" rx="9" ry="3" fill="#40b035" opacity="0.35" filter="url(#mossBlur)"/>

      {/* Left end — concentric rings */}
      <ellipse cx="14" cy="112" rx="13" ry="32" fill="#1a0d05" stroke="#120800" strokeWidth="1.2"/>
      {[28,24,20,16,12,8,4].map((r, i) => (
        <ellipse key={i} cx="14" cy="112" rx={Math.max(1, r*0.4)} ry={r} fill="none" stroke={i%2===0 ? '#2a1808' : '#3a2010'} strokeWidth={i%2===0 ? '0.8' : '0.5'} opacity={0.5 - i*0.04}/>
      ))}
      <ellipse cx="14" cy="112" rx="1.5" ry="3" fill="#0a0400" opacity="0.8"/>

      {/* Right end — concentric rings */}
      <ellipse cx="146" cy="112" rx="13" ry="32" fill="#1a0d05" stroke="#120800" strokeWidth="1.2"/>
      {[28,24,20,16,12,8,4].map((r, i) => (
        <ellipse key={i} cx="146" cy="112" rx={Math.max(1, r*0.4)} ry={r} fill="none" stroke={i%2===0 ? '#2a1808' : '#3a2010'} strokeWidth={i%2===0 ? '0.8' : '0.5'} opacity={0.5 - i*0.04}/>
      ))}
      <ellipse cx="146" cy="112" rx="1.5" ry="3" fill="#0a0400" opacity="0.8"/>

      {/* Hollow opening with depth gradient */}
      <ellipse cx="80" cy="128" rx="24" ry="28" fill="url(#hollowDepth)"/>
      {/* Door inside hollow */}
      <path d="M62 156 Q62 116 80 114 Q98 116 98 156 Z" fill={door==='vine'?'#166534':door==='crystal'?'#0e4f5c':'url(#hollowDepth)'}/>
      <circle cx="94" cy="130" r="2.5" fill={winColor} filter="url(#windowGlow)"/>

      {/* Windows */}
      {windows && <>
        <ellipse cx="44" cy="104" rx="10" ry="10" fill={winColor} filter="url(#windowGlow)" className="animate-window" stroke="#2a1505" strokeWidth="1.2"/>
        <line x1="44" y1="94" x2="44" y2="114" stroke="#2a1505" strokeWidth="0.5" opacity="0.4"/>
        <line x1="34" y1="104" x2="54" y2="104" stroke="#2a1505" strokeWidth="0.5" opacity="0.4"/>
        <ellipse cx="116" cy="104" rx="10" ry="10" fill={winColor} filter="url(#windowGlow)" className="animate-window" stroke="#2a1505" strokeWidth="1.2"/>
        <line x1="116" y1="94" x2="116" y2="114" stroke="#2a1505" strokeWidth="0.5" opacity="0.4"/>
        <line x1="106" y1="104" x2="126" y2="104" stroke="#2a1505" strokeWidth="0.5" opacity="0.4"/>
      </>}

      {/* Detailed mushrooms */}
      <g opacity="0.8">
        {/* Left mushroom */}
        <line x1="28" y1="78" x2="28" y2="70" stroke="#d4c8b0" strokeWidth="1.5" strokeLinecap="round"/>
        <ellipse cx="28" cy="68" rx="6" ry="3.5" fill="#c44030"/>
        <ellipse cx="28" cy="67" rx="5" ry="2.5" fill="#d45540" opacity="0.4"/>
        <circle cx="26" cy="67" r="1" fill="#fef3c7" opacity="0.6"/>
        <circle cx="30" cy="68" r="0.8" fill="#fef3c7" opacity="0.5"/>
        {/* Right mushroom */}
        <line x1="124" y1="76" x2="124" y2="69" stroke="#d4c8b0" strokeWidth="1.3" strokeLinecap="round"/>
        <ellipse cx="124" cy="67" rx="5" ry="3" fill="#c44030"/>
        <ellipse cx="124" cy="66" rx="4" ry="2" fill="#d45540" opacity="0.4"/>
        <circle cx="122" cy="66.5" r="0.8" fill="#fef3c7" opacity="0.6"/>
        {/* Small mushroom */}
        <line x1="132" y1="78" x2="132" y2="73" stroke="#d4c8b0" strokeWidth="1" strokeLinecap="round"/>
        <ellipse cx="132" cy="72" rx="3.5" ry="2" fill="#a03525"/>
        <circle cx="131" cy="71.5" r="0.6" fill="#fef3c7" opacity="0.5"/>
      </g>
    </g>
  )
}

// Garden emojis
const GARDEN_EMOJIS: Record<string, string[]> = {
  roses:      ['🌹','🌷','🌹','🌷','🌹','🌹'],
  mushrooms:  ['🍄','🍄','🌿','🍄','🍄','🌱'],
  wildflower: ['🌻','🌼','🌸','🌺','🌻','🌼'],
  crystal:    ['💎','✨','💠','💎','✨','💠'],
  pond:       ['🌊','🐸','🌿','🐟','🌱','🌿'],
}

export default function HouseCanvas({ config, isNight = false, isComplete = false }: Props) {
  const garden = GARDEN_EMOJIS[config.garden || 'roses']

  const HouseComponent = config.shape === 'mushroom' ? MushroomHouse
    : config.shape === 'treehouse' ? TreeHouse
    : config.shape === 'crystal' ? CrystalTower
    : config.shape === 'log' ? HollowLog
    : StoneHouse

  return (
    <div className="relative w-full rounded-3xl overflow-hidden select-none shadow-xl" style={{ aspectRatio: '4/3' }}>
      <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <SharedDefs isNight={isNight}/>

        {/* Sky */}
        <rect x="0" y="0" width="160" height="160" fill="url(#skyGrad)"/>

        {/* ── DAY: Golden enchanted hour ── */}
        {!isNight && <>
          {/* Sun glow */}
          <rect x="0" y="0" width="160" height="160" fill="url(#sunGlow)"/>
          {/* Sun */}
          <circle cx="130" cy="22" r="12" fill="#fbbf24" opacity="0.85"/>
          <circle cx="130" cy="22" r="16" fill="#f59e0b" opacity="0.2"/>
          {/* Sun rays */}
          {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle, i) => {
            const rad = angle * Math.PI / 180
            const x1 = 130 + Math.cos(rad) * 18
            const y1 = 22 + Math.sin(rad) * 18
            const x2 = 130 + Math.cos(rad) * (26 + (i%2)*6)
            const y2 = 22 + Math.sin(rad) * (26 + (i%2)*6)
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#fbbf24" strokeWidth={i%2===0?'1.5':'0.8'} opacity={0.3-i%3*0.05} strokeLinecap="round"/>
          })}
          {/* Warm golden mist */}
          <ellipse cx="60" cy="140" rx="80" ry="10" fill="#f59e0b" opacity="0.06" className="animate-fog"/>
          <ellipse cx="110" cy="146" rx="70" ry="8" fill="#fbbf24" opacity="0.04" className="animate-fog-slow"/>
          <ellipse cx="40" cy="135" rx="50" ry="6" fill="#f59e0b" opacity="0.04"/>
          {/* Warm ambient particles (dust motes in sunlight) */}
          {[{x:20,y:45,r:0.8,o:0.4},{x:50,y:30,r:0.6,o:0.3},{x:95,y:50,r:0.7,o:0.35},{x:140,y:60,r:0.5,o:0.25},{x:35,y:70,r:0.6,o:0.3},{x:120,y:40,r:0.7,o:0.35},{x:70,y:25,r:0.5,o:0.2}].map((p,i) => (
            <circle key={i} cx={p.x} cy={p.y} r={p.r} fill="#fde68a" opacity={p.o} className={i%2===0?'animate-firefly':'animate-firefly-2'}/>
          ))}
          {/* Light scattered clouds */}
          <ellipse cx="40" cy="18" rx="20" ry="5" fill="#fef3c7" opacity="0.08"/>
          <ellipse cx="90" cy="12" rx="16" ry="4" fill="#fef3c7" opacity="0.06"/>
        </>}

        {/* ── NIGHT: Deep dark enchanted ── */}
        {isNight && <>
          {/* Stars */}
          {['12,10','35,18','72,8','95,14','118,10','142,20','24,28','148,6','8,22','55,5','88,22','130,30','42,32','105,5','150,14','28,42','68,38','115,35'].map((pos,i) => {
            const [x,y] = pos.split(',')
            return <circle key={i} cx={x} cy={y} r={i%3===0?'0.8':'0.5'} fill="#e2e8f0" opacity={i%2===0?0.9:0.5}/>
          })}

          {/* Moon */}
          <circle cx="138" cy="18" r="10" fill="#fef3c7" opacity="0.9"/>
          <circle cx="134" cy="15" r="9" fill="#05080f" opacity="0.7"/>
          {/* Moon glow */}
          <circle cx="138" cy="18" r="16" fill="#fef3c7" opacity="0.06"/>

          {/* Purple atmospheric haze */}
          <rect x="0" y="60" width="160" height="100" fill="#2a0a3a" opacity="0.08"/>
          <ellipse cx="80" cy="120" rx="80" ry="30" fill="#3a1050" opacity="0.06"/>

          {/* Fog layers */}
          <ellipse cx="60" cy="142" rx="80" ry="8" fill="rgba(200,220,210,0.06)" className="animate-fog"/>
          <ellipse cx="110" cy="148" rx="70" ry="6" fill="rgba(200,220,210,0.05)" className="animate-fog-slow"/>
          <ellipse cx="30" cy="150" rx="60" ry="5" fill="rgba(180,200,220,0.04)"/>

          {/* Fireflies */}
          <circle cx="25" cy="80" r="1.5" fill="#b0ff40" filter="url(#fireflyGlow)" className="animate-firefly" opacity="0.9"/>
          <circle cx="140" cy="70" r="1.2" fill="#b0ff40" filter="url(#fireflyGlow)" className="animate-firefly-2" opacity="0.8"/>
          <circle cx="15" cy="120" r="1" fill="#b0ff40" filter="url(#fireflyGlow)" className="animate-firefly-3" opacity="0.7"/>
          <circle cx="145" cy="110" r="1.3" fill="#b0ff40" filter="url(#fireflyGlow)" className="animate-firefly" opacity="0.85"/>
          <circle cx="35" cy="55" r="1" fill="#b0ff40" filter="url(#fireflyGlow)" className="animate-firefly-2" opacity="0.6"/>
          <circle cx="130" cy="45" r="1.4" fill="#b0ff40" filter="url(#fireflyGlow)" className="animate-firefly-3" opacity="0.75"/>
          <circle cx="10" cy="95" r="0.8" fill="#b0ff40" filter="url(#fireflyGlow)" className="animate-firefly" opacity="0.65"/>
        </>}

        {/* Grass */}
        <path d="M0 148 Q20 140 40 146 Q60 140 80 144 Q100 140 120 146 Q140 140 160 148 L160 160 L0 160 Z" fill="url(#grassGrad)"/>
        {[10,30,55,75,110,135,152].map((x,i) => (
          <path key={i} d={`M${x} 148 Q${x-2} 142 ${x+1} 138`} stroke={isNight ? '#0a3a0c' : '#2a6a20'} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        ))}

        {/* Waterfall */}
        {config.special === 'waterfall' && (
          <g>
            <path d="M128 100 Q130 115 126 130 Q128 140 125 148" stroke="#1e6b7a" strokeWidth="4" fill="none" opacity="0.5" strokeLinecap="round"/>
            <path d="M132 102 Q134 118 130 132 Q131 142 129 150" stroke="#0e4f5c" strokeWidth="2.5" fill="none" opacity="0.4" strokeLinecap="round"/>
          </g>
        )}

        {/* House */}
        {config.shape && <HouseComponent roof={config.roof} door={config.door} windows={config.windows}/>}

        {/* Extra fireflies when selected (night only) */}
        {isNight && config.special === 'fireflies' && <>
          <circle cx="50" cy="60" r="1.8" fill="#b0ff40" filter="url(#fireflyGlow)" className="animate-firefly-3" opacity="0.95"/>
          <circle cx="110" cy="50" r="1.6" fill="#b0ff40" filter="url(#fireflyGlow)" className="animate-firefly" opacity="0.9"/>
          <circle cx="70" cy="40" r="1.2" fill="#b0ff40" filter="url(#fireflyGlow)" className="animate-firefly-2" opacity="0.85"/>
        </>}

        {/* Lights */}
        {config.special === 'lights' && [
          [30,55],[60,48],[100,48],[130,55]
        ].map(([x,y],i) => (
          <g key={i}>
            <line x1={x} y1={y} x2={x+5} y2={y-8} stroke="#5c3a1a" strokeWidth="1"/>
            <circle cx={x+2} cy={y+2} r="3" fill="#fbbf24" filter="url(#windowGlow)" opacity="0.7"/>
          </g>
        ))}

        {/* Rainbow */}
        {config.special === 'rainbow' && (
          <path d="M0 80 Q80 10 160 80" stroke="#a855f7" strokeWidth="3" fill="none" opacity="0.2"/>
        )}

        {/* Wishing well */}
        {config.special === 'well' && (
          <g>
            <rect x="126" y="130" width="18" height="14" rx="2" fill="#374237" stroke="#1a2419" strokeWidth="1"/>
            <path d="M126 130 Q135 122 144 130" fill="#2d3a2d"/>
            <line x1="135" y1="122" x2="135" y2="120" stroke="#1a2419" strokeWidth="1.5"/>
            <line x1="128" y1="119" x2="142" y2="119" stroke="#3b1f0a" strokeWidth="2"/>
          </g>
        )}

        {/* Garden */}
        {config.garden && garden.slice(0,3).map((g,i) => (
          <text key={i} x={i*14+4} y="156" fontSize="13" opacity="0.8">{g}</text>
        ))}
        {config.garden && garden.slice(3).map((g,i) => (
          <text key={i} x={i*14+110} y="156" fontSize="13" opacity="0.8">{g}</text>
        ))}

        {/* Fairies with glow */}
        {isComplete && (
          <>
            <text x="12" y="45" fontSize="18" className="animate-fairy-float" filter="url(#fairyGlow)">🧚‍♀️</text>
            <text x="126" y="38" fontSize="16" className="animate-fairy-float-slow" filter="url(#fairyGlow)">🧚</text>
            <text x="70" y="20" fontSize="14" className="animate-fairy-float-fast" filter="url(#fairyGlow)">🧚‍♂️</text>
          </>
        )}
      </svg>
    </div>
  )
}
