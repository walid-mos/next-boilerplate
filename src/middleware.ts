/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { type NextRequest } from 'next/server'

import createIntlMiddleware from 'next-intl/middleware'

import { createClient } from '@/lib/supabase/middleware'
import { stripLocaleFromPath } from '@/lib/server/pathnames'

import { DEFAULT_LOCALE, LOCALES } from './constants'

const PUBLIC_ROUTES = ['/', '/signin', '/signup', '/forgotpassword', '/waitingrecover']

export async function middleware(request: NextRequest) {
	// -- Translation - i18n
	const handleI18nRouting = createIntlMiddleware({
		locales: LOCALES,
		defaultLocale: DEFAULT_LOCALE,
	})
	const response = handleI18nRouting(request)

	// -- Auth path guard
	const isPublicPage = PUBLIC_ROUTES.includes(stripLocaleFromPath(request.nextUrl.pathname))
	if (isPublicPage) return response

	// -- Supabase + Authentication
	const supabase = createClient(request, response)
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
