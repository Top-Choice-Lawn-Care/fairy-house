'use client'
import type { HouseConfig } from '@/lib/types'

interface Props { config: Partial<HouseConfig>; isNight?: boolean; isComplete?: boolean }

const HOUSE_BODIES: Record<string, { bg: string; shape: string; emoji: string }> = {
  cottage: { bg: 'bg-stone-300', shape: 'rounded-t-3xl rounded-b-lg', emoji: '' },
  treehouse: { bg: 'bg-amber-600', shape: 'rounded-lg', emoji: '' },
  mushroom: { bg: 'bg-red-100', shape: 'rounded-b-xl', emoji: '' },
  crystal: { bg: 'bg-cyan-100', shape: 'rounded-t-lg', emoji: '' },
  log: { bg: 'bg-yellow-800', shape: 'rounded-3xl', emoji: '' },
}
const ROOF_STYLES: Record<string, { color: string; emoji: string }> = {
  thatched: { color: 'bg-yellow-400', emoji: '🌾' },
  acorn: { color: 'bg-amber-700', emoji: '🤎' },
  flower: { color: 'bg-pink-300', emoji: '🌸' },
  bark: { color: 'bg-green-700', emoji: '🌿' },
  crystal: { color: 'bg-cyan-200', emoji: '💎' },
}
const DOOR_STYLES: Record<string, { color: string; shape: string; emoji: string }> = {
  round: { color: 'bg-amber-800', shape: 'rounded-t-full', emoji: '🟤' },
  arched: { color: 'bg-gray-400', shape: 'rounded-t-xl', emoji: '' },
  vine: { color: 'bg-green-600', shape: 'rounded-t-xl', emoji: '🍃' },
  crystal: { color: 'bg-blue-200', shape: 'rounded-t-xl', emoji: '💠' },
  leaf: { color: 'bg-emerald-500', shape: 'rounded-t-full', emoji: '🍀' },
}
const WINDOW_STYLES: Record<string, { color: string; shape: string }> = {
  porthole: { color: 'bg-sky-200', shape: 'rounded-full' },
  heart: { color: 'bg-purple-300', shape: 'rounded-full' },
  diamond: { color: 'bg-blue-200', shape: 'rotate-45 rounded-sm' },
  flower: { color: 'bg-yellow-200', shape: 'rounded-full' },
  stained: { color: 'bg-gradient-to-br from-orange-200 via-pink-200 to-purple-200', shape: 'rounded-sm' },
}
const GARDEN_SETS: Record<string, string[]> = {
  roses: ['🌹', '🌹', '🌷', '🌹', '🌷', '🌹'],
  mushrooms: ['🍄', '🍄', '🍄', '🍄', '🍄', '🌿'],
  wildflower: ['🌻', '🌼', '🌸', '🌻', '🌺', '🌼'],
  crystal: ['💎', '✨', '💠', '💎', '✨', '💠'],
  pond: ['🌊', '🐸', '🌿', '🐟', '🌱', '🌿'],
}
const SPECIAL_FX: Record<string, { emojis: string[]; label: string }> = {
  fireflies: { emojis: ['✨', '✨', '✨', '✨', '✨'], label: '' },
  rainbow: { emojis: ['🌈'], label: '' },
  waterfall: { emojis: ['💧', '💧', '💧'], label: '' },
  lights: { emojis: ['🪔', '🪔', '🪔', '🪔'], label: '' },
  well: { emojis: ['🪣'], label: '' },
}

export default function HouseCanvas({ config, isNight = false, isComplete = false }: Props) {
  const body = HOUSE_BODIES[config.shape || 'cottage']
  const roof = ROOF_STYLES[config.roof || 'thatched']
  const door = DOOR_STYLES[config.door || 'round']
  const win = WINDOW_STYLES[config.windows || 'porthole']
  const garden = GARDEN_SETS[config.garden || 'roses']
  const special = config.special ? SPECIAL_FX[config.special] : null

  const skyBg = isNight
    ? 'bg-gradient-to-b from-indigo-950 via-purple-950 to-indigo-900'
    : 'bg-gradient-to-b from-sky-300 via-blue-100 to-purple-100'
  const grassBg = isNight ? 'bg-green-950' : 'bg-green-400'

  return (
    <div className={`relative w-full rounded-3xl overflow-hidden select-none ${skyBg}`} style={{ minHeight: 340, aspectRatio: '4/3' }}>

      {/* Stars (night) */}
      {isNight && (
        <div className="absolute inset-0 pointer-events-none">
          {['10%,8%','25%,15%','70%,5%','85%,12%','40%,20%','60%,10%','15%,25%','90%,18%'].map((pos, i) => {
            const [l, t] = pos.split(',')
            return <div key={i} className="absolute text-xs animate-sparkle" style={{ left: l, top: t, animationDelay: `${i * 0.3}s` }}>⭐</div>
          })}
        </div>
      )}

      {/* Moon or Sun */}
      <div className="absolute top-3 right-4 text-2xl">{isNight ? '🌙' : '☀️'}</div>

      {/* Clouds (day) */}
      {!isNight && (
        <>
          <div className="absolute top-4 left-4 text-3xl opacity-80">☁️</div>
          <div className="absolute top-6 left-16 text-2xl opacity-60">☁️</div>
        </>
      )}

      {/* Fireflies (night + special) */}
      {isNight && config.special === 'fireflies' && (
        <div className="absolute inset-0 pointer-events-none">
          {[['20%','40%'],['35%','55%'],['65%','35%'],['75%','60%'],['50%','45%']].map(([l,t],i) => (
            <div key={i} className="absolute text-xs animate-firefly" style={{ left: l, top: t, animationDelay: `${i * 0.7}s` }}>✨</div>
          ))}
        </div>
      )}

      {/* Rainbow */}
      {config.special === 'rainbow' && !isNight && (
        <div className="absolute top-8 left-1/2 -translate-x-1/2 text-5xl opacity-70">🌈</div>
      )}

      {/* House structure */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center" style={{ width: 120 }}>

        {/* Tree trunk for treehouse */}
        {config.shape === 'treehouse' && (
          <div className="w-6 h-12 bg-amber-900 rounded-sm mb-0 z-10" />
        )}

        {/* Mushroom cap (for mushroom house, roof IS the cap) */}
        {config.shape === 'mushroom' ? (
          <div className="relative flex flex-col items-center">
            {/* Mushroom cap */}
            <div className="relative w-36 h-16 bg-red-500 rounded-t-full flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-around px-3 pt-2">
                {['🤍','🤍','🤍'].map((dot, i) => <span key={i} className="text-xs">{dot}</span>)}
              </div>
            </div>
            {/* Stem */}
            <div className="w-24 h-16 bg-amber-50 border-2 border-amber-100 rounded-b-xl flex flex-col justify-end items-center pb-0">
              {/* Door */}
              {config.door && (
                <div className={`w-8 h-10 ${door.color} ${door.shape} flex items-center justify-center text-xs border border-black/10`}>
                  {door.emoji}
                </div>
              )}
            </div>
          </div>
        ) : config.shape === 'log' ? (
          /* Hollow Log */
          <div className="relative w-36 h-20 bg-yellow-800 rounded-3xl border-4 border-yellow-900 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-1 rounded-2xl bg-amber-700 opacity-40" />
            {/* Windows */}
            {config.windows && (
              <div className="flex gap-3 items-end pb-1">
                <div className={`w-5 h-5 ${win.color} ${win.shape} border border-black/10`} />
                {/* Door */}
                {config.door && (
                  <div className={`w-9 h-12 ${door.color} ${door.shape} flex items-center justify-center text-xs border border-black/10`}>
                    {door.emoji}
                  </div>
                )}
                <div className={`w-5 h-5 ${win.color} ${win.shape} border border-black/10`} />
              </div>
            )}
          </div>
        ) : (
          /* Standard house (cottage / treehouse / crystal) */
          <div className="flex flex-col items-center">
            {/* Roof */}
            {config.roof && (
              <div className={`relative w-0 h-0 flex items-center justify-center`}>
                <div className={`${roof.color} rounded-tl-full rounded-tr-full`} style={{ width: 130, height: 52, clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>
                  {config.roof === 'flower' && <span className="absolute top-3 left-1/2 -translate-x-1/2 text-lg">🌸</span>}
                  {config.roof === 'crystal' && <span className="absolute top-2 left-1/2 -translate-x-1/2 text-sm">💎</span>}
                  {config.roof === 'bark' && <span className="absolute top-3 left-1/2 -translate-x-1/2 text-sm">🌿</span>}
                </div>
              </div>
            )}
            {/* Walls */}
            <div className={`relative w-28 h-20 ${body.bg} ${body.shape} border-2 border-black/10 overflow-hidden flex flex-col justify-end items-center`}
              style={config.shape === 'crystal' ? { background: 'linear-gradient(135deg, #a5f3fc, #e0f2fe, #bae6fd)' } : {}}>
              {/* Window row */}
              {config.windows && (
                <div className="absolute top-3 left-0 right-0 flex justify-around px-3">
                  <div className={`w-5 h-5 ${win.color} ${win.shape} border border-black/10`} />
                  <div className={`w-5 h-5 ${win.color} ${win.shape} border border-black/10`} />
                </div>
              )}
              {/* Glow for night + lights */}
              {isNight && config.special === 'lights' && (
                <div className="absolute inset-0 bg-yellow-200/20 pointer-events-none" />
              )}
              {/* Door */}
              {config.door && (
                <div className={`w-9 h-12 ${door.color} ${door.shape} flex items-center justify-center text-xs border border-black/10 mb-0`}>
                  {door.emoji && <span>{door.emoji}</span>}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Grass */}
      <div className={`absolute bottom-0 left-0 right-0 h-16 ${grassBg} rounded-b-3xl`} />

      {/* Garden — left side */}
      <div className="absolute bottom-12 left-2 flex gap-0.5">
        {garden.slice(0, 3).map((g, i) => (
          <span key={i} className="text-xl" style={{ animationDelay: `${i * 0.2}s` }}>{g}</span>
        ))}
      </div>

      {/* Garden — right side */}
      <div className="absolute bottom-12 right-2 flex gap-0.5">
        {garden.slice(3).map((g, i) => (
          <span key={i} className="text-xl">{g}</span>
        ))}
      </div>

      {/* Special feature overlay */}
      {special && config.special !== 'fireflies' && config.special !== 'rainbow' && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-1">
          {special.emojis.map((e, i) => <span key={i} className="text-lg animate-sparkle" style={{ animationDelay: `${i * 0.4}s` }}>{e}</span>)}
        </div>
      )}

      {/* Waterfall */}
      {config.special === 'waterfall' && (
        <div className="absolute right-8 bottom-12 flex flex-col gap-0">
          {['💧','💧','💧','💧'].map((d, i) => (
            <span key={i} className="text-sm animate-bounce" style={{ animationDelay: `${i * 0.15}s` }}>{d}</span>
          ))}
        </div>
      )}

      {/* Fairy lights */}
      {config.special === 'lights' && (
        <div className="absolute top-12 left-0 right-0 flex justify-around px-4">
          {['🪔','🪔','🪔','🪔'].map((l, i) => (
            <span key={i} className="text-sm animate-sparkle" style={{ animationDelay: `${i * 0.5}s` }}>{l}</span>
          ))}
        </div>
      )}

      {/* Wishing well */}
      {config.special === 'well' && (
        <div className="absolute bottom-11 right-6 text-2xl">🪣</div>
      )}

      {/* Fairies — appear when complete */}
      {isComplete && (
        <>
          <div className="absolute top-6 left-6 text-3xl animate-fairy-in" style={{ animationDelay: '0.1s', opacity: 0 }}>
            <span className="inline-block animate-fairy-float">🧚‍♀️</span>
          </div>
          <div className="absolute top-4 right-10 text-2xl animate-fairy-in" style={{ animationDelay: '0.5s', opacity: 0 }}>
            <span className="inline-block animate-fairy-float-slow">🧚</span>
          </div>
          <div className="absolute top-14 left-1/2 text-3xl animate-fairy-in" style={{ animationDelay: '0.9s', opacity: 0 }}>
            <span className="inline-block animate-fairy-float-fast">🧚‍♂️</span>
          </div>
        </>
      )}
    </div>
  )
}
