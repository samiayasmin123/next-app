import type { Metadata } from "next";
import Link from "next/link";
import AuthShell from "../components/auth-shell";
import RegisterForm from "./register form";

export const metadata: Metadata = {
  title: "Sign up",
};

export default function RegisterPage() {
  return (
    <AuthShell
      title="sign up"
      footer={
        <>
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Login here
          </Link>
        </>
      }
    >
      <RegisterForm />
    </AuthShell>
  );
}