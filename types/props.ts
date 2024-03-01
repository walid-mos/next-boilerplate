import { LOCALES_TYPES } from '@/constants'

export type LocaleProps = {
	locale: LOCALES_TYPES
}

export type ParamsLocaleProps = {
	params: LocaleProps
}

export type SVGProps = {
	size?: 's' | 'm' | 'l' | 'xl' | '2xl' | 'none'
} & React.SVGProps<SVGSVGElement>
