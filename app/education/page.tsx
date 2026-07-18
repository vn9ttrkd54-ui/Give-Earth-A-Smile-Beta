import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "How to Start a Sustainable Lifestyle Today",
    author: "Aditi Swain",
    date: "July 2026",
    readTime: "5 min read",
    image: "/images/projects/project-1.jpg",
    preview:
      "Adopting a sustainable lifestyle does not require changing everything at once. Small, consistent actions can create meaningful environmental progress.",
  },
  {
    id: 2,
    title: "Why Youth Leadership Matters",
    author: "Give Earth a Smile",
    date: "July 2026",
    readTime: "4 min read",
    image: "/images/projects/project-2.jpg",
    preview:
      "Young people bring creativity, energy, and long-term commitment to environmental and humanitarian initiatives.",
  },
];

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-[#F1F6C8] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-6xl">Education and Outreach</h1>

        <p className="mt-5 max-w-3xl text-lg leading-8">
          Explore educational articles, sustainability resources, project
          updates, and environmental outreach materials.
        </p>

        <div className="mt-14 space-y-10">
          {posts.map((post) => (
            <article
              key={post.id}
              className="grid overflow-hidden bg-[#FFFAF0] lg:grid-cols-2"
            >
              <div className="relative min-h-[420px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col p-10">
                <div className="blog-text text-sm">
                  <p>{post.author}</p>
                  <p>
                    {post.date} · {post.readTime}
                  </p>
                </div>

                <h2 className="mt-7 text-4xl">{post.title}</h2>

                <p className="blog-text mt-5 leading-8">{post.preview}</p>

                <div className="blog-text mt-auto border-t border-[#294638]/30 pt-5 text-sm">
                  0 views &nbsp;&nbsp; 0 comments &nbsp;&nbsp; 0 likes
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm">
          Creating posts, comments, likes, and view tracking will be added in
          the account and database phases.
        </p>
      </div>
    </main>
  );
}