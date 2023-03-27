export interface CardPropsTypes {
  cardData: CardData,
  showActions: boolean
}

export interface CardData {
  id: number
  title: string
  price: number
  description: string
  category: {
    id: number,
    name: string
    image: string
  }
  images: string[]
}
