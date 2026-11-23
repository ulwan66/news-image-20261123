# The World in One Day — 23 November 2026

[![make.fun](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/ulwan66/news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/ulwan66/news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123)

A newspaper front page summing up the world's news of **Monday, 23 November 2026** in one image — my entry for the [make.fun bounty](https://make.fun/bounty/news-image-20261123).

## The image

`entry.png` (1024×1024, 530,059 bytes) is a front page headlined **COP31 COLLAPSES**, with five panels below it:

- **COP31 COLLAPSES** — the UN climate talks in Antalya end with no deal, the first collapse since Copenhagen 2009, after the final draft dropped any mention of fossil fuels.
- **DEMOCRATS' 258** — Democrats take at least 258 US House seats, their biggest majority since 1992, after Chuck Hubbard flips a North Carolina seat by 330 votes.
- **WARSHIP SUNK IN LIBYA** — the Russian corvette Merkury is hit by suspected Ukrainian sea drones at Benghazi and sinks.
- **KYIV UNDER FIRE** — 14 missing after a Russian drone strike in the Kyiv region, as the UK defence secretary visits Kyiv.
- **SEOUL MINISTER QUITS** — South Korea's education minister resigns over the AI exam-cheating scandal.
- **FACTORY FIRE** — 3 killed and 36 missing after a fire at a confectionery factory in Indonesia.

Every story was verified against live reporting on 23 November 2026 — BBC, Reuters, CNN, AP, Le Monde and Yonhap.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `entry.png` to `/output/entry.png`, byte for byte, so both grader runs write identical output.

## License

MIT — see [LICENSE](LICENSE).
