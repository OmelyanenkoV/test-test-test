export function useImgConstructor(imgName: string) {
  return new URL(`../assets/icons/${imgName}`, import.meta.url).href
}
