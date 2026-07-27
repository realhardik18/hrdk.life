"use client";

import Image from "next/image";
// import Link from "next/link";
import { ContributionGraph } from "./ContributionGraph";
import { SocialLinks } from "./SocialLinks";
// import { Keyboard } from "@/components/ui/keyboard";

type Project = {
  name: string;
  href?: string;
  description: string;
  image?: string;
  imageAlt?: string;
  comingSoon?: boolean;
};

type Experience = {
  company: string;
  title: string;
  period: string;
  logo: string;
};

const experience: Experience[] = [
  {
    company: "pocket",
    title: "software engineering intern",
    period: "jan 2026 - mar 2026",
    logo: "/pocket.png",
  },
  {
    company: "nevara",
    title: "ai intern",
    period: "may 2025 - jun 2025",
    logo: "/nevara.png",
  },
];

const projects: Project[] = [
  {
    name: "blrstartuparena",
    href: "https://blrstartuparena.com",
    description:
      "Live map of startup jobs in Bangalore, tracking fresh openings directly from company career pages.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Laptop showing a developer workspace",
  },
  {
    name: "squidmark",
    description:
      "AI bookmarking that resurfaces saved content at the right time.",
    comingSoon: true,
  },
  {
    name: "lecture boss",
    description:
      "Turn YouTube lectures into structured study with accountability, progress tracking, and smarter workflows.",
    comingSoon: true,
  },
  {
    name: "stealthisidea",
    description:
      "Curated database of high-performing app ads to inspire winning creatives, growth strategies, and product ideas.",
    comingSoon: true,
  },
];

export function StickerForgeHero() {
  return (
    <main className="flex flex-1 flex-col items-center px-5 py-8 sm:py-10">
      <section className="relative flex w-full max-w-3xl flex-row items-center gap-5">
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
            <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
              work history
            </h2>
            <ul className="mt-4 space-y-4">
              {experience.map((item) => (
                <li key={item.company}>
                  <div className="flex gap-4">
                    <div className="relative mt-0.5 size-10 shrink-0 overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
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
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <div>
              <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                featured projects
              </h2>
            </div>
            <div className="mt-4 grid gap-x-8 gap-y-10 sm:grid-cols-2">
              {projects.map((project) => (
                <article key={project.name} className="group min-w-0">
                  {project.comingSoon ? (
                    <div className="flex aspect-video flex-col justify-end rounded-lg border border-dashed border-zinc-300 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                      <h3 className="text-lg font-medium tracking-tight text-zinc-950 dark:text-zinc-50">
                        {project.name}
                      </h3>
                      <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                        coming soon
                      </p>
                    </div>
                  ) : (
                    <>
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="relative block aspect-video overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-900"
                        aria-label={`Visit ${project.name}`}
                      >
                        <img
                          src={project.image}
                          alt={project.imageAlt}
                          className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                        <h3 className="absolute inset-x-4 bottom-3 text-lg font-medium tracking-tight text-white">
                          {project.name} <span aria-hidden="true">↗</span>
                        </h3>
                      </a>
                    </>
                  )}
                  <p className="mt-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                    {project.description}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-6">
              <ContributionGraph username="realhardik18" />
            </div>
          </section>

          {/*
          <Link
            href="/archive"
            className="group mt-10 flex flex-col overflow-hidden rounded-2xl bg-zinc-50 text-left transition-colors hover:bg-zinc-100 dark:bg-zinc-900/50 dark:hover:bg-zinc-900 sm:flex-row"
          >
            <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-black sm:aspect-square sm:w-44">
              <Image
                src="/icons/dumpster.png"
                alt="Dumpster illustration"
                fill
                sizes="(min-width: 640px) 176px, 100vw"
                className="scale-110 object-contain transition-transform duration-500 group-hover:scale-125"
              />
            </div>
            <div className="min-w-0 p-5 sm:py-5">
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
          */}
        </div>
      </section>

    </main>
  );
}
