'use client'
import type { HouseConfig } from '@/lib/types'
import HouseCanvas from './HouseCanvas'
import { deleteHouse, copyHouse } from '@/lib/storage'

interface Props {
  houses: HouseConfig[]
  onEdit: (house: HouseConfig) => void
  onRefresh: () => void
}

export default function SavedHouses({ houses, onEdit, onRefresh }: Props) {
  if (houses.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">🏡</div>
        <p className="font-title text-xl text-green-500">No houses yet!</p>
        <p className="font-body text-green-700 mt-1">Build your first fairy house above.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
      {houses.map(house => (
        <div key={house.id} className="bg-[#0d1f12]/80 rounded-3xl shadow-md border border-green-900/40 overflow-hidden">
          <div className="p-3">
            <HouseCanvas config={house} isNight={house.isNight} isComplete />
          </div>
          <div className="px-4 pb-3">
            <div className="font-title text-green-300 text-base">{house.name || 'Unnamed House'}</div>
            <div className="font-body text-green-600 text-xs mt-0.5">🧚 {house.fairyName || 'Unnamed Fairy'}</div>
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => onEdit(house)}
                className="flex-1 py-1.5 text-xs font-body font-bold bg-green-900/40 text-green-300 rounded-xl hover:bg-green-800/40 transition-all"
              >
                ✏️ Edit
              </button>
              <button
                onClick={() => { copyHouse(house.id); onRefresh() }}
                className="flex-1 py-1.5 text-xs font-body font-bold bg-green-900/40 text-green-300 rounded-xl hover:bg-green-800/40 transition-all"
              >
                📋 Copy
              </button>
              <button
                onClick={() => { if (confirm(`Delete "${house.name}"?`)) { deleteHouse(house.id); onRefresh() } }}
                className="px-3 py-1.5 text-xs font-body font-bold bg-red-950/40 text-red-400 rounded-xl hover:bg-red-900/40 transition-all"
              >
                🗑️
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
