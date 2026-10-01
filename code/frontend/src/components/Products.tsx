import { T, useList } from "../editable";

export default function Products() {
  const items = useList<{ name: string; note: string }>("products.items");
  return (
    <section id="products" className="bg-ground text-ink">
      <div className="mx-auto max-w-page px-[var(--gutter)] py-20 md:py-28">
        <T k="products.heading" as="h2" className="font-display font-[var(--weight-display)] tracking-[var(--tracking-display)] text-[clamp(28px,3.5vw,44px)]" />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4">
          {items.map((item, i) => (
            <article
              key={i}
              className={`relative overflow-hidden rounded-[var(--radius)] bg-surface border border-line p-8 ${i === 0 ? "md:col-span-2 md:row-span-2 flex flex-col justify-end min-h-[280px]" : "min-h-[160px] flex flex-col justify-end"}`}
            >
              {i === 0 && (
                <svg
                  className="pointer-events-none absolute right-6 top-6 h-32 w-32 md:h-44 md:w-44 opacity-90"
                  viewBox="0 0 100 100"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect x="20" y="8" width="60" height="84" rx="14" fill="var(--ground)" stroke="var(--line)" strokeWidth="1.5" />
                  <circle cx="50" cy="50" r="16" fill="none" stroke="var(--accent)" strokeWidth="3" />
                  <circle cx="50" cy="50" r="5" fill="var(--accent)" />
                  <line x1="50" y1="34" x2="50" y2="29" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" />
                </svg>
              )}
              <T k={`products.items.${i}.name`} as="h3" className="relative font-display font-[var(--weight-display)] text-xl" />
              <T k={`products.items.${i}.note`} as="p" className="relative mt-2 text-ink-soft max-w-[36ch]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
