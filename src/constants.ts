export const { SITE_URL } = process.env

export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
export const { SUPABASE_SERVICE_ROLE_KEY } = process.env

export const { RESEND_API_KEY } = process.env
export const GITHUB_PROFILE_LINK = 'https://github.com/walid-mos'

export const LOCALES = ['en-US'] as const
export const LOCALES_SET = new Set<string>(LOCALES)

export const DEFAULT_LOCALE = LOCALES[0]

export type LOCALES_TYPES = (typeof LOCALES)[number]
