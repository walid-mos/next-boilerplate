'use client'

import { ThemeProvider } from 'next-themes'

const Providers = ({ children }: React.PropsWithChildren) => <ThemeProvider>{children}</ThemeProvider>

export default Providers
