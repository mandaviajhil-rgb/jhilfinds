import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AboutSection } from "./components/AboutSection";
import { FeaturedSection } from "./components/FeaturedSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ProductsGrid } from "./components/ProductsGrid";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <FeaturedSection />
          <ProductsGrid />
          <AboutSection />
        </main>
        <Footer />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}
