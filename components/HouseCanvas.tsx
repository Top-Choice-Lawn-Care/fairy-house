'use client'
import type { HouseConfig } from '@/lib/types'

interface Props { config: Partial<HouseConfig>; isNight?: boolean; isComplete?: boolean }

// ── SVG house illustrations ──────────────────────────────────────────────

function MushroomHouse({ roof, door, windows }: { roof?: string; door?: string; windows?: string }) {
  const capColor = roof === 'crystal' ? ['#67e8f9','#a5f3fc'] : roof === 'flower' ? ['#f9a8d4','#fbcfe8'] : roof === 'bark' ? ['#854d0e','#a16207'] : ['#dc2626','#ef4444']
  const spotColor = roof === 'crystal' ? '#e0f2fe' : 'white'
  const doorColor = door === 'crystal' ? '#67e8f9' : door === 'vine' ? '#16a34a' : door === 'leaf' ? '#22c55e' : '#92400e'
  const winColor = windows === 'heart' ? '#c084fc' : windows === 'stained' ? '#fb923c' : '#bae6fd'
  return (
    <g>
      {/* Stem */}
      <path d="M52 152 Q46 110 48 85 Q56 80 80 80 Q104 80 112 85 Q114 110 108 152 Z" fill="#fef9c3" stroke="#d4b483" strokeWidth="1.5"/>
      {/* Stem texture */}
      <path d="M60 100 Q80 98 100 100" stroke="#d4b483" strokeWidth="1" fill="none" opacity="0.6"/>
      <path d="M58 115 Q80 112 102 115" stroke="#d4b483" strokeWidth="1" fill="none" opacity="0.6"/>
      <path d="M57 130 Q80 127 103 130" stroke="#d4b483" strokeWidth="1" fill="none" opacity="0.6"/>
      {/* Windows on stem */}
      {windows && <>
        <ellipse cx="62" cy="105" rx="7" ry="7" fill={winColor} stroke="#a0aec0" strokeWidth="1"/>
        <ellipse cx="98" cy="105" rx="7" ry="7" fill={winColor} stroke="#a0aec0" strokeWidth="1"/>
        {windows === 'heart' && <text x="55" y="109" fontSize="10">💜</text>}
      </>}
      {/* Door */}
      <path d="M68 152 Q68 128 80 126 Q92 128 92 152 Z" fill={doorColor} stroke="#78350f" strokeWidth="1.5"/>
      <circle cx="88" cy="140" r="2.5" fill="#fbbf24"/>
      {/* Cap shadow/underside */}
      <path d="M28 88 Q50 100 80 100 Q110 100 132 88 Q130 96 80 98 Q30 96 28 88 Z" fill={capColor[0]} opacity="0.3"/>
      {/* Main cap */}
      <path d="M80 28 Q30 32 22 75 Q20 88 28 90 Q52 102 80 103 Q108 102 132 90 Q140 88 138 75 Q130 32 80 28 Z" fill={capColor[0]}/>
      {/* Cap highlight */}
      <path d="M80 32 Q50 36 38 62 Q50 40 80 38 Q110 40 122 62 Q110 36 80 32 Z" fill={capColor[1]} opacity="0.5"/>
      {/* Spots */}
      <ellipse cx="58" cy="58" rx="9" ry="8" fill={spotColor} opacity="0.9"/>
      <ellipse cx="82" cy="46" rx="11" ry="9" fill={spotColor} opacity="0.9"/>
      <ellipse cx="106" cy="60" rx="8" ry="7" fill={spotColor} opacity="0.9"/>
      <ellipse cx="46" cy="74" rx="6" ry="5" fill={spotColor} opacity="0.7"/>
      <ellipse cx="116" cy="76" rx="6" ry="5" fill={spotColor} opacity="0.7"/>
    </g>
  )
}

function TreeHouse({ roof, door, windows }: { roof?: string; door?: string; windows?: string }) {
  const roofColor = roof === 'crystal' ? '#67e8f9' : roof === 'flower' ? '#f9a8d4' : roof === 'bark' ? '#854d0e' : '#d97706'
  const doorColor = door === 'crystal' ? '#67e8f9' : door === 'vine' ? '#16a34a' : '#92400e'
  const winColor = windows === 'heart' ? '#c084fc' : windows === 'stained' ? '#fb923c' : '#bae6fd'
  return (
    <g>
      {/* Tree trunk */}
      <path d="M70 155 Q64 120 62 90 Q70 82 80 82 Q90 82 98 90 Q96 120 90 155 Z" fill="#92400e" stroke="#78350f" strokeWidth="1.5"/>
      {/* Trunk texture */}
      <path d="M68 110 Q80 107 92 110" stroke="#78350f" strokeWidth="1" fill="none" opacity="0.5"/>
      <path d="M66 128 Q80 125 94 128" stroke="#78350f" strokeWidth="1" fill="none" opacity="0.5"/>
      {/* Roots */}
      <path d="M64 152 Q55 148 48 155" stroke="#78350f" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M96 152 Q105 148 112 155" stroke="#78350f" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* Rope ladder */}
      <line x1="72" y1="90" x2="68" y2="155" stroke="#d97706" strokeWidth="2"/>
      <line x1="88" y1="90" x2="92" y2="155" stroke="#d97706" strokeWidth="2"/>
      {[100,112,124,136,148].map(y => <line key={y} x1="70" y1={y} x2="90" y2={y+2} stroke="#d97706" strokeWidth="1.5"/>)}
      {/* Platform */}
      <rect x="32" y="82" width="96" height="8" rx="2" fill="#92400e" stroke="#78350f" strokeWidth="1"/>
      {/* House body */}
      <rect x="36" y="50" width="88" height="34" rx="3" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5"/>
      {/* Wood planks */}
      {[58,66,74].map(y => <line key={y} x1="36" y1={y} x2="124" y2={y} stroke="#d97706" strokeWidth="0.8" opacity="0.4"/>)}
      {/* Windows */}
      {windows && <>
        <rect x="44" y="56" width="14" height="14" rx="2" fill={winColor} stroke="#a0aec0" strokeWidth="1"/>
        <rect x="102" y="56" width="14" height="14" rx="2" fill={winColor} stroke="#a0aec0" strokeWidth="1"/>
      </>}
      {/* Door */}
      <path d="M70 84 Q70 66 80 65 Q90 66 90 84 Z" fill={doorColor} stroke="#78350f" strokeWidth="1"/>
      <circle cx="88" cy="76" r="2" fill="#fbbf24"/>
      {/* Roof */}
      <polygon points="28,52 80,18 132,52" fill={roofColor} stroke={roofColor} strokeWidth="1"/>
      {/* Roof highlight */}
      <polygon points="28,52 80,18 80,22 32,52" fill="white" opacity="0.15"/>
      {/* Roof ridge */}
      <line x1="28" y1="52" x2="132" y2="52" stroke="#78350f" strokeWidth="1.5" opacity="0.4"/>
      {/* Leaves around platform */}
      <text x="18" y="75" fontSize="22" opacity="0.85">🍃</text>
      <text x="120" y="72" fontSize="20" opacity="0.85">🍃</text>
      <text x="22" y="55" fontSize="16" opacity="0.7">🌿</text>
    </g>
  )
}

function StoneHouse({ roof, door, windows }: { roof?: string; door?: string; windows?: string }) {
  const roofColor = roof === 'crystal' ? '#67e8f9' : roof === 'flower' ? '#f9a8d4' : roof === 'thatched' ? '#d97706' : roof === 'bark' ? '#854d0e' : '#a8a29e'
  const doorColor = door === 'crystal' ? '#67e8f9' : door === 'vine' ? '#16a34a' : door === 'arched' ? '#9ca3af' : '#92400e'
  const winColor = windows === 'heart' ? '#c084fc' : windows === 'stained' ? '#fb923c' : '#bae6fd'
  const stones = [
    [36,90,28,16],[68,90,24,16],[96,90,30,16],[128,90,22,16],
    [32,108,26,16],[60,108,32,16],[94,108,28,16],[124,108,26,16],
    [36,126,30,16],[70,126,26,16],[98,126,28,16],[126,126,24,16],
  ]
  return (
    <g>
      {/* Stone walls */}
      <rect x="32" y="88" width="96" height="64" rx="2" fill="#d6d3d1"/>
      {/* Individual stones */}
      {stones.map(([x,y,w,h],i) => (
        <rect key={i} x={x} y={y} width={w} height={h} rx="3" fill={i%3===0?'#a8a29e':i%3===1?'#d6d3d1':'#e7e5e4'} stroke="#78716c" strokeWidth="0.8"/>
      ))}
      {/* Chimney */}
      <rect x="100" y="38" width="16" height="28" rx="2" fill="#a8a29e" stroke="#78716c" strokeWidth="1"/>
      {/* Smoke */}
      <path d="M108 36 Q106 28 110 22 Q114 16 112 10" stroke="#d1d5db" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7"/>
      {/* Windows */}
      {windows && <>
        <rect x="42" y="100" width="18" height="18" rx={windows==='porthole'?'9':'3'} fill={winColor} stroke="#9ca3af" strokeWidth="1.5"/>
        {windows==='heart' && <text x="40" y="114" fontSize="13">💜</text>}
        <rect x="100" y="100" width="18" height="18" rx={windows==='porthole'?'9':'3'} fill={winColor} stroke="#9ca3af" strokeWidth="1.5"/>
      </>}
      {/* Arched door */}
      <path d="M66 152 Q66 124 80 122 Q94 124 94 152 Z" fill={doorColor} stroke="#78716c" strokeWidth="1.5"/>
      {door==='vine' && <text x="60" y="138" fontSize="14">🍃</text>}
      <circle cx="91" cy="138" r="2.5" fill="#fbbf24"/>
      {/* Roof (thatched = straw layers, others = pitched) */}
      {roof === 'thatched' ? <>
        <polygon points="24,90 80,42 136,90" fill="#d97706"/>
        {[52,60,68,76,84].map((y,i) => (
          <path key={i} d={`M${28+i*4},${90-i*8} Q80,${40-i*4} ${132-i*4},${90-i*8}`} stroke="#92400e" strokeWidth="2" fill="none" opacity="0.4"/>
        ))}
      </> : <>
        <polygon points="24,90 80,42 136,90" fill={roofColor}/>
        <polygon points="24,90 80,42 80,48 28,90" fill="white" opacity="0.12"/>
      </>}
      {/* Roof cap/ridge */}
      {roof==='flower' && <text x="68" y="60" fontSize="16">🌸🌸</text>}
    </g>
  )
}

function CrystalTower({ roof, door, windows }: { roof?: string; door?: string; windows?: string }) {
  const baseColor = roof === 'flower' ? ['#f0abfc','#e879f9'] : ['#67e8f9','#22d3ee']
  const winColor = windows === 'heart' ? '#c084fc' : '#e0f2fe'
  return (
    <g>
      {/* Tower base */}
      <path d="M52 152 L46 100 Q46 88 60 84 L80 80 L100 84 Q114 88 114 100 L108 152 Z" fill={`url(#crystalGrad)`}/>
      <defs>
        <linearGradient id="crystalGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={baseColor[0]} stopOpacity="0.9"/>
          <stop offset="50%" stopColor="#e0f2fe"/>
          <stop offset="100%" stopColor={baseColor[0]} stopOpacity="0.9"/>
        </linearGradient>
      </defs>
      {/* Facet lines */}
      <line x1="80" y1="80" x2="70" y2="152" stroke="white" strokeWidth="1" opacity="0.4"/>
      <line x1="80" y1="80" x2="90" y2="152" stroke="white" strokeWidth="1" opacity="0.4"/>
      {/* Windows */}
      {windows && [95,112,130].map(y => (
        <ellipse key={y} cx="80" cy={y} rx="9" ry="9" fill={winColor} stroke={baseColor[1]} strokeWidth="1.5" opacity="0.9"/>
      ))}
      {/* Door */}
      <path d="M67 152 Q67 130 80 128 Q93 130 93 152 Z" fill={door==='crystal'?'#a5f3fc':'#7c3aed'} stroke={baseColor[1]} strokeWidth="1.5"/>
      <circle cx="91" cy="140" r="2" fill="#fbbf24"/>
      {/* Spire */}
      <polygon points="80,8 62,48 98,48" fill={baseColor[1]} stroke={baseColor[0]} strokeWidth="1"/>
      <polygon points="80,8 62,48 80,38" fill="white" opacity="0.3"/>
      {/* Smaller side spires */}
      <polygon points="57,40 48,62 66,62" fill={baseColor[0]} opacity="0.8"/>
      <polygon points="103,40 94,62 112,62" fill={baseColor[0]} opacity="0.8"/>
      {/* Sparkles */}
      <text x="30" y="50" fontSize="14" className="animate-sparkle">✨</text>
      <text x="118" y="55" fontSize="12" className="animate-sparkle" style={{animationDelay:'0.5s'}}>✨</text>
      <text x="75" y="18" fontSize="10" className="animate-sparkle" style={{animationDelay:'1s'}}>⭐</text>
    </g>
  )
}

function HollowLog({ roof, door, windows }: { roof?: string; door?: string; windows?: string }) {
  const logColor = ['#92400e','#78350f','#a16207']
  const winColor = windows === 'heart' ? '#c084fc' : windows === 'stained' ? '#fb923c' : '#bae6fd'
  return (
    <g>
      {/* Log shadow */}
      <ellipse cx="80" cy="138" rx="75" ry="14" fill="#78350f" opacity="0.25"/>
      {/* Main log body */}
      <path d="M8 100 Q8 68 80 68 Q152 68 152 100 L152 124 Q152 156 80 156 Q8 156 8 124 Z" fill={logColor[0]}/>
      {/* Bark texture stripes */}
      {[0,1,2,3].map(i => (
        <path key={i} d={`M${20+i*32} 70 Q${24+i*32} 80 ${20+i*32} 155`} stroke={logColor[1]} strokeWidth="2.5" fill="none" opacity="0.35" strokeLinecap="round"/>
      ))}
      {/* Top surface highlight */}
      <path d="M8 100 Q8 80 80 78 Q152 80 152 100 Q152 86 80 84 Q8 86 8 100 Z" fill={logColor[2]} opacity="0.4"/>
      {/* Mossy top */}
      {roof === 'bark' || roof === 'thatched' ? (
        <path d="M20 84 Q40 76 60 80 Q80 74 100 78 Q120 74 140 82 Q120 90 80 88 Q40 90 20 84 Z" fill="#16a34a" opacity="0.7"/>
      ) : roof === 'flower' ? (
        <text x="50" y="82" fontSize="18">🌸🌷🌸</text>
      ) : roof === 'crystal' ? (
        <text x="55" y="80" fontSize="16">💎✨💎</text>
      ) : (
        <path d="M22 86 Q50 78 80 80 Q110 78 138 84 Q110 92 80 90 Q50 92 22 86 Z" fill="#854d0e" opacity="0.5"/>
      )}
      {/* End rings - left */}
      <ellipse cx="16" cy="112" rx="12" ry="30" fill={logColor[0]} stroke={logColor[1]} strokeWidth="1.5"/>
      <ellipse cx="16" cy="112" rx="8" ry="22" fill={logColor[2]} opacity="0.5"/>
      <ellipse cx="16" cy="112" rx="4" ry="12" fill={logColor[1]} opacity="0.5"/>
      {/* End rings - right */}
      <ellipse cx="144" cy="112" rx="12" ry="30" fill={logColor[0]} stroke={logColor[1]} strokeWidth="1.5"/>
      <ellipse cx="144" cy="112" rx="8" ry="22" fill={logColor[2]} opacity="0.5"/>
      <ellipse cx="144" cy="112" rx="4" ry="12" fill={logColor[1]} opacity="0.5"/>
      {/* Hollow door opening */}
      <ellipse cx="80" cy="130" rx="22" ry="26" fill="#1c0a00"/>
      {/* Door */}
      <path d="M64 156 Q64 118 80 116 Q96 118 96 156 Z" fill={door==='vine'?'#15803d':door==='crystal'?'#67e8f9':'#1c0a00'}/>
      {door==='vine' && <text x="67" y="138" fontSize="14">🍃🍃</text>}
      <circle cx="93" cy="132" r="2.5" fill="#fbbf24"/>
      {/* Windows */}
      {windows && <>
        <ellipse cx="46" cy="106" rx="10" ry="10" fill={winColor} stroke={logColor[1]} strokeWidth="1.5"/>
        <ellipse cx="114" cy="106" rx="10" ry="10" fill={winColor} stroke={logColor[1]} strokeWidth="1.5"/>
      </>}
      {/* Mushrooms on log */}
      <text x="28" y="80" fontSize="14">🍄</text>
      <text x="118" y="78" fontSize="12">🍄</text>
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

  const skyStop1 = isNight ? '#0f172a' : '#bfdbfe'
  const skyStop2 = isNight ? '#1e1b4b' : '#ede9fe'
  const grassColor = isNight ? '#14532d' : '#4ade80'
  const grassStroke = isNight ? '#166534' : '#16a34a'

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
            <stop offset="0%" stopColor={skyStop1}/>
            <stop offset="100%" stopColor={skyStop2}/>
          </linearGradient>
          <linearGradient id="grassGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={grassColor}/>
            <stop offset="100%" stopColor={grassStroke}/>
          </linearGradient>
        </defs>

        {/* Sky */}
        <rect x="0" y="0" width="160" height="160" fill="url(#skyGrad)"/>

        {/* Stars */}
        {isNight && ['12,10','35,18','72,8','95,14','118,10','142,20','24,28','148,6'].map((pos,i) => {
          const [x,y] = pos.split(',')
          return <text key={i} x={x} y={y} fontSize="5" fill="white" opacity="0.8">★</text>
        })}

        {/* Sun or Moon */}
        {isNight
          ? <text x="130" y="22" fontSize="14">🌙</text>
          : <text x="128" y="20" fontSize="16">☀️</text>
        }

        {/* Clouds (day) */}
        {!isNight && <>
          <ellipse cx="28" cy="22" rx="14" ry="8" fill="white" opacity="0.85"/>
          <ellipse cx="38" cy="18" rx="10" ry="8" fill="white" opacity="0.85"/>
          <ellipse cx="50" cy="22" rx="12" ry="7" fill="white" opacity="0.85"/>
          <ellipse cx="85" cy="15" rx="10" ry="6" fill="white" opacity="0.6"/>
          <ellipse cx="95" cy="12" rx="8" ry="6" fill="white" opacity="0.6"/>
        </>}

        {/* Rainbow */}
        {config.special === 'rainbow' && !isNight && (
          <path d="M0 80 Q80 10 160 80" stroke="#f87171" strokeWidth="3" fill="none" opacity="0.4"/>
        )}

        {/* Grass */}
        <path d="M0 148 Q20 140 40 146 Q60 140 80 144 Q100 140 120 146 Q140 140 160 148 L160 160 L0 160 Z" fill="url(#grassGrad)"/>
        {/* Grass blades */}
        {[10,22,35,50,65,95,110,125,140,152].map((x,i) => (
          <path key={i} d={`M${x} 148 Q${x-2} 142 ${x+1} 138`} stroke={grassStroke} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        ))}

        {/* Waterfall */}
        {config.special === 'waterfall' && (
          <g>
            <path d="M128 100 Q130 115 126 130 Q128 140 125 148" stroke="#7dd3fc" strokeWidth="4" fill="none" opacity="0.7" strokeLinecap="round"/>
            <path d="M132 102 Q134 118 130 132 Q131 142 129 150" stroke="#bae6fd" strokeWidth="2.5" fill="none" opacity="0.5" strokeLinecap="round"/>
          </g>
        )}

        {/* House */}
        {config.shape && <HouseComponent roof={config.roof} door={config.door} windows={config.windows}/>}

        {/* Fireflies */}
        {config.special === 'fireflies' && isNight && [
          [25,60],[45,90],[110,70],[130,95],[55,110]
        ].map(([x,y],i) => (
          <text key={i} x={x} y={y} fontSize="8">✨</text>
        ))}

        {/* Lights */}
        {config.special === 'lights' && [
          [30,55],[60,48],[100,48],[130,55]
        ].map(([x,y],i) => (
          <g key={i}>
            <line x1={x} y1={y} x2={x+5} y2={y-8} stroke="#d97706" strokeWidth="1"/>
            <text x={x-2} y={y+6} fontSize="8">🪔</text>
          </g>
        ))}

        {/* Wishing well */}
        {config.special === 'well' && (
          <g>
            <rect x="126" y="130" width="18" height="14" rx="2" fill="#a8a29e" stroke="#78716c" strokeWidth="1"/>
            <path d="M126 130 Q135 122 144 130" fill="#78716c"/>
            <line x1="135" y1="122" x2="135" y2="120" stroke="#78716c" strokeWidth="1.5"/>
            <line x1="128" y1="119" x2="142" y2="119" stroke="#92400e" strokeWidth="2"/>
            <text x="128" y="148" fontSize="9">🪣</text>
          </g>
        )}

        {/* Garden — left */}
        {config.garden && garden.slice(0,3).map((g,i) => (
          <text key={i} x={i*14+4} y="156" fontSize="13">{g}</text>
        ))}

        {/* Garden — right */}
        {config.garden && garden.slice(3).map((g,i) => (
          <text key={i} x={i*14+110} y="156" fontSize="13">{g}</text>
        ))}

        {/* Fairies */}
        {isComplete && (
          <>
            <text x="12" y="45" fontSize="18" className="animate-fairy-float">🧚‍♀️</text>
            <text x="126" y="38" fontSize="16" className="animate-fairy-float-slow">🧚</text>
            <text x="70" y="20" fontSize="14" className="animate-fairy-float-fast">🧚‍♂️</text>
          </>
        )}
      </svg>

      {/* Day/night overlay for mood */}
      {isNight && <div className="absolute inset-0 bg-indigo-950/20 rounded-3xl pointer-events-none"/>}
    </div>
  )
}
