"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/lib/LocaleProvider";

export default function TrainingSection() {
  const { t } = useLocale();
  const trainings = [
    {
      id: 1,
      title: t("training.card.0.title"),
      org: t("training.card.0.org"),
      date: "2023",
      description: t("training.card.0.description"),
    },
    {
      id: 2,
      title: t("training.card.1.title"),
      org: t("training.card.1.org"),
      date: "2021",
      description: t("training.card.1.description"),
    },
    {
      id: 3,
      title: t("training.card.2.title"),
      org: t("training.card.2.org"),
      date: "2022",
      description: t("training.card.2.description"),
    },
  ];

  return (
    <section id="training" className="py-24 bg-neutral-50 dark:bg-[#07111f]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {
            // use translations for heading and subtitle
          }
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            {t("training.title")} <span className="text-blue-600 dark:text-blue-400" />
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
            {t("training.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {trainings.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-white dark:bg-[#0b1728] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{t.title}</h3>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                    {t.org} • <span className="font-medium text-neutral-800 dark:text-neutral-200">{t.date}</span>
                  </div>
                </div>
              </div>
              <p className="text-neutral-600 dark:text-neutral-300 mt-4 text-sm">{t.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
