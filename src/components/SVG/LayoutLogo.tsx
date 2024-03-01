import SvgBuilder from './svgBuilder'

import type { SVGProps } from '@/types/props'

const LayoutLogo = ({ ...props }: SVGProps) => (
	<SvgBuilder
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="currentColor"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="m8 3 4 8 5-5 5 15H2L8 3z" />
	</SvgBuilder>
)

export default LayoutLogo
