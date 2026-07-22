import Link from "next/link";

export const metadata = {
  title: "Archive | Hardik",
  description: "A collection of Hardik's small apps and other projects.",
};

export default function ArchivePage() {
  return (
    <main className="flex flex-1 items-center px-5 py-12 sm:py-16">
      <section className="mx-auto w-full max-w-4xl">
        <p className="font-mono text-sm text-zinc-500 dark:text-zinc-400">
          /archive
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl">
          Other projects
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          A collection of small apps, experiments, and useful things I&apos;m
          building.
        </p>

        <div className="mt-10 rounded-2xl border border-dashed border-zinc-300 px-6 py-14 text-center dark:border-zinc-700">
          <p className="font-mono text-sm uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Coming soon
          </p>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            I&apos;m putting the collection together.
          </p>
        </div>

        <Link
          href="/"
          className="mt-8 inline-flex text-sm font-medium text-zinc-700 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:decoration-zinc-700 dark:hover:text-white"
        >
          ← Back home
        </Link>
      </section>
    </main>
  );
}
