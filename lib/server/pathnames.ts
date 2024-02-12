import { LOCALES_SET } from '@/constants'

export const stripLocaleFromPath = (pathname: string) => {
	if (!pathname) throw new Error('path is empty')

	const [, locale, ...segments] = pathname.split('/')

	if (!LOCALES_SET.has(locale)) return pathname
	return `/${segments.join('/')}`
}
