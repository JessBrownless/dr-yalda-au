import type { MDXComponents } from "mdx/types";

/**
 * Brand-aware MDX element overrides for Journal posts.
 *
 * Rendering approach: `next-mdx-remote/rsc` (see app/journal/[slug]/page.tsx) —
 * these components are passed to `compileMDX` rather than picked up implicitly,
 * but the file lives at the project root per Next.js App Router convention and
 * also exports `useMDXComponents` so `@next/mdx` would resolve it too.
 *
 * Every element maps to an existing typography utility from globals.css. Prose
 * lists compose the `.body-serif` type utility with standard Tailwind layout
 * utilities (markers + indent + rhythm) — that is layout, not a new type token.
 */

export const journalMdxComponents: MDXComponents = {
  // Top-margin rhythm for headings is set on the prose wrapper (see the body
  // container in app/journal/[slug]/page.tsx) via `[&>h2]`/`[&>h3]` selectors.
  // That's deliberate: the .heading-* utilities declare `margin: 0` and, being
  // defined after Tailwind's utilities layer, would override an `mt-*` placed
  // here. The parent's child selector has higher specificity, so it wins.
  h2: ({ children, ...props }) => (
    <h2 className="heading-lg" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="heading-md" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }) => (
    <p className="body-serif mt-6" {...props}>
      {children}
    </p>
  ),
  a: ({ children, ...props }) => (
    <a
      className="text-brand-black underline underline-offset-4 decoration-from-font transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-black/40 rounded-sm"
      {...props}
    >
      {children}
    </a>
  ),
  ul: ({ children, ...props }) => (
    <ul className="body-serif mt-6 list-disc list-outside pl-6 space-y-2 marker:text-brand-black/50" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="body-serif mt-6 list-decimal list-outside pl-6 space-y-2 marker:text-brand-black/50" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="pl-1.5 leading-relaxed" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote className="blockquote my-10 text-brand-black" {...props}>
      {children}
    </blockquote>
  ),
  hr: (props) => <hr className="my-12 border-0 border-t border-brand-line" {...props} />,
  // alt = accessibility text only. A visible caption is opt-in via the markdown
  // image title: ![alt](src "this becomes the caption"). No title → no caption.
  img: ({ src, alt, title, ...props }) => (
    <figure className="my-10">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={typeof src === "string" ? src : undefined}
        alt={alt ?? ""}
        loading="lazy"
        className="w-full h-auto"
        {...props}
      />
      {title ? (
        <figcaption className="label-02 mt-3 text-brand-black/60">{title}</figcaption>
      ) : null}
    </figure>
  ),
};

// @next/mdx convention hook — kept so either MDX integration resolves this file.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { ...journalMdxComponents, ...components };
}
