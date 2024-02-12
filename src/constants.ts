const mandatoryEnvCheck = (envVariable: string | undefined) => {
	if (!envVariable) throw new Error(`${envVariable}`)
	return envVariable
}

export const { SITE_URL } = process.env

export const SUPABASE_URL = mandatoryEnvCheck(process.env.NEXT_PUBLIC_SUPABASE_URL)
export const SUPABASE_ANON_KEY = mandatoryEnvCheck(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

export const LOCALES = ['en-US'] as const
export const LOCALES_SET = new Set<string>(LOCALES)

export const DEFAULT_LOCALE = LOCALES[0]

export type LOCALES_TYPES = (typeof LOCALES)[number]
