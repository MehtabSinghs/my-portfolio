import React, { useState, useEffect } from "react";
import "./style.css";
import Home from "./Home";
import CaseStudiesPage from "./CaseStudy";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <div className="loader__spinner"></div>
        <p>Loading Portfolio...</p>
      </div>
    );
  }

  if (currentPage === "caseStudies") {
    window.scrollTo({ top: 0, behavior: "instant" });
    return <CaseStudiesPage onBack={() => setCurrentPage("home")} />;
  }

  return <Home onCaseStudies={() => setCurrentPage("caseStudies")} />;
};

export default App;
