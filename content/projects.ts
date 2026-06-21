export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  subtitle: string;
  category: string;
  summary: string;
  proves: string[];
  tags: string[];
  links: ProjectLink[];
  workflow: string[];
  highlights: string[];
  interviewPoints: string[];
};

export const projects: Project[] = [
  {
    slug: "claimflow-ai",
    title: "ClaimFlow AI",
    eyebrow: "Flagship applied AI system",
    subtitle: "Governed agentic AI workflow for motor-insurance claims.",
    category: "Applied AI",
    summary:
      "Turns unstructured claim PDFs and emails into structured, policy-grounded, human-reviewed cases with extraction, deterministic validation, clause-level policy RAG, guarded agent tools, workflow memory, evals, and run-level observability.",
    proves: ["Applied AI systems", "RAG", "Agents", "Memory", "Human review", "Evals", "Observability"],
    tags: ["Extraction", "Validation", "Policy RAG", "Agent tools", "Memory", "Human review", "Evals", "AI gateway logs"],
    links: [
      { label: "Case Study", href: "/projects/claimflow-ai" },
      { label: "GitHub", href: "https://github.com/RitikaxG/claimflow_ai" },
    ],
    workflow: ["Claim intake", "Extraction", "Validation", "Policy RAG", "Workflow memory", "Agent action", "Human review", "Trace and eval"],
    highlights: [
      "Connects extraction, validation, RAG, agent tools, memory, review, evals, and observability into one workflow.",
      "Uses policy-grounded retrieval instead of unsupported claim decisions.",
      "Separates AI assistance from final approval through human review.",
    ],
    interviewPoints: [
      "Why high-stakes AI workflows need deterministic gates around LLM steps.",
      "How RAG, memory, and agent actions differ in responsibility.",
      "How evals and traces prove reliability instead of relying only on demos.",
    ],
  },
  {
    slug: "runstate",
    title: "RunState",
    eyebrow: "Backend and GitOps platform system",
    subtitle: "Production-style uptime monitoring platform with Go, Redis Streams, workers, Postgres, Docker, Kubernetes, and GitOps.",
    category: "Backend / Platform",
    summary:
      "Monitors websites, records uptime and response-time history, detects status transitions, tracks incidents, persists notification logs, and exposes user/admin dashboards.",
    proves: ["Go backend", "Redis Streams", "Workers", "Postgres", "Incident workflows", "GitOps", "Kubernetes"],
    tags: ["Go", "Redis Streams", "Postgres", "Workers", "Incidents", "Prometheus", "Docker", "Kubernetes", "ArgoCD"],
    links: [
      { label: "Case Study", href: "/projects/runstate" },
      { label: "GitHub", href: "https://github.com/RitikaxG/runState" },
      { label: "GitOps Repo", href: "https://github.com/RitikaxG/runstate-gitops" },
    ],
    workflow: ["API server", "Postgres", "Monitoring pusher", "Redis stream", "Monitoring worker", "Status-change stream", "Notification worker", "Metrics and GitOps"],
    highlights: [
      "Models monitoring as a background processing system rather than simple CRUD.",
      "Uses Redis Streams to separate pusher, worker, incident, and notification responsibilities.",
      "Connects local Docker development with Kubernetes and GitOps deployment proof.",
    ],
    interviewPoints: [
      "How worker pipelines reduce coupling in monitoring systems.",
      "How incidents differ from raw check history.",
      "How GitOps turns deployment state into reviewable infrastructure code.",
    ],
  },
  {
    slug: "spinup",
    title: "SpinUp",
    eyebrow: "Cloud workspace control plane",
    subtitle: "Cloud workspace control plane for browser-based developer environments.",
    category: "Cloud Platform",
    summary:
      "Turns a browser project creation request into an EC2-backed code-server workspace using lifecycle state, Redis locks, ASG allocation, VM agent orchestration, Docker runtime boot, S3 persistence, and frontend runtime visibility.",
    proves: ["Cloud control planes", "AWS EC2", "ASG", "Redis locks", "Docker", "code-server", "S3 persistence"],
    tags: ["Next.js", "AWS EC2", "ASG", "Redis locks", "VM agent", "Docker", "code-server", "S3", "Lifecycle state"],
    links: [
      { label: "Case Study", href: "/projects/spinup" },
      { label: "GitHub", href: "https://github.com/RitikaxG/SpinUp" },
    ],
    workflow: ["User creates project", "Next.js control plane", "Postgres state", "Redis locks", "EC2 ASG allocation", "VM agent health", "Docker boot", "S3 restore", "code-server workspace"],
    highlights: [
      "Separates control-plane state from runtime workspace execution.",
      "Uses lifecycle states to make provisioning visible and debuggable.",
      "Coordinates VM capacity, container boot, and S3-backed persistence.",
    ],
    interviewPoints: [
      "Why workspace provisioning needs lifecycle state, locks, and cleanup paths.",
      "How control-plane and runtime-plane responsibilities differ.",
      "How to make infrastructure progress visible in frontend UX.",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
