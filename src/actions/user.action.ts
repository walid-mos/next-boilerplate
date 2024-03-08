'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

import createClient from '@/lib/supabase/action'

export const handleSignOut = async () => {
	const cookieStore = cookies()
	const supabase = createClient(cookieStore)
	const { error } = await supabase.auth.signOut()

	if (error) {
		throw error
	}
	revalidatePath('/', 'layout')
	return redirect('/')
}
