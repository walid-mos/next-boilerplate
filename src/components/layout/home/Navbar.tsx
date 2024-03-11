'use client'

import Link from 'next/link'

import { useId, useState } from 'react'

import { RowsIcon } from '@radix-ui/react-icons'

import { cn } from '@/functions/classname'
import LayoutLogo from '@/ui/SVG/LayoutLogo'
import { Button } from '@/ui/Button'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/ui/NavigationMenu'
import { Sheet, SheetContent } from '@/ui/Sheet'
import { Separator } from '@/ui/Separator'

import LoggedInDesktop from './LoggedInDesktop'

import type { User } from '@supabase/supabase-js'

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
			<NavigationMenu className="relative flex h-fit max-w-screen-xl justify-between rounded-[36px] border-input bg-white py-3 md:border md:px-4 lg:px-8">
				<Link href="/">
					<LayoutLogo />
					<span className="sr-only">Acme Inc</span>
				</Link>

				{/* Desktop Navigation */}
				<NavigationMenuList className="hidden h-8 md:flex md:gap-5 lg:gap-8">
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
					<NavigationMenuItem className="w-14 flex-1">
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

export default Navbar
