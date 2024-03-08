/* eslint-disable camelcase */
import { z } from 'zod'

const Email = z
	.string({
		required_error: 'Email is required',
	})
	.email({ message: 'Invalid email address' })
	.min(5, { message: 'Must be 5 or more characters long' })
const Password = z
	.string({
		required_error: 'Password is required',
	})
	.min(5, { message: 'Must be 5 or more characters long' })
	.max(64, { message: 'Must be 64 or fewer characters long' })

const PasswordWithConfirm = z.object({
	password: Password,
	confirmPassword: z.string({
		required_error: 'Confirm password is required',
	}),
})

const refinePasswordValidation = (schema?: z.AnyZodObject) => {
	if (schema) PasswordWithConfirm.merge(schema)
	return PasswordWithConfirm.refine(values => values.password === values.confirmPassword, {
		message: 'Passwords are not the same',
		path: ['confirmPassword'],
	})
}

export const EmailSchema = z.object({ email: Email })
export const PasswordSchema = z.object({ password: Password })
export const LoginSchema = z.object({ email: Email, password: Password })
export const SignUpSchema = refinePasswordValidation(LoginSchema)
export const ConfirmPasswordSchema = refinePasswordValidation()
