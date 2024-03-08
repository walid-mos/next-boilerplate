import { redirectIfConnected } from '@/functions/auth'

const Layout = async ({ children }: React.PropsWithChildren) => {
	await redirectIfConnected()
	return <div className="grid h-full w-full place-items-center sm:w-[24rem]">{children} </div>
}

export default Layout
