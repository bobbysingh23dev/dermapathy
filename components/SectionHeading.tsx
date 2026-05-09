type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h2" | "h3";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as = "h2",
}: Props) {
  const Heading = as;
  const alignment =
    align === "center" ? "text-center mx-auto" : "text-left mx-0";
  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <span
        aria-hidden
        className={`gold-rule ${align === "center" ? "gold-rule-center" : ""}`}
      />
      <Heading className="mt-5 font-serif text-[2rem] leading-[1.15] tracking-tight text-charcoal sm:text-[2.5rem]">
        {title}
      </Heading>
      {description && (
        <p className="mt-5 text-base leading-8 text-muted">
          {description}
        </p>
      )}
    </div>
  );
}
