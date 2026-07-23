const videos = Array.from({ length: 5 }, (_, index) => ({
  id: index + 1,
  src: `/images/projects/smart-classrooms-tamil-nadu/${String(
    index + 1,
  ).padStart(2, "0")}.mp4`,
}));

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
            <source src={video.src} type="video/mp4" />

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