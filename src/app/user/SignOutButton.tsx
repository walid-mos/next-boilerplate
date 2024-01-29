'use client'

import { Button } from '@/components/ui/Button'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

const SignOutButton = () => {
	const supabase = createClient()

	const router = useRouter()
	const handleSignOut = async () => {
		const { error } = await supabase.auth.signOut()

		if (error) {
			throw error
		}
		router.push('/')
	}
	return (
		<Button onClick={handleSignOut} variant="destructive">
			Sign out
		</Button>
	)
}

export default SignOutButton
