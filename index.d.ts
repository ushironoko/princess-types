export type App = {
  version: string
  updateTime: Date
  revision: number
}

export type Res = {
  version: string
  updateTime: Date
  indexName: string
}

export interface VersionLatest {
  app: App
  res: Res
}

export type VersionApp = App

export type Costume = {
  id: number
  name: string
  description: string
  resourceId: string
  modelId: string
  sortId: number
}

export type BonusCostume = {
  id: number
  name: string
  description: string
  resourceId: string
  modelId: string
  sortId: number
}

export type CenterEffect = {
  id: number
  description: string
  idolType: number
  specificIdolType: number
  attribute: number
  value: number
}

export type Skill = {
  id: number
  description: string
  effectId: number
  evaluation: number
  duration: number
  interval: number
  probability: number
  value: number
}

export interface Card {
  id: number
  name: string
  sortedId: number
  idolId: number
  idolType: number
  resourceId: string
  rarity: number
  eventId?: number | null
  extraType: number
  costume?: Costume | null
  bonusCostume?: BonusCostume | null
  flavorText: string
  flavorTextAwakened: string
  levelMax: number
  levelMaxAwakened: number
  vocalMin: number
  vocalMac: number
  vocalMinAwakened: number
  vocalMaxAwakened: number
  vocalMasterBonus: number
  danceMin: number
  danceMac: number
  danceMinAwakened: number
  danceMaxAwakened: number
  danceMasterBonus: number
  visualMin: number
  visualMac: number
  visualMinAwakened: number
  visualMaxAwakened: number
  visualMasterBonus: number
  life: number
  centerEffect?: CenterEffect | null
  centerEffectName: string
  skill: Skill
  skillName: string
  addDate: Date
}
