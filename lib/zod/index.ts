import { z } from 'zod'

const EmailSchema = z
	.string({
		required_error: 'Name is required',
		invalid_type_error: 'Name must be a string',
	})
	.email({ message: 'Invalid email address' })
	.min(5, { message: 'Must be 5 or more characters long' })
const PasswordSchema = z
	.string({
		required_error: 'Name is required',
		invalid_type_error: 'Name must be a string',
	})
	.min(5, { message: 'Must be 5 or more characters long' })
	.max(64, { message: 'Must be 64 or fewer characters long' })

const LoginSchema = z.object({ email: EmailSchema, password: PasswordSchema })

export { EmailSchema, PasswordSchema, LoginSchema }
