/* eslint-disable no-param-reassign */
import { NextResponse } from 'next/server'

import { createServerClient, type CookieOptions } from '@supabase/ssr'

import { SUPABASE_ANON_KEY, SUPABASE_URL } from '@/constants'

import type { NextRequest} from 'next/server';

export const createClient = (request: NextRequest, response: NextResponse) =>
	createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
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
