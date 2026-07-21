"use client";

import { useEffect, useState } from "react";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface ContributionData {
  totalContributions: number;
  weeks: ContributionWeek[];
}

const MONTHS = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

function generateMockContributions(): ContributionData {
  const weeks: ContributionWeek[] = [];
  const today = new Date();
  let totalContributions = 0;

  // Generate 52 weeks of data
  for (let week = 51; week >= 0; week--) {
    const contributionDays: ContributionDay[] = [];

    for (let day = 0; day < 7; day++) {
      const date = new Date(today);
      date.setDate(date.getDate() - (week * 7 + (6 - day)));

      // Random contribution level (0-4)
      const random = Math.random();
      let level = 0;
      let count = 0;

      if (random > 0.7) {
        level = Math.floor(Math.random() * 4) + 1;
        count = level * Math.floor(Math.random() * 3 + 1);
        totalContributions += count;
      }

      contributionDays.push({
        date: date.toISOString().split("T")[0],
        count,
        level,
      });
    }

    weeks.push({ contributionDays });
  }

  return { totalContributions, weeks };
}

function getMonthLabels(weeks: ContributionWeek[]): { month: string; index: number }[] {
  const labels: { month: string; index: number }[] = [];
  let lastMonth = -1;

  weeks.forEach((week, index) => {
    if (week.contributionDays.length > 0) {
      const date = new Date(week.contributionDays[0].date);
      const month = date.getMonth();

      if (month !== lastMonth) {
        labels.push({ month: MONTHS[month], index });
        lastMonth = month;
      }
    }
  });

  return labels;
}

export function ContributionGraph({ username }: { username: string }) {
  const [data, setData] = useState<ContributionData | null>(null);

  useEffect(() => {
    // Using mock data for demonstration
    // In production, you'd fetch from GitHub API
    setData(generateMockContributions());
  }, [username]);

  if (!data) {
    return (
      <div className="h-32 bg-zinc-100 dark:bg-zinc-800 rounded-lg animate-pulse" />
    );
  }

  const monthLabels = getMonthLabels(data.weeks);
  const currentYear = new Date().getFullYear();
  const lastYear = currentYear - 1;

  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <div className="min-w-fit">
          {/* Month labels */}
          <div className="flex mb-2 text-xs text-zinc-500 dark:text-zinc-500">
            <div className="w-8" />
            <div className="flex" style={{ gap: "3px" }}>
              {monthLabels.map(({ month, index }) => (
                <div
                  key={`${month}-${index}`}
                  className="text-[10px] tracking-wider"
                  style={{
                    position: "relative",
                    left: `${index * 13}px`,
                    marginRight: "-10px",
                  }}
                >
                  {month}
                </div>
              ))}
            </div>
          </div>

          {/* Contribution grid */}
          <div className="flex gap-[3px]">
            {data.weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-[3px]">
                {week.contributionDays.map((day, dayIndex) => (
                  <div
                    key={`${weekIndex}-${dayIndex}`}
                    className={`w-[10px] h-[10px] rounded-sm contribution-level-${day.level}`}
                    title={`${day.count} contributions on ${day.date}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between mt-3 text-xs text-zinc-500 dark:text-zinc-500">
        <span className="font-medium">
          <span className="text-zinc-900 dark:text-zinc-100 font-semibold">
            {data.totalContributions}
          </span>{" "}
          CONTRIBUTIONS · {lastYear}-{currentYear.toString().slice(-2)}
        </span>
        <div className="flex items-center gap-1">
          <span>LESS</span>
          <div className="flex gap-[2px]">
            {[0, 1, 2, 3, 4].map((level) => (
              <div
                key={level}
                className={`w-[10px] h-[10px] rounded-sm contribution-level-${level}`}
              />
            ))}
          </div>
          <span>MORE</span>
        </div>
      </div>
    </div>
  );
}
