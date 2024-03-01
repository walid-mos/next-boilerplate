/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { NextResponse, NextRequest } from 'next/server'

import createIntlMiddleware from 'next-intl/middleware'

// import { createClient } from '@/lib/supabase/middleware'
import { stripLocaleFromPath } from '@/lib/functions/pathnames'

import { DEFAULT_LOCALE, LOCALES } from './constants'

const PUBLIC_ROUTES: string[] = ['/', '/signin', '/signup', '/forgotpassword', '/waitingrecover']
const PUBLIC_API: string[] = []

const apiMiddleware = async (request: NextRequest, pathname: string) => {
	const response = NextResponse.next({
		request: {
			headers: request.headers,
		},
	})

	const isPublicApi = PUBLIC_API.includes(pathname)
	if (isPublicApi) return response

	// const supabase = createClient(request, response)
	// await supabase.auth.getUser()

	// TODO : Redirect if not authenticated
	return response
}

const appMiddleware = async (request: NextRequest, pathname: string) => {
	// -- Translation - i18n
	const handleI18nRouting = createIntlMiddleware({
		locales: LOCALES,
		defaultLocale: DEFAULT_LOCALE,
	})
	const response = handleI18nRouting(request)

	// -- Auth path guard
	const isPublicPage = PUBLIC_ROUTES.includes(pathname)
	if (isPublicPage) return response

	// -- Supabase + Authentication
	// const supabase = createClient(request, response)
	// await supabase.auth.getUser()

	// TODO : Redirect if not authenticated
	return response
}

export async function middleware(request: NextRequest) {
	const pathname = stripLocaleFromPath(request.nextUrl.pathname)

	if (pathname.startsWith('/api')) return apiMiddleware(request, pathname)

	return appMiddleware(request, pathname)
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
