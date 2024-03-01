import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

import { createClient } from '@/lib/supabase/server'

import type { ParamsLocaleProps } from '@/types/props'

const WaitingRecover: React.FC<ParamsLocaleProps> = async ({ params: { locale } }) => {
	unstable_setRequestLocale(locale)
	const cookieStore = cookies()
	const supabase = createClient(cookieStore)

	const { data } = await supabase.auth.getUser()

	if (data.user?.id) redirect('/user')

	const t = await getTranslations({ locale, namespace: 'login.waitingrecover' })

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
