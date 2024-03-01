const envToCheck = [
	'NEXT_PUBLIC_SUPABASE_URL',
	'NEXT_PUBLIC_SUPABASE_ANON_KEY',
	'SUPABASE_SERVICE_ROLE_KEY',
	'SITE_URL',
	'RESEND_API_KEY',
]

export const checkEnv = () => {
	for (const env of envToCheck) {
		if (!process.env[env]) {
			throw new Error(`The ${env} environment variable is not set`)
		}
	}

	// eslint-disable-next-line no-console
	console.log('Variables set')
}
