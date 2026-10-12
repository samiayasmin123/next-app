import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-auth",
});

export default function AuthShell({
  title,
  children,
  footer,
}: {
  title: string;
  children: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <div
      className={`${montserrat.variable} flex min-h-screen items-center justify-center bg-[linear-gradient(90deg,#9157AC_0%,#5F6BB8_45%,#2878BD_100%)] px-4 py-10 font-[family-name:var(--font-auth)]`}
    >
      <main className="w-full max-w-[400px] rounded-tl-[110px] bg-[linear-gradient(90deg,#82C8F1_0%,#55AACF_55%,#3A98C0_100%)] px-8 pb-10 pt-16 sm:px-10">
        <h1 className="text-center text-3xl font-medium text-white [text-shadow:0_1px_3px_rgb(0_0_0/0.25)]">
          {title}
        </h1>

        <div className="mt-8">{children}</div>

        <p className="mt-8 text-center text-xs text-white [text-shadow:0_1px_2px_rgb(0_0_0/0.25)]">
          {footer}
        </p>
      </main>
    </div>
  );
}