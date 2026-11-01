"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useQuote } from "@/components/store/QuoteProvider";
import { business } from "@/data/business";

const navigation = [["Home", "/"], ["About", "/about/"], ["Services", "/services/"], ["Blog", "/blog/"]];
const morePages = [["Team", "/team/"], ["Store", "/store/"], ["Contact", "/contact/"]];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const pathname = usePathname();
  const { count } = useQuote();
  const button = useRef(null);
  const moreButton = useRef(null);
  const moreContainer = useRef(null);
  const focusOnOpen = useRef(null);
  const isActive = href => href === "/" ? pathname === "/" : pathname.startsWith(href.slice(0, -1));
  const closeNavigation = () => { setOpen(false); setMoreOpen(false); };

  useEffect(() => { setOpen(false); setMoreOpen(false); }, [pathname]);
  useEffect(() => {
    if (moreOpen && focusOnOpen.current !== null) {
      const links = moreContainer.current?.querySelectorAll("ul a");
      const index = focusOnOpen.current === -1 ? links.length - 1 : 0;
      links?.[index]?.focus();
      focusOnOpen.current = null;
    }
  }, [moreOpen]);
  useEffect(() => {
    const onKey = event => {
      if (event.key !== "Escape") return;
      if (moreOpen) { setMoreOpen(false); moreButton.current?.focus(); }
      else if (open) { setOpen(false); button.current?.focus(); }
    };
    const onPointer = event => {
      if (moreContainer.current && !moreContainer.current.contains(event.target)) setMoreOpen(false);
    };
    const onResize = () => { setMoreOpen(false); if (window.innerWidth >= 992) setOpen(false); };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      window.removeEventListener("resize", onResize);
    };
  }, [open, moreOpen]);

  const onMoreKey = event => {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    const index = event.key === "ArrowUp" ? -1 : 0;
    if (moreOpen) {
      const links = moreContainer.current?.querySelectorAll("ul a");
      links?.[index === -1 ? links.length - 1 : 0]?.focus();
    } else { focusOnOpen.current = index; setMoreOpen(true); }
  };
  const onSubmenuKey = event => {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    const links = Array.from(moreContainer.current?.querySelectorAll("ul a") || []);
    const index = links.indexOf(document.activeElement);
    if (index < 0) return;
    event.preventDefault();
    links[(index + (event.key === "ArrowDown" ? 1 : -1) + links.length) % links.length]?.focus();
  };

  return <header className="main-header">
    <div className="header-top-wrap rel"><div className="container"><div className="row align-items-center">
      <div className="col-lg-5"><div className="top-left text-center text-lg-start"><ul><li><i className="far fa-phone" aria-hidden="true" /> Need help? Call: <a href={business.phoneHref}>{business.phone}</a></li></ul></div></div>
      <div className="col-lg-7"><div className="top-right text-center text-lg-end"><ul><li><i className="far fa-envelope" aria-hidden="true" /> <a href={`mailto:${business.email}`}>{business.email}</a></li><li className="header-location"><i className="far fa-map-marker-alt" aria-hidden="true" /> {business.location}</li></ul></div></div>
    </div></div></div>
    <div className="header-upper"><div className="container clearfix"><div className="header-inner before-after-none rel d-flex align-items-center">
      <div className="logo-outer"><div className="logo"><a href="/" aria-label="Manhenga Tech home"><img src="/assets/images/manhenga/logo.svg" alt="Manhenga Tech" width="228" height="56" /></a></div></div>
      <div className="nav-outer ms-lg-auto clearfix"><nav className="main-menu navbar-expand-lg" aria-label="Main navigation">
        <div className="navbar-header py-15"><button ref={button} type="button" className="navbar-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-controls="main-navigation" aria-expanded={open} onClick={() => { setOpen(!open); setMoreOpen(false); }}><span className="icon-bar" /><span className="icon-bar" /><span className="icon-bar" /></button></div>
        <div id="main-navigation" className={`navbar-collapse collapse clearfix${open ? " show" : ""}`}><ul className="navigation clearfix">
          {navigation.map(([label, href]) => <li key={href}><Link href={href} aria-current={isActive(href) ? "page" : undefined} onClick={closeNavigation}>{label}</Link></li>)}
          <li ref={moreContainer} className="nav-more" onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setMoreOpen(false); }}>
            <button ref={moreButton} type="button" className={`nav-more-toggle${morePages.some(([, href]) => isActive(href)) ? " active-child" : ""}`} aria-expanded={moreOpen} aria-controls="more-navigation" onClick={() => setMoreOpen(!moreOpen)} onKeyDown={onMoreKey}>More <i className="far fa-angle-down" aria-hidden="true" /></button>
            <ul id="more-navigation" className="nav-more-menu" hidden={!moreOpen} onKeyDown={onSubmenuKey}>
              {morePages.map(([label, href]) => <li key={href}><Link href={href} aria-current={isActive(href) ? "page" : undefined} onClick={closeNavigation}>{label}</Link></li>)}
            </ul>
          </li>
          <li className="mobile-basket-link"><Link href="/store/basket/" onClick={closeNavigation}>Quote Basket ({count})</Link></li>
        </ul></div>
      </nav></div>
      <div className="menu-btns"><Link className="quote-nav" href="/store/basket/" aria-label={`Quote basket, ${count} items`}><i className="far fa-shopping-bag" aria-hidden="true" /><span>{count}</span></Link><Link href="/contact/" className="theme-btn btn-small">Get In Touch</Link></div>
    </div></div></div>
  </header>;
}
