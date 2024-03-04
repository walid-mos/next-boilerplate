import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'

const Layout = async ({ children }: React.PropsWithChildren) => {
	const cookieStore = cookies()
	const supabase = createClient(cookieStore)

	const { data, error } = await supabase.auth.getUser()
	if (error || !data?.user) {
		redirect('/signin')
	}

	return <div> {children} </div>
}

export default Layout
