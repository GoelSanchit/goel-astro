export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "918938903941";
export const UPI_ID = process.env.NEXT_PUBLIC_UPI_ID || "8938903941-3@ybl";
export const BRAND_NAME = process.env.NEXT_PUBLIC_BRAND_NAME || "Goel Astro";
export const EMAIL = process.env.NEXT_PUBLIC_EMAIL || "contact@goelastro.com";
export const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "";

export interface Service {
  id: string;
  title: string;
  titleHi: string;
  description: string;
  price: number;
  icon: string;
  badge?: string;
}

export const SERVICES: Service[] = [
  {
    id: "full-kundli",
    title: "Full Kundli Analysis",
    titleHi: "सम्पूर्ण कुंडली विश्लेषण",
    description:
      "Complete birth chart analysis with 3-year prediction — planets, dasha, transits, remedies, and a detailed roadmap for the years ahead.",
    price: 2100,
    icon: "Sun",
    badge: "Most Popular",
  },
  {
    id: "1-question",
    title: "Answer 1 Question",
    titleHi: "1 प्रश्न का उत्तर",
    description:
      "Have one burning question? Get a focused, detailed answer based on your birth chart analysis.",
    price: 500,
    icon: "HelpCircle",
  },
  {
    id: "2-questions",
    title: "Answer 2 Questions",
    titleHi: "2 प्रश्नों का उत्तर",
    description:
      "Get detailed answers to any 2 specific questions based on your birth chart and planetary positions.",
    price: 1100,
    icon: "MessagesSquare",
  },
  {
    id: "3-questions",
    title: "Answer 3 Questions",
    titleHi: "3 प्रश्नों का उत्तर",
    description:
      "Get detailed answers to any 3 questions about your life — career, relationships, health, finances, or anything on your mind.",
    price: 1500,
    icon: "MessageCircleQuestion",
  },
  {
    id: "marriage",
    title: "Marriage Compatibility",
    titleHi: "कुंडली मिलान",
    description:
      "Ashtakoot gun milan with a detailed compatibility report — complete guidance for marriage decisions.",
    price: 500,
    icon: "Heart",
  },
  {
    id: "career",
    title: "Career Guidance",
    titleHi: "करियर मार्गदर्शन",
    description:
      "Career path guidance based on planetary positions — job, business, or career change decisions made clear.",
    price: 750,
    icon: "Briefcase",
  },
  {
    id: "annual",
    title: "Annual Prediction",
    titleHi: "वार्षिक भविष्यफल",
    description:
      "Full year prediction report — health, wealth, relationships, and career all covered in one comprehensive report.",
    price: 750,
    icon: "CalendarDays",
  },
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
    name: "Priya S.",
    location: "Delhi",
    rating: 5,
    text: "The kundli analysis was so detailed, I was truly amazed. The career predictions turned out to be spot on. Thank you so much!",
    service: "Kundli Analysis",
  },
  {
    name: "Rajesh K.",
    location: "Mumbai",
    rating: 5,
    text: "Got kundli matching done for marriage. The report was very detailed and they also suggested remedies. Everything is going smoothly now.",
    service: "Marriage Compatibility",
  },
  {
    name: "Ankita M.",
    location: "Jaipur",
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
    text: "I ordered the annual prediction report. The predictions were largely accurate. I will definitely get one for next year too.",
    service: "Annual Prediction",
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
      "Absolutely! All your personal details and birth chart information are kept completely confidential. We do not share your data with anyone.",
  },
];
