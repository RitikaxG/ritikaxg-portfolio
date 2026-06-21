import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProofGallery } from "@/components/projects/ProofGallery";
import { getProject, projects } from "@/content/projects";
import { projectProofAssets } from "@/content/proofAssets";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

function SectionLabel({ children }: { children: string }) {
  return <p className="font-mono text-xs uppercase tracking-[0.28em] text-neutral-500">{children}</p>;
}

function TextPanel({ title, body }: { title: string; body: string }) {
  return (
    <section className="soft-card rounded-[2rem] p-6 md:p-8">
      <h2 className="text-2xl font-semibold tracking-tight text-white">{title}</h2>
      <p className="mt-4 text-base leading-8 text-neutral-400">{body}</p>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-6 text-neutral-400">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function ProjectCaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const proof = projectProofAssets[project.slug];
  const proofLinks = proof?.links.length ? proof.links : project.caseStudy.proofLinks;

  return (
    <main className="px-5 py-12 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <Link href="/#projects" className="text-sm text-neutral-500 transition hover:text-white">
          ← Back to portfolio
        </Link>

        <section className="mt-8 rounded-[2.4rem] border border-white/10 bg-neutral-900/45 p-4 screen-shadow">
          <div className="rounded-[2rem] bg-neutral-950/70 p-6 md:p-10 lg:p-12">
            <SectionLabel>{project.eyebrow}</SectionLabel>
            <div className="mt-5 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <h1 className="max-w-5xl text-balance text-5xl font-semibold tracking-[-0.055em] text-white sm:text-7xl">
                  {project.title}
                </h1>
                <p className="mt-5 max-w-4xl text-xl leading-8 text-neutral-300">{project.subtitle}</p>
                <p className="mt-6 max-w-4xl text-base leading-8 text-neutral-400">{project.summary}</p>
              </div>

              <aside className="soft-card rounded-[2rem] p-5">
                <SectionLabel>What this proves</SectionLabel>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.proves.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.links.map((link, index) => (
                    <Button key={link.label} href={link.href} label={link.label} variant={index === 0 ? "primary" : "secondary"} />
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-5 lg:grid-cols-2">
          <TextPanel title="Product problem" body={project.caseStudy.problem} />
          <TextPanel title="What I built" body={project.caseStudy.solution} />
        </section>

        <section className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 md:p-8">
          <SectionLabel>Architecture</SectionLabel>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">System path</h2>
          <p className="mt-4 max-w-5xl text-base leading-8 text-neutral-400">{project.caseStudy.architecture}</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {project.caseStudy.architectureFlow.map((step, index) => (
              <div key={step} className="relative rounded-2xl border border-white/10 bg-neutral-950/70 p-5">
                <p className="font-mono text-xs text-neutral-500">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-3 text-base font-semibold text-white">{step}</p>
                {index < project.caseStudy.architectureFlow.length - 1 ? (
                  <span className="absolute -right-2 top-1/2 hidden text-neutral-700 lg:block">→</span>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        {proof ? <ProofGallery images={proof.images} /> : null}

        <section className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="soft-card rounded-[2rem] p-6 md:p-8">
            <SectionLabel>Product workflow</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">How the product actually runs</h2>
            <ol className="mt-7 space-y-4">
              {project.workflow.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-neutral-950 font-mono text-xs text-neutral-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="pt-1 text-sm leading-6 text-neutral-400">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="soft-card rounded-[2rem] p-6 md:p-8">
            <SectionLabel>Why it is not trivial</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">The hard parts are system boundaries</h2>
            <BulletList items={project.highlights} />
            <div className="mt-8 rounded-2xl border border-white/10 bg-neutral-950/70 p-5">
              <p className="text-sm leading-7 text-neutral-400">{project.caseStudy.finalTakeaway}</p>
            </div>
          </section>
        </section>

        <section className="mt-8">
          <SectionLabel>Subsystem deep dive</SectionLabel>
          <div className="mt-5 grid gap-5">
            {project.caseStudy.sections.map((section) => (
              <article key={section.title} className="soft-card rounded-[2rem] p-6 md:p-8">
                <h2 className="text-3xl font-semibold tracking-tight text-white">{section.title}</h2>
                <p className="mt-4 max-w-5xl text-base leading-8 text-neutral-400">{section.body}</p>
                <BulletList items={section.points} />
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-5 lg:grid-cols-2">
          <section className="soft-card rounded-[2rem] p-6 md:p-8">
            <SectionLabel>Data model</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">Durable state behind the UI</h2>
            <BulletList items={project.caseStudy.dataModel} />
          </section>

          <section className="soft-card rounded-[2rem] p-6 md:p-8">
            <SectionLabel>Engineering decisions</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">Tradeoffs and reliability boundaries</h2>
            <BulletList items={project.caseStudy.reliabilityDecisions} />
          </section>
        </section>

        <section className="mt-8 grid gap-5 lg:grid-cols-3">
          <section className="soft-card rounded-[2rem] p-6 md:p-8">
            <SectionLabel>What makes it more than a demo</SectionLabel>
            <BulletList items={project.caseStudy.nonTrivial} />
          </section>

          <section className="soft-card rounded-[2rem] p-6 md:p-8">
            <SectionLabel>Next improvements</SectionLabel>
            <BulletList items={project.caseStudy.nextImprovements} />
          </section>

          <section className="soft-card rounded-[2rem] p-6 md:p-8">
            <SectionLabel>Proof links</SectionLabel>
            <div className="mt-5 flex flex-wrap gap-3">
              {proofLinks.map((link, index) => (
                <Button key={link.label} href={link.href} label={link.label} variant={index === 0 ? "primary" : "secondary"} />
              ))}
            </div>
            <p className="mt-5 text-sm leading-6 text-neutral-500">
              Proof links connect to the source repos, demos, architecture assets, screenshots, and engineering journals used to build this case study.
            </p>
          </section>
        </section>

        <section className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 md:p-10">
          <SectionLabel>Final takeaway</SectionLabel>
          <p className="mt-4 text-2xl font-semibold leading-10 tracking-tight text-white">{project.caseStudy.finalTakeaway}</p>
        </section>
      </div>
    </main>
  );
}
