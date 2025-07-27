"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Category } from "@/lib/types";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const [imgSrc, setImgSrc] = useState(
    category.image || "/images/placeholder.svg"
  );

  return (
    <Link
      href={`/categorias/${category.slug}`}
      className="group relative overflow-hidden bg-muted"
    >
      <div className="aspect-square overflow-hidden bg-muted">
        <Image
          src={imgSrc}
          alt={category.name}
          width={300}
          height={300}
          onError={() => setImgSrc("/images/placeholder.svg")}
          className="object-cover transition-transform group-hover:scale-105 h-full w-full"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h3 className="text-white font-bold text-xl">{category.name}</h3>
        </div>
      </div>
    </Link>
  );
}
