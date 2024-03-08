/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { NextResponse } from 'next/server'

import createIntlMiddleware from 'next-intl/middleware'

import { stripLocaleFromPath } from '@/lib/functions/pathnames'

import { DEFAULT_LOCALE, LOCALES } from './constants'

import type { NextRequest } from 'next/server'

const PUBLIC_API: string[] = []

export async function middleware(request: NextRequest) {
	const pathname = stripLocaleFromPath(request.nextUrl.pathname)

	// -- No redirect locale for API
	if (pathname.startsWith('/api')) {
		const response = NextResponse.next({
			request: {
				headers: request.headers,
			},
		})

		const isPublicApi = PUBLIC_API.includes(pathname)
		if (isPublicApi) return response

		return response
	}

	// -- Translation - i18n
	const handleI18nRouting = createIntlMiddleware({
		locales: LOCALES,
		defaultLocale: DEFAULT_LOCALE,
	})
	return handleI18nRouting(request)
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
