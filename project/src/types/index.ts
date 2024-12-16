export type Step = 'home' | 'food' | 'food-detail' | 'housing' | 'transport';

export type HousingType = 
  | 'no-water'
  | 'with-water'
  | 'apartment'
  | 'duplex'
  | 'luxury';

export type HouseMaterial = 
  | 'straw-bamboo'
  | 'wood'
  | 'brick-concrete'
  | 'adobe'
  | 'steel';

export type TrashAmount = 
  | 'much-less'
  | 'less'
  | 'same'
  | 'more'
  | 'much-more';

export interface FoodAnswers {
  frequency: string;
  beef: number;
  pork: number;
  poultry: number;
  fish: number;
  dairy: number;
}

export interface HousingAnswers {
  type: HousingType;
  material: HouseMaterial;
  residents: number;
  size: 'tiny' | 'medium' | 'large' | 'huge';
  trash: TrashAmount;
}

export interface TransportAnswers {
  carDistance: number;
  bikeDistance: number;
  carFuelEconomy: number;
  bikeFuelEconomy: number;
  publicTransport: number;
  flightHours: number;
}