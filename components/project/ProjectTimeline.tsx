import FadeIn from "@/components/FadeIn";
import { ProjectTimelineItem } from "@/data/projects";

type ProjectTimelineProps = {
  timeline: ProjectTimelineItem[];
};

export default function ProjectTimeline({
  timeline,
}: ProjectTimelineProps) {
  return (
    <div className="relative">
      <div className="absolute bottom-0 left-[23px] top-0 w-px bg-[#294638]/25 md:left-1/2" />

      <div className="space-y-10">
        {timeline.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <FadeIn
              key={item.id}
              direction={isLeft ? "right" : "left"}
              delay={(index % 3) * 80}
              className="relative"
            >
              <div className="grid items-center md:grid-cols-[1fr_70px_1fr]">
                <article
                  className={`ml-16 border border-[#294638] p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg md:ml-0 ${
                    item.completed
                      ? "bg-[#FFFAF0]"
                      : "border-dashed bg-[#F1F6C8]"
                  } ${
                    isLeft
                      ? "md:col-start-1 md:text-right"
                      : "md:col-start-3"
                  }`}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6F8172]">
                    {item.date}
                  </p>

                  <h3 className="mt-3 text-2xl">{item.title}</h3>

                  <p className="mt-4 leading-7 text-[#233F31]/80">
                    {item.description}
                  </p>

                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.15em]">
                    {item.completed ? "Completed" : "Upcoming"}
                  </p>
                </article>

                <div
                  className={`absolute left-0 top-7 z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#F1F6C8] font-bold md:left-1/2 md:-translate-x-1/2 ${
                    item.completed
                      ? "bg-[#233F31] text-white"
                      : "bg-[#B7CA7F] text-[#233F31]"
                  }`}
                >
                  {item.completed ? "✓" : index + 1}
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}