import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { SiPinterest } from "react-icons/si";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#shop" },
  { label: "Categories", href: "#categories" },
  { label: "About", href: "#about" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-xs">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a
          href="#home"
          data-ocid="nav.link"
          className="flex items-center shrink-0"
        >
          <img
            src="/assets/generated/jhilfinds-logo-transparent.dim_400x120.png"
            alt="JhilFinds"
            className="h-10 w-auto"
          />
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              data-ocid="nav.link"
              className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button
            asChild
            className="pinterest-btn rounded-full font-bold gap-2"
            data-ocid="nav.primary_button"
          >
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiPinterest className="w-4 h-4" />
              Follow on Pinterest
            </a>
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              data-ocid="nav.link"
              className="text-sm font-semibold text-foreground py-1"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button
            asChild
            className="pinterest-btn rounded-full font-bold gap-2 w-full mt-2"
            data-ocid="nav.primary_button"
          >
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiPinterest className="w-4 h-4" />
              Follow on Pinterest
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
