import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ShoppingBag } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useAllProducts } from "../hooks/useQueries";
import { ProductCard } from "./ProductCard";

const CATEGORIES = [
  "All",
  "Home Decor",
  "Kitchen",
  "Bedroom",
  "Office",
  "Outdoor",
  "Fashion",
  "Beauty",
  "Tech",
];

const SKELETON_KEYS = ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8"];

export function ProductsGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { data: products = [], isLoading } = useAllProducts();

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="shop" className="py-14 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            All Finds
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Every item handpicked by Jhil — discover your next favorite thing.
          </p>
        </motion.div>

        <div
          id="categories"
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {CATEGORIES.map((cat) => (
            <button
              type="button"
              key={cat}
              onClick={() => setActiveCategory(cat)}
              data-ocid="categories.tab"
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary shadow-md"
                  : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {isLoading ? (
          <div className="masonry-grid" data-ocid="products.loading_state">
            {SKELETON_KEYS.map((k) => (
              <div key={k} className="masonry-item">
                <Skeleton className="w-full aspect-square rounded-2xl" />
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div
            className="flex flex-col items-center justify-center py-20 text-center"
            data-ocid="products.empty_state"
          >
            <ShoppingBag className="w-12 h-12 text-muted-foreground mb-4" />
            <h3 className="font-display font-bold text-xl mb-2">
              No finds yet in this category
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Check back soon — Jhil is always pinning new finds!
            </p>
            <Button
              variant="outline"
              onClick={() => setActiveCategory("All")}
              className="rounded-full font-semibold"
            >
              View All Finds
            </Button>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="masonry-grid"
            >
              {filtered.map((product, i) => (
                <ProductCard
                  key={product.title}
                  product={product}
                  index={i + 1}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}
