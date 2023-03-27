import {create} from 'zustand'
import { devtools  } from 'zustand/middleware'
import {ModalStore} from '@/types/store/modal'

const useModal = create<ModalStore>()(devtools((set) => ({
  open: false,
  openModal: () => set({open: true}),
  closeModal: () => set({open: false})
})))

export default useModal
