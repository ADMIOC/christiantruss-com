"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

export function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const router = useRouter();
  const [status, setStatus] = useState("");

  async function handleEmailAuth(formData: FormData) {
    setStatus("Connecting...");

    try {
      const supabase = createSupabaseBrowserClient();
      const email = String(formData.get("email") || "");
      const password = String(formData.get("password") || "");
      const fullName = String(formData.get("full_name") || "");

      const result =
        mode === "signup"
          ? await supabase.auth.signUp({
              email,
              password,
              options: { data: { full_name: fullName } },
            })
          : await supabase.auth.signInWithPassword({ email, password });

      if (result.error) {
        setStatus(result.error.message);
        return;
      }

      router.push("/portal");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Auth is not configured.");
    }
  }

  async function handleGoogle() {
    try {
      const supabase = createSupabaseBrowserClient();
      await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Auth is not configured.");
    }
  }

  return (
    <Card className="mx-auto w-full max-w-md">
      <h1 className="page-title text-cream">
        {mode === "signup" ? "Create account" : "Client login"}
      </h1>
      <form action={handleEmailAuth} className="mt-6 grid gap-3">
        {mode === "signup" ? (
          <Input name="full_name" placeholder="Full name" required />
        ) : null}
        <Input name="email" placeholder="Email" required type="email" />
        <Input name="password" placeholder="Password" required type="password" />
        <Button type="submit">{mode === "signup" ? "Sign Up" : "Log In"}</Button>
      </form>
      <Button className="mt-3 w-full" onClick={handleGoogle} type="button" variant="secondary">
        Continue with Google
      </Button>
      {status ? <p className="mt-4 text-sm text-gold">{status}</p> : null}
    </Card>
  );
}
