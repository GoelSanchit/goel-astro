interface SectionHeadingProps {
  /** Hindi heading, shown large in gold. */
  hi: string;
  /** English line, shown beneath it. Part of the same heading for search engines. */
  en: string;
  align?: "center" | "left";
  className?: string;
}

// Bilingual section heading. The English line lives inside the <h2> (not a
// separate <p>) so the heading carries the English keywords too.
export default function SectionHeading({
  hi,
  en,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  return (
    <h2
      className={`text-3xl sm:text-4xl font-[family-name:var(--font-heading)] font-bold ${
        align === "center" ? "text-center" : ""
      } ${className}`}
    >
      <span lang="hi" className="gold-gradient-text">
        {hi}
      </span>
      <span className="sr-only"> — </span>
      <span className="block mt-3 text-white/50 text-lg font-normal font-[family-name:var(--font-body)]">
        {en}
      </span>
    </h2>
  );
}
