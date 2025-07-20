import Image from "next/image"; 
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-lg">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col justify-center p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                Tienda de Pijamas Online
            </h1>
            <p className="text-muted-foreground mb-6 md:mb-8 text-lg">
                Encuentra los mejores pijamas para toda la familia en APNA. Calidad y estilo al mejor precio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                <Button asChild size="lg">
                    <Link href="/categorias/hombres">Hombres</Link>
                </Button>
                <Button asChild size="lg">
                    <Link href="/categorias/mujeres">Mujeres</Link>
                </Button>
            </div>
        </div>
        <div className="relative aspect-[4/3] md:aspect-auto">
            <Image
                src="/images/hero_image_men.jpg"
                alt="Imagen de Pijamas"
                fill
                className="object-cover rounded-lg"
            />
        </div>
       </div>
    </section>
  );
}