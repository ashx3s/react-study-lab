# Challenge 06: Code Swap — Pair Up and Open a PR

> **Everyone does this one.** This is the final challenge. You'll pair up with
> someone who worked on a different part of the project, walk through each
> other's code, and contribute something to their repo using a real GitHub
> pull request workflow.

---

## Why This Matters

On a real team you rarely work alone on a codebase. You read other people's
code, add to it without breaking what's there, and use pull requests so your
changes can be reviewed before they're merged.

This challenge is about practising exactly that.

---

## Step 1: Find a Partner

Pair with someone who worked on a **different** challenge than you did.

Some combinations that work well:

| You worked on…    | partner worked on...                |
| ----------------- | ----------------------------------- |
| Home page (01)    | Nav (02) or Gallery (03)            |
| Nav (02)          | Home page (01) or Gallery item (04) |
| Gallery (03)      | Home page (01) or Refactoring (05)  |
| Gallery item (04) | Gallery (03) or Nav (02)            |
| Refactoring (05)  | Gallery (03) or Gallery item (04)   |

The goal is that each of you has something to show that the other person
doesn't have yet.

---

## Step 2: Walk Each Other Through Your Work

Before touching any code, each person takes 5–10 minutes to show their
partner what they built.

As you walk through your code, explain:

- What file(s) you changed and why
- How any state works (if you used `useState`)
- Anything that surprised you or took a while to figure out

As you listen, look for:

- A component or feature you could use in your own project
- Something you don't fully understand and want to ask about

> You're not just showing off your work — you're helping your partner
> understand it well enough to use it. Teaching is one of the best ways
> to check your own understanding.

---

## Step 3: Decide What to Contribute

Each person picks one thing to add to their partner's repo. Keep it focused —
one component, one feature, one page. You're not rebuilding their project.

Some ideas based on what you each built:

- **Nav → Home page repo:** bring over the finished `SiteHeader` with the
  hamburger toggle working correctly
- **Home page → Gallery repo:** add or improve the home page content and
  footer text
- **Gallery → Nav repo:** add the gallery page so they have more than one
  route
- **Gallery item → Gallery repo:** add the `[slug]` dynamic route and detail
  page
- **Refactoring → Gallery repo:** open a PR that cleans up the gallery page
  without changing behaviour

If none of those fit, talk to your partner and agree on something concrete.
Vague plans ("I'll just improve stuff") don't work well in PRs.

---

## Step 4: Fork and Clone Their Repo

You'll contribute by forking your partner's repo, making changes in your fork,
and opening a pull request back to their original repo. This is the standard
open-source contribution workflow.

**On GitHub:**

1. Go to your partner's repository on GitHub
2. Click the **Fork** button (top right) — this creates your own copy of their
   repo under your account
3. After forking, click the **Code** button on your fork and copy the clone URL

**In your terminal:**

```bash
# Clone your fork to your computer
git clone https://github.com/YOUR-USERNAME/their-repo-name.git

# Move into the project
cd their-repo-name/react-study-lab

# Install dependencies
npm install
```

> Clone your **fork** (your copy), not their original. Changes you push go to
> your fork, and you'll open a PR from your fork to their repo.

---

## Step 5: Create a Branch

Never work directly on `main`. Create a branch named for the feature you're
adding.

```bash
# Make sure you're starting from the latest main
git checkout main
git pull

# Create and switch to a new branch
git checkout -b add-site-header
```

Use a short, descriptive branch name: `add-gallery-page`, `fix-nav-links`,
`add-dynamic-route`.

---

## Step 6: Make Your Changes

Now add the code you agreed to contribute.

A few things to keep in mind:

- Read the files you're changing before you edit them — don't overwrite
  something your partner already built
- Match the code style of the files you're editing (same indent, same
  naming patterns)
- Test your changes by running `npm run dev` and checking the affected pages

If you run into a conflict — for example, the file you want to add already
exists with different content — talk to your partner rather than overwriting
their work. Agree on how to merge the two versions.

---

## Step 7: Commit and Push

```bash
# Stage the files you changed
git add app/components/SiteHeader.js
# (add each file individually rather than git add . — it keeps things clear)

# Write a commit message that explains what you did
git commit -m "Add responsive SiteHeader with hamburger toggle"

# Push to your fork
git push origin add-site-header
```

After pushing, GitHub will print a URL to open a pull request. You can
click it, or go to your fork on GitHub — you'll see a banner prompting you
to open a PR.

---

## Step 8: Open the Pull Request

On GitHub, open a PR from your branch on your fork to the `main` branch of
your partner's original repo.

Fill in the PR description with:

- **What you added** — one sentence
- **How to test it** — what should your partner look at to confirm it works?
- **Anything to watch out for** — import path differences, missing dependencies

Example:

> Added the SiteHeader component with mobile hamburger toggle from my own
> project. To test: run `npm run dev` and check that the header shows on
> all pages. Note: this installs `@iconify/react` which is not in the
> original `package.json`.

---

## Step 9: Review and Merge Your Partner's PR

While your partner is reviewing yours, you're reviewing theirs.

Look at the **Files changed** tab in GitHub. For each change, ask:

- Does this do what the description says it does?
- Does it break anything that was already there?
- Is there anything confusing that you'd want them to explain?

If it looks good, click **Merge pull request**.

If something needs fixing, leave a comment on the specific line. Your partner
can push more commits to the same branch and the PR will update automatically.

> **Docs:**
> [About pull requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
> [Reviewing changes in pull requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)

---

## Step 10: Pull the Merged Code Into Your Repo

After your partner merges your PR, update your own copy:

```bash
# In your own repo (not the fork)
git checkout main
git pull
npm run dev
```

Check that the new code works alongside what you already built.

---

## Check Your Work

- [ ] You walked through your code with your partner and explained how it works
- [ ] You agreed on a specific, concrete thing to contribute
- [ ] You forked their repo and cloned your fork
- [ ] You made your changes on a named branch (not `main`)
- [ ] You opened a PR with a clear description of what you added
- [ ] You reviewed your partner's PR and either approved or left feedback
- [ ] After merging, you pulled the changes and confirmed the project still runs

---

## If You're Stuck on Git

These are the commands you'll use most. When in doubt, run `git status` — it
almost always tells you what to do next.

```bash
git status             # see what's changed and what's staged
git log --oneline      # see recent commits
git diff               # see unstaged changes in detail
git checkout main      # switch back to main
```

> **Docs:**
> [Git basics — recording changes](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository)
> [GitHub: forking a repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)
