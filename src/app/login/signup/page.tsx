import Link from 'next/link'

import { ArrowLeftIcon } from '@radix-ui/react-icons'

import { Label } from '@/components/ui/Label'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

import { signup } from '../action'

const SignUp = () => (
	<form className="max-w-sm min-w-60 space-y-6">
		<div className="space-y-2 text-center">
			<h1 className="text-3xl font-bold">Signup</h1>
			<p className="text-gray-500 dark:text-gray-400">Join us in this adventure !</p>
		</div>
		<div className="space-y-4">
			<div className="space-y-2">
				<Label htmlFor="email">Email</Label>
				<Input name="email" id="email" placeholder="m@example.com" required type="email" />
			</div>
			<div className="space-y-2">
				<Label htmlFor="password">Password</Label>
				<Input name="password" id="password" required type="password" />
			</div>
			<Button formAction={signup} className="w-full mt-2">
				Sign Up
			</Button>
			<Link href="/login">
				<Button className="w-full mt-2" variant="outline">
					<ArrowLeftIcon className="mr-2 h-4 w-4" />
					Back to Login
				</Button>
			</Link>
		</div>
	</form>
)

export default SignUp
