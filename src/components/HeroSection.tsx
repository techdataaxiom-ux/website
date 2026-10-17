"use client";



import { motion } from "framer-motion";

import Link from "next/link";

import { Mail } from "lucide-react";

import { useEffect, useState } from "react";

import { useLocale } from "@/lib/LocaleProvider";



const TYPING_SPEED = 180;

const DELETING_SPEED = 100;

const PAUSE_DURATION = 2500;

const NEXT_WORD_DELAY = 800;



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



export default function HeroSection() {

  const [text, setText] = useState("");

  const [isDeleting, setIsDeleting] = useState(false);

  const [loopNum, setLoopNum] = useState(0);

  const { t } = useLocale();



  useEffect(() => {

    const roles = Array.from({ length: 10 }, (_, index) => t(`hero.role.${index}`));



    const currentRole = roles[loopNum % roles.length];

    let timer: ReturnType<typeof setTimeout>;



    const handleType = () => {

      if (!isDeleting) {

        if (text.length < currentRole.length) {

          setText(currentRole.substring(0, text.length + 1));

          timer = setTimeout(handleType, TYPING_SPEED);

        } else {

          timer = setTimeout(() => setIsDeleting(true), PAUSE_DURATION);

        }

      } else if (text.length > 0) {

        setText(currentRole.substring(0, text.length - 1));

        timer = setTimeout(handleType, DELETING_SPEED);

      } else {

        timer = setTimeout(() => {

          setIsDeleting(false);

          setLoopNum((prev) => prev + 1);

        }, NEXT_WORD_DELAY);

      }

    };



    timer = setTimeout(

      handleType,

      isDeleting ? DELETING_SPEED : TYPING_SPEED

    );



    return () => clearTimeout(timer);

  }, [text, isDeleting, loopNum, t]);



  return (

    <section

      id="home"

      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"

    >

      {/* ======================================================

          MOVING GRADIENT BACKGROUND

      ====================================================== */}



      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/20 dark:bg-blue-600/20 rounded-full blur-[100px] animate-blob" />



        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-500/20 dark:bg-purple-600/20 rounded-full blur-[100px] animate-blob animation-delay-2000" />



        <div className="absolute -bottom-1/4 left-1/2 w-[600px] h-[600px] bg-cyan-500/20 dark:bg-teal-600/20 rounded-full blur-[100px] animate-blob animation-delay-4000" />



        <div className="absolute inset-0 bg-white/40 dark:bg-[#07111f]/80 backdrop-blur-[1px]" />

      </div>



      {/* ======================================================

          MAIN CONTENT

      ====================================================== */}



      <div className="relative max-w-7xl mx-auto px-6 z-10 w-full flex flex-col items-center justify-center text-center">



        {/* ====================================================

            MAIN TAGLINE

        ==================================================== */}



        <motion.div

          initial={{ opacity: 0, y: 20 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8, delay: 0.1 }}

          className="max-w-5xl mx-auto mb-5"

        >

          <h1

            className="

              text-base

              sm:text-lg

              md:text-xl

              lg:text-2xl

              font-bold

              tracking-tight

              text-neutral-800

              dark:text-white

            "

          >

            {t("hero.tagline").split(/(DATA|TECH)/g).map((part, index) =>

              part === "DATA" || part === "TECH" ? (

                <span

                  key={`${part}-${index}`}

                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400"

                >

                  {part}

                </span>

              ) : (

                part

              )

            )}

          </h1>

          <p className="mt-5 text-sm sm:text-base text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            {t("hero.leadership")}
          </p>

        </motion.div>



        {/* ====================================================

            ROTATING SERVICES

        ==================================================== */}



        <motion.div

          initial={{ opacity: 0, y: 20 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8, delay: 0.25 }}

          className="mb-6"

        >

          <span

            className="

              block

              text-4xl

              sm:text-4xl

              md:text-5xl

              font-bold

              text-transparent

              bg-clip-text

              bg-gradient-to-r

              from-blue-600

              via-purple-600

              to-cyan-500

              dark:from-blue-400

              dark:via-purple-400

              dark:to-cyan-400

              min-h-[1.2em]

            "

          >

            {text}

            <span className="animate-pulse">|</span>

          </span>

        </motion.div>



        {/* ====================================================

            SECOND LINE

        ==================================================== */}



        <motion.div

          initial={{ opacity: 0, y: 20 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8, delay: 0.4 }}

          className="w-full max-w-6xl mx-auto mb-7"

        >

          <p

            className="

              text-base

              sm:text-lg

              md:text-xl

              lg:text-2xl

              font-bold

              leading-relaxed

              tracking-tight

              text-transparent

              bg-clip-text

              bg-gradient-to-r

              from-blue-600

              via-purple-600

              to-cyan-500

              dark:from-blue-400

              dark:via-purple-400

              dark:to-cyan-400

            "

          >

            Data • Research • Analytics • Governance • Training • Digital

            Solutions

          </p>

        </motion.div>



        {/* ====================================================

            DESCRIPTION

        ==================================================== */}



        <motion.p

          initial={{ opacity: 0, y: 20 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8, delay: 0.5 }}

          className="

            text-base

            md:text-lg

            text-neutral-600

            dark:text-neutral-300

            max-w-4xl

            mx-auto

            mb-9

            leading-relaxed

            font-light

          "

        >

          We help businesses, enterprises, academia, research networks and development

          organizations solve data challenges to integrate & create measurable impact—without the cost of

          building a large specialist team.

        </motion.p>



        {/* ====================================================

            CONTACT BUTTON

        ==================================================== */}



        <motion.div

          initial={{ opacity: 0, y: 20 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8, delay: 0.6 }}

          className="

            flex

            flex-col

            sm:flex-row

            gap-4

            items-center

            justify-center

            mb-10

          "

        >

          <Link

            href="#contact"

            className="

              group

              inline-flex

              h-12

              items-center

              justify-center

              rounded-full

              border

              border-neutral-300

              dark:border-neutral-700

              bg-transparent

              px-8

              font-medium

              text-neutral-900

              dark:text-white

              transition-all

              hover:bg-neutral-100

              dark:hover:bg-neutral-800

              focus:outline-none

              focus:ring-2

              focus:ring-neutral-400

              focus:ring-offset-2

              dark:focus:ring-offset-neutral-900

            "

          >

            {t("hero.contact")}

          </Link>

        </motion.div>



        {/* ====================================================

            CONTACT LINKS

        ==================================================== */}



        <motion.div

          initial={{ opacity: 0, y: 20 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8, delay: 0.7 }}

          className="

            flex

            flex-col

            gap-3

            items-center

            justify-center

            text-neutral-500

            dark:text-neutral-400

          "

        >

          <div className="flex flex-wrap items-center justify-center gap-3">



            {/* Email */}



            <a

              href="mailto:techdataaxiom@gmail.com"

              className="

                inline-flex

                items-center

                gap-2

                rounded-full

                bg-white

                dark:bg-[#0b1728]

                px-4

                py-2

                text-sm

                font-medium

                text-neutral-900

                dark:text-white

                shadow-sm

                hover:shadow-md

                hover:scale-105

                transition-all

                border

                border-neutral-200

                dark:border-neutral-700

              "

            >

              <Mail size={16} />

              <span>{t("contact.emailLabel")}</span>

            </a>



            {/* LinkedIn */}



            <a

              href="https://www.linkedin.com/company/development-thorough-data/"

              target="_blank"

              rel="noopener noreferrer"

              className="

                inline-flex

                items-center

                gap-2

                rounded-full

                bg-[#0A66C2]

                px-4

                py-2

                text-sm

                font-medium

                text-white

                hover:bg-[#0858a6]

                hover:scale-105

                transition-transform

                shadow-sm

              "

            >

              <LinkedInIcon className="h-4 w-4" />

              <span>{t("contact.linkedin")}</span>

            </a>



          </div>

        </motion.div>



      </div>

    </section>

  );

}