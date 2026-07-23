"use client";

import Image from "next/image";
import { useState } from "react";

const projectImages = Array.from({ length: 13 }, (_, index) => ({
  id: index + 1,
  src: `/images/projects/smart-classrooms-tamil-nadu/${String(
    index + 1,
  ).padStart(2, "0")}.jpg`,
  alt: `Smart Classrooms in Tamil Nadu project photo ${index + 1}`,
}));

export default function TamilNaduProjectGallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedImage = projectImages[selectedIndex];

  return (
    <div>
      {/* Main Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden border border-[#294638] bg-[#E9EFD1] shadow-lg">
        <Image
          src={selectedImage.src}
          alt={selectedImage.alt}
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-5 p-5 text-white md:p-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/75">
              Project Gallery
            </p>

            <p className="mt-2 text-lg font-semibold md:text-2xl">
              Smart Classrooms in Tamil Nadu
            </p>
          </div>

          <p className="font-[var(--font-heading)] text-3xl">
            {String(selectedIndex + 1).padStart(2, "0")}
            <span className="text-lg text-white/70">
              {" "}
              / {projectImages.length}
            </span>
          </p>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-5 md:grid-cols-7">
        {projectImages.map((image, index) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className={`relative aspect-[4/3] overflow-hidden border-2 transition duration-300 ${
              index === selectedIndex
                ? "scale-[1.02] border-[#233F31] shadow-md"
                : "border-transparent opacity-65 hover:opacity-100"
            }`}
            aria-label={`Show project image ${index + 1}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="200px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}