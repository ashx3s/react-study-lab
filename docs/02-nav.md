# Challenge 02: Responsive Navigation Menu

> **Best for:** Students comfortable with components who want to explore
> Tailwind's responsive system and practise working with state independently.

---

## What You're Building

The `SiteHeader` component has a working mobile nav toggle, but it's unfinished:
the button says "Menu" instead of showing an icon, and the nav doesn't close
when a link is clicked.

Your job is to make it production-quality.

Open `app/components/SiteHeader.js` and read through it before you change anything.

---

## A note on format

This challenge gives you tasks and hints — not step-by-step instructions.
That's intentional. You have the tools now: use the task list, read the docs,
and work it out. This is what real development feels like.

---

## Tasks

### 1. Replace the "Menu" text with a hamburger icon

Install the Iconify React package:

```bash
npm install @iconify/react
```

Then find the right icon to use in your button.

> **Docs:** [Iconify for React](https://iconify.design/docs/icon-components/react/)
> **Find an icon:** [Iconify icon search](https://icon-sets.iconify.design/)

When the menu is open the icon should change to a close/X icon.
Hint: use a ternary (`condition ? valueA : valueB`) on the `icon` prop.

---

### 2. Style the header

The current header is functional but plain. Make it more polished using Tailwind.
Some directions to explore:

- A subtle drop shadow: `shadow-sm`
- A background colour that gives the header some separation from the page
- Link hover transitions: `transition-colors duration-150`
- Add `aria-expanded={isMenuOpen}` to the hamburger button for accessibility

> **Docs:** [Tailwind hover, focus, and other states](https://tailwindcss.com/docs/hover-focus-and-other-states)

---

### 3. Close the menu when a nav link is clicked

On mobile, the menu stays open after a link is tapped. Fix this by calling
`setIsMenuOpen(false)` in an `onClick` on each mobile `<Link>`.

Once it works, consider whether there's a cleaner pattern — could you map over
an array of `{ href, label }` objects instead of repeating the JSX for each link?

---

### 4. Highlight the active page link

Use Next.js's `usePathname` hook to get the current URL, then apply a different
style to the link that matches.

> **Docs:** [usePathname](https://nextjs.org/docs/app/api-reference/functions/use-pathname)

---

## Background: How the toggle works

`useState(false)` creates a piece of state that starts as `false`. When state
changes, React re-renders the component with the new value.

```
isMenuOpen = false  →  mobile nav is hidden  (default)
isMenuOpen = true   →  mobile nav is visible (after button click)
```

The button flips the value with the `!` (not) operator:

```jsx
onClick={() => setIsMenuOpen(!isMenuOpen)}
// !false → true, !true → false
```

The mobile nav uses a short-circuit render:

```jsx
{isMenuOpen && <nav>...</nav>}
```

If `isMenuOpen` is falsy, nothing renders. If it's truthy, the nav renders.

> **Docs:** [Conditional rendering](https://react.dev/learn/conditional-rendering)
> **Docs:** [useState](https://react.dev/reference/react/useState)

---

## Check Your Work

- [ ] A hamburger icon appears on narrow screens instead of the text "Menu"
- [ ] The icon changes to a close icon when the menu is open
- [ ] The nav closes when a mobile link is clicked
- [ ] The currently active page link looks different from the others
- [ ] The desktop nav still works on wider screens
