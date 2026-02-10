import { Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";

const TESTIMONIALS = [
  {
    quote: "De integrerade säkerhet i vår pipeline utan att sakta ner oss. Bästa investeringen vi gjort i år.",
    name: "Anna L.",
    role: "CTO, Mid-size SaaS",
  },
  {
    quote: "Från kaosartad incidenthantering till en lugn, strukturerad process. Enormt lyft för hela teamet.",
    name: "Erik S.",
    role: "VP Engineering, FinTech",
  },
  {
    quote: "Vi klarade NIS2-auditen utan anmärkningar tack vare deras metodiska approach.",
    name: "Maria K.",
    role: "CISO, E-handelsbolag",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Vad kunderna säger" />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.name}
              className="glass-card gradient-border flex flex-col rounded-xl p-6"
            >
              <Quote size={24} className="mb-4 text-primary/40" />
              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground italic">
                "{t.quote}"
              </p>
              <footer>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
