// Minimal typing for the GA4 global installed by components/GoogleAnalytics.tsx.
interface Window {
  gtag?: (
    command: "event" | "config" | "js",
    target: string | Date,
    params?: Record<string, unknown>
  ) => void;
}
