import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import SectionHeading from "./SectionHeading";

const FAQS = [
  {
    q: "Vad kostar era tjänster?",
    a: "Det beror på omfattning och behov. Vi erbjuder både fasta paket och löpande avtal. Kontakta oss för en offert anpassad efter er situation.",
  },
  {
    q: "Hur lång tid tar ett typiskt projekt?",
    a: "En riskanalys tar normalt 2–4 veckor. Större implementationer som DevSecOps-pipeline kan ta 2–3 månader beroende på komplexitet.",
  },
  {
    q: "Hur arbetar ni – on-site eller remote?",
    a: "Vi arbetar primärt remote men kan vara on-site vid behov. Workshops och kick-offs gör vi gärna på plats.",
  },
  {
    q: "Vilka certifieringar och standarder följer ni?",
    a: "Vi arbetar enligt ISO 27001, NIST CSF, CIS Controls och har erfarenhet av SOC 2, NIS2 och GDPR-krav.",
  },
  {
    q: "Vad behöver vi ha på plats innan vi startar?",
    a: "Inte mycket – vi börjar med en discovery-fas för att förstå er miljö. Tillgång till relevanta system och en kontaktperson räcker för att komma igång.",
  },
  {
    q: "Erbjuder ni löpande support efter avslutat projekt?",
    a: "Absolut. Vi erbjuder SLA-baserade supportavtal med övervakning, rådgivning och incidentrespons.",
  },
];

export default function FAQ() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Vanliga frågor" />

        <Accordion type="single" collapsible className="mt-14">
          {FAQS.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-border/40">
              <AccordionTrigger className="text-left text-foreground hover:no-underline hover:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
