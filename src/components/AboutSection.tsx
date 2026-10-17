"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Landmark,
  Sparkles,
  ArrowRight,
  Database,
  LineChart,
  Users,
  Globe2,
  Workflow,
  Target,
  TriangleAlert,
  Network,
  GraduationCap,
  HeartPulse,
  HandHeart,
  BriefcaseBusiness,
  Factory,
  Building2,
  Shield,
} from "lucide-react";
import { useLocale } from "@/lib/LocaleProvider";

export default function AboutSection() {
  const { t } = useLocale();
  const aboutText = t("about.p1");
  const solutionStart = aboutText.indexOf(" We help ");
  const riskStatement =
    solutionStart === -1 ? aboutText : aboutText.slice(0, solutionStart);
  const solutionStatement =
    solutionStart === -1 ? "" : aboutText.slice(solutionStart + 1);
  const liabilityStart = riskStatement.lastIndexOf(" data is a liability");
  const riskDescriptors =
    liabilityStart === -1
      ? []
      : riskStatement.slice(0, liabilityStart).split(/,\s*/);
  const liabilityStatement =
    liabilityStart === -1
      ? riskStatement
      : riskStatement.slice(liabilityStart + 1);
  const liabilityWordStart = liabilityStatement.toLowerCase().indexOf("liability");
  const normalizedSolution = solutionStatement.toLowerCase();
  const insightsStart = normalizedSolution.indexOf("insights");
  const innovationStart = normalizedSolution.indexOf("innovation", insightsStart);
  const impactStart = normalizedSolution.indexOf("impact", innovationStart);

  const highlights = [
    {
      title: "Evidence-first strategy",
      icon: <Users className="w-5 h-5" />,
    },
    {
      title: "AI-enabled insight",
      icon: <BrainCircuit className="w-5 h-5" />,
    },
    {
      title: "Data governance",
      icon: <Database className="w-5 h-5" />,
    },
    {
      title: "Program evaluation",
      icon: <LineChart className="w-5 h-5" />,
    },
    {
      title: "Digital systems",
      icon: <Workflow className="w-5 h-5" />,
    },
    {
      title: "Global perspective",
      icon: <Globe2 className="w-5 h-5" />,
    },
  ];

  const capabilities = [
    {
      title: "Advanced Analytics by Experts",
      description:
        "Statistical modeling, predictive analytics and evidence synthesis for complex decision environments.",
      icon: <LineChart className="w-6 h-6" />,
    },
    {
      title: "Responsible Artificial Intelligence Use",
      description:
        "AI-powered solutions designed to improve research, operations, forecasting and strategic decision-making.",
      icon: <BrainCircuit className="w-6 h-6" />,
    },
    {
      title: "Professional Expert Team",
      description:
        "Rigorous research design, biostatistics, program evaluation and outcome measurement.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Effective Data Science & Governance",
      description:
        "Frameworks for data quality, governance, interoperability, responsible AI and evidence management.",
      icon: <Database className="w-6 h-6" />,
    },
    {
      title: "Digital Transformation",
      description:
        "Translating organizational challenges into scalable digital systems and intelligent workflows.",
      icon: <Workflow className="w-6 h-6" />,
    },
    {
      title: "Companion for the Project Lifecycle",
      description:
        "Turning fragmented information into actionable intelligence for policy and strategic planning.",
      icon: <Target className="w-6 h-6" />,
    },
  ];

  const sectors = [
    { name: "Academia", icon: GraduationCap },
    { name: "Healthcare", icon: HeartPulse },
    { name: "Nonprofits", icon: HandHeart },
    { name: "Government", icon: Landmark },
    { name: "Enterprises", icon: BriefcaseBusiness },
    { name: "Public Health", icon: Shield },
    { name: "Research Networks", icon: Network },
    { name: "Business & Industry", icon: Factory },
    { name: "Development Organizations", icon: Building2 },
  ];

  return (
    <section
      className="relative overflow-hidden py-24 bg-gradient-to-b from-white via-slate-50 to-white dark:from-[#07111f] dark:via-[#081626] dark:to-[#07111f]"
    >
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* LEADERSHIP INTRODUCTION */}

        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 text-center text-xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
        >
          <span className="block whitespace-nowrap">
            Ready-Made{" "}
            <span className="text-blue-600">Data</span>
          </span>
          <span className="block whitespace-nowrap">
            for{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
              Future-Made Solutions
            </span>
          </span>
        </motion.h2>

        <div className={`mx-auto mb-14 max-w-6xl overflow-hidden rounded-lg border border-slate-200 shadow-lg dark:border-slate-700 ${solutionStatement ? "grid md:grid-cols-[1.2fr_0.8fr]" : ""}`}>
          <div className="bg-sky-50 px-6 py-5 sm:px-8 sm:py-6 dark:bg-[#10263a]">
            {riskDescriptors.length > 0 ? (
              <>
                <div className="flex flex-wrap gap-x-1.5 gap-y-1">
                  {riskDescriptors.map((descriptor) => (
                    <span
                      key={descriptor}
                      className="rounded-md border border-sky-200 bg-white/80 px-2 py-0.5 text-xs font-medium text-slate-700 dark:border-slate-600 dark:bg-[#132b40] dark:text-slate-100"
                    >
                      {descriptor}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex flex-col gap-3 border-t border-sky-200 pt-4 dark:border-slate-600 sm:flex-row sm:items-center">
                  <div
                    aria-hidden="true"
                    className="flex w-fit shrink-0 items-center gap-3 rounded-lg border border-rose-200 bg-white/80 px-3 py-2 dark:border-slate-600 dark:bg-[#132b40]"
                  >
                    <div className="flex flex-col items-center gap-1">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-700 dark:bg-sky-900/50 dark:text-sky-200">
                        <Database className="h-5 w-5" />
                      </span>
                      <span className="text-[10px] font-bold text-slate-500 dark:text-slate-300">
                        DATA
                      </span>
                    </div>
                    <div className="flex items-center text-rose-500 dark:text-rose-300">
                      <span className="h-0.5 w-4 bg-current" />
                      <ArrowRight className="h-4 w-4" />
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-600 text-white shadow-sm">
                        <TriangleAlert className="h-5 w-5" />
                      </span>
                      <span className="text-[10px] font-bold text-rose-700 dark:text-rose-300">
                        RISK
                      </span>
                    </div>
                  </div>
                  <p className="text-left text-2xl font-bold leading-tight text-slate-900 dark:text-white sm:text-3xl">
                    {liabilityWordStart === -1 ? (
                      liabilityStatement
                    ) : (
                      <>
                        {liabilityStatement.slice(0, liabilityWordStart)}
                        <span className="text-4xl font-extrabold text-rose-700 dark:text-rose-300 sm:text-5xl">
                          {liabilityStatement.slice(liabilityWordStart, liabilityWordStart + 9)}
                        </span>
                        {liabilityStatement.slice(liabilityWordStart + 9)}
                      </>
                    )}
                  </p>
                </div>
              </>
            ) : (
              <p className="text-left text-lg font-medium leading-8 text-slate-800 dark:text-slate-100 sm:text-xl sm:leading-9">
                {riskStatement}
              </p>
            )}
          </div>
          {solutionStatement && (
            <div className="flex items-center bg-[#073b4c] px-6 py-5 sm:px-8 sm:py-6">
              <p className="text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                {insightsStart === -1 || innovationStart === -1 || impactStart === -1 ? (
                  solutionStatement
                ) : (
                  <>
                    {solutionStatement.slice(0, insightsStart)}
                    <span className="font-bold text-cyan-300">
                      {solutionStatement.slice(insightsStart, insightsStart + 8)}
                    </span>
                    {solutionStatement.slice(insightsStart + 8, innovationStart)}
                    <span className="font-bold text-amber-300">
                      {solutionStatement.slice(innovationStart, innovationStart + 10)}
                    </span>
                    {solutionStatement.slice(innovationStart + 10, impactStart)}
                    <span className="font-bold text-emerald-300">
                      {solutionStatement.slice(impactStart, impactStart + 6)}
                    </span>
                    {solutionStatement.slice(impactStart + 6)}
                  </>
                )}
              </p>
            </div>
          )}
        </div>

        <div className="mx-auto mb-16 w-full max-w-7xl overflow-x-auto">
          <div className="grid min-w-[980px] grid-cols-4 gap-4">
            {[
              {
                number: "25+",
                label: "Projects",
              },
              {
                number: "40+",
                label: "AI Solutions",
              },
              {
                number: "15+",
                label: "Partners",
              },
              {
                number: "10+",
                label: "Years Experience",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="min-h-[130px] rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-[#0d1b2c]/80"
              >
                <h3 className="text-3xl font-black text-blue-600 sm:text-4xl">
                  {item.number}
                </h3>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-neutral-600 dark:text-neutral-300">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-5xl">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Expertise */}

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {highlights.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{
                    y: -5,
                    scale: 1.03,
                  }}
                  className="h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all dark:border-slate-700 dark:bg-[#0d1b2c]"
                >
                  <div className="flex h-full items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/20">
                      {item.icon}
                    </div>

                    <h4 className="text-sm font-semibold leading-tight sm:text-base">
                      {item.title}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>

        </div>

        {/* WHY TECH DATA AXIOM */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32"
        >

          <div className="text-center max-w-3xl mx-auto">

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              WHY TECH DATA AXIOM
            </span>

            <h3 className="mt-4 text-4xl lg:text-5xl font-extrabold">
              Where Insight Meet
              <span className="text-blue-600"> Innovation</span>
              <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
                {" "}&amp; Innovation Meets Impact
              </span>
            </h3>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">

            {capabilities.map((item, index) => (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0d1b2c] p-7 shadow-sm hover:shadow-xl transition-all"
              >

                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {item.icon}
                </div>

                <h4 className="mt-6 text-xl font-bold">
                  {item.title}
                </h4>

              </motion.div>

            ))}

          </div>

        </motion.div>

        {/* SECTORS */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >

          <div className="grid items-center gap-6 lg:grid-cols-[1.2fr_0.8fr]">

            <div className="rounded-[28px] border border-slate-200 bg-white/90 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] backdrop-blur-sm dark:border-slate-700 dark:bg-[#0d1b2c]/80 sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-bold uppercase tracking-[0.28em] text-blue-600">
                  Sectors We Serve
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-blue-200 via-blue-100 to-transparent dark:from-blue-400/40 dark:via-blue-300/20 dark:to-transparent" />
              </div>

              <h3 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-4xl">
                Expertise Built for
                <span className="block text-blue-600">Complex Systems</span>
              </h3>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {sectors.map(({ name, icon: Icon }) => (
                  <div
                    key={name}
                    className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50/80 p-3.5 shadow-[0_10px_28px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_16px_35px_rgba(37,99,235,0.12)] dark:border-slate-700 dark:from-[#10263a] dark:via-[#0d1b2c] dark:to-[#111e31] ${
                      name === "Development Organizations" ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_36%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-500 via-cyan-400 to-indigo-500 opacity-80" />
                    <div className="relative flex items-center gap-3 pl-2">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-[0_8px_18px_rgba(37,99,235,0.25)] transition-all duration-300 group-hover:scale-105 dark:from-blue-500 dark:to-cyan-400">
                        <Icon className="h-4 w-4" />
                      </div>

                      <span className="whitespace-nowrap text-sm font-bold tracking-[0.02em] text-slate-800 dark:text-slate-100 sm:text-base">
                        {name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategic network card */}

            <div className="relative overflow-hidden rounded-[28px] border border-blue-500/20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 p-8 text-white shadow-2xl sm:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.18),_transparent_35%)]" />
              <div className="relative">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                  <Globe2 className="h-7 w-7" />
                </div>

                <h3 className="text-3xl font-bold leading-tight">
                  Local Insight.
                  <br />
                  Global Perspective.
                </h3>

                <div className="mt-8 grid grid-cols-2 gap-4">

                  <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
                    <Users className="mb-3 h-6 w-6" />

                    <p className="font-semibold">
                      Multidisciplinary
                    </p>

                    <p className="mt-1 text-sm text-blue-100">
                      Expertise
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
                    <Network className="mb-3 h-6 w-6" />

                    <p className="font-semibold">
                      Connected
                    </p>

                    <p className="mt-1 text-sm text-blue-100">
                      Ecosystems
                    </p>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </motion.div>

        {/* FINAL VALUE PROPOSITION */}

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32"
        >

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0d1b2c] p-10 lg:p-14 text-center shadow-sm">

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-blue-500/10 blur-3xl" />

            <div className="relative z-10">

              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-900/20 px-4 py-2 text-sm font-semibold text-blue-600">
                <Sparkles className="w-4 h-4" />
                Data • Research • AI • Impact
              </span>

              <h3 className="mt-6 text-4xl lg:text-5xl font-extrabold">
                Turning Complex Challenges
                <br />
                Into <span className="text-blue-600">Actionable Intelligence</span>
              </h3>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 mt-8 rounded-xl bg-blue-600 px-8 py-4 text-white font-semibold shadow-lg hover:bg-blue-700 transition"
              >
                Discuss Your Challenge
                <ArrowRight size={18} />
              </a>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}