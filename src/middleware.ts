import { type NextRequest, NextResponse } from 'next/server'

import createIntlMiddleware from 'next-intl/middleware'
import { createServerClient, type CookieOptions } from '@supabase/ssr'

import { DEFAULT_LOCALE, LOCALES, SUPABASE_ANON_KEY, SUPABASE_URL } from './constants'

export async function middleware(request: NextRequest) {
	const handleI18nRouting = createIntlMiddleware({
		locales: LOCALES,
		defaultLocale: DEFAULT_LOCALE,
	})

	let response = handleI18nRouting(request)

	if (!SUPABASE_URL || !SUPABASE_ANON_KEY) throw new Error('Supabase env variables not loaded, please check .env')

	const supabase = createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
		cookies: {
			get(name: string) {
				return request.cookies.get(name)?.value
			},
			set(name: string, value: string, options: CookieOptions) {
				request.cookies.set({
					name,
					value,
					...options,
				})
				response = NextResponse.next({
					request: {
						headers: request.headers,
					},
				})
				response.cookies.set({
					name,
					value,
					...options,
				})
			},
			remove(name: string, options: CookieOptions) {
				request.cookies.set({
					name,
					value: '',
					...options,
				})
				response = NextResponse.next({
					request: {
						headers: request.headers,
					},
				})
				response.cookies.set({
					name,
					value: '',
					...options,
				})
			},
		},
	})

	await supabase.auth.getUser()

	return response
}

// Ensure the middleware is only called for relevant paths.
export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 * Feel free to modify this pattern to include more paths.
		 */
		'/((?!_next/static|_next/image|favicon.ico).*)',
	],
}
