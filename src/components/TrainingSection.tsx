"use client";

import { motion } from "framer-motion";

export default function TrainingSection() {
  const trainings = [
    {
      id: 1,
      title: "Applied Biostatistics Workshop",
      org: "WHO Collaborating Centre",
      date: "2023",
      description:
        "Hands-on workshop covering regression, survival analysis, and sample size computation for public health research.",
    },
    {
      id: 2,
      title: "Survey Design & Sampling",
      org: "National Institute of Statistics",
      date: "2021",
      description:
        "Two-day training on probability sampling, weighting, and field operations for large-scale household surveys.",
    },
    {
      id: 3,
      title: "Machine Learning for Health Analytics",
      org: "University Short Course",
      date: "2022",
      description:
        "Introductory course on applying supervised and unsupervised learning to health datasets and outcome prediction.",
    },
  ];

  return (
    <section id="training" className="py-24 bg-neutral-50 dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Training & <span className="text-blue-600 dark:text-blue-400">Workshops</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
            Selected trainings and short courses I have delivered or attended to strengthen analytic capacity and research methods.
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
              className="bg-white dark:bg-[#111] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-sm"
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
