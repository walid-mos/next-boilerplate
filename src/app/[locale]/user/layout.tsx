import { redirectIfNotConnected } from '@/functions/auth'

const Layout = async ({ children }: React.PropsWithChildren) => {
	redirectIfNotConnected()

	return <div> {children} </div>
}

export default Layout
