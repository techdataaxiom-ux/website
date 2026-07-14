"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useLocale } from "@/lib/LocaleProvider";

export default function AboutSection() {
  const { t } = useLocale();
  const highlights = [
    "Data Warehousing",
    "AI & Machine Learning",
    "Research Protocols",
    "Clinical Trials",
    "Sample Size Determination",
    "Policy Analysis",
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              {t("about.title")} <span className="text-blue-600 dark:text-blue-400" />
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed mb-6">
              {t("about.p1")}
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed mb-8">
              {t("about.p2")}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="text-blue-600 dark:text-blue-400" size={20} />
                  <span className="font-medium text-neutral-800 dark:text-neutral-200">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full p-2 bg-gradient-to-tr from-blue-500 via-purple-500 to-cyan-500 shadow-[0_0_40px_rgba(59,130,246,0.2)] animate-spin-slow">
              <div className="absolute inset-1 rounded-full bg-white dark:bg-[#0a0a0a] z-0"></div>
              {/* Reset inner rotation so the image itself is stable */}
              <div className="relative w-full h-full rounded-full overflow-hidden z-10 animate-spin-slow-reverse border-4 border-transparent">
                <Image 
                  src="/profile-pic.png" 
                  alt="Dr. Saqlain Raza" 
                  fill
                  sizes="(max-width: 768px) 16rem, 20rem"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
