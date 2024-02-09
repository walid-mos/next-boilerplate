/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { type NextRequest } from 'next/server'

import createIntlMiddleware from 'next-intl/middleware'

import { createClient } from '@/lib/supabase/middleware'
import { stripLocaleFromPath } from '@/lib/server/pathnames'

import { DEFAULT_LOCALE, LOCALES, SUPABASE_ANON_KEY, SUPABASE_URL } from './constants'

const PUBLIC_ROUTES = ['/', 'signin', 'signup', 'forgetpassword']

export async function middleware(request: NextRequest) {
	// -- i18n
	const handleI18nRouting = createIntlMiddleware({
		locales: LOCALES,
		defaultLocale: DEFAULT_LOCALE,
	})

	const response = handleI18nRouting(request)

	// -- supabase
	if (!SUPABASE_URL || !SUPABASE_ANON_KEY) throw new Error('Supabase env variables not loaded, please check .env')

	const supabase = createClient(request, response)

	const pathname = stripLocaleFromPath(request.nextUrl.pathname)
	// -- authentication
	if (!PUBLIC_ROUTES.includes(pathname)) {
		console.log('not public route', { pathname })
		await supabase.auth.getUser()
	}

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
