"use client";

import { useState, useEffect, FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Loader2, AlertCircle, MessageCircle } from "lucide-react";
import { SERVICES, GOOGLE_SCRIPT_URL } from "@/lib/constants";
import { formatPhone, formatPrice, getWhatsAppURL } from "@/lib/utils";

interface FormData {
  name: string;
  phone: string;
  email: string;
  gender: string;
  aadhar: string;
  dob: string;
  birthTime: string;
  birthTimeUnknown: boolean;
  birthPlace: string;
  service: string;
  question: string;
  language: string;
  partnerName: string;
  partnerDob: string;
  partnerBirthTime: string;
  partnerBirthPlace: string;
}

const initialFormData: FormData = {
  name: "",
  phone: "",
  email: "",
  gender: "",
  aadhar: "",
  dob: "",
  birthTime: "",
  birthTimeUnknown: false,
  birthPlace: "",
  service: "",
  question: "",
  language: "Hindi",
  partnerName: "",
  partnerDob: "",
  partnerBirthTime: "",
  partnerBirthPlace: "",
};

export default function BookingForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [form, setForm] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      setForm((prev) => ({ ...prev, service: serviceParam }));
    }
  }, [searchParams]);

  const selectedService = SERVICES.find((s) => s.id === form.service);
  const isMarriage = form.service === "marriage";

  function validate(): boolean {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.phone.trim() || form.phone.length !== 10)
      newErrors.phone = "Please enter a valid 10-digit phone number";
    if (!form.gender) newErrors.gender = "Please select your gender";
    if (!form.dob) newErrors.dob = "Date of birth is required";
    if (!form.birthTime && !form.birthTimeUnknown)
      newErrors.birthTime = "Please enter birth time or select 'Don't know'";
    if (!form.birthPlace.trim()) newErrors.birthPlace = "Place of birth is required";
    if (!form.service) newErrors.service = "Please select a service";

    if (isMarriage) {
      if (!form.partnerName.trim())
        newErrors.partnerName = "Partner's name is required";
      if (!form.partnerDob) newErrors.partnerDob = "Partner's date of birth is required";
      if (!form.partnerBirthPlace.trim())
        newErrors.partnerBirthPlace = "Partner's place of birth is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      const firstErrorKey = Object.keys(newErrors)[0];
      const el = document.querySelector(`[name="${firstErrorKey}"]`);
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
      return false;
    }
    return true;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitError("");

    if (!validate()) return;

    setLoading(true);

    const payload = {
      name: form.name,
      phone: "+91" + form.phone,
      email: form.email,
      gender: form.gender,
      aadhar: form.aadhar,
      dob: form.dob,
      birthTime: form.birthTimeUnknown ? "Unknown" : form.birthTime,
      birthPlace: form.birthPlace,
      service: selectedService?.title || form.service,
      amount: selectedService?.price || 0,
      question: form.question,
      language: form.language,
      partnerName: form.partnerName,
      partnerDob: form.partnerDob,
      partnerBirthTime: form.partnerBirthTime,
      partnerBirthPlace: form.partnerBirthPlace,
    };

    try {
      if (!GOOGLE_SCRIPT_URL) throw new Error("Script URL not configured");

      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // no-cors gives opaque response, so we assume success
      void res;

      const params = new URLSearchParams({
        name: form.name,
        service: selectedService?.title || "",
        serviceHi: selectedService?.titleHi || "",
        amount: String(selectedService?.price || 0),
      });
      router.push(`/thank-you?${params.toString()}`);
    } catch {
      setSubmitError(
        "Something went wrong with your booking. Please book via WhatsApp instead."
      );
      setLoading(false);
    }
  }

  function updateField(field: keyof FormData, value: string | boolean) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  const inputClass =
    "w-full bg-navy-lighter/50 border border-gold/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-colors text-sm";
  const labelClass = "block text-white/70 text-sm mb-1.5 font-medium";
  const errorClass = "text-red-400 text-xs mt-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      {/* Section 1 - Personal Details */}
      <div className="card-bg p-6">
        <h3 className="text-lg font-[family-name:var(--font-heading)] text-gold mb-5">
          व्यक्तिगत विवरण — Personal Details
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className={labelClass}>
              Full Name <span className="text-red-400">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className={inputClass}
              placeholder="Your full name"
              value={form.name}
              onChange={(e) => updateField("name", e.target.value)}
            />
            {errors.name && <p className={errorClass}>{errors.name}</p>}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone Number <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-sm">
                +91
              </span>
              <input
                id="phone"
                name="phone"
                type="tel"
                className={`${inputClass} pl-12`}
                placeholder="9876543210"
                value={form.phone}
                onChange={(e) => updateField("phone", formatPhone(e.target.value))}
                maxLength={10}
              />
            </div>
            {errors.phone && <p className={errorClass}>{errors.phone}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className={labelClass}>
              Email (Optional)
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={inputClass}
              placeholder="your@email.com"
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
            />
          </div>

          {/* Gender */}
          <div>
            <label className={labelClass}>
              Gender <span className="text-red-400">*</span>
            </label>
            <div className="flex gap-4 pt-2">
              {["Male", "Female", "Other"].map((g) => (
                <label key={g} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={form.gender === g}
                    onChange={(e) => updateField("gender", e.target.value)}
                    className="w-4 h-4 accent-gold"
                  />
                  <span className="text-white/60 text-sm">{g}</span>
                </label>
              ))}
            </div>
            {errors.gender && <p className={errorClass}>{errors.gender}</p>}
          </div>

          {/* Aadhar */}
          <div className="sm:col-span-2">
            <label htmlFor="aadhar" className={labelClass}>
              Aadhar Number (Optional)
            </label>
            <input
              id="aadhar"
              name="aadhar"
              type="text"
              className={inputClass}
              placeholder="Aadhar number"
              value={form.aadhar}
              onChange={(e) => updateField("aadhar", e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Section 2 - Birth Details */}
      <div className="card-bg p-6">
        <h3 className="text-lg font-[family-name:var(--font-heading)] text-gold mb-5">
          जन्म विवरण — Birth Details
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* DOB */}
          <div>
            <label htmlFor="dob" className={labelClass}>
              Date of Birth <span className="text-red-400">*</span>
            </label>
            <input
              id="dob"
              name="dob"
              type="date"
              className={inputClass}
              value={form.dob}
              onChange={(e) => updateField("dob", e.target.value)}
            />
            {errors.dob && <p className={errorClass}>{errors.dob}</p>}
          </div>

          {/* Birth Time */}
          <div>
            <label htmlFor="birthTime" className={labelClass}>
              Time of Birth <span className="text-red-400">*</span>
            </label>
            <input
              id="birthTime"
              name="birthTime"
              type="time"
              className={inputClass}
              value={form.birthTime}
              onChange={(e) => updateField("birthTime", e.target.value)}
              disabled={form.birthTimeUnknown}
            />
            <label className="flex items-center gap-2 mt-2 cursor-pointer">
              <input
                type="checkbox"
                checked={form.birthTimeUnknown}
                onChange={(e) => updateField("birthTimeUnknown", e.target.checked)}
                className="w-4 h-4 accent-gold rounded"
              />
              <span className="text-white/50 text-xs">Don&apos;t know</span>
            </label>
            {errors.birthTime && <p className={errorClass}>{errors.birthTime}</p>}
          </div>

          {/* Birth Place */}
          <div className="sm:col-span-2">
            <label htmlFor="birthPlace" className={labelClass}>
              Place of Birth <span className="text-red-400">*</span>
            </label>
            <input
              id="birthPlace"
              name="birthPlace"
              type="text"
              className={inputClass}
              placeholder="City or town of birth"
              value={form.birthPlace}
              onChange={(e) => updateField("birthPlace", e.target.value)}
            />
            {errors.birthPlace && (
              <p className={errorClass}>{errors.birthPlace}</p>
            )}
          </div>
        </div>
      </div>

      {/* Section 3 - Consultation Details */}
      <div className="card-bg p-6">
        <h3 className="text-lg font-[family-name:var(--font-heading)] text-gold mb-5">
          परामर्श विवरण — Consultation Details
        </h3>
        <div className="space-y-4">
          {/* Service */}
          <div>
            <label htmlFor="service" className={labelClass}>
              Consultation Type <span className="text-red-400">*</span>
            </label>
            <select
              id="service"
              name="service"
              className={inputClass}
              value={form.service}
              onChange={(e) => updateField("service", e.target.value)}
            >
              <option value="">-- Select a Service --</option>
              {SERVICES.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.titleHi} — {s.title} ({formatPrice(s.price)})
                </option>
              ))}
            </select>
            {errors.service && <p className={errorClass}>{errors.service}</p>}
            {selectedService && (
              <p className="text-gold text-sm mt-2">
                Amount: <strong>{formatPrice(selectedService.price)}</strong>
              </p>
            )}
          </div>

          {/* Question */}
          <div>
            <label htmlFor="question" className={labelClass}>
              Specific Question / Concern
            </label>
            <textarea
              id="question"
              name="question"
              className={`${inputClass} min-h-[100px] resize-y`}
              placeholder="Write your question or concern here..."
              value={form.question}
              onChange={(e) => updateField("question", e.target.value)}
            />
          </div>

          {/* Language */}
          <div>
            <label className={labelClass}>Report Language</label>
            <div className="flex gap-4 pt-1">
              {["Hindi", "English", "Both"].map((lang) => (
                <label key={lang} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="language"
                    value={lang}
                    checked={form.language === lang}
                    onChange={(e) => updateField("language", e.target.value)}
                    className="w-4 h-4 accent-gold"
                  />
                  <span className="text-white/60 text-sm">{lang}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section 4 - Partner Details (Marriage only) */}
      {isMarriage && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="card-bg p-6"
        >
          <h3 className="text-lg font-[family-name:var(--font-heading)] text-gold mb-5">
            साथी का विवरण — Partner Details
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="partnerName" className={labelClass}>
                Partner&apos;s Name <span className="text-red-400">*</span>
              </label>
              <input
                id="partnerName"
                name="partnerName"
                type="text"
                className={inputClass}
                placeholder="Partner's full name"
                value={form.partnerName}
                onChange={(e) => updateField("partnerName", e.target.value)}
              />
              {errors.partnerName && (
                <p className={errorClass}>{errors.partnerName}</p>
              )}
            </div>
            <div>
              <label htmlFor="partnerDob" className={labelClass}>
                Partner&apos;s Date of Birth <span className="text-red-400">*</span>
              </label>
              <input
                id="partnerDob"
                name="partnerDob"
                type="date"
                className={inputClass}
                value={form.partnerDob}
                onChange={(e) => updateField("partnerDob", e.target.value)}
              />
              {errors.partnerDob && (
                <p className={errorClass}>{errors.partnerDob}</p>
              )}
            </div>
            <div>
              <label htmlFor="partnerBirthTime" className={labelClass}>
                Partner&apos;s Time of Birth
              </label>
              <input
                id="partnerBirthTime"
                name="partnerBirthTime"
                type="time"
                className={inputClass}
                value={form.partnerBirthTime}
                onChange={(e) => updateField("partnerBirthTime", e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="partnerBirthPlace" className={labelClass}>
                Partner&apos;s Place of Birth <span className="text-red-400">*</span>
              </label>
              <input
                id="partnerBirthPlace"
                name="partnerBirthPlace"
                type="text"
                className={inputClass}
                placeholder="Partner's city or town of birth"
                value={form.partnerBirthPlace}
                onChange={(e) => updateField("partnerBirthPlace", e.target.value)}
              />
              {errors.partnerBirthPlace && (
                <p className={errorClass}>{errors.partnerBirthPlace}</p>
              )}
            </div>
          </div>
        </motion.div>
      )}

      {/* Submit Error */}
      {submitError && (
        <div className="card-bg p-4 border-red-500/30 bg-red-500/5">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-red-400 text-sm">{submitError}</p>
              <a
                href={getWhatsAppURL(
                  `Hello 🙏 I would like to book a ${selectedService?.title || "consultation"}. My name is ${form.name}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 bg-[#25D366] text-white text-sm px-4 py-2 rounded-full hover:brightness-110 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Book via WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gold text-navy font-semibold py-4 rounded-xl hover:bg-gold-light transition-all disabled:opacity-50 disabled:cursor-not-allowed text-lg flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Processing your booking...
          </>
        ) : (
          <>Book Consultation {selectedService && `— ${formatPrice(selectedService.price)}`}</>
        )}
      </button>
    </form>
  );
}
