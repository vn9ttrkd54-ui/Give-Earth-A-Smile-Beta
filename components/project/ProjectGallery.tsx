"use client";

import Image from "next/image";
import {
  KeyboardEvent as ReactKeyboardEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { ProjectGalleryImage } from "@/data/projects";

type ProjectGalleryProps = {
  images: ProjectGalleryImage[];
};

export default function ProjectGallery({
  images,
}: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreenOpen, setFullscreenOpen] = useState(false);

  const showPrevious = useCallback(() => {
    setCurrentIndex((current) =>
      current === 0 ? images.length - 1 : current - 1,
    );
  }, [images.length]);

  const showNext = useCallback(() => {
    setCurrentIndex((current) =>
      current === images.length - 1 ? 0 : current + 1,
    );
  }, [images.length]);

  useEffect(() => {
    if (!fullscreenOpen) {
      return;
    }

    function handleKeyboard(event: KeyboardEvent) {
      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }

      if (event.key === "Escape") {
        setFullscreenOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyboard);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyboard);
      document.body.style.overflow = "";
    };
  }, [fullscreenOpen, showNext, showPrevious]);

  function openImage(index: number) {
    setCurrentIndex(index);
    setFullscreenOpen(true);
  }

  function handleImageKeyboard(
    event: ReactKeyboardEvent<HTMLDivElement>,
    index: number,
  ) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openImage(index);
    }
  }

  if (images.length === 0) {
    return null;
  }

  const currentImage = images[currentIndex];

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <div
            key={image.id}
            role="button"
            tabIndex={0}
            onClick={() => openImage(index)}
            onKeyDown={(event) => handleImageKeyboard(event, index)}
            className={`group relative cursor-zoom-in overflow-hidden border border-[#294638] ${
              index === 0
                ? "aspect-[16/10] md:col-span-2 lg:row-span-2 lg:aspect-auto"
                : "aspect-[4/3]"
            }`}
            aria-label={`Open image ${index + 1} in fullscreen`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={
                index === 0
                  ? "(max-width: 1024px) 100vw, 66vw"
                  : "(max-width: 768px) 100vw, 33vw"
              }
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70 transition group-hover:opacity-100" />

            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
              <p className="text-sm font-semibold">
                {image.caption ?? image.alt}
              </p>

              <p className="mt-2 text-xs font-bold uppercase tracking-[0.15em] text-white/70">
                Image {index + 1} of {images.length}
              </p>
            </div>
          </div>
        ))}
      </div>

      {fullscreenOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10"
          role="dialog"
          aria-modal="true"
          aria-label="Project image gallery"
          onClick={() => setFullscreenOpen(false)}
        >
          <button
            type="button"
            onClick={() => setFullscreenOpen(false)}
            className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center border border-white/60 text-3xl text-white transition hover:bg-white hover:text-black"
            aria-label="Close fullscreen gallery"
          >
            ×
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrevious();
                }}
                className="absolute left-4 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center border border-white/60 text-4xl text-white transition hover:bg-white hover:text-black md:left-8"
                aria-label="Previous project image"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                className="absolute right-4 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center border border-white/60 text-4xl text-white transition hover:bg-white hover:text-black md:right-8"
                aria-label="Next project image"
              >
                ›
              </button>
            </>
          )}

          <div
            className="relative h-[78vh] w-full max-w-7xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <div className="absolute bottom-5 left-1/2 w-[85%] max-w-3xl -translate-x-1/2 text-center text-white">
            <p className="font-semibold">
              {currentImage.caption ?? currentImage.alt}
            </p>

            <p className="mt-2 text-sm text-white/65">
              {currentIndex + 1} of {images.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}