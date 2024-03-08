import Link from 'next/link'
import Image from 'next/image'

import { getTranslations } from 'next-intl/server'

import Placeholder from '@/public/svg/placeholder.svg'

const Hero = async () => {
	const t = await getTranslations('landing.Hero')

	return (
		<section className="w-full py-6 md:py-16 xl:py-32 ">
			<div className="grid gap-6 md:grid-cols-[2fr_3fr] md:gap-12">
				<div className="relative h-full w-full">
					<Image src={Placeholder} alt="placeholder" />
				</div>
				<div className="flex flex-col justify-center space-y-4">
					<div className="space-y-2">
						<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
							{t('title')}
						</h1>
						<p className="text-gray-500 dark:text-gray-400 md:text-xl">{t('description')}</p>
					</div>
					<div className="flex flex-col gap-2 min-[400px]:flex-row">
						<Link
							className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
							href="#"
						>
							{t('button1')}
						</Link>
						<Link
							className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200  bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
							href="#"
						>
							{t('button2')}
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
