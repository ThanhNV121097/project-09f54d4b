import { T } from "../editable";

export default function Authentic() {
  return (
    <section id="authentic" className="bg-dark text-dark-ink">
      <div className="mx-auto max-w-page px-[var(--gutter)] py-24 md:py-32">
        <T
          k="authentic.heading"
          as="h2"
          className="font-display font-[var(--weight-display)] tracking-[var(--tracking-display)] text-[clamp(28px,4vw,52px)] max-w-[16ch]"
        />
        <T k="authentic.body" as="p" className="mt-6 text-lg text-dark-ink-soft max-w-[48ch]" />
      </div>
    </section>
  );
}
