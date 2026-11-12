import Link from "next/link";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div>
          <span className="eyebrow">LET’S CONNECT</span>
          <h2>Have a role or a project in mind?</h2>
          <a className="footer-email" href="mailto:saadyasir1507@gmail.com">
            saadyasir1507@gmail.com <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="footer-links">
          <Link href="/software/">Software</Link>
          <Link href="/hardware/">Digital hardware</Link>
          <Link href="/cv/">Download a CV</Link>
          <a
            href="https://github.com/Saad1507"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-saad-54a2a4253"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Muhammad Saad</span>
        <span>Karachi, Pakistan</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
