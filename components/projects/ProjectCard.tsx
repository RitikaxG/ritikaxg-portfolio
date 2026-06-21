import type { Project } from "@/content/projects";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-xl shadow-slate-950/30 md:p-8">
      <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">
        {typeof index === "number" ? `0${index + 1} · ` : ""}
        {project.category}
      </p>
      <h3 className="mt-4 text-3xl font-semibold text-white">{project.title}</h3>
      <p className="mt-2 text-sm font-medium text-cyan-200">{project.subtitle}</p>
      <p className="mt-4 max-w-4xl text-base leading-7 text-slate-300">{project.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.proves.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        {project.links.map((link, linkIndex) => (
          <Button key={link.label} href={link.href} label={link.label} variant={linkIndex === 0 ? "primary" : "secondary"} />
        ))}
      </div>
    </article>
  );
}
