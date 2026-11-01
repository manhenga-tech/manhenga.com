# Validation — multi-page update

Checked on 1 November 2026.

## Build and content checks

- Production static generation passed for 23 content pages: seven main pages, six service details, six catalogue details, three articles and the quote basket.
- Generated sitemap contains 22 unique production URLs; basket is omitted and marked noindex.
- Exactly one H1, distinct canonical/Open Graph URL, title and description on every content page.
- All internal links resolve to exported files or section IDs. Image files exist and rendered image elements have descriptive alt text.
- Phone, email and WhatsApp links use the supplied business contacts.
- Homepage LocalBusiness data contains six services. All three article pages have BlogPosting data and official further-reading links.

## Browser interaction checks

- Store Security filter displays CCTV and alarm listings.
- Adding a product from the catalogue and adding quantities from its detail page update the shared quote basket.
- Basket quantity changes are reflected in the WhatsApp draft URL; selections survive a browser reload.
- Removing the final item displays the empty basket state. No WhatsApp message, email or payment was sent during testing.
- Blog search for CCTV displays the relevant guide; its article route and official Axis reference link were verified.
- Services index displays six cards; networking detail route and the Team page were checked through navigation.
- Mobile navigation opens and closes on a route change; mobile blog page contains three guide cards.
- Embedded mobile store (375 CSS px) and tablet team page (753 CSS px) have no horizontal overflow; desktop store was also checked without overflow.
- Existing generated imagery is reused as illustrative solution imagery. Team content uses support responsibilities while awaiting real staff profiles.

Domain binding, public crawling, real incoming communications and a future payment provider require the business's live hosting/accounts. This update does not claim those are configured.

## Navigation dropdown update

- Team, Store and Contact are grouped under More.
- Desktop click and keyboard Arrow Down open the disclosure; Escape closes it and restores button focus.
- The Store link navigates correctly and closes the dropdown.
- On mobile, the hamburger menu contains the expandable More group; selecting Contact closes both menu levels.
- Mobile contact page has no horizontal overflow after navigation.

## Reference colour update

- Applied the supplied Softro palette to shared page styles, buttons, navigation, section backgrounds, SVG wordmarks, favicon and browser theme colour.
- Inspected the homepage, store banner and catalogue, plus the mobile homepage and expanded More menu. Mobile content fits its viewport without horizontal overflow.
- Main text/action contrast ratios are 13.86:1 for charcoal on lime, 12.01:1 for white on deep green and 7.81:1 for body grey on white.
- The hero decoration uses the original template image as a CSS alpha mask, keeping its shape with a lime tint.
- Page content, contact destinations and store quotation behaviour remain unchanged.
