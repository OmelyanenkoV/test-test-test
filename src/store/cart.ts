import {create} from 'zustand'
import { devtools  } from 'zustand/middleware'
import {Cart} from '@/types/store/cart'
import {CardData} from '@/components/productCard/types'

const useCart = create<Cart>()(devtools((set, get) => ({
  cartItems: [],
  addItemToCard: (newItem: CardData) => {set(state => ({...state, cartItems: [...state.cartItems, newItem]}))},
  getItemsCount: () =>  get().cartItems.length,
  itemAlreadyAdded: (id: number) => get().cartItems.some((item) => item.id === id),
  removeItemFromCart: (id: number) => {
    set(state => ({...state, cartItems: state.cartItems.filter(item => item.id !== id)}))
  },
  // @ts-ignore // TS hate reduce
  getTotalPrice: () => get().cartItems.reduce((acc: number, item:CardData) => acc + item.price, 0)
})))

export default useCart
