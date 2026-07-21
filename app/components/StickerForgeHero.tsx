"use client";

import Script from "next/script";
import Image from "next/image";
import { createElement, useEffect, useRef } from "react";
import { SocialLinks } from "./SocialLinks";

type StickerSource = {
  type: "text";
  text: string;
  fontFamily: string;
  fontWeight: number;
  color: string;
  richText: {
    blocks: Array<{
      align: "center";
      lineHeight: number;
      runs: Array<{
        text: string;
        color: string;
        fontSize: number;
        fontWeight: number;
        underline: boolean;
      }>;
    }>;
  };
};

type StickerOptions = {
  outline: {
    width: number;
    color: string;
  };
  shadow: {
    opacity: number;
    blur: number;
    distance: number;
    angle: number;
    color: string;
  };
  peel: {
    radius: number;
    stiffness: number;
    grabWidth: number;
    maxAngle: number;
    release: "snap";
  };
  sound: {
    enabled: boolean;
    volume: number;
  };
  back: {
    color: string;
    gloss: number;
    roughness: number;
  };
  tilt: number;
  wind: number;
  quality: "high";
};

type StickerForgeElement = HTMLElement & {
  setSource: (source: StickerSource) => Promise<void>;
  setOptions: (options: StickerOptions) => void;
};

const stickerSource: StickerSource = {
  type: "text",
  text: "HRDK",
  fontFamily: "Arial Rounded MT Bold, Arial Black, sans-serif",
  fontWeight: 900,
  color: "#19191d",
  richText: {
    blocks: [
      {
        align: "center",
        lineHeight: 1.2,
        runs: [
          {
            text: "HRDK",
            color: "rgb(25, 25, 29)",
            fontSize: 28,
            fontWeight: 900,
            underline: false,
          },
        ],
      },
    ],
  },
};

const stickerOptions: StickerOptions = {
  outline: {
    width: 10,
    color: "#ffffff",
  },
  shadow: {
    opacity: 0.34,
    blur: 12,
    distance: 8,
    angle: 42,
    color: "#191823",
  },
  peel: {
    radius: 0.2,
    stiffness: 0.72,
    grabWidth: 22,
    maxAngle: 3.55,
    release: "snap",
  },
  sound: {
    enabled: true,
    volume: 0.68,
  },
  back: {
    color: "#f7f5f2",
    gloss: 0.7,
    roughness: 0.3,
  },
  tilt: -3,
  wind: 0.25,
  quality: "high",
};

export function StickerForgeHero() {
  const stickerRef = useRef<StickerForgeElement | null>(null);

  useEffect(() => {
    let mounted = true;

    async function initializeSticker() {
      if (!("customElements" in window)) {
        return;
      }

      await customElements.whenDefined("sticker-forge");

      if (!mounted || !stickerRef.current) {
        return;
      }

      await stickerRef.current.setSource(stickerSource);
      stickerRef.current.setOptions(stickerOptions);
    }

    initializeSticker();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <main className="flex flex-1 flex-col items-center px-5 py-8 sm:py-10">
      <Script
        type="module"
        src="https://sticker.oooo.so/embed/sticker-forge.es.js"
        strategy="afterInteractive"
      />

      <section className="grid w-full max-w-4xl items-start gap-5 sm:grid-cols-[132px_1fr]">
        <div className="size-28 overflow-hidden rounded-[28px] border border-zinc-200 bg-zinc-100 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:size-32">
          <Image
            src="https://unavatar.io/x/hrdktwt"
            alt="Hardik profile"
            width={128}
            height={128}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-4">
            <div className="-ml-3 -mt-3 min-w-0">
              {/*
                React does not type-check custom element methods, so the ref is
                narrowed above before calling the sticker-forge API.
              */}
              {createElement("sticker-forge", {
                id: "my-sticker",
                ref: stickerRef,
                style: {
                  display: "block",
                  width: "min(260px, 100%)",
                  height: "88px",
                  outline: "none",
                  userSelect: "none",
                  WebkitTapHighlightColor: "transparent",
                  WebkitTouchCallout: "none",
                  WebkitUserSelect: "none",
                },
              })}
            </div>

            <div className="-mr-2 hidden text-zinc-400 sm:block dark:text-zinc-500">
              <SocialLinks />
            </div>
          </div>

          <p className="mt-1 text-sm leading-7 text-zinc-500 dark:text-zinc-400 sm:text-base">
            hrdk <span className="px-1 text-zinc-300">.</span> /hahr-dik/{" "}
            <span className="px-1 text-zinc-300">.</span> developer{" "}
            <span className="px-1 text-zinc-300">.</span> he/him
          </p>
        </div>
      </section>

      <section className="mt-8 w-full max-w-4xl">
        <div className="max-w-3xl">
          <h1 className="text-base font-medium tracking-normal text-zinc-900 dark:text-zinc-100">
            About
          </h1>
          <p className="mt-3 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            I&apos;m Hardik, a developer building clean, useful web experiences.
            This space collects the projects, tools, and ideas I&apos;m working
            on.
          </p>
        </div>
      </section>
    </main>
  );
}
