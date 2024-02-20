'use client'

import { useEffect } from 'react'

import { Button } from '@/components/ui/Button'
import Error500 from '@/components/SVG/error500'
// Error components must be Client Components

const Error = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error)
	}, [error])

	return (
		<div className="grid place-items-center h-screen">
			<div className="flex-1 bg-gray-1000 gap-20 p-4 items-center justify-center ">
				<div className="container flex flex-col items-center gap-20 text-center">
					<Error500 />
					<div className="space-y-2">
						<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl/none">
							Something went wrong
						</h1>
						<p className="text-gray-500 md:w-1/2/relaxed lg:w-1/3/relaxed xl:w-1/4/relaxed dark:text-gray-400">
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
