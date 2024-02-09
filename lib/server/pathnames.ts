import { LOCALES_SET } from '@/constants'

export const stripLocaleFromPath = (pathname: string) => {
	if (!pathname) throw new Error('path is empty')

	const paths = pathname.split('/').filter(Boolean)

	if (!LOCALES_SET.has(paths[0])) return pathname

	paths.shift()
	return `/${paths.join('/')}`
}
