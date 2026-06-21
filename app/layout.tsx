import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
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
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Journals", href: "/#journals" },
  { label: "Resume", href: "/#resume" },
];

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | Ritika Gupta",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.author, url: siteConfig.github }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Ritika Gupta systems portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <div className="min-h-screen bg-neutral-950 text-neutral-100">
          <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-neutral-950/75 backdrop-blur-2xl">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
              <Link href="/" className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] font-mono text-xs font-semibold text-white">
                  RG
                </span>
                <span className="text-sm font-semibold tracking-wide text-white">Ritika Gupta</span>
              </Link>

              <div className="hidden rounded-full border border-white/10 bg-white/[0.04] p-1 shadow-2xl shadow-black/30 md:flex">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full px-4 py-2 text-sm text-neutral-300 transition hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <a
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-medium text-neutral-200 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
              >
                GitHub
              </a>
            </nav>
          </header>

          {children}

          <footer className="border-t border-white/[0.07] px-5 py-10 sm:px-8">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
              <p>Built as a systems portfolio for backend, platform, and applied AI engineering roles.</p>
              <div className="flex flex-wrap gap-4">
                <a className="transition hover:text-white" href={siteConfig.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a className="transition hover:text-white" href={`mailto:${siteConfig.email}`}>
                  Contact
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
