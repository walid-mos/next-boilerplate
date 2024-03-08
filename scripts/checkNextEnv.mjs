// @ts-check
import { z } from 'zod'

if (typeof window !== 'undefined') {
	// Come up with your own helpful error :)
	throw new Error('script/checkNextEnv.ts should not be imported on the frontend!')
}

const Config = z.object({
	NEXT_PUBLIC_SUPABASE_URL: z.string(),
	NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),
	SUPABASE_SERVICE_ROLE_KEY: z.string(),
	SITE_URL: z.string(),
	RESEND_API_KEY: z.string(),
})

const envConfig = Config.parse(process.env)

console.log('Env checked, everything all right')

export default envConfig
