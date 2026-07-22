"use client";

import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { createElement, useEffect, useRef } from "react";

type StickerSource = {
  type: "text";
  text: string;
  fontFamily: string;
  fontWeight: number;
  color: string;
  richText: {
    blocks: Array<{
      align: "center";
      lineHeight: number;
      runs: Array<{
        text: string;
        color: string;
        fontSize: number;
        fontWeight: number;
        underline: boolean;
      }>;
    }>;
  };
};

type StickerOptions = {
  outline: {
    width: number;
    color: string;
  };
  shadow: {
    opacity: number;
    blur: number;
    distance: number;
    angle: number;
    color: string;
  };
  peel: {
    radius: number;
    stiffness: number;
    grabWidth: number;
    maxAngle: number;
    release: "snap";
  };
  sound: {
    enabled: boolean;
    volume: number;
  };
  back: {
    color: string;
    gloss: number;
    roughness: number;
  };
  tilt: number;
  wind: number;
  quality: "high";
};

type StickerForgeElement = HTMLElement & {
  setSource: (source: StickerSource) => Promise<void>;
  setOptions: (options: StickerOptions) => void;
};

type Project = {
  name: string;
  technologies: string[];
};

type Experience = {
  company: string;
  title: string;
  period: string;
  bullets: string[];
};

const experience: Experience[] = [
  {
    company: "Company One",
    title: "Software Engineering Intern",
    period: "Jun-Jul 2025",
    bullets: [
      "Built and shipped user-facing product updates across the frontend.",
      "Integrated APIs and improved data handling for core workflows.",
      "Worked with engineers and designers to polish interaction details.",
    ],
  },
  {
    company: "Company Two",
    title: "Product Engineer",
    period: "Jan-Mar 2026",
    bullets: [
      "Developed reusable UI components for internal product surfaces.",
      "Improved page performance and fixed reliability issues in production flows.",
      "Documented implementation decisions and supported handoff to the team.",
    ],
  },
];

const projects: Project[] = [
  { name: "cursor learn", technologies: ["IDE", "Agents", "Desktop"] },
  { name: "term-v0", technologies: ["CLI", "Coding Agent", "AI Toolkit"] },
  { name: "inducedrip", technologies: ["3D", "AI", "Web3"] },
  { name: "ui library", technologies: ["UI"] },
  { name: "hritu.art", technologies: ["PWA", "UI"] },
  { name: "algosearch", technologies: ["ML", "Search Engine"] },
  { name: "coding75", technologies: ["Web", "Ed-Tech"] },
];

const stickerSource: StickerSource = {
  type: "text",
  text: "HRDK",
  fontFamily: "Arial Rounded MT Bold, Arial Black, sans-serif",
  fontWeight: 900,
  color: "#19191d",
  richText: {
    blocks: [
      {
        align: "center",
        lineHeight: 1.2,
        runs: [
          {
            text: "HRDK",
            color: "rgb(25, 25, 29)",
            fontSize: 28,
            fontWeight: 900,
            underline: false,
          },
        ],
      },
    ],
  },
};

const stickerOptions: StickerOptions = {
  outline: {
    width: 10,
    color: "#ffffff",
  },
  shadow: {
    opacity: 0.34,
    blur: 12,
    distance: 8,
    angle: 42,
    color: "#191823",
  },
  peel: {
    radius: 0.2,
    stiffness: 0.72,
    grabWidth: 22,
    maxAngle: 3.55,
    release: "snap",
  },
  sound: {
    enabled: true,
    volume: 0.68,
  },
  back: {
    color: "#f7f5f2",
    gloss: 0.7,
    roughness: 0.3,
  },
  tilt: -3,
  wind: 0.25,
  quality: "high",
};

export function StickerForgeHero() {
  const stickerRef = useRef<StickerForgeElement | null>(null);

  useEffect(() => {
    let mounted = true;

    async function initializeSticker() {
      if (!("customElements" in window)) {
        return;
      }

      await customElements.whenDefined("sticker-forge");

      if (!mounted || !stickerRef.current) {
        return;
      }

      await stickerRef.current.setSource(stickerSource);
      stickerRef.current.setOptions(stickerOptions);
    }

    initializeSticker();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <main className="flex flex-1 flex-col items-center px-5 py-8 sm:py-10">
      <Script
        type="module"
        src="https://sticker.oooo.so/embed/sticker-forge.es.js"
        strategy="afterInteractive"
      />

      <section className="grid w-full max-w-4xl items-start gap-5 sm:grid-cols-[132px_1fr]">
        <div className="size-28 overflow-hidden rounded-[28px] border border-zinc-200 bg-zinc-100 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:size-32">
          <Image
            src="https://unavatar.io/x/hrdktwt"
            alt="Hardik profile"
            width={128}
            height={128}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-4">
            <div className="-ml-3 -mt-3 min-w-0">
              {/*
                React does not type-check custom element methods, so the ref is
                narrowed above before calling the sticker-forge API.
              */}
              {createElement("sticker-forge", {
                id: "my-sticker",
                ref: stickerRef,
                style: {
                  display: "block",
                  width: "min(260px, 100%)",
                  height: "88px",
                  outline: "none",
                  userSelect: "none",
                  WebkitTapHighlightColor: "transparent",
                  WebkitTouchCallout: "none",
                  WebkitUserSelect: "none",
                },
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 w-full max-w-4xl">
        <div className="max-w-3xl">
          <h1 className="text-base font-medium tracking-normal text-zinc-900 dark:text-zinc-100">
            About
          </h1>
          <p className="mt-3 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            I&apos;m Hardik, a developer building clean, useful web experiences.
            This space collects the projects, tools, and ideas I&apos;m working
            on.
          </p>
        </div>

        <div className="mt-10 max-w-3xl space-y-6">
          <section className="border-b border-zinc-200 pb-6 dark:border-zinc-800">
            <div>
              <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                Today
              </h2>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                Building early-stage products and mentoring.
              </p>
            </div>
            <div className="mt-4 space-y-3 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              <p>
                I&apos;m a software engineer building early-stage products.
              </p>
              <p>
                I enjoy traveling, robotics, fast cars, and learning Japanese.
              </p>
              <p>
                I also mentor, judge, and run a small team of highly skilled,
                creative, and experienced designers.
              </p>
            </div>
          </section>

          <section className="border-b border-zinc-200 pb-6 dark:border-zinc-800">
            <div>
              <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                Past
              </h2>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                Teams and roles I&apos;ve helped shape.
              </p>
            </div>
            <ul className="mt-4 space-y-6">
              {experience.map((item) => (
                <li key={item.company} className="text-zinc-600 dark:text-zinc-400">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <div>
                      <h3 className="text-base font-medium text-zinc-900 dark:text-zinc-100">
                        {item.title}
                      </h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        {item.company}
                      </p>
                    </div>
                    <p className="font-mono text-xs uppercase text-zinc-400 dark:text-zinc-500">
                      {item.period}
                    </p>
                  </div>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <div>
              <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                Personal projects
              </h2>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                Experiments in developer tools, AI, and interfaces.
              </p>
            </div>
            <ul className="mt-3 divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
              {projects.map((project) => (
                <li
                  key={project.name}
                  className="flex flex-col justify-center gap-1 py-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                >
                  <a
                    href="#"
                    className="w-fit text-base font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-500 dark:text-zinc-100 dark:decoration-zinc-700 dark:hover:text-zinc-400"
                  >
                    {project.name}
                  </a>
                  <span className="inline-flex w-fit items-center gap-2 rounded-md border border-zinc-300 px-2 py-1 font-mono text-xs text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
                    {project.technologies.join(", ")}
                    <span
                      aria-hidden="true"
                      className="size-1.5 rotate-45 border-b border-r border-current"
                    />
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <Link
            href="/archive"
            className="group mt-10 flex items-start gap-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 transition-colors hover:border-zinc-300 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 sm:gap-5 sm:p-5"
          >
            <div className="flex size-16 shrink-0 items-center justify-center rounded-xl border border-indigo-200 bg-white text-indigo-500 shadow-sm dark:border-indigo-400/30 dark:bg-zinc-950 sm:size-20">
              <svg
                viewBox="0 0 64 64"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                aria-hidden="true"
                className="size-11 sm:size-14"
              >
                <rect x="12" y="6" width="40" height="52" rx="7" />
                <path d="M21 14h8m6 0h8M18 24h28M22 33h20v12H22zM28 29v-3m8 3v-3M21 48h8m6 0h8" />
                <path d="M27 39h10M32 34v10" />
              </svg>
            </div>
            <div className="min-w-0 pt-0.5">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h2 className="font-mono text-xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
                  mini apps <span aria-hidden="true">↗</span>
                </h2>
                <span className="rounded-full bg-zinc-950 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wide text-white dark:bg-zinc-100 dark:text-zinc-950">
                  New
                </span>
              </div>
              <p className="mt-2 max-w-2xl font-mono text-sm leading-6 text-zinc-500 dark:text-zinc-400 sm:text-base">
                A collection of small apps and other projects, shared here in
                case they&apos;re useful to you too.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
