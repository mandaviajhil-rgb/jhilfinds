import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[520px] flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-banner.dim_1200x500.jpg')",
        }}
      />
      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/30 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-accent-foreground bg-accent/90 rounded-full px-3 py-1 mb-4">
              <Sparkles className="w-3 h-3" />
              Curated with love
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
              Discover Amazing Finds for Every Part of Your Life
            </h1>
            <p className="text-white/85 text-lg font-medium mb-8">
              Curated Amazon picks across fashion, beauty, home, tech, and more
              — handpicked with love by Jhil.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-primary text-primary-foreground font-bold text-base px-8 shadow-lg hover:scale-105 transition-transform"
              data-ocid="hero.primary_button"
            >
              <a href="#shop">Shop All Finds</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
