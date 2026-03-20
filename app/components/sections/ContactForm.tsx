"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
}

const SERVICE_KEYS = [
  "web-development",
  "mobile-apps",
  "cloud-solutions",
  "ai-ml",
  "ui-ux-design",
  "devops",
  "tech-consulting",
  "e-commerce",
] as const;

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-all duration-200 focus:border-[#00E5FF]/50 focus:bg-white/8 focus:ring-1 focus:ring-[#00E5FF]/30";
const labelClass = "mb-1.5 block text-sm font-medium text-white/70";
const errorClass = "mt-1.5 text-xs text-red-400";

export default function ContactForm() {
  const t = useTranslations("Contact");

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function validate(): FormErrors {
    const e: FormErrors = {};
    if (!formData.name.trim()) e.name = t("validation.nameRequired");
    if (!formData.email.trim()) {
      e.email = t("validation.emailRequired");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      e.email = t("validation.emailInvalid");
    }
    if (!formData.service) e.service = t("validation.serviceRequired");
    if (!formData.message.trim()) {
      e.message = t("validation.messageRequired");
    } else if (formData.message.trim().length < 10) {
      e.message = t("validation.messageTooShort");
    }
    return e;
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }
    setIsSubmitting(true);
    // Simulate network request
    await new Promise((r) => setTimeout(r, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
  }

  function handleReset() {
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    setErrors({});
    setSubmitted(false);
  }

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center justify-center gap-6 rounded-2xl border border-[#00E5FF]/20 bg-white/5 p-12 text-center"
        >
          {/* Check icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
            className="flex h-20 w-20 items-center justify-center rounded-full border border-[#00E5FF]/30 bg-[#00E5FF]/10"
          >
            <svg
              className="h-10 w-10 text-[#00E5FF]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </motion.div>

          <div>
            <h3 className="text-2xl font-semibold text-white">
              {t("success.title")}
            </h3>
            <p className="mt-2 text-white/60">{t("success.subtitle")}</p>
          </div>

          <motion.button
            onClick={handleReset}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full border border-white/20 px-6 py-2.5 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white"
          >
            {t("success.button")}
          </motion.button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-5"
        >
          {/* Name + Email */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClass}>
                {t("form.name")}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder={t("form.namePlaceholder")}
                value={formData.name}
                onChange={handleChange}
                className={`${inputClass} ${errors.name ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20" : ""}`}
              />
              {errors.name && <p className={errorClass}>{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>
                {t("form.email")}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder={t("form.emailPlaceholder")}
                value={formData.email}
                onChange={handleChange}
                className={`${inputClass} ${errors.email ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20" : ""}`}
              />
              {errors.email && <p className={errorClass}>{errors.email}</p>}
            </div>
          </div>

          {/* Phone + Service */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="phone" className={labelClass}>
                {t("form.phone")}
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder={t("form.phonePlaceholder")}
                value={formData.phone}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="service" className={labelClass}>
                {t("form.service")}
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`${inputClass} ${errors.service ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20" : ""}`}
              >
                <option value="" disabled>
                  {t("form.servicePlaceholder")}
                </option>
                {SERVICE_KEYS.map((key) => (
                  <option key={key} value={key}>
                    {t(`form.services.${key}`)}
                  </option>
                ))}
              </select>
              {errors.service && <p className={errorClass}>{errors.service}</p>}
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className={labelClass}>
              {t("form.message")}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder={t("form.messagePlaceholder")}
              value={formData.message}
              onChange={handleChange}
              className={`${inputClass} resize-none ${errors.message ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20" : ""}`}
            />
            {errors.message && <p className={errorClass}>{errors.message}</p>}
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            className="flex items-center justify-center gap-2 rounded-full bg-[#00E5FF] px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#00E5FF]/90 disabled:opacity-60"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="h-4 w-4 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                <span>{t("form.submit")}</span>
              </>
            ) : (
              <>
                <span>{t("form.submit")}</span>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </>
            )}
          </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
