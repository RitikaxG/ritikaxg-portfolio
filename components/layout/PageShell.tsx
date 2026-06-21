import type { PropsWithChildren } from "react";

type PageShellProps = PropsWithChildren<{
  eyebrow: string;
  title: string;
  copy: string;
}>;

export function PageShell({ eyebrow, title, copy, children }: PageShellProps) {
  return (
    <main className="px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{copy}</p>
        <div className="mt-12">{children}</div>
      </div>
    </main>
  );
}
