# design-system-ASK

## Role in the method

[`apexSolarKiss/design-system-ASK`](https://github.com/apexSolarKiss/design-system-ASK) is the first tier-bearing reference implementation in the ASK family — a public design system (Apache 2.0; OFL fonts) carrying foundation primitives, the ASK design language, and the ASK instance identity in three internally-demarcated tiers. Its role here is to test whether the ASK design family can carry across child surfaces via inheritance-by-reference rather than duplication.

The role is structural, not biographical. The project is the worked example; the method is the durable element. Method-ASK preserves what generalizes beyond the design-system-ASK domain.

## What this project surfaced

The following method elements emerged through design-system-ASK assembly (founding commit `834348b` on `main`):

- **Three-phase publication-gating for new-family-instance repos.** Phase 1 (operator-side source-of-intent surface) → Phase 2 (local assembly + exact-scoped-diff review) → Phase 3 (publish direct to main). The pattern was new for the family. It preserved decision-checkpoints that would otherwise have collapsed into one push, and made each gate's approval explicit.
- **Internal tier demarcation as cheap-now / expensive-later hinge.** The three tiers (foundation / ASK design language / instance identity) demarcated via in-file comment markers at section boundaries kept the zones cleanly separable for future child-instance extraction without requiring a separate compilation step. Demarcation at build time is cheap; not demarcating and discovering tier confusion downstream is expensive.
- **The freshly-built reference implementation principle.** A tier-bearing repo, even shipped clean and verified, does not retroactively constitute a proven inheritance pattern. `docs/absorption-discipline.md`'s §Worked pressure surfaces explicitly framed design-system-ASK as "not yet an absorption example" at the time that doctrine doc landed. This is the absorption discipline applied to itself — refusing to over-claim what a reference implementation has demonstrated until downstream pressure validates it.

These were design-system-ASK-side surfacings. The actual inheritance pattern remained untested until a downstream child attempted to inherit Tier 1 + Tier 2 in practice.

## What the downstream proof showed

The first child to attempt Tier 1 + Tier 2 inheritance from design-system-ASK was [`urban-observatory`](https://github.com/apexSolarKiss/urban-observatory), building an Example 2 summary-surface prototype as scratch-only HTML. The attempt produced two passes:

**v1 — presence without structure.** The upstream existed and was reachable. The inheritance posture was named in the artifact's narration. But the rendered HTML did not meaningfully inherit Tier 1 + Tier 2 — invented hex palette, generic system sans, conventional weight contrast, light-mode-only, no ASK gradient. The artifact had upstream access and used inheritance vocabulary in commentary, but inherited no actual visual structure.

**v2 — structural inheritance.** The corrected prototype inherited Tier 1 + Tier 2 by reference: ASK gradient background, canonical text-color pairing, glass-card container pattern, ASK named palette tokens, Inter / JetBrains Mono named first with documented system fallback, 200 / 400 weight contrast, dark mode via `prefers-color-scheme`, single muted UI accent maximum. Tier 3 stayed excluded — no `logo-ASK`, no ASK wordmark, no ASK chrome, no family tagline.

The v1 → v2 sequence is the pressure that earned this worked example. Without it, design-system-ASK would still be a freshly-built reference implementation with the inheritance pattern still a hypothesis. With it, the inheritance pattern has one downstream proof.

## What method-ASK preserves

`docs/absorption-discipline.md` carries the framing that established design-system-ASK as not-yet-an-absorption-example before the downstream proof. With the proof now landed, design-system-ASK's §Worked pressure surfaces entry there is a candidate for refresh — but only when a second downstream child project surfaces the same inheritance pattern. One proof earns worked-example treatment here; doctrine-level promotion in `docs/absorption-discipline.md` waits for n=2 across children.

The core method observation surfaced by the v1 → v2 contrast:

- **Presence verification is not structure verification.** Presence asks whether the upstream artifact exists, is reachable, has the expected files and tier markers. Structure asks whether the downstream artifact inherited the right layer (Tier 1 + Tier 2) and avoided the wrong layer (Tier 3). Both must pass. A downstream artifact can have full upstream access and still inherit wrong by importing inheritance vocabulary without inheriting visual structure — exactly the v1 failure mode.

The observation lives at observation-level only. It is task-scoped into the upstream tier-inheritance handoff (where it was load-bearing for v2's success) and recorded operator-side as a workflow reminder. It does not earn rule-level treatment in `docs/absorption-discipline.md`, `AGENTS.md`, or control-surface templates on the basis of one child project's internal v1 → v2 sequence. A second child project surfacing the same failure mode would earn the promotion; this single proof does not.

## Boundary notes

Domain-specific content lives in the project surfaces, not here:

- **`design-system-ASK`** carries its own tier values, gradient stops, type choices, named `lavender-ASK` color, and tier-demarcated `colors_and_type.css`. Method-ASK references the structural facts; it does not duplicate the values.
- **`urban-observatory`** carries its own Example 2 content, prototype-specific implementation detail, and operator-side scratch records of the v1 → v2 sequence. Method-ASK references the inheritance pattern; it does not narrate the prototype contents or the urban-planning domain.
- **`visual-identity-system.md`** (source of truth for visual identity decisions) and **`brand-architecture.md`** (source of truth for the tier model itself) live in ASK's canonical context. Method-ASK conforms to those upstream surfaces by reference per the cross-tool inheritance boundary; it does not duplicate their contents.

Method-ASK carries only what generalizes beyond the specific projects. The inheritance pattern, the two-axis presence/structure observation, and the "document pressure, not intention" discipline are method-altitude. The tier values, the prototype contents, and the upstream visual-identity spec are not.
