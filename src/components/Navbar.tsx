import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Tjänster", href: "#tjanster" },
  { label: "Case", href: "#case" },
  { label: "Om oss", href: "#process" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="text-lg font-bold tracking-tight text-foreground">
          Säker<span className="text-primary">DevSec</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <Button size="sm" className="glow-btn" asChild>
            <a href="#kontakt">Boka möte</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Stäng meny" : "Öppna meny"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border/40 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-base text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <Button className="glow-btn w-full" asChild>
              <a href="#kontakt" onClick={() => setOpen(false)}>Boka möte</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
