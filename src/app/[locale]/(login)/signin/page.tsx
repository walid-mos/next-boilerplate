import Link from 'next/link'

import { ArrowRightIcon } from '@radix-ui/react-icons'

import { Button } from '@/ui/Button'
import LoginForm from '@/components/modules/auth/LoginForm'
import { getTranslation } from '@/functions/translations'

import type { PropsWithParamsLocale } from '@/types/props'

const LoginPage = async ({ params: { locale } }: PropsWithParamsLocale) => {
	const t = await getTranslation('login.signin', locale)

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
