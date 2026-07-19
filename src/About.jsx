import { Shell } from "./components";

const analyses = [
  {
    product: "YouTube",
    problem: "People can lose control of intent when recommendations optimize continuous viewing.",
    hypothesis: "A lightweight intent mode could improve satisfaction without removing discovery.",
    solution: "Let users choose a session goal—learn, catch up, or explore—and tune recommendations and stopping cues to it.",
    tradeoff: "More control may reduce short-term watch time and adds one decision at session start.",
    metrics: "Goal completion, ‘not interested’ rate, session satisfaction, return rate; monitor watch time as a guardrail.",
  },
  {
    product: "Spotify",
    problem: "Discovery and library management become harder as saved music grows.",
    hypothesis: "Temporary listening contexts can bridge one-off discovery and permanent library organization.",
    solution: "Offer smart, user-editable listening spaces generated from recent intent, time, and activity.",
    tradeoff: "Automation risks feeling opaque and may compete with playlists users already understand.",
    metrics: "Successful plays per session, saves from discovery, context reuse, skips; monitor playlist creation.",
  },
  {
    product: "Swiggy",
    problem: "Choice overload makes routine food decisions unnecessarily expensive.",
    hypothesis: "A repeat-order mode organized around constraints can shorten decisions without hiding discovery.",
    solution: "Surface trusted meals by delivery time, budget, dietary fit, and past satisfaction.",
    tradeoff: "Repeat behavior can reduce restaurant discovery and concentrate demand.",
    metrics: "Time to cart, checkout completion, reorder satisfaction, discovery diversity, restaurant concentration.",
  },
];

export default function About() {
  return <Shell>
    <section className="page-hero content narrow">
      <p className="eyebrow">How I work</p>
      <h1>I design by reducing uncertainty before adding interface.</h1>
      <p>I start with the decision a product needs to improve, make assumptions visible, and use the smallest useful evidence to move the team forward.</p>
    </section>

    <section className="content section philosophy">
      <div className="section-heading"><p className="eyebrow">Product philosophy</p><h2>User value, business value, and technical reality belong in the same conversation.</h2></div>
      <div className="three-column">
        <article><h3>Working style</h3><p>I turn fuzzy requests into explicit problems, questions, and success criteria. I share work early so critique can change the direction—not only polish it.</p></article>
        <article><h3>Collaboration</h3><p>I involve developers before high fidelity, document states and edge cases, and stay engaged through QA. Feasibility is a design input, not a late constraint.</p></article>
        <article><h3>Continuous learning</h3><p>I study product behavior, accessibility, systems thinking, and implementation. Each project ends with what I learned and what I would test next.</p></article>
      </div>
    </section>

    <section className="content section ai-section">
      <div><p className="eyebrow">Responsible AI workflow</p><h2>AI accelerates the work. It does not own the judgment.</h2></div>
      <div>
        <p>I use AI to expand alternatives, challenge assumptions, organize notes, inspect edge cases, and improve documentation.</p>
        <ul><li>No confidential or identifiable user data in unapproved tools.</li><li>Generated claims are treated as hypotheses, never research evidence.</li><li>Recommendations are checked against source material and human context.</li><li>I remain accountable for the final decision and its consequences.</li></ul>
      </div>
    </section>

    <section className="content section" aria-labelledby="product-thinking">
      <div className="section-heading"><p className="eyebrow">Product thinking</p><h2 id="product-thinking">How I examine familiar products.</h2><p>These are independent product hypotheses based on observable experiences, not inside knowledge or claims about company strategy.</p></div>
      <div className="analysis-list">{analyses.map((item, index) => <article key={item.product}>
        <header><span>0{index + 1}</span><h3>{item.product}</h3></header>
        <dl><div><dt>Problem</dt><dd>{item.problem}</dd></div><div><dt>Hypothesis</dt><dd>{item.hypothesis}</dd></div><div><dt>Possible solution</dt><dd>{item.solution}</dd></div><div><dt>Tradeoff</dt><dd>{item.tradeoff}</dd></div><div><dt>Success metrics</dt><dd>{item.metrics}</dd></div></dl>
      </article>)}</div>
    </section>

    <section className="contact-cta content"><p className="eyebrow">Start a conversation</p><h2>Have a product problem worth untangling?</h2><a className="button" href="mailto:mehtabsingh723@gmail.com">Email Mehtab</a></section>
  </Shell>;
}
