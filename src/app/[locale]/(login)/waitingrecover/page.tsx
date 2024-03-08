import { getTranslation } from '@/functions/translations'

import type { PropsWithParamsLocale } from '@/types/props'

const WaitingRecover: React.FC<PropsWithParamsLocale> = async ({ params: { locale } }) => {
	const t = await getTranslation('login.waitingrecover', locale)

	return (
		<div className="min-w-60 max-w-sm space-y-6">
			<div className="space-y-2 text-center">
				<h1 className="text-3xl font-bold">{t('title')}</h1>
				<p className="text-gray-500 dark:text-gray-400">{t('description')}</p>
			</div>
		</div>
	)
}

export default WaitingRecover
