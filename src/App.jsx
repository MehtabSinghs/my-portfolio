import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./Home";
import CaseStudiesPage from "./CaseStudy";
import CaseStudyDetail from "./CaseStudyDetail";
import About from "./About";
import "./style.css";

function RouteEffects() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = pathname === "/" ? "Mehtab Singh — Product Designer" :
      pathname === "/about" ? "How I Work — Mehtab Singh" :
      "Product Design Case Studies — Mehtab Singh";
  }, [pathname]);
  return null;
}

export default function App() {
  return <HashRouter><RouteEffects /><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/case-studies" element={<CaseStudiesPage />} />
    <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
    <Route path="/about" element={<About />} />
  </Routes></HashRouter>;
}
