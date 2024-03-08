import Link from 'next/link'

import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

import { Button } from '@/ui/Button'

import PasswordForm from './PasswordForm'

import type { ParamsLocaleProps } from '@/types/props'

type Props = {
	searchParams: { code: string }
} & ParamsLocaleProps

const RecoverPassword: React.FC<Props> = async ({ params: { locale } }) => {
	unstable_setRequestLocale(locale)

	const t = await getTranslations({ locale, namespace: 'login.recoverpassword' })

	const passwordFormTranslations = {
		password: t('password'),
		confirmPassword: t('confirmpassword'),
		submit: t('submit'),
	}

	return (
		<form className="w-full space-y-6">
			<div className="space-y-2 text-center">
				<h1 className="text-3xl font-bold">{t('title')}</h1>
				<p className="text-gray-500 dark:text-gray-400">{t('description')}</p>
			</div>
			<div className="space-y-4">
				<PasswordForm t={passwordFormTranslations} />
				<Link href="/signin">
					<Button className="mt-2 w-full" variant="outline">
						<ArrowLeftIcon className="ml-2 h-4 w-4" />
						{t('backlogin')}
					</Button>
				</Link>
			</div>
		</form>
	)
}

export default RecoverPassword
