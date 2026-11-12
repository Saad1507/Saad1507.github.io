import Link from "next/link";
export default function NotFound() {
  return (
    <div className="container page not-found">
      <p className="eyebrow">404 / PAGE NOT FOUND</p>
      <h1>This page isn’t here.</h1>
      <p>
        The link may have changed. You can return home or explore the project
        collection.
      </p>
      <div className="button-row">
        <Link className="button button-primary" href="/">
          Back to home
        </Link>
        <Link className="button button-secondary" href="/projects/">
          Explore projects
        </Link>
      </div>
    </div>
  );
}
