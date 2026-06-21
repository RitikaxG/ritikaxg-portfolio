import { journals } from "@/content/journals";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

const systemPath = ["Product Workflow", "Backend Services", "Workers / Runtime", "Infra / GitOps", "Observability / Evals"];

const skills = [
  "API design",
  "State machines",
  "Worker pipelines",
  "Postgres modeling",
  "Redis coordination",
  "Docker",
  "Kubernetes",
  "GitOps",
  "RAG",
  "Agent tools",
  "Workflow memory",
  "Evals and traces",
];

export default function Home() {
  return (
    <main>
      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <Badge>Backend / Platform / Applied AI Engineer</Badge>
            <h1 className="mt-8 max-w-5xl text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              I build production-style systems where the hard parts are not hidden behind the UI.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              My work focuses on workers, queues, state machines, control planes, RAG, memory, evals, observability, and deployment.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/projects" label="View Projects" variant="primary" />
              <Button href="https://github.com/RitikaxG" label="GitHub" />
              <Button href="/resume" label="Resume" variant="ghost" />
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-cyan-950/30 backdrop-blur">
            <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">System path</p>
              {systemPath.map((item, index) => (
                <div key={item} className="mt-4 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 font-mono text-xs text-cyan-100">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Proof of work"
            title="Three systems, three engineering layers"
            copy="The portfolio is built around complete systems: applied AI reliability, backend/platform architecture, and cloud runtime orchestration."
          />
          <div className="mt-8 grid gap-5">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Systems skills map"
            title="The engineering areas my projects prove"
            copy="The site is intentionally content-heavy so recruiters and interviewers can inspect real implementation depth quickly."
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Engineering journals"
            title="Raw engineering trail behind the systems"
            copy="These journals will link implementation decisions, debugging steps, architecture evolution, deployment work, and lessons learned."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {journals.map((journal) => (
              <div key={journal.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber-200">Raw engineering journal</p>
                <h3 className="mt-4 text-xl font-semibold text-white">{journal.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{journal.scope}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
