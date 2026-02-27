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
              ? 'border-green-400/60 bg-green-900/30 shadow-[0_0_12px_rgba(74,222,128,0.2)] scale-105'
              : 'border-green-900/40 bg-[#0d1f12]/80 hover:border-green-500/40 hover:bg-green-900/20'
            }`}
        >
          <span className="text-2xl">{opt.emoji}</span>
          <div>
            <div className="font-bold text-green-200">{opt.label}</div>
            <div className="text-xs text-green-400/60">{opt.desc}</div>
          </div>
          {selected === opt.value && <span className="ml-auto text-green-400">✓</span>}
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
          <label className="block text-sm font-bold text-green-300 mb-1 font-body">🏡 Name your fairy house</label>
          <input
            type="text"
            value={config.name || ''}
            onChange={e => onNameChange(e.target.value, config.fairyName || '')}
            placeholder="e.g. Rosewood Cottage"
            maxLength={30}
            className="w-full px-4 py-2 rounded-xl border-2 border-green-800/60 bg-[#0a1a0d]/80 font-body text-green-100 focus:outline-none focus:border-green-500 placeholder-green-700"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-green-300 mb-1 font-body">🧚 Name your fairy</label>
          <input
            type="text"
            value={config.fairyName || ''}
            onChange={e => onNameChange(config.name || '', e.target.value)}
            placeholder="e.g. Lily Moonwing"
            maxLength={30}
            className="w-full px-4 py-2 rounded-xl border-2 border-green-800/60 bg-[#0a1a0d]/80 font-body text-green-100 focus:outline-none focus:border-green-500 placeholder-green-700"
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
              ${s.key === step ? 'bg-green-700 text-green-100 shadow-[0_0_8px_rgba(74,222,128,0.3)]' : i < stepIdx ? 'bg-green-900/60 text-green-300 cursor-pointer hover:bg-green-800/60' : 'bg-gray-900 text-gray-600 cursor-default'}`}
          >
            <span>{s.emoji}</span>
            <span className="hidden sm:inline">{s.label}</span>
          </button>
        ))}
      </div>

      {/* Step title */}
      <h3 className="font-title text-xl text-green-300">{currentStep.emoji} {currentStep.label}</h3>

      {/* Step content */}
      <div className="flex-1 overflow-y-auto">
        {stepContent[step]}
      </div>

      {/* Nav buttons */}
      <div className="flex gap-2 mt-4">
        {stepIdx > 0 && (
          <button
            onClick={() => onStep(STEPS[stepIdx - 1].key)}
            className="flex-1 py-2 rounded-xl border-2 border-green-800/50 text-green-300 font-body font-bold hover:bg-green-900/30 transition-all"
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
                ? 'bg-gradient-to-r from-green-700 to-emerald-600 text-green-100 shadow-[0_0_16px_rgba(74,222,128,0.3)] hover:opacity-90 animate-glow'
                : 'bg-green-700 text-green-100 hover:bg-green-600'
              : 'bg-gray-900 text-gray-600 cursor-not-allowed'
            }`}
        >
          {isLast ? '✨ Build My House!' : 'Next →'}
        </button>
      </div>
    </div>
  )
}
