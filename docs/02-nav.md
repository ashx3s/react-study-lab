# Challenge: Responsive Navigation Menu

## What You're Building

The `SiteHeader` component already has a working mobile nav toggle using a
plain "Menu" text button. Your job is to make it production-quality: replace
the text with an icon, improve the styling, and make the nav close when a link
is clicked.

This challenge is intentionally open-ended. You're given tasks and hints, not
step-by-step instructions — work it out from the Tailwind and React docs.

---

## Tasks

### 1. Install Iconify and add a hamburger icon

Install the Iconify React package:

```bash
npm install @iconify/react
```

Import the `Icon` component and use it in place of the "Menu" text:

```jsx
import { Icon } from "@iconify/react";
// ...
<Icon icon="mdi:menu" width={24} />
```

When the menu is open, swap to a close icon:

```jsx
<Icon icon={isMenuOpen ? "mdi:close" : "mdi:menu"} width={24} />
```

> **Docs:** [Iconify for React](https://iconify.design/docs/icon-components/react/)
> **Icon search:** [Iconify icon sets](https://icon-sets.iconify.design/)

---

### 2. Style the header

Make the header feel more polished. Some directions to explore:

- Add a subtle drop shadow: `shadow-sm`
- Give the header a background colour that stands out from the page body
- Make the nav links feel interactive — try `transition-colors duration-150`
- Add an `aria-expanded` attribute to the hamburger button that reflects
  `isMenuOpen` — this improves accessibility

> **Docs:** [Tailwind hover, focus, and other states](https://tailwindcss.com/docs/hover-focus-and-other-states)

---

### 3. Close the menu when a nav link is clicked

Right now the mobile menu stays open after the user taps a link. Fix this by
calling `setIsMenuOpen(false)` in an `onClick` on each mobile nav `<Link>`.

Think about whether there is a cleaner way to do this if the nav list grows —
could you map over an array of links instead of repeating the JSX?

---

### 4. Highlight the active page

Use Next.js's `usePathname` hook to get the current URL path, then apply a
different style to the link that matches.

```jsx
"use client";
import { usePathname } from "next/navigation";

const pathname = usePathname();
// pathname will be "/" on the home page and "/gallery" on the gallery page
```

> **Docs:** [usePathname](https://nextjs.org/docs/app/api-reference/functions/use-pathname)

---

## Background: How the Toggle Works

`useState(false)` creates a piece of state that starts as `false`. The
`setIsMenuOpen` function updates it. When state changes, React re-renders the
component with the new value.

```
isMenuOpen = false  →  mobile nav is hidden  (default)
isMenuOpen = true   →  mobile nav is visible (after button click)
```

The button's `onClick` handler flips the value:

```jsx
onClick={() => setIsMenuOpen(!isMenuOpen)}
// !false → true, !true → false — toggles back and forth
```

The mobile nav in the JSX uses a conditional render:

```jsx
{isMenuOpen && <nav>...</nav>}
```

`&&` is a short-circuit: if the left side is falsy, nothing renders. If it's
truthy, the right side renders.

> **Docs:** [Conditional rendering](https://react.dev/learn/conditional-rendering)
> **Docs:** [useState](https://react.dev/reference/react/useState)

---

## Check Your Work

- [ ] A hamburger icon appears on narrow screens instead of the text "Menu"
- [ ] The icon changes to a close icon when the menu is open
- [ ] The nav closes when a mobile link is clicked
- [ ] The currently active page link looks different from the others
- [ ] The desktop nav still works on wider screens
