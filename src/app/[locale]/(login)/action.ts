'use server'

import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import createClient from '@/lib/supabase/action'
import { LoginSchema } from '@/lib/zod'

const login = async (prevState: unknown, formData: FormData) => {
	const cookieStore = cookies()
	const supabase = createClient(cookieStore)

	const validatedFields = LoginSchema.safeParse({
		email: formData.get('email'),
		password: formData.get('password'),
	})

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
		}
	}

	const { error } = await supabase.auth.signInWithPassword(validatedFields.data)

	if (error) {
		return { err: error.message }
	}

	revalidatePath('/user', 'layout')
	return redirect('/user')
}

const signup = async (formData: FormData) => {
	const cookieStore = cookies()
	const supabase = createClient(cookieStore)

	// type-casting here for convenience
	// in practice, you should validate your inputs
	const data = {
		email: formData.get('email') as string,
		password: formData.get('password') as string,
	}

	const { error } = await supabase.auth.signUp(data)

	if (error) {
		redirect('/error')
	}

	revalidatePath('/signin', 'layout')
	redirect('/signin')
}

export { signup, login }
