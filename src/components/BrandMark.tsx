export default function BrandMark() {
  return (
    <svg
      className="brand-mark"
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
    >
      <rect className="brand-tile" width="64" height="64" rx="16" />
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path
          className="brand-bracket brand-bracket-left"
          d="M21 19 11 32 21 45"
        />
        <path
          className="brand-bracket brand-bracket-right"
          d="M43 19 53 32 43 45"
        />
        <path
          className="brand-trace"
          d="M37 18H28V30H36V46H27"
          pathLength="1"
        />
        <path
          className="brand-packet"
          d="M37 18H28V30H36V46H27"
          pathLength="1"
        />
      </g>
      <circle className="brand-node brand-node-start" cx="37" cy="18" r="2.8" />
      <circle className="brand-node brand-node-end" cx="27" cy="46" r="2.8" />
    </svg>
  );
}
