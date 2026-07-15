"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Code, Database, LineChart, Cpu, MessageSquare } from "lucide-react";
import { useLocale } from "@/lib/LocaleProvider";

export default function ProjectsSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const { t } = useLocale();

  const projects = [
    {
      id: 1,
      title: "Punjab Health Survey (2016–2017)",
      client: "Punjab Bureau of Statistics",
      domain: "Maternal, Newborn, and Child Health (MNCH)",
      icon: <Database className="text-blue-500" size={24} />,
      summary: "Reviewed questionnaires, performed data cleaning and quality assurance, developed tabulation plans, and contributed to report writing for large-scale maternal and child health monitoring.",
      problem: "MNCH in developing countries requires continuous monitoring to prevent outbreaks and reduce mortality rates.",
      solution: "Worked as a statistics consultant to streamline data collection, validation, and analysis processes, ensuring robust survey methodology and quality assurance.",
      tools: ["Health Statistics", "Survey Design", "Data Quality Assurance", "Tabulation Plans", "MNCH"],
      impact: "Ensured timely completion of survey data collection and reporting, enabling evidence-based MNCH interventions.",
    },
    {
      id: 2,
      title: "Ehsaas Nashonuma Program (2021–2024)",
      client: "Benazir Income Support Program",
      domain: "Social Security Policy",
      icon: <LineChart className="text-purple-500" size={24} />,
      summary: "Designed sampling strategies using prevalence data to optimize cost and improve reliability for targeting pregnant and lactating women in a nationwide cash transfer program.",
      problem: "High levels of child malnutrition identified in national nutrition surveys required targeted interventions.",
      solution: "Developed district-level sampling strategies to ensure effective cash transfer targeting for pregnant and lactating women, using statistical optimization techniques.",
      tools: ["Sample Design", "Statistical Optimization", "Malnutrition Data", "Social Policy", "Targeting Strategy"],
      impact: "Program implemented nationwide with significant reduction in malnutrition, benefiting thousands of households.",
    },
    {
      id: 3,
      title: "Merged Areas Governance Programme (2020–2021)",
      client: "United Nations Development Programme (UNDP)",
      domain: "Governance & Institutional Development",
      icon: <Cpu className="text-cyan-500" size={24} />,
      summary: "Conducted data collection and analysis to support governance reforms and institutional development in newly merged districts.",
      problem: "Integration of newly merged districts required sustainable governance and infrastructure systems.",
      solution: "Contributed to data-driven insights, reporting, and policy support for sustainable institutional development through comprehensive analysis and recommendations.",
      tools: ["Governance Analytics", "Policy Support", "Data Analysis", "Social Infrastructure", "Institutional Development"],
      impact: "Supported governance reforms in merged districts, enabling sustainable institutional strengthening and better service delivery.",
    },
    {
      id: 4,
      title: "Media Awareness Campaign (2016)",
      client: "Punjab Population Welfare Department",
      domain: "Maternal, Newborn, and Child Health (MNCH)",
      icon: <MessageSquare className="text-teal-500" size={24} />,
      summary: "Designed sampling frameworks, conducted data analysis, and supported reporting for media awareness campaigns targeting MNCH practices and health outcomes.",
      problem: "Low awareness of MNCH practices impacting maternal and child health outcomes across the population.",
      solution: "Developed data-driven evaluation methods for campaign effectiveness, enabling evidence-based messaging and impact assessment.",
      tools: ["Campaign Evaluation", "MNCH Data Analysis", "Health Policy", "Survey Sampling", "Impact Assessment"],
      impact: "Enabled timely reporting and improved policy awareness strategies, supporting better health outcomes for mothers and children.",
    },
    {
      id: 5,
      title: "Workflow Automation for Monitoring Programs",
      client: "Public Sector & Development Partners",
      domain: "Data Workflow & Automation",
      icon: <Code className="text-emerald-500" size={24} />,
      summary: "Designed repeatable data workflows and reporting automation to streamline survey operations, reduce manual handling, and strengthen monitoring cycles.",
      problem: "Manual reporting and fragmented data movement slowed program oversight and created avoidable delays in decision-making.",
      solution: "Built structured workflow logic, standardized reporting steps, and automation touchpoints so teams could move from raw data to decision-ready outputs faster.",
      tools: ["Workflow Design", "Reporting Automation", "Operational Analytics", "Process Standardization", "Monitoring Systems"],
      impact: "Improved delivery speed and consistency, giving stakeholders faster visibility into program performance.",
    },
    {
      id: 6,
      title: "Analytics Automation for Evidence-Based Delivery",
      client: "Policy & Program Implementation Teams",
      domain: "Automation & Insights",
      icon: <Cpu className="text-indigo-500" size={24} />,
      summary: "Applied automated analytical workflows to convert complex datasets into concise dashboards and operational insights for program teams.",
      problem: "Teams needed timely evidence without spending excessive time on repetitive data preparation and reporting tasks.",
      solution: "Created streamlined analysis pipelines and automated outputs that supported monitoring, program review, and stakeholder updates with minimal manual effort.",
      tools: ["Automation", "Dashboarding", "Data Integration", "Program Insights", "Reporting Pipelines"],
      impact: "Enabled faster reporting cycles and stronger decision support for policy and program implementation.",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-neutral-50 dark:bg-[#07111f]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            {t("projects.title")} <span className="text-blue-600 dark:text-blue-400" />
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-[#0b1728] border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              <div 
                className="p-6 md:p-8 cursor-pointer relative overflow-hidden"
                onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-neutral-100 dark:bg-neutral-800 rounded-xl">
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  <ChevronDown 
                    className={`text-neutral-400 transition-transform duration-300 select-none ${expandedId === project.id ? "rotate-180" : ""}`} 
                  />
                </div>
                
                <p className="text-neutral-600 dark:text-neutral-300">
                  {project.summary}
                </p>

                <AnimatePresence>
                  {expandedId === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 pt-6 border-t border-neutral-100 dark:border-neutral-800 flex flex-col gap-4 text-sm">
                        <div className="flex flex-col sm:flex-row gap-4 mb-2">
                          <div className="flex-1">
                            <strong className="text-neutral-900 dark:text-neutral-100 block mb-1">{t("projects.clientLabel")}</strong>
                            <p className="text-neutral-600 dark:text-neutral-400">{project.client}</p>
                          </div>
                          <div className="flex-1">
                            <strong className="text-neutral-900 dark:text-neutral-100 block mb-1">{t("projects.domainLabel")}</strong>
                            <span className="inline-block px-2.5 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg text-xs font-semibold border border-blue-100 dark:border-blue-800/50">
                              {project.domain}
                            </span>
                          </div>
                        </div>
                        <div>
                          <strong className="text-neutral-900 dark:text-neutral-100 block mb-1">{t("projects.problemLabel")}</strong>
                          <p className="text-neutral-600 dark:text-neutral-400">{project.problem}</p>
                        </div>
                        <div>
                          <strong className="text-neutral-900 dark:text-neutral-100 block mb-1">{t("projects.solutionLabel")}</strong>
                          <p className="text-neutral-600 dark:text-neutral-400">{project.solution}</p>
                        </div>
                        <div>
                          <strong className="text-neutral-900 dark:text-neutral-100 block mb-1">{t("projects.impactLabel")}</strong>
                          <p className="text-blue-600 dark:text-blue-400 font-medium">{project.impact}</p>
                        </div>
                        <div className="pt-2 flex flex-wrap gap-2">
                          {project.tools.map(tool => (
                            <span key={tool} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 rounded-full text-xs font-medium">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
