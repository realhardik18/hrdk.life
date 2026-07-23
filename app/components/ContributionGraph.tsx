"use client";

import { useMemo } from "react";

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
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

function generateContributions(username: string): ContributionData {
  const weeks: ContributionWeek[] = [];
  const today = new Date();
  let totalContributions = 0;
  let seed = Array.from(username).reduce(
    (value, character) => (value * 31 + character.charCodeAt(0)) >>> 0,
    7,
  );
  const random = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };

  for (let week = 52; week >= 0; week--) {
    const contributionDays: ContributionDay[] = [];

    for (let day = 0; day < 7; day++) {
      const date = new Date(today);
      date.setDate(date.getDate() - (week * 7 + (6 - day)));

      const activity = random();
      let level = 0;
      let count = 0;

      if (activity > 0.43) {
        level = Math.min(4, Math.floor(random() * 5) + 1);
        count = level * (Math.floor(random() * 5) + 1);
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
  const data = useMemo(() => generateContributions(username), [username]);

  const monthLabels = getMonthLabels(data.weeks);
  return (
    <section className="w-full">
      <h3 className="mb-4 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
        contribution activity
      </h3>
      <div className="overflow-x-auto pb-1">
        <div className="min-w-[700px]">
          <div className="mb-2 ml-8 flex justify-between pr-1 text-[10px] text-zinc-400 dark:text-zinc-500">
            {monthLabels.map(({ month, index }) => (
              <span key={`${month}-${index}`}>{month}</span>
            ))}
          </div>
          <div className="flex gap-2">
            <div className="grid grid-rows-7 gap-[3px] pt-px text-right text-[10px] leading-[11px] text-zinc-400 dark:text-zinc-500">
              <span />
              <span>mon</span>
              <span />
              <span>wed</span>
              <span />
              <span>fri</span>
              <span />
            </div>
            <div className="flex gap-[3px]">
              {data.weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-[3px]">
                  {week.contributionDays.map((day) => (
                    <div
                      key={day.date}
                      className={`size-[11px] rounded-[3px] transition-transform duration-150 hover:scale-125 contribution-level-${day.level}`}
                      title={`${day.count} contributions on ${day.date}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
