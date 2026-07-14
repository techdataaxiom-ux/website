"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { useLocale } from "@/lib/LocaleProvider";

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}
    >
      <path
        fill="currentColor"
        d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.32 8.16h4.36V24H.32zM8.08 8.16h4.18v2.16h.06c.58-1.1 2-2.26 4.12-2.26 4.4 0 5.21 2.9 5.21 6.68V24h-4.36v-7.08c0-1.69-.03-3.87-2.36-3.87-2.36 0-2.72 1.84-2.72 3.74V24H8.08z"
      />
    </svg>
  );
}

export default function ContactSection() {
  const { t } = useLocale();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      } else {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-neutral-50 dark:bg-[#080808] border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              {t("contact.title")} <span className="text-blue-600 dark:text-blue-400" />
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg mb-8 leading-relaxed">
              {t("contact.subtitle")}
            </p>

            <div className="flex flex-col gap-6 mb-12">
              <a href={`mailto:${t("contact.emailAddr")}`} className="flex items-center gap-4 text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group">
                <div className="p-3 bg-white dark:bg-[#111] rounded-full shadow-sm group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <span className="font-medium">{t("contact.emailAddr")}</span>
              </a>
              <a href="https://wa.me/966533475986" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-neutral-600 dark:text-neutral-300 hover:text-green-600 dark:hover:text-green-500 transition-colors group">
                <div className="p-3 bg-white dark:bg-[#111] rounded-full shadow-sm group-hover:scale-110 transition-transform">
                  <MessageCircle size={20} />
                </div>
                <span className="font-medium">+966533475986</span>
              </a>
              <a
                href="https://www.linkedin.com/company/development-thorough-data/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
              >
                <div className="p-3 bg-white dark:bg-[#111] rounded-full shadow-sm group-hover:scale-110 transition-transform">
                  <LinkedInIcon className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-medium">LinkedIn</span>
                  <span className="text-xs text-neutral-400 dark:text-neutral-500">{t("contact.linkedin")}</span>
                </div>
              </a>
            </div>

           
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-[#111] border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 shadow-sm"
          >
            <h3 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-white">{t("contact.sendHeading")}</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 block">{t("contact.nameLabel")}</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all"
                  placeholder={t("contact.placeholder.name")}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 block">{t("contact.emailFieldLabel")}</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all"
                  placeholder={t("contact.placeholder.email")}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 block">{t("contact.messageLabel")}</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all h-32 resize-none"
                  placeholder={t("contact.placeholder.message")}
                />
              </div>
              {status === "success" && (
                <p className="text-sm font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-xl px-4 py-3">
                  {t("contact.success")}
                </p>
              )}
              {status === "error" && (
                <p className="text-sm font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl px-4 py-3">
                  {errorMessage || t("contact.error.network")}
                </p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-xl font-bold text-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 mt-4 disabled:opacity-70"
              >
                {isSubmitting ? t("contact.sending") : (
                  <>
                    <span>{t("contact.sendInquiry")}</span>
                    <Send size={18} />
                  </>
                )}
              </button>
              <a
                href="https://wa.me/966533475986"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 border border-green-500 dark:border-green-600 text-green-600 dark:text-green-400 rounded-xl font-bold text-lg hover:bg-green-50 dark:hover:bg-green-950/30 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                <span>{t("contact.chatWhatsApp")}</span>
              </a>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
