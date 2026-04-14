/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string
  readonly VITE_APP_NAME: string
  readonly VITE_APP_VERSION: string
  readonly VITE_NODE_ENV: string
  readonly VITE_ENABLE_ANALYTICS: string
  readonly VITE_ENABLE_ERROR_REPORTING: string
  readonly VITE_ENABLE_PERFORMANCE_MONITORING: string
  readonly VITE_DEFAULT_LANGUAGE: string
  readonly VITE_SUPPORTED_LANGUAGES: string
  readonly VITE_LOG_LEVEL: string
  readonly VITE_MOCK_API: string
  readonly DEV: boolean
  readonly MODE: string
  readonly PROD: boolean
  readonly SSR: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
