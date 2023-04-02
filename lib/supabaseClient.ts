import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://fxbyhlpaaetzdijcnzkf.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4YnlobHBhYWV0emRpamNuemtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYyMzk0MjgsImV4cCI6MTk5MTgxNTQyOH0.9-KfdJ4bnBqxK5XxFcFBhXAszddHH3O1PnWG-2P6jX8')