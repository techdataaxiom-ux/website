"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail } from "lucide-react";
import { useEffect, useState } from "react";

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

const TYPING_SPEED = 100;
const DELETING_SPEED = 50;
const PAUSE_DURATION = 1500;

export default function HeroSection() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const roles = [
      "Data Science & AI",
      "Data Products",
      "Analytics Solutions",
      "Decision Systems",
      "Clinical Trials",
      "Research Protocols",
    ];

    let timer: NodeJS.Timeout;
    const handleType = () => {
      const currentRole = roles[loopNum % roles.length];
      
      if (isDeleting) {
        setText(currentRole.substring(0, text.length - 1));
      } else {
        setText(currentRole.substring(0, text.length + 1));
      }

      let typingDelay = isDeleting ? DELETING_SPEED : TYPING_SPEED;

      if (!isDeleting && text === currentRole) {
        typingDelay = PAUSE_DURATION;
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        typingDelay = 500;
      }

      timer = setTimeout(handleType, typingDelay);
    };

    timer = setTimeout(handleType, TYPING_SPEED);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Moving Gradient Orb Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/20 dark:bg-blue-600/20 rounded-full blur-[100px] animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-500/20 dark:bg-purple-600/20 rounded-full blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute -bottom-1/4 left-1/2 w-[600px] h-[600px] bg-cyan-500/20 dark:bg-teal-600/20 rounded-full blur-[100px] animate-blob animation-delay-4000" />
        <div className="absolute inset-0 bg-white/40 dark:bg-[#050505]/60 backdrop-blur-[1px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 z-10 w-full flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-semibold tracking-wide mb-6 border border-blue-200 dark:border-blue-800/50">
            Available for consulting
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
        >
          Bridging <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 min-h-[1.2em] inline-block mt-2">
            {text}
            <span className="animate-pulse">|</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Public health consultant and statistician specializing in survey design, clinical trials, research protocols, policy analysis, data analytics, and AI-enabled decision support systems for government, academic, and development sectors.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-10"
        >
         
          <Link
            href="#contact"
            className="group inline-flex h-12 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 bg-transparent px-8 font-medium text-neutral-900 dark:text-white transition-all hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 dark:focus:ring-offset-neutral-900"
          >
            Contact Me
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col gap-3 items-center justify-center text-neutral-500 dark:text-neutral-400"
        >
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:bhatti_sb@yahoo.com"
              className="inline-flex items-center gap-2 rounded-full bg-white dark:bg-[#111] px-4 py-2 text-sm font-medium text-neutral-900 dark:text-white shadow-sm hover:shadow-md hover:scale-105 transition-all border border-neutral-200 dark:border-neutral-700"
            >
              <Mail size={16} />
              <span>Email</span>
            </a>
            <a
              href="https://www.linkedin.com/company/development-thorough-data/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#0A66C2] px-4 py-2 text-sm font-medium text-white hover:bg-[#0858a6] hover:scale-105 transition-transform shadow-sm"
            >
              <LinkedInIcon className="h-4 w-4" />
              <span>Official Company Page</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
