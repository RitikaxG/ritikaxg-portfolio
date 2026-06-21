import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getProject, projects } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

function Panel({ title, body, points }: { title: string; body?: string; points?: string[] }) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      {body ? <p className="mt-4 text-base leading-8 text-slate-300">{body}</p> : null}
      {points ? (
        <ul className="mt-5 space-y-3">
          {points.map((point) => (
            <li key={point} className="flex gap-3 text-sm leading-6 text-slate-300">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

export default async function ProjectCaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300">{project.eyebrow}</p>
        <h1 className="mt-4 max-w-5xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">{project.title}</h1>
        <p className="mt-5 max-w-4xl text-xl leading-8 text-slate-300">{project.subtitle}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.links.map((link, index) => (
            <Button key={link.label} href={link.href} label={link.label} variant={index === 0 ? "primary" : "secondary"} />
          ))}
        </div>

        <section className="mt-12 grid gap-5 lg:grid-cols-2">
          <Panel title="Product problem" body={project.caseStudy.problem} />
          <Panel title="What I built" body={project.caseStudy.solution} />
        </section>

        <section className="mt-8 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-6 md:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-200">Architecture path</p>
          <h2 className="mt-4 text-2xl font-semibold text-white">Core workflow</h2>
          <p className="mt-4 max-w-4xl text-base leading-8 text-slate-200">{project.caseStudy.architecture}</p>
          <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {project.caseStudy.architectureFlow.map((step, index) => (
              <div key={step} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                <p className="font-mono text-xs text-cyan-200">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-2 text-sm font-medium text-white">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-5">
          {project.caseStudy.sections.map((section) => (
            <Panel key={section.title} title={section.title} body={section.body} points={section.points} />
          ))}
        </section>

        <section className="mt-8 grid gap-5 lg:grid-cols-2">
          <Panel title="Data model" points={project.caseStudy.dataModel} />
          <Panel title="Reliability decisions" points={project.caseStudy.reliabilityDecisions} />
          <Panel title="What makes it non-trivial" points={project.caseStudy.nonTrivial} />
          <Panel title="Interview talking points" points={project.interviewPoints} />
        </section>

        <section className="mt-8 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Panel title="What I would improve next" points={project.caseStudy.nextImprovements} />

          <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-white">Proof links</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {project.caseStudy.proofLinks.map((link, index) => (
                <Button key={link.label} href={link.href} label={link.label} variant={index === 0 ? "primary" : "secondary"} />
              ))}
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-400">
              Placeholder proof links will be replaced with screenshots, architecture images, demo videos, and engineering journals during the polish phase.
            </p>
          </section>
        </section>

        <section className="mt-8 rounded-3xl border border-violet-300/20 bg-violet-300/10 p-6 md:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-violet-200">Final takeaway</p>
          <p className="mt-4 text-xl leading-9 text-white">{project.caseStudy.finalTakeaway}</p>
        </section>
      </div>
    </main>
  );
}
