"use client";

export default function ResumeTimelineAlt({ onBack }: { onBack: () => void }) {
  return (
    // FIX 1: give the card a fixed height and allow vertical scroll
    <div>
      <div className="mb-4 flex items-center justify-between px-1">
        <button
          onClick={onBack}
          className="rounded-md px-2 py-1 text-[13px] underline hover:opacity-80"
        ></button>
      </div>

      {/* WRAP: remove h-full and overflow-hidden to let content grow */}
      <div className="relative wrap">
        {/* FIX 2: center rail spans the full content height with inset-y-0, not h-full */}
        <div
          className="absolute left-1/2 inset-y-0 w-px bg-black/15"
          aria-hidden
        />

        {/* 1 — Ribbon (right) */}
        <div className="mb-8 flex items-center justify-between w-full">
          <div className="order-1 w-5/12" />
          <div className="z-20 order-1 grid h-8 w-8 place-items-center rounded-full bg-black text-white shadow-md">
            <span className="text-sm font-semibold">1</span>
          </div>
          <div className="order-1 w-5/12 rounded-lg bg-white px-6 py-4 shadow-xl">
            <h3 className="mb-1 text-lg font-bold text-gray-800">
              Ribbon Communications
            </h3>
            <p className="text-sm italic text-gray-700">
              Software developer Intern
            </p>
            <p className="text-sm text-gray-600">Sept 2024 – Dec 2024</p>
          </div>
        </div>

        {/* 2 — Matrox (left) */}
        <div className="mb-8 flex flex-row-reverse items-center justify-between w-full">
          <div className="order-1 w-5/12" />
          <div className="z-20 order-1 grid h-8 w-8 place-items-center rounded-full bg-black text-white shadow-md">
            <span className="text-sm font-semibold">2</span>
          </div>
          <div className="order-1 w-5/12 rounded-lg bg-white px-6 py-4 shadow-xl">
            <h3 className="mb-1 text-lg font-bold text-gray-800">Matrox</h3>
            <p className="text-sm italic text-gray-700">Data Engineer Intern</p>
            <p className="text-sm text-gray-600">May 2024 – Aug 2024</p>
          </div>
        </div>

        {/* 3 — Vffice (right) */}
        <div className="mb-8 flex items-center justify-between w-full">
          <div className="order-1 w-5/12" />
          <div className="z-20 order-1 grid h-8 w-8 place-items-center rounded-full bg-black text-white shadow-md">
            <span className="text-sm font-semibold">3</span>
          </div>
          <div className="order-1 w-5/12 rounded-lg bg-white px-6 py-4 shadow-xl">
            <h3 className="mb-1 text-lg font-bold text-gray-800">Vffice</h3>
            <p className="text-sm italic text-gray-700">
              Junior Developer Intern
            </p>
            <p className="text-sm text-gray-600">Sept 2023 – Nov 2023</p>
          </div>
        </div>

        {/* 4 — Concordia BCompSc (left) */}
        <div className="mb-8 flex flex-row-reverse items-center justify-between w-full">
          <div className="order-1 w-5/12" />
          <div className="z-20 order-1 grid h-8 w-8 place-items-center rounded-full bg-black text-white shadow-md">
            <span className="text-sm font-semibold">4</span>
          </div>
          <div className="order-1 w-5/12 rounded-lg bg-white px-6 py-4 shadow-xl">
            <h3 className="mb-1 text-lg font-bold text-gray-800">
              Quality Online Education Group
            </h3>
            <p className="text-sm italic text-gray-700">ESL teacher</p>
            <p className="text-sm text-gray-600">Feb 2019 – Aug 2020</p>
          </div>
        </div>
      </div>
    </div>
  );
}
