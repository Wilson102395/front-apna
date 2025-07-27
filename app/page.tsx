import HeroSection from "@/components/hero-section";
import { Button } from "@/components/ui/button"
import {Tabs, TabsContent, TabsTrigger, TabsList} from "@/components/ui/tabs"
import { Link } from "lucide-react";
import { getFeaturedProducts, getCategories } from "@/lib/data";
import CategoryCard from "@/components/category-card";
import ProductCard from "@/components/product-card";

export default function Home() {
  const categories = getCategories();
  const featuredProducts = getFeaturedProducts();
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

      <section className="mt-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold tracking-tight">Productos destacados</h2>
        </div>
        <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="all">Todos</TabsTrigger>
          <TabsTrigger value="hombres">Hombres</TabsTrigger>
          <TabsTrigger value="mujeres">Mujeres</TabsTrigger>
          <TabsTrigger value="ninos">Niños</TabsTrigger>
          <TabsTrigger value="accesorios">Accesorios</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            // component ProductCard
            <ProductCard key={product.id} product={product} />
          ))}
        </TabsContent>
        <TabsContent value="hombres" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts
            .filter((product) => product.category === "hombres")
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </TabsContent>
        <TabsContent value="mujeres" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts
            .filter((product) => product.category === "mujeres")
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </TabsContent>
        <TabsContent value="accesorios" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts
            .filter((product) => product.category === "accesorios")
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </TabsContent>
        <TabsContent value="ninos" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts
            .filter((product) => product.category === "ninos")
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </TabsContent>
        </Tabs>
      </section>
    </div>
    
  );
}
