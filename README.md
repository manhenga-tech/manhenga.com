# Manhenga Tech — Tekprof multi-page website

A responsive Manhenga Tech website customised within the supplied Tekprof React/Next.js project. The Tekprof Bootstrap layouts, image treatment, fixed header, hover effects and AOS animations are retained, with the green, lime, charcoal and white palette from the supplied Softro reference.

## Colour palette

The reference is https://demo.egenslab.com/html/softro/preview/service-details.html. Deep green (#0f3d3a) defines links and accents, light lime (#c8f8a9) highlights primary actions, charcoal (#1e1e1e) provides headings and dark buttons, and white keeps content areas clear. Supporting shades are dark green (#0e302d), pale green (#e9ffdd), body grey (#525252) and light grey (#fafafa).

Shared styles, SVG logos, favicon and browser theme colour use this palette across all pages. The original hero decoration is tinted with a CSS alpha mask.

## Navigation

Home, About, Services and Blog remain in the main navigation. The More dropdown groups Team, Store and Contact on desktop and mobile, with keyboard navigation and Escape dismissal.

## Pages and content

- Home: original supplied headline and introduction, services section, team/support section, blog preview, store introduction and contact section.
- About: company introduction, approach and support areas.
- Services: six service cards and six detailed service pages.
- Blog: searchable/filterable index and three complete technology planning guides with official further-reading links.
- Store: six quotation-based product/solution listings with category filters, search, sorting and individual details pages.
- Quote Basket: quantities, item removal, browser persistence and WhatsApp/email quotation drafts.
- Team: company support areas and a data structure for verified staff profiles.
- Contact: working phone, email and WhatsApp links.
- Branded 404, per-page metadata/canonicals, Open Graph/Twitter tags, LocalBusiness and blog JSON-LD, robots.txt and a 22-URL sitemap.

The site exports 23 content pages. The quote basket is noindex and is omitted from the sitemap. No invented staff identities, testimonials, prices, stock levels, credentials or project statistics are included. Website development, SEO and digital marketing are not advertised as business services.

## Store behaviour

The store currently handles **quotation requests**, rather than online payment. Visitors can add listings to a quote basket, adjust quantities and open a WhatsApp or email draft containing their selection. They send that draft in the chosen app. The site does not claim the request was delivered, charge money or create a confirmed order.

Product images illustrate solution categories. The team confirms exact models, compatibility, stock, installation and price with the customer. No payment service, merchant account or backend is required for this workflow. A visitor's basket is stored locally in their browser; if browser storage is blocked, it works for the current session.

## Team content

Verified names, positions and portraits have not been supplied. The Team page and homepage section therefore describe connectivity, security and IT support responsibilities. To add actual profiles, populate teamMembers in data/team.js with name, role, bio, image and imageAlt. The component automatically displays supplied profiles instead of the support-area cards. Store portrait files under public/assets/images/manhenga/ and use root-relative image URLs.

## Run locally

With Node.js and npm installed:

```sh
npm ci
npm run dev
```

Use the URL printed by Next.js. scripts/dev.mjs also adapts the managed preview host flags. Dynamic detail routes use generateStaticParams, which is compatible with the static export. Redundant dynamic segment flags are omitted to avoid a Next.js 14 development-mode export issue.

## Production build and hosting

```sh
npm run build
```

The complete production site is generated in out/. The archive includes this prebuilt folder. Upload **the contents of out/** to the web root of the chosen static host, including _next and all route folders. Serve each directory's index.html and use 404.html for missing routes. Do not use next start with this static-export configuration.

All canonical, sitemap, schema and social URLs are configured for https://manhenga.com. Connect that domain to the host and enable HTTPS. If using Sites, make the Site public and connect the domain when ready for launch; the review deployment remains private.

Google Fonts provides Inter and Hanken Grotesk in the browser, as in Tekprof. A strict Content Security Policy should allow the corresponding Google Fonts stylesheet/font origins, or these fonts can be self-hosted.

## Editing

- data/business.js: business details and six services.
- data/service-details.js: service detail content.
- data/store.js: catalogue entries, descriptions, images and categories.
- data/blog.js: articles, dates, categories and source links. Editing or adding an article requires a fresh production build.
- data/team.js: verified profiles or support-area content.
- app/: pages and SEO metadata, sitemap and robots.
- components/store/: catalogue, quotation basket and browser persistence.
- layout/: navigation, footer, preloader and shared page wrapper.
- public/assets/css/style.css: Tekprof styles followed by grouped Manhenga customisations.
- public/assets/images/manhenga/: local logos and service illustrations; see ASSETS.md for image provenance and prompts.

The existing app/components/layout/public/utility project structure is preserved. Unused demo routes remain removed. The new Blog, Store and Team pages are customised pages for this business. Original reusable template styles and Sass are retained; no Sass compilation is needed to use the compiled CSS. Dependencies remain locked in package-lock.json. Application secrets and environment variables are not required.

## Remaining setup

- Connect the production domain/HTTPS and enable public access for indexing.
- Supply verified team names, roles, biographies and portraits to publish individual staff profiles.
- Maintain catalogue details as actual models and availability are confirmed. Live prices, stock management, online payment and order fulfilment can be added when those business details and provider integrations are supplied.
- Keep the business email and WhatsApp accounts active; the website does not provision those accounts.
