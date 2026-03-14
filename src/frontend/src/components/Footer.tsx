import { Heart } from "lucide-react";
import { SiAmazon, SiPinterest } from "react-icons/si";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="font-display text-3xl font-bold text-white mb-1">
              JhilFinds
            </h2>
            <p className="text-white/60 text-sm">
              Your favorite finds, curated with love
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-6">
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 hover:text-white text-sm font-semibold transition-colors"
              data-ocid="footer.link"
            >
              <SiPinterest className="w-4 h-4" />
              Pinterest
            </a>
            <a
              href="#shop"
              className="flex items-center gap-2 text-white/70 hover:text-white text-sm font-semibold transition-colors"
              data-ocid="footer.link"
            >
              <SiAmazon className="w-4 h-4" />
              Amazon Storefront
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <span>© {year} JhilFinds. All rights reserved.</span>
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/70 transition-colors flex items-center gap-1"
          >
            Built with <Heart className="w-3 h-3 inline fill-current" /> using
            caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
