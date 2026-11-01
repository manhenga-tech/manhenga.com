"use client";
import { useEffect, useState } from "react";
export default function Preloader() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1500);
    return () => clearTimeout(timer);
  }, []);
  return <div className="preloader" aria-hidden="true" style={{ display: visible ? "flex" : "none" }}><div className="custom-loader" /></div>;
}
