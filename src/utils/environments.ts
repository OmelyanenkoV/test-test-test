export const getEnvironmentVar = (code: string) => {
  return import.meta.env[`VITE_APP_${code}`]
}
