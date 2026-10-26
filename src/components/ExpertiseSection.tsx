"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  BrainCircuit,
  Database,
  Workflow,
  Code2,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { useLocale } from "@/lib/LocaleProvider";

export default function ExpertiseSection() {
  const { t } = useLocale();

  const expertise = [
    {
      title: t("expertise.card.0.title"),
      icon: (
        <Image
          src="/data-strategy-architecture.jpg"
          alt=""
          width={48}
          height={48}
          className="h-full w-full rounded-xl object-cover"
        />
      ),
      description: t("expertise.card.0.description"),
    },
    {
      title: t("expertise.card.1.title"),
      icon: (
        <Image
          src="/qualitative-analytics.jpg"
          alt=""
          width={48}
          height={48}
          className="h-full w-full rounded-xl object-cover"
        />
      ),
      description: t("expertise.card.1.description"),
    },
    {
      title: t("expertise.card.2.title"),
      icon: (
        <Image
          src="/statistical-analysis.jpg"
          alt=""
          width={48}
          height={48}
          className="h-full w-full rounded-xl object-cover"
        />
      ),
      description: t("expertise.card.2.description"),
    },
    {
      title: t("expertise.card.3.title"),
      icon: (
        <Image
          src="/epidemiology-study-design.svg"
          alt=""
          width={48}
          height={48}
          className="h-full w-full rounded-xl object-cover"
        />
      ),
      description: t("expertise.card.3.description"),
    },
  ];

  const skills = [
    {
      category: "Data Science & Governance",
      number: "01",
      icon: <Database size={20} />,
      items: [
        "MetaData",
        "Data Storage & Quality",
        "Responsible & Accountable use of AI",
        "Data Wrangling - Cleaning, Transformation & Integration",
        "Data Flow Automation",
        "Machine Learning - Predictive & Prescriptive Analytics",
        "Data Modeling & Architecture",
        "Regulatory Compliance & Standards, Ethics & Privacy (PDPL)",
        "Digital Signage Solutions",
        
        ],
    },
    {
      category: "Research Protocols",
      number: "02",
      icon: <BrainCircuit size={20} />,
      items: [
        "Designing Qualitative & Quantitative Studies",
        "Sample Size & Power Calculations",
        "Statistical Analysis Plan",
        "Questionnaire Design & validation",
        "Pilot Testing",
        "Survey Design",
        "Data Collection Monitoring",
        "Clinical Trial Design & Analysis",
        ],
    },
    {
      category: "Health Analytics, Biostatistics, & Epidemiology",
      number: "03",
      icon: <Sparkles size={20} />,
      items: [
        "From Data to Meaning",
        "Designing Epidemiological Studies",
        "Advanced Statistical & Disease Modeling",
        "Data Visualization",
        ],
    },
    {
      category: "Knowledge Management & Documentation",
      number: "04",
      icon: <Workflow size={20} />,
      items: [
        "Professional Reports",
        "Clear Documentation",
        "Standardised Processes",
        "Decision-Ready Information",
        "Compliance & Governance Support",
        "Research & Technical Reporting",
        "Consistent Organizational Standards",
        "Better Knowledge Management",
        ],
    },
    {
      category: "Health Economic Evaluation & Assessment",
      number: "05",
      icon: <Code2 size={20} />,
      items: [
        "HTA Support",
        "Cost Effectiveness",
        "Economic Evaluation",
        "Real-World Evidence",
        "Patient & Population Outcomes",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-white dark:bg-[#07111f]">
      <div className="max-w-7xl mx-auto px-6">
        {/* SECTION HEADER */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-5xl"
          >
            {t("expertise.title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl"
          >
            {t("expertise.subtitle")} {t("expertise.subtitle.extra")}
          </motion.p>
        </div>

        {/* EXPERTISE CARDS */}
        <div className="grid gap-6 mb-28 md:grid-cols-2">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="
                p-6
                bg-neutral-50 dark:bg-[#0b1728]
                border border-neutral-100 dark:border-neutral-800
                rounded-2xl
                hover:shadow-md
                transition-shadow
                group
              "
            >
              <div className="mb-4 flex items-center gap-4">
                <div
                  className="
                    flex h-12 w-12 shrink-0 items-center justify-center
                    bg-white dark:bg-[#0b1728]
                    rounded-xl
                    shadow-sm
                    border border-neutral-100 dark:border-neutral-800
                    group-hover:scale-110
                    transition-transform
                  "
                >
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                  {item.title}
                </h3>
              </div>

              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ====================================================== */}
        {/* REDESIGNED TECHNICAL STACKS SECTION */}
        {/* ====================================================== */}

        <div>
          {/* TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-3">
              {t("expertise.capabilities.kicker")}
            </p>

            <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {t("expertise.technicalStack")}
            </h3>

            <p className="mt-4 max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400">
              {t("expertise.capabilities.description")}
            </p>
          </motion.div>

          {/* STACKS */}
          <div className="space-y-5">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border border-neutral-200
                  dark:border-neutral-800
                  bg-neutral-50
                  dark:bg-[#0b1728]
                  p-5 md:p-6
                  hover:border-blue-300
                  dark:hover:border-blue-700
                  transition-all duration-300
                "
              >
                {/* TOP ACCENT */}
                <div
                  className="
                    absolute left-0 top-0 bottom-0
                    w-1
                    bg-blue-500
                    opacity-60
                    group-hover:opacity-100
                    transition-opacity
                  "
                />

                <div className="flex flex-col lg:flex-row lg:items-start gap-5">
                  {/* CATEGORY */}
                  <div className="lg:w-[280px] shrink-0">
                    <div className="flex items-center gap-3">
                      <div
                        className="
                          w-10 h-10
                          rounded-xl
                          flex items-center justify-center
                          bg-white
                          dark:bg-[#101e32]
                          border border-neutral-200
                          dark:border-neutral-700
                          text-blue-600
                          dark:text-blue-400
                          shadow-sm
                        "
                      >
                        {skillGroup.icon}
                      </div>

                      <div>
                        <span className="text-xs font-bold tracking-widest text-neutral-400 dark:text-neutral-500">
                          {skillGroup.number}
                        </span>

                        <h4 className="font-bold text-base md:text-lg text-neutral-900 dark:text-white leading-tight">
                          {skillGroup.category}
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* SKILL TAGS */}
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2.5">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 + skillIndex * 0.02 }}
                          className="
                            inline-flex
                            items-center
                            gap-2
                            px-3.5
                            py-2
                            rounded-full
                            bg-white
                            dark:bg-[#101e32]
                            border
                            border-neutral-200
                            dark:border-neutral-700
                            text-neutral-700
                            dark:text-neutral-200
                            shadow-sm
                            hover:border-blue-300
                            dark:hover:border-blue-600
                            transition-colors
                          "
                        >
                          <CheckCircle2 size={14} className="text-blue-600 dark:text-blue-400" />
                          <span className="text-sm font-medium">{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
