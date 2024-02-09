import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

import type { LanguageProps } from '@/types/props'

const WaitingRecover: React.FC<LanguageProps> = async ({ params: { locale } }) => {
	unstable_setRequestLocale(locale)

	const t = await getTranslations({ locale, namespace: 'login.waitingrecover' })

	return (
		<div className="max-w-sm min-w-60 space-y-6">
			<div className="space-y-2 text-center">
				<h1 className="text-3xl font-bold">{t('title')}</h1>
				<p className="text-gray-500 dark:text-gray-400">{t('description')}</p>
			</div>
		</div>
	)
}

export default WaitingRecover
