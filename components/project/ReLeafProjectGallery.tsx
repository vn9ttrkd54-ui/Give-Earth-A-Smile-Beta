"use client";

import Image from "next/image";
import { useState } from "react";

type ReLeafProjectGalleryProps = {
  images: string[];
};

export default function ReLeafProjectGallery({
  images,
}: ReLeafProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedImage = images[selectedIndex];

  if (!selectedImage) {
    return null;
  }

  return (
    <div>
      <div className="relative aspect-[16/9] w-full overflow-hidden border border-[#294638] bg-[#E9EFD1] shadow-lg">
        <Image
          src={selectedImage}
          alt={`The Re-Leaf Project campaign image ${selectedIndex + 1}`}
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-contain"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-5 p-5 text-white md:p-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/75">
              Campaign Gallery
            </p>
            <p className="mt-2 text-lg font-semibold md:text-2xl">
              The Re-Leaf Project
            </p>
          </div>
          <p className="font-[var(--font-heading)] text-3xl">
            {String(selectedIndex + 1).padStart(2, "0")}
            <span className="text-lg text-white/70"> / {images.length}</span>
          </p>
        </div>
      </div>

      <div className="mx-auto mt-5 grid max-w-xl grid-cols-2 gap-4">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className={`relative aspect-[4/3] overflow-hidden border-2 transition duration-300 ${
              index === selectedIndex
                ? "scale-[1.02] border-[#233F31] shadow-md"
                : "border-transparent opacity-65 hover:opacity-100"
            }`}
            aria-label={`Show Re-Leaf campaign image ${index + 1}`}
          >
            <Image
              src={image}
              alt={`The Re-Leaf Project campaign image ${index + 1}`}
              fill
              sizes="300px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
