# Shitlist

![Hate Level](https://img.shields.io/badge/Hate%20Level-11%2F10-red)
![Tech Ruined](https://img.shields.io/badge/Tech%20Ruined-All-orange)
![Build: Failing (by design)](<https://img.shields.io/badge/Build-Failing%20(by%20design)-red>)

A lovingly crafted rundown of tech that's made me want to throw my keyboard out
the window, complete with why these tools and languages deserve a spot in my
personal hall of shame. Buckle up.

---

## Dockerfiles/Containerfiles

- Containers are dope, but writing Dockerfiles is a fragile nightmare.
- It's all imperative, so one dumb typo and your build's toast.
- Hermetic? Ha, good luck—builds shift depending on the machine like a cruel
  lottery.
- Mandatory args? Nope, just pray your users guess right.
- Secret handling was a dumpster fire until they patched it five minutes ago.
- No digest pinning unless you hack it with stuff like `docker-lock`, so enjoy
  the chaos.
- Unqualified images lean on whatever the daemon feels like doing that day.
- Root-only builds were the norm forever until `buildah` and `podman` showed up
  to flex.
- Docker Desktop's overpriced button-clicker trash.
- Multi-stage builds turn into bloated monsters if you're not a wizard.

---

## GitLab

- Global settings slam every branch at once with zero warning.
- Config change audit logs? Nah, figure out who broke it yourself.
- Project settings won't give you read-only access for sane debugging.
- CI variables disappear into the ether, and your pipelines vanish with them.
- Scheduling variable updates for credential rotation? Manual labor, baby.
- Tries to be an all-in-one hero but skips basics like granular permissions.
- Self-hosted? Better have a spare RAM stick or two lying around.

---

## Homebrew

- Moves slower than a hungover sloth, all because Ruby's dragging it down.
- Needing Ruby just to browse packages is peak overkill.
- Installs bloat up with no deduplication—here's ten copies of `libc` for no
  reason.
- Mac users deserve better than this lumbering mess.
- Pre-v4, it leaned on `git` for metadata; now it's JSON, which is only
  marginally less awful.
- Updates roll in and break stuff without so much as a heads-up.

---

## HCL

- Semantic newlines over spaces make zero sense—HashiCorp, explain yourself.
- Flirts with being functional but chickens out halfway.
- Cue, Dhall, Nix, even Jinja2 run circles around it.
- Terraform configs turn into repetitive, clunky sludge fast.

---

## CI/CD

- Hard-coded names begging to fail.
- User account ties mean security's a fairy tale.
- Network shares as dependencies? Hope they don't blink out.
- “Deployment” via `git pull`—genius.
- Shared runners clog up like a bad drain.
- Jobs on the master node are an accident waiting to happen.
- Dependencies rot from neglect, and vulns shine so bright they're practically
  neon.
- Absolute paths snap on new setups.
- Prod leans on shaky scheduled runs.
- Unpinned deps keep every build a wild surprise.
- No backups mean one crash could end it all.
- Regular tests pretend they're “performance” checks.
- Repos stuffed with binaries, PDFs, and stack traces—what's wrong with you
  people?
- Credentials, SSH keys, and API keys checked in like it's no big deal.
- API keys in URLs leak faster than a busted pipe.
- Tests retry until they pass—fixed it!
- Build paths from another planet.
- Custom tools reinventing the wheel badly.
- Builds on every commit hog resources.
- Relative paths like `../../../` snap like twigs.
- Jobs drag on for hours.
- Jenkins and Bamboo feel like medieval torture.
- No local testing leaves devs in the dirt.
- Runner state dependencies kill consistency.
- Ancient CI/CD versions beg for upgrades.
- Silent fails with no logs turn debugging into a guessing game.

---

## Terraform

- HCL's trash—see above.
- Plan/apply feels like a clumsy two-step when you need precision.
- State files are a disaster waiting to blow; lose one, and you're toast[^1].
- Local state's a corruption magnet—remote or bust.
- Modules suck at real composition, so it's copy-paste city.
- Versioning's a slog with provider mismatches everywhere.
- Providers break like cheap toys with every update.
- It'll nuke and rebuild your infra if you don't babysit it.
- Drift detection's half-baked, so trust is optional.

[^1]:
    State files track your infra; corrupt or lose them, and Terraform's
    clueless.

---

## Dotnet

- Microsoft. That's it, that's the rant.
- XML infests everything, ugly and verbose, a parsing hellscape.
- Build and CI tools are a sobbing disaster—MSBuild's a sadistic prank.
- Compiled but still needs a runtime—grow up already.
- DevOps basics like versioning or git hooks? Missing or barely there.
- Took until v7.0 for sane string literals or container smarts—embarrassing.
- Passing auth credentials is a soul-sucking slog through API purgatory.
- Project files are hostile robot scribbles, not human-friendly.
- NuGet's a lawless mess—people package ancient NuGet versions or jQuery
  hacks[^2].
- Debugging performance is like groping in the dark with a spoon.

[^2]:
    Some NuGet packages are just jQuery wrappers because .NET's web tools were
    a disaster for years.

---

## Python

- Writing it's a dream, but packaging's a horror movie. Good fucking luck
  shipping virtually anything.
- No typing means random crashes sneak up like assassins.
- Typing's fake anyway—static-only, no runtime safety, totally pointless.
- `requirements.txt` is a fossil that won't die despite better tools.
- Too many packaging options—pip, poetry, conda—and endless flame wars over
  them.
- Containers turn into symlink soup with system package chaos.
- Dependency isolation's a fantasy; three packages in, and you're in conflict
  hell.
- Releases outpace the ecosystem, so half your packages break constantly.
- Distributing means janky compiles or lugging the whole runtime along. Couldn't they have learned from Java/Perl that people need a single file to double click? Only other devs are willing to navigate Pyenv or virtualenv to run your project.
- `setup.py` runs random code; PyPI's a minefield of mystery downloads[^3].
- Slow as molasses—don't even try heavy lifting.
- Pip, PipX, bootstrapping—every step's a catastrophe.
- Conda vs. Anaconda vs. Mamba—why so many forks of the same mess?
- Git-ignorant packaging—test locally by publishing and crossing your fingers.
- Config splits across TOML, YAML, ini—whatever devs felt like that day.
- Pip lets people package apps, datasets, even a full Julia runtime—insanity.
- Juggling Python versions is agony—system manager or not, it's fragile.
- GIL chokes multithreading into a sad, single-threaded whimper.

[^3]:
    PyPI packages often skip dependency metadata, forcing `setup.py` to run
    unknown code just to install.

---

## Nix

- My favorite language, I hate it.
- Confusing distinction of Nix/NixOS/NixPkgs as well as CppNix, NixLang, and
  other confusing terminology used for tug-of-war. Now with derivatives to fuck
  you up.
- Docs are perpetually outdated—dig through code or weep.
- NixLang's a bespoke oddity—because no normal language would do?
- Performance is a slog; RIIR might've died quietly somewhere.
- Post-install patches are a rickety duct-tape job.
- Wrapping overlapping tools like Python is pure masochism.
- Steep learning curve mocks newcomers with cryptic errors.
- Bash and Perl everywhere, including places you don't want to see them in.
- Packaging is a pain in the ass that never goes way. Some languages suck, other
  suck more.

---

## C

- Memory management—hope you like leaks and crashes.
- Pointer math—segfaults are your new best friend.
- Package management? What's that?
- Error handling's `if (return_code != 0)` until your eyes bleed.
- Threading's a horror show—race conditions everywhere.
- Security holes you could drive a truck through[^4].
- Simple tasks demand endless boilerplate pain.
- Undefined behavior lurks like a silent killer.

[^4]: Buffer overflows, dangling pointers. Need I go on?

---

## Lisp

- Dialects out the wazoo—too many flavors to count.
- It was awesome - in 1979.
- Parentheses overload—code looks like a bracket storm.
- Oh, single quote overload too. Who thought `''''')))))` belonged in code?
- Common Lisp, Scheme, Racket, Clojure—pick your poison.
- Code-as-data's neat until macro debugging breaks you.
- Academic darling, real-world skeptic—fragile in practice.
- Performance swings wildly by dialect and use.
- Ecosystem's a ghost town—abandoned libs aplenty.
- Community's tiny and smug—help's hard to find.

---

## Go

- Simple, sure, but opinionated to a fault.
- `if err != nil` everywhere—error handling's a grind.
- No generics until recently—copy-paste galore.
- Dep management was a vendoring mess pre-modules.
- Tooling's decent—go fmt, go vet, etc.—but coverage sucks.
- Goroutines rock, but channels trip you up fast.
- Stdlib's solid but skimps on basics like date handling.
- Community's preachy—dare to disagree, get flamed.
- Fast, not fastest—hype oversells it.
- Cross-compiling's easy but quirks bite back.

---

## Ruby

- Syntax so sugary it rots your brain; blocks and end everywhere like it's 1995.
- Performance crawls like it's allergic to speed; enjoy your glacial app boots.
- Gems are a dependency hellscape—half are abandoned, the other half are bloated.
- "Everything's an object" sounds cool until you’re debugging nil explosions.
- Rails cultists swear it’s magic, but it’s just duct tape on a leaky pipe.
- Homebrew's sloth? Ruby's fault—thanks for the assist, Matz.
- [Wat](https://www.destroyallsoftware.com/talks/wat)

---

## Flatpak 

- Solves a genuine problem, but ends up bloating your disk.
- Why do I have six different copies of the GNOME runtime installed? I use KDE...
- If devs don't keep up with dependencies, then every time you update you get 50 warnings about outdated packaged using outdated dependencies. Maybe tell the dev that first?
- At least it's not Snap.

---

There. Next time someone asks why I despise these, I'll just shove this in their
face.
