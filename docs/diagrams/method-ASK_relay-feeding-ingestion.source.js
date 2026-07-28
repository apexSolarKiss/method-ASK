/* method-ASK_relay-feeding-ingestion.source.js
   D06 // relay / feeding / ingestion // source-v1 // 2026-07-28

   Subject: the three operations that are routinely collapsed. All feeding occurs
   through relay; not every relay is feeding. Ingestion is the recipient-side state
   that RESULTS when a feed succeeds — it is not a proactive election by the surface,
   and it is not a disposition.

   The envelope, not the payload, determines operative force.

   Repo prose is source truth: docs/source-of-intent.md §Inbound handoff TBI marker. */

window.TREE_D06 = {
  kind: 'root',
  label: 'ASK UTTERANCE',
  note: 'the authority-bearing speech act — everything below inherits its force from here',
  children: [
    { kind: 'section', label: 'direct relay', tag: 'no external payload', children: [
      { label: 'ASK speaks operatively', note: 'e.g. “merge PR #123 at the pinned head” — relay WITHOUT feeding' },
      { label: 'force', note: 'immediate. There is no payload to read, so there is no ingestion event' },
    ]},
    { kind: 'section', label: 'feed', tag: 'a relay CARRYING an external payload', children: [
      { kind: 'group', label: 'the relay envelope', note: 'supplied by ASK · determines what the recipient is to DO', children: [
        { label: 'read only' }, { label: 'consider' }, { label: 'critique' },
        { label: 'ingest and classify' }, { label: 'execute exactly' }, { label: 'approve' },
        { label: 'hold' }, { label: 'reject' },
      ]},
      { kind: 'group', label: 'the payload', note: 'supplied by the artifact · supplies CONTENT, never force', children: [
        { label: 'by value', note: 'attached or pasted' },
        { label: 'by reference', note: 'an exact path the recipient resolves — a bare exact path addressed to an active surface IS a feed' },
      ]},
      { label: 'mere inclusion is not intent', note: 'not every proposition inside a fed artifact is operative. The envelope governs scope' },
    ]},
    { kind: 'section', label: 'ingestion', tag: 'the RESULTING STATE when a feed succeeds', children: [
      { label: 'what it requires', note: 'the intended active recipient surface reads the exact marked payload into active context, under ASK’s feed' },
      { label: 'path resolves ≠ content read', note: 'a failed retrieval, or a path resolving only to metadata, has NOT produced ingestion' },
      { label: 'content read ≠ exact-byte identity proven', note: 'a lossy or normalized view may be a bounded fidelity claim; where the omission could affect classification, get an adequate representation first' },
      { label: 'a feed can fail', note: 'deferred, refused, or superseded before the recipient acts. Feeding expresses INTENT to have the payload ingested; it is never itself ingestion evidence' },
      { label: 'source-side inspection', note: 'reading a governing record, verifying bytes, or consulting an inspection copy does NOT satisfy the feed obligation' },
    ]},
    { kind: 'section', label: 'disposition', tag: 'separate, and later', children: [
      { label: 'ingestion is not disposition', note: 'the recipient classifies AFTER reading; -ingested carries an open disposition' },
      { label: 'absorption is ONE disposition', note: 'not the generic name for all of them' },
      { label: 'disposition is not implementation authority', note: 'classifying material does not authorize acting on it' },
    ]},
  ],
};
