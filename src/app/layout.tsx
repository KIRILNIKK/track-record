import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kiril Nikolaev | Real Estate Investor",
  description:
    "Follow Kiril Nikolaev's journey from humble beginnings to a seasoned Canadian real estate investor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-50 text-slate-900 antialiased`}
      >
        <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 pb-12 pt-8 sm:px-8">
          <header className="flex flex-col gap-6 pb-10 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/"
              className="text-xl font-semibold tracking-tight text-slate-900"
            >
              Kiril Nikolaev
            </Link>
            <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
              <Link
                href="/"
                className="transition-colors hover:text-slate-900"
              >
                Home
              </Link>
              <Link
                href="/portfolio"
                className="transition-colors hover:text-slate-900"
              >
                Portfolio
              </Link>
            </nav>
          </header>
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
