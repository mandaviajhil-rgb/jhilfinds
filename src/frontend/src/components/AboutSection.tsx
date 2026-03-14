import { Heart } from "lucide-react";
import { motion } from "motion/react";
import { SiAmazon, SiPinterest } from "react-icons/si";

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Heart className="w-10 h-10 text-primary mx-auto mb-4 fill-primary/20" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              About JhilFinds
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Hi! I'm Jhil — a passionate home decor enthusiast and lifestyle
              curator. Every product you see here is something I've personally
              loved, tested, or been obsessed with. My goal is to make your home
              and life a little more beautiful, one find at a time.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm pinterest-btn text-white transition-all hover:scale-105"
                data-ocid="about.primary_button"
              >
                <SiPinterest className="w-4 h-4" />
                Follow on Pinterest
              </a>
              <a
                href="#shop"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                data-ocid="about.secondary_button"
              >
                <SiAmazon className="w-4 h-4" />
                Amazon Storefront
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
