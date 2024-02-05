import Link from 'next/link'

import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

import { Label } from '@/components/ui/Label'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

import { signup } from '../action'

import type { LanguageProps } from '@/types/props'

const SignUp: React.FC<LanguageProps> = async ({ params: { locale } }) => {
	unstable_setRequestLocale(locale)

	const t = await getTranslations({ locale, namespace: 'login.signup' })

	return (
		<form className="max-w-sm min-w-60 space-y-6">
			<div className="space-y-2 text-center">
				<h1 className="text-3xl font-bold">{t('title')}</h1>
				<p className="text-gray-500 dark:text-gray-400">{t('description')}</p>
			</div>
			<div className="space-y-4">
				<div className="space-y-2">
					<Label htmlFor="email">{t('email')}</Label>
					<Input name="email" id="email" placeholder="m@example.com" type="email" />
				</div>
				<div className="space-y-2">
					<Label htmlFor="password">{t('password')}</Label>
					<Input name="password" id="password" type="password" />
				</div>
				<Button formAction={signup} className="w-full mt-2">
					{t('signup')}
				</Button>
				<Link href="/signin">
					<Button className="w-full mt-2" variant="outline">
						<ArrowLeftIcon className="mr-2 h-4 w-4" />
						{t('backlogin')}
					</Button>
				</Link>
			</div>
		</form>
	)
}

export default SignUp
