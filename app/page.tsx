'use client'
import { useState, useEffect } from 'react'
import type { HouseConfig, BuildStep } from '@/lib/types'
import { newHouseId, saveHouse, loadHouses } from '@/lib/storage'
import { getCreature } from '@/lib/creatures'
import { STEPS } from '@/lib/houseData'
import Builder from '@/components/Builder'
import HouseCanvas from '@/components/HouseCanvas'
import SavedHouses from '@/components/SavedHouses'

type AppView = 'build' | 'complete' | 'gallery'

function freshConfig(): Partial<HouseConfig> {
  return { id: newHouseId(), isNight: false, createdAt: Date.now() }
}

export default function App() {
  const [view, setView] = useState<AppView>('build')
  const [config, setConfig] = useState<Partial<HouseConfig>>(freshConfig)
  const [step, setStep] = useState<BuildStep>('shape')
  const [houses, setHouses] = useState<HouseConfig[]>([])
  const [showCreature, setShowCreature] = useState(false)
  const [isNight, setIsNight] = useState(false)

  useEffect(() => { setHouses(loadHouses()) }, [])

  const refresh = () => setHouses(loadHouses())

  const handleChoice = (key: keyof HouseConfig, value: string) => {
    setConfig(c => ({ ...c, [key]: value }))
    const idx = STEPS.findIndex(s => s.key === step)
    if (idx < STEPS.length - 1) {
      setTimeout(() => setStep(STEPS[idx + 1].key), 300)
    }
  }

  const handleNameChange = (name: string, fairyName: string) => {
    setConfig(c => ({ ...c, name, fairyName }))
  }

  const handleFinish = () => {
    const complete = { ...config, isNight } as HouseConfig
    setConfig(complete)
    saveHouse(complete)
    setHouses(loadHouses())
    setView('complete')
    setTimeout(() => setShowCreature(true), 2200)
  }

  const handleEdit = (house: HouseConfig) => {
    setConfig(house)
    setIsNight(house.isNight)
    setStep('shape')
    setView('build')
    setShowCreature(false)
  }

  const handleNewHouse = () => {
    setConfig(freshConfig())
    setStep('shape')
    setIsNight(false)
    setShowCreature(false)
    setView('build')
  }

  const toggleNight = () => {
    const n = !isNight
    setIsNight(n)
    setConfig(c => ({ ...c, isNight: n }))
    if (view === 'complete') {
      const updated = { ...config, isNight: n } as HouseConfig
      saveHouse(updated)
      setHouses(loadHouses())
    }
  }

  const creature = view === 'complete' && config.shape ? getCreature(config as HouseConfig) : null

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0a0f1a]/90 backdrop-blur border-b border-green-900/40">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="font-title text-2xl text-green-400">✨ Fairy House</h1>
          <div className="flex gap-2">
            <button
              onClick={() => setView('build')}
              className={`px-3 py-1.5 rounded-xl text-sm font-body font-bold transition-all ${view === 'build' || view === 'complete' ? 'bg-green-700 text-green-100' : 'bg-[#0d1f12] border-2 border-green-800/40 text-green-400 hover:bg-green-900/40'}`}
            >
              🏗️ Build
            </button>
            <button
              onClick={() => { setView('gallery'); refresh() }}
              className={`px-3 py-1.5 rounded-xl text-sm font-body font-bold transition-all relative ${view === 'gallery' ? 'bg-green-700 text-green-100' : 'bg-[#0d1f12] border-2 border-green-800/40 text-green-400 hover:bg-green-900/40'}`}
            >
              🏘️ Saved
              {houses.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 text-green-950 text-xs rounded-full flex items-center justify-center font-bold">{houses.length}</span>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">

        {/* GALLERY VIEW */}
        {view === 'gallery' && (
          <div className="animate-slide-up">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-title text-xl text-green-400">Your Fairy Houses</h2>
              <button onClick={handleNewHouse} className="px-4 py-2 rounded-xl bg-green-700 text-green-100 font-body font-bold text-sm hover:opacity-90 transition-all">
                + New House
              </button>
            </div>
            <SavedHouses houses={houses} onEdit={handleEdit} onRefresh={refresh} />
          </div>
        )}

        {/* BUILD VIEW */}
        {view === 'build' && (
          <div className="grid md:grid-cols-2 gap-6 animate-slide-up">
            {/* Live Preview */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="font-title text-lg text-green-400/80">Live Preview</h2>
                <button
                  onClick={toggleNight}
                  className="px-3 py-1 rounded-full text-sm font-body font-bold bg-[#0d1f12] border-2 border-green-800/40 text-green-400 hover:bg-green-900/40 transition-all"
                >
                  {isNight ? '☀️ Day' : '🌙 Night'}
                </button>
              </div>
              <HouseCanvas config={config} isNight={isNight} isComplete={false} />
              {config.name && (
                <div className="text-center font-title text-green-400/70 text-sm">{config.name}</div>
              )}
            </div>

            {/* Builder */}
            <div className="bg-[#0d1f12]/80 rounded-3xl border border-green-900/40 p-4 shadow-sm min-h-96">
              <Builder
                config={config}
                step={step}
                onChoice={handleChoice}
                onStep={setStep}
                onFinish={handleFinish}
                onNameChange={handleNameChange}
              />
            </div>
          </div>
        )}

        {/* COMPLETE VIEW */}
        {view === 'complete' && config.shape && (
          <div className="space-y-4 animate-slide-up">
            <div className="flex items-center justify-between">
              <h2 className="font-title text-xl text-green-400">
                {config.name || 'Your Fairy House'} ✨
              </h2>
              <button
                onClick={toggleNight}
                className="px-3 py-1 rounded-full text-sm font-body font-bold bg-[#0d1f12] border-2 border-green-800/40 text-green-400 hover:bg-green-900/40 transition-all"
              >
                {isNight ? '☀️ Day' : '🌙 Night'}
              </button>
            </div>

            <div className="relative">
              <HouseCanvas config={config} isNight={isNight} isComplete />
              {config.fairyName && (
                <div className="absolute top-3 left-3 bg-[#0d1f12]/80 backdrop-blur rounded-2xl px-3 py-1 shadow font-body text-xs font-bold text-green-300 animate-slide-up">
                  🧚 {config.fairyName}
                </div>
              )}
            </div>

            {showCreature && creature && (
              <div className={`rounded-3xl bg-gradient-to-r from-green-950 to-emerald-950 border border-green-800/40 p-4 flex items-center gap-4 shadow-md animate-creature-in`}>
                <span className="text-5xl">{creature.emoji}</span>
                <div>
                  <div className="font-title text-green-300 text-lg">A visitor arrived!</div>
                  <div className="font-body text-green-400/70 text-sm mt-0.5">{creature.greeting}</div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => { setStep('shape'); setView('build') }}
                className="py-3 rounded-2xl bg-[#0d1f12] border-2 border-green-800/40 text-green-300 font-body font-bold hover:bg-green-900/30 transition-all"
              >
                ✏️ Edit House
              </button>
              <button
                onClick={handleNewHouse}
                className="py-3 rounded-2xl bg-gradient-to-r from-green-700 to-emerald-600 text-green-100 font-body font-bold shadow-lg hover:opacity-90 transition-all"
              >
                🏡 Build Another
              </button>
            </div>

            <div className="text-center">
              <button onClick={() => { setView('gallery'); refresh() }} className="text-sm font-body text-green-600 hover:text-green-400 underline">
                View all my houses →
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
