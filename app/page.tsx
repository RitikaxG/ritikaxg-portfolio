const projects = [
  {
    title: "ClaimFlow AI",
    category: "Applied AI workflow reliability",
    summary:
      "Governed AI workflow for claim review. Connects extraction, validation, policy retrieval, agent tools, workflow memory, human review, evals, and run-level observability.",
    proves: ["RAG", "Agents", "Memory", "Human review", "Evals", "Observability"],
  },
  {
    title: "RunState",
    category: "Backend + worker + GitOps platform system",
    summary:
      "Production-style uptime monitoring platform with Go, Redis Streams, Postgres, workers, Docker, Kubernetes, GitOps, incident tracking, notification logs, metrics, and dashboards.",
    proves: ["Go backend", "Redis Streams", "Workers", "Postgres", "Incidents", "GitOps"],
  },
  {
    title: "SpinUp",
    category: "Cloud workspace control plane",
    summary:
      "Browser workspace control plane that turns a create-project request into a runtime workspace using lifecycle state, Redis locks, VM orchestration, Docker boot, and S3 persistence.",
    proves: ["Cloud control planes", "AWS EC2", "ASG", "Redis locks", "Docker", "S3"],
  },
];

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

function Badge({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100">
      {children}
    </span>
  );
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-300">{copy}</p>
    </div>
  );
}

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
              <a href="#projects" className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">
                View Projects
              </a>
              <a href="https://github.com/RitikaxG" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/10">
                GitHub
              </a>
              <a href="#resume" className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-violet-300/40 hover:bg-white/10">
                Resume
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-cyan-950/30 backdrop-blur">
            <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">System path</p>
              {["Product Workflow", "Backend Services", "Workers / Runtime", "Infra / GitOps", "Observability / Evals"].map((item, index) => (
                <div key={item} className="mt-4 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 font-mono text-xs text-cyan-100">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Featured systems"
            title="Projects built as systems, not isolated demos"
            copy="Each project has a clear product workflow, runtime architecture, reliability decisions, and proof links."
          />
          <div className="mt-8 grid gap-5">
            {projects.map((project, index) => (
              <article key={project.title} className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-xl shadow-slate-950/30 md:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">0{index + 1} · {project.category}</p>
                <h3 className="mt-4 text-3xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 max-w-4xl text-base leading-7 text-slate-300">{project.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.proves.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="px-5 py-16 sm:px-8">
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

      <section id="journals" className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Engineering journals"
            title="Raw engineering trail behind the systems"
            copy="This section will link implementation decisions, debugging steps, architecture evolution, deployment work, and lessons learned."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {["ClaimFlow AI Engineering Journal", "RunState Go Backend Journal", "RunState DevOps/GitOps Journal", "DevOps Learning Lab"].map((journal) => (
              <div key={journal} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber-200">Raw engineering journal</p>
                <h3 className="mt-4 text-xl font-semibold text-white">{journal}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300">About</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">I use projects as proof-of-work.</h2>
          </div>
          <p className="text-base leading-8 text-slate-300">
            My learning path moved from frontend development into backend architecture, deployment, Go systems, DevOps/GitOps, cloud control planes, and applied AI workflows. Each system explores real production concerns: state, reliability, background processing, infrastructure, observability, evaluation, and human review.
          </p>
        </div>
      </section>

      <section id="resume" className="px-5 py-16 sm:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-200">Resume target</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Backend Engineer · Platform Engineer · Applied AI Engineer · AI Systems Engineer</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-200">
            Next step: add separate routes, case-study pages, proof links, screenshots, architecture images, and a downloadable resume.
          </p>
        </div>
      </section>
    </main>
  );
}
