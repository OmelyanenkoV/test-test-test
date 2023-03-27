import {create} from 'zustand'
import { devtools  } from 'zustand/middleware'
import {Pagination} from '@/types/store/pagination'

const usePagination = create<Pagination>()(devtools((set) => ({
  page: 0,
  changePage: (page: number) => set({ page: page })
})))

export default usePagination
