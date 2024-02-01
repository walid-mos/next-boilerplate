import Link from 'next/link'

import { ArrowRightIcon } from '@radix-ui/react-icons'

import { Button } from '@/components/ui/Button'

import LoginForm from './LoginForm'

const LoginPage = () => (
	<form className="max-w-sm space-y-6">
		<div className="space-y-2 text-center">
			<h1 className="text-3xl font-bold">Login</h1>
			<p className="text-gray-500 dark:text-gray-400">Enter your email and password to login to your account</p>
		</div>
		<div className="space-y-4">
			<LoginForm />
			<Link href="/signup">
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
