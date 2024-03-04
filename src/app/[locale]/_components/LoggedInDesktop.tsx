'use client'

import { ChevronDownIcon } from '@radix-ui/react-icons'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from '@/components/ui/Dropdown'

import { handleSignOut } from '../user/action'

const LoggedInDesktop = () => (
	<DropdownMenu>
		<DropdownMenuTrigger asChild>
			<div className="flex cursor-pointer items-center gap-1">
				<Avatar className="h-8 w-8">
					<AvatarImage alt="User" src="/profile-picture.jpg" />
					<AvatarFallback>U</AvatarFallback>
					<span className="sr-only">Toggle user menu</span>
				</Avatar>
				<ChevronDownIcon />
			</div>
		</DropdownMenuTrigger>
		<DropdownMenuContent align="end" className="w-56">
			<DropdownMenuLabel>My Account</DropdownMenuLabel>
			<DropdownMenuSeparator />
			<DropdownMenuGroup>
				<DropdownMenuItem>
					Profile
					<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
				</DropdownMenuItem>
				<DropdownMenuItem>
					Billing
					<DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
				</DropdownMenuItem>
				<DropdownMenuItem>
					Settings
					<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
				</DropdownMenuItem>
				<DropdownMenuItem>
					Keyboard shortcuts
					<DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
				</DropdownMenuItem>
			</DropdownMenuGroup>
			<DropdownMenuSeparator />
			<DropdownMenuGroup>
				<DropdownMenuItem>Team</DropdownMenuItem>
				<DropdownMenuSub>
					<DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
					<DropdownMenuPortal>
						<DropdownMenuSubContent>
							<DropdownMenuItem>Email</DropdownMenuItem>
							<DropdownMenuItem>Message</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem>More...</DropdownMenuItem>
						</DropdownMenuSubContent>
					</DropdownMenuPortal>
				</DropdownMenuSub>
				<DropdownMenuItem>
					New Team
					<DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
				</DropdownMenuItem>
			</DropdownMenuGroup>
			<DropdownMenuSeparator />
			<DropdownMenuItem>GitHub</DropdownMenuItem>
			<DropdownMenuItem>Support</DropdownMenuItem>
			<DropdownMenuItem disabled>API</DropdownMenuItem>
			<DropdownMenuSeparator />
			<DropdownMenuItem className="cursor-pointer" onClick={() => handleSignOut()}>
				Log out
				<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
			</DropdownMenuItem>
		</DropdownMenuContent>
	</DropdownMenu>
)

export default LoggedInDesktop
