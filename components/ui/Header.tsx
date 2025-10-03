"use client";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface HeaderProps {
  lang: "en" | "zh" | "fr";
  setLang: Dispatch<SetStateAction<"en" | "zh" | "fr">>;
}

export default function Header({ lang, setLang }: HeaderProps) {
  return (
    <div className="container-page mt-4">
      <header
        className="h-[101px] flex items-center justify-between px-6"
        style={{
          background: "var(--color-primary)",
          borderRadius: "var(--radius)",
          boxShadow: "var(--shadow)",
        }}
      >
        <div className="text-[14px] tracking-wide">
          ZIXIN DENG (AKA. ISABEL)
        </div>
        <nav className="flex gap-10 text-[14px]">
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as "en" | "zh" | "fr")}
            className="border rounded px-2 py-1"
          >
            <option value="en">EN</option>
            <option value="zh">中文</option>
            <option value="fr">FR</option>
          </select>
          <Link href="/#projects" scroll>
            PROJECTS
          </Link>
          <Link href="/#about" scroll>
            ABOUT ME
          </Link>
          <Link href="/#contact" scroll>
            CONTACT
          </Link>
        </nav>
      </header>
    </div>
  );
}
