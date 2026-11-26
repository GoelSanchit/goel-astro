import Link from "next/link";

// Custom 404. Next.js adds <meta name="robots" content="noindex"> to this
// page; the layout no longer adds a canonical or index directive that would
// contradict it.
export default function NotFound() {
  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center">
      <div className="max-w-xl mx-auto px-4 text-center">
        <p className="text-gold/70 text-sm mb-3">404</p>
        <h1 className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] font-bold mb-4">
          <span className="gold-gradient-text">Page not found</span>
          <span
            lang="hi"
            className="block mt-3 text-white/50 text-lg font-normal font-[family-name:var(--font-body)]"
          >
            यह पेज उपलब्ध नहीं है
          </span>
        </h1>
        <p className="text-white/50 mb-8">
          The page you were looking for doesn&apos;t exist or has moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="bg-gold text-navy font-semibold px-6 py-3 rounded-full hover:bg-gold-light transition-colors"
          >
            Go to the homepage
          </Link>
          <Link
            href="/book"
            className="border border-white/20 text-white px-6 py-3 rounded-full hover:border-gold/50 hover:text-gold transition-colors"
          >
            Book a consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
