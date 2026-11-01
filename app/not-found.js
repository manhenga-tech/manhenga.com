import { business } from "@/data/business";
export const metadata = { title: "Page Not Found | Manhenga Tech", robots: { index: false, follow: true } };
export default function NotFound() { return <main className="manhenga-error"><img src="/assets/images/manhenga/logo.svg" alt="Manhenga Tech" width="228" height="56" /><p>Page not found</p><h1>Let’s get you back on track.</h1><p>The page you requested could not be found.</p><a className="theme-btn" href="/">Return to Homepage</a><a className="error-contact" href={`mailto:${business.email}`}>Contact Manhenga Tech</a></main>; }
