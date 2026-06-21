export type ProofLink = { label: string; href: string };
export type ProofImage = {
  title: string;
  description: string;
  src: string;
  href: string;
  kind: "architecture" | "workflow" | "ui" | "ops";
};
export type ProjectProofAssets = { links: ProofLink[]; images: ProofImage[] };

const gh = (repo: string, path: string) => `https://raw.githubusercontent.com/RitikaxG/${repo}/main/${path}`;

export const journalLinks = {
  claimflowAi: "https://watery-rabbit-fee.notion.site/ClaimFlow-AI-35311032897080e79074daf5a788b50d",
  runstateDevops: "https://watery-rabbit-fee.notion.site/RunState-Devops-30b110328970805c8484c438e9c8a0a7",
  runstateBackend: "https://watery-rabbit-fee.notion.site/RunState-Backend-in-Go-2d2110328970804f8cb2c59f1cc7e2cb",
  learnDevops: "https://watery-rabbit-fee.notion.site/Learn-Devops-21911032897080a78074fca802831dd1?source=copy_link",
};

export const projectProofAssets: Record<string, ProjectProofAssets> = {
  "claimflow-ai": {
    links: [
      { label: "GitHub repo", href: "https://github.com/RitikaxG/claimflow_ai" },
      { label: "Live product", href: "https://claimflow.ritikaxg.co.in" },
      { label: "Agentic workflow demo", href: "https://x.com/RitikaxG/status/2061398296137199908?s=20" },
      { label: "Memory layer demo", href: "https://x.com/RitikaxG/status/2065037735145205775?s=20" },
      { label: "Engineering journal", href: journalLinks.claimflowAi },
    ],
    images: [
      { title: "End-to-end architecture", description: "Extraction, validation, RAG, memory, guarded agent action, human review, traces, and evals as one workflow.", src: gh("claimflow_ai", "docs/images/claimflow-ai-workflow.png"), href: "https://github.com/RitikaxG/claimflow_ai/blob/main/docs/images/claimflow-ai-workflow.png", kind: "architecture" },
      { title: "Claim intake", description: "The reviewer starts from a claim source and creates a durable extraction run.", src: gh("claimflow_ai", "docs/images/01-upload-claim.png"), href: "https://github.com/RitikaxG/claimflow_ai/blob/main/docs/images/01-upload-claim.png", kind: "workflow" },
      { title: "Policy RAG evidence", description: "Coverage reasoning is grounded in retrieved policy clauses and citation support.", src: gh("claimflow_ai", "docs/images/05-retrieved-policy-clause.png"), href: "https://github.com/RitikaxG/claimflow_ai/blob/main/docs/images/05-retrieved-policy-clause.png", kind: "workflow" },
      { title: "Workflow memory", description: "Memory provides safe workflow guidance without copying old claim facts.", src: gh("claimflow_ai", "docs/images/06-retrieve-guidance-memory.png"), href: "https://github.com/RitikaxG/claimflow_ai/blob/main/docs/images/06-retrieve-guidance-memory.png", kind: "workflow" },
      { title: "Guarded tool call", description: "The model proposes one bounded action while backend guardrails control execution.", src: gh("claimflow_ai", "docs/images/08-agent-step-does-tool-call.png"), href: "https://github.com/RitikaxG/claimflow_ai/blob/main/docs/images/08-agent-step-does-tool-call.png", kind: "workflow" },
      { title: "Run trace dashboard", description: "The trace reconstructs the claim from intake through review and outcome.", src: gh("claimflow_ai", "docs/images/16-trace-dashboard-shows-workflow.png"), href: "https://github.com/RitikaxG/claimflow_ai/blob/main/docs/images/16-trace-dashboard-shows-workflow.png", kind: "ui" },
    ],
  },
  runstate: {
    links: [
      { label: "GitHub repo", href: "https://github.com/RitikaxG/runState" },
      { label: "GitOps repo", href: "https://github.com/RitikaxG/runstate-gitops" },
      { label: "Demo video", href: "https://x.com/RitikaxG/status/2038948466790174967?s=20" },
      { label: "Backend journal", href: journalLinks.runstateBackend },
      { label: "DevOps journal", href: journalLinks.runstateDevops },
    ],
    images: [
      { title: "Monitoring stream", description: "How website checks move through the Redis-backed monitoring pipeline.", src: gh("runState", "docs/architecture/monitoring_stream.png"), href: "https://github.com/RitikaxG/runState/blob/main/docs/architecture/monitoring_stream.png", kind: "architecture" },
      { title: "Status-change stream", description: "How up/down transitions become incident workflow events.", src: gh("runState", "docs/architecture/status_change_stream.png"), href: "https://github.com/RitikaxG/runState/blob/main/docs/architecture/status_change_stream.png", kind: "architecture" },
      { title: "Alerting pipeline", description: "The notification path and why notification logs are product state.", src: gh("runState", "docs/architecture/alerting_system.png"), href: "https://github.com/RitikaxG/runState/blob/main/docs/architecture/alerting_system.png", kind: "architecture" },
      { title: "User dashboard", description: "Owned websites, current status, response time, and checks.", src: gh("runState", "docs/frontend/user-dashboard.png"), href: "https://github.com/RitikaxG/runState/blob/main/docs/frontend/user-dashboard.png", kind: "ui" },
      { title: "Website status", description: "Per-website status, response-time history, incidents, and notifications.", src: gh("runState", "docs/frontend/website-status-overview.png"), href: "https://github.com/RitikaxG/runState/blob/main/docs/frontend/website-status-overview.png", kind: "ui" },
      { title: "Admin dashboard", description: "Global monitoring visibility across users and websites.", src: gh("runState", "docs/frontend/admin-dashboard.png"), href: "https://github.com/RitikaxG/runState/blob/main/docs/frontend/admin-dashboard.png", kind: "ui" },
    ],
  },
  spinup: {
    links: [
      { label: "GitHub repo", href: "https://github.com/RitikaxG/SpinUp" },
      { label: "Demo video", href: "https://x.com/RitikaxG/status/2049480224946164164?s=20" },
      { label: "DevOps journal", href: journalLinks.learnDevops },
    ],
    images: [
      { title: "System architecture", description: "Control plane, lifecycle state, Redis locks, EC2 ASG, VM agent, Docker runtime, code-server, and S3 persistence.", src: gh("SpinUp", "docs/images/system_architecture.png"), href: "https://github.com/RitikaxG/SpinUp/blob/main/docs/images/system_architecture.png", kind: "architecture" },
      { title: "Landing page", description: "Browser entry point where a user creates a project and starts provisioning.", src: gh("SpinUp", "images/frontend/landing_page.png"), href: "https://github.com/RitikaxG/SpinUp/blob/main/images/frontend/landing_page.png", kind: "ui" },
      { title: "Projects dashboard", description: "Project lifecycle state, assigned runtime, instance metadata, and actions.", src: gh("SpinUp", "images/frontend/projects.png"), href: "https://github.com/RitikaxG/SpinUp/blob/main/images/frontend/projects.png", kind: "ui" },
      { title: "Booting state", description: "VM allocation and container boot progress are visible to the user.", src: gh("SpinUp", "images/frontend/project-1.png"), href: "https://github.com/RitikaxG/SpinUp/blob/main/images/frontend/project-1.png", kind: "ui" },
      { title: "Ready workspace", description: "Open IDE, lifecycle state, instance ID, public IP, container name, heartbeat, and preview.", src: gh("SpinUp", "images/frontend/project_2.png"), href: "https://github.com/RitikaxG/SpinUp/blob/main/images/frontend/project_2.png", kind: "ui" },
    ],
  },
};
