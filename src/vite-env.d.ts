/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly GA_TRACKING_ID: string
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
