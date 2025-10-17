"use client";
import { useState } from "react";
import { Accordion, AccordionItem } from "@heroui/accordion";
import Header from "@/components/ui/Header";
import ResumeTimeline from "@/components/ui/ResumeTimeline";
import TechStackPanel from "@/components/ui/TechStackPanel";
import ProjectShowcase from "@/components/ui/ProjectShowcase";
import ContactSection from "@/components/ui/ContactSection";
import SloganCard from "@/components/ui/SloganCard";
import PortraitCard from "@/components/ui/PortraitCard";
import AboutIntro from "@/components/ui/AboutIntro";
import { Abel } from "next/font/google";
import Link from "next/link";
const abel = Abel({
  subsets: ["latin"],
  weight: "400",
});
export default function Home() {
  const [, setShowTimeline] = useState(false);
  const [lang, setLang] = useState<"en" | "zh" | "fr">("en");

  return (
    <>
      <Header lang={lang} setLang={setLang} />

      <main className="container-page">
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4 auto-rows-auto">
          {/* Slogan card (unchanged) */}
          <SloganCard
            className="row-span-4 md:row-span-7 col-span-2 md:col-span-4"
            lang={lang}
          />

          {/* Portrait card (unchanged) */}
          <PortraitCard className="row-span-12 md:row-span-7 col-span-2 md:col-span-3" />

          {/* RIGHT COLUMN */}
          <div className="card row-span-full md:row-span-10 col-span-2 md:col-span-5 overflow-y-scroll">
            {/* the scrolling region */}
            <Accordion
              selectionMode="multiple"
              defaultSelectedKeys={[]} // resume opened by default
            >
              {/* Résumé */}
              <AccordionItem
                key="resume"
                aria-label="Résumé"
                title="My work experience"
              >
                <ResumeTimeline onBack={() => setShowTimeline(false)} />
              </AccordionItem>

              {/* Tech stack */}
              <AccordionItem
                key="tech"
                aria-label="Tech stack"
                title="My tech stack"
              >
                <TechStackPanel />
              </AccordionItem>

              {/* Projects */}
              <AccordionItem
                key="projects"
                aria-label="Projects"
                title="My education"
              >
                <ul className="divide-y divide-black/10 text-[15px]">
                  <li className="py-3">
                    <a href="/projects#p1" className="hover:opacity-80">
                      <p>2022-2025</p>
                      BSC computer science - Concordia University (Graduated
                      with distinction)
                    </a>
                  </li>
                  <li className="py-3">
                    <a href="/projects#p2" className="hover:opacity-80">
                      <p>2017-2022</p>
                      BA English literature - Concordia University
                    </a>
                  </li>
                </ul>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Bottom row (unchanged) */}

          <AboutIntro
            lang={lang}
            className="row-span-14 md:row-span-5 col-span-2 md:col-span-4"
            fontClass={abel.className}
          />

          <div className="card card-secondary flex flex-col justify-between md:row-span-5 md:col-span-3">
            <Link
              href="#contact"
              className="flex flex-col justify-between h-full"
            >
              <div className="flex items-start justify-between">
                <span className="text-sm">Have some questions?</span>
                <span>↗</span>
              </div>
              <h2 className="display text-2xl sm:text-3xl md:text-[40px] leading-tight">
                Contact me
              </h2>
            </Link>
          </div>

          <div className="card flex flex-col justify-center md:row-span-2 md:col-span-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:justify-between text-sm">
              <a
                href="https://www.instagram.com/missbella_deng/"
                target="_blank"
              >
                INSTAGRAM
              </a>
              <a href="https://github.com/ZixinIsabelDeng" target="_blank">
                GITHUB
              </a>
              <a
                href="https://www.linkedin.com/in/zixin-deng-7b0911152/"
                target="_blank"
              >
                LINKEDIN
              </a>
            </div>
          </div>
        </section>
        <section id="projects" className="scroll-mt-[50px]">
          <ProjectShowcase lang={lang} />
        </section>
        <section id="contact" className="scroll-mt-[50px]">
          <ContactSection lang={lang} />
        </section>
      </main>
    </>
  );
}
