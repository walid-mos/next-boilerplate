import Link from 'next/link'

import { ArrowRightIcon } from '@radix-ui/react-icons'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

import { Button } from '@/components/ui/Button'

import LoginForm from './LoginForm'

import type { ParamsLocaleProps } from '@/types/props'

const LoginPage: React.FC<ParamsLocaleProps> = async ({ params: { locale } }) => {
	unstable_setRequestLocale(locale)

	const t = await getTranslations({ locale, namespace: 'login.signin' })

	return (
		<form className="w-full space-y-6">
			<div className="space-y-2 text-center">
				<h1 className="text-3xl font-bold">{t('title')}</h1>
				<p className="text-gray-500 dark:text-gray-400">{t('description')}</p>
			</div>
			<div className="space-y-4">
				<LoginForm />
				<Link href="/signup">
					<Button className="mt-2 w-full" variant="outline">
						{t('signup')}
						<ArrowRightIcon className="ml-2 h-4 w-4" />
					</Button>
				</Link>
				<Link className="inline-block w-full text-center text-sm underline" href="/forgotpassword">
					{t('forgot')}
				</Link>
			</div>
		</form>
	)
}

export default LoginPage
