/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { type cookies } from 'next/headers'

import { createServerClient, type CookieOptions } from '@supabase/ssr'

import { SUPABASE_ANON_KEY, SUPABASE_URL } from '@/constants'

export const createClient = (cookieStore: ReturnType<typeof cookies>) =>
	createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
		cookies: {
			get(name: string) {
				return cookieStore.get(name)?.value
			},
			set(name: string, value: string, options: CookieOptions) {
				try {
					cookieStore.set({ name, value, ...options })
				} catch (error) {
					// The `set` method was called from a Server Component.
					// This can be ignored if you have middleware refreshing
					// user sessions.
				}
			},
			remove(name: string, options: CookieOptions) {
				try {
					cookieStore.set({ name, value: '', ...options })
				} catch (error) {
					// The `delete` method was called from a Server Component.
					// This can be ignored if you have middleware refreshing
					// user sessions.
				}
			},
		},
	})
