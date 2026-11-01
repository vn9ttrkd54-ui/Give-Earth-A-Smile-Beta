# Give Earth a Smile

[Live website](https://giveearthasmile.org/)

A website for a youth-led environmental organization, connecting its community
projects, educational resources, and ambassador network.

## What the project does

Visitors can explore project reports and photo galleries, download project
documents, read environmental education articles, and find ambassadors and
projects on an interactive map. A membership form lets prospective volunteers
send an application to the organization.

Projects can be searched and filtered by category and country. The education
library supports topic and difficulty filters. Project and ambassador totals
are calculated from the site's content rather than maintained as separate
hardcoded numbers.

## Technical architecture

The site uses **Next.js App Router, React, TypeScript, and Tailwind CSS**.
Content is stored in typed arrays in this repository; the current application
does not require a database.

| Component | Responsibility |
| --- | --- |
| `app/` | Page routes, metadata, shared layout, and the membership API |
| `components/` | Navigation, forms, galleries, map controls, and education UI |
| `data/projects.ts` | Project summaries, statuses, gallery URLs, goals, and results |
| `data/impactLocations.ts` | Ambassador records and project map locations |
| `data/educationArticles.ts` | Article content, sections, and related article links |
| `data/statistics.ts` | Impact figures, including derived project and ambassador counts |
| `lib/` | Article lookup helpers and the reduced-motion preference hook |
| `public/` | Local photographs, logos, icons, and downloadable PDFs |

Next.js renders the content pages, while React client components handle
gallery selection, filters, animations, and form submission. Leaflet and
React Leaflet render the impact map using OpenStreetMap tiles. The map is
loaded on the client because Leaflet requires browser APIs.

Cloudinary hosts project photographs and videos. Gallery thumbnails use image
optimization, while the large selected image uses the original upload to avoid
additional compression. Low-resolution uploads can still look soft when enlarged.

The membership form sends JSON to `/api/membership-application`. The route
checks origin, content type, input lengths, and required fields before sending
an email through Resend. It includes a honeypot field, request size limits,
an email request timeout, and an in-memory rate limiter. That limiter operates
per server instance and resets on restart; it is not a shared distributed limit.
Security headers are configured in `next.config.ts`.

## Development history

The repository began with `create-next-app`, then went through early page and
layout prototypes before the beta site. The Git history records those iterations
and the later changes below:

- **Project presentation:** Project reports developed into dedicated pages with
  impact statistics, downloadable documents, partner information, and galleries.
  Partner logo rendering required several fixes, including replacing a corrupted
  image asset.
- **Membership workflow:** Email delivery was added to the application form,
  followed by an optional phone field. Resend's testing-recipient restriction
  surfaced during testing, requiring the account's sender and recipient settings
  to be handled explicitly.
- **Content and mapping:** New project reports and monthly education articles
  were added. Re-Leaf became the sixth mapped project, and its location was
  corrected to Orlando.
- **Security:** Request validation and limits, safer email error handling,
  response headers, and dependency updates were added in
  [`4cca3a1`](https://github.com/vn9ttrkd54-ui/Give-Earth-A-Smile-Beta/commit/4cca3a1).
- **Image quality:** After expanding the Re-Leaf gallery, large images appeared
  softer than their thumbnails. The galleries were changed to request original
  uploads rather than apply another compression pass
  ([`561c8fa`](https://github.com/vn9ttrkd54-ui/Give-Earth-A-Smile-Beta/commit/561c8fa)).
- **Content consistency:** Project and ambassador counts were connected to the
  underlying arrays, preventing the displayed totals from falling behind
  ([`27f8ecf`](https://github.com/vn9ttrkd54-ui/Give-Earth-A-Smile-Beta/commit/27f8ecf)).
- **Maintenance:** Unused database scaffolding, components, helpers, dependencies,
  and styles were removed. Reduced-motion handling and navigation state were
  revised, and the remaining code passed lint, TypeScript, and a production build
  ([`8bb2824`](https://github.com/vn9ttrkd54-ui/Give-Earth-A-Smile-Beta/commit/8bb2824)).

## How to run it

Use Node.js 20.9 or newer and npm. Development has also been performed with
Node.js 24.

```sh
git clone https://github.com/vn9ttrkd54-ui/Give-Earth-A-Smile-Beta.git
cd Give-Earth-A-Smile-Beta
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). Content pages can be explored
without email credentials. Remote images, map tiles, and the initial Google
Fonts build download require internet access.

For membership email delivery, create an untracked `.env.local` file:

```dotenv
RESEND_API_KEY=your_resend_api_key
MEMBERSHIP_FROM_EMAIL=Give Earth a Smile <applications@your-verified-domain.example>
MEMBERSHIP_TO_EMAIL=your-inbox@example.com
```

Use an authorized sender and a permitted recipient for your Resend account.
Restart the development server after changing environment variables.
Never commit real credentials or application submissions.

Run the code checks and production server with:

```sh
npm run lint
npx tsc --noEmit
npm run build
npm run start
```

If a local environment prevents Turbopack from opening its internal build
port, `npx next build --webpack` is the alternative used during local verification.

The site is intended for Vercel deployment. With Git integration configured,
the production branch triggers a build when pushed. Configure the email
environment variables separately in Vercel.

## Credits and external sources

### Software and platforms

- [Next.js and create-next-app](https://nextjs.org/) provide the starter,
  application routing, rendering, build system, and image tooling.
- [React](https://react.dev/) provides the component and interaction model.
- [TypeScript](https://www.typescriptlang.org/) checks types;
  [ESLint](https://eslint.org/) checks code conventions and common errors.
- [Tailwind CSS](https://tailwindcss.com/) and
  [PostCSS](https://postcss.org/) provide the styling utilities and CSS processing.
- [Leaflet](https://leafletjs.com/) and
  [React Leaflet](https://react-leaflet.js.org/) provide the interactive map.
  Map tiles and underlying geographic data are credited to
  [OpenStreetMap contributors](https://www.openstreetmap.org/copyright).
- [Cloudinary](https://cloudinary.com/) stores and delivers remote photos and videos.
- [Resend](https://resend.com/) sends membership application emails.
- [Vercel](https://vercel.com/) provides hosting and deployment.
- Fonts delivered through Google Fonts: [DM Serif Display](https://fonts.google.com/specimen/DM+Serif+Display),
  [Fraunces](https://fonts.google.com/specimen/Fraunces),
  [Montserrat](https://fonts.google.com/specimen/Montserrat), and
  [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono).

### Content and visual assets

Project information, photographs, partner logos, and downloadable documents
were supplied for the organization's projects. Their inclusion in this
repository does not establish that the website developer created each asset.
Partner names and logos belong to their respective organizations.

The site displays [United Nations Sustainable Development Goals](https://sdgs.un.org/goals)
and related goal icons. The October education article was informed by U.S.
Environmental Protection Agency guidance on
[green infrastructure](https://www.epa.gov/green-infrastructure/types-green-infrastructure),
[rain gardens](https://www.epa.gov/soakuptherain/soak-rain-rain-gardens),
and [stormwater runoff](https://www.epa.gov/soakuptherain/soak-rain-whats-problem).
This is a content website; it does not train or include a machine-learning model.
