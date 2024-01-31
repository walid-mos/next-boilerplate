import { cookies } from 'next/headers'

import { type CookieOptions, createServerClient } from '@supabase/ssr'

const createClient = (cookieStore: ReturnType<typeof cookies>) =>
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
		cookies: {
			get(name: string) {
				return cookieStore.get(name)?.value
			},
			// ! no return (typescript error), maybe can cause problems
			set(name: string, value: string, options: CookieOptions) {
				cookieStore.set({ name, value, ...options })
			},
			remove(name: string, options: CookieOptions) {
				cookieStore.set({ name, value: '', ...options })
			},
		},
	})

export default createClient
