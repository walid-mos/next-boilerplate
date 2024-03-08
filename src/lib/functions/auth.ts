import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'

export const redirectIfConnected = async (redirectTo = '/user') => {
	const cookieStore = cookies()
	const supabase = createClient(cookieStore)

	const { data } = await supabase.auth.getUser()

	if (data.user?.id) redirect(redirectTo)
}

export const redirectIfNotConnected = async (redirectTo = '/login') => {
	const cookieStore = cookies()
	const supabase = createClient(cookieStore)

	const { data, error } = await supabase.auth.getUser()
	if (error || !data?.user) redirect(redirectTo)
}
