import type {
  Metadata,
} from "next";
import AmbassadorCard from "@/components/ambassadors/AmbassadorCard";
import {
  getActiveAmbassadors,
} from "@/lib/queries/ambassadors";

export const metadata:
  Metadata = {
    title:
      "Global Ambassadors | Give Earth a Smile",

    description:
      "Meet the global youth ambassadors helping Give Earth a Smile create environmental and humanitarian impact around the world.",
  };

export default async function AmbassadorsPage() {
  const ambassadors =
    await getActiveAmbassadors();

  return (
    <main>
      <section className="bg-[#233F31] px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#F1F6C8]">
            Global Community
          </p>

          <h1 className="mt-5 text-5xl text-white md:text-7xl">
            Our Ambassadors
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/75">
            Meet the young leaders representing
            Give Earth a Smile in communities
            around the world.
          </p>
        </div>
      </section>

      <section className="bg-[#F1F6C8] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          {ambassadors.length >
          0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {ambassadors.map(
                (
                  ambassador,
                ) => (
                  <AmbassadorCard
                    key={
                      ambassador.id
                    }
                    ambassador={
                      ambassador
                    }
                  />
                ),
              )}
            </div>
          ) : (
            <div className="border border-[#294638] bg-[#FFFAF0] px-6 py-20 text-center">
              <h2 className="text-4xl">
                Ambassadors Coming Soon
              </h2>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}