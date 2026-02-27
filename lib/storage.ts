import type { HouseConfig } from './types'

const KEY = 'fairy-houses'

export function loadHouses(): HouseConfig[] {
  if (typeof window === 'undefined') return []
  try {
    return JSON.parse(localStorage.getItem(KEY) || '[]')
  } catch { return [] }
}

export function saveHouse(house: HouseConfig): void {
  const houses = loadHouses()
  const idx = houses.findIndex(h => h.id === house.id)
  if (idx >= 0) houses[idx] = house
  else houses.unshift(house)
  localStorage.setItem(KEY, JSON.stringify(houses))
}

export function deleteHouse(id: string): void {
  const houses = loadHouses().filter(h => h.id !== id)
  localStorage.setItem(KEY, JSON.stringify(houses))
}

export function copyHouse(id: string): HouseConfig | null {
  const house = loadHouses().find(h => h.id === id)
  if (!house) return null
  const copy: HouseConfig = { ...house, id: crypto.randomUUID(), name: `${house.name} (copy)`, createdAt: Date.now() }
  saveHouse(copy)
  return copy
}

export function newHouseId(): string {
  return crypto.randomUUID()
}
