export const siteConfig = {
  name: "Ritika Gupta Portfolio",
  author: "Ritika Gupta",
  title: "Ritika Gupta | Backend / Platform / Applied AI Engineer",
  description:
    "A systems portfolio covering backend architecture, platform engineering, cloud runtime orchestration, GitOps, and governed AI workflows.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ritikaxg-portfolio.vercel.app",
  github: "https://github.com/RitikaxG",
  email: "ritikag5533@gmail.com",
  keywords: [
    "Ritika Gupta",
    "Backend Engineer",
    "Platform Engineer",
    "Applied AI Engineer",
    "AI Systems Engineer",
    "Go Backend",
    "Redis Streams",
    "Postgres",
    "Kubernetes",
    "GitOps",
    "RAG",
    "AI Agents",
    "LLM Evals",
    "Cloud Control Plane",
  ],
};

export function absoluteUrl(path = "") {
  const base = siteConfig.url.replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalizedPath}`;
}
