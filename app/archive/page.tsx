import Link from "next/link";
import type { Metadata } from "next";

type ArchiveProject = {
  name: string;
  year: string;
  kind: string;
};

const projects: ArchiveProject[] = [
  { name: "daybook", year: "2025", kind: "journal" },
  { name: "switchboard", year: "2025", kind: "utility" },
  { name: "orbit", year: "2025", kind: "experiment" },
  { name: "postcard", year: "2024", kind: "web app" },
  { name: "tiny type", year: "2024", kind: "tool" },
  { name: "keepsake", year: "2024", kind: "prototype" },
  { name: "shelf", year: "2024", kind: "collection" },
  { name: "slow list", year: "2024", kind: "experiment" },
  { name: "flicker", year: "2023", kind: "creative code" },
  { name: "window", year: "2023", kind: "website" },
  { name: "afterimage", year: "2023", kind: "prototype" },
  { name: "pocket notes", year: "2023", kind: "tool" },
  { name: "memento", year: "2022", kind: "archive" },
  { name: "paper trail", year: "2022", kind: "web app" },
  { name: "signals", year: "2022", kind: "experiment" },
  { name: "first light", year: "2021", kind: "early work" },
];

export const metadata: Metadata = {
  title: "archive | hardik",
  description: "a collection of hardik's past projects and experiments.",
};

export default function ArchivePage() {
  return (
    <main className="flex flex-1 items-center px-5 py-12 sm:py-16">
      <section className="mx-auto w-full max-w-3xl">
        <p className="font-mono text-sm text-zinc-500 dark:text-zinc-400">
          /archive
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl">
          archive
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          a record of past projects, rough prototypes, and small experiments
          that helped shape how I build today.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group flex min-h-36 flex-col justify-between rounded-xl bg-zinc-100 p-5 transition-colors hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800"
            >
              <span className="font-mono text-[10px] uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
                {project.year}
              </span>
              <div>
                <h2 className="text-sm font-medium leading-5 text-zinc-900 dark:text-zinc-100">
                  {project.name}
                </h2>
                <p className="mt-1 font-mono text-[10px] leading-4 text-zinc-500 dark:text-zinc-400">
                  {project.kind}
                </p>
              </div>
            </article>
          ))}
        </div>

        <Link
          href="/"
          className="mt-8 inline-flex text-sm font-medium text-zinc-700 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:decoration-zinc-700 dark:hover:text-white"
        >
          ← back home
        </Link>
      </section>
    </main>
  );
}
