import Image from "next/image";
import type { Ambassador } from "@/data/ambassadors";

type AmbassadorCardProps = {
  ambassador: Ambassador;
};

export default function AmbassadorCard({
  ambassador,
}: AmbassadorCardProps) {
  const location = [
    ambassador.city,
    ambassador.region,
    ambassador.country,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <article className="border border-[#294638] bg-[#FFFAF0]">
      <div className="relative h-52">
        <Image
          src={ambassador.image}
          alt={ambassador.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5 text-center">
        <h3 className="text-2xl">{ambassador.name}</h3>
        <p className="mt-2 text-sm leading-6">{location}</p>
      </div>
    </article>
  );
}