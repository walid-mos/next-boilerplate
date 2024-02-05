'use server'

import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import createClient from '@/lib/supabase/action'
import { EmailSchema, LoginSchema, PasswordWithConfirmSchema } from '@/lib/zod'
import { SITE_URL } from '@/constants'

export const login = async (prevState: unknown, formData: FormData) => {
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

export const signup = async (formData: FormData) => {
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

	const { error } = await supabase.auth.signUp(validatedFields.data)

	if (error) {
		return { err: error.message }
	}

	revalidatePath('/signin', 'layout')
	return redirect('/signin')
}

export const forgotPassword = async (prevState: unknown, formData: FormData) => {
	const cookieStore = cookies()
	const supabase = createClient(cookieStore)

	const validatedFields = EmailSchema.safeParse({
		email: formData.get('email'),
	})

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
		}
	}

	const { error } = await supabase.auth.resetPasswordForEmail(validatedFields.data.email, {
		redirectTo: `http://${SITE_URL}/recoverpassword`,
	})

	if (error) {
		return { err: error.message }
	}

	return redirect('/waitingrecover')
}

export const recoverPassword = async (prevState: unknown, formData: FormData) => {
	const cookieStore = cookies()
	const supabase = createClient(cookieStore)

	const validatedFields = PasswordWithConfirmSchema.safeParse({
		password: formData.get('password'),
		confirmPassword: formData.get('confirmPassword'),
	})

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
		}
	}

	const { error } = await supabase.auth.updateUser({ password: validatedFields.data.password })

	if (error) {
		return { err: error.message }
	}

	revalidatePath('/login', 'layout')
	return redirect('/login')
}
