"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLocale } from "@/lib/LocaleProvider";

export default function ClientsSection() {
  const clients = [
    { id: 1, name: "ROGRAMME", logo: "/logo/images.jpg" },
    { id: 2, name: "BISP", logo: "/logo/pisp.jpeg" },
    { id: 3, name: "Population Welfare Department", logo: "/logo/pwd.jpeg" },
    { id: 4, name: "Cornis", logo: "/logo/cornis-logo.png" },
    { id: 5, name: "CVS Health", logo: "/logo/cvs-health.svg" },
    { id: 6, name: "GPN Technologies", logo: "/logo/gpn-technologies.jpg" },
    { id: 7, name: "Elunic", logo: "/logo/elunic.svg" },
    { id: 8, name: "UNDP", logo: "/logo/un-dp.jpeg" },
  ];

  const loopClients = [...clients, ...clients];
  const { t } = useLocale();

  return (
    <section id="clients" className="overflow-hidden bg-white py-24 dark:bg-[#07111f]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-4xl font-black tracking-tight text-neutral-900 dark:text-white md:text-7xl">
            {t("clients.title")} <span className="text-blue-600 dark:text-blue-400">{t("clients.subtitle")}</span>
          </h2>

          <p className="mx-auto max-w-3xl text-lg font-light text-neutral-600 italic dark:text-neutral-300 md:text-2xl">
            {t("clients.desc")}
          </p>

          <p className="mx-auto mt-6 max-w-4xl text-base text-neutral-600 dark:text-neutral-400 md:text-xl">
            Selected engagements span policy analytics, data workflow design, reporting automation, and evidence-driven program support.
          </p>
        </div>

        <div className="relative mb-16 overflow-hidden">
          <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent dark:from-[#07111f]" />
          <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent dark:from-[#07111f]" />

          <motion.div
            className="flex w-max items-center gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 26,
              ease: "linear",
            }}
          >
            {loopClients.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="flex h-28 w-48 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 shadow-sm transition-all duration-300 hover:shadow-md dark:border-neutral-800 dark:bg-[#0b1728]"
              >
                <div className="flex h-full w-full items-center justify-center p-3">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={180}
                    height={90}
                    className="max-h-14 w-auto object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <p className="text-center text-base text-neutral-500 dark:text-neutral-400 md:text-xl">
          {t("clients.bottom")}
        </p>
      </div>
    </section>
  );
}