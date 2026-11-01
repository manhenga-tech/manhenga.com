import QuoteProvider from "@/components/store/QuoteProvider";
import Preloader from "@/layout/Preloader";
import { business } from "@/data/business";
import "@css/aos.css";
import "@css/bootstrap.min.css";
import "@css/flaticon.min.css";
import "@css/fontawesome-5.14.0.min.css";
import "@css/style.css";
import "./globals.css";
export const viewport = { themeColor: "#0f3d3a" };
export const metadata = {
  metadataBase: new URL(business.url), title: business.title, description: business.description,
  alternates: { canonical: "/" }, robots: { index: true, follow: true }, icons: { icon: "/icon.svg" },
  openGraph: { type: "website", locale: "en_ZW", url: "/", siteName: business.name, title: business.title, description: business.description, images: [{ url: "/assets/images/manhenga/connectivity.webp", width: 800, height: 800, alt: "Satellite internet connectivity — Manhenga Tech, Bindura, Zimbabwe" }] },
  twitter: { card: "summary_large_image", title: business.title, description: business.description, images: ["/assets/images/manhenga/connectivity.webp"] },
};
export default function RootLayout({ children }) { return <html lang="en-ZW"><body className="manhenga-site"><noscript><style>{`[data-aos]{opacity:1!important;transform:none!important}.preloader{display:none!important}`}</style></noscript><QuoteProvider><Preloader />{children}</QuoteProvider></body></html>; }
