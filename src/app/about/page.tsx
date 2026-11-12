import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "About",
  alternates: { canonical: "/about/" },
};
export default function About() {
  return (
    <div className="container page">
      <header className="page-heading">
        <p className="eyebrow">ABOUT</p>
        <h1>
          Software engineering.
          <br />A foundation in systems.
        </h1>
        <p>
          I’m Muhammad Saad, a Computer Science graduate based in Karachi. I
          build web applications, backend services and automation tools, with
          additional project experience in digital IC design.
        </p>
      </header>
      <div className="about-layout">
        <div className="about-letter">
          <h2>Working across the application.</h2>
          <p>
            During my R&D internship, I researched, developed and deployed
            applications that brought together user interfaces, APIs, databases
            and external services. I worked on student and administrator
            experiences, private assessment workflows and AI-assisted
            applications.
          </p>
          <p>
            I enjoy understanding what happens beyond the screen: how an API
            handles a request, where application state lives, how a release is
            checked and what happens when a service becomes unavailable.
          </p>
          <h2>Understanding the system underneath.</h2>
          <p>
            My systems projects include a C++ cache simulator, a Python
            operating-system simulator and a grammar analyzer. Applied digital
            IC training at MERL, UIT University, extended that work into
            processor integration, testbenches and ASIC physical implementation.
          </p>
          <p>
            These projects inform how I think about software: clear interfaces
            between components, explicit behaviour and verification of the
            result.
          </p>
          <div className="button-row">
            <Link href="/experience/" className="button button-primary">
              My experience ↗
            </Link>
            <Link href="/skills/" className="text-link">
              Tools and technologies →
            </Link>
          </div>
        </div>
        <aside className="background-panel">
          <p className="eyebrow">BACKGROUND</p>
          <div>
            <span>EDUCATION</span>
            <h3>BS Computer Science</h3>
            <p>
              UIT University, Karachi
              <br />
              2022–2026 · Completed
            </p>
          </div>
          <div>
            <span>APPLIED TRAINING</span>
            <h3>Digital IC Design & Verification</h3>
            <p>
              Micro Electronics Research Lab (MERL), UIT University
              <br />
              May–September 2026
            </p>
          </div>
          <div>
            <span>CERTIFICATIONS</span>
            <p>
              EC-Council: Cybersecurity for Businesses, The Fundamental Edition
              <br />
              <small>May 2025</small>
            </p>
            <p>
              AWS Skill Builder: Fundamentals of Analytics on AWS, Parts 1 and 2
              <br />
              <small>March 2025</small>
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
