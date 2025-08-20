## Portfolio Frontend (Next.js 15 + Tailwind CSS)

Modern, fast portfolio and blog frontend built with Next.js App Router, Tailwind CSS, and Markdown rendering. It consumes a separate Express + MongoDB backend for content.

<p align="center">
  <img src="https://raw.githubusercontent.com/XyonX/portfolio-content/main/Portfolios/portfolio/images/port_front.png" alt="Portfolio Front Page" />
</p>

### Live Site

- Visit: [joycodes.tech](https://joycodes.tech/)

### Backend API

- Repository: [XyonX/portfolio-backend](https://github.com/XyonX/portfolio-backend)
  - See the backend README for routes, upload behavior, and authentication details.

## Features

- Portfolio listing and detail pages powered by an external API
- Markdown content rendering with code highlighting
- Blog pages and components ready for integration
- Dark/light theme with system preference via `next-themes`
- SEO-friendly dynamic metadata and Open Graph images for portfolio pages
- Responsive UI with Tailwind CSS and modern components/icons
- Vercel Analytics and Speed Insights integrated

### Screenshots

Images are sourced from the content repo: [portfolio-content/images](https://github.com/XyonX/portfolio-content/tree/main/Portfolios/portfolio/images)

| | |
|---|---|
| ![Mid Section](https://raw.githubusercontent.com/XyonX/portfolio-content/main/Portfolios/portfolio/images/PORT_MID.png) | ![Work Section](https://raw.githubusercontent.com/XyonX/portfolio-content/main/Portfolios/portfolio/images/PORT_WORK.png) |
| ![Skills Section](https://raw.githubusercontent.com/XyonX/portfolio-content/main/Portfolios/portfolio/images/PORT_SKILLS.png) | ![Writings Section](https://raw.githubusercontent.com/XyonX/portfolio-content/main/Portfolios/portfolio/images/PORT_WRITINGS.png) |

## Tech Stack

- Next.js 15 (App Router), React 19
- Tailwind CSS, `@tailwindcss/typography`
- Markdown: `react-markdown`, `remark-gfm`, `rehype-highlight`
- Icons: `lucide-react`
- Analytics: `@vercel/analytics`, `@vercel/speed-insights`

## Project Structure

```
app/
  (public)/
    portfolio/            # Portfolio list and detail pages
    blog/                 # Blog list and detail pages
  (protected)/admin/      # Admin UI pages (dashboard, blogs, portfolios, etc.)
  api/                    # Local mock API routes (reads JSON in content/*)
components/               # UI components and Markdown renderer
content/                  # Local sample markdown and JSON data
public/                   # Static assets
```

## Configuration

- API base URL for portfolios is currently hardcoded:
  - `app/(public)/portfolio/page.js` → `API_BASE_URL = "https://joycodes-backend.vercel.app"`
  - `app/(public)/portfolio/[slug]/page.jsx` fetches from the same base URL
  - Update these if you self-host the backend or use a different domain.

- Remote images: allowed domains are configured in `next.config.mjs`. If your backend domain changes, add it to `images.domains`.

## Getting Started

### Prerequisites

- Node.js 18+

### Install

```bash
npm install
```

### Development

```bash
npm run dev
# http://localhost:3000
```

### Production build

```bash
npm run build
npm start
```

## Scripts

- `dev`: Run the development server
- `build`: Create a production build
- `start`: Start the production server
- `lint`: Run Next.js lint

## Data & API

- Live data: fetched from the backend API (`/api/portfolios`, `/api/blogs`). See backend repo for full routes and request formats.
- Local mock data: `app/api/*` routes serve JSON from `content/*` for quick development.

## Deployment

- Works great on Vercel. Ensure the backend is reachable from the deployed frontend and that the backend file/image domain is added to `images.domains`.

## License

ISC or similar; see repository terms as applicable.
