Manhenga Tech — plain HTML website

This archive contains the complete website: 23 HTML pages, images, CSS, JavaScript, sitemap, robots.txt and a custom 404 page.

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

Team content describes support responsibilities until verified staff names and profiles are supplied. Images illustrate services rather than claimed company installations.

Canonicals, social metadata, schema and sitemap are configured for https://manhenga.com. Keep them current when adding or removing pages. System-font fallbacks are provided; Google Fonts supplies Inter and Hanken Grotesk. AOS scroll animations and their license are included.

See CHECKS.txt and ASSETS.md for validation and asset details.
