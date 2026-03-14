import { Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useFeaturedProducts } from "../hooks/useQueries";
import { ProductCard } from "./ProductCard";

export function FeaturedSection() {
  const { data: featured = [] } = useFeaturedProducts();

  if (featured.length === 0) return null;

  return (
    <section className="py-12 bg-gradient-to-b from-background to-muted/40">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="h-px flex-1 bg-border" />
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" />
            JhilFinds Picks
          </h2>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {featured.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="product-card bg-card rounded-2xl overflow-hidden shadow-card border border-border">
                <div className="relative overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full aspect-square object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute top-2 left-2 inline-flex items-center gap-1 text-xs font-bold bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                    <Sparkles className="w-2.5 h-2.5" />
                    Featured
                  </span>
                </div>
                <div className="p-3">
                  <p className="font-display font-bold text-xs text-card-foreground leading-snug line-clamp-2">
                    {product.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
