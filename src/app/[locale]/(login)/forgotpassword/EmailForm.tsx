/* eslint-disable @typescript-eslint/no-non-null-assertion */

'use client'

import { useEffect } from 'react'

import { useFormState } from 'react-dom'
import { toast } from 'sonner'

import { Label } from '@/ui/Label'
import { Input } from '@/ui/Input'
import { Button } from '@/ui/Button'
import { cn } from '@/functions/classname'
import { forgotPassword } from '@/actions/login.action'

type Props = {
	t: {
		email: string
		submit: string
	}
}

const initialState = {
	errors: {
		email: [],
	},
}

const EmailForm: React.FC<Props> = ({ t }) => {
	const [state, forgotPasswordAction] = useFormState(forgotPassword, initialState)
	const isError = state.errors.email?.length
	useEffect(() => {
		if (isError) {
			toast.error('Votre mail est invalide', { duration: 2000 })
		}
	})

	return (
		<>
			<div className="space-y-2">
				<Label className={cn(isError && 'text-red-400')} htmlFor="email">
					{t.email}
				</Label>
				<Input name="email" id="email" placeholder="m@example.com" type="email" />
				{isError ? <p className="text-xs text-red-400">{state.errors.email![0]}</p> : null}
			</div>
			<Button className="w-full" formAction={forgotPasswordAction}>
				{t.submit}
			</Button>
		</>
	)
}

export default EmailForm
