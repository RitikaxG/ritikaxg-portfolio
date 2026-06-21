import { PageShell } from "@/components/layout/PageShell";
import { journals } from "@/content/journals";

export default function JournalsPage() {
  return (
    <PageShell
      eyebrow="Engineering journals"
      title="Raw engineering trail behind the portfolio systems"
      copy="These journals frame implementation decisions, debugging notes, architecture evolution, deployment work, and lessons learned as proof-of-work."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {journals.map((journal) => (
          <article key={journal.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber-200">Raw engineering journal</p>
            <h2 className="mt-4 text-2xl font-semibold text-white">{journal.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">{journal.scope}</p>
            <p className="mt-5 text-sm text-slate-500">Link placeholder</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
