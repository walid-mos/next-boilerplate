import { Label } from '@/components/ui/Label'
import { login, signup } from './action'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

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
			<Button className="w-full" variant="outline" formAction={signup}>
				Sign Up
			</Button>
			<Link className="inline-block w-full text-center text-sm underline" href="#">
				Forgot your password?
			</Link>
		</div>
	</form>
)
// <button formAction={signup}>Sign up</button>

export default LoginPage
