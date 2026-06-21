import type { ProofImage } from "@/content/proofAssets";

const kindLabels: Record<ProofImage["kind"], string> = {
  architecture: "Architecture",
  workflow: "Workflow proof",
  ui: "Product UI",
  ops: "Ops proof",
};

type ProofGalleryProps = {
  images: ProofImage[];
};

export function ProofGallery({ images }: ProofGalleryProps) {
  if (!images.length) {
    return null;
  }

  const [hero, ...rest] = images;

  return (
    <section className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 md:p-8">
      <p className="font-mono text-xs uppercase tracking-[0.28em] text-neutral-500">Visual proof</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">Screenshots and architecture from the source repos</h2>
      <p className="mt-4 max-w-4xl text-base leading-8 text-neutral-400">
        These assets are pulled from the project repositories so the case studies show the actual product workflow, architecture diagrams, dashboards, and runtime proof instead of placeholder cards.
      </p>

      <a href={hero.href} target="_blank" rel="noreferrer" className="mt-8 block overflow-hidden rounded-[1.5rem] border border-white/10 bg-neutral-950/70">
        <div className="border-b border-white/10 p-5">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-neutral-500">{kindLabels[hero.kind]}</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">{hero.title}</h3>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-neutral-400">{hero.description}</p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={hero.src} alt={hero.title} className="w-full bg-neutral-950 object-contain" loading="lazy" />
      </a>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {rest.map((image) => (
          <a key={image.href} href={image.href} target="_blank" rel="noreferrer" className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-neutral-950/70 transition hover:border-white/20 hover:bg-white/[0.045]">
            <div className="aspect-video overflow-hidden border-b border-white/10 bg-neutral-950">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image.src} alt={image.title} className="h-full w-full object-cover object-top opacity-90 transition group-hover:scale-[1.02] group-hover:opacity-100" loading="lazy" />
            </div>
            <div className="p-5">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500">{kindLabels[image.kind]}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{image.title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-400">{image.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
