import React, { useState } from "react";
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

const CaseStudyDetail = ({ project, onBack }) => (
  <div className="page">
    <div className="page__gradient" />
    <CaseStudyNav onBack={onBack} />
    <main className="case-study">
      <div className="case-study__header">
        <h1>{project.title}</h1>
        <p className="case-study__tag">{project.tag}</p>
      </div>

      <section className="case-study__section">
        <h2>Overview</h2>
        <p>{project.summary}</p>
      </section>

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
          <span>Figma</span>
          <span>User Research</span>
          <span>Prototyping</span>
          <span>Interaction Design</span>
        </div>
      </section>

      <section className="case-study__cta">
        <h3>Want to see the full design?</h3>
        {project.link ? (
          <a href={project.link} target="_blank" rel="noreferrer" className="case-study__button">
            View Figma File
          </a>
        ) : (
          <p className="case-study__coming">Full Figma file available on request</p>
        )}
      </section>
    </main>
  </div>
);

const CaseStudiesPage = ({ onBack }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      tag: "LIVE WEBSITE · E-COMMERCE",
      title: "Punjab Pagri House",
      summary:
        "Complete website design and development for Punjab Pagri House - a traditional Punjabi headwear store. Created a modern e-commerce experience that honors cultural heritage while providing seamless online shopping.",
      metrics: [
        "Full-stack website from concept to launch",
        "Responsive design for mobile & desktop",
        "Cultural authenticity meets modern UX",
        "Product catalog with shopping experience",
        "Increased online visibility for traditional crafts",
      ],
      role: "UX · UI · Web Design · Figma · Complete project ownership from discovery to launch",
      link: "",
    },
    {
      tag: "CASE STUDY · ED-TECH",
      title: "Apricus Academy",
      summary:
        "Designed a comprehensive online learning platform that empowers students to discover courses, organize their learning journey, and track their educational progress. Created an intuitive, student-first experience that makes online education engaging and accessible.",
      metrics: [
        "Complete frontend design system in Figma",
        "Student-centered course discovery & enrollment",
        "Intuitive dashboard for learning organization",
        "Interactive progress tracking & achievements",
        "Responsive design for desktop & mobile learning",
        "Clean visual hierarchy for better content focus",
      ],
      role: "UX · UI · Frontend Design · Figma · Complete design ownership",
      link: "",
    },
    {
      tag: "CASE STUDY · WEB",
      title: "B2B Analytics Dashboard",
      summary:
        "Simplified a dense analytics product into a flexible workspace with clear hierarchy and information grouping. Redesigned the entire interface to reduce cognitive load while maintaining power-user features.",
      metrics: [
        "↑ Feature discoverability",
        "Fewer support tickets on reporting",
        "New layout supports future modules",
        "50% reduction in onboarding time",
        "Improved data comprehension for stakeholders",
      ],
      role: "IA · Interaction Design · Design System · Figma",
      link: "",
    },
  ];

  if (selectedProject) {
    return <CaseStudyDetail project={selectedProject} onBack={() => setSelectedProject(null)} />;
  }

  return (
    <div className="page">
      <div className="page__gradient" />
      <CaseStudyNav onBack={onBack} />
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
            <article key={i} className="case-study-card" onClick={() => setSelectedProject(project)}>
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
