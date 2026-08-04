"use client";

import { useMemo, useState } from "react";

type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  date_created: string;
  image: string;
  links: {
    repo: string;
    live: string | null;
    demo: string | null;
  };
};

type ProjectsGridProps = {
  projects: Project[];
};

const dateFormatter = new Intl.DateTimeFormat("en", {
  month: "short",
  year: "numeric",
});

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedYears, setSelectedYears] = useState<string[]>([]);

  const tags = useMemo(
    () => [...new Set(projects.flatMap((project) => project.tags))].sort(),
    [projects],
  );
  const years = useMemo(
    () =>
      [...new Set(projects.map((project) => project.date_created.slice(0, 4)))].sort(
        (a, b) => Number(b) - Number(a),
      ),
    [projects],
  );
  const visibleProjects = useMemo(
    () =>
      projects.filter((project) => {
        const matchesTags =
          selectedTags.length === 0 ||
          project.tags.some((tag) => selectedTags.includes(tag));
        const matchesYears =
          selectedYears.length === 0 ||
          selectedYears.includes(project.date_created.slice(0, 4));

        return matchesTags && matchesYears;
      }),
    [projects, selectedTags, selectedYears],
  );

  function toggleTag(tag: string) {
    setSelectedTags((current) =>
      current.includes(tag)
        ? current.filter((selectedTag) => selectedTag !== tag)
        : [...current, tag],
    );
  }

  function toggleYear(year: string) {
    setSelectedYears((current) =>
      current.includes(year)
        ? current.filter((selectedYear) => selectedYear !== year)
        : [...current, year],
    );
  }

  return (
    <>
      <section className="mt-10" aria-labelledby="filter-heading">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
          <h2
            id="filter-heading"
            className="text-sm font-medium text-zinc-900 dark:text-zinc-100"
          >
            filter by tag
          </h2>
          <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
            {visibleProjects.length} of {projects.length} projects
          </p>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setSelectedTags([])}
            aria-pressed={selectedTags.length === 0}
            className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
              selectedTags.length === 0
                ? "border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900"
                : "border-zinc-200 text-zinc-600 hover:border-zinc-400 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-600"
            }`}
          >
            all
          </button>
          {tags.map((tag) => {
            const isSelected = selectedTags.includes(tag);

            return (
              <button
                key={tag}
                type="button"
                onClick={() => toggleTag(tag)}
                aria-pressed={isSelected}
                className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                  isSelected
                    ? "border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900"
                    : "border-zinc-200 text-zinc-600 hover:border-zinc-400 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-600"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <p className="mr-1 text-sm font-medium text-zinc-900 dark:text-zinc-100">
            filter by year
          </p>
          <button
            type="button"
            onClick={() => setSelectedYears([])}
            aria-pressed={selectedYears.length === 0}
            className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
              selectedYears.length === 0
                ? "border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900"
                : "border-zinc-200 text-zinc-600 hover:border-zinc-400 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-600"
            }`}
          >
            all
          </button>
          {years.map((year) => {
            const isSelected = selectedYears.includes(year);

            return (
              <button
                key={year}
                type="button"
                onClick={() => toggleYear(year)}
                aria-pressed={isSelected}
                className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                  isSelected
                    ? "border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900"
                    : "border-zinc-200 text-zinc-600 hover:border-zinc-400 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-600"
                }`}
              >
                {year}
              </button>
            );
          })}
        </div>
      </section>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {visibleProjects.map((project) => (
          <article
            key={project.slug}
            className="flex min-w-0 gap-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50"
          >
            <div className="size-20 shrink-0 overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800 sm:size-24">
              <img
                src={project.image}
                alt={`${project.title} project preview`}
                className="size-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <h2 className="text-lg font-medium tracking-tight text-zinc-950 dark:text-zinc-50">
                  {project.title}
                </h2>
                <time
                  dateTime={project.date_created}
                  className="shrink-0 font-mono text-xs text-zinc-500 dark:text-zinc-400"
                >
                  {dateFormatter.format(
                    new Date(`${project.date_created}T00:00:00`),
                  )}
                </time>
              </div>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-zinc-200 px-2 py-1 font-mono text-[10px] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-700 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
                >
                  repo ↗
                </a>
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-700 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
                  >
                    live site ↗
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-700 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
                  >
                    demo ↗
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
