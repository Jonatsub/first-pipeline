import { Button } from "@/components/ui/button";
import StarField from "./StarField";

const SOCIAL_PROOF = ["SecureOps AB", "CloudFirst", "DataVault", "NordSec", "FinTech Nordic"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden nebula-bg">
      <StarField count={100} />

      <div className="relative z-10 mx-auto max-w-4xl px-4 pt-24 pb-16 text-center sm:px-6">
        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl animate-fade-in-up">
          Säker DevSecOps som skalar.
        </h1>
        <p
          className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl animate-fade-in-up"
          style={{ animationDelay: "0.15s" }}
        >
          Vi bygger säkerhet direkt i er utvecklingsprocess – från kod till moln.
          Snabbare leveranser, färre sårbarheter, full compliance.
        </p>

        <div
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Button size="lg" className="glow-btn text-base px-8" asChild>
            <a href="#kontakt">Boka möte</a>
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8 border-border hover:bg-secondary" asChild>
            <a href="#case">Se case</a>
          </Button>
        </div>

        {/* Social proof */}
        <div
          className="mt-16 animate-fade-in-up"
          style={{ animationDelay: "0.45s" }}
        >
          <p className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">
            Betrodd av team som prioriterar säkerhet
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {SOCIAL_PROOF.map((name) => (
              <span
                key={name}
                className="rounded-full border border-border/60 bg-secondary/40 px-4 py-1.5 text-xs text-muted-foreground"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" aria-hidden="true" />
    </section>
  );
}
