'use client'

import { useEffect } from 'react'

import { useFormState } from 'react-dom'
import { toast } from 'sonner'

import { Label } from '@/components/ui/Label'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

import { forgotPassword } from '../action'

const initialState = {
	err: '',
}

const EmailForm = () => {
	const [state, forgotPasswordAction] = useFormState(forgotPassword, initialState)

	const { errors } = state
	useEffect(() => {
		if (state?.err) {
			toast.error(state.err, { duration: 2000 })
		}
	})

	return (
		<>
			<div className="space-y-2">
				<Label className={errors && 'text-red-400'} htmlFor="email">
					Email
				</Label>
				<Input name="email" id="email" placeholder="m@example.com" type="email" />
				{errors?.email ? <p className="text-red-400 text-xs">{errors.email[0]}</p> : null}
			</div>
			<Button className="w-full" formAction={forgotPasswordAction}>
				Login
			</Button>
		</>
	)
}

export default EmailForm
