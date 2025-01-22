import { createClient } from "@supabase/supabase-js";

//console.log("🔍 Supabase URL: test test test", import.meta.env.VITE_SUPABASE_URL);
//console.log("🔍 Supabase Anon Key:", import.meta.env.VITE_SUPABASE_ANON_KEY);

console.log("🛠️ Checking Environment Variables:");
console.log("VITE_SUPABASE_URL:", import.meta.env.VITE_SUPABASE_URL);
console.log("VITE_SUPABASE_ANON_KEY:", import.meta.env.VITE_SUPABASE_ANON_KEY);


const supabase = createClient(
//   import.meta.env.VITE_SUPABASE_URL,
//   import.meta.env.VITE_SUPABASE_ANON_KEY
    import.meta.env.VITE_SUPABASE_URL || process.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY

);

export default supabase;
