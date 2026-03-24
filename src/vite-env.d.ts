/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_HUGGINGFACE_API_KEY: string
  // Add more env variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}ر