import Link from 'next/link'

import { ArrowLeftIcon } from '@radix-ui/react-icons'

import { Button } from '@/components/ui/Button'
import EmailForm from '@/components/modules/auth/EmailForm'
import { getTranslation } from '@/functions/translations'

import type { PropsWithParamsLocale } from '@/types/props'

const ForgotPassword = async ({ params: { locale } }: PropsWithParamsLocale) => {
	const t = await getTranslation('login.forgotpassword', locale)

	const emailFormTranslations = { email: t('email'), submit: t('send') }

	return (
		<form className="w-full space-y-6">
			<div className="space-y-2 text-center">
				<h1 className="text-3xl font-bold">{t('title')}</h1>
				<p className="text-gray-500 dark:text-gray-400">{t('description')}</p>
			</div>
			<div className="space-y-4">
				<EmailForm t={emailFormTranslations} />
				<Link href="/signin">
					<Button className="mt-2 w-full" variant="outline">
						<ArrowLeftIcon className="mr-2 h-4 w-4" />
						{t('backlogin')}
					</Button>
				</Link>
			</div>
		</form>
	)
}

export default ForgotPassword
