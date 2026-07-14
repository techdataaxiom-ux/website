"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import translations from "./translations";

type Locale = "en" | "fr" | "ar";

const defaultLocale: Locale = "en";

const LocaleContext = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
}>({
  locale: defaultLocale,
  setLocale: () => {},
  t: (k) => k,
});

export const useLocale = () => useContext(LocaleContext);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("locale") : null;
    let initial: Locale = defaultLocale;
    if (stored && (stored === "en" || stored === "fr" || stored === "ar")) initial = stored;
    else if (typeof navigator !== "undefined") {
      const nav = navigator.language.split("-")[0];
      if (nav === "fr" || nav === "ar") initial = nav as Locale;
    }
    setLocaleState(initial);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("locale", locale);
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  const setLocale = (l: Locale) => setLocaleState(l);

  const t = (key: string) => {
    const map = translations[locale] || translations[defaultLocale];
    return map[key] || translations[defaultLocale][key] || key;
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}
