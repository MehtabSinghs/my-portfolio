/* eslint-disable react/prop-types, react-refresh/only-export-components */
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const featuredIds = ["punjab-pagri-house", "apricus-academy", "excellence-university"];

export function Header() {
  const [open, setOpen] = useState(false);
  return <><a className="skip-link" href="#main">Skip to main content</a>
    <header className="site-header">
      <Link className="brand" to="/" onClick={() => setOpen(false)}><span aria-hidden="true">MS</span> Mehtab Singh</Link>
      <button className="menu" type="button" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
      <nav id="nav" className={open ? "open" : ""} aria-label="Primary">
        <NavLink to="/case-studies" onClick={() => setOpen(false)}>Work</NavLink>
        <NavLink to="/about" onClick={() => setOpen(false)}>How I work</NavLink>
        <a href="mailto:mehtabsingh723@gmail.com">Contact</a>
      </nav>
    </header></>;
}

export function Footer() {
  return <footer className="footer"><p>© {new Date().getFullYear()} Mehtab Singh · Product Designer</p><a href="mailto:mehtabsingh723@gmail.com">Email me</a></footer>;
}

export function Shell({ children }) { return <><Header /><main id="main">{children}</main><Footer /></>; }

export function ProjectVisual({ project, eager = false }) {
  const image = project.images?.[0];
  return <div className="project-visual">{image ? <img src={image.src} alt={image.alt} width="1440" height="900" loading={eager ? "eager" : "lazy"} decoding="async" /> : <span>{project.title}</span>}</div>;
}
