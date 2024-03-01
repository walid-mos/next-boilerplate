'use server'

import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import createClient from '@/lib/supabase/action'
import { EmailSchema, LoginSchema, PasswordWithConfirmSchema } from '@/lib/zod'
import { SITE_URL } from '@/constants'
import { SendMail } from '@/lib/emails/sendEmail'

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

	const { data: generatedLinkData, error: linkError } = await supabase.auth.admin.generateLink({
		type: 'recovery',
		email: validatedFields.data.email,
	})

	if (linkError) throw linkError

	const tokenHash = generatedLinkData.properties.hashed_token
	const searchParams = new URLSearchParams({
		// eslint-disable-next-line camelcase
		token_hash: tokenHash,
		type: 'recovery',
		next: `/recoverpassword`,
	})
	const loginLink = `/api/auth/confirm?${searchParams}`

	const emailData = { link: `http://${SITE_URL}${loginLink}` }

	await SendMail(validatedFields.data.email, 'Password Recover', 'forgotPassword', {
		data: emailData,
	})

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
		// eslint-disable-next-line no-console
		console.error(error)
		return { err: error.message }
	}

	revalidatePath('/login', 'layout')
	return redirect('/login')
}
