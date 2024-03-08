'use client'

import Link from 'next/link'

import { useId, useState } from 'react'

import { User } from '@supabase/supabase-js'
import { RowsIcon } from '@radix-ui/react-icons'

import { cn } from '@/functions/classname'
import LayoutLogo from '@/ui/SVG/LayoutLogo'
import { Button } from '@/ui/Button'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/ui/NavigationMenu'
import { Sheet, SheetContent } from '@/ui/Sheet'
import { Separator } from '@/ui/Separator'

import LoggedInDesktop from './LoggedInDesktop'

type Props = {
	user: User | null
}

const navItems = [
	{
		name: 'Features',
		href: '#',
	},
	{
		name: 'Pricing',
		href: '#',
	},
	{
		name: 'About',
		href: '#',
	},
] as const

const Navbar = ({ user }: Props) => {
	const [isOpen, setIsOpen] = useState(false)
	const isConnected = user?.id

	return (
		<header className="flex w-full flex-wrap text-sm md:flex-nowrap md:justify-center">
			<NavigationMenu className="relative flex h-fit min-h-8 max-w-screen-xl justify-between rounded-[36px] border-input bg-white py-3 md:border md:px-4 lg:px-8">
				<Link href="/">
					<LayoutLogo />
					<span className="sr-only">Acme Inc</span>
				</Link>

				{/* Desktop Navigation */}
				<NavigationMenuList className="hidden md:flex md:gap-5 lg:gap-8">
					{navItems.map(({ name, href }) => (
						<NavigationMenuItem
							key={useId()}
							className="text-sm font-medium underline-offset-4 transition-all hover:text-primary"
						>
							<Link href={href} legacyBehavior passHref>
								<NavigationMenuLink>{name}</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
					))}
					<Separator className="h-6 bg-input" orientation="vertical" />
					<NavigationMenuItem className="flex-1">
						{isConnected ? (
							<LoggedInDesktop />
						) : (
							<Link legacyBehavior passHref href="/signin">
								<NavigationMenuLink className="text-sm font-medium text-primary underline-offset-4 transition-all hover:text-secondary">
									Log In
								</NavigationMenuLink>
							</Link>
						)}
					</NavigationMenuItem>
				</NavigationMenuList>

				{/* Mobile Button */}
				<Button
					size="icon"
					variant="outline"
					className={cn(
						'md:hidden',
						isOpen ? 'bg-accent hover:bg-accent' : 'bg-background hover:bg-background',
					)}
					onClick={() => setIsOpen(!isOpen)}
				>
					<RowsIcon className="text-foreground" />
				</Button>
			</NavigationMenu>
			{/* Mobile Navigation */}
			<Sheet open={isOpen} onOpenChange={setIsOpen}>
				<SheetContent side="left" className="flex flex-col gap-20 py-20 text-2xl font-semibold">
					{navItems.map(({ name, href }) => (
						<Link
							key={useId()}
							href={href}
							legacyBehavior
							passHref
							className="text-foreground duration-500"
						>
							{name}
						</Link>
					))}
				</SheetContent>
			</Sheet>
		</header>
	)
}
/* <Separator className="hidden bg-accent sm:flex" orientation="vertical" />
						<NavigationMenuItem className="flex-1">
							{isConnected ? (
								<Avatar className="h-9 w-9">
									<AvatarImage alt="User" src="/profile-picture.jpg" />
									<AvatarFallback>U</AvatarFallback>
									<span className="sr-only">Toggle user menu</span>
								</Avatar>
							) : (
								<Link href="/signin">
									<NavigationMenuLink>Log In</NavigationMenuLink>
								</Link>
							)}
						</NavigationMenuItem> */

// <ul
// 	className={cn(
// 		'absolute z-40 mt-14 min-h-fit w-full origin-top overflow-hidden bg-accent transition-all duration-500 md:hidden',
// 		!isOpen && 'h-0',
// 	)}
// >
// 	<div className="my-6 flex h-fit flex-col items-center justify-between gap-5">
// 		{navItems.map(({ name, href }) => (
// 			<li key={useId()}>
// 				<Link
// 					href={href}
// 					legacyBehavior
// 					passHref
// 					className="my-4 text-gray-800 duration-500 hover:text-blue-400"
// 				>
// 					{name}
// 				</Link>
// 			</li>
// 		))}
// 	</div>
// </ul>
export default Navbar
