---
title: "C"
category: "shit"
tags: ["c", "systems-programming", "memory", "performance", "tooling"]
dateAdded: 2025-10-02
status: "active"
---

## Overview

C is a foundational, general-purpose programming language that has shaped the
world of computing. It offers low-level access to memory and hardware, making it
the language of choice for operating systems, embedded systems, and
performance-critical applications. However, C is infamous for its lack of safety
features, manual memory management, and the sheer number of ways things can go
catastrophically wrong.

## Why is it shit?

- Memory management - hope you like leaks and crashes.
- Pointer math - segfaults are your new best friend.
- Package management? What's that?
- Error handling's `if (return_code != 0)` until your eyes bleed.
- Threading's a horror show, race conditions are _everywhere_.
- Security holes you could drive a truck through[^1].
- Simple tasks demand endless boilerplate pain.
- Undefined behavior lurks like a silent killer.

## Examples

### Example 1: Memory Management Hell

```c
int *arr = malloc(10 * sizeof(int));
// ... use arr ...
free(arr);
// Use after free? Welcome to undefined behavior!
```

### Example 2: Pointer Math

```c
int arr[5] = {1, 2, 3, 4, 5};
int *p = arr;
p += 10; // out-of-bounds, segfault teehee
```

### Example 3: Error Handling

```c
FILE *f = fopen("data.txt", "r");
if (!f) {
    // handle error, or don't, and crash later
}
```

### Example 4: Security Disaster

```c
char buf[8];
strcpy(buf, "this string is way too long for buf"); // buffer overflow!
```

## Verdict

C is a language that gives you all the power and all the rope you need to hang
yourself. It's fast, portable, and everywhere. It is _also_ a minefield of
undefined behavior, memory bugs, and security holes. Use it when you must, but
never forget: C is always ready to betray you.

[^1]: Buffer overflows, dangling pointers. Need I go on?
