Manhenga Tech — plain HTML website

This archive contains the complete website: 25 HTML documents (23 content pages and two 404 entry points), images, CSS, JavaScript, sitemap, robots.txt and a custom 404 page.

INSTALL ON CPANEL
1. Back up your existing website.
2. Open cPanel → Domains → manhenga.com → Document Root (usually public_html).
3. Upload and extract Manhenga_Tech_HTML_Website.zip directly into that folder.
4. index.html, assets/ and the page folders must sit directly inside the document root.
5. If your domain currently routes to a Node.js application, remove that application mapping through cPanel or your host before serving this static version. Keep the old files as a backup.
6. Ensure your domain points to the host, enable SSL and test the website.
7. Remove the uploaded ZIP after extraction.

No Node.js application, startup file, npm install, database or build command is needed.

EDITING
Edit index.html for the homepage and the corresponding index.html inside each page folder for other content. Shared header/footer markup is repeated across pages; update matching copies together. Styles are in assets/css/style.css. Navigation, filters and quotation basket code are in assets/js/site.js. Each page contains a small quote-products JSON block; update matching copies when changing catalogue names, keeping the product IDs consistent.

The store opens WhatsApp/email quotation drafts for the visitor to send. It does not process payments or report message delivery. The basket uses browser local storage and requires JavaScript. If storage is blocked, selections work on the current page but do not persist across pages. Test basket persistence through an HTTP host; file:// browser storage behaviour varies.

Team content describes support responsibilities until verified staff names and profiles are supplied. Original generated images illustrate services. Selected user-supplied CCTV photographs now appear in camera-related sections; no customer identity or installation ownership is claimed.

Canonicals, social metadata, schema and sitemap are configured for https://manhenga.com. Keep them current when adding or removing pages. System-font fallbacks are provided; Google Fonts supplies Inter and Hanken Grotesk. AOS scroll animations and their license are included.

See CHECKS.txt and ASSETS.md for validation and asset details.


CUSTOM 404 PAGE
The personalised 404.html contains its own styles and uses the shared supplied logo, with links to the homepage, services, blog, store, team and contact details. Navigation uses root-relative paths so it works for missing addresses inside subfolders. The Apache .htaccess file already includes ErrorDocument 404 /404.html. Upload the new 404.html to the document root to replace the old error page. If editing an existing .htaccess, retain its other valid rules and add this error directive once.


CONTACT AND SERVICE UPDATE — 2 November 2026
Website email: support@manhenga.com
Phone: +263 71 084 8354
WhatsApp: https://wa.me/263710848354

Networking content includes MikroTik routers and Cisco switches. CCTV content includes Dahua and Hikvision. IT Support & Security includes Sophos firewall configuration, antivirus setup, routine maintenance and ongoing support. Brands describe the equipment and software supported; no partnership or certification is claimed.


Current business contact details
Email: support@manhenga.com
Phone: +263 71 084 8354
WhatsApp: https://wa.me/263710848354
Address: Aerodrome Shopping Center, Bindura, Zimbabwe


LOGO AND FAVICON UPDATE — 11 November 2026
The supplied green starburst Manhenga Tech logo appears in the desktop/mobile header, footer and both 404 pages. The original full-colour PNG is included unchanged at assets/images/manhenga/logo-starburst.png.

favicon.svg uses the matching green starburst without the small lettering so browser tabs remain recognisable. icon.svg is retained as a compatibility alias. All 25 HTML documents reference the favicon; ICO and PNG fallbacks and a 180px Apple touch icon use the matching starburst. Logo sizing is in assets/css/html-site.css; the 404 pages contain their own matching sizing rules.

Upload/extract the whole ZIP so the updated HTML, CSS and new image files replace the existing files together. After upload, reload the site; cached browser-tab icons may require closing and reopening the tab.


SERVICE IMAGERY UPDATE — 13 November 2026
Selected supplied CCTV photos replace the camera-related service, store and blog images. Dynamics 365 appears under Business Software. Sophos appears under IT Support & Security, including firewall and endpoint protection examples. New assets are optimized WebP files; diagrams and logos retain their full image content. See ASSETS.md for source mappings. Upload the updated HTML, assets/css/html-site.css and new assets/images/manhenga/ files together.


BUSINESS EMAIL & CLOUD UPDATE — 13 November 2026
Microsoft 365 imagery now appears on the Business Email & Cloud service page and matching homepage/service cards. The service page includes Microsoft 365 and Google Workspace cards using the supplied graphics. Existing CCTV, Dynamics 365 and Sophos updates are retained. Subscription plans, included apps and setup scope are confirmed in the quotation.


NETWORKING IMAGERY UPDATE — 13 November 2026
Supplied network-cabinet, MikroTik, Ruckus and Ubiquiti images now appear in Networks & Wi-Fi and the Wi-Fi equipment store pages. Product images retain their full outlines; the router/access point galleries adapt to narrow screens. Equipment models and availability are confirmed in the quotation.
