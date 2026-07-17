# AGENTS.md

This file defines repo-local workflow rules for whoever executes work on this `method-ASK` repo.

The operating model is single-node: Claude Code is both control surface and executor. This inherits from the family default as articulated in [`apexSolarKiss/control-surface`](https://github.com/apexSolarKiss/control-surface).

An advisor in chat-based form — typically GPT or Claude — remains available outside the execution thread.

The rules below are agent-agnostic — they apply to whoever is executing.

For repo-external context (graduation origin, project intent, audience, layer relationship to `control-surface`, foundational premises, durable loose threads), read the grounding note maintained outside this repository.

For project state (artifacts, decisions, current navigation), read the repo itself.

This file owns workflow rules. It does not track project state, current direction, or recommended next paths.

---

## Source-of-Truth Boundaries

- **Repo** = project truth: doctrine docs, method articulation, worked-example explanations, lineage, decisions.
- **`AGENTS.md`** (this file) = workflow rules for repo execution.
- **Grounding note** (external) = repo-external context: graduation origin, intent, audience, philosophy, foundational premises, durable loose threads.
- **Per-conversation memory** (operator-side: Claude Code's `MEMORY.md`, ChatGPT thread history, task lists) = ephemeral session state that does NOT belong in the grounding note.

### Aging-Rate Principle

The split between repo, `AGENTS.md`, grounding note, and per-conversation memory is not just separation of concerns — it is separation by *aging rate*.

- A doc that *tracks state* ages fast and must be refreshed often.
- A doc that *points to state* ages slowly and stays useful across many sessions.
- A rules doc that contains rules only ages slowly.
- A context doc that contains context only ages slowly.
- A doc that mixes rules, context, and state ages at the rate of its fastest-aging contents — usually badly.

If a statement would become stale when a PR lands, a chain closes, or a next path changes, it does not belong in this file or in the grounding note.

This repo's method-doc work is **slower-aging** than execution-protocol work. The PR cadence is proportional to the architectural questions live at any moment — often fewer cycles than `control-surface` carries, more reflective absorption discipline.

---

## Required Reading Before Meaningful Work

Before any meaningful repo work, read:

- `README.md`
- `AGENTS.md` (this file)
- `docs/method.md`

Then read whatever doctrine docs, worked examples, or article-line references are relevant to the task.

For external context, read the grounding note.

---

## Provenance Transcript PTX Marker

A filename ending in `-PTX.md` or `-PTX_vN.md` identifies an ASK-assembled **Provenance Transcript**: a frozen record of a source conversation or cross-surface exchange, retained for lineage and later verification.

The `-PTX` segment is the artifact-role marker. An optional `_vN` suffix records the version of the transcript artifact itself. It does not make the artifact a model draft or draft-zero, and it confers no lifecycle state or authority.

A `-PTX` artifact is not a canonical, a model draft or model draft-zero, a versioned canonical snapshot, a handoff, an approval or execution instruction, or an ingestion-state marker.

- `-PTX.md` is an unversioned singleton transcript.
- `-PTX_vN.md` is a frozen member of an explicit transcript version lineage. `_v0` means the first saved PTX version, not draft-zero.
- Infer version precedence only from an explicit `_vN`, never from the `-PTX` marker itself.
- Treat every saved PTX version as read-only. When ASK authorizes a correction, extension, or reassembly, create the next `_vN` version rather than editing the prior version in place.
- The PTX files are themselves the frozen lineage; do not create a separate canonical-plus-snapshot chain for them.
- Do not absorb a PTX as project truth without classification.
- If the transcript creates work for another surface, route a separate handoff rather than stacking `-PTX` with `-TBI`.
- The convention is prospective. Historical transcripts are not renamed for conformance, so the absence of `-PTX` does not establish that a file is a model draft — classify an unmarked artifact from the file and its scratch context before versioning or superseding it.

Forms:

```text
YYYY-MM-DD_<surface-or-subject>_<topic>-PTX.md
YYYY-MM-DD_<surface-or-subject>_<topic>-PTX_vN.md
```

`-TBI`, `-PTX`, and `_vN` do not share an axis: `-TBI` is a lifecycle state, renamed off on ingestion; `-PTX` is an artifact role, and the role marker is retained throughout any version lineage; `_vN` is an optional version index for the transcript artifact. Neither `-PTX` nor `_vN` confers state, authority, or canonical status.

---

## Repo Workflow Discipline

### Session-Start Discipline

Before any new repo work in a session:

1. Confirm the working directory is the session-owned worktree. Cross-worktree absolute paths are a known failure surface; verify before any edit, write, or cross-root `git -C` command.
2. Verify `HEAD` is attached to a named branch. Detached `HEAD` is a stop condition.
3. Verify the working tree is clean.
4. If the working tree is not clean, stop. Identify whether the changes belong to the current thread before touching anything. Inheriting another thread's uncommitted state is a stop condition until provenance is established.

This does not replace Branch Freshness or Default Verification. It is the session-entry gate before meaningful repo work begins.

### Branch Freshness

For repo implementation work, follow this sequence:

1. verify local repo attachment
2. verify clean working tree
3. `git fetch origin --prune`
4. `git checkout main`
5. `git pull --ff-only origin main`
6. create task branch from refreshed `main`
7. stop if any verification fails

Do not start meaningful repo work from a stale, dirty, detached, or ambiguous branch.

### Default Verification

Before meaningful work, verify:

```text
pwd
git rev-parse --show-toplevel
git remote get-url origin
git branch --show-current
git status --short
```

Stop if repo root, remote, branch, or working tree does not match the task requirements.

### Terminal-State Discipline

Do not conflate:

- local edits
- exact scoped diff
- local commit
- pushed branch
- PR created
- merged PR
- branch cleanup

Use explicit terminal states:

```text
exact scoped diff ready for approval
committed locally only
pushed branch only
PR created
merged
merged branches cleaned up
```

### Explicit Artifact-Lifecycle Verbs

Do not use `cut` as an operation verb for drafts, changes, files, versions, snapshots, handoffs, releases, or other artifacts. It is ambiguous between creation and destruction.

Name the actual operation instead: draft, write, revise, save, create a version, create a snapshot, copy at byte parity, rename, route, supersede, retire, or delete.

This rule applies to plans, instructions, handoffs, change summaries, and status reports. Historical quotations, provenance records, frozen artifacts, and unambiguous domain terms such as a film's rough cut are not rewritten solely to enforce it.

### Exact Scoped Diff Gate

Stop at exact scoped diff unless ASK has already approved commit / push / PR.

The default implementation terminal state is:

```text
exact scoped diff ready for approval
```

Exact scoped diff review is the mandatory approval checkpoint before meaningful write actions complete. Approval may be given inside the executor session after the diff is reviewed; once given, the executor may complete the remaining git workflow without separate manual GitHub UI ceremony.

### Structured Change Summary

Meaningful changes require a structured change summary covering:

- why this change exists
- what changed
- what did not change
- what remains out of scope

If a PR is used, this belongs in the PR description. If no PR is used, the same summary must be produced in the executor handoff or approval record before write actions complete.

### PR Creation

When creating a PR, report:

- branch name
- commit SHA
- PR number
- PR URL
- actual base branch
- actual head branch
- validation performed
- terminal state: `PR created`

### Default: Hold or Carry Through Per Adversarial-Collaboration Preconditions

When ASK has approved the scoped diff, the workflow continues through commit and push to PR creation.

If the project meets the preconditions for adversarial collaboration (per [*Adversarial Collaboration*](https://atomicspacekitten.substack.com/p/adversarial-collaboration)) — hardened backbone, active architectural uncertainty, configured advisor surface — hold at `PR created` until the advisor relay returns approval, then continue to merge. The pushed-not-merged PR is the advisor's structural review window.

ASK forwarding an advisor approval to the executor is the relay. Forwarding may be done by pasting the advisor's approval, summary, or equivalent review result. No additional approval phrase is required after the forwarding act.

Forwarding advisor notes that contain required fixes, blocking concerns, or open questions is not approval relay; it is fix-direction or question-forwarding.

If no advisor surface is configured, or if the PR is method-doc work with no live architectural uncertainty, carry through to merged + cleanup once diff approval is given. The pattern is proportional to architectural uncertainty live at any moment.

### Post-Merge Cleanup

After merge, verify `main`, delete merged task branches where safe, verify remote branch state, and report:

- current main HEAD
- whether merge commit is present
- whether expected changes are present
- local branch cleanup
- remote branch cleanup
- final branches
- final working tree status
- terminal state: `merged branches cleaned up`

### Direct Push to Main

Branch plus PR is the default for meaningful structure or doctrine changes. Narrow low-risk edits or explicitly scoped bootstrap tasks may allow direct push to `main` when scope is made explicit and approved.

---

## Session Topology / Single-Writer Discipline

Multiple operator sessions (multiple Claude Code threads, parallel Codex sessions, ChatGPT thread plus Codex thread) can mutate the same repo files concurrently. This is a real failure mode, not a hypothetical.

Rules:

- **One writer at a time per branch.** A second operator session on the same branch must verify state freshly, treat the working tree as authoritative over its own memory, and not assume mid-flight context from another session.
- **Treat repo and remote as the audit trail.** When two sessions disagree about state, prefer `git status`, `git log`, and remote-branch state over either session's recollection.
- **Stop on suspected concurrent mutation.** If a working tree contains changes the current session did not make, do not overwrite. Re-orient against the repo before continuing.

This rule applies whether the second session is the same agent, a different agent, or a human editor.

### Repo-as-Arbiter for Current-State Questions

For any load-bearing question about what a file, branch, PR, or repo currently contains, verify against exact artifact state: the working tree, `git` state, an exact file path / ref, an exact PR diff, or a repo-qualified API / URL read. Generated summaries, search results, cached retrieval, memory, and unqualified chat claims do not graduate to ground truth without an artifact-side check.

The discriminator is **exact artifact state, not which agent class performed the read**. A chat-side advisor resolving an exact repo-qualified PR patch is reading an artifact; a filesystem agent relying on a stale subagent digest is not. Tool class does not determine authority.

This is method-layer doctrine, articulated in the 2026-05-20 advisor-read adjudication lesson and the article *Three Agents Got Into an Argument. The Repo Won.* It applies here because the methodology repo embodies the rule it articulates.

---

## Scope Discipline

Match the unit of work to the level of the question.

For implementation and repo hygiene, prefer the smallest honest unit. Small bounded PRs are usually best. Avoid bundling, widening, or design-in-advance.

For conceptual architecture, prefer the largest tractable structural question. The smallest honest unit at the architecture layer is often a structural question or a model attempt against a concrete example, not another local prototype probe.

Do not let "smallest unit" become a rule that prevents zooming out to the right scale. A series of small honest units at the wrong layer can add up to ceremony without architectural progress.

Do not bundle unrelated work.

Do not widen scope mid-task unless the widening is explicitly chosen.

Do not create artifacts merely because a process pattern exists.

### Absorption Discipline

The methodology repo embodies the absorption discipline it articulates. n=1 project-specific patterns stay at observation-level by default. Promotion to rule-level doctrine requires earned evidence: repeated pressure across projects, or an explicit structural argument strong enough to justify generalization before repetition. A second project is a useful threshold, not a mechanical rule. Doctrine docs may carry observation-level subsections explicitly — labeled as observation, with the candidate generalization stated but not promoted to rule — until evidence earns the promotion.

Do not absorb patterns into rule-level doctrine on first sighting. The discipline is what prevents methodology bloat.

---

## Plan-Before-Execute Rule

Before executing a meaningful repo change, state the plan: what files will change, what scope is in vs out, what non-actions apply, what terminal state is expected.

This applies whether the executor is a separate process (Codex) or the same agent doing the planning (Claude Code).

The plan-before-execute step preserves the explicit reasoning surface that prompt-compilation provides when execution is split across a prompt-compiler and an executor. In a single-node model, plan-before-execute is the rule that restores it. Do not collapse plan and execution into a single opaque step.

---

## Why These Rules Exist

The single-node model collapses several functions that the earlier split-execution model handled by default. Most of the rules above are calibrated compensations for what gets lost when a single agent is both compiler and executor:

- A split model has a natural prompt-compilation step. A single-node model collapses it into the executor. **Plan-Before-Execute** is the rule that restores the reasoning surface.
- A split model has natural model separation, which surfaces disagreements as visible artifacts. A single-node model runs in one head, so disagreements become invisible. **Structured Change Summary** and **exact-scoped-diff approval** are the rules that compensate.
- A single-node model has stronger session-topology pressure (Claude Code easily spawns parallel threads). **Single-Writer Discipline** is the compensation.
- Generated summaries confidently confabulate file contents — chat-side retrieval, cached reads, and even a filesystem subagent's digest. **Repo-as-Arbiter** routes current-state questions to exact artifact state, not to any agent class's summary.

When proposing rule changes, ask which failure mode the rule is compensating for and whether the compensation is still load-bearing.

---

## Comments, Docs, and PR Roles

- Comments belong in implementation artifacts only when local clarity needs them.
- Docs describe method, doctrine, topology, lineage, and worked-example explanations.
- Structured change summaries and PR descriptions hold change-specific framing.

Do not push PR-only explanation into permanent repo docs, and do not hide durable method articulations inside a PR or approval record.

---

## Refresh Cadences

### `AGENTS.md`

Refresh this file only when a workflow rule is added, removed, or materially revised.

Do not refresh because project state changed.
Do not refresh because a PR landed.
Do not refresh because the next direction changed.

If a proposed update says "the project currently should do X," it does not belong in this file.

### Method docs

Refresh `docs/*.md` when the underlying method articulation has materially evolved — not when the project around the method has changed state. Method-doc work is slower-aging by design.

When a project-specific pattern surfaces that might become method doctrine, do not promote it on first sighting. The absorption discipline governs promotion.

---

## Defaults

- Prefer compilation of earned material over speculative articulation.
- Prefer explicit structure over clever indirection.
- Prefer smallest coherent scaffold that clarifies the method-layer boundary.
- Tailor docs to this repo's job as a methodology repo. Do not write as if this were an execution-protocol repo or a downstream project repo.
- Use clean technical language. Avoid manifesto phrasing, speculative systems, or generic process bloat.
- The methodology repo embodies the rules it articulates. When in doubt, follow the rule the repo is articulating.

---

## Short Version

- Verify repo state before meaningful work.
- Read repo-local truth and grounding note before responding.
- Route current-state questions to exact artifact state (working tree, `git`, exact ref / PR, repo-qualified API); do not trust generated summaries, regardless of agent class.
- Stop at exact scoped diff before commit; carry through to merged + cleanup once approved.
- State the plan before executing.
- Single-writer per branch. Treat repo as audit trail.
- Match the unit of work to the level of the question.
- Absorb on earned evidence, not on first sighting.
- Refresh `AGENTS.md` only for rule changes; refresh method docs only for material method evolution.
- Keep this file workflow-only. Repo holds state. Grounding note holds external context.
