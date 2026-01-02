import React from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "./projectsData";
import "./style.css";

const CaseStudyNav = ({ onBack }) => (
  <header className="nav nav--case-study">
    <div className="nav__logo" onClick={onBack} style={{ cursor: "pointer" }}>
      ← MS • Portfolio
    </div>
    <nav className="nav__links">
      <button onClick={onBack}>Back to Portfolio</button>
    </nav>
  </header>
);

const CaseStudiesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="page__gradient" />
      <CaseStudyNav onBack={() => navigate("/")} />
      <main className="case-studies">
        <section className="case-studies__header">
          <p className="case-studies__subtitle">Deep Dives</p>
          <h1>Case Studies</h1>
          <p className="case-studies__desc">
            Detailed exploration of design challenges, solutions, and outcomes from real projects.
            Each case study shows the complete journey from research to shipped product.
          </p>
        </section>

        <div className="case-studies__grid">
          {projects.map((project, i) => (
            <article 
              key={i} 
              className="case-study-card" 
              onClick={() => navigate(`/case-studies/${project.id}`)}
            >
              <div className="case-study-card__badge">{project.tag}</div>
              <h3>{project.title}</h3>
              <p className="case-study-card__summary">{project.summary}</p>
              
              <div className="case-study-card__metrics">
                <strong>Key Highlights:</strong>
                <ul>
                  {project.metrics.slice(0, 3).map((m, j) => (
                    <li key={j}>{m}</li>
                  ))}
                </ul>
              </div>
              
              <button className="case-study-card__read-more">
                Read Full Case Study →
              </button>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CaseStudiesPage;
