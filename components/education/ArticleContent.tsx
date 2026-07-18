import { EducationArticle } from "@/data/educationArticles";

type ArticleContentProps = {
  article: EducationArticle;
};

export default function ArticleContent({
  article,
}: ArticleContentProps) {
  return (
    <div>
      <div className="border-l-4 border-[#6F8172] bg-[#F1F6C8] p-7 md:p-9">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6F8172]">
          Article Overview
        </p>

        <p className="mt-4 text-xl leading-9">
          {article.description}
        </p>
      </div>

      <div className="mt-14 space-y-20">
        {article.sections.map((section, sectionIndex) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-36"
          >
            <div className="flex items-start gap-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#233F31] font-bold text-white">
                {sectionIndex + 1}
              </span>

              <h2 className="pt-1 text-4xl leading-tight md:text-5xl">
                {section.title}
              </h2>
            </div>

            <div className="mt-8 space-y-6">
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-lg leading-9 text-[#233F31]/85"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {section.keyPoints &&
              section.keyPoints.length > 0 && (
                <div className="mt-9 border border-[#294638] bg-[#FFFAF0] p-7 shadow-sm">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6F8172]">
                    Key Points
                  </p>

                  <div className="mt-6 space-y-4">
                    {section.keyPoints.map((point) => (
                      <div key={point} className="flex gap-4">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#B7CA7F] font-bold">
                          ✓
                        </span>

                        <p className="leading-7">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
          </section>
        ))}
      </div>
    </div>
  );
}