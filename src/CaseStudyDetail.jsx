import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "./projectsData";
import "./style.css";

const CaseStudyNav = ({ onBack }) => (
  <header className="nav nav--case-study">
    <div className="nav__logo" onClick={onBack} style={{ cursor: "pointer" }}>
      ← MS • Portfolio
    </div>
    <nav className="nav__links">
      <button onClick={onBack}>Back to Case Studies</button>
    </nav>
  </header>
);

const CaseStudyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="page">
        <div className="page__gradient" />
        <CaseStudyNav onBack={() => navigate("/case-studies")} />
        <main className="case-study">
          <h1>Case Study Not Found</h1>
          <p>The case study you're looking for doesn't exist.</p>
        </main>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="page__gradient" />
      <CaseStudyNav onBack={() => navigate("/case-studies")} />
      <main className="case-study">
        <div className="case-study__header">
          <h1>{project.title}</h1>
          <p className="case-study__tag">{project.tag}</p>
        </div>

        <section className="case-study__section">
          <h2>Overview</h2>
          <p>{project.summary}</p>
        </section>

        {project.challenge && (
          <section className="case-study__section">
            <h2>Challenge</h2>
            <p>{project.challenge}</p>
          </section>
        )}

        {project.approach && (
          <section className="case-study__section">
            <h2>Approach</h2>
            <p>{project.approach}</p>
          </section>
        )}

        {project.outcome && (
          <section className="case-study__section">
            <h2>Outcome</h2>
            <p>{project.outcome}</p>
          </section>
        )}

        <section className="case-study__section">
          <h2>Role & Responsibilities</h2>
          <p>{project.role}</p>
        </section>

        <section className="case-study__section">
          <h2>Key Metrics & Results</h2>
          <ul className="case-study__list">
            {project.metrics.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>
        </section>

        <section className="case-study__section">
          <h2>Design Process</h2>
          <p>
            This project followed a structured design process from research and discovery through prototyping,
            testing, and iteration. Each phase was carefully documented in Figma with detailed flows, wireframes,
            and interactive prototypes ready for user testing.
          </p>
        </section>

        <section className="case-study__section">
          <h2>Tools Used</h2>
          <div className="case-study__tools">
            {(project.tools || ["Figma", "User Research", "Prototyping", "Interaction Design"]).map((tool, i) => (
              <span key={i}>{tool}</span>
            ))}
          </div>
        </section>

        <section className="case-study__cta">
          <h3>Want to see the full design?</h3>
          {project.link ? (
            <a href={project.link} target="_blank" rel="noreferrer" className="case-study__button">
              View Figma File
            </a>
          ) : (
            <p className="case-study__coming">
              Full case study and Figma walkthrough available on request. {' '}
              <a href="mailto:mehtabsingh723@gmail.com">Contact me</a> to see the rest.
            </p>
          )}
        </section>
      </main>
    </div>
  );
};

export default CaseStudyDetail;
