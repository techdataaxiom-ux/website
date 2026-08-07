"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  BrainCircuit,
  Landmark,
  ShieldCheck,
  BarChart3,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { useLocale } from "@/lib/LocaleProvider";

export default function AboutSection() {
  const { t } = useLocale();

  const highlights = [
    {
      title: "Leadership & Strategy",
      icon: <Landmark className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Public Health Innovation",
      icon: <Sparkles className="w-5 h-5 text-emerald-500" />,
    },
    {
      title: "Research Governance",
      icon: <ShieldCheck className="w-5 h-5 text-purple-500" />,
    },
    {
      title: "Data-Driven Policy",
      icon: <BarChart3 className="w-5 h-5 text-cyan-500" />,
    },
    {
      title: "AI Advisory",
      icon: <BrainCircuit className="w-5 h-5 text-indigo-500" />,
    },
    {
      title: "Program Transformation",
      icon: <CheckCircle2 className="w-5 h-5 text-orange-500" />,
    },
  ];

  return (
    <section
      id="ceo"
      className="relative overflow-hidden py-24 bg-gradient-to-b from-white via-slate-50 to-white dark:from-[#07111f] dark:via-[#081626] dark:to-[#07111f]"
    >
      <div className="container mx-auto px-6">

        <div className="grid lg:grid-cols-[0.9fr_1.3fr] gap-20 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 mb-4">
              CEO & Founder
            </span>

            <h2 className="text-5xl lg:text-6xl font-extrabold leading-tight">
              Transforming
              <br />

              <span className="text-blue-600">
                Public Health
              </span>

              {" "}Through{" "}

              <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
                Data Science & AI
              </span>
            </h2>

            <p className="mt-8 text-lg leading-9 text-neutral-600 dark:text-neutral-300">
              ENFRAR helps governments, universities and development
              organizations transform complex data into actionable
              policy through artificial intelligence, advanced
              analytics and evidence-based research.
            </p>

            <p className="mt-6 text-lg leading-9 text-neutral-600 dark:text-neutral-300">
              Led by <strong>Dr. Saqlain Raza</strong>, our multidisciplinary
              consulting practice combines public health expertise,
              statistics, machine learning and digital transformation
              to deliver scalable, research-driven solutions for
              national and international organizations.
            </p>

            {/* Statistics */}

            <div className="grid grid-cols-4 gap-5 mt-10">

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
                  label: "Years",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl bg-white dark:bg-[#0d1b2c] border border-slate-200 dark:border-slate-700 p-5 shadow-sm"
                >
                  <h3 className="text-3xl font-bold text-blue-600">
                    {item.number}
                  </h3>

                  <p className="text-sm mt-2 text-neutral-600 dark:text-neutral-400">
                    {item.label}
                  </p>
                </div>
              ))}

            </div>

            {/* Expertise */}

            <div className="grid grid-cols-2 gap-4 mt-10">

              {highlights.map((item) => (

                <motion.div
                  key={item.title}
                  whileHover={{
                    y: -5,
                    scale: 1.03,
                  }}
                  className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0d1b2c] p-5 shadow-sm transition-all"
                >
                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                      {item.icon}
                    </div>

                    <h4 className="font-semibold">
                      {item.title}
                    </h4>

                  </div>
                </motion.div>

              ))}

            </div>

            {/* CTA */}

            <div className="flex flex-wrap gap-4 mt-12">

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 text-white font-semibold shadow-lg hover:bg-blue-700 transition"
              >
                Contact Us

                <ArrowRight size={18} />

              </a>

              <a
                href="#projects"
                className="inline-flex items-center rounded-xl border border-blue-600 px-7 py-4 font-semibold text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition"
              >
                View Projects
              </a>

            </div>

          </motion.div>

          {/* RIGHT */}
          {/* RIGHT INFOGRAPHIC */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div
              className="
                w-full
                max-w-[650px]
                rounded-3xl
                overflow-hidden
                border border-blue-500/20
                bg-gradient-to-br
                from-[#07111f]
                via-[#081626]
                to-[#10233d]
                p-4
                shadow-[0_25px_80px_rgba(59,130,246,0.18)]
              "
            >
              <div className="relative w-full h-[320px] sm:h-[380px] md:h-[450px] lg:h-[500px]">
                <Image
                  src="/logo/ai-public-health-infographic.png"
                  alt="ENFRAR Data Science & AI Consulting"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>

          

        </div>

      </div>
    </section>
  );
}