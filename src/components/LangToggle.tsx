"use client";

import { useEffect, useState } from "react";

export default function LangToggle() {
  const [lang, setLang] = useState<"en" | "ne">("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("wfn-lang") as "en" | "ne" | null;
    if (stored === "ne") {
      setLang("ne");
      document.documentElement.dataset.lang = "ne";
    }
  }, []);

  const toggle = () => {
    const next = lang === "en" ? "ne" : "en";
    setLang(next);
    if (next === "ne") {
      document.documentElement.dataset.lang = "ne";
    } else {
      delete document.documentElement.dataset.lang;
    }
    localStorage.setItem("wfn-lang", next);
  };

  if (!mounted) {
    return (
      <div className="h-8 w-20 rounded-lg bg-gray-100 animate-pulse" />
    );
  }

  return (
    <button
      onClick={toggle}
      title={lang === "en" ? "नेपालीमा हेर्नुहोस्" : "View in English"}
      className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 hover:border-[#25468F] bg-white hover:bg-blue-50 transition-all duration-200 text-xs font-bold text-gray-600 hover:text-[#25468F] shadow-sm"
    >
      <span className="text-base leading-none">{lang === "en" ? "🇳🇵" : "🇬🇧"}</span>
      <span>{lang === "en" ? "नेपाली" : "English"}</span>
    </button>
  );
}
