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

type Version = {
  app: App
  res: Res
}

export interface VersionLatest extends Version{}

type AppsPassPramas = {
  version?: string
}

/**
 * パスパラメータがない場合は配列で返す
 */
export type VersionApps<T> = T extends AppsPassPramas ? App : App[]

type AssetsPassPramas = {
  version?: number
}

/**
 * パスパラメータがない場合は配列で返す
 */
export type VersionAssets<T> = T extends AssetsPassPramas ? Res : Res[]

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
  specificIdolType?: number
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
  value: number[]
}

export interface Cards {
  id: number
  name: string
  sortedId: number
  idolId: number
  idolType: number
  resourceId: string
  rarity: number
  eventId?: number
  extraType: number
  costume?: Costume
  bonusCostume?: BonusCostume
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
  centerEffect?: CenterEffect
  centerEffectName: string
  skill?: Skill[]
  skillName: string
  addDate?: Date
}

export type Schedule = {
  beginDate: Date
  endDate: Date
  pageBeginDate: Date
  pageEndDate: Date
  boostBeginDate?: Date
  boostEndDate?: Date
}

export interface Events {
  id: number
  type: number
  appealType?: number
  schedule: Schedule
  name?: string
}

export type IdolPoint = {
  idolId: number
  borders: number
}

export interface Rankings {
  eventPoint: number[]
  highScore: number[]
  loungePoint: number[]
  idolPoint?: IdolPoint[]
}

export type RankingEventPoint = {
  summaryTime: Date
  updateTime: Date
  count: number
}[]

export type RankingEventPointLogData = {
  score: number
  summaryType: Date
}

export type RankingEventPointLogs = {
  rank: number
  data: RankingEventPointLogData[]
}[]


export type RankingIdolPointLogData = {
  score: number
  summaryType: Date
}

export type RankingIdolPointLogs = {
  rank: number
  data: RankingIdolPointLogData[]
}[]

export interface Lounges {
  id: string
  viewerId: string
  name: string
  comment: string
  userCount: number
  userCountLimit: number
  fan: number
  masterName: string
  createTime: Date
  updateTime: Date
}

export type LoungeEventHistory = {
  eventId: number
  eventName: string
  summaryTime: Date
  rank: number
  score: number
}[]

export interface LoungeSearch {
  id: string
  viewerId: string
  name: string
  updateTime: Date
}

export type ElectionSchedule = {
  beginDate: Date
  endDate: Date
  pageBeginDate: Date
  pageEndDate: Date
  resultOpenDate: Date
}

export type Dramas = {
  id: number
  name: string
  roles: {
    id: number
    name: string
  }[]
}

export interface Election {
  id: number
  name: string
  schedule: ElectionSchedule
  dramas: Dramas[]
}

export type ElectionCurrentData = {
  idol_id: number
  idol_name: string
  score: number
  rank: number
}

export type ElectionCurrent = {
  id: number
  name: string
  summaryTime: Date
  data: ElectionCurrentData[]
}[]
