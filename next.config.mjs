// @ts-check
import createNextIntlPlugin from 'next-intl/plugin'

import './scripts/checkNextEnv.mjs'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {}

export default withNextIntl(nextConfig)
