"use client";

import Image from "next/image";
import Link from "next/link";
import { ContributionGraph } from "./ContributionGraph";
import { SocialLinks } from "./SocialLinks";

type Project = {
  name: string;
  description: string;
};

type Experience = {
  company: string;
  title: string;
  period: string;
  logo: string;
  bullets: string[];
};

const experience: Experience[] = [
  {
    company: "pocket",
    title: "soft engg intern",
    period: "jan 2026 - mar 2026",
    logo: "/pocket.png",
    bullets: [
      "built and shipped user-facing product updates across the frontend.",
      "integrated apis and improved data handling for core workflows.",
      "worked with engineers and designers to polish interaction details.",
    ],
  },
  {
    company: "nevar ai",
    title: "software engineering intern",
    period: "may 2025 - jun 2025",
    logo: "/nevara.png",
    bullets: [
      "developed reusable ui components for internal product surfaces.",
      "improved page performance and fixed reliability issues in production flows.",
      "documented implementation decisions and supported handoff to the team.",
    ],
  },
];

const projects: Project[] = [
  {
    name: "cursor learn",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. integer vitae neque at justo luctus facilisis.",
  },
  {
    name: "term-v0",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. integer vitae neque at justo luctus facilisis.",
  },
  {
    name: "inducedrip",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. integer vitae neque at justo luctus facilisis.",
  },
  {
    name: "ui library",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. integer vitae neque at justo luctus facilisis.",
  },
];

export function StickerForgeHero() {
  return (
    <main className="flex flex-1 flex-col items-center px-5 py-8 sm:py-10">
      <section className="relative flex w-full max-w-3xl flex-col items-center gap-5 sm:flex-row">
        <p className="absolute right-0 top-0 font-mono text-xs text-zinc-500 dark:text-zinc-400">
          blr, india
        </p>
        <div className="relative size-24 shrink-0 sm:size-28">
          <Image
            src="/hrdk.png"
            alt="hardik profile"
            fill
            priority
            className="object-contain"
          />
        </div>

        <div className="min-w-0">
          <p className="font-mono text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-3xl">
            hrdk
          </p>
          <SocialLinks />
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            builder · ai engineer · curious
          </p>
        </div>
      </section>

      <section className="mt-8 w-full max-w-3xl">
        <div className="mx-auto max-w-3xl text-left">
          <h1 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
            about
          </h1>
          <div className="mt-3 space-y-3 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            <p>
              20 y/o builder from blr, india. i cook software with taste,
              speed and vibes, then try to scale them up to the moon. currently
              deep in ai, reading technical blogs, and growing my side projects.
            </p>
            <p>
              open for new opportunities 24/7. perpetually curious. if i&apos;m not
              building, find me at the gym or tryharding in clash royale.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-6 text-left">
          <section className="border-b border-zinc-200 pb-6 dark:border-zinc-800">
            <div>
              <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                work history
              </h2>
            </div>
            <ul className="mt-4 space-y-6">
              {experience.map((item) => (
                <li
                  key={item.company}
                  className="text-base leading-7 text-zinc-600 dark:text-zinc-400"
                >
                  <div className="flex gap-4">
                    <div className="relative mt-1 size-10 shrink-0 overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
                      <Image
                        src={item.logo}
                        alt={`${item.company} logo`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                        <div>
                          <h3 className="font-medium text-zinc-800 dark:text-zinc-200">
                            {item.title}
                          </h3>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            {item.company}
                          </p>
                        </div>
                    <p className="font-mono text-xs text-zinc-900 dark:text-zinc-100">
                          {item.period}
                        </p>
                      </div>
                      <ul className="mt-3 list-disc space-y-1 pl-5">
                        {item.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <div>
              <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                personal projects
              </h2>
            </div>
            <ul className="mt-3 divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
              {projects.map((project) => (
                <li key={project.name} className="py-2">
                  <details className="group/project">
                    <summary className="flex cursor-pointer list-none flex-wrap items-center gap-2 [&::-webkit-details-marker]:hidden">
                      <span className="text-base font-medium text-zinc-800 transition-colors group-hover/project:text-zinc-500 dark:text-zinc-200 dark:group-hover/project:text-zinc-400">
                        {project.name}
                      </span>
                      <span className="ml-auto inline-flex size-7 items-center justify-center rounded-md border border-zinc-300 text-zinc-500 transition-colors group-hover/project:border-zinc-400 group-hover/project:text-zinc-900 dark:border-zinc-700 dark:text-zinc-400 dark:group-hover/project:border-zinc-600 dark:group-hover/project:text-zinc-100">
                        <span
                          aria-hidden="true"
                          className="size-1.5 rotate-45 border-b border-r border-current transition-transform duration-200 group-open/project:rotate-[225deg]"
                        />
                      </span>
                    </summary>
                    <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-open/project:grid-rows-[1fr]">
                      <div className="overflow-hidden">
                        <div className="grid -translate-y-2 grid-cols-[96px_1fr] gap-4 pt-3 opacity-0 transition-[opacity,transform] duration-300 ease-out group-open/project:translate-y-0 group-open/project:opacity-100 sm:grid-cols-[120px_1fr] sm:gap-5">
                          <div className="flex aspect-square items-center justify-center rounded-lg border border-dashed border-zinc-300 bg-zinc-50 text-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-500">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              aria-hidden="true"
                              className="size-7"
                            >
                              <rect x="3" y="4" width="18" height="16" rx="2" />
                              <circle cx="8.5" cy="9" r="1.5" />
                              <path d="m5 17 4.5-4 3 2.5 2.5-2 4 3.5" />
                            </svg>
                          </div>
                          <div className="min-w-0 pt-1">
                            <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
                              {project.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </details>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <ContributionGraph username="realhardik18" />
            </div>
          </section>

          <Link
            href="/archive"
            className="group mt-10 flex flex-col gap-4 rounded-2xl bg-zinc-50 p-4 text-left transition-colors hover:bg-zinc-100 dark:bg-zinc-900/50 dark:hover:bg-zinc-900 sm:flex-row sm:gap-5 sm:p-5"
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
                <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  archive <span aria-hidden="true">↗</span>
                </h2>
              </div>
              <p className="mt-2 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
                a shelf of past projects, prototypes, and experiments from
                along the way.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
