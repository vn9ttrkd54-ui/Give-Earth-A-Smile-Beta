const videos = [
  {
    id: 1,
    src: "https://res.cloudinary.com/otmypjmz/video/upload/v1785090584/01_r1suzb.mp4",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/otmypjmz/video/upload/v1785090630/02_ekbkse.mp4",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/otmypjmz/video/upload/v1785090656/03_nyhz7t.mp4",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/otmypjmz/video/upload/v1785090694/04_spmnug.mp4",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/otmypjmz/video/upload/v1785090722/05_kplyjn.mp4",
  },
];

export default function TamilNaduProjectVideos() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {videos.map((video, index) => (
        <div
          key={video.id}
          className="overflow-hidden border border-[#294638] bg-black"
        >
          <video
            controls
            preload="metadata"
            className="aspect-video w-full object-contain"
          >
            <source
              src={video.src}
              type="video/mp4"
            />

            Your browser does not support the video tag.
          </video>

          <div className="bg-[#FFFAF0] px-4 py-3">
            <p className="text-sm font-bold text-[#233F31]">
              Project Video {index + 1}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}