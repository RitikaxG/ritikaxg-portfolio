import { PageShell } from "@/components/layout/PageShell";
import { Badge } from "@/components/ui/Badge";

const strengths = [
  "Backend architecture",
  "Worker and event-driven systems",
  "Postgres data modeling",
  "Redis coordination patterns",
  "Cloud runtime orchestration",
  "Kubernetes and GitOps deployment",
  "Applied AI workflow design",
  "RAG, agents, memory, evals, observability",
];

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="I use projects as proof-of-work."
      copy="I am Ritika Gupta, a backend/platform/applied AI engineer focused on building complete systems."
    >
      <div className="grid gap-8 rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="text-2xl font-semibold text-white">Engineering journey</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            My learning path moved from frontend development into backend architecture, deployment, Go systems, DevOps/GitOps, cloud control planes, and applied AI workflows.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white">Strengths</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {strengths.map((strength) => (
              <Badge key={strength}>{strength}</Badge>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
