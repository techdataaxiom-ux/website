"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  DatabaseZap,
  Workflow,
} from "lucide-react";
import { useLocale } from "@/lib/LocaleProvider";

export default function AIWorkflowSection() {
  const { t } = useLocale();

  const capabilities = [
    {
      icon: <Workflow className="h-6 w-6" />,
      title: t("aiworkflow.card.0.title"),
      description: t("aiworkflow.card.0.description"),
      accent: "from-blue-500/20 to-cyan-500/10",
    },
    {
      icon: <BrainCircuit className="h-6 w-6" />,
      title: t("aiworkflow.card.1.title"),
      description: t("aiworkflow.card.1.description"),
      accent: "from-purple-500/20 to-violet-500/10",
    },
    {
      icon: <DatabaseZap className="h-6 w-6" />,
      title: t("aiworkflow.card.2.title"),
      description: t("aiworkflow.card.2.description"),
      accent: "from-emerald-500/20 to-teal-500/10",
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: t("aiworkflow.card.3.title"),
      description: t("aiworkflow.card.3.description"),
      accent: "from-amber-500/20 to-orange-500/10",
    },
  ];

  return (
    <section
      id="ai-workflows"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-24 dark:from-[#07111f] dark:via-[#0b1728] dark:to-[#07111f]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.14),_transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-3xl"
        >
          <span className="mb-4 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300">
            {t("aiworkflow.kicker")}
          </span>
          <h2 className="bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-5xl">
            {t("aiworkflow.title")}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
            {t("aiworkflow.subtitle")}
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group rounded-3xl border border-neutral-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-neutral-700 dark:bg-[#0b1728]/90"
            >
              <div className={`mb-5 inline-flex rounded-2xl bg-gradient-to-br ${item.accent} p-3 text-blue-600 dark:text-blue-300`}>
                {item.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-neutral-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-14 grid gap-6 rounded-[2rem] border border-neutral-200 bg-neutral-50 p-6 shadow-sm dark:border-neutral-700 dark:bg-[#0b1728] md:grid-cols-[1.2fr_0.8fr]"
        >
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
              {t("aiworkflow.why.title")}
            </p>
            <h3 className="mb-5 text-2xl font-bold text-neutral-900 dark:text-white">
              {t("aiworkflow.why.heading")}
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                t("aiworkflow.why.item.0"),
                t("aiworkflow.why.item.1"),
                t("aiworkflow.why.item.2"),
                t("aiworkflow.why.item.3"),
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-700 dark:border-neutral-700 dark:bg-[#101f32] dark:text-neutral-200"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-violet-500 text-white">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-500 p-[1px] shadow-lg shadow-blue-500/20">
            <div className="h-full rounded-[calc(1.5rem-1px)] bg-[#081827] p-6 text-white">
              <p className="text-sm uppercase tracking-[0.2em] text-blue-200">
                {t("aiworkflow.result.label")}
              </p>
              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-4xl font-black text-white">3x</p>
                  <p className="text-sm text-blue-100">{t("aiworkflow.result.speed")}</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-white">40%</p>
                  <p className="text-sm text-blue-100">{t("aiworkflow.result.cost")}</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-white">24/7</p>
                  <p className="text-sm text-blue-100">{t("aiworkflow.result.support")}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
