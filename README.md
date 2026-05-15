# Noya Agent Skills

A collection of skills for AI coding agents to interact with [Noya](https://noya.ai) — a unified API for crypto market data, on-chain operations, prediction markets, and account/wallet management.

Skills follow the [Agent Skills](https://agentskills.io) format.

## Available Skills

### `noya-cli`

The complete reference for the `noya` command-line interface. **Auto-generated** from the underlying SDK, covering 141 commands across 6 namespaces.

**Use when:**
- Querying crypto prices, market data, news, on-chain analytics
- Executing on-chain transactions (ERC-20 transfers, Compound/Morpho lending, swaps, approvals)
- Searching, reading, or trading on prediction markets (Polymarket, Kalshi, Limitless, …)
- Managing wallet identity and signing operations
- Reading thread/portfolio/account state

**Categories covered:**
- `noya data` — crypto market data (87 commands)
- `noya chain` — on-chain operations (28 commands)
- `noya predict` — prediction markets (11 commands)
- `noya threads` — agent conversation threads (8 commands)
- `noya account` — wallet identity + signing (6 commands)
- `noya portfolio` — portfolio summary (1 command)

## Installation

```bash
npx skills add Noya-ai/noya-agent-skills
```

## Usage

Skills are automatically available to compatible agents once installed. The agent reads `<skill>/SKILL.md` for the entrypoint and pulls files from `<skill>/references/` on demand.

## Skill Structure

Each skill is a self-contained folder under `skills/`:

- `SKILL.md` — Instructions for the agent (the entrypoint)
- `references/` — Detailed reference documentation (optional)
- `scripts/` — Helper scripts (optional)

## Source of truth

The `skills/noya-cli/` skill is auto-generated from the [agentic monorepo](https://github.com/Noya-ai/agentic) and mirrored here via `git subtree`. Edit at the source — changes to the auto-generated content in this repo will be overwritten on the next sync.

Hand-written flow skills (anything outside `skills/noya-cli/`) accept PRs.

## License

MIT
