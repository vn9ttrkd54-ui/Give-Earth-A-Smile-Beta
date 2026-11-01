# Give Earth a Smile

The organization's website brings project reports, environmental education, and
its ambassador network together in one place. Visitors can browse projects,
explore locations on a map, read educational articles, and apply to join.

## Local development

Install Node.js and npm, then run:

```sh
npm ci
npm run dev
```

Open http://localhost:3000. To check a change before deployment:

```sh
npm run lint
npx tsc --noEmit
npm run build
```

The site uses Next.js App Router, React, TypeScript, and Tailwind CSS.
Leaflet and OpenStreetMap provide the impact map. Cloudinary hosts project
photos and videos; the large project galleries request original uploads to
avoid additional image compression.

## Content and structure

- `app/` contains pages and the membership application endpoint.
- `components/` contains the map, galleries, forms, navigation, and article UI.
- `data/projects.ts` holds project summaries, gallery URLs, results, and status.
- `data/impactLocations.ts` holds ambassadors and project map markers.
- `data/educationArticles.ts` holds education articles and their related links.
- `data/statistics.ts` defines impact figures. Project and ambassador counts
  are calculated from their respective data arrays.
- `public/` contains local images and downloadable project documents.

Content is maintained in the repository. Adding a project also requires its
detail page and, when applicable, a corresponding map entry. Publishing updated
data requires a new deployment.

## Membership applications

`/api/membership-application` validates submitted fields and sends an email
through Resend. Set `RESEND_API_KEY`, `MEMBERSHIP_FROM_EMAIL`, and
`MEMBERSHIP_TO_EMAIL` in the deployment environment. The sender must be
authorized by the Resend account.
Never commit API keys or application submissions.

The endpoint checks request origin and content type, limits request and field
sizes, and returns responses that are not cached. Its in-memory rate limiter
applies to each server instance separately; it is not a shared, persistent
limit across a distributed deployment. Security headers are configured in
`next.config.ts`.

## Deployment

The project is intended for Vercel. With Git integration configured, pushing
to the production branch triggers a build. Environment variables must be
configured separately in Vercel.

## Portfolio documentation

For a portfolio submission, include your own account of the problem, design
decisions, iterations, and testing. Identify your contributions and any
collaborators, third-party assets, libraries, or AI assistance. Repository
history and this README describe the implementation; they do not establish
who authored each part.
