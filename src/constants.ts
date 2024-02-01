export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const LOCALES = ['en-US'] as const
export const LOCALES_SET = new Set<string>(LOCALES)

export type LOCALES_TYPES = (typeof LOCALES)[number]

export const DEFAULT_LOCALE = LOCALES[0]
