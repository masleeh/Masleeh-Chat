/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string
    readonly VITE_FRONTEND_URL: string
    readonly VITE_IS_DEV: boolean
    readonly VITE_LOCALSTORAGE_TOKEN_KEY: string
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv
}