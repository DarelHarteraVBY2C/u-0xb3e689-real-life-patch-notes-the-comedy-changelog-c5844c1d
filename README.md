# Real-Life Patch Notes: The Comedy Changelog

[![make.fun bounty](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d.svg)](https://make.fun/c/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![Rank](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/DarelHarteraVBY2C/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/rank.svg)](https://make.fun/c/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![Reward](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/DarelHarteraVBY2C/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/reward.svg)](https://make.fun/c/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)

Entry for the [Real-Life Patch Notes: The Comedy Changelog](https://make.fun/c/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d) bounty on [make.fun](https://make.fun).

## The entry

> v2.7.1: fixed a bug where the brain replayed your most embarrassing moment from 2009 at 3 a.m. with no skip button.

One line, 115 characters. A software patch note for a bug in human
biology: the brain as a media player that replays your worst memory on a
loop at the worst hour, with no way to skip it. Everyone has lain awake
at 3 a.m. while their brain queued up one embarrassing moment from years
ago — the reader winces and laughs at once.

## How it works

`main.ts` (Node 22, standard library only, no network) validates the
entry against the gate — UTF-8 text of 1 to 160 characters, not only
whitespace, a single line — then writes it to
`$MAKEFUN_OUTPUT_DIR/entry.txt` and verifies the round trip byte for
byte. Running it twice produces byte-identical output.

```sh
node main.ts   # writes output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
