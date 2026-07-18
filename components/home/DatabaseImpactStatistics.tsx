import { getPublicProjectStatistics } from "@/lib/projects/publicProjectQueries";

export default async function DatabaseImpactStatistics() {
  const statistics =
    await getPublicProjectStatistics();

  const cards = [
    {
      value: `${statistics.totalCountries}+`,
      label: "Countries Connected",
    },
    {
      value:
        statistics.totalProjects.toLocaleString(),
      label: "Projects and Initiatives",
    },
    {
      value:
        statistics.totalVolunteerHours.toLocaleString(),
      label: "Volunteer Hours",
    },
    {
      value:
        statistics.totalPeopleReached.toLocaleString(),
      label: "People Reached",
    },
    {
      value:
        statistics.totalVolunteers.toLocaleString(),
      label: "Project Volunteers",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
      {cards.map((card) => (
        <article
          key={card.label}
          className="border border-[#294638] bg-[#FFFAF0] p-7 text-center"
        >
          <p className="font-[var(--font-heading)] text-5xl">
            {card.value}
          </p>

          <div className="mx-auto mt-6 h-px w-16 bg-[#6F8172]" />

          <p className="mt-6 font-bold">
            {card.label}
          </p>
        </article>
      ))}
    </div>
  );
}