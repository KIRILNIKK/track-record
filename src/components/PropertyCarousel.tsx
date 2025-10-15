"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

type CarouselImage = {
  src: string;
  alt: string;
};

type PropertyCarouselProps = {
  title: string;
  images: CarouselImage[];
};

export function PropertyCarousel({ title, images }: PropertyCarouselProps) {
  const safeImages = useMemo(
    () => images.filter((image) => image.src && image.alt),
    [images],
  );
  const [index, setIndex] = useState(0);

  if (safeImages.length === 0) {
    return null;
  }

  const previous = () =>
    setIndex((current) =>
      current === 0 ? safeImages.length - 1 : current - 1,
    );

  const next = () =>
    setIndex((current) =>
      current === safeImages.length - 1 ? 0 : current + 1,
    );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          {title}
        </p>
        <span className="text-xs font-medium text-slate-500">
          {index + 1} / {safeImages.length}
        </span>
      </div>
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
        <button
          type="button"
          onClick={previous}
          aria-label="Previous photo"
          className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/70 bg-white/80 px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next photo"
          className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/70 bg-white/80 px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
        >
          ›
        </button>
        <div className="relative h-80 w-full">
          <Image
            key={safeImages[index].src}
            src={safeImages[index].src}
            alt={safeImages[index].alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="flex justify-center gap-2">
        {safeImages.map((image, indicatorIndex) => (
          <button
            key={image.src}
            type="button"
            aria-label={`View photo ${indicatorIndex + 1}`}
            onClick={() => setIndex(indicatorIndex)}
            className={`h-2 w-2 rounded-full transition ${
              indicatorIndex === index ? "bg-slate-800" : "bg-slate-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
