# Notes — Ridiculous at First Glance, Real by the Second

## The sentence

> We rent fainting goats to offices as stress relief — companies pay $300 a visit, because a goat tipping over on cue is cheaper than another trust-fall workshop.

160 characters, one sentence, well under the 200-character cap.

## Why it fits the brief

- **The odd thing, up front:** renting fainting goats — animals famous for
  collapsing when startled — as a workplace wellness service. The first half
  reads as a joke.
- **Who pays:** companies, at $300 a visit. Naming a concrete buyer and a
  concrete price is what turns the absurdity into a business.
- **Why it holds:** the comparison anchor. Corporate team-building and
  stress-relief programming is a real, recurring budget line, and a trust-fall
  workshop is its most mocked expense. The pitch only has to be cheaper and
  more memorable than that — a low bar the goat clears easily. There is also a
  real-world echo: goat rental is an established business (brush clearing,
  events), so the logistics are not fantasy; only the use case is new.
- **Structure:** absurd premise → buyer + price → cost comparison against the
  incumbent. The "real by the second" turn lands on the word "cheaper".

## Alternatives considered and dropped

- A subscription for professional line-standers: funny, but the payer logic
  (who reorders monthly?) was weaker.
- Renting grandmothers to taste-test home cooking: warm, but the buyer was a
  one-off consumer, not a repeatable B2B budget.

## Program

`main.ts` writes the sentence to `entry.txt` under `MAKEFUN_OUTPUT_DIR`
(default `/output`), no trailing newline, so the output is byte-identical to
`line.txt`.
