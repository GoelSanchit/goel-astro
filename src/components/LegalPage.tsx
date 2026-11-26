import { BRAND_NAME } from "@/lib/constants";

interface LegalPageProps {
  title: string;
  titleHi: string;
  updated: string;
  children: React.ReactNode;
}

export default function LegalPage({ title, titleHi, updated, children }: LegalPageProps) {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <article className="max-w-3xl mx-auto px-4">
        <header className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] font-bold mb-3">
            <span className="gold-gradient-text">{title}</span>
            <span
              lang="hi"
              className="block mt-3 text-white/50 text-lg font-normal font-[family-name:var(--font-body)]"
            >
              {titleHi}
            </span>
          </h1>
          <p className="text-white/40 text-sm">
            {BRAND_NAME} · Last updated {updated}
          </p>
        </header>
        <div className="prose-page card-bg p-6 sm:p-8">{children}</div>
      </article>
    </div>
  );
}
