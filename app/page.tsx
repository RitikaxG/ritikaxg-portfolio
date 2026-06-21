import { projects } from "@/content/projects";
import { journals } from "@/content/journals";
import { resumeConfig } from "@/content/resume";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

const systemPath = ["Product workflow", "Backend services", "Workers / runtime", "Infra / GitOps", "Observability / evals"];

const offers = [
  {
    title: "Backend systems",
    copy: "APIs, state machines, worker pipelines, Postgres models, Redis coordination, incidents, notification logs, and durable workflow state.",
    points: ["Go and TypeScript backends", "Worker/event-driven systems", "Auth, RBAC, state modeling"],
  },
  {
    title: "Platform engineering",
    copy: "Dockerized local systems, Kubernetes manifests, GitOps workflows, External Secrets, ingress/TLS, Prometheus metrics, and autoscaling.",
    points: ["Docker + Compose", "Kubernetes + ArgoCD", "Metrics + HPA"],
  },
  {
    title: "Applied AI workflows",
    copy: "RAG, agents, memory, human review, evals, traces, AI gateway logs, and deterministic controls around model behavior.",
    points: ["Policy-grounded RAG", "Guarded tools", "Evals + observability"],
  },
];

const strengths = [
  "Backend architecture",
  "Worker systems",
  "Postgres modeling",
  "Redis coordination",
  "Cloud runtime orchestration",
  "Kubernetes / GitOps",
  "Applied AI workflow design",
  "RAG / agents / memory / evals",
];

export default function Home() {
  return (
    <main>
      <section id="top" className="px-4 py-10 sm:px-8 lg:py-14">
        <div className="mx-auto max-w-7xl rounded-[2.4rem] border border-white/10 bg-neutral-900/50 p-3 screen-shadow">
          <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-white/15" />
              <span className="h-3 w-3 rounded-full bg-white/12" />
              <span className="h-3 w-3 rounded-full bg-white/10" />
            </div>
            <div className="hidden h-8 w-72 rounded-lg border border-white/10 bg-white/[0.07] md:block" />
            <div className="h-8 w-8 rounded-full border border-white/10 bg-white/[0.06]" />
          </div>

          <div className="rounded-[2rem] bg-neutral-950/70 px-6 py-14 md:px-12 md:py-20">
            <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] font-mono text-2xl font-semibold text-white">
                  RG
                </div>
                <p className="mt-10 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
                  Backend / Platform / Applied AI Engineer
                </p>
                <h1 className="mt-5 max-w-5xl text-balance text-5xl font-semibold tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl">
                  I build complete systems, not isolated demos.
                </h1>
                <p className="mt-7 max-w-3xl text-lg leading-8 text-neutral-400">
                  I am Ritika Gupta. My portfolio is built around production-style systems: governed AI workflows, Go worker platforms, Kubernetes GitOps deployment, and cloud workspace control planes.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Button href="#projects" label="View Projects" variant="primary" />
                  <Button href="https://github.com/RitikaxG" label="GitHub" />
                  <Button href="#resume" label="Resume" variant="secondary" />
                </div>
              </div>

              <div className="soft-card rounded-[2rem] p-5">
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-neutral-500">System path</p>
                <div className="mt-5 space-y-3">
                  {systemPath.map((item, index) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-neutral-950 font-mono text-xs text-neutral-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-medium text-neutral-200">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-6 text-neutral-500">
                  Each project exposes the path from product workflow to backend state, runtime execution, deployment, and proof through traces, evals, metrics, or screenshots.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="About"
            title="I use projects as proof-of-work."
            copy="My learning path moved from frontend development into backend architecture, deployment, Go systems, DevOps/GitOps, cloud control planes, and applied AI workflows."
          />
          <div className="soft-card rounded-[2rem] p-6 md:p-8">
            <p className="text-lg leading-8 text-neutral-300">
              Each project is built to explore real production concerns: state, reliability, background processing, infrastructure, observability, evaluation, and human-in-the-loop workflows. The goal of this portfolio is to make those engineering decisions inspectable.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {strengths.map((strength) => (
                <Badge key={strength}>{strength}</Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What I can offer"
            title="Engineering depth across backend, platform, and applied AI."
            copy="The portfolio is organized around three complete systems, each proving a different layer of engineering depth."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {offers.map((offer) => (
              <article key={offer.title} className="soft-card rounded-[2rem] p-6 md:p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.055] font-mono text-sm text-neutral-300">
                  {offer.title.slice(0, 2)}
                </div>
                <h3 className="mt-8 text-2xl font-semibold text-white">{offer.title}</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-400">{offer.copy}</p>
                <ul className="mt-6 space-y-2">
                  {offer.points.map((point) => (
                    <li key={point} className="text-sm text-neutral-300">• {point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Proof of work"
            title="Featured systems"
            copy="These projects are built as systems, not isolated demos. Start with ClaimFlow AI, then inspect RunState and SpinUp."
          />
          <div className="mt-10 grid gap-5">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="journals" className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Engineering journals"
            title="Raw engineering trail behind the systems"
            copy="These journals are positioned as proof-of-work: implementation decisions, debugging steps, architecture evolution, deployment work, and lessons learned."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {journals.map((journal) => (
              <a key={journal.title} href={journal.href} target="_blank" rel="noreferrer" className="soft-card group rounded-[2rem] p-6 transition hover:border-white/18 hover:bg-white/[0.055]">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-neutral-500">Raw engineering journal</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">{journal.title}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-400">{journal.scope}</p>
                <p className="mt-5 text-sm text-neutral-500 transition group-hover:text-white">Open journal →</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="resume" className="px-5 py-16 sm:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 md:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">Resume</p>
          <h2 className="mt-4 max-w-5xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Target roles: {resumeConfig.targetRoles.join(" · ")}
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-neutral-400">
            A concise snapshot of my backend, platform, and applied AI experience across ClaimFlow AI, RunState, and SpinUp.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {resumeConfig.isAvailable ? <Button href={resumeConfig.pdfPath} label="Download Resume" variant="primary" /> : null}
            <Button href="mailto:ritikag5533@gmail.com" label="Contact" variant={resumeConfig.isAvailable ? "secondary" : "primary"} />
            <Button href="https://github.com/RitikaxG" label="GitHub" />
          </div>
        </div>
      </section>
    </main>
  );
}
