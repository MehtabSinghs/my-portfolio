import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Nav = ({ onCaseStudies }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["hero", "work", "process", "about", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__logo">MS • Portfolio</div>
      <nav className="nav__links">
        <button 
          onClick={() => scrollTo("hero")}
          className={activeSection === "hero" ? "active" : ""}
        >
          Home
        </button>
        <button 
          onClick={() => scrollTo("work")}
          className={activeSection === "work" ? "active" : ""}
        >
          Work
        </button>
        <button 
          onClick={() => scrollTo("process")}
          className={activeSection === "process" ? "active" : ""}
        >
          Process
        </button>
        <button 
          onClick={() => scrollTo("about")}
          className={activeSection === "about" ? "active" : ""}
        >
          About
        </button>
        <button 
          onClick={() => scrollTo("contact")}
          className={activeSection === "contact" ? "active" : ""}
        >
          Contact
        </button>
        <button 
          onClick={onCaseStudies}
          className="nav__case-studies-btn"
        >
          Case Studies
        </button>
      </nav>
    </header>
  );
};

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const phrases = ["useful", "beautiful", "accessible", "intuitive"];
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    let timeout;
    const currentPhrase = phrases[phraseIndex];
    
    if (typedText.length < currentPhrase.length) {
      timeout = setTimeout(() => {
        setTypedText(currentPhrase.slice(0, typedText.length + 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setTypedText("");
        setPhraseIndex((phraseIndex + 1) % phrases.length);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [typedText, phraseIndex]);

  return (
    <section id="hero" className="hero">
      <div className="hero__content " >
        <p className="hero__eyebrow animate-fade-in mt-2">UI · UX · Product Design</p>
        <h1 className="animate-fade-in-up">
          Hi, I'm <span>Mehtab Singh</span>.
          <br />
          I design <span className="typing-text">{typedText}</span>
          <span className="cursor">|</span> digital products.
        </h1>
        <p className="hero__subtitle animate-fade-in-up">
          I'm a UI/UX , product designer & product management enthusiast who turns complex problems 
          into simple, intuitive experiences — with a focus on real users,
          real data, and clean visual language.
        </p>
        
        <div className="hero__stats animate-fade-in">
          <div className="stat-item">
            <h3>10+</h3>
            <p>Projects Delivered</p>
          </div>
          <div className="stat-item">
            <h3>5+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat-item">
            <h3><i className="bi bi-check-circle-fill"></i></h3>
            <p>Active Problem Solver</p>
          </div>
        </div>

        <div className="hero__tags animate-fade-in-up">
          <span>User Research</span>
          <span>Design Systems</span>
          <span>Interaction Design</span>
          <span>Prototyping</span>
        </div>
        <div className="hero__cta animate-fade-in-up">
          <a href="#work" className="button-glow">View Case Studies</a>
          <a href="#contact" className="hero__cta--ghost">
            Let's Work Together
          </a>
        </div>
        <div className="hero__meta animate-fade-in-up">
          <div>
            <h3>UI/UX</h3>
            <p>Product-focused designer</p>
          </div>
          <div>
            <h3>Figma</h3>
            <p>From wireframes to handoff</p>
          </div>
          <div className="mb-2">
            <h3>Live</h3>
            <p>Shipping to real users</p>
          </div>
        </div>
      </div>

      <div className="hero__card">
        <div className="hero__card-header">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <div className="hero__card-body">
          <p className="hero__card-label">Recent Work</p>
          <h2>Punjab Pagri House Website</h2>
          <ul>
            <li>Complete website design in Figma</li>
            <li>E-commerce experience for traditional products</li>
            <li>From wireframes to final responsive design</li>
            <li>Checkout the live website <a href="https://punjabpagrihouse.com/" target="_blank" rel="noreferrer">Punjab Pagri House</a></li>

          </ul>
          <p className="hero__card-foot">
            All designs created and prototyped in Figma - from initial concepts
            to developer handoff with complete design system.
          </p>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ tag, title, summary, metrics, role, link, onCaseStudyClick }) => {
  const handleClick = () => {
    if (onCaseStudyClick) {
      onCaseStudyClick();
    }
  };
  
  return (
    <article className="project" onClick={handleClick}>
      <div className="project__badge">{tag}</div>
      <h3>{title}</h3>
      <p className="project__summary">{summary}</p>
      <ul className="project__metrics">
        {metrics.map((m, i) => (
          <li key={i}>{m}</li>
        ))}
      </ul>
      <div className="project__footer">
        <p>{role}</p>
        <button 
          className="project__btn project__btn--view"
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
        >
          View Case Study →
        </button>
      </div>
    </article>
  );
};

const Work = ({ onCaseStudies }) => {
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
      ],
      role: "UX · UI · Web Design · Figma",
      link: "",
    },
    {
      tag: "CASE STUDY · ED-TECH",
      title: "Apricus Academy",
      summary:
        "Designed a comprehensive online learning platform for students to discover, learn, and organize their educational journey. Created intuitive interfaces for course management, progress tracking, and interactive learning experiences.",
      metrics: [
        "Complete frontend design system in Figma",
        "Student-centered learning experience",
        "Intuitive course organization & navigation",
        "Interactive learning modules & progress tracking",
      ],
      role: "UX · UI · Frontend Design · Figma",
      link: "",
    },
    {
      tag: "CASE STUDY · WEB",
      title: "B2B Analytics Dashboard",
      summary:
        "Simplified a dense analytics product into a flexible workspace with clear hierarchy and information grouping.",
      metrics: [
        "↑ Feature discoverability",
        "Fewer support tickets on reporting",
        "New layout supports future modules",
      ],
      role: "IA · Interaction Design · Figma",
      link: "",
    },
  ];

  return (
    <section id="work" className="work">
      <div className="section-heading">
        <p>Selected Work</p>
        <h2>Case studies that blend function & emotion.</h2>
        <p className="section-heading__sub">
          Each project is a full story — from problem framing and research, 
          to prototypes, testing, and shipped UI.
        </p>
      </div>
      <div className="work__grid">
        {projects.map((p, i) => (
          <ProjectCard 
            key={i} 
            {...p} 
            onCaseStudyClick={() => {
              onCaseStudies();
            }}
          />
        ))}
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      title: "1. Listen & align",
      desc: "Understand the problem, constraints, and success metrics. Ask more 'why' than 'what'.",
    },
    {
      title: "2. Explore the context",
      desc: "User interviews, competitor scans, heuristic review, and mapping the current flow.",
    },
    {
      title: "3. Structure the experience",
      desc: "Information architecture, user flows, low-fidelity sketches, and interaction patterns.",
    },
    {
      title: "4. Design & prototype",
      desc: "High-fidelity UI, micro-interactions, and prototypes realistic enough to test.",
    },
    {
      title: "5. Validate & iterate",
      desc: "Usability tests, design critiques, and refinements based on real feedback and data.",
    },
    {
      title: "6. Ship & support",
      desc: "Dev-hand-off, specs, edge cases, and follow-ups after launch to keep improving.",
    },
  ];

  return (
    <section id="process" className="process">
      <div className="section-heading">
        <p>Process</p>
        <h2>A design process that's structured but not rigid.</h2>
      </div>
      <div className="process__timeline">
        {steps.map((s, i) => (
          <div key={i} className="process__step">
            <div className="process__dot" />
            <div className="process__content">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Skills = () => {
  const buckets = [
    {
      title: "UX & Product",
      items: [
        "User Interviews",
        "Journey Mapping",
        "Personas & Jobs-to-be-Done",
        "Information Architecture",
        "Usability Testing",
      ],
    },
    {
      title: "UI & Visual",
      items: [
        "Design Systems",
        "Layout & Grid",
        "Typography & Color",
        "Design Tokens",
        "Micro-interactions",
      ],
    },
    {
      title: "Tools",
      items: [
        "Figma (Primary Tool)",
        "FigJam for Collaboration",
        "Figma Prototyping",
        "Figma Dev Mode",
        "Design Systems in Figma",
      ],
    },
    {
      title: "Collaboration",
      items: [
        "Working with devs",
        "Design reviews",
        "Stakeholder workshops",
        "A/B test planning",
        "Documentation",
      ],
    },
  ];

  return (
    <section className="skills">
      <div className="section-heading">
        <p>Skills</p>
        <h2>What I bring to a product team.</h2>
      </div>
      <div className="skills__grid">
        {buckets.map((b, i) => (
          <div key={i} className="skills__card">
            <h3>{b.title}</h3>
            <ul>
              {b.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="about">
    <div className="about__content">
      <p className="about__eyebrow">About</p>
      <h2>Designing with empathy, clarity and intent.</h2>
      <p>
        I'm Mehtab Singh, a UI/UX & product designer who cares about how
        products feel in real life — not just how they look in a Figma frame.
        I enjoy working on complex problems, collaborating with developers,
        and turning fuzzy ideas into interfaces people can actually use.
      </p>
      <p>
        My work is shaped by curiosity, strong visual fundamentals, and a habit
        of asking "what problem are we really solving?" I love clean, minimal
        interfaces — but never at the cost of clarity or accessibility.
      </p>
      <div className="about__chips">
        <span>Open to UI/UX internships</span>
        <span>Remote & hybrid</span>
        <span>Portfolio reviews welcome</span>
      </div>
    </div>
    <div className="about__side">
      <div className="about__card">
        <h3>Currently</h3>
        <p>Designing and refining product experiences as a UI/UX designer.</p>
      </div>
      <div className="about__card">
        <h3>Interested in</h3>
        <p>
          SaaS dashboards, design systems, onboarding, and products that help
          people learn, manage, or create.
        </p>
      </div>
      <div className="about__card">
        <h3>Outside design</h3>
        <p>Learning, sketching interfaces, and geeking out on good microcopy.</p>
      </div>
    </div>
  </section>
);

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Mehtab delivered an exceptional website for Punjab Pagri House that beautifully blends our traditional heritage with modern e-commerce. The design honors our cultural products while making online shopping seamless for customers.",
      author: "Bhagwant Singh",
      role: "Owner, Punjab Pagri House",
      avatar: "BS"
    },
    {
      quote: "The Apricus Academy platform design exceeded our expectations. Mehtab created an intuitive learning experience that students love. The course organization and progress tracking features are exactly what we needed.",
      author: "Dr. Gurpreet Kaur",
      role: "Founder, Apricus Academy",
      avatar: "GK"
    },
    {
      quote: "Working with Mehtab was a pleasure. The designs were thoughtful, well-documented in Figma, and the attention to user experience shows in every interaction. Highly professional work.",
      author: "Amandeep Kaur",
      role: "Project Manager, Tech Solutions",
      avatar: "AK"
    }
  ];

  return (
    <section className="testimonials">
      <div className="section-heading">
        <p>Testimonials</p>
        <h2>What people say about working with me.</h2>
      </div>
      <div className="testimonials__grid">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial">
            <div className="testimonial__quote">"{t.quote}"</div>
            <div className="testimonial__author">
              <div className="testimonial__avatar">{t.avatar}</div>
              <div>
                <div className="testimonial__name">{t.author}</div>
                <div className="testimonial__role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="contact">
    <div className="contact__card">
      <p className="contact__eyebrow">Contact</p>
      <h2>Let's design something together.</h2>
      <p>
        Whether you need a new product flow, a fresh visual language, or help
        refining an existing experience — I'd love to hear about it.
      </p>
      <div className="contact__actions">
        <a
          href="mailto:mehtabsingh723@gmail.com"
          className="contact__primary button-glow"
        >
          Email me
        </a>
        <div className="contact__links">
          <a href="https://wa.me/+919988427249" target="blank" rel="noreferrer">Whatsapp</a>
        </div>
      </div>
      <p className="contact__note">
        Full Figma case studies available on request.
      </p>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <p>© 2025 Mehtab Singh · UI/UX & Product Designer</p>
    <p>Built with React · Hosted on GitHub Pages</p>
  </footer>
);

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button 
      className={`scroll-to-top ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
};

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="page__gradient" />
      <Nav onCaseStudies={() => navigate("/case-studies")} />
      <main>
        <Hero />
        <Work onCaseStudies={() => navigate("/case-studies")} />
        <Process />
        <Skills />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;
