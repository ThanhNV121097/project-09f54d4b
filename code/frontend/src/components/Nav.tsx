import { T, useList } from "../editable";

export default function Nav() {
  const links = useList<{ label: string; href: string }>("nav.links");
  return (
    <header className="sticky top-0 z-10 bg-dark border-b border-line-dark">
      <div className="mx-auto max-w-page px-[var(--gutter)] h-16 flex items-center justify-between">
        <T k="site.name" as="a" href="/" className="font-display font-[var(--weight-display)] tracking-[var(--tracking-display)] text-dark-ink" />
        <nav className="flex items-center gap-8 text-sm text-dark-ink-soft">
          {links.map((l, i) => (
            <T key={i} k={`nav.links.${i}.label`} as="a" href={l.href} className="hover:text-dark-ink transition-colors duration-[var(--duration-fast)]" />
          ))}
          <T
            k="nav.cta.label"
            as="a"
            href="#visit"
            className="rounded-[var(--radius-pill)] bg-accent px-4 py-2 text-accent-ink text-sm"
          />
        </nav>
      </div>
    </header>
  );
}
