import { Linkedin, Twitter, Github } from "lucide-react";

const LINKS = [
  { label: "Tjänster", href: "#tjanster" },
  { label: "Case", href: "#case" },
  { label: "Om oss", href: "#process" },
  { label: "Kontakt", href: "#kontakt" },
];

const SOCIALS = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="text-lg font-bold tracking-tight text-foreground">
          Säker<span className="text-primary">DevSec</span>
        </a>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-6">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex gap-4">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <s.icon size={18} />
            </a>
          ))}
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} SäkerDevSec. Alla rättigheter förbehållna.
      </p>
    </footer>
  );
}
