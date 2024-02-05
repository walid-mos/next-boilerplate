'use client'

import { useEffect } from 'react'

import { useFormState } from 'react-dom'
import { toast } from 'sonner'

import { Label } from '@/components/ui/Label'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

import { recoverPassword } from '../action'

const initialState = {
	err: '',
}

const PasswordForm = () => {
	const [state, recoverPasswordAction] = useFormState(recoverPassword, initialState)

	const { errors } = state
	useEffect(() => {
		if (state?.err) {
			toast.error(state.err, { duration: 2000 })
		}
	})

	return (
		<>
			<div className="space-y-2">
				<Label className={errors?.password && 'text-red-400'} htmlFor="password">
					Password
				</Label>
				<Input name="password" id="password" type="password" />
				{errors?.password ? <p className="text-red-400 text-xs">{errors.password}</p> : null}
			</div>
			<div className="space-y-2">
				<Label className={errors?.confirmPassword && 'text-red-400'} htmlFor="confirmPassword">
					confirmPassword
				</Label>
				<Input name="confirmPassword" id="confirmPassword" type="password" />
				{errors?.confirmPassword ? <p className="text-red-400 text-xs">{errors.confirmPassword}</p> : null}
			</div>
			<Button className="w-full" formAction={recoverPasswordAction}>
				Login
			</Button>
		</>
	)
}

export default PasswordForm
