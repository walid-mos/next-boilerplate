import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

import type { LOCALES_TYPES } from '@/constants'
import type { NamespaceKeys } from '@/types/props'

export const getTranslation = async <T extends NamespaceKeys>(namespace: T, locale?: LOCALES_TYPES) => {
	if (locale) unstable_setRequestLocale(locale)

	return getTranslations(namespace)
}
