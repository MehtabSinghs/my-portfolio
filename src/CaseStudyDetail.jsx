/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";
import { projects } from "./projectsData";
import { getStory } from "./caseStudyContent";
import { Shell, ProjectVisual } from "./components";

const List = ({ items }) => <ul className="clean-list">{items.map((item) => <li key={item}>{item}</li>)}</ul>;

export default function CaseStudyDetail() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);
  if (!project) return <Shell><section className="page-hero content"><h1>Case study not found</h1><Link to="/case-studies">Return to work</Link></section></Shell>;
  const story = getStory(project);
  const isLive = project.id === "punjab-pagri-house";
  const isApricus = project.id === "apricus-academy";

  return <Shell>
    <article className="case-detail">
      <header className="case-hero content">
        <Link className="back-link" to="/case-studies">← All work</Link>
        <p className="eyebrow">{project.tag} · {isLive ? "Live product" : isApricus ? "Soon to be live" : "Concept"}</p>
        <h1>{project.title}</h1><p className="case-hero__lead">{project.challenge}</p>
        <dl className="case-facts"><div><dt>Role</dt><dd>{project.role}</dd></div><div><dt>Timeline</dt><dd>{story.timeline}</dd></div><div><dt>Team</dt><dd>{story.team}</dd></div><div><dt>Evidence</dt><dd>{isLive ? "Live product · observed" : isApricus ? "In development · not yet measured" : "Design rationale · not measured"}</dd></div></dl>
        {isLive && <a className="button case-live-link" href={project.link} target="_blank" rel="noreferrer">View live product <span aria-hidden="true">↗</span></a>}
        {isApricus && <p className="launch-status"><span aria-hidden="true"></span> Apricus Academy is currently being prepared for launch.</p>}
        <ProjectVisual project={project} eager />
      </header>

      <div className="case-body content">
        <aside><nav aria-label="Case study sections"><a href="#summary">Summary</a><a href="#evidence">Research</a><a href="#strategy">Strategy</a><a href="#decisions">Decisions</a><a href="#delivery">Delivery</a><a href="#outcome">Outcome</a></nav></aside>
        <div className="case-copy">
          <section id="summary"><p className="eyebrow">Executive summary</p><h2>The product context</h2><p>{project.summary}</p>
            <div className="summary-grid"><div><h3>Business problem</h3><p>{project.challenge}</p></div><div><h3>User problem</h3><p>{story.userProblem}</p></div><div><h3>Business goal</h3><p>{story.businessGoal}</p></div><div><h3>Outcome</h3><p>{project.outcome}</p></div></div>
            <h3>Responsibilities</h3><p>{project.role}</p><h3>Constraints</h3><List items={story.constraints} />
          </section>

          <section id="evidence"><p className="eyebrow">Research and evidence</p><h2>What I needed to understand</h2><p>For concept work, these activities frame hypotheses rather than represent validated user findings.</p><List items={story.research} />
            <h3>Key insights</h3><div className="insight-grid">{story.insights.map((item, index) => <article key={item}><span>0{index + 1}</span><p>{item}</p></article>)}</div>
            <h3>Persona / audience model</h3><p>{isLive ? "Mobile-first shoppers with different levels of familiarity, buying for personal use, gifting, or events." : "A working audience model based on the product context. It requires validation and is not presented as a research-backed persona."}</p>
          </section>

          <section id="strategy"><p className="eyebrow">Product strategy</p><h2>From journey to structure</h2>
            <h3>User journey</h3><ol className="journey">{story.journey.map((step) => <li key={step}><span>{step}</span></li>)}</ol>
            <h3>Information architecture</h3><div className="ia-map">{story.ia.map((item) => <span key={item}>{item}</span>)}</div>
            <h3>Wireframes</h3><p>Low-fidelity flows established priority, task order, and recovery states before visual styling. The portfolio shows the reasoning rather than claiming unsupported test results.</p>
          </section>

          <section id="decisions"><p className="eyebrow">Design decisions</p><h2>What changed—and what each choice cost</h2>
            <div className="decision-list">{story.decisions.map(([decision, why, tradeoff], index) => <article key={decision}><span>Decision 0{index + 1}</span><h3>{decision}</h3><dl><div><dt>Why</dt><dd>{why}</dd></div><div><dt>Tradeoff</dt><dd>{tradeoff}</dd></div></dl></article>)}</div>
            <h3>Iterations</h3><List items={story.iterations} />
          </section>

          <section id="delivery"><p className="eyebrow">Delivery</p><h2>Designing beyond the Figma file</h2>
            <h3>Developer collaboration</h3><p>{story.collaboration}</p>
            <h3>Design system</h3><p>{story.designSystem}</p>
            <h3>Responsive strategy</h3><p>{story.responsive}</p>
            <h3>Accessibility decisions</h3><List items={story.accessibility} />
          </section>

          <section id="outcome"><p className="eyebrow">Outcome</p><h2>What changed—and what remains unknown</h2><p>{project.outcome}</p>
            <div className="metric-grid">{story.metrics.map(([label, value, type]) => <article key={label}><span>{type}</span><h3>{value}</h3><p>{label}</p></article>)}</div>
            <h3>Lessons learned</h3><List items={story.lessons} />
            <div className="next-step"><p className="eyebrow">Next iteration</p><h3>{story.next}</h3></div>
          </section>
        </div>
      </div>
    </article>
  </Shell>;
}
