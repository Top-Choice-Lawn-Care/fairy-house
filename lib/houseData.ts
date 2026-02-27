import type { HouseShape, RoofStyle, DoorStyle, WindowStyle, GardenStyle, SpecialFeature } from './types'

export interface Option<T> {
  value: T
  label: string
  emoji: string
  desc: string
  color: string
}

export const SHAPES: Option<HouseShape>[] = [
  { value: 'cottage', label: 'Stone Cottage', emoji: '🪨', desc: 'A cozy round stone home', color: 'bg-stone-300' },
  { value: 'treehouse', label: 'Treehouse', emoji: '🌳', desc: 'High up in the branches', color: 'bg-amber-600' },
  { value: 'mushroom', label: 'Mushroom House', emoji: '🍄', desc: 'Red cap with white dots', color: 'bg-red-400' },
  { value: 'crystal', label: 'Crystal Tower', emoji: '💎', desc: 'Tall and sparkling blue', color: 'bg-cyan-300' },
  { value: 'log', label: 'Hollow Log', emoji: '🪵', desc: 'Snug inside a fallen log', color: 'bg-yellow-700' },
]

export const ROOFS: Option<RoofStyle>[] = [
  { value: 'thatched', label: 'Thatched', emoji: '🌾', desc: 'Golden straw roof', color: 'bg-yellow-300' },
  { value: 'acorn', label: 'Acorn Cap', emoji: '🎩', desc: 'Brown dome like an acorn', color: 'bg-amber-700' },
  { value: 'flower', label: 'Flower Petals', emoji: '🌸', desc: 'Soft pink petals', color: 'bg-pink-300' },
  { value: 'bark', label: 'Bark & Moss', emoji: '🌿', desc: 'Natural forest roof', color: 'bg-green-600' },
  { value: 'crystal', label: 'Crystal Shards', emoji: '✨', desc: 'Glimmering blue crystals', color: 'bg-cyan-200' },
]

export const DOORS: Option<DoorStyle>[] = [
  { value: 'round', label: 'Round Wooden', emoji: '🟤', desc: 'Classic hobbit-style door', color: 'bg-amber-800' },
  { value: 'arched', label: 'Stone Arch', emoji: '🏛️', desc: 'Elegant arched stone', color: 'bg-gray-400' },
  { value: 'vine', label: 'Vine & Leaf', emoji: '🍃', desc: 'Covered in climbing vines', color: 'bg-green-500' },
  { value: 'crystal', label: 'Crystal Door', emoji: '💠', desc: 'Shimmering blue crystal', color: 'bg-blue-300' },
  { value: 'leaf', label: 'Giant Leaf', emoji: '🍀', desc: 'A large green leaf door', color: 'bg-emerald-500' },
]

export const WINDOWS: Option<WindowStyle>[] = [
  { value: 'porthole', label: 'Round Porthole', emoji: '⭕', desc: 'Little round windows', color: 'bg-sky-200' },
  { value: 'heart', label: 'Heart-Shaped', emoji: '💜', desc: 'Sweet heart windows', color: 'bg-purple-300' },
  { value: 'diamond', label: 'Diamond Panes', emoji: '🔷', desc: 'Diamond-shaped glass', color: 'bg-blue-200' },
  { value: 'flower', label: 'Flower Frames', emoji: '🌼', desc: 'Framed by flowers', color: 'bg-yellow-200' },
  { value: 'stained', label: 'Stained Glass', emoji: '🌈', desc: 'Colorful rainbow glass', color: 'bg-orange-200' },
]

export const GARDENS: Option<GardenStyle>[] = [
  { value: 'roses', label: 'Rose Garden', emoji: '🌹', desc: 'Red roses everywhere', color: 'bg-rose-300' },
  { value: 'mushrooms', label: 'Mushroom Circle', emoji: '🍄', desc: 'Ring of toadstools', color: 'bg-orange-300' },
  { value: 'wildflower', label: 'Wildflower Meadow', emoji: '🌻', desc: 'Colorful wild blooms', color: 'bg-yellow-300' },
  { value: 'crystal', label: 'Crystal Garden', emoji: '💎', desc: 'Glowing crystal flowers', color: 'bg-teal-200' },
  { value: 'pond', label: 'Enchanted Pond', emoji: '🐸', desc: 'A pond with lily pads', color: 'bg-blue-300' },
]

export const SPECIALS: Option<SpecialFeature>[] = [
  { value: 'fireflies', label: 'Fireflies', emoji: '✨', desc: 'Twinkling fireflies at dusk', color: 'bg-yellow-200' },
  { value: 'rainbow', label: 'Rainbow Bridge', emoji: '🌈', desc: 'A magical rainbow path', color: 'bg-orange-200' },
  { value: 'waterfall', label: 'Waterfall', emoji: '💧', desc: 'Trickling fairy waterfall', color: 'bg-blue-200' },
  { value: 'lights', label: 'Fairy Lights', emoji: '🪩', desc: 'Tiny glowing lanterns', color: 'bg-amber-100' },
  { value: 'well', label: 'Wishing Well', emoji: '🪣', desc: 'A magical wishing well', color: 'bg-stone-300' },
]

export const STEPS = [
  { key: 'shape' as const, label: 'House Shape', emoji: '🏠' },
  { key: 'roof' as const, label: 'Roof', emoji: '🔺' },
  { key: 'door' as const, label: 'Door', emoji: '🚪' },
  { key: 'windows' as const, label: 'Windows', emoji: '🪟' },
  { key: 'garden' as const, label: 'Garden', emoji: '🌸' },
  { key: 'special' as const, label: 'Special Feature', emoji: '✨' },
  { key: 'name' as const, label: 'Name It', emoji: '📝' },
]
