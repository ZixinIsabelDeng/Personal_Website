"use client";
import { useState } from "react";

const slogans = {
  en: `Redefining Software
Development with
Creativity and Precision`,
  zh: `以创新与严谨，
重新定义软件开发`,
  fr: `Redéfinir le développement
logiciel avec
créativité et précision`,
};

export default function SloganCard({
  className = "",
  lang = "en",
}: {
  className?: string;
  lang?: "en" | "zh" | "fr";
}) {
  return (
    <div className={`card ${className}`}>
      <h1 className="display font-medium text-4xl md:text-5xl leading-[1.06] whitespace-pre-line">
        {slogans[lang]}
      </h1>
    </div>
  );
}
