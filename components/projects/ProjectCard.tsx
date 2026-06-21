import type { Project } from "@/content/projects";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="group soft-card rounded-[2rem] p-6 transition hover:border-white/18 hover:bg-white/[0.055] md:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-neutral-500">
            {typeof index === "number" ? `0${index + 1} · ` : ""}
            {project.category}
          </p>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">{project.title}</h3>
          <p className="mt-2 text-base font-medium text-neutral-300">{project.subtitle}</p>
          <p className="mt-4 text-base leading-8 text-neutral-400">{project.summary}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.proves.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
        </div>

        <div className="flex shrink-0 flex-wrap gap-3 lg:max-w-48 lg:justify-end">
          {project.links.map((link, linkIndex) => (
            <Button key={link.label} href={link.href} label={link.label} variant={linkIndex === 0 ? "primary" : "secondary"} />
          ))}
        </div>
      </div>
    </article>
  );
}
