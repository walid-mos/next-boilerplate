/* eslint-disable no-param-reassign */
import { NextRequest, NextResponse } from 'next/server'

import { createServerClient, type CookieOptions } from '@supabase/ssr'

import { SUPABASE_ANON_KEY, SUPABASE_URL } from '@/constants'

export const createClient = (request: NextRequest, response: NextResponse) =>
	createServerClient(SUPABASE_URL as string, SUPABASE_ANON_KEY as string, {
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
