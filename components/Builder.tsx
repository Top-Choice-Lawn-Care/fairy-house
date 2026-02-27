'use client'
import { SHAPES, ROOFS, DOORS, WINDOWS, GARDENS, SPECIALS, STEPS } from '@/lib/houseData'
import type { HouseConfig, BuildStep } from '@/lib/types'
import type { Option } from '@/lib/houseData'

interface Props {
  config: Partial<HouseConfig>
  step: BuildStep
  onChoice: (key: keyof HouseConfig, value: string) => void
  onStep: (step: BuildStep) => void
  onFinish: () => void
  onNameChange: (name: string, fairy: string) => void
}

function OptionGrid<T extends string>({ options, selected, onSelect }: { options: Option<T>[]; selected?: T; onSelect: (v: T) => void }) {
  return (
    <div className="grid grid-cols-2 gap-2 mt-3">
      {options.map(opt => (
        <button
          key={opt.value}
          onClick={() => onSelect(opt.value)}
          className={`flex items-center gap-2 p-3 rounded-2xl border-2 text-left transition-all font-body text-sm
            ${selected === opt.value
              ? 'border-fairy-purple bg-fairy-purple/20 shadow-lg scale-105'
              : 'border-fairy-pink/40 bg-white/60 hover:border-fairy-purple/60 hover:bg-fairy-purple/10'
            }`}
        >
          <span className="text-2xl">{opt.emoji}</span>
          <div>
            <div className="font-bold text-purple-800">{opt.label}</div>
            <div className="text-xs text-purple-500">{opt.desc}</div>
          </div>
          {selected === opt.value && <span className="ml-auto text-fairy-purple">✓</span>}
        </button>
      ))}
    </div>
  )
}

export default function Builder({ config, step, onChoice, onStep, onFinish, onNameChange }: Props) {
  const stepIdx = STEPS.findIndex(s => s.key === step)

  const stepContent: Record<BuildStep, React.ReactNode> = {
    shape: <OptionGrid options={SHAPES} selected={config.shape} onSelect={v => onChoice('shape', v)} />,
    roof: <OptionGrid options={ROOFS} selected={config.roof} onSelect={v => onChoice('roof', v)} />,
    door: <OptionGrid options={DOORS} selected={config.door} onSelect={v => onChoice('door', v)} />,
    windows: <OptionGrid options={WINDOWS} selected={config.windows} onSelect={v => onChoice('windows', v)} />,
    garden: <OptionGrid options={GARDENS} selected={config.garden} onSelect={v => onChoice('garden', v)} />,
    special: <OptionGrid options={SPECIALS} selected={config.special} onSelect={v => onChoice('special', v)} />,
    name: (
      <div className="mt-4 space-y-4">
        <div>
          <label className="block text-sm font-bold text-purple-700 mb-1 font-body">🏡 Name your fairy house</label>
          <input
            type="text"
            value={config.name || ''}
            onChange={e => onNameChange(e.target.value, config.fairyName || '')}
            placeholder="e.g. Rosewood Cottage"
            maxLength={30}
            className="w-full px-4 py-2 rounded-xl border-2 border-fairy-purple/40 bg-white/80 font-body text-purple-900 focus:outline-none focus:border-fairy-purple placeholder-purple-300"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-purple-700 mb-1 font-body">🧚 Name your fairy</label>
          <input
            type="text"
            value={config.fairyName || ''}
            onChange={e => onNameChange(config.name || '', e.target.value)}
            placeholder="e.g. Lily Moonwing"
            maxLength={30}
            className="w-full px-4 py-2 rounded-xl border-2 border-fairy-purple/40 bg-white/80 font-body text-purple-900 focus:outline-none focus:border-fairy-purple placeholder-purple-300"
          />
        </div>
      </div>
    ),
  }

  const currentStep = STEPS[stepIdx]
  const canGoNext = step === 'name' ? !!(config.name?.trim()) : !!(config[step as keyof HouseConfig])
  const isLast = step === 'name'

  return (
    <div className="flex flex-col h-full">
      {/* Step progress */}
      <div className="flex items-center gap-1 mb-3 flex-wrap">
        {STEPS.map((s, i) => (
          <button
            key={s.key}
            onClick={() => i <= stepIdx && onStep(s.key)}
            className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-body font-bold transition-all
              ${s.key === step ? 'bg-fairy-purple text-white shadow' : i < stepIdx ? 'bg-fairy-pink/60 text-purple-700 cursor-pointer hover:bg-fairy-pink' : 'bg-gray-100 text-gray-400 cursor-default'}`}
          >
            <span>{s.emoji}</span>
            <span className="hidden sm:inline">{s.label}</span>
          </button>
        ))}
      </div>

      {/* Step title */}
      <h3 className="font-title text-xl text-purple-700">{currentStep.emoji} {currentStep.label}</h3>

      {/* Step content */}
      <div className="flex-1 overflow-y-auto">
        {stepContent[step]}
      </div>

      {/* Nav buttons */}
      <div className="flex gap-2 mt-4">
        {stepIdx > 0 && (
          <button
            onClick={() => onStep(STEPS[stepIdx - 1].key)}
            className="flex-1 py-2 rounded-xl border-2 border-fairy-purple/40 text-purple-700 font-body font-bold hover:bg-fairy-purple/10 transition-all"
          >
            ← Back
          </button>
        )}
        <button
          onClick={() => isLast ? onFinish() : onStep(STEPS[stepIdx + 1].key)}
          disabled={!canGoNext}
          className={`flex-1 py-2 rounded-xl font-body font-bold transition-all
            ${canGoNext
              ? isLast
                ? 'bg-gradient-to-r from-fairy-purple to-fairy-pink text-white shadow-lg hover:opacity-90 animate-glow-pulse'
                : 'bg-fairy-purple text-white hover:opacity-90'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
        >
          {isLast ? '✨ Build My House!' : 'Next →'}
        </button>
      </div>
    </div>
  )
}
