"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLocale } from "@/lib/LocaleProvider";

export default function ClientsSection() {
  const clients = [
    { id: 1, name: "UNDP", logo: "/logo/un-dp.jpeg" },
    { id: 2, name: "BISP", logo: "/logo/pisp.jpeg" },
    { id: 3, name: "PBS", logo: "/logo/pbs.jpg" },
    { id: 4, name: "PWD", logo: "/logo/pwd.jpeg" },
    { id: 5, name: "PCP", logo: "/logo/pcp.jpeg" },
  ];

  const loopClients = [...clients, ...clients];

  const { t } = useLocale();

  return (
    <section
      id="clients"
      className="py-24 bg-white dark:bg-[#0a0a0a] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            {t("clients.title")} <span className="text-blue-600 dark:text-blue-400">{t("clients.subtitle")}</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
            {t("clients.desc")}
          </p>
        </div>

        {/* Gradient edges */}
        <div className="relative">
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

          {/* Scrolling logos */}
          <motion.div
            className="flex items-center gap-16"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 22,
              ease: "linear",
            }}
          >
            {loopClients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center"
              >
                {/* Bigger rounded container */}
                <div className="h-20 w-40 rounded-2xl overflow-hidden flex items-center justify-center 
                                bg-white dark:bg-[#111] border border-neutral-200 dark:border-neutral-800
                                shadow-sm hover:shadow-md transition duration-300">
                  
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={200}
                    height={100}
                    className="h-16 w-auto object-contain transition duration-300 hover:scale-105"
                  />

                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom text */}
        <p className="text-center text-neutral-500 dark:text-neutral-500 text-sm mt-12">
          {t("clients.bottom")}
        </p>
      </div>
    </section>
  );
}