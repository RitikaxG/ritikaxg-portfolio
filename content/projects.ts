export type ProjectLink = {
  label: string;
  href: string;
};

export type CaseStudySection = {
  title: string;
  body: string;
  points: string[];
};

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  subtitle: string;
  category: string;
  role: string;
  summary: string;
  proves: string[];
  tags: string[];
  links: ProjectLink[];
  workflow: string[];
  highlights: string[];
  interviewPoints: string[];
  caseStudy: {
    problem: string;
    solution: string;
    architecture: string;
    architectureFlow: string[];
    sections: CaseStudySection[];
    dataModel: string[];
    reliabilityDecisions: string[];
    nonTrivial: string[];
    proofLinks: ProjectLink[];
    nextImprovements: string[];
    finalTakeaway: string;
  };
};

export const projects: Project[] = [
  {
    slug: "claimflow-ai",
    title: "ClaimFlow AI",
    eyebrow: "Flagship applied AI system",
    subtitle: "Governed agentic AI workflow for motor-insurance claims.",
    category: "Applied AI",
    role: "Full-stack AI systems builder",
    summary:
      "ClaimFlow AI turns unstructured claim PDFs and emails into structured, policy-grounded, human-reviewed cases. It combines extraction, deterministic validation, clause-level policy RAG, guarded agent tools, workflow memory, evals, and run-level observability so the AI can assist without owning the final claim decision.",
    proves: ["Applied AI systems", "RAG", "Agents", "Memory", "Human review", "Evals", "Observability"],
    tags: [
      "Applied AI",
      "Agentic AI",
      "RAG",
      "Human-in-the-loop",
      "AI Observability",
      "LLM Evaluation",
      "LangChain",
      "Gemini",
      "Next.js",
      "TypeScript",
      "Postgres",
      "pgvector",
      "Docker",
    ],
    links: [
      { label: "Case Study", href: "/projects/claimflow-ai" },
      { label: "GitHub", href: "https://github.com/RitikaxG/claimflow_ai" },
      { label: "Live Product", href: "https://claimflow.ritikaxg.co.in" },
    ],
    workflow: [
      "Reviewer submits a claim PDF or email",
      "System creates a durable extraction run",
      "AI extracts schema-shaped claim JSON",
      "Deterministic validation checks missing fields, evidence, conflicts, warnings, and confidence",
      "Policy RAG retrieves claim-aware clause evidence",
      "Workflow memory retrieves safe prior guidance",
      "The guarded agent proposes exactly one next action",
      "Backend guardrails allow or block execution",
      "Human reviewer approves, edits, rejects, or requests more information",
      "Trace and eval dashboards make the run inspectable",
    ],
    highlights: [
      "Connects extraction, validation, RAG, agent tools, memory, review, evals, and observability into one workflow.",
      "Uses policy-grounded retrieval instead of unsupported claim decisions.",
      "Separates AI assistance from final approval through human review.",
    ],
    interviewPoints: [
      "I built ClaimFlow AI as a governed AI workflow, not a chatbot.",
      "AI output is never trusted immediately; deterministic validation gates downstream workflow state.",
      "RAG retrieves current policy evidence while memory retrieves historical workflow guidance.",
      "The agent proposes one registered tool call, but guardrails and backend tools control execution.",
      "Trace dashboards explain one claim; eval dashboards test reliability across many cases.",
    ],
    caseStudy: {
      problem:
        "Claim processing is risky to automate directly because claims are incomplete, policy-dependent, and require accountability. A basic LLM can extract text or generate answers, but it cannot safely own missing-field validation, policy evidence, workflow routing, or final decisions.",
      solution:
        "ClaimFlow AI turns the claim into a stateful workflow. It extracts structured data, validates missing information, retrieves policy clauses, proposes one safe next action through a guarded agent, surfaces safe memory guidance, and keeps the final decision in human review.",
      architecture:
        "The system is built as a monorepo with a Next.js product UI and modular packages for extraction, validation, RAG, agent workflow, memory, database, gateway, shared schemas, and evals. Postgres stores claim state, policy chunks, review tasks, memory records, AI call logs, and eval results. pgvector powers policy retrieval.",
      architectureFlow: [
        "Claim intake",
        "Extraction run",
        "Deterministic validation",
        "Policy RAG",
        "Workflow memory",
        "Guarded agent action",
        "Human review",
        "Trace and eval",
      ],
      sections: [
        {
          title: "Why this exists",
          body:
            "The project exists to prove that applied AI can be designed as a reliable workflow rather than a set of disconnected demos. It answers how extraction, validation, RAG, an agent, memory, human review, evaluation, observability, and governance work together around one claim.",
          points: [
            "Intake creates durable source data.",
            "Validation creates the workflow boundary.",
            "RAG supplies current policy evidence.",
            "Memory supplies safe historical workflow guidance.",
            "Human review owns approval or rejection.",
          ],
        },
        {
          title: "RAG architecture",
          body:
            "Coverage reasoning is grounded in policy evidence. The system loads a synthetic policy corpus, parses it into clause-level chunks, embeds them, stores them in Postgres with pgvector, retrieves relevant clauses, verifies citation support, and persists the coverage question.",
          points: [
            "Clause-level chunks make policy references auditable.",
            "Claim-aware query planning expands generic questions with claim context.",
            "Weak retrieval or unsupported citations force the answer back to review.",
          ],
        },
        {
          title: "Agent architecture",
          body:
            "The agent is not an open-ended autonomous loop. It is a controlled single-step tool-calling workflow. Backend state is loaded first, deterministic routing handles obvious states, and the model can propose exactly one registered tool call.",
          points: [
            "The model proposes; guardrails decide; backend tools execute.",
            "Unsafe actions such as approve, reject, send email, delete, or bypass review are blocked.",
            "Every proposal, guardrail decision, and execution result is logged.",
          ],
        },
        {
          title: "Memory architecture",
          body:
            "Memory stores reusable workflow lessons from trusted outcomes. It can guide caution or routing, but it is not claim evidence and cannot copy old claim facts into the current claim.",
          points: [
            "WorkflowMemory stores reusable memory cards.",
            "MemoryHit records why memory matched a run.",
            "MemoryUpdate tracks creation, strengthening, weakening, retirement, and supersession.",
          ],
        },
        {
          title: "Evaluation and observability",
          body:
            "The AI gateway records model-backed calls with trace IDs, model metadata, prompt/schema versions, latency, token usage, cost, status, and failure classes. Evals test behavior across extraction, validation, review, RAG, agent guardrails, memory, and gateway observability.",
          points: [
            "Trace dashboards reconstruct one claim from intake to outcome.",
            "Eval dashboards test controlled success, failure, refusal, guardrail, and observability scenarios.",
            "Gateway logs turn model calls into auditable workflow events.",
          ],
        },
      ],
      dataModel: [
        "Document preserves the original uploaded claim source.",
        "ExtractionRun stores run status, model metadata, raw output, extracted JSON, validation JSON, and related workflow records.",
        "ExtractionEvent records chronological audit history for trace reconstruction.",
        "ReviewTask and ReviewDecision represent human review status and final reviewer decisions.",
        "PolicyDocument and PolicyChunk store the RAG corpus, clause IDs, embeddings, and citation metadata.",
        "AgentActionLog stores proposed, blocked, executed, or failed agent actions.",
        "WorkflowMemory, MemoryHit, and MemoryUpdate store memory cards, retrieval audit, and lifecycle changes.",
        "AiCallLog, EvalRun, and EvalCaseResult store model governance and evaluation evidence.",
      ],
      reliabilityDecisions: [
        "The AI does not own final claim decisions.",
        "Validation is deterministic and happens before downstream trust.",
        "RAG uses clause-level chunks and citation verification.",
        "Agent workflow is one-step and guarded.",
        "Tools are registered and backend-owned.",
        "Memory is workflow context, not claim evidence.",
        "Memory has lifecycle controls.",
        "Gateway logs every model-backed call.",
        "Evals are part of the product proof.",
      ],
      nonTrivial: [
        "Durable workflow state instead of temporary chat output.",
        "Policy-grounded RAG with refusal behavior.",
        "Registered backend tools and guardrails.",
        "Human-owned decisions.",
        "Workflow memory with safe-use rules.",
        "Per-run trace dashboard and evaluation dashboard.",
        "Connected safety boundaries across one claim lifecycle.",
      ],
      proofLinks: [
        { label: "GitHub Repo", href: "https://github.com/RitikaxG/claimflow_ai" },
        { label: "Live Product", href: "https://claimflow.ritikaxg.co.in" },
        { label: "Architecture image", href: "#" },
        { label: "Engineering journal", href: "#" },
        { label: "Eval dashboard screenshots", href: "#" },
      ],
      nextImprovements: [
        "Add organization-grade authentication and roles.",
        "Add richer document ingestion and policy versioning.",
        "Expand hybrid retrieval, reranking, and corpus coverage.",
        "Add deeper reviewer analytics and production alerting.",
      ],
      finalTakeaway:
        "ClaimFlow AI proves that LLMs can assist high-stakes workflows only when surrounded by deterministic validation, policy evidence, bounded tools, memory safety, human review, evaluations, and observability.",
    },
  },
  {
    slug: "runstate",
    title: "RunState",
    eyebrow: "Backend and GitOps platform system",
    subtitle: "Production-style uptime monitoring platform with Go, Redis Streams, workers, Postgres, Docker, Kubernetes, and GitOps.",
    category: "Backend / Platform",
    role: "Backend + platform systems builder",
    summary:
      "RunState monitors websites at regular intervals, records uptime and response-time history, detects status transitions, tracks incidents, persists notification logs, and exposes user/admin dashboards. The backend is built in Go with authentication, RBAC, Postgres persistence, Redis Streams, and a reusable worker engine. The deployment is managed through a separate GitOps repo with Kubernetes, ArgoCD, External Secrets, ingress/TLS, Prometheus, HPA, and image automation.",
    proves: ["Go backend", "Redis Streams", "Workers", "Postgres", "Incident workflows", "GitOps", "Kubernetes"],
    tags: [
      "Go",
      "Backend",
      "Platform Engineering",
      "Redis Streams",
      "Postgres",
      "Worker Architecture",
      "Monitoring",
      "Incident Management",
      "JWT Auth",
      "RBAC",
      "Docker",
      "Kubernetes",
      "ArgoCD",
      "Prometheus",
      "HPA",
    ],
    links: [
      { label: "Case Study", href: "/projects/runstate" },
      { label: "GitHub", href: "https://github.com/RitikaxG/runState" },
      { label: "GitOps Repo", href: "https://github.com/RitikaxG/runstate-gitops" },
    ],
    workflow: [
      "User signs up or signs in",
      "User adds a website URL to monitor",
      "API stores the website under that user",
      "Monitoring pusher publishes check jobs into Redis Streams",
      "Monitoring worker performs HTTP checks and records ticks",
      "Status transitions emit status-change events",
      "Status-change worker creates or resolves incidents",
      "Notification worker records notification attempts",
      "User and admin dashboards display operational state",
    ],
    highlights: [
      "Models monitoring as a background processing system rather than simple CRUD.",
      "Uses Redis Streams to separate pusher, worker, incident, and notification responsibilities.",
      "Connects local Docker development with Kubernetes and GitOps deployment proof.",
    ],
    interviewPoints: [
      "Website monitoring is not CRUD; it needs continuous checks, asynchronous workers, incidents, and notification history.",
      "The backend is split into API server, monitoring pusher, monitoring worker, status-change worker, and notification worker.",
      "Redis Streams coordinate background work through durable messages and consumer groups.",
      "Incidents are modeled separately from current website status.",
      "The GitOps repo represents desired Kubernetes state and ArgoCD reconciles it.",
    ],
    caseStudy: {
      problem:
        "Website monitoring is not just storing URLs. A real monitoring platform needs periodic checks, background workers, response-time history, incident lifecycle tracking, notification logging, authentication, admin visibility, metrics, and production deployment.",
      solution:
        "RunState splits monitoring into a backend API and event-driven worker pipeline. The API handles users, auth, websites, incidents, notification logs, and dashboards. Redis Streams coordinate background work between the monitoring pusher, monitoring worker, status-change worker, and notification worker. Postgres stores durable operational state.",
      architecture:
        "The product has five runtime services: API server, monitoring pusher, monitoring worker, status-change worker, and notification worker. Docker Compose runs the local stack, while the GitOps repo declares Kubernetes Deployments, Services, Ingress, External Secrets, HPA, monitoring resources, and ArgoCD applications.",
      architectureFlow: [
        "API Server",
        "Postgres",
        "Monitoring Pusher",
        "Redis Monitoring Stream",
        "Monitoring Worker",
        "Status Change Stream",
        "Status Change Worker",
        "Notification Stream",
        "Notification Worker",
      ],
      sections: [
        {
          title: "Why monitoring is not CRUD",
          body:
            "A basic app can store website URLs, but a monitoring platform must continuously schedule checks, process them asynchronously, detect transitions, persist operational history, and make incidents and notifications visible.",
          points: [
            "Checks cannot run inside request/response paths.",
            "Status transitions need incident lifecycle state.",
            "Notifications need audit logs rather than invisible side effects.",
          ],
        },
        {
          title: "Runtime services",
          body:
            "RunState is split into separate runtime services so each process has one responsibility and can be deployed, restarted, or scaled independently.",
          points: [
            "API server handles auth, websites, incidents, notifications, health checks, and metrics.",
            "Monitoring pusher schedules website checks.",
            "Monitoring worker performs HTTP checks and records ticks.",
            "Status-change worker manages incident transitions.",
            "Notification worker handles notification delivery/log persistence.",
          ],
        },
        {
          title: "Redis Streams pipeline",
          body:
            "Redis Streams decouple the monitoring workflow. The pusher publishes check jobs, workers consume through consumer groups, and downstream workers react to status-change and notification events.",
          points: [
            "Monitoring Stream carries website-check jobs.",
            "Status-change Stream carries transition events.",
            "Notification Stream carries alert events.",
          ],
        },
        {
          title: "Worker engine",
          body:
            "The common worker engine abstracts long-running Redis Stream consumption and provides consistent runtime behavior across workers.",
          points: [
            "Consumer group setup and blocking stream reads.",
            "Concurrent message processing and in-flight tracking.",
            "ACK handling, panic recovery, graceful shutdown, heartbeat support, and reclaim loops.",
          ],
        },
        {
          title: "GitOps deployment",
          body:
            "The app repo builds and publishes the product image. The runstate-gitops repo declares the Kubernetes state. ArgoCD reconciles the cluster to the GitOps repo and image automation can update manifests when new tags are published.",
          points: [
            "Separate application and deployment state.",
            "External Secrets pulls values from AWS Secrets Manager.",
            "Ingress/TLS, prometheus ServiceMonitor, HPA, and image automation prove platform thinking.",
          ],
        },
      ],
      dataModel: [
        "Users store email, password hash, role, and timestamps for auth/RBAC.",
        "Refresh Tokens store hashes, expiration, and revocation state.",
        "Region makes monitoring extensible beyond one worker location.",
        "Website stores monitored URLs, owner, current status, and time added.",
        "Website Ticks store check status, response time, region, and timestamp.",
        "Incidents store downtime periods with start, resolution, status, and active state.",
        "Notification Logs store channel, recipient, previous/current status, delivery status, provider message ID, and sent time.",
      ],
      reliabilityDecisions: [
        "Rebuilt the backend in Go to deepen backend and systems understanding.",
        "Split API, pusher, monitoring worker, status-change worker, and notification worker into separate processes.",
        "Used Redis Streams for pipeline coordination instead of request-path checks.",
        "Stored durable operational history in Postgres.",
        "Modeled incidents separately from current website status.",
        "Persisted notification logs.",
        "Built a common worker engine.",
        "Separated app repo from GitOps repo.",
        "Used External Secrets instead of checked-in secrets.",
        "Added Prometheus metrics and autoscaling.",
      ],
      nonTrivial: [
        "Asynchronous background workers.",
        "Redis Streams event pipeline with consumer groups.",
        "Status transition detection.",
        "Incident lifecycle modeling.",
        "Notification delivery/logging.",
        "Dockerized multi-service local setup.",
        "CI image publishing.",
        "Kubernetes GitOps deployment with secrets, ingress, TLS, monitoring, and HPA.",
      ],
      proofLinks: [
        { label: "GitHub Repo", href: "https://github.com/RitikaxG/runState" },
        { label: "GitOps Repo", href: "https://github.com/RitikaxG/runstate-gitops" },
        { label: "Monitoring pipeline diagram", href: "#" },
        { label: "GitOps proof", href: "#" },
        { label: "Engineering journal", href: "#" },
      ],
      nextImprovements: [
        "Add multi-region monitoring.",
        "Add stronger retry/backoff and dead-letter handling for failed stream messages.",
        "Add richer notification preferences and public status pages.",
        "Add better SLO dashboards and integration tests around worker pipelines.",
        "Add production-grade alerting around the monitoring system itself.",
      ],
      finalTakeaway:
        "RunState proves backend/platform depth by connecting API design, auth, workers, Redis Streams, Postgres modeling, incident workflows, notification logs, metrics, Docker, CI, Kubernetes, and GitOps.",
    },
  },
  {
    slug: "spinup",
    title: "SpinUp",
    eyebrow: "Cloud workspace control plane",
    subtitle: "Cloud workspace control plane for browser-based developer environments.",
    category: "Cloud Platform",
    role: "Full-stack cloud platform builder",
    summary:
      "SpinUp turns a browser project creation request into a real EC2-backed code-server workspace. The backend control plane creates project metadata, tracks lifecycle state in Postgres, uses Redis for locks and runtime mirrors, allocates or reuses EC2 capacity from an Auto Scaling Group, waits for VM agent and container readiness, restores project files from S3, and exposes the workspace through a browser IDE.",
    proves: ["Cloud control planes", "AWS EC2", "ASG", "Redis locks", "Docker", "code-server", "S3 persistence"],
    tags: [
      "Developer Platform",
      "Cloud Workspaces",
      "Control Plane",
      "AWS EC2",
      "Auto Scaling Group",
      "S3",
      "Docker",
      "code-server",
      "VM Agent",
      "Next.js",
      "TypeScript",
      "Postgres",
      "Redis",
      "Distributed Locks",
      "Runtime Lifecycle",
      "Clerk Auth",
    ],
    links: [
      { label: "Case Study", href: "/projects/spinup" },
      { label: "GitHub", href: "https://github.com/RitikaxG/SpinUp" },
    ],
    workflow: [
      "User signs in with Clerk",
      "User enters a project name and framework",
      "Backend creates or reuses the project row",
      "Control plane acquires create/runtime locks",
      "Project moves to ALLOCATING_VM",
      "EC2/ASG layer allocates or reuses an idle VM",
      "Backend waits for public IP and VM agent health",
      "Project moves to BOOTING_CONTAINER",
      "VM agent starts a deterministic project container",
      "vm-base-config restores or creates project files and starts code-server",
      "Backend waits for readiness and marks project READY",
      "UI shows Open IDE and workspace preview",
    ],
    highlights: [
      "Separates control-plane state from runtime workspace execution.",
      "Uses lifecycle states to make provisioning visible and debuggable.",
      "Coordinates VM capacity, container boot, and S3-backed persistence.",
    ],
    interviewPoints: [
      "SpinUp is control-plane-first; the UI is simple because the hard problem is runtime orchestration.",
      "Postgres stores durable lifecycle state while Redis handles locks and runtime mirrors.",
      "The runtime allocation path reuses idle EC2 instances from an ASG pool before scaling.",
      "The VM agent is the boundary between the control plane and Docker runtime.",
      "The frontend shows truthful runtime state: instance ID, public IP, container name, heartbeat, timestamps, and lifecycle events.",
    ],
    caseStudy: {
      problem:
        "Cloud IDE products look simple from the frontend, but the real challenge is runtime orchestration. The system must allocate compute, boot containers, restore files, expose a browser IDE, track progress, handle failure, and clean up infrastructure safely.",
      solution:
        "SpinUp models workspace creation as a control-plane workflow. A user creates a project, and the backend creates lifecycle state, acquires Redis locks, allocates or reuses an EC2 VM from an Auto Scaling Group, waits for VM agent health, starts a project-specific code-server container, restores files from S3, waits for readiness, and marks the workspace ready.",
      architecture:
        "SpinUp has a Next.js control plane backed by Postgres and Redis. Postgres stores users, projects, project rooms, lifecycle status, runtime metadata, and project events. Redis handles distributed locks and runtime assignment mirrors. AWS EC2 ASG provides workspace machines. A VM agent on each instance controls Docker containers. vm-base-config turns code-server into a project-aware workspace image with S3 restore/sync behavior.",
      architectureFlow: [
        "User creates project",
        "Next.js control plane",
        "Postgres lifecycle state",
        "Redis locks and runtime mirror",
        "EC2 ASG allocation",
        "VM agent health",
        "Docker container boot",
        "S3 restore and sync",
        "code-server workspace",
      ],
      sections: [
        {
          title: "Control plane vs runtime plane",
          body:
            "The control plane decides what should happen. The runtime plane is where the workspace actually runs. This separation keeps product orchestration, database state, locks, cloud allocation, and Docker runtime control from collapsing into one blob.",
          points: [
            "Control plane: Next.js API routes, project orchestration, Postgres state, Redis locks, AWS control logic, VM agent client.",
            "Runtime plane: EC2 ASG instances, VM agent, Docker, project container, code-server, S3-backed restore/sync.",
            "Storage plane: Postgres for durable state, Redis for fast coordination, S3 for workspace files.",
          ],
        },
        {
          title: "Lifecycle state machine",
          body:
            "Workspace provisioning is represented as explicit lifecycle state so the frontend can show truthful progress and the backend can recover from long-running operations.",
          points: [
            "Primary lifecycle: CREATED ‒ ALLOCATING_VM ‒ BOOTING_CONTAINER → READY.",
            "Failure and cleanup states: FAILED, STOPPED, DELETING, DELETED.",
            "Each transition writes a ProjectEvent for audit history.",
          ],
        },
        {
          title: "EC2/ASG allocation",
          body:
            "The runtime allocation path first tries to reuse an idle EC2 instance from the Auto Scaling Group. If none is available, the ASG layer computes capacity and tries to ensure idle capacity.",
          points: [
            "Idle VM allocation avoids cold launches where possible.",
            "ASG capacity planning makes the system feel like a small runtime platform.",
            "Unhealthy or busy instances are tracked separately from available capacity.",
          ],
        },
        {
          title: "VM agent and Docker boot",
          body:
            "The backend does not directly run Docker commands on the VM. It waits for VM agent health and asks the agent to start, stop, or check containers.",
          points: [
            "VM agent health separates instance allocation from container runtime readiness.",
            "Containers use deterministic names like spinup-<projectId>.",
            "Backend waits for workspace HTTP readiness before marking the project ready.",
          ],
        },
        {
          title: "S3 persistence and workspace image",
          body:
            "vm-base-config turns a generic code-server image into a project-aware workspace image. It restores files from S3 or creates a project from a base template, installs dependencies, starts sync, and then starts code-server.",
          points: [
            "Project files survive container and VM restarts.",
            "The workspace is not a blank remote IDE.",
            "S3 restore/sync makes the runtime durable enough for demos and future platform extension.",
          ],
        },
      ],
      dataModel: [
        "User stores the Clerk-authenticated user mapped into the product database.",
        "Project stores name, normalizedName, type, ownerId, lifecycle status, assignedInstanceId, containerName, publicIp, boot timestamps, heartbeat, cleanup timestamps, and last event data.",
        "ProjectRoom connects users and projects and tracks VM state.",
        "ProjectEvent stores lifecycle history such as PROJECT_CREATED, ALLLOCATION_STARTED, INSTANCE_ASSIGNED, CONTAINER_BOOT_STARTED, CONTAINER_BOOT_SUCCEEDED, HEARTBEAT_OK, DELETE_STARTED, and DELETE_COMPLETED.",
      ],
      reliabilityDecisions: [
        "Built SpinUp as a control-plane-first product.",
        "Used lifecycle state in Postgres.",
        "Used Redis for locks and runtime mirrors.",
        "Used EC2 ASG instead of one-off instance launches.",
        "Separated the control plane from the VM agent.",
        "Used S3 for project persistence.",
        "Kept V1 to one active runtime per user for cost and correctness.",
        "Made runtime state visible in the UI.",
      ],
      nonTrivial: [
        "Real cloud runtime allocation.",
        "EC2 Auto Scaling Group integration.",
        "Idle VM reuse.",
        "VM agent integration.",
        "Docker/code-server boot.",
        "S3 project restore/sync.",
        "Create/resume/delete/retry flows.",
        "Failure states and frontend lifecycle polling.",
      ],
      proofLinks: [
        { label: "GitHub Repo", href: "https://github.com/RitikaxG/SpinUp" },
        { label: "System architecture image", href: "#" },
        { label: "Project lifecycle screenshots", href: "#" },
        { label: "Workspace ready screenshot", href: "#" },
        { label: "VM startup flow", href: "#" },
      ],
      nextImprovements: [
        "Add HTTPS routing in front of workspaces.",
        "Add per-user subdomain routing instead of raw public IPs.",
        "Improve workspace app preview on port 3000.",
        "Add stronger worker reconciliation and richer event timeline UI.",
        "Add team collaboration, permissions, production-grade secrets, and observability.",
      ],
      finalTakeaway:
        "SpinUp proves cloud platform thinking by turning a simple browser action into a lifecycle-driven infrastructure workflow with allocation, locking, runtime boot, persistence, cleanup, and UI-visible state.",
    },
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
