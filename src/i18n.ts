import { notFound } from 'next/navigation'

import { getRequestConfig } from 'next-intl/server'

import { LOCALES_SET } from './constants'

export default getRequestConfig(async ({ locale }: { locale: string }) => {
	// Validate that the incoming `locale` parameter is valid
	if (!LOCALES_SET.has(locale)) notFound()
	return {
		messages: (await import(`../lib/locales/${locale}.json`)).default,
	}
})
