# Sri Surya Teja Foundation website (proposed name)

Responsive React website built with Vite, Tailwind CSS, and React Router. The public-facing name and content follow the supplied proposed Foundation package. Confirm the final registered legal name before publication.

The site covers programming, full-stack development, databases, cloud, DevOps, AI, scholarships, rural digital education, industry and cloud partnerships, resources, impact, governance, and contact. Proposed activities and course outlines are identified as proposals. No existing cloud-provider partnership, registration or tax status, impact result, active scholarship, or payment arrangement is claimed. Policy content is draft material and requires review before adoption or publication as binding policy.

## Requirements

- Node.js 18 or newer
- npm

## Local development

```sh
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Production build

```sh
npm run build
npm run preview
```

The production files are generated in `dist/`. The preview command serves that production build locally.

## Pages

The site uses client-side routes. Main paths include `/`, `/about-us`, `/vision-mission`, `/programs`, `/programs/course-catalogue`, `/programs/boot-camps`, `/scholarships`, `/digital-education`, `/ai-emerging-technologies`, `/partnerships`, `/impact`, `/resources`, `/volunteer`, `/governance-transparency`, `/donate`, `/contact`, `/faq`, and `/policies`.

For production hosting, configure the web server to serve `index.html` for unknown application paths so direct visits and refreshes on routes work.

## Headless API setup

The API client is in `src/api.js`. Copy `.env.example` to `.env.local` and configure:

```env
VITE_HEADLESS_API_URL=https://your-api.example
VITE_PROGRAMS_API_PATH=/api/programs
VITE_INQUIRIES_API_PATH=/api/inquiries
VITE_HEADLESS_PUBLIC_TOKEN=
```

Restart the Vite server after changing environment variables. The programs route is fetched with `GET`; the inquiries route receives `POST` JSON. The API must allow the site origin through CORS.

### Program response

The programs endpoint may return a plain array or a collection in one of these shapes:

```json
[{ "id": "python", "title": "Python programming", "description": "Course summary", "category": "Programming", "status": "Open" }]
```

```json
{ "data": [{ "id": "python", "attributes": { "title": "Python programming", "description": "Course summary" } }] }
```

The client also accepts `{ "results": [...] }` and `{ "items": [...] }`. Program objects can use `title` or `name`, and `description` or `summary`; `category`, `status`, `slug`, and an absolute `url` are optional. When no API URL is configured, the site displays its editorial learning areas. If loading fails, those learning areas remain visible.

### Inquiry submission

The form sends the following JSON body to the inquiries route:

```json
{
  "data": {
    "name": "Learner name",
    "email": "learner@example.org",
    "phone": "",
    "organization": "",
    "topic": "Course enrollment",
    "message": "I would like to learn more.",
    "privacyConsent": true,
    "source": "website"
  }
}
```

The form remains disabled until `VITE_HEADLESS_API_URL` is set. Validate and rate-limit submissions on the server, and align server-side privacy and retention practices with the final privacy notice. Vite exposes variables prefixed with `VITE_` in the browser bundle: use only public values there. Keep private API credentials on a server-side proxy. If the API expects a different payload, update `submitInquiry` in `src/api.js`.

## Project structure

- `index.html` — Vite HTML shell and page metadata
- `src/main.jsx` — React entry point and global stylesheet import
- `src/App.jsx` — page composition
- `src/components/` — header/footer and individual page sections
- `src/api.js` — configurable headless REST client
- `assets/css/style.css` — Tailwind import, design styles, and responsive rules
- `vite.config.js` — Vite and Tailwind plugin configuration
- `.env.example` — headless API environment variable template
- `Requirment.txt` — supplied website content brief
