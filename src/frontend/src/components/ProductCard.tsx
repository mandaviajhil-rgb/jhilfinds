import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { SiAmazon, SiPinterest } from "react-icons/si";
import type { Product } from "../backend.d";

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <div
      className="product-card masonry-item bg-card rounded-2xl overflow-hidden shadow-card border border-border cursor-pointer"
      data-ocid={`products.item.${index}`}
    >
      <div className="relative overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full object-cover transition-transform duration-500 hover:scale-105"
          style={{ aspectRatio: index % 3 === 0 ? "4/5" : "1/1" }}
          loading="lazy"
        />
        {product.isFeatured && (
          <span className="absolute top-2.5 left-2.5 inline-flex items-center gap-1 text-xs font-bold bg-primary text-primary-foreground px-2.5 py-1 rounded-full">
            <Sparkles className="w-3 h-3" />
            Featured
          </span>
        )}
        <div className="absolute top-2.5 right-2.5 opacity-0 hover:opacity-100 group-hover:opacity-100 transition-opacity">
          <button
            type="button"
            className="pinterest-btn rounded-full p-2 shadow-md"
            onClick={(e) => {
              e.stopPropagation();
              window.open(product.pinterestLink, "_blank");
            }}
            aria-label="Save to Pinterest"
          >
            <SiPinterest className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <Badge
          variant="secondary"
          className="text-xs font-semibold mb-2 rounded-full"
        >
          {product.category}
        </Badge>
        <h3 className="font-display font-bold text-base text-card-foreground leading-snug mb-1.5">
          {product.title}
        </h3>
        <p className="text-muted-foreground text-xs leading-relaxed mb-3 line-clamp-2">
          {product.description}
        </p>
        <p className="text-primary font-bold text-sm mb-3">From $19.99</p>

        <div className="flex gap-2">
          <Button
            asChild
            size="sm"
            className="amazon-btn flex-1 rounded-xl font-bold text-xs gap-1.5"
          >
            <a
              href={product.amazonLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiAmazon className="w-3.5 h-3.5" />
              Shop Amazon
            </a>
          </Button>
          <Button
            asChild
            size="sm"
            variant="outline"
            className="pinterest-btn border-0 rounded-xl font-bold text-xs gap-1.5 text-white"
          >
            <a
              href={product.pinterestLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiPinterest className="w-3.5 h-3.5" />
              Save
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
