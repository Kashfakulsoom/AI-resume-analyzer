import { supabase } from "../src/lib/supabase"

export const signInWithGoogle = async () => {
  await supabase.auth.signInWithOAuth({
    provider: "google"
  })
}