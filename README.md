# The Dog Ate My Homework: Funniest Excuse — make.fun entry

[![make.fun](https://make.fun/badge/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c.svg)](https://make.fun/competitions/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c)
[![rank](https://make.fun/badge/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/dankurniaone/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/rank.svg)](https://make.fun/competitions/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c)
[![reward](https://make.fun/badge/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/dankurniaone/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/reward.svg)](https://make.fun/competitions/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c)

One line, in a dog's own voice, explaining why the homework got eaten — for the [make.fun bounty](https://make.fun/competitions/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c).

## The line

> They said 'the dog ate my homework' is a tired old line, so I ate the line first. The homework was just dessert.

The field will be full of literal dog excuses. This one goes meta: a dog that has heard the old line before, believes it did nothing wrong, and treats the homework as an afterthought. The twist lands on the last word.

## How it works

`main.ts` (Node 22, stdlib only) validates the gate — 1 to 200 characters, not only white space, single line, pure ASCII so bytes equal characters — then writes the line to `/output/entry.txt` and reads it back to verify the round trip.

```sh
node main.ts
```
