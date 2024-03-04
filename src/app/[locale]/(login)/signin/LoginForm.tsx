/* eslint-disable @typescript-eslint/no-non-null-assertion */

'use client'

import { useEffect } from 'react'

import { useFormState } from 'react-dom'
import { toast } from 'sonner'

import { Label } from '@/components/ui/Label'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/functions/classname'

import { login } from '../action'

const initialState = {
	errors: {
		email: [],
		password: [],
	},
}

const LoginForm = () => {
	const [state, loginAction] = useFormState(login, initialState)

	const { errors, message } = state
	const isError = {
		email: errors?.email?.length,
		password: errors?.password?.length,
	}
	useEffect(() => {
		if (message) {
			// TODO : Better error message
			toast.error(message, { duration: 2000 })
		}
	})

	return (
		<>
			<div className="space-y-2">
				<Label className={cn(isError.email && 'text-red-400')} htmlFor="email">
					Email
				</Label>
				<Input name="email" id="email" placeholder="m@example.com" type="email" />
				{isError.email ? <p className="text-xs text-red-400">{errors?.email![0]}</p> : null}
			</div>
			<div className="space-y-2">
				<Label className={cn(isError.password && 'text-red-400')} htmlFor="password">
					Password
				</Label>
				<Input name="password" id="password" type="password" />
				{isError.password ? <p className="text-xs text-red-400">{errors?.password![0]}</p> : null}
			</div>
			<Button className="w-full" formAction={loginAction}>
				Login
			</Button>
		</>
	)
}

export default LoginForm
