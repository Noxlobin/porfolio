import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://hkbkjozcgjkchssrhvxs.supabase.co',
  process.env.ANON_KEY!
)
