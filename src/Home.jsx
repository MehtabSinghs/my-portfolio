/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { projects } from "./projectsData";
import { Shell, ProjectVisual, featuredIds } from "./components";

const productPrinciples = [
  ["Frame before designing", "I make the user problem, business goal, constraints, and assumptions visible before exploring an interface."],
  ["Design the decision", "I organize information around what a person needs to understand or do—not around the shape of the database."],
  ["Make tradeoffs explicit", "I compare options and document what each direction optimizes, costs, and leaves unresolved."],
  ["Ship as one team", "I involve engineering early, define edge cases, and treat implementation quality as part of the design."],
];

function FeaturedProject({ project, index }) {
  const isLive = project.id === "punjab-pagri-house";
  const isApricus = project.id === "apricus-academy";
  return <article className="featured-project">
    <ProjectVisual project={project} eager={index === 0} />
    <div className="featured-project__content">
      <div className="eyebrow-row"><span>0{index + 1} · {project.tag}</span><span className="status">{isLive ? "Live product" : isApricus ? "Soon to be live" : "Concept"}</span></div>
      <h3>{project.title}</h3>
      <p className="project-question">{project.challenge}</p>
      <p>{project.approach}</p>
      <dl className="project-facts">
        <div><dt>Role</dt><dd>{project.role.split("·").slice(0, 2).join(" · ")}</dd></div>
        <div><dt>Evidence</dt><dd>{isLive ? "Live product · observed outcome" : isApricus ? "Product in development · targets labeled" : "Design rationale · targets labeled"}</dd></div>
      </dl>
      <div className="project-links">
        <Link className="text-link" to={`/case-studies/${project.id}`}>Read the case study <span aria-hidden="true">→</span></Link>
        {isLive && <a className="text-link" href={project.link} target="_blank" rel="noreferrer">View live product <span aria-hidden="true">↗</span></a>}
        {isApricus && <span className="coming-soon">Product launch coming soon</span>}
      </div>
    </div>
  </article>;
}

export default function Home() {
  const featured = featuredIds.map((id) => projects.find((project) => project.id === id)).filter(Boolean);
  const additional = projects.filter((project) => !featuredIds.includes(project.id));

  return <Shell>
    <section className="hero content">
      <p className="eyebrow">Product designer · Product Thinking · UX strategy · Interaction design</p>
      <h1>I turn complex product workflows into <span>clear, useful experiences.</span></h1>
      <p className="hero__lead">I’m Mehtab Singh, a product designer working across commerce, education, and data-rich products—from problem framing and information architecture to developer handoff and launch.</p>
      <div className="actions"><Link className="button" to="/case-studies">View selected work</Link><Link className="button button--quiet" to="/about">See how I think</Link></div>
      <p className="availability"><span aria-hidden="true"></span> Open to Product Designer opportunities · India / Remote</p>
    </section>

    <section className="content section" aria-labelledby="selected-work">
      <div className="section-heading"><p className="eyebrow">Selected work</p><h2 id="selected-work">Decisions, tradeoffs, and outcomes—not just final screens.</h2><p>Three stories showing how I move from ambiguity toward a product direction.</p></div>
      <div className="featured-list">{featured.map((project, index) => <FeaturedProject key={project.id} project={project} index={index} />)}</div>
    </section>

    <section className="content section thinking" aria-labelledby="thinking-title">
      <div className="section-heading"><p className="eyebrow">How I think</p><h2 id="thinking-title">Good design reduces uncertainty.</h2><p>My process changes with the problem. These principles do not.</p></div>
      <div className="principle-grid">{productPrinciples.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
      <Link className="text-link" to="/about">More about my working style <span aria-hidden="true">→</span></Link>
    </section>

    <section className="content section" aria-labelledby="explorations-title">
      <div className="section-heading"><p className="eyebrow">Additional explorations</p><h2 id="explorations-title">Focused product hypotheses.</h2><p>Smaller studies used to explore finance, behavior design, and analytics. These are clearly presented as concepts, not shipped outcomes.</p></div>
      <div className="exploration-list">{additional.map((project) => <Link key={project.id} to={`/case-studies/${project.id}`}><span><small>{project.tag}</small><strong>{project.title}</strong></span><span aria-hidden="true">↗</span></Link>)}</div>
    </section>

    <section className="contact-cta content">
      <p className="eyebrow">Let’s work together</p>
      <h2>Looking for a designer who can bring structure to ambiguity?</h2>
      <p>I’m open to Product Designer roles and thoughtful product collaborations.</p>
      <a className="button" href="mailto:mehtabsingh723@gmail.com">Email Mehtab</a>
    </section>
  </Shell>;
}
