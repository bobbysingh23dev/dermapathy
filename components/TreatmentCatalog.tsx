import type { TreatmentGroup } from "@/lib/treatments";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  groups: TreatmentGroup[];
  background?: "ivory" | "cream";
};

export default function TreatmentCatalog({
  eyebrow = "Full menu",
  title,
  description,
  groups,
  background = "ivory",
}: Props) {
  return (
    <section
      className={`border-b border-border ${
        background === "cream" ? "bg-cream" : "bg-ivory"
      }`}
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <header className="max-w-2xl">
          <p className="eyebrow">{eyebrow}</p>
          <span aria-hidden className="gold-rule" />
          <h2 className="mt-5 font-serif text-[2rem] leading-[1.15] tracking-tight text-charcoal sm:text-[2.5rem]">
            {title}
          </h2>
          {description ? (
            <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
              {description}
            </p>
          ) : null}
        </header>

        <div className="mt-14 border-t border-border sm:mt-16">
          {groups.map((g) => (
            <div
              key={g.title}
              className="grid gap-x-10 gap-y-6 border-b border-border py-10 lg:grid-cols-12 lg:py-12"
            >
              <div className="lg:col-span-4">
                <h3 className="font-serif text-xl text-charcoal sm:text-2xl">
                  {g.title}
                </h3>
                <p className="mt-3 text-[0.7rem] uppercase tracking-[0.2em] text-muted">
                  {String(g.items.length).padStart(2, "0")} treatments
                </p>
              </div>

              <ul className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-3 py-2.5 text-sm leading-7 text-charcoal-soft sm:text-[0.9375rem]"
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
