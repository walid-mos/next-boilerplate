import { Body, Button, Container, Head, Html, Link, Preview, Section, Text } from '@react-email/components'

import { GITHUB_PROFILE_LINK } from '@/constants'

import { button, container, footer, link, main, section, text } from './ForgotPassword.style'

interface EmailTemplateProps {
	data?: {
		link: string | undefined
	}
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
