import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://hkbkjozcgjkchssrhvxs.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhrYmtqb3pjZ2prY2hzc3JodnhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY5NTA0MDAsImV4cCI6MjAyMjUyNjQwMH0.Zpb4VvVoxD81ywJacquCVJ3Bhx0t5dZCPK3txJPrdEA'
)
