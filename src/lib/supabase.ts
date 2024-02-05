import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config()

export const supabase = createClient(
  'https://hkbkjozcgjkchssrhvxs.supabase.co',
  process.env.ANON_KEY!
)
