import type { Metadata } from "next";
import CopyEmail from "@/components/CopyEmail";
export const metadata: Metadata = {
  title: "Contact",
  alternates: { canonical: "/contact/" },
};
export default function Contact() {
  return (
    <div className="container page contact-page">
      <header className="page-heading">
        <p className="eyebrow">CONTACT</p>
        <h1>
          Let’s talk about
          <br />
          what you’re building.
        </h1>
        <p>
          For software, systems or digital hardware opportunities, email me with
          a little context about the role or project.
        </p>
      </header>
      <div className="contact-grid">
        <section className="contact-primary">
          <span className="eyebrow">EMAIL</span>
          <a className="contact-email" href="mailto:saadyasir1507@gmail.com">
            saadyasir1507@gmail.com ↗
          </a>
          <CopyEmail />
          <p>Based in Karachi, Pakistan.</p>
        </section>
        <div className="contact-social">
          <a
            href="https://github.com/Saad1507"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>GITHUB</span>
            <strong>Saad1507 ↗</strong>
            <p>Public projects and source code.</p>
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-saad-54a2a4253"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>LINKEDIN</span>
            <strong>Muhammad Saad ↗</strong>
            <p>Professional profile and contact.</p>
          </a>
        </div>
      </div>
    </div>
  );
}
