import { T } from "../editable";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-dark text-dark-ink">
      <div className="pointer-events-none absolute -right-[10vw] top-1/2 h-[70vw] max-h-[720px] w-[70vw] max-w-[720px] -translate-y-1/2 rounded-full ring" />
      <div className="relative mx-auto max-w-page px-[var(--gutter)] pt-24 pb-32 md:pt-32 md:pb-40">
        <T
          k="hero.headline"
          as="h1"
          className="font-display font-[var(--weight-display)] tracking-[var(--tracking-display)] text-[clamp(40px,6.5vw,88px)] leading-[1.03] max-w-[12ch]"
        />
        <T k="hero.sub" as="p" className="mt-6 text-lg text-dark-ink-soft max-w-[42ch]" />
        <T
          k="hero.cta.label"
          as="a"
          href="#products"
          className="mt-10 inline-block rounded-[var(--radius-pill)] bg-accent px-7 py-3.5 text-accent-ink"
        />
      </div>
    </section>
  );
}
