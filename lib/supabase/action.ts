import { cookies } from 'next/headers'

import { type CookieOptions, createServerClient } from '@supabase/ssr'

import { SUPABASE_SERVICE_ROLE_KEY, SUPABASE_URL } from '@/constants'

const createClient = (cookieStore: ReturnType<typeof cookies>) =>
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	createServerClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
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
