import Link from 'next/link'

import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

import { Button } from '@/components/ui/Button'

import EmailForm from './EmailForm'

import type { LanguageProps } from '@/types/props'

const ForgotPassword: React.FC<LanguageProps> = async ({ params: { locale } }) => {
	unstable_setRequestLocale(locale)

	const t = await getTranslations({ locale, namespace: 'login.forgotpassword' })

	const emailFormTranslations = { email: t('email'), submit: t('send') }

	return (
		<form className="max-w-sm space-y-6">
			<div className="space-y-2 text-center">
				<h1 className="text-3xl font-bold">{t('title')}</h1>
				<p className="text-gray-500 dark:text-gray-400">{t('description')}</p>
			</div>
			<div className="space-y-4">
				<EmailForm t={emailFormTranslations} />
				<Link href="/signin">
					<Button className="w-full mt-2" variant="outline">
						<ArrowLeftIcon className="ml-2 h-4 w-4" />
						{t('backlogin')}
					</Button>
				</Link>
			</div>
		</form>
	)
}

export default ForgotPassword
