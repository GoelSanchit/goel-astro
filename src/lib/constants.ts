export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "918938903941";
export const UPI_ID = process.env.NEXT_PUBLIC_UPI_ID || "9837827783@ibl";
export const BRAND_NAME = process.env.NEXT_PUBLIC_BRAND_NAME || "Goel Astro";
export const EMAIL = "sanjay05amr@gmail.com";
export const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "";
export const SITE_URL = "https://goelastro.com";

export interface Service {
  id: string;
  title: string;
  titleHi: string;
  description: string;
  price: number;
  icon: string;
  badge?: string;
  /** Dedicated service page with full details. */
  page: string;
  pageLinkLabel: string;
}

export const SERVICES: Service[] = [
  {
    id: "full-kundli",
    title: "Full Kundli Analysis (3 Years)",
    titleHi: "सम्पूर्ण कुंडली विश्लेषण (3 वर्ष)",
    description:
      "Complete birth chart analysis with a detailed 3-year prediction — planets, dasha, transits, and remedies, year by year, so you know what lies ahead and how to prepare for it.",
    price: 2100,
    icon: "Sun",
    page: "/kundli-analysis",
    pageLinkLabel: "About kundli analysis",
    badge: "Most Popular",
  },
  {
    id: "kundli-1-year",
    title: "1-Year Kundli Analysis",
    titleHi: "1 वर्ष का कुंडली विश्लेषण",
    description:
      "Birth chart analysis with a 1-year prediction — planets, dasha, transits, and remedies for the year ahead.",
    price: 1000,
    icon: "CalendarDays",
    page: "/kundli-analysis",
    pageLinkLabel: "About kundli analysis",
  },
  {
    id: "marriage",
    title: "Marriage Compatibility",
    titleHi: "कुंडली मिलान",
    description:
      "Ashtakoot gun milan with a detailed compatibility report — complete guidance for marriage decisions.",
    price: 500,
    icon: "Heart",
    page: "/kundli-milan",
    pageLinkLabel: "How kundli milan works",
  },
  {
    id: "career",
    title: "Career Guidance",
    titleHi: "करियर मार्गदर्शन",
    description:
      "Career path guidance based on planetary positions — job, business, or career change decisions made clear.",
    price: 750,
    icon: "Briefcase",
    page: "/career-astrology",
    pageLinkLabel: "About career astrology",
  },
  {
    id: "gemstone",
    title: "Gemstone Consultation",
    titleHi: "रत्न परामर्श",
    description:
      "Find out which gemstone suits your birth chart — blue sapphire, emerald, ruby, or others — and which stones to avoid, before you spend money on one.",
    price: 300,
    icon: "Gem",
    page: "/gemstone-consultation",
    pageLinkLabel: "About gemstone consultation",
  },
  {
    id: "kundli-bw",
    title: "Janam Kundli (Black & White)",
    titleHi: "जन्म कुंडली (श्वेत-श्याम)",
    description:
      "Your complete janam kundli prepared in black and white — lagna chart, navamsa, planetary positions, and dasha details.",
    price: 1000,
    icon: "ScrollText",
    page: "/janam-kundli",
    pageLinkLabel: "What is in a janam kundli",
  },
  {
    id: "kundli-colour",
    title: "Janam Kundli (Coloured)",
    titleHi: "जन्म कुंडली (रंगीन)",
    description:
      "Your complete janam kundli prepared in full colour — lagna chart, navamsa, planetary positions, and dasha details in a beautifully presented format.",
    price: 1500,
    icon: "Palette",
    page: "/janam-kundli",
    pageLinkLabel: "What is in a janam kundli",
  },
];

// Dedicated service pages, in the order they appear in navigation.
export const SERVICE_PAGES = [
  { href: "/kundli-analysis", label: "Kundli Analysis", labelHi: "कुंडली विश्लेषण" },
  { href: "/janam-kundli", label: "Janam Kundli", labelHi: "जन्म कुंडली" },
  { href: "/kundli-milan", label: "Kundli Milan", labelHi: "कुंडली मिलान" },
  { href: "/career-astrology", label: "Career Astrology", labelHi: "करियर ज्योतिष" },
  { href: "/gemstone-consultation", label: "Gemstone Consultation", labelHi: "रत्न परामर्श" },
  { href: "/astrologer-in-meerut", label: "Astrologer in Meerut", labelHi: "मेरठ में ज्योतिषी" },
];

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Manoj Kansal",
    location: "Meerut",
    rating: 5,
    text: "The kundli analysis was so detailed, I was truly amazed. The career predictions turned out to be spot on. Thank you so much!",
    service: "Kundli Analysis",
  },
  {
    name: "Kalpana",
    location: "Noida",
    rating: 5,
    text: "Got kundli matching done for marriage. The report was very detailed and they also suggested remedies. Everything is going smoothly now.",
    service: "Marriage Compatibility",
  },
  {
    name: "Sagar",
    location: "Jamod, Maharashtra",
    rating: 5,
    text: "I was very confused about my career — job or business? They analysed my planetary positions and showed me the right path. My business is doing great today.",
    service: "Career Guidance",
  },
  {
    name: "Sunil P.",
    location: "Lucknow",
    rating: 4,
    text: "After the gemstone consultation, I started wearing a blue sapphire — saw noticeable changes within 3 months. Very effective advice.",
    service: "Gem Stone Consultation",
  },
  {
    name: "Meena D.",
    location: "Bangalore",
    rating: 5,
    text: "I ordered the 1-year kundli analysis. The predictions were largely accurate. I will definitely get one for next year too.",
    service: "1-Year Kundli Analysis",
  },
  {
    name: "Amit G.",
    location: "Pune",
    rating: 5,
    text: "Never expected such excellent service over WhatsApp. Easy payment, detailed report, and very knowledgeable consultation. Highly recommended!",
    service: "Kundli Analysis",
  },
];

export interface FAQ {
  question: string;
  answer: string;
}

export const FAQS: FAQ[] = [
  {
    question: "What details are required for a consultation?",
    answer:
      "You will need to provide your full name, date of birth, time of birth, and place of birth. If you don't remember the exact birth time, we can still do a partial analysis, but accurate timing gives better results.",
  },
  {
    question: "How do I make the payment?",
    answer:
      "After filling the booking form, you will see the UPI payment option. You can pay using Google Pay, PhonePe, Paytm, or any UPI app. Simply scan the QR code or pay directly to the UPI ID.",
  },
  {
    question: "How long does it take to receive the report?",
    answer:
      "After payment confirmation, your detailed report will be sent via WhatsApp within 12–24 hours. For marriage compatibility reports, it may take 24–48 hours as they require more in-depth analysis.",
  },
  {
    question: "Is the consultation online or over a call?",
    answer:
      "We primarily provide a detailed written report delivered via WhatsApp. If you prefer a phone consultation, you can message us on WhatsApp to book a call session (additional charges may apply).",
  },
  {
    question: "What is the refund policy?",
    answer:
      "If for any reason we are unable to provide the consultation, you will receive a full refund. However, once the report has been delivered, refunds are not applicable. We guarantee the quality of our service.",
  },
  {
    question: "Is my personal information kept safe?",
    answer:
      "Yes. Your personal and birth details are used only to prepare your report and contact you about your booking. They are never sold or shared for marketing. We do not ask for Aadhaar, bank or card details. Our Privacy Policy (goelastro.com/privacy) explains where the details are stored and how to have them deleted.",
  },
];
