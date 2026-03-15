import { createClient as createSupabaseClient, SupabaseClient } from '@supabase/supabase-js'

// Use globalThis to persist the client across hot module reloads
const globalForSupabase = globalThis as typeof globalThis & {
  supabaseClient?: SupabaseClient
}

export function createClient() {
  if (!globalForSupabase.supabaseClient) {
    globalForSupabase.supabaseClient = createSupabaseClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
  }
  
  return globalForSupabase.supabaseClient
}
