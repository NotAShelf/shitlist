# The Lists

![Hate Level](https://img.shields.io/badge/Hate%20Level-11%2F10-red)
![Tech Ruined](https://img.shields.io/badge/Tech%20Ruined-All-orange)
![Build: Failing (by design)](<https://img.shields.io/badge/Build-Failing%20By%20Design-red>)

This is a list of lists to list software that I think should be listed on
various lists. Namely, it is a static site built with Astro for curating and
categorizing various tech opinions and experiences. They are all objectively
correct, of course. You do not get to dispute this.

You may consider this list of lists a _lovingly_[^1] crafted rundown of tech
that's made me want to throw my keyboard out the window, complete with why these
tools and languages deserve a spot in my personal hall of shame. Buckle your
fuckles, because shit will go down.

[^1]: Cough. _**Cough**_

## Adding Entries

You are welcome to add your own entries to the list.

You may add your own entries. In fact, you are encouraged to share your
experiences with the world when you inevitably encounter shitty software.
Computers suck, this is to be expected.

If you'd like to add a new entry, please create a new markdown file in
`src/content/entries/` and fill out the frontmatter with the necessary metadata.

```markdown
---
title: "Your Technology"
tags: ["web", "javascript", "pain"]
dateAdded: yyyy-mm-dd
status: "active" # active, deprecated, archived
---
```

Now you may rant about how much you hate; or occasionally, _very rarely_, about
how much you enjoy the technology.

## Development

Oh so you want to _develop_ this shit? Fine, we'll take your contribution. Do
know that you will need some _horrible_ tooling installed though. `pnpm` is used
to manage Node dependencies in this repository. In the case you weren't aware,
it's shit. Node is shit too.

```bash
# Get dependencies
$ pnpm install

# Spin up a dev server
$ pnpm run dev
```

### Building

If you want to build and deploy this, a build script is provided. Simply run
`pnpm run build` and serve the resulting `dist` directory with a webserver of
your choosing. You can use your browser to navigate to the dist directory for
testing.

```bash
pnpm run build
```

---

There. Next time someone asks why I despise these, I'll just shove this in their
face.
