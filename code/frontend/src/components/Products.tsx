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
              className={`rounded-[var(--radius)] bg-surface border border-line p-8 ${i === 0 ? "md:col-span-2 md:row-span-2 flex flex-col justify-end min-h-[280px]" : "min-h-[160px] flex flex-col justify-end"}`}
            >
              <T k={`products.items.${i}.name`} as="h3" className="font-display font-[var(--weight-display)] text-xl" />
              <T k={`products.items.${i}.note`} as="p" className="mt-2 text-ink-soft max-w-[36ch]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
