import HeroSection from "@/components/hero-section";
import { Button } from "@/components/ui/button"
import { Link } from "lucide-react";
import { getFeaturedProducts, getCategories } from "@/lib/data";
import CategoryCard from "@/components/category-card";

export default function Home() {
  const categories = getCategories();
  return (
    <div className="px-4 py-6 md:py-18">
      <HeroSection />
      <section className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold tracking-tight">Categorias</h2>
          <Button className="text-primary" variant="link" asChild>
            <Link href="/categorias">Ver todas las categorias</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* map de categorias aqui */}
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>
    </div>
    
  );
}
