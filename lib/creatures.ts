import type { HouseConfig } from './types'

export interface Creature {
  name: string
  emoji: string
  greeting: string
  color: string
}

export function getCreature(config: HouseConfig): Creature {
  const { shape, roof, door, garden, special } = config

  if (shape === 'crystal' || roof === 'crystal' || door === 'crystal' || garden === 'crystal') {
    return { name: 'Unicorn', emoji: '🦄', greeting: 'A unicorn clip-clops up to your sparkling door!', color: 'from-pink-200 to-purple-200' }
  }
  if (shape === 'mushroom' || garden === 'mushrooms') {
    return { name: 'Gnome', emoji: '🧙', greeting: 'A friendly gnome peeks out from behind the mushrooms!', color: 'from-red-200 to-orange-100' }
  }
  if (shape === 'treehouse' || special === 'fireflies') {
    return { name: 'Baby Dragon', emoji: '🐉', greeting: 'A tiny dragon swoops down from the treetops!', color: 'from-green-200 to-emerald-100' }
  }
  if (garden === 'pond') {
    return { name: 'Water Sprite', emoji: '🧚', greeting: 'A water sprite rises from the enchanted pond!', color: 'from-blue-200 to-teal-100' }
  }
  if (roof === 'flower' || garden === 'roses') {
    return { name: 'Butterfly Fairy', emoji: '🦋', greeting: 'A butterfly fairy dances through the flower garden!', color: 'from-pink-200 to-rose-100' }
  }
  if (shape === 'log' || garden === 'wildflower') {
    return { name: 'Fox Cub', emoji: '🦊', greeting: 'A curious fox cub sniffs at your door!', color: 'from-orange-200 to-amber-100' }
  }
  if (special === 'rainbow') {
    return { name: 'Pegasus', emoji: '🐴', greeting: 'A winged horse glides down the rainbow!', color: 'from-purple-200 to-pink-100' }
  }
  return { name: 'Pixie', emoji: '🧚', greeting: 'A cheerful pixie does a happy little spin!', color: 'from-violet-200 to-fairy-pink' }
}

export const FAIRIES = ['🧚‍♀️', '🧚', '🧚‍♂️']
