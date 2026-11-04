import Image from "next/image";
import type { Project } from "@/data/projects";

type ProjectHighlightsProps = {
  photos: NonNullable<Project["featuredPhotos"]>;
};

export default function ProjectHighlights({ photos }: ProjectHighlightsProps) {
  return (
    <div aria-label="Project highlights" className="mt-8 grid gap-4 sm:grid-cols-3">
      {photos.map((photo) => (
        <div
          key={photo.src}
          className="relative aspect-[4/3] overflow-hidden border border-white/25 bg-black/15"
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            unoptimized
            className="object-contain"
            sizes="(max-width: 640px) calc(100vw - 48px), (max-width: 1280px) 33vw, 416px"
          />
        </div>
      ))}
    </div>
  );
}
