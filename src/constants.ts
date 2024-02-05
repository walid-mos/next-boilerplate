export const { SITE_URL } = process.env
if (!SITE_URL) throw new Error('No SITE_URL env variable given')

export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
if (!SUPABASE_URL) throw new Error('No NEXT_PUBLIC_SUPABASE_URL env variable given')
if (!SUPABASE_ANON_KEY) throw new Error('No NEXT_PUBLIC_SUPABASE_ANON_KEY env variable given')

export const LOCALES = ['en-US'] as const
export const LOCALES_SET = new Set<string>(LOCALES)

export const DEFAULT_LOCALE = LOCALES[0]

export type LOCALES_TYPES = (typeof LOCALES)[number]
