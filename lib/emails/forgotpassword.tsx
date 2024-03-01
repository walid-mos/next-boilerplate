import { Body, Button, Container, Head, Html, Link, Preview, Section, Text } from '@react-email/components'

import { GITHUB_PROFILE_LINK } from '@/constants'

interface EmailTemplateProps {
	data?: {
		link: string | undefined
	}
}

const main = {
	backgroundColor: '#ffffff',
	color: '#24292e',
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
}

const container = {
	maxWidth: '480px',
	margin: '0 auto',
	padding: '20px 0 48px',
}

const section = {
	padding: '24px',
	border: 'solid 1px #dedede',
	borderRadius: '5px',
	textAlign: 'center' as const,
}

const text = {
	margin: '0 0 10px 0',
	textAlign: 'left' as const,
}

const button = {
	fontSize: '14px',
	backgroundColor: '#28a745',
	color: '#fff',
	lineHeight: 1.5,
	borderRadius: '0.5em',
	padding: '12px 24px',
}

const link = {
	color: '#0366d6',
	fontSize: '12px',
}

const footer = {
	color: '#6a737d',
	fontSize: '12px',
	textAlign: 'center' as const,
	marginTop: '60px',
}

const ForgotPasswordEmail = ({ data }: Readonly<EmailTemplateProps>) => {
	if (!data?.link) throw new Error('No link')
	return (
		<Html>
			<Head />
			<Preview>Reset your password</Preview>
			<Body style={main}>
				<Container style={container}>
					<Section style={section}>
						<Text style={text}>Follow this link to reset the password for your user:</Text>
						<Button style={button} href={data.link}>
							Reset password
						</Button>
					</Section>

					<Text style={footer}>
						Boilerplate - Walid Mos - Find me at{' '}
						<Link style={link} href={GITHUB_PROFILE_LINK}>
							my github
						</Link>
						.
					</Text>
				</Container>
			</Body>
		</Html>
	)
}

export default ForgotPasswordEmail
