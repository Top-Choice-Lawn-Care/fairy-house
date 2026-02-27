'use client'
import type { HouseConfig } from '@/lib/types'

interface Props { config: Partial<HouseConfig>; isNight?: boolean; isComplete?: boolean }

// ── SVG house illustrations — Dark Enchanted Forest Theme ────────────

function MushroomHouse({ roof, door, windows }: { roof?: string; door?: string; windows?: string }) {
  const capColor = roof === 'crystal' ? ['#0e4f5c','#1e6b7a'] : roof === 'flower' ? ['#5c1a3a','#7a2e52'] : roof === 'bark' ? ['#3b1f0a','#4a2810'] : ['#7f1d1d','#991b1b']
  const spotColor = roof === 'crystal' ? '#a5f3fc33' : '#fef3c766'
  const doorColor = door === 'crystal' ? '#0e4f5c' : door === 'vine' ? '#166534' : door === 'leaf' ? '#15803d' : '#78350f'
  const winColor = '#fbbf24'
  return (
    <g>
      {/* Stem */}
      <path d="M52 152 Q46 110 48 85 Q56 80 80 80 Q104 80 112 85 Q114 110 108 152 Z" fill="#f5f0e8" stroke="#a89070" strokeWidth="1.5"/>
      <path d="M60 100 Q80 98 100 100" stroke="#a89070" strokeWidth="1" fill="none" opacity="0.4"/>
      <path d="M58 115 Q80 112 102 115" stroke="#a89070" strokeWidth="1" fill="none" opacity="0.4"/>
      <path d="M57 130 Q80 127 103 130" stroke="#a89070" strokeWidth="1" fill="none" opacity="0.4"/>
      {/* Windows */}
      {windows && <>
        <ellipse cx="62" cy="105" rx="7" ry="7" fill={winColor} filter="url(#windowGlow)" className="animate-window" stroke="#a89070" strokeWidth="1"/>
        <ellipse cx="98" cy="105" rx="7" ry="7" fill={winColor} filter="url(#windowGlow)" className="animate-window" stroke="#a89070" strokeWidth="1"/>
      </>}
      {/* Door */}
      <path d="M68 152 Q68 128 80 126 Q92 128 92 152 Z" fill={doorColor} stroke="#3b1f0a" strokeWidth="1.5"/>
      <circle cx="88" cy="140" r="2.5" fill="#fbbf24" filter="url(#windowGlow)"/>
      {/* Cap shadow */}
      <path d="M28 88 Q50 100 80 100 Q110 100 132 88 Q130 96 80 98 Q30 96 28 88 Z" fill={capColor[0]} opacity="0.4"/>
      {/* Main cap */}
      <path d="M80 28 Q30 32 22 75 Q20 88 28 90 Q52 102 80 103 Q108 102 132 90 Q140 88 138 75 Q130 32 80 28 Z" fill={capColor[0]}/>
      <path d="M80 32 Q50 36 38 62 Q50 40 80 38 Q110 40 122 62 Q110 36 80 32 Z" fill={capColor[1]} opacity="0.4"/>
      {/* Spots */}
      <ellipse cx="58" cy="58" rx="9" ry="8" fill={spotColor} opacity="0.9"/>
      <ellipse cx="82" cy="46" rx="11" ry="9" fill={spotColor} opacity="0.9"/>
      <ellipse cx="106" cy="60" rx="8" ry="7" fill={spotColor} opacity="0.9"/>
      <ellipse cx="46" cy="74" rx="6" ry="5" fill={spotColor} opacity="0.6"/>
      <ellipse cx="116" cy="76" rx="6" ry="5" fill={spotColor} opacity="0.6"/>
    </g>
  )
}

function TreeHouse({ roof, door, windows }: { roof?: string; door?: string; windows?: string }) {
  const roofColor = roof === 'crystal' ? '#0e4f5c' : roof === 'flower' ? '#5c1a3a' : roof === 'bark' ? '#1a0d05' : '#2d1b0e'
  const doorColor = door === 'crystal' ? '#0e4f5c' : door === 'vine' ? '#166534' : '#3b1f0a'
  const winColor = '#fbbf24'
  return (
    <g>
      {/* Tree trunk */}
      <path d="M70 155 Q64 120 62 90 Q70 82 80 82 Q90 82 98 90 Q96 120 90 155 Z" fill="#3b1f0a" stroke="#2a1505" strokeWidth="1.5"/>
      <path d="M68 110 Q80 107 92 110" stroke="#2a1505" strokeWidth="1" fill="none" opacity="0.5"/>
      <path d="M66 128 Q80 125 94 128" stroke="#2a1505" strokeWidth="1" fill="none" opacity="0.5"/>
      {/* Roots */}
      <path d="M64 152 Q55 148 48 155" stroke="#2a1505" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M96 152 Q105 148 112 155" stroke="#2a1505" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M60 150 Q50 144 40 152" stroke="#2a1505" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M100 150 Q110 144 120 152" stroke="#2a1505" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* Rope ladder */}
      <line x1="72" y1="90" x2="68" y2="155" stroke="#5c3a1a" strokeWidth="2"/>
      <line x1="88" y1="90" x2="92" y2="155" stroke="#5c3a1a" strokeWidth="2"/>
      {[100,112,124,136,148].map(y => <line key={y} x1="70" y1={y} x2="90" y2={y+2} stroke="#5c3a1a" strokeWidth="1.5"/>)}
      {/* Platform */}
      <rect x="32" y="82" width="96" height="8" rx="2" fill="#2d1b0e" stroke="#1a0d05" strokeWidth="1"/>
      {/* House body */}
      <rect x="36" y="50" width="88" height="34" rx="3" fill="#2d1b0e" stroke="#3b1f0a" strokeWidth="1.5"/>
      {[58,66,74].map(y => <line key={y} x1="36" y1={y} x2="124" y2={y} stroke="#1a0d05" strokeWidth="0.8" opacity="0.4"/>)}
      {/* Windows */}
      {windows && <>
        <rect x="44" y="56" width="14" height="14" rx="2" fill={winColor} filter="url(#windowGlow)" className="animate-window" stroke="#5c3a1a" strokeWidth="1"/>
        <rect x="102" y="56" width="14" height="14" rx="2" fill={winColor} filter="url(#windowGlow)" className="animate-window" stroke="#5c3a1a" strokeWidth="1"/>
      </>}
      {/* Door */}
      <path d="M70 84 Q70 66 80 65 Q90 66 90 84 Z" fill={doorColor} stroke="#1a0d05" strokeWidth="1"/>
      <circle cx="88" cy="76" r="2" fill="#fbbf24" filter="url(#windowGlow)"/>
      {/* Roof */}
      <polygon points="28,52 80,18 132,52" fill={roofColor}/>
      <polygon points="28,52 80,18 80,22 32,52" fill="#22c55e" opacity="0.15"/>
      <line x1="28" y1="52" x2="132" y2="52" stroke="#1a0d05" strokeWidth="1.5" opacity="0.4"/>
      {/* Moss on roof */}
      <path d="M35 50 Q50 46 65 50" stroke="#22c55e" strokeWidth="2" fill="none" opacity="0.4"/>
      <path d="M95 50 Q110 46 125 50" stroke="#22c55e" strokeWidth="2" fill="none" opacity="0.3"/>
    </g>
  )
}

function StoneHouse({ roof, door, windows }: { roof?: string; door?: string; windows?: string }) {
  const roofColor = roof === 'crystal' ? '#0e4f5c' : roof === 'flower' ? '#5c1a3a' : roof === 'thatched' ? '#3b2f10' : roof === 'bark' ? '#1a0d05' : '#1a2e2a'
  const doorColor = door === 'crystal' ? '#0e4f5c' : door === 'vine' ? '#166534' : door === 'arched' ? '#374237' : '#3b1f0a'
  const winColor = '#fb923c'
  const stoneColors = ['#2d3a2d', '#374237', '#2a3530', '#243428']
  const stones = [
    [36,90,28,16],[68,90,24,16],[96,90,30,16],[128,90,22,16],
    [32,108,26,16],[60,108,32,16],[94,108,28,16],[124,108,26,16],
    [36,126,30,16],[70,126,26,16],[98,126,28,16],[126,126,24,16],
  ]
  return (
    <g>
      <rect x="32" y="88" width="96" height="64" rx="2" fill="#2d3a2d"/>
      {stones.map(([x,y,w,h],i) => (
        <rect key={i} x={x} y={y} width={w} height={h} rx="3" fill={stoneColors[i%4]} stroke="#1a2419" strokeWidth="0.8"/>
      ))}
      {/* Chimney */}
      <rect x="100" y="38" width="16" height="28" rx="2" fill="#374237" stroke="#1a2419" strokeWidth="1"/>
      {/* Glowing ember smoke */}
      <path d="M108 36 Q106 28 110 22 Q114 16 112 10" stroke="#fb923c" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.4"/>
      <path d="M108 36 Q104 26 108 18" stroke="#fbbf24" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.3"/>
      {/* Windows */}
      {windows && <>
        <rect x="42" y="100" width="18" height="18" rx={windows==='porthole'?'9':'3'} fill={winColor} filter="url(#windowGlow)" className="animate-window" stroke="#4a5a4a" strokeWidth="1.5"/>
        <rect x="100" y="100" width="18" height="18" rx={windows==='porthole'?'9':'3'} fill={winColor} filter="url(#windowGlow)" className="animate-window" stroke="#4a5a4a" strokeWidth="1.5"/>
      </>}
      {/* Door */}
      <path d="M66 152 Q66 124 80 122 Q94 124 94 152 Z" fill={doorColor} stroke="#1a2419" strokeWidth="1.5"/>
      <circle cx="91" cy="138" r="2.5" fill="#fbbf24" filter="url(#windowGlow)"/>
      {/* Roof */}
      {roof === 'thatched' ? <>
        <polygon points="24,90 80,42 136,90" fill="#3b2f10"/>
        {[52,60,68,76,84].map((y,i) => (
          <path key={i} d={`M${28+i*4},${90-i*8} Q80,${40-i*4} ${132-i*4},${90-i*8}`} stroke="#2a1f0a" strokeWidth="2" fill="none" opacity="0.4"/>
        ))}
      </> : <>
        <polygon points="24,90 80,42 136,90" fill={roofColor}/>
        <polygon points="24,90 80,42 80,48 28,90" fill="#22c55e" opacity="0.08"/>
      </>}
    </g>
  )
}

function CrystalTower({ roof, door, windows }: { roof?: string; door?: string; windows?: string }) {
  const baseColor = roof === 'flower' ? ['#3b1a5c','#5c2a8a'] : ['#0e4f5c','#1e6b7a']
  const winColor = '#a78bfa'
  return (
    <g>
      <path d="M52 152 L46 100 Q46 88 60 84 L80 80 L100 84 Q114 88 114 100 L108 152 Z" fill={`url(#crystalGrad)`}/>
      <defs>
        <linearGradient id="crystalGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={baseColor[0]} stopOpacity="0.95"/>
          <stop offset="50%" stopColor={baseColor[1]}/>
          <stop offset="100%" stopColor={baseColor[0]} stopOpacity="0.95"/>
        </linearGradient>
      </defs>
      <line x1="80" y1="80" x2="70" y2="152" stroke="#1e6b7a" strokeWidth="1" opacity="0.3"/>
      <line x1="80" y1="80" x2="90" y2="152" stroke="#1e6b7a" strokeWidth="1" opacity="0.3"/>
      {/* Windows */}
      {windows && [95,112,130].map(y => (
        <ellipse key={y} cx="80" cy={y} rx="9" ry="9" fill={winColor} filter="url(#windowGlow)" className="animate-window" stroke={baseColor[1]} strokeWidth="1.5" opacity="0.9"/>
      ))}
      {/* Door */}
      <path d="M67 152 Q67 130 80 128 Q93 130 93 152 Z" fill={door==='crystal'?'#0e4f5c':'#1e0a3c'} stroke={baseColor[1]} strokeWidth="1.5"/>
      <circle cx="91" cy="140" r="2" fill="#a78bfa" filter="url(#windowGlow)"/>
      {/* Spire */}
      <polygon points="80,8 62,48 98,48" fill={baseColor[0]} stroke={baseColor[1]} strokeWidth="1"/>
      <polygon points="80,8 62,48 80,38" fill={baseColor[1]} opacity="0.2"/>
      <polygon points="57,40 48,62 66,62" fill={baseColor[0]} opacity="0.8"/>
      <polygon points="103,40 94,62 112,62" fill={baseColor[0]} opacity="0.8"/>
    </g>
  )
}

function HollowLog({ roof, door, windows }: { roof?: string; door?: string; windows?: string }) {
  const logColor = ['#1a0d05','#120800','#2a1808']
  const winColor = '#fbbf24'
  return (
    <g>
      <ellipse cx="80" cy="138" rx="75" ry="14" fill="#0a0500" opacity="0.4"/>
      <path d="M8 100 Q8 68 80 68 Q152 68 152 100 L152 124 Q152 156 80 156 Q8 156 8 124 Z" fill={logColor[0]}/>
      {[0,1,2,3].map(i => (
        <path key={i} d={`M${20+i*32} 70 Q${24+i*32} 80 ${20+i*32} 155`} stroke={logColor[1]} strokeWidth="2.5" fill="none" opacity="0.35" strokeLinecap="round"/>
      ))}
      <path d="M8 100 Q8 80 80 78 Q152 80 152 100 Q152 86 80 84 Q8 86 8 100 Z" fill={logColor[2]} opacity="0.3"/>
      {/* Mossy top */}
      <path d="M22 86 Q50 78 80 80 Q110 78 138 84 Q110 92 80 90 Q50 92 22 86 Z" fill="#22c55e" opacity="0.7"/>
      {/* End rings */}
      <ellipse cx="16" cy="112" rx="12" ry="30" fill={logColor[0]} stroke={logColor[1]} strokeWidth="1.5"/>
      <ellipse cx="16" cy="112" rx="8" ry="22" fill={logColor[2]} opacity="0.3"/>
      <ellipse cx="16" cy="112" rx="4" ry="12" fill="#000000" opacity="0.6"/>
      <ellipse cx="144" cy="112" rx="12" ry="30" fill={logColor[0]} stroke={logColor[1]} strokeWidth="1.5"/>
      <ellipse cx="144" cy="112" rx="8" ry="22" fill={logColor[2]} opacity="0.3"/>
      <ellipse cx="144" cy="112" rx="4" ry="12" fill="#000000" opacity="0.6"/>
      {/* Hollow */}
      <ellipse cx="80" cy="130" rx="22" ry="26" fill="#000000"/>
      <path d="M64 156 Q64 118 80 116 Q96 118 96 156 Z" fill={door==='vine'?'#166534':door==='crystal'?'#0e4f5c':'#000000'}/>
      <circle cx="93" cy="132" r="2.5" fill={winColor} filter="url(#windowGlow)"/>
      {/* Windows */}
      {windows && <>
        <ellipse cx="46" cy="106" rx="10" ry="10" fill={winColor} filter="url(#windowGlow)" className="animate-window" stroke={logColor[1]} strokeWidth="1.5"/>
        <ellipse cx="114" cy="106" rx="10" ry="10" fill={winColor} filter="url(#windowGlow)" className="animate-window" stroke={logColor[1]} strokeWidth="1.5"/>
      </>}
      <text x="28" y="80" fontSize="14" opacity="0.7">🍄</text>
      <text x="118" y="78" fontSize="12" opacity="0.7">🍄</text>
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
        <defs>
          <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#05080f"/>
            <stop offset="100%" stopColor="#0d1a0e"/>
          </linearGradient>
          <linearGradient id="grassGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0d2e0f"/>
            <stop offset="100%" stopColor="#0a1e0b"/>
          </linearGradient>
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
        </defs>

        {/* Sky */}
        <rect x="0" y="0" width="160" height="160" fill="url(#skyGrad)"/>

        {/* Stars */}
        {['12,10','35,18','72,8','95,14','118,10','142,20','24,28','148,6','8,22','55,5','88,22','130,30','42,32','105,5','150,14','28,42','68,38','115,35'].map((pos,i) => {
          const [x,y] = pos.split(',')
          return <circle key={i} cx={x} cy={y} r={i%3===0?'0.8':'0.5'} fill="#e2e8f0" opacity={i%2===0?0.9:0.5}/>
        })}

        {/* Moon */}
        <circle cx="138" cy="18" r="10" fill="#fef3c7" opacity="0.9"/>
        <circle cx="134" cy="15" r="9" fill="#05080f" opacity="0.7"/>

        {/* Fog layers */}
        <ellipse cx="60" cy="142" rx="80" ry="8" fill="rgba(200,220,210,0.06)" className="animate-fog"/>
        <ellipse cx="110" cy="148" rx="70" ry="6" fill="rgba(200,220,210,0.05)" className="animate-fog-slow"/>

        {/* Grass */}
        <path d="M0 148 Q20 140 40 146 Q60 140 80 144 Q100 140 120 146 Q140 140 160 148 L160 160 L0 160 Z" fill="url(#grassGrad)"/>
        {[10,30,55,75,110,135,152].map((x,i) => (
          <path key={i} d={`M${x} 148 Q${x-2} 142 ${x+1} 138`} stroke="#0a3a0c" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
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

        {/* Ambient fireflies — always present */}
        <circle cx="25" cy="80" r="1.5" fill="#b0ff40" filter="url(#fireflyGlow)" className="animate-firefly" opacity="0.9"/>
        <circle cx="140" cy="70" r="1.2" fill="#b0ff40" filter="url(#fireflyGlow)" className="animate-firefly-2" opacity="0.8"/>
        <circle cx="15" cy="120" r="1" fill="#b0ff40" filter="url(#fireflyGlow)" className="animate-firefly-3" opacity="0.7"/>
        <circle cx="145" cy="110" r="1.3" fill="#b0ff40" filter="url(#fireflyGlow)" className="animate-firefly" opacity="0.85"/>
        <circle cx="35" cy="55" r="1" fill="#b0ff40" filter="url(#fireflyGlow)" className="animate-firefly-2" opacity="0.6"/>
        <circle cx="130" cy="45" r="1.4" fill="#b0ff40" filter="url(#fireflyGlow)" className="animate-firefly-3" opacity="0.75"/>
        <circle cx="10" cy="95" r="0.8" fill="#b0ff40" filter="url(#fireflyGlow)" className="animate-firefly" opacity="0.65"/>

        {/* Extra fireflies when selected */}
        {config.special === 'fireflies' && <>
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
