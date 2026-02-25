---
title: "Nix"
category: "shit"
tags: ["nix", "packaging", "linux", "devops"]
dateAdded: 2026-02-15
status: "active"
---

## Overview

Nix is a package manager and language for reproducible builds and declarative
system configuration. It is widely used in the DevOps and Linux communities for
its ability to create isolated, reproducible environments and manage complex
software dependencies. However, Nix and its ecosystem present a unique set of
challenges and complexities that can be daunting for both newcomers and
experienced users.

## Issues

- The distinction of Nix/NixOS/Nixpkgs as well as CppNix, NixLang, and other
  confusing terminology used for tug-of-war. Now with derivatives to mess you
  up.
- Docs are perpetually outdated---dig through code or weep.
- Nix language is a bespoke oddity---because no normal language would do?
- Performance is a slog; RIIR might've died quietly somewhere if not attempted
  to be vibecoded.
- Post-install patches are a rickety duct-tape job.
- Wrapping overlapping tools like Python is pure masochism.
- Steep learning curve mocks newcomers with cryptic errors.
- Bash and Perl everywhere, including places you don't want to see them in.
- Packaging is a pain in the ass that never goes away. Some languages suck,
  others suck more.
- Everything is lazy by default, errors happen at eval time right before you get
  to bed.
- Gc roots are black magic that will bite you when you forget them.
- Flakes were supposed to fix everything but just added more jargon and lock-in.

## Examples

- A user tries to install a package and is unsure whether to use `nix-env`, edit
  a NixOS configuration, or patch `nixpkgs`. The documentation refers to all
  three, often without clear distinction.
- Searching for how to override a package leads to a dozen conflicting blog
  posts and GitHub issues, none of which match the current version of Nix.
- Needing to patch a package after installation often requires manual hacks or
  custom overlays, which are fragile and break with updates.
- Critical parts of the ecosystem rely on Bash and Perl scripts, sometimes in
  the build process, sometimes in the package definitions themselves.

## Verdict

Nix is a solution in search of a problem, maintained by academics who think
homoiconic syntax is a personality trait. The "reproducibility" pitch ignores
that most people just want `apt install` to work. Every workflow involves three
competing tools and seven layers of indirection. The community's response to any
criticism is always "you just don't get it" --- a confession, not an argument.
The learning curve isn't steep, it's a vertical cliff with no rope. Avoid unless
you want to spend your free time debugging your package manager instead of doing
actual work.
