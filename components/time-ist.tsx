"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { HiOutlineLocationMarker } from "react-icons/hi"

function getISTTimeString(): string {
  const now = new Date()
  // Format 24h time in Asia/Kolkata, then keep separators for hh:mm:ss
  const formatted = new Intl.DateTimeFormat(undefined, {
    timeZone: "Asia/Kolkata",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(now)
  return formatted
}

export function TimeIST({ className }: { className?: string }) {
  const [time, setTime] = useState(getISTTimeString())

  useEffect(() => {
    const id = setInterval(() => setTime(getISTTimeString()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 text-xs md:text-sm text-white/80 px-2 py-1 rounded-md border border-white/10 bg-black/40 backdrop-blur",
        "shadow-sm",
        className,
      )}
      aria-live="polite"
      aria-label={`bengaluru time ${time}`}
      title={`blr | ${time} ist`}
    >
      {/* Prepend location icon */}
      <HiOutlineLocationMarker className="h-4 w-4 text-white/70" aria-hidden="true" />
      {"blr | "}
      {time}
    </div>
  )
}
