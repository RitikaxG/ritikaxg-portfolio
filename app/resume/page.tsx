import { PageShell } from "@/components/layout/PageShell";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/content/projects";

const targets = ["Backend Engineer", "Platform Engineer", "Applied AI Engineer", "AI Systems Engineer"];

export default function ResumePage() {
  return (
    <PageShell
      eyebrow="Resume"
      title="Backend, platform, and applied AI systems profile"
      copy="A concise hiring summary for roles that value backend architecture, workers, cloud infrastructure, GitOps, and governed AI workflows."
    >
      <section className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-6">
        <h2 className="text-2xl font-semibold text-white">Role target</h2>
        <div className="mt-5 flex flex-wrap gap-2">
          {targets.map((target) => (
            <Badge key={target}>{target}</Badge>
          ))}
        </div>
      </section>

      <section className="mt-8 grid gap-5">
        {projects.map((project) => (
          <article key={project.slug} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">{project.summary}</p>
          </article>
        ))}
      </section>

      <section className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
        <h2 className="text-2xl font-semibold text-white">Resume download</h2>
        <p className="mt-3 text-sm leading-6 text-slate-300">Resume PDF will be added in the polish phase.</p>
      </section>
    </PageShell>
  );
}
