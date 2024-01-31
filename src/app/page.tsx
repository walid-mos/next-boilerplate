import Link from 'next/link'

import { Button } from '@/components/ui/Button'

const Home = () => (
	<main className="h-full grid place-items-center">
		<div className="text-center">
			<h1 className="text-3xl">Welcome to Our Boilerplate App</h1>
			<h3 className="text-xl">
				This is a brief description of our boilerplate app. It&apos;s designed to help you kickstart your next
				project.
			</h3>

			<Link href="/login">
				<Button className="my-3"> Login </Button>
			</Link>
		</div>
	</main>
)

export default Home
