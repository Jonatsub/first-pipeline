

# 🚀 Säker DevSecOps – Premium Landing Page

## Koncept
En ensidig, mörk och "spacead" landing page för ett IT/cybersäkerhetsbolag. Stilen kombinerar sci-fi-estetik (stjärnhimmel, nebulosa-gradienter, neon-accenter) med professionell B2B-ton. All data är mockad – ingen backend behövs.

---

## Visuell stil & Design System
- **Färgpalett:** Nästan svart/mörkblå bas, neon cyan och lila accenter (återhållsamt)
- **Effekter:** Glassmorphism-kort, gradient borders, subtil glow på CTA-knappar
- **Typografi:** Stor, ren sans-serif med tydlig hierarki
- **Animationer:** Fade-in on scroll, hover-effekter – respekterar `prefers-reduced-motion`
- **Responsivt:** Mobil, tablet och desktop

---

## Sektioner (i ordning)

### 1. Navigation
- Textbaserad logotyp
- Länkar: Tjänster, Case, Om oss, Kontakt (smooth scroll)
- Primär CTA: "Boka möte"
- Mobilmeny (hamburger)

### 2. Hero med rymdkänsla
- CSS-baserad stjärnhimmel + gradient-nebula bakgrund
- Rubrik: *"Säker DevSecOps som skalar."*
- Kort värdeproposition
- Två CTA-knappar: "Boka möte" + "Se case"
- Social proof-rad med textchips (generiska logotyper)

### 3. Tjänster (5 kort)
- Riskanalys, DevSecOps-pipeline, Säkerhetsgranskning, Cloud Hardening, Incidentberedskap
- Varje kort: Lucide-ikon, rubrik, kort text, "Läs mer"-länk
- Glassmorphism-styling

### 4. Varför oss (3 punkter)
- Mätbart, Automatiserat, Compliance-ready
- Metrics-chips (t.ex. "Mean time to detect ↓", "Deploy frequency ↑")

### 5. Case / Projekt (3 kort)
- Struktur: Problem → Lösning → Resultat
- Realistiskt men generiskt innehåll

### 6. Process (tidslinje)
- 4 steg: Discover → Design → Implement → Operate
- Visuell tidslinje med ikoner och kort beskrivning per steg

### 7. Testimonials (3 citat)
- Generiska namn + roller (t.ex. "CTO, Mid-size SaaS")
- Stilren citatdesign

### 8. FAQ (accordion)
- 6 frågor om priser, tid, arbetssätt, säkerhet, krav, support
- Använder befintlig Accordion-komponent

### 9. Kontakt / CTA-sektion
- Formulär: namn, e-post, företag, meddelande
- Validering med Zod + react-hook-form (tydliga felmeddelanden)
- Lokalt "skickat"-state (ingen backend)

### 10. Footer
- Logotyp, navigeringslänkar, sociala ikoner, copyright

---

## Tekniskt
- All data mockad lokalt – inga API-anrop
- Inga experimentella bibliotek – bara det som redan finns installerat
- Semantisk HTML, aria-attribut, god kontrast
- Välstrukturerade komponenter i separata filer
- Design system-konstanter för enkel justering av färger/spacing

