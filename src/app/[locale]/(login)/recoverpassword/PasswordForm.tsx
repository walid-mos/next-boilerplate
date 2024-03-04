/* eslint-disable @typescript-eslint/no-non-null-assertion */

'use client'

import { useEffect } from 'react'

import { useFormState } from 'react-dom'
import { toast } from 'sonner'

import { Label } from '@/components/ui/Label'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/functions/classname'

import { recoverPassword } from '../action'

type Props = {
	t: {
		password: string
		confirmPassword: string
		submit: string
	}
}

const initialState = {
	errors: {
		password: [],
		confirmPassword: [],
	},
}

const PasswordForm: React.FC<Props> = ({ t }) => {
	const [state, recoverPasswordAction] = useFormState(recoverPassword, initialState)
	const { errors, message } = state

	const isError = {
		password: errors?.password?.length,
		confirmPassword: errors?.confirmPassword?.length,
	}
	useEffect(() => {
		if (message) {
			// TODO : Change error message to something translated
			toast.error(`Votre mot de passe est incorrect \n ${message}`, { duration: 2000 })
		}
	})

	console.log({ errors })

	return (
		<>
			<div className="space-y-2">
				<Label className={cn(isError.password && 'text-red-400')} htmlFor="password">
					{t.password}
				</Label>
				<Input name="password" id="password" type="password" />
				{isError.password ? <p className="text-xs text-red-400">{errors?.password![0]}</p> : null}
			</div>
			<div className="space-y-2">
				<Label className={cn(isError.confirmPassword && 'text-red-400')} htmlFor="confirmPassword">
					{t.confirmPassword}
				</Label>
				<Input name="confirmPassword" id="confirmPassword" type="password" />
				{isError.confirmPassword ? <p className="text-xs text-red-400">{errors?.confirmPassword![0]}</p> : null}
			</div>
			<Button className="w-full" formAction={recoverPasswordAction}>
				{t.submit}
			</Button>
		</>
	)
}

export default PasswordForm
