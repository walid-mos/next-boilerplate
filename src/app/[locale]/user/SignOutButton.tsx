'use client'

import { Button } from '@/components/ui/Button'

import { handleSignOut } from './action'

const SignOutButton = () => (
	<Button onClick={() => handleSignOut()} variant="destructive">
		Sign out
	</Button>
)

export default SignOutButton
