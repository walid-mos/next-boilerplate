import Link from 'next/link'
import Image from 'next/image'

import { getTranslations } from 'next-intl/server'

import Placeholder from '@/public/svg/placeholder.svg'

import type { LocaleProps } from '@/types/props'

const Hero = async ({ locale }: LocaleProps) => {
	const t = await getTranslations({ locale, namespace: 'landing.Hero' })

	return (
		<section className="w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48">
			<div className="container px-4 md:px-6">
				<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
					<div className="w-full relative h-full">
						<Image src={Placeholder} alt="placeholder" />
					</div>
					<div className="flex flex-col justify-center space-y-4">
						<div className="space-y-2">
							<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
								{t('title')}
							</h1>
							<p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
								{t('description')}
							</p>
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
			</div>
		</section>
	)
}
export default Hero
