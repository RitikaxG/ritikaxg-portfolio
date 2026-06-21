import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navItems = [
  { label: "Projects", href: "/projects" },
  { label: "Engineering Journals", href: "/journals" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
];

export const metadata: Metadata = {
  title: "Ritika Gupta | Backend / Platform / Applied AI Engineer",
  description:
    "Production-style systems portfolio covering backend architecture, cloud infrastructure, GitOps, and governed AI workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <div className="min-h-screen overflow-hidden bg-slate-950 text-slate-100">
          <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
              <Link href="/" className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 font-mono text-sm font-semibold text-cyan-200">
                  RG
                </span>
                <span className="hidden text-sm font-semibold tracking-wide text-white sm:block">Ritika Gupta</span>
              </Link>

              <div className="hidden items-center gap-1 md:flex">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <a
                href="https://github.com/RitikaxG"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-300/50 hover:bg-cyan-300/10 hover:text-cyan-100"
              >
                GitHub
              </a>
            </nav>
          </header>
          {children}
          <footer className="border-t border-white/10 px-5 py-10 sm:px-8">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
              <p>Built as a systems portfolio for backend, platform, and applied AI engineering roles.</p>
              <a className="hover:text-cyan-200" href="https://github.com/RitikaxG" target="_blank" rel="noreferrer">
                GitHub profile
              </a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
