import { unstable_setRequestLocale } from 'next-intl/server'

import Hero from '@/components/modules/home/Hero'

import type { PropsWithParamsLocale } from '@/types/props'

const Home = async ({ params: { locale } }: PropsWithParamsLocale) => {
	unstable_setRequestLocale(locale)

	return (
		<main className="flex max-w-screen-xl flex-col">
			<Hero />
		</main>
	)
}

export default Home
