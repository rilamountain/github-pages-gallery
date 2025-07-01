// Add shared TypeScript types and interfaces here.

export type PriceCategory = 'Luxe' | 'Essential' | 'Heritage'
export type ClubLevel = 'public' | 'plus'

export interface Wine {
  id: number
  name: string
  region?: string
  country?: string
  vintage?: number
  grapes?: string[]
  price_category?: PriceCategory
  moes_note?: string
  wine_searcher_url?: string
  cellartracker_url?: string
  food_tags?: string[]
  club_level?: ClubLevel
  image_url?: string
  score_avg?: number
}