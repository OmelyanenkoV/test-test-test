import { CardData } from '@/components/productCard/types'

export interface Cart {
  cartItems: CardData[] | [],
  addItemToCard: (newItem: CardData) => void,
  getItemsCount: () => number,
  getTotalPrice: () => number,
  itemAlreadyAdded: (id: number) => boolean,
  removeItemFromCart: (id: number) => void
}
