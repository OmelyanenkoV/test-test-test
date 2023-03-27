import {create} from 'zustand'
import { devtools  } from 'zustand/middleware'
import {basicLanguage} from '@/configuration'
import {CommonStore} from '@/types/store/common'

const useCommon = create<CommonStore>()(devtools((set) => ({
  lang: basicLanguage,
  setLang: (lang:string) => set({ lang: lang })
})))

export default useCommon
