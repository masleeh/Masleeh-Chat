/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string
    readonly VITE_FRONTEND_URL: string
    readonly VITE_IS_DEV: boolean
    readonly VITE_LOCALSTORAGE_TOKEN_KEY: string
    readonly VITE_LOCALSTORAGE_CONVDATA_LENGTH: string
    readonly VITE_LOCALSTORAGE_THEME: string
    readonly VITE_LOCALSTORAGE_MODE: string
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv
}