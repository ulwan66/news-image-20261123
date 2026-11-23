[![news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/ulwan66/news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/ulwan66/news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123)

# The World in One Day — 23 November 2026

One image that sums up the world news of Monday, 23 November 2026,
laid out as a newspaper front page.

## What is in the picture

The hero story is the collapse of the COP31 climate talks in Antalya:
after the longest COP ever, the summit ended with no deal, the first
failure to agree an overarching climate pact since Copenhagen in 2009.
Around it, five more stories that led the front pages that day:

- Democrats take 258 seats in the US House, their biggest majority
  since 1992, sealed by a 330-vote win in North Carolina.
- A Russian warship is sunk by a suspected drone strike off Libya.
- Kyiv is hit again, with at least 14 people missing after a drone
  strike, as the UK defence secretary visits the city.
- South Korea's education minister resigns over an AI exam-cheating
  scandal, days before the country's university entrance exam.
- A factory fire in Indonesia leaves 3 dead and 36 missing.

Every story was checked against live reporting from the BBC, Reuters,
CNN, AP, Le Monde, Yonhap and others on 23 November 2026. Full
sources are listed in the workdir RESEARCH.md.

## Why this layout

A front page, not a collage: one masthead, one date line, one hero
story taking the top half, and five short panels below it. The idea is
that a reader glancing at the image for a few seconds still walks away
knowing what mattered that day. Headlines are kept short and large so
they stay legible even at 300 pixels wide.

## How it runs

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png` (or `/output/entry.png`).

```sh
node main.ts
```

## Files

- `entry.png` — the 1024x1024 front page
- `main.ts` — copies the image to the output directory
- `LICENSE` — MIT

Built for the [news-image-20261123](https://make.fun/bounty/news-image-20261123)
bounty on [make.fun](https://make.fun).
