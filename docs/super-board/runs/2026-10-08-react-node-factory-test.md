# super-board run · 2026-10-08 · react-node-factory-test

15:38:45 super-board run started (workflow, tier medium)

| Card | Lanes | Final | Column | Detail |
|---|---|---|---|---|
| #1 | build:halted | halted | Ready | wave 1 halted: preflight read `gh issue view 2` without --json; resumed with corrected read |
| #2 | none:halted | halted | Ready | same halt |
| #1 | build:halted | halted | Ready | wave 2 halted: classify read `gh issue view 1 --json` with no field list |
| #2 | none:halted | halted | Ready | same halt |

15:42:20 🛑 halted — classify prompt builds malformed gh reads (2 waves)

15:42:54 super-board run restarted after classify-prompt patch (wave-js:274)
| #1 | none:halted | halted | Ready | wave 3 halted: preflight read missing `number` field |
| #2 | none:halted | halted | Ready | same halt |
15:44:10 shared read rule added to READ_FAILURE preamble; restarting
| #1 | build → qa → review | advanced | Done | PR #3 squash 4f5d28c on staging · 4/4 AC · truth 93 |
| #2 | build → qa → review | advanced | Done | PR #4 squash 8ef66ee on staging · 12/12 tests · truth 90 |

15:53:02 ✅ board drained — 2/2 Done · exiting cleanly

16:47:00 super-board run started (workflow, tier medium)
| #7 | build:halted | halted | Ready | wave halted: builder sent `pr list` with --kind issue-number (4th malformed-read halt); 146,633 tokens |
16:48:16 🛑 halted — malformed helper reads persist after preamble fix; run stopped for owner decision
