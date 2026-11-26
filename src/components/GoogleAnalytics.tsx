import Script from "next/script";

export const GA_MEASUREMENT_ID = "G-R7HP3G9YZP";

export default function GoogleAnalytics() {
  return (
    <>
      {/* The 180 KB tag library loads when the browser is idle. The tiny init
          below still runs early, so events pushed to dataLayer before the
          library arrives are queued, not lost. */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="lazyOnload"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
