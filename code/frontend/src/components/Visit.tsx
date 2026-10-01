import { T } from "../editable";

export default function Visit() {
  return (
    <footer id="visit" className="bg-ground text-ink border-t border-line">
      <div className="mx-auto max-w-page px-[var(--gutter)] py-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <T k="site.name" as="span" className="font-display font-[var(--weight-display)] text-lg" />
        <T k="footer.line" as="span" className="text-ink-soft" />
      </div>
    </footer>
  );
}
