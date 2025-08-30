"use client"
import { Dithering } from "@paper-design/shaders-react"
import type React from "react"
import { TimeIST } from "@/components/time-ist"
import { useState, useEffect, useRef } from "react"
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6"
import { HiOutlineMail } from "react-icons/hi"
import { cn } from "@/lib/utils"

const SOCIALS = {
  x: "https://x.com/hrdktwt",
  github: "https://github.com/realhardik18",
  linkedin: "https://www.linkedin.com/in/realhardik18",
  email: "mailto:hrdk.biz@gmail.com",
}

type Project = {
  title: string
  url?: string
  label: string
  color: "blue" | "yellow" | "purple" | "orange"
  comingSoon?: boolean
  description?: string
  metric?: string
  image?: string // Added image property
}

const projects: Project[] = [
  {
    title: "kozu",
    url: "https://mykozu.xyz",
    label: "View project",
    color: "blue",
    description: "turn youtube videos into structured courses. track your progress, and get daily tasks that keeps you on track",
    metric: "1.3k+ users",
    image: "/icons/kozu.jpg", // Added image path
  },
  {
    title: "steal this idea",
    url: "https://steal-this-idea.vercel.app",
    label: "View project",
    color: "yellow",
    description: "curated startup ideas from top industry minds, neatly organized from their tweets into one collection",
    metric: "30k+ views",
    image: "/icons/std.png",
  },
  {
    title: "grindset.club",
    label: "Coming soon",
    color: "purple",
    description: "next big thing in the productivity niche",
    comingSoon: true,
    metric: "work in progress",
    image: "/icons/soon.png", // Added image path
  },
  {
    title: "peer ai",
    label: "Coming soon",
    color: "orange",
    comingSoon: true,
    description: "next big thing in the ed-tech niche",
    metric: "work in progress",
    image: "/icons/soon.png", // Added image path
  },
]

function hueClasses(color: Project["color"]) {
  switch (color) {
    case "blue":
      return {
        hoverBg: "group-hover:bg-blue-500/10",
        ring: "ring-blue-500/30",
        hoverRing: "hover:ring-blue-500",
        button: "bg-blue-500 text-black hover:bg-blue-400 focus-visible:outline-blue-400",
      }
    case "yellow":
      return {
        hoverBg: "group-hover:bg-yellow-400/10",
        ring: "ring-yellow-400/30",
        hoverRing: "hover:ring-yellow-400",
        button: "bg-yellow-400 text-black hover:bg-yellow-300 focus-visible:outline-yellow-300",
      }
    case "purple":
      return {
        hoverBg: "group-hover:bg-purple-500/10",
        ring: "ring-purple-500/30",
        hoverRing: "hover:ring-purple-500",
        button: "bg-purple-500 text-black hover:bg-purple-400 focus-visible:outline-purple-400",
      }
    case "orange":
      return {
        hoverBg: "group-hover:bg-orange-500/10",
        ring: "ring-orange-500/30",
        hoverRing: "hover:ring-orange-500",
        button: "bg-orange-500 text-black hover:bg-orange-400 focus-visible:outline-orange-400",
      }
  }
}

function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode
  delay?: number
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-500 will-change-transform",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default function Home() {
  const [colorFront, setColorFront] = useState("hsl(0, 100%, 50%)")

  useEffect(() => {
    let hue = 0
    const interval = setInterval(() => {
      hue = (hue + 1) % 360
      setColorFront(`hsl(${hue}, 100%, 50%)`)
    }, 50) // Adjust the interval for smoother or faster transitions
    return () => clearInterval(interval)
  }, [])

  const failedIdeas: [string, string, string][] = [
    ["finmeds", "ai powered medical policy reader", "https://github.com/realhardik18/medithon_syntax-error"],
    ["spotibuddy", "veiw your spotify stats all in one place", "https://github.com/realhardik18/SpotiBuddy"],
    ["vc recorder", "discord.py bot to record audio from a vc", "https://github.com/realhardik18/discord.py-voice-recorder"],
    ["find the suii", "silly game i made where you have to find the invisible ronaldo", "https://github.com/realhardik18/find-the-suii"],
    ["math helper", "discord bot to help you solve your homework", "https://github.com/realhardik18/math-helper"],
    ["menuchef", "ai generated e-menu cards based on location and weather", "https://github.com/realhardik18/MenuChef"],
    ["jinsei", "tool to help you plant a plant based on certain parameters", "https://github.com/realhardik18/Jinsei"],
    ["sports lizar", "ball by ball cricket updates right in discord", "https://github.com/realhardik18/sport-lizar"],
    ["grillit", "website to roast your reddit account", "https://github.com/realhardik18/GrillIt"],
    ["quizme.mp3", "generate quizzes based on audio files", "https://github.com/realhardik18/quizme.mp3"],
    ["LyricsBoard", "generate lyrics boards for your favorite songs", "https://github.com/realhardik18/LyricsBoard"],
    ["telecap", "iot project to help families monitor tv time", "https://github.com/realhardik18/Telecap"],
    ["musician bot", "discord bot to play music in the vc", "https://github.com/realhardik18/musician-bot"],
    ["ting ting", "agentic ai powered reminders which calls you to remind you", "https://github.com/realhardik18/tinggg"],
    ["family guy bot", "gives out clips from the show", "https://github.com/realhardik18/TheFamilyGuyBot"],
    ["bowling mania", "another silly game i made for mix and game jam 2020", "https://realhardik18.itch.io/bowling-mania"],
  ]
  const failedRows = Array.from({ length: 5 }, (_, i) => failedIdeas.slice(i * 3, i * 3 + 3))

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left: Content */}
      <main className="relative w-full md:w-3/4 md:h-screen bg-black overflow-y-auto no-scrollbar">
        {/* IST time badge pinned to top-right of the left content panel */}
        <div className="absolute right-3 top-3 md:right-4 md:top-4 z-10">
          <TimeIST />
        </div>

        <div className="mx-auto max-w-5xl px-4 py-8 md:px-8 md:py-12">
          {/* Header */}
          <header className="flex items-center gap-4 md:gap-6 mb-3 md:mb-4">
            <img
              src="/pfp.jpg"
              alt="Profile picture"
              className="h-14 w-14 md:h-20 md:w-20 rounded-none ring-1 ring-white/10"
            />
            <h1 className="text-pretty text-4xl md:text-6xl font-semibold tracking-tight">yo, I&apos;m hrdk</h1>
          </header>

          {/* Socials */}
          <section className="mb-6 md:mb-8">
            <h2 className="sr-only">Social links</h2>
            <ul className="flex flex-wrap items-center gap-3 md:gap-4">
              <li>
                <a
                  href={SOCIALS.x}
                  aria-label="X (Twitter)"
                  title="X (Twitter)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors"
                >
                  <FaXTwitter className="h-5 w-5 text-white/80 hover:text-white" />
                </a>
              </li>
              <li>
                <a
                  href={SOCIALS.github}
                  aria-label="GitHub"
                  title="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors"
                >
                  <FaGithub className="h-5 w-5 text-white/80 hover:text-white" />
                </a>
              </li>
              <li>
                <a
                  href={SOCIALS.linkedin}
                  aria-label="LinkedIn"
                  title="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors"
                >
                  <FaLinkedin className="h-5 w-5 text-white/80 hover:text-white" />
                </a>
              </li>
              <li>
                <a
                  href={SOCIALS.email}
                  aria-label="Send email"
                  title="Send email"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors"
                >
                  <HiOutlineMail className="h-5 w-5 text-white/80 hover:text-white" />
                </a>
              </li>
            </ul>
          </section>

          {/* Intro */}
          <section className="space-y-4 md:space-y-6 text-lg md:text-xl leading-relaxed text-white/80">
            <p>
              19 y/o builder from blr, india. i love to cook software with taste, speed and vibes after which i try to scale them up to the moon. currently learning how to write better code and growing my side projects.
            </p>
            <p>
              open for new opportunities 24/7. looking forward to learning more everyday and being perpetually curious. if not coding, find me at the gym or grinding clash royale.
            </p>
          </section>

          {/* Projects */}
          <section className="mt-10 md:mt-14">
            <Reveal>
              <h2 className="mb-4 md:mb-6 text-2xl md:text-3xl font-semibold tracking-tight">showcase</h2>
            </Reveal>
            <Reveal delay={75}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                {projects.map((p, idx) => {
                  const c = hueClasses(p.color)
                  return (
                    <div
                      key={p.title}
                      className={cn(
                        "group relative rounded-xl bg-black ring-1 ring-white/10 transition-all duration-200 hover:-translate-y-1 p-4 md:p-5",
                        c.hoverRing,
                        c.hoverBg,
                      )}
                      style={{ transitionDelay: `${idx * 15}ms` }}
                    >
                      <div className="flex h-full flex-col gap-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={p.image}
                            alt={`${p.title} logo`}
                            className="h-6 w-6 rounded-sm ring-1 ring-white/10 bg-white/5 shrink-0"
                          />
                          <h3 className="text-lg md:text-xl font-medium text-white">{p.title}</h3>
                        </div>
                        <div className="mt-1 min-h-12">
                          {p.description ? (
                            <p className="text-white/70 text-sm md:text-[15px] leading-6">
                              {p.description.split("\n").map((line, i) => (
                                <span key={i} className="block">
                                  {line}
                                </span>
                              ))}
                            </p>
                          ) : null}
                        </div>
                        <div className="mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                          {p.url && !p.comingSoon ? (
                            <a
                              href={p.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={cn(
                                "inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
                                c.button,
                              )}
                              aria-label={`Open ${p.title}`}
                              title={p.title}
                            >
                              {p.label || "View project"}
                            </a>
                          ) : (
                            <button
                              disabled
                              tabIndex={-1}
                              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium bg-white/10 text-white/60 cursor-not-allowed"
                              aria-disabled="true"
                              aria-label={`${p.title} coming soon`}
                              title="Coming soon"
                            >
                              {p.label || "Coming soon"}
                            </button>
                          )}
                          <span className="text-xs md:text-sm text-white/70">
                            {p.metric || (p.comingSoon ? "coming soon" : "")}
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </Reveal>
          </section>

          {/* Hackathon wins */}
          <section className="mt-12 md:mt-16">
            <Reveal>
              <h2 className="mb-4 md:mb-6 text-2xl md:text-3xl font-semibold tracking-tight">hackathon w&apos;s</h2>
            </Reveal>
            <Reveal delay={75}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                {[
                  { title: "winner @boot.dev hackathon", note: "built pokemusic, a website which predicts what playlist a pokemon would listen to based off of their stats and abilites. uses both the spotify and the pokemon api.", post: "https://blog.boot.dev/news/hackathon-sept-2022/", project: "https://github.com/realhardik18/PokeMusic" },
                  { title: "runner up @dev x redis hackathon", note: "built bookwheat, a twitter bot which you can tag under any post to categorically save tweets, keep them all in one place and view them on the website.", post: "https://dev.to/devteam/redis-hackathon-winners-announced-524d", project: "https://github.com/realhardik18/Book-Wheat" },
                  { title: "runner up @dev x appwrite hackathon", note: "built topowars, a geoguessr like game right in discord. guess the capital of cities and the country based on images. it also has a custom economy system to score and store points", post: "https://dev.to/devteam/congrats-to-the-appwrite-hackathon-winners-4dk9", project: "https://github.com/realhardik18/Topowars" },
                  { title: "runner up @break-a-thon", note: "built moodnight, an attempt to make a smart discord music bot. based on the emotion of your speech, it queues relevant music. jaggy as hell but it was very fun to build.", post: "https://ibb.co/ymWcbRhL", project: "https://github.com/realhardik18/MoodNight" },
                ].map((h, i) => (
                  <div
                    key={h.title}
                    className="group rounded-xl bg-black ring-1 ring-white/10 transition-all hover:-translate-y-1 hover:ring-2 hover:ring-white/70 hover:shadow-2xl p-4 md:p-5"
                    style={{ transitionDelay: `${i * 20}ms` }}
                  >
                    <div className="flex h-full flex-col gap-4">
                      <div>
                        <h3 className="text-lg md:text-xl font-medium text-white">{h.title}</h3>
                        <div className="mt-1 min-h-12">
                          <p className="text-sm md:text-[15px] text-white/70 leading-6">{h.note}</p>
                        </div>
                      </div>
                      <div className="mt-auto flex items-center justify-end gap-2">
                        <a
                          href={h.post || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium bg-white/10 text-white hover:bg-white/20 focus-visible:bg-white focus-visible:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                          aria-label={`View post for ${h.title}`}
                          title="View post"
                        >
                          View post
                        </a>
                        <a
                          href={h.project || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium bg-white/10 text-white hover:bg-white/20 focus-visible:bg-white focus-visible:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                          aria-label={`View project for ${h.title}`}
                          title="View project"
                        >
                          View project
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </section>

          {/* Failed Experiments */}
          <section className="mt-12 md:mt-16">
            <Reveal>
              <h2 className="mb-4 md:mb-6 text-2xl md:text-3xl font-semibold tracking-tight">more projects</h2>
            </Reveal>
            <Reveal delay={75}>
              <div className="overflow-x-auto">
                <table className="w-full table-fixed border-separate border-spacing-0">
                  <tbody>
                    {failedRows.map((row, ri) => (
                      <tr key={ri}>
                        {row.map(([name, desc, href]) => (
                          <td key={name} className="align-top p-0 border border-white/10">
                            <a
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group relative block w-full h-full p-3 md:p-4 cursor-pointer text-white/90 transition-colors hover:text-black focus-visible:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                              aria-label={`open ${name} on github`}
                            >
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-0 rounded-none bg-white opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100"
                              />
                              <p className="relative z-10 text-sm md:text-[15px] leading-6">
                                <span className="font-medium">{name}</span>{" "}
                                <span className="opacity-70">({desc})</span>
                              </p>
                            </a>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 md:mt-5">
                <a
                  href={SOCIALS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base text-white/80 hover:text-white underline underline-offset-4"
                  aria-label="see many more projects on my github"
                >
                  find even more on my github
                </a>
              </div>
              <h3 className="mb-4 md:mb-6 text-2xl md:text-3xl font-semibold tracking-tight pt-10">reach out &amp; more</h3>
              {/* Finishing note under the GitHub link */}
              <p className="mt-3 text-sm md:text-base text-white/80">
                I&apos;m always open for gigs. I&apos;ve freelanced and delivered for 30+ clients. You can contact me via{" "}
                <a
                  href={SOCIALS.email}
                  className="underline underline-offset-4 hover:text-white"
                  aria-label="send me an email"
                >
                  email
                </a>{" "}
                or on{" "}
                <a
                  href={SOCIALS.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-white"
                  aria-label="message me on x"
                >
                  X
                </a>
                . Click{" "}
                <a href="/blogs" className="underline underline-offset-4 hover:text-white" aria-label="read my blogs">
                  <span className="underline">here</span>
                </a>{" "}
                to read my blogs. thank you for visiting have a great day ahead!
              </p>
            </Reveal>
          </section>
        </div>
      </main>

      {/* Right: Dithering strip */}
      <aside className="w-full md:w-1/4 h-56 md:h-screen md:sticky md:top-0 relative">
        <Dithering
          style={{ height: "100%", width: "100%" }}
          colorBack="rgb(0, 0, 0)"
          colorFront={colorFront}
          shape="simplex"
          type="4x4"
          pxSize={2}
          offsetX={0}
          offsetY={0}
          scale={0.5}
          rotation={0}
          speed={1}
        />
      </aside>
    </div>
  )
}