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
    // Auto-advance to next step
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
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b-2 border-fairy-pink/30">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="font-title text-2xl text-purple-600">✨ Fairy House</h1>
          <div className="flex gap-2">
            <button
              onClick={() => setView('build')}
              className={`px-3 py-1.5 rounded-xl text-sm font-body font-bold transition-all ${view === 'build' || view === 'complete' ? 'bg-fairy-purple text-white' : 'bg-white border-2 border-fairy-purple/40 text-purple-600 hover:bg-fairy-purple/10'}`}
            >
              🏗️ Build
            </button>
            <button
              onClick={() => { setView('gallery'); refresh() }}
              className={`px-3 py-1.5 rounded-xl text-sm font-body font-bold transition-all relative ${view === 'gallery' ? 'bg-fairy-purple text-white' : 'bg-white border-2 border-fairy-purple/40 text-purple-600 hover:bg-fairy-purple/10'}`}
            >
              🏘️ Saved
              {houses.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-fairy-pink text-white text-xs rounded-full flex items-center justify-center font-bold">{houses.length}</span>
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
              <h2 className="font-title text-xl text-purple-600">Your Fairy Houses</h2>
              <button onClick={handleNewHouse} className="px-4 py-2 rounded-xl bg-fairy-purple text-white font-body font-bold text-sm hover:opacity-90 transition-all">
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
                <h2 className="font-title text-lg text-purple-500">Live Preview</h2>
                <button
                  onClick={toggleNight}
                  className="px-3 py-1 rounded-full text-sm font-body font-bold bg-white border-2 border-fairy-purple/30 text-purple-600 hover:bg-fairy-purple/10 transition-all"
                >
                  {isNight ? '☀️ Day' : '🌙 Night'}
                </button>
              </div>
              <HouseCanvas config={config} isNight={isNight} isComplete={false} />
              {config.name && (
                <div className="text-center font-title text-purple-500 text-sm">{config.name}</div>
              )}
            </div>

            {/* Builder */}
            <div className="bg-white/70 rounded-3xl border-2 border-fairy-pink/30 p-4 shadow-sm min-h-96">
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
            {/* Night toggle */}
            <div className="flex items-center justify-between">
              <h2 className="font-title text-xl text-purple-600">
                {config.name || 'Your Fairy House'} ✨
              </h2>
              <button
                onClick={toggleNight}
                className="px-3 py-1 rounded-full text-sm font-body font-bold bg-white border-2 border-fairy-purple/30 text-purple-600 hover:bg-fairy-purple/10 transition-all"
              >
                {isNight ? '☀️ Day' : '🌙 Night'}
              </button>
            </div>

            {/* House + fairy/creature */}
            <div className="relative">
              <HouseCanvas config={config} isNight={isNight} isComplete />

              {/* Fairy name banner */}
              {config.fairyName && (
                <div className="absolute top-3 left-3 bg-white/80 backdrop-blur rounded-2xl px-3 py-1 shadow font-body text-xs font-bold text-purple-700 animate-slide-up">
                  🧚 {config.fairyName}
                </div>
              )}
            </div>

            {/* Creature reveal */}
            {showCreature && creature && (
              <div className={`rounded-3xl bg-gradient-to-r ${creature.color} border-2 border-fairy-purple/20 p-4 flex items-center gap-4 shadow-md animate-creature-in`}>
                <span className="text-5xl">{creature.emoji}</span>
                <div>
                  <div className="font-title text-purple-700 text-lg">A visitor arrived!</div>
                  <div className="font-body text-purple-600 text-sm mt-0.5">{creature.greeting}</div>
                </div>
              </div>
            )}

            {/* Action buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => { setStep('shape'); setView('build') }}
                className="py-3 rounded-2xl bg-white border-2 border-fairy-purple/40 text-purple-700 font-body font-bold hover:bg-fairy-purple/10 transition-all"
              >
                ✏️ Edit House
              </button>
              <button
                onClick={handleNewHouse}
                className="py-3 rounded-2xl bg-gradient-to-r from-fairy-purple to-fairy-pink text-white font-body font-bold shadow-lg hover:opacity-90 transition-all"
              >
                🏡 Build Another
              </button>
            </div>

            <div className="text-center">
              <button onClick={() => { setView('gallery'); refresh() }} className="text-sm font-body text-purple-400 hover:text-purple-600 underline">
                View all my houses →
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
