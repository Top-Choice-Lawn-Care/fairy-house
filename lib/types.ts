export type HouseShape = 'cottage' | 'treehouse' | 'mushroom' | 'crystal' | 'log'
export type RoofStyle = 'thatched' | 'acorn' | 'flower' | 'bark' | 'crystal'
export type DoorStyle = 'round' | 'arched' | 'vine' | 'crystal' | 'leaf'
export type WindowStyle = 'porthole' | 'heart' | 'diamond' | 'flower' | 'stained'
export type GardenStyle = 'roses' | 'mushrooms' | 'wildflower' | 'crystal' | 'pond'
export type SpecialFeature = 'fireflies' | 'rainbow' | 'waterfall' | 'lights' | 'well'

export interface HouseConfig {
  id: string
  name: string
  fairyName: string
  shape: HouseShape
  roof: RoofStyle
  door: DoorStyle
  windows: WindowStyle
  garden: GardenStyle
  special: SpecialFeature
  isNight: boolean
  createdAt: number
}

export type BuildStep = 'shape' | 'roof' | 'door' | 'windows' | 'garden' | 'special' | 'name'
