import FadeIn from "@/components/FadeIn";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <FadeIn
      className={centered ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}
    >
      {eyebrow && (
        <p
          className={`text-sm font-bold uppercase tracking-[0.3em] ${
            light ? "text-[#F1F6C8]" : "text-[#6F8172]"
          }`}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={`mt-4 text-4xl leading-tight sm:text-5xl md:text-6xl ${
          light ? "text-white" : "text-[#233F31]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-6 text-lg leading-8 ${
            light ? "text-white/85" : "text-[#233F31]/85"
          }`}
        >
          {description}
        </p>
      )}
    </FadeIn>
  );
}