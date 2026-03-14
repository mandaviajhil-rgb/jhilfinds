import { useQuery } from "@tanstack/react-query";
import type { Product } from "../backend.d";
import { mockProducts } from "../data/mockProducts";
import { useActor } from "./useActor";

export function useAllProducts() {
  const { actor, isFetching } = useActor();
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      if (!actor) return mockProducts;
      const result = await actor.getAllProducts();
      return result.length > 0 ? result : mockProducts;
    },
    enabled: !isFetching,
    placeholderData: mockProducts,
  });
}

export function useFeaturedProducts() {
  const { actor, isFetching } = useActor();
  return useQuery<Product[]>({
    queryKey: ["products", "featured"],
    queryFn: async () => {
      if (!actor) return mockProducts.filter((p) => p.isFeatured);
      const result = await actor.getFeaturedProducts();
      return result.length > 0
        ? result
        : mockProducts.filter((p) => p.isFeatured);
    },
    enabled: !isFetching,
    placeholderData: mockProducts.filter((p) => p.isFeatured),
  });
}
