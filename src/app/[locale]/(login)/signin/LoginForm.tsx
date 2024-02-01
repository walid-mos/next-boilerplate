'use client'

import { useEffect } from 'react'

import { useFormState } from 'react-dom'
import { toast } from 'sonner'

import { Label } from '@/components/ui/Label'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

import { login } from '../action'

const initialState = {
	err: '',
}

const LoginForm = () => {
	const [state, loginAction] = useFormState(login, initialState)

	const { errors } = state
	useEffect(() => {
		if (state?.err) {
			toast.error('ERROR', { duration: 2000 })
		}
	})

	return (
		<>
			<div className="space-y-2">
				<Label className={errors?.email && 'text-red-400'} htmlFor="email">
					Email
				</Label>
				<Input name="email" id="email" placeholder="m@example.com" type="email" />
				{errors?.email ? <p className="text-red-400 text-xs">{errors.email[0]}</p> : null}
			</div>
			<div className="space-y-2">
				<Label className={errors?.password && 'text-red-400'} htmlFor="password">
					Password
				</Label>
				<Input name="password" id="password" type="password" />
				{errors?.password ? <p className="text-red-400 text-xs">{errors.password}</p> : null}
			</div>
			<Button className="w-full" formAction={loginAction}>
				Login
			</Button>
		</>
	)
}

export default LoginForm
