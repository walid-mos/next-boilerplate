import { unstable_setRequestLocale } from 'next-intl/server'

import Hero from './_components/Hero'

import type { ParamsLocaleProps } from '@/types/props'

const Home = async ({ params: { locale } }: ParamsLocaleProps) => {
	unstable_setRequestLocale(locale)

	return (
		<main className="flex max-w-screen-xl flex-col">
			<Hero locale={locale} />
		</main>
	)
}

export default Home
