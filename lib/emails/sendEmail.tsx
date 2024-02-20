import { createElement } from 'react'

import { Resend } from 'resend'

import { RESEND_API_KEY } from '@/constants'
import ForgotPasswordEmail from '@/lib/emails/forgotpassword'

const resend = new Resend(RESEND_API_KEY)

type Templates = 'forgotPassword'

const importTemplate = (template: Templates) => {
	switch (template) {
		case 'forgotPassword':
			return ForgotPasswordEmail
		default:
			throw new Error('No email template given')
	}
}

type TTemplateData = Parameters<ReturnType<typeof importTemplate>>[number]['data']
type DataProps = {
	from?: string
	data?: TTemplateData
}

// TODO : Test via zod mails
// TODO : Handle Errors
export const SendMail = async (to: string, subject: string, template: Templates, { from, data }: DataProps) => {
	const EmailTemplate = importTemplate(template)
	try {
		return resend.emails.send({
			from: from ?? 'Boilerplate <walidmostefaoui@nextnode.fr>',
			to,
			subject,
			react: createElement(EmailTemplate, { data }),
		})
	} catch (error) {
		return { data: null, error }
	}
}
