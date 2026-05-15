# Noya Agent Skills — repo overview

This repository ships skills for AI coding agents to interact with [Noya](https://noya.ai). Each skill is a self-contained folder under `skills/`.

## What's here

- **`skills/noya-cli/`** — Complete auto-generated reference for the `noya` CLI. 141 commands across 6 namespaces (data, chain, predict, threads, portfolio, account). Read `skills/noya-cli/SKILL.md` first; pull from `skills/noya-cli/references/` on demand for per-group command details.
- **`skills/<flow>/`** *(future)* — Hand-written skills for specific multi-step flows.

## How to use a skill in your agent

1. Read `skills/<skill>/SKILL.md` — this is the entrypoint with use cases, quick examples, and an index of references.
2. Pull `skills/<skill>/references/<topic>.md` only when the user's task touches that topic. References are split per-group so you don't need to load 1500 lines of reference at once.
3. Invoke the CLI (`noya …`) or the relevant scripts as the SKILL.md instructs.

## Installing `noya-cli`

```bash
npm install -g @noya-ai/cli       # or: pnpm add -g @noya-ai/cli
noya --version                    # verify
```

To run a single command without a global install:

```bash
npx @noya-ai/cli data coingecko price --token-ids bitcoin
```

## Authentication for `noya-cli`

The `noya` CLI authenticates via either an API key or OAuth bearer token:

```bash
# Option 1: API key — generate at https://agent.noya.ai/api-keys, set in shell profile
export NOYA_API_KEY=noya_...

# Option 2: OAuth (interactive, browser-based)
noya auth login
```

Anonymous mode (no creds) works for read-only data tools (`noya data …`). Chain operations, prediction-market trading, and account/wallet operations require authentication.

## Source of truth

The `noya-cli` skill is auto-generated from the [agentic monorepo](https://github.com/Noya-ai/agentic) and mirrored here via `git subtree`. Do **not** edit `skills/noya-cli/` files in this repo directly — changes will be overwritten on the next sync. File issues or PRs against agentic for command-level changes.

Hand-written flow skills accept PRs in this repo.
