<!--
Thanks for contributing to noya-agent-skills! Fill out the template below
so reviewers can act on your PR quickly.
-->

## What kind of PR is this?

- [ ] New hand-written **flow skill** under `skills/<flow>/` (welcome — see checklist below)
- [ ] Fix or improvement to an existing **flow skill** (welcome)
- [ ] Documentation / README / typo fix (welcome)
- [ ] ⚠️ **Change to `skills/noya-cli/`** — STOP. This folder is auto-generated from the [agentic monorepo](https://github.com/Noya-ai/agentic) and overwritten on every sync. Your changes will be lost. **Please open an issue on agentic instead** describing what should change in the source SDK.

## Summary

<!-- What does this PR add / change? Why? -->

## Checklist (new flow skills only)

- [ ] Skill folder is `skills/<short-kebab-name>/`
- [ ] `SKILL.md` exists with [agentskills.io](https://agentskills.io) frontmatter (`name` + `description`)
- [ ] `description` in frontmatter is concise (1-2 sentences) — used by agents for skill discovery
- [ ] References under `references/` are optional and split per-topic if used
- [ ] Tested with at least one agent (Claude Code, Cursor, etc.) — describe in Summary
- [ ] No secrets, API keys, or proprietary information committed
