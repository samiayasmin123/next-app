import type { Metadata } from "next";
import Link from "next/link";
import AuthShell from "../components/auth-shell";
import LoginForm from "./login form";

export const metadata: Metadata = {
  title: "Sign in",
};

export default function LoginPage() {
  return (
    <AuthShell
      title="sign in"
      footer={
        <>
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-semibold underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Register here
          </Link>
        </>
      }
    >
      <LoginForm />
    </AuthShell>
  );
}