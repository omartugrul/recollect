import supabase from "./lib/supabase";

export default function App() {

  console.log("Supabase URL:", import.meta.env.NEXT_PUBLIC_SUPABASE_URL);
  console.log("Supabase Client:", supabase);

  
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Tailwind is working! 🚀</h1>
    </div>
  );
  
}
