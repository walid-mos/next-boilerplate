import { Button, Html } from '@react-email/components'

interface EmailTemplateProps {
	data?: {
		link: string | undefined
	}
}
const ForgotPasswordEmail = ({ data }: Readonly<EmailTemplateProps>) => {
	if (!data?.link) throw new Error('No link')
	return (
		<Html>
			<h2>Reset Password</h2>

			<p>Follow this link to reset the password for your user:</p>
			<a href={`${data.link}`}>
				<Button style={{ background: '#000', color: '#fff', padding: '12px 20px' }}>Reset Password</Button>
			</a>
		</Html>
	)
}

export default ForgotPasswordEmail
