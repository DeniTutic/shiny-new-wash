export function SectionHead({
  tag,
  title,
  sub,
  align = "center",
}: {
  tag: string;
  title: string;
  sub?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="font-mono-num text-xs font-medium uppercase tracking-[0.25em] text-foam-cyan">
        {tag}
      </span>
      <h2 className="mt-3 text-4xl md:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}
