import { Compass, PenTool, Rocket, Settings } from "lucide-react";
import SectionHeading from "./SectionHeading";

const STEPS = [
  {
    icon: Compass,
    title: "Discover",
    text: "Vi kartlägger er nuvarande säkerhetsposition, risker och mål.",
  },
  {
    icon: PenTool,
    title: "Design",
    text: "Skräddarsydd säkerhetsarkitektur och åtgärdsplan med tydliga milstolpar.",
  },
  {
    icon: Rocket,
    title: "Implement",
    text: "Vi bygger, konfigurerar och integrerar säkerhetslösningar i era system.",
  },
  {
    icon: Settings,
    title: "Operate",
    text: "Löpande övervakning, optimering och support för långsiktig trygghet.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Vår process" subtitle="Strukturerat, transparent och repeterbart." />

        <div className="relative mt-14">
          {/* Timeline line (desktop) */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-primary/40 via-primary/20 to-transparent md:block" aria-hidden="true" />

          <div className="grid gap-12 md:gap-16">
            {STEPS.map((step, i) => (
              <div
                key={step.title}
                className={`relative flex flex-col items-center gap-4 md:flex-row ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 1 ? "md:text-right" : "md:text-left"}`}>
                  <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{step.text}</p>
                </div>

                {/* Icon node */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-background text-primary">
                  <step.icon size={20} />
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden flex-1 md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
