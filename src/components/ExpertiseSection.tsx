"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Database, Workflow, Code2, Sparkles, Mic2 } from "lucide-react";
import { useLocale } from "@/lib/LocaleProvider";

export default function ExpertiseSection() {
  const { t } = useLocale();
  const expertise = [
    {
      title: "Data Warehousing & Engineering",
      icon: <Database size={24} className="text-purple-500" />,
      description: "Designing and implementing scalable data warehouses and ETL pipelines for efficient data collection, storage, and retrieval.",
    },
    {
      title: "AI & Machine Learning Analytics",
      icon: <BrainCircuit size={24} className="text-blue-500" />,
      description: "Building predictive models, statistical analyses, and ML solutions for data-driven decision support and insights.",
    },
    {
      title: "Data Visualization & Dashboards",
      icon: <Sparkles size={24} className="text-cyan-500" />,
      description: "Creating interactive dashboards and visualizations that transform complex data into actionable management insights.",
    },
    {
      title: "Research Methods in Health",
      icon: <Workflow size={24} className="text-indigo-500" />,
      description: "Designing research methodologies, survey frameworks, and evaluation approaches for evidence-based health policy and program assessment.",
    },
    {
      title: "Public Health Data Systems",
      icon: <Code2 size={24} className="text-teal-500" />,
      description: "Developing specialized data systems for public health monitoring, surveillance, and epidemiological analytics.",
    },
    {
      title: "Predictive Analytics & Modeling",
      icon: <Mic2 size={24} className="text-orange-500" />,
      description: "Applying statistical modeling and causal inference techniques to forecast trends and support decision-making.",
    },
  ];

  const skills = [
    {
      category: "Data Science & Analytics",
      items: ["Data Science", "Data Wrangling", "Data Cleaning & Analysis", "Data Visualization", "Data Warehousing", "KPI Management", "Data Governance", "Automation"],
    },
    {
      category: "Statistics & Machine Learning",
      items: ["Machine Learning & Statistics", "Descriptive Statistics", "Inferential Statistics", "Biostatistics", "Statistical Analysis Frameworks"],
    },
    {
      category: "Epidemiology & Biostatistics",
      items: ["Epidemiology", "Clinical Trials", "Research Protocols", "Sample Size Determination", "Statistical Analysis Plan", "Data Analysis", "Causal Inference & Research Methods", "Public Health Data Systems"],
    },
    {
      category: "Research & Policy",
      items: ["Research Design", "Survey Design", "Policy Analysis", "Evidence-Based Decision Support"],
    },
  ];

  return (
    <section id="expertise" className="py-24 bg-white dark:bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            {t("expertise.title")} <span className="text-blue-600 dark:text-blue-400" />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl"
          >
            {t("expertise.subtitle")}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-neutral-50 dark:bg-[#0a0a0a] border border-neutral-100 dark:border-neutral-800 rounded-2xl hover:shadow-md transition-shadow group"
            >
              <div className="mb-4 p-3 bg-white dark:bg-[#111] inline-block rounded-xl shadow-sm border border-neutral-100 dark:border-neutral-800 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white">{item.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div>
           <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold tracking-tight mb-8 text-center"
          >
            {t("expertise.technicalStack")}
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#111]"
              >
                <h4 className="font-semibold text-lg text-neutral-900 dark:text-white mb-4 border-b border-neutral-100 dark:border-neutral-800 pb-2">
                  {skillGroup.category}
                </h4>
                <ul className="flex flex-col gap-3">
                  {skillGroup.items.map(skill => (
                    <li key={skill} className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400" />
                      <span className="text-sm font-medium">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
