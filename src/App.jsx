import React, { useState, useEffect } from "react";
import { HashRouter ,Routes,Route, useLocation } from "react-router-dom";
import "./style.css";
import Home from "./Home";
import CaseStudiesPage from "./CaseStudy";
import CaseStudyDetail from "./CaseStudyDetail";

const LoadingScreen = () => (
  <div className="loader">
    <div className="loader__spinner"></div>
    <p>Loading Portfolio...</p>
  </div>
);

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
