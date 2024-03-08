import { cookies } from 'next/headers'

import '@/styles/globals.css'


import { LOCALES, type LOCALES_TYPES } from '@/constants'
import { createClient } from '@/lib/supabase/server'
import Toaster from '@/ui/Toast'
import Navbar from '@/components/layout/home/Navbar'
import Footer from '@/components/layout/home/Footer'

import Providers from './providers'

import type { Metadata } from 'next'

type Props = React.PropsWithChildren<{ params: { locale: LOCALES_TYPES } }>

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export function generateStaticParams() {
	return LOCALES.map(locale => ({ locale }))
}

const RootLayout = async ({ children, params: { locale } }: Readonly<Props>) => {
	const cookieStore = cookies()
	const supabase = createClient(cookieStore)

	const { data } = await supabase.auth.getUser()

	return (
		<html lang={locale} suppressHydrationWarning>
			<body className="grid min-h-screen grid-rows-[min-content_1fr] justify-items-center px-6 py-4 sm:px-8 sm:py-6 md:px-10 md:py-8 xl:px-0">
				<Providers>
					<Navbar user={data.user} />
					{children}
					<Footer />
				</Providers>
				<Toaster position="top-center" richColors />
			</body>
		</html>
	)
}

export default RootLayout
