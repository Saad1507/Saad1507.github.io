import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Tools and Technologies",
  alternates: { canonical: "/skills/" },
};
const groups = [
  [
    "Application development",
    "React, JavaScript, Vite, Tailwind CSS, React Router, Zustand, TanStack Query, Node.js, Express, Flask and REST APIs.",
    "/software/",
  ],
  [
    "Data and automation",
    "Python, PostgreSQL, Prisma, SQLite, Requests, BeautifulSoup, Selenium, threaded collection and data validation.",
    "/projects/pricexpert/",
  ],
  [
    "Delivery and testing",
    "Git, GitHub Actions, Docker Compose, Nginx, Bash, systemd, Playwright and pytest.",
    "/experience/",
  ],
  [
    "Mobile development",
    "Dart, Flutter, Firebase Authentication, Firestore, go_router and asynchronous HTTP/JSON integration.",
    "/projects/garageease/",
  ],
  [
    "Systems programming",
    "C++, STL, wxWidgets, cache modelling, Python threads/processes, queues and subprocess execution.",
    "/projects/cpp-simulator/",
  ],
  [
    "Digital hardware",
    "Verilog, SystemVerilog, RV32I, AXI4-Lite, directed testbenches, UVM coursework, LibreLane, OpenROAD, Yosys and Sky130.",
    "/hardware/",
  ],
];
export default function Skills() {
  return (
    <div className="container page">
      <header className="page-heading">
        <p className="eyebrow">TOOLS & TECHNOLOGIES</p>
        <h1>
          Skills, connected
          <br />
          to the work.
        </h1>
        <p>
          Technologies used across internship applications, independent projects
          and coursework.
        </p>
      </header>
      <div className="skills-list">
        {groups.map(([name, text, href], i) => (
          <section key={name}>
            <span className="skill-number">0{i + 1}</span>
            <div>
              <h2>{name}</h2>
              <p>{text}</p>
              <Link className="text-link" href={href}>
                Explore related work ↗
              </Link>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
