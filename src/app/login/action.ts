'use server'

import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/action'

export async function login(formData: FormData) {
	const cookieStore = cookies()
	const supabase = createClient(cookieStore)

	// type-casting here for convenience
	// in practice, you should validate your inputs
	const data = {
		email: formData.get('email') as string,
		password: formData.get('password') as string,
	}

	console.log(data)
	const { error } = await supabase.auth.signInWithPassword(data)

	if (error) {
		console.log(error)
		redirect('/error')
	}

	revalidatePath('/user', 'layout')
	redirect('/user')
}

export async function signup(formData: FormData) {
	const cookieStore = cookies()
	const supabase = createClient(cookieStore)

	// type-casting here for convenience
	// in practice, you should validate your inputs
	const data = {
		email: formData.get('email') as string,
		password: formData.get('password') as string,
	}

	console.log(data)

	const { error } = await supabase.auth.signUp(data)

	if (error) {
		console.log(error)
		redirect('/error')
	}

	revalidatePath('/login', 'layout')
	redirect('/login')
}
