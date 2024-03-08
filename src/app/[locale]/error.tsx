'use client'

import { useEffect } from 'react'

import { Button } from '@/ui/Button'
import Error500 from '@/ui/SVG/error500'
// Error components must be Client Components

const Error = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error)
	}, [error])

	return (
		<div className="grid h-screen place-items-center">
			<div className="bg-gray-1000 flex-1 items-center justify-center gap-20 p-4 ">
				<div className="container flex flex-col items-center gap-20 text-center">
					<Error500 />
					<div className="space-y-2">
						<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl/none">
							Something went wrong
						</h1>
						<p className="md:w-1/2/relaxed lg:w-1/3/relaxed xl:w-1/4/relaxed text-gray-500 dark:text-gray-400">
							We couldn't load the component. There may be a problem with your internet connection.
						</p>
					</div>
					<Button
						className="w-full max-w-sm"
						onClick={
							// Attempt to recover by trying to re-render the segment
							() => reset()
						}
					>
						Try again
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Error
