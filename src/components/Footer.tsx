"use client";

import Link from "next/link";
import { useLocale } from "@/lib/LocaleProvider";

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.32 8.16h4.36V24H.32zM8.08 8.16h4.18v2.16h.06c.58-1.1 2-2.26 4.12-2.26 4.4 0 5.21 2.9 5.21 6.68V24h-4.36v-7.08c0-1.69-.03-3.87-2.36-3.87-2.36 0-2.72 1.84-2.72 3.74V24H8.08z"
      />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLocale();

  return (
    <footer className="w-full bg-neutral-50 dark:bg-[#07111f] border-t border-neutral-200 dark:border-neutral-800 py-10 px-6">

      <div className="max-w-7xl mx-auto flex flex-col gap-6">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">

          <Link href="/" className="font-semibold tracking-tight text-neutral-900 dark:text-white">
            Tech Data <span className="text-blue-600 dark:text-blue-400">Axiom</span>
          </Link>

          <div className="flex items-center gap-6">
            <p className="text-center">{t("footer.tagline")}</p>
            <a
              href="https://www.linkedin.com/company/development-thorough-data/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-neutral-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shrink-0"
              aria-label="Tech Data Axiom on LinkedIn"
            >
              <LinkedInIcon className="h-4 w-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-5 border-t border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500 dark:text-neutral-400 gap-3">

          <p>
            &copy; {currentYear} — Tech Data Axiom. All rights reserved.
          </p>

          <p className="text-center md:text-right">{t("footer.right")}</p>
        </div>

      </div>
    </footer>
  );
}