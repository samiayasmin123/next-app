"use client";

import { useState } from "react";
import Link from "next/link";
import {
  buttonClass,
  errorClass,
  inputClass,
  roundCheckClass,
} from "../components/auth-styles";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // TODO: replace with real login call, e.g.
      // const res = await fetch("/api/login", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ username, password, remember }),
      // });
      // if (!res.ok) throw new Error("Username or password is incorrect.");
      await new Promise((resolve) => setTimeout(resolve, 800));
      console.log({ username, remember });
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="username" className="sr-only">
          Username
        </label>
        <input
          id="username"
          name="username"
          type="text"
          autoComplete="username"
          placeholder="Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={inputClass}
        />
      </div>

      <div className="flex items-center justify-between pt-1 text-sm text-[#1C2733]">
        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className={roundCheckClass}
          />
          Remember me
        </label>
        <Link
          href="/forgot-password"
          className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Forgot Password
        </Link>
      </div>

      {error && (
        <p role="alert" className={errorClass}>
          {error}
        </p>
      )}

      <div className="pt-6">
        <button type="submit" disabled={loading} className={buttonClass}>
          {loading ? "Wait…" : "Login"}
        </button>
      </div>
    </form>

    <div className="my-6 flex items-center gap-4 text-xs text-white">
      <span className="h-px flex-1 bg-white/60" />
      or
      <span className="h-px flex-1 bg-white/60" />
    </div>

    <button
      type="button"
      onClick={() => console.log("Google button clicked")}
      className="flex h-12 w-full items-center justify-center gap-3 rounded-full border-[3px] border-[#1C2733] bg-white text-base font-semibold text-[#1C2733] transition-colors hover:bg-[#EEF6FB] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5">
        <path fill="#4285F4" d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.46a5.52 5.52 0 0 1-2.4 3.62v3h3.88c2.27-2.09 3.58-5.17 3.58-8.81Z" />
        <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.94-2.91l-3.88-3a7.2 7.2 0 0 1-10.7-3.78H1.34v3.09A12 12 0 0 0 12 24Z" />
        <path fill="#FBBC05" d="M5.36 14.31a7.2 7.2 0 0 1 0-4.62V6.6H1.34a12 12 0 0 0 0 10.8l4.02-3.09Z" />
        <path fill="#EA4335" d="M12 4.75c1.76 0 3.34.61 4.59 1.8l3.44-3.44A11.5 11.5 0 0 0 12 0 12 12 0 0 0 1.34 6.6l4.02 3.09A7.16 7.16 0 0 1 12 4.75Z" />
      </svg>
      Continue with Google
    </button>
    </>
  );
}