import { getEnvironmentVar } from '@/utils/environments'

export enum Languages {
  ar = 'ar',
  en = 'en'
}

export const basicLanguage: string = Languages.en
export const GATEWAY_API = getEnvironmentVar('GATEWAY_API')



