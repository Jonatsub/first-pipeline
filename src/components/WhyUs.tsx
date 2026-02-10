import { BarChart3, Zap, FileCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";

const POINTS = [
  {
    icon: BarChart3,
    title: "Mätbart",
    text: "Vi levererar konkreta metrics, inte bara rapporter. Ni ser resultat i realtid.",
    chips: ["Mean time to detect ↓", "Vulnerability backlog ↓"],
  },
  {
    icon: Zap,
    title: "Automatiserat",
    text: "Säkerhet integrerad i pipeline – inga manuella flaskhalsar som bromsar leverans.",
    chips: ["Deploy frequency ↑", "Lead time ↓"],
  },
  {
    icon: FileCheck,
    title: "Compliance-ready",
    text: "Bygg mot ISO 27001, SOC 2, NIS2 från dag ett – inte som eftertanke.",
    chips: ["Audit-ready", "Continuous compliance"],
  },
];

export default function WhyUs() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Varför oss" subtitle="Säkerhet som accelererar – inte bromsar." />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {POINTS.map((p) => (
            <div key={p.title} className="text-center md:text-left">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary md:mx-0">
                <p.icon size={24} />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">{p.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                {p.chips.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
