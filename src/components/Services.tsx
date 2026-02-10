import { ShieldCheck, GitBranch, Search, Cloud, AlertTriangle } from "lucide-react";
import SectionHeading from "./SectionHeading";

const SERVICES = [
  {
    icon: Search,
    title: "Riskanalys",
    text: "Kartlägg era sårbarheter och prioritera åtgärder baserat på faktisk affärsrisk.",
  },
  {
    icon: GitBranch,
    title: "DevSecOps-pipeline",
    text: "Automatisera säkerhetstester i CI/CD – fånga problem innan de når produktion.",
  },
  {
    icon: ShieldCheck,
    title: "Säkerhetsgranskning",
    text: "Djupgående kodgranskning och penetrationstestning av era applikationer.",
  },
  {
    icon: Cloud,
    title: "Cloud Hardening",
    text: "Härdning av molnmiljöer i AWS, Azure och GCP enligt branschstandarder.",
  },
  {
    icon: AlertTriangle,
    title: "Incidentberedskap",
    text: "Handlingsplaner och snabb respons när incidenten redan har inträffat.",
  },
];

export default function Services() {
  return (
    <section id="tjanster" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Tjänster"
          subtitle="Från riskanalys till incidenthantering – vi täcker hela säkerhetskedjan."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="glass-card gradient-border group rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <s.icon size={22} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              <span className="text-sm font-medium text-primary transition-colors group-hover:text-primary/80 cursor-pointer">
                Läs mer →
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
