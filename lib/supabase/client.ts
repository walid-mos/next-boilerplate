import { createBrowserClient } from '@supabase/ssr'

import { SUPABASE_ANON_KEY, SUPABASE_URL } from '@/constants'

export const createClient = () => createBrowserClient(SUPABASE_URL, SUPABASE_ANON_KEY)
