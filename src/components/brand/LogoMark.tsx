export function LogoMark({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      width="1em"
      height="1em"
      role="img"
      aria-label="Her Plate, Their Future logo"
      className={className}
    >
      {/* Plate — outer + inner rim (terracotta) */}
      <g fill="none" stroke="var(--color-accent-400)" strokeWidth="1.6">
        <circle cx="20" cy="18" r="12.2" />
        <circle cx="20" cy="18" r="9.7" />
      </g>
      {/* Table arc — gold smile beneath the plate */}
      <path
        d="M 9.8 32.4 Q 20 37 30.2 32.4"
        fill="none"
        stroke="var(--color-accent-300)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {/* Seedling — stem + three radiating leaves (brand green) */}
      <g transform="translate(20 17.4)">
        <line
          x1="0"
          y1="-0.6"
          x2="0"
          y2="4.6"
          stroke="var(--color-brand-500)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <g fill="var(--color-brand-400)">
          <ellipse rx="1.5" ry="2.1" transform="translate(0 -5.2)" />
          <ellipse rx="1.9" ry="1.3" transform="translate(-2.6 -3.4) rotate(28)" />
          <ellipse rx="1.9" ry="1.3" transform="translate(2.6 -3.4) rotate(-28)" />
        </g>
      </g>
    </svg>
  );
}
