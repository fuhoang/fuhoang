export function TaggedHeading({
  as,
  children,
  className = "",
}: {
  as: "h2" | "h3";
  children: React.ReactNode;
  className?: string;
}) {
  const Tag = as;

  return (
    <Tag className={["tagged-heading", `tagged-heading-${as}`, className].join(" ").trim()}>
      <span className="tagged-heading-bracket" aria-hidden="true">
        &lt;
      </span>
      <span className="tagged-heading-frame">
        <span className="tagged-heading-text">{children}</span>
      </span>
      <span className="tagged-heading-bracket" aria-hidden="true">
        /&gt;
      </span>
    </Tag>
  );
}
