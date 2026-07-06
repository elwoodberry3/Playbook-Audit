/**
 * build.config.ts — BUILD 003 · Playbook & Risk Audits
 * ─────────────────────────────────────────────────────────────
 * Repo: ias-build-003-playbook-audit
 * URL:  playbook-audit.elwoodberry.com
 * Sector: Legal & Compliance Services
 *
 * THE ONLY FILE EDITED FOR THIS BUILD.
 *
 * Governance (Article IX): no fabricated data. Every unknown
 * value stays as an explicit "TODO:" string — the page renders
 * TODO values in a visible warning style so they cannot ship
 * silently.
 * ─────────────────────────────────────────────────────────────
 */

import type { BuildConfig } from "./lib/types";

export const buildConfig: BuildConfig = {
  // ── Identity ─────────────────────────────────────────────
  buildNumber: "003",
  name: "Playbook & Risk Audits",
  sector: "Legal & Compliance Services",

  // Verbatim from projects.csv (primary_description) —
  // site + CSV + repo never drift.
  tagline:
    "Scans contract clauses against company playbooks, flags deviations automatically, and auto-suggests redlines in plain language.",

  // ── Status (honest, always) ──────────────────────────────
  // Upgrade path: "planned" → "preview" → "prototype" → "live"
  // as the deep-build ships. One word, push to main, auto-deploys.
  status: "planned",

  // ── What it does ─────────────────────────────────────────
  // One string per paragraph — the page renders each as its
  // own <p>. Problem / pipeline / traceability.
  whatItDoes: [
    "Legal teams review inbound contracts clause by clause against internal playbooks — slow, inconsistent, and dependent on who happens to be reading.",
    "This pipeline ingests clause-level text, runs RAG comparison against the company playbook, flags non-standard deviations automatically, and generates plain-language redline suggestions at intake.",
    "Every flag cites the playbook passage it deviates from, so counsel reviews reasoning, not raw contracts.",
  ],

  // ── Stack ────────────────────────────────────────────────
  stack: ["n8n", "OpenAI API", "Next.js", "Vercel"],

  // ── Architecture ─────────────────────────────────────────
  architecture: {
    // Real diagrams only. Stays null until one is drawn —
    // the page renders the system-map table alone.
    diagramSrc: null,
    diagramAlt: "TODO: describe the diagram for screen readers",

    layers: [
      {
        layer: "Presentation",
        technology: "Next.js on Vercel",
        responsibility:
          "Build page, contract upload UI, deviation flags and redline rendering",
      },
      {
        layer: "Orchestration",
        // Demos run on n8n Cloud. The identical workflows deploy
        // self-hosted or in a client's VPC for regulated
        // production — the /workflows export is the portable
        // artifact. Never state "self-hosted" as current fact.
        technology: "n8n (cloud-hosted)",
        responsibility:
          "Clause segmentation, RAG playbook comparison, deviation flagging, redline generation",
      },
      {
        layer: "Data",
        // Storage + queue selection pending deep-build.
        // Stated uncertainty beats invented detail.
        technology: "TODO: playbook vector store + review queue selection pending deep-build",
        responsibility:
          "TODO: playbook embeddings, contract records, deviation flags, audit log",
      },
      {
        layer: "AI",
        technology: "OpenAI API (schema-validated calls)",
        responsibility:
          "Clause-vs-playbook comparison and plain-language redline drafting with citations",
      },
    ],

    // One string per step — numbered on render because order
    // carries meaning: this is the sequence a record travels.
    flow: [
      "Contract uploaded via demo page",
      "n8n webhook receives file reference",
      "clauses segmented",
      "each clause compared against playbook embeddings via RAG",
      "deviations flagged with cited playbook passage",
      "plain-language redlines generated",
      "audit record written, structured result returned",
    ],
  },

  // ── Sample payload ───────────────────────────────────────
  // Real production schema, mock values, labeled as mock.
  payload: {
    caption: "// mock data — representative of production schema",
    input: {
      event: "contract.clauses.received",
      submitted_at: "2026-07-05T14:26:00Z",
      source: "playbook-audit.elwoodberry.com",
      fields: {
        filename: "msa-redline-candidate-0114.docx", clauses: 47, matter_ref: "MOCK-2026-0219"
      },
    },
    output: {
      status: "flagged",
      confidence: 0.91,
      routed_to: "queue:counsel-review",
      audit_id: "ias-demo-003-0001",
    },
  },

  // ── Live demo slot ───────────────────────────────────────
  // Renders only when a real demo exists. Demo Mode (cached
  // representative responses) is the default for public
  // traffic — protects demo reliability and n8n Cloud
  // execution quota.
  demo: {
    embedUrl: null,
    videoUrl: null,
    note: "Demo Mode serves cached representative responses to public traffic; live mode is enabled per session.",
  },

  // ── Links ────────────────────────────────────────────────
  links: {
    github: "https://github.com/elwoodberry3/ias-build-003-playbook-audit",
    // Decision pending: master CSV stores the build's own deploy
    // URL here; the page needs a route BACK to the portfolio
    // index. Root used until the portfolio index URL is final.
    portfolio: "https://elwoodberry.com", // TODO: confirm portfolio index URL
    // TODO: confirm /contact is the persona-routed booking page,
    // not a generic contact form, before deep-build ships.
    booking: "https://elwoodberry.com/contact",
  },
};
