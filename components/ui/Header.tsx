"use client";
import Link from "next/link";

export default function Header() {
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
