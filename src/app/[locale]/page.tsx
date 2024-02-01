import Link from 'next/link'

import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

import { Button } from '@/components/ui/Button'
import { LOCALES_TYPES } from '@/constants'

type Props = {
	params: {
		locale: LOCALES_TYPES
	}
}

const Home: React.FC<Props> = async ({ params: { locale } }) => {
	unstable_setRequestLocale(locale)

	const t = await getTranslations({ locale, namespace: 'landing' })

	return (
		<main className="h-full grid place-items-center">
			<div className="text-center">
				<h1 className="text-3xl"> {t('title')}</h1>
				<h3 className="text-xl">{t('text')}</h3>

				<Link href="/signin">
					<Button className="my-3"> {t('loginButton')} </Button>
				</Link>
			</div>
		</main>
	)
}

export default Home
