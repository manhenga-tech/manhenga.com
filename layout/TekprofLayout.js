"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { tekprofUtility } from "@/utility";
import Header from "./Header";
import Footer from "./Footer";
export default function TekprofLayout({ children }) {
  const pathname = usePathname();
  useEffect(() => { tekprofUtility.animation(); return tekprofUtility.fixedHeader(); }, [pathname]);
  return <div className="page-wrapper manhenga-home"><a className="skip-link" href="#main-content">Skip to content</a><Header /><main id="main-content">{children}</main><Footer /></div>;
}
