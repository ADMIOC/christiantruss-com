import Link from "next/link";
import { AuthForm } from "@/components/auth/AuthForm";

export const metadata = {
  title: "Sign Up",
};

export default function SignupPage() {
  return (
    <section className="grid min-h-[72vh] place-items-center bg-ink px-4 py-16">
      <div className="w-full">
        <AuthForm mode="signup" />
        <p className="mt-5 text-center text-sm text-cream/58">
          Already have an account?{" "}
          <Link className="text-gold" href="/auth/login">
            Log in
          </Link>
        </p>
      </div>
    </section>
  );
}
