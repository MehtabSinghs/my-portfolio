import { Link } from "react-router-dom";
import { projects } from "./projectsData";
import { Shell, ProjectVisual, featuredIds } from "./components";

export default function CaseStudiesPage() {
  const featured = featuredIds
    .map((id) => projects.find((project) => project.id === id))
    .filter(Boolean);
  const ordered = [
    ...featured,
    ...projects.filter((project) => !featuredIds.includes(project.id)),
  ];
  return <Shell>
    <section className="page-hero content narrow"><p className="eyebrow">Selected work</p><h1>Product stories about decisions—not galleries of final screens.</h1><p>Each study separates shipped evidence, design rationale, targets, and unknowns so the work can be evaluated honestly.</p></section>
    <section className="content section case-index">
      {ordered.map((project, index) => <article key={project.id}>
        <ProjectVisual project={project} eager={index === 0} />
        <div><p className="eyebrow">{project.tag}</p><h2>{project.title}</h2><p>{project.challenge}</p>
          <div className="label-row"><span>{project.id === "punjab-pagri-house" ? "Live product" : project.id === "apricus-academy" ? "Soon to be live" : "Concept"}</span><span>{featuredIds.includes(project.id) ? "Full study" : "Exploration"}</span></div>
          <Link className="text-link" to={`/case-studies/${project.id}`}>Read case study <span aria-hidden="true">→</span></Link>
        </div>
      </article>)}
    </section>
  </Shell>;
}
