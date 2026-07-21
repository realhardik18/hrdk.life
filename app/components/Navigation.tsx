import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Navigation() {
  return (
    <header className="w-full border-b border-zinc-200 dark:border-zinc-800">
      <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-zinc-900 dark:text-zinc-100"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            Projects
          </Link>
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
}
