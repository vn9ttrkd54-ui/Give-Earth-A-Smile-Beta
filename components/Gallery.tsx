"use client";

import Image from "next/image";
import {
  KeyboardEvent as ReactKeyboardEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { galleryImages } from "@/data/gallery";
import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreenOpen, setFullscreenOpen] = useState(false);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  const showPrevious = useCallback(() => {
    setCurrentIndex((current) =>
      current === 0 ? galleryImages.length - 1 : current - 1,
    );
  }, []);

  const showNext = useCallback(() => {
    setCurrentIndex((current) =>
      current === galleryImages.length - 1 ? 0 : current + 1,
    );
  }, []);

  useEffect(() => {
    if (!autoplayEnabled || fullscreenOpen || galleryImages.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      showNext();
    }, 5000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [autoplayEnabled, fullscreenOpen, showNext]);

  useEffect(() => {
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

    return () => {
      window.removeEventListener("keydown", handleKeyboard);
    };
  }, [showNext, showPrevious]);

  useEffect(() => {
    document.body.style.overflow = fullscreenOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [fullscreenOpen]);

  function handleGalleryKeyboard(
    event: ReactKeyboardEvent<HTMLDivElement>,
  ) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setFullscreenOpen(true);
    }
  }

  const currentImage = galleryImages[currentIndex];

  return (
    <>
      <section className="bg-[#FFFAF0] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Moments of Impact"
            title="Our Gallery"
            description="Explore moments from our environmental projects, community service, educational outreach, and international collaborations."
          />

          <FadeIn delay={120} className="mt-12">
            <div
              className="group relative aspect-[16/9] cursor-zoom-in overflow-hidden border border-[#294638] bg-[#E9EFD1] shadow-xl"
              role="button"
              tabIndex={0}
              aria-label="Open gallery image in fullscreen"
              onClick={() => setFullscreenOpen(true)}
              onKeyDown={handleGalleryKeyboard}
              onMouseEnter={() => setAutoplayEnabled(false)}
              onMouseLeave={() => setAutoplayEnabled(true)}
            >
              {galleryImages.map((image, index) => (
                <Image
                  key={image.id}
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className={`object-cover transition-all duration-700 ${
                    index === currentIndex
                      ? "scale-100 opacity-100"
                      : "pointer-events-none scale-105 opacity-0"
                  }`}
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-5 text-white md:p-8">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/75">
                    Gallery
                  </p>

                  <p className="mt-2 max-w-2xl text-lg font-semibold md:text-2xl">
                    {currentImage.alt}
                  </p>
                </div>

                <p className="shrink-0 font-[var(--font-heading)] text-3xl">
                  {String(currentIndex + 1).padStart(2, "0")}
                  <span className="text-lg text-white/65">
                    {" "}
                    / {String(galleryImages.length).padStart(2, "0")}
                  </span>
                </p>
              </div>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrevious();
                }}
                className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/70 bg-black/35 text-3xl text-white backdrop-blur-sm transition hover:scale-110 hover:bg-[#233F31] md:left-7"
                aria-label="Previous gallery image"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/70 bg-black/35 text-3xl text-white backdrop-blur-sm transition hover:scale-110 hover:bg-[#233F31] md:right-7"
                aria-label="Next gallery image"
              >
                ›
              </button>
            </div>

            <div className="mt-5 flex flex-col items-center justify-between gap-5 md:flex-row">
              <div className="grid w-full grid-cols-4 gap-3 md:max-w-3xl">
                {galleryImages.map((image, index) => (
                  <button
                    key={image.id}
                    type="button"
                    onClick={() => setCurrentIndex(index)}
                    className={`relative aspect-[4/3] overflow-hidden border-2 transition-all duration-300 ${
                      index === currentIndex
                        ? "scale-[1.02] border-[#233F31] shadow-md"
                        : "border-transparent opacity-65 hover:opacity-100"
                    }`}
                    aria-label={`Show gallery image ${index + 1}`}
                  >
                    <Image
                      src={image.src}
                      alt=""
                      fill
                      sizes="180px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setAutoplayEnabled((current) => !current)}
                className="min-w-40 border border-[#294638] px-5 py-3 text-sm font-bold text-[#233F31] transition hover:bg-[#233F31] hover:text-white"
              >
                {autoplayEnabled ? "Pause Slideshow" : "Play Slideshow"}
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {fullscreenOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10"
          role="dialog"
          aria-modal="true"
          aria-label="Fullscreen gallery"
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

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            className="absolute left-4 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center border border-white/60 text-4xl text-white transition hover:bg-white hover:text-black md:left-8"
            aria-label="Previous fullscreen image"
          >
            ‹
          </button>

          <div
            className="relative h-[80vh] w-full max-w-7xl"
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

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-4 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center border border-white/60 text-4xl text-white transition hover:bg-white hover:text-black md:right-8"
            aria-label="Next fullscreen image"
          >
            ›
          </button>

          <div className="absolute bottom-5 left-1/2 w-[90%] max-w-3xl -translate-x-1/2 text-center text-white">
            <p className="text-lg font-semibold">{currentImage.alt}</p>

            <p className="mt-2 text-sm text-white/70">
              {currentIndex + 1} of {galleryImages.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}