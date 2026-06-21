import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getProject, projects } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
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
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-6xl">{project.title}</h1>
        <p className="mt-4 max-w-3xl text-xl leading-8 text-slate-300">{project.subtitle}</p>
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

        <section className="mt-12 rounded-3xl border border-white/10 bg-white/[0.04] p-8">
          <h2 className="text-2xl font-semibold text-white">What I built</h2>
          <p className="mt-4 text-base leading-8 text-slate-300">{project.summary}</p>
        </section>

        <section className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <h2 className="text-2xl font-semibold text-white">Core workflow</h2>
            <ol className="mt-5 space-y-3">
              {project.workflow.map((step, index) => (
                <li key={step} className="flex gap-3 text-sm text-slate-300">
                  <span className="font-mono text-cyan-200">0{index + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <h2 className="text-2xl font-semibold text-white">Interview talking points</h2>
            <ul className="mt-5 space-y-3">
              {project.interviewPoints.map((point) => (
                <li key={point} className="text-sm leading-6 text-slate-300">• {point}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
