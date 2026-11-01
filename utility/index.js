import Aos from "aos";
let animationInitialized = false;
export const tekprofUtility = {
  animation() {
    if (animationInitialized) { Aos.refreshHard(); return; }
    Aos.init({ duration: 1500, offset: 50, once: true, disable: () => window.matchMedia("(prefers-reduced-motion: reduce)").matches });
    animationInitialized = true;
  },
  fixedHeader() {
    const onScroll = () => document.querySelector(".main-header")?.classList.toggle("fixed-header", window.scrollY >= 100);
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  },
};
