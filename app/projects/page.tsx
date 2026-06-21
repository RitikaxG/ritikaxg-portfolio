import { PageShell } from "@/components/layout/PageShell";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/content/projects";

export default function ProjectsPage() {
  return (
    <PageShell
      eyebrow="Projects"
      title="Systems, not isolated demos"
      copy="Each project focuses on a different engineering layer: AI workflow reliability, backend/platform architecture, and cloud runtime orchestration."
    >
      <div className="grid gap-5">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>

      <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="border-b border-white/10 bg-white/[0.04] text-slate-300">
            <tr>
              <th className="px-5 py-4 font-medium">Project</th>
              <th className="px-5 py-4 font-medium">Category</th>
              <th className="px-5 py-4 font-medium">Core system</th>
              <th className="px-5 py-4 font-medium">Main proof</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 text-slate-300">
            <tr>
              <td className="px-5 py-4 font-semibold text-white">ClaimFlow AI</td>
              <td className="px-5 py-4">Applied AI</td>
              <td className="px-5 py-4">Governed claim workflow</td>
              <td className="px-5 py-4">RAG, agents, memory, evals, observability</td>
            </tr>
            <tr>
              <td className="px-5 py-4 font-semibold text-white">RunState</td>
              <td className="px-5 py-4">Backend / Platform</td>
              <td className="px-5 py-4">Uptime monitoring platform</td>
              <td className="px-5 py-4">Go, workers, Redis Streams, incidents, GitOps</td>
            </tr>
            <tr>
              <td className="px-5 py-4 font-semibold text-white">SpinUp</td>
              <td className="px-5 py-4">Cloud Platform</td>
              <td className="px-5 py-4">Browser IDE control plane</td>
              <td className="px-5 py-4">EC2 ASG, VM agent, Docker, S3, lifecycle state</td>
            </tr>
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}
