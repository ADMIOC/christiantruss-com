import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function AuthCallbackPage({
  searchParams,
}: {
  searchParams: { code?: string };
}) {
  const supabase = createSupabaseServerClient();

  if (supabase && searchParams.code) {
    await supabase.auth.exchangeCodeForSession(searchParams.code);
  }

  redirect("/portal");
}
