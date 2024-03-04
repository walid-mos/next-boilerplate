import Link from 'next/link'

const Footer = () => (
	<footer className="flex h-fit w-full shrink-0 flex-col items-center gap-2 border-t px-4 pt-2 sm:flex-row md:px-6 md:pt-4">
		<p className="text-xs text-gray-500 dark:text-gray-400">
			© {new Date().getFullYear()} Walid's BoilerPlate Inc. All rights reserved.
		</p>
		<nav className="flex gap-4 sm:ml-auto sm:gap-6">
			<Link className="text-xs underline-offset-4 hover:underline" href="#">
				Terms of Service
			</Link>
			<Link className="text-xs underline-offset-4 hover:underline" href="#">
				Privacy
			</Link>
		</nav>
	</footer>
)

export default Footer
