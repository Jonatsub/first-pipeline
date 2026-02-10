import SectionHeading from "./SectionHeading";

const CASES = [
  {
    title: "SaaS-plattform – Snabbare releaser utan riskökning",
    problem: "Teamet skippade säkerhetstester för att hinna med sprintar.",
    solution: "Vi integrerade SAST/DAST direkt i CI/CD med automatisk feedback till utvecklare.",
    result: "60 % snabbare deployment, 85 % färre kritiska sårbarheter i produktion.",
  },
  {
    title: "Finansbolag – NIS2-compliance på 3 månader",
    problem: "Oklart var känslig data lagrades och bristande loggning.",
    solution: "Dataklassificering, centraliserad loggning och rollbaserad åtkomstkontroll.",
    result: "Full NIS2-compliance inom deadline, noll anmärkningar vid extern audit.",
  },
  {
    title: "E-handel – Incident response från noll till hero",
    problem: "Ingen beredskapsplan, tidigare incidenter hanterades ad hoc.",
    solution: "Incidentprocess, runbooks, tabletop-övningar och on-call-setup.",
    result: "MTTR minskade från 12 h till 45 min. Inga kundpåverkande incidenter på 6 månader.",
  },
];

export default function Cases() {
  return (
    <section id="case" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Case" subtitle="Verkliga resultat, anonymiserade klienter." />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {CASES.map((c) => (
            <article
              key={c.title}
              className="glass-card gradient-border flex flex-col rounded-xl p-6"
            >
              <h3 className="mb-4 text-lg font-semibold text-foreground">{c.title}</h3>
              <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p><span className="font-medium text-foreground">Problem:</span> {c.problem}</p>
                <p><span className="font-medium text-foreground">Lösning:</span> {c.solution}</p>
                <p><span className="font-medium text-primary">Resultat:</span> {c.result}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
