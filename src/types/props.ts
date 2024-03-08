import type { getTranslations } from 'next-intl/server'
import type { LOCALES_TYPES } from '@/constants'

export type TranslationParameters = Parameters<typeof getTranslations>[0]
export type NamespaceKeys = NonNullable<Extract<TranslationParameters, object>['namespace']>

export type PropsWithLocale = {
	locale: LOCALES_TYPES
}
export type PropsWithParamsLocale = {
	params: PropsWithLocale
}

export type SVGProps = {
	size?: 's' | 'm' | 'l' | 'xl' | '2xl' | 'none'
} & React.SVGProps<SVGSVGElement>
