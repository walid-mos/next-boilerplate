import Link from 'next/link'

import { ArrowRightIcon } from '@radix-ui/react-icons'

import { Label } from '@/components/ui/Label'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

import { login } from './action'

const LoginPage = () => (
	<form className="max-w-sm space-y-6">
		<div className="space-y-2 text-center">
			<h1 className="text-3xl font-bold">Login</h1>
			<p className="text-gray-500 dark:text-gray-400">Enter your email and password to login to your account</p>
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
			<Button className="w-full" formAction={login}>
				Login
			</Button>
			<Link href="login/signup">
				<Button className="w-full mt-2" variant="outline">
					Sign Up
					<ArrowRightIcon className="ml-2 h-4 w-4" />
				</Button>
			</Link>
			<Link className="inline-block w-full text-center text-sm underline" href="#">
				Forgot your password?
			</Link>
		</div>
	</form>
)

export default LoginPage