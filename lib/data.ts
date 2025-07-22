import type { Product, Category, Order } from "./types"

// Datos de productos
const products: Product[] = [
  {
    id: "1",
    name: "pijama rick and morty",
    slug: "pijama-rock-and-morty-hombre",
    description: "Pijama de algodón suave con estampado de Rick and Morty, ideal para fans de la serie.",
    price: 50.000,
    oldPrice: 60.000,
    images: [
      "/placeholder.svg?key=i7sx3",
      "/placeholder.svg?key=dthsa",
      "/placeholder.svg?key=idt89",
      "/placeholder.svg?key=9j36h",
    ],
    category: "hombres",
    stock: 15,
    features: [
      "Material: 100% algodón",
      "Estampado: Rick and Morty",
      "Tallas disponibles: S, M, L, XL",
      "Cuello: Redondo",
      "Mangas: Largas",
      "Cuidado: Lavable a máquina",
    ],
    isNew: true,
  },
  {
    id: "2",
    name: "pijama rick and morty mujer",
    slug: "pijama-rock-and-morty-mujer",
    description: "Pijama de algodón suave con estampado de Rick and Morty para mujer, ideal para fans de la serie.",
    price: 50.000,
    oldPrice: 60.000,
    images: [
      "/placeholder.svg?key=7ssih",
      "/placeholder.svg?key=6ge6n",
      "/smartphone-side-view.png",
      "/placeholder.svg?key=aisyd",
    ],
    category: "mujeres",
    stock: 25,
    features: [
      "Material: 100% algodón",
      "Estampado: Rick and Morty",
      "Tallas disponibles: S, M, L, XL",
      "Cuello: Redondo",
      "Mangas: Largas",
      "Cuidado: Lavable a máquina",
    ],
  },
  {
    id: "3",
    name: "pijama rick and morty niños",
    slug: "pijama-rock-and-morty-ninos",
    description: "Pijama de algodón suave con estampado de Rick and Morty para niños, ideal para fans de la serie.",
    price: 50.000,
    oldPrice: 60.000,
    images: [
      "/placeholder.svg?key=gppus",
      "/placeholder.svg?key=ufsfm",
      "/placeholder.svg?height=500&width=500&query=headphones+ear+cushion",
      "/placeholder.svg?height=500&width=500&query=headphones+controls+buttons",
    ],
    category: "ninos",
    stock: 50,
    features: [
      "Material: 100% algodón",
      "Estampado: Rick and Morty",
      "Tallas disponibles: 2, 4, 6, 8, 10, 12, 14, 16",
      "Cuello: Redondo",
      "Mangas: Largas",
      "Cuidado: Lavable a máquina",
    ],
  },
  {
    id: "4",
    name: "pijama minecraft hombre",
    slug: "pijama-minecraft-hombre",
    description: "Pijama de algodón suave con estampado de Minecraft para hombre, ideal para fans del juego.",
    price: 50.000,
    oldPrice: 60.000,
    images: [
      "/placeholder.svg?height=500&width=500&query=tablet+modern+display",
      "/placeholder.svg?height=500&width=500&query=tablet+with+stylus",
      "/placeholder.svg?height=500&width=500&query=tablet+side+view",
      "/placeholder.svg?height=500&width=500&query=tablet+keyboard+attachment",
    ],
    category: "hombres",
    stock: 20,
    features: [
        "Material: 100% algodón",
        "Estampado: Minecraft",
        "Tallas disponibles: S, M, L, XL",
        "Cuello: Redondo",
        "Mangas: Largas",
        "Cuidado: Lavable a máquina",
    ],
    isNew: true,
  },
  {
    id: "5",
    name: "pijama minecraft mujer",
    slug: "pijama-minecraft-mujer",
    description: "Pijama de algodón suave con estampado de Minecraft para mujer, ideal para fans del juego.",
    price: 50.000,
    oldPrice: 60.000,
    images: [
      "/placeholder.svg?height=500&width=500&query=smartwatch+on+wrist",
      "/placeholder.svg?height=500&width=500&query=smartwatch+fitness+tracking",
      "/placeholder.svg?height=500&width=500&query=smartwatch+charging+dock",
      "/placeholder.svg?height=500&width=500&query=smartwatch+screen+display",
    ],
    category: "mujeres",
    stock: 35,
    features: [
      "Material: 100% algodón",
      "Estampado: Minecraft",
      "Tallas disponibles: S, M, L, XL",
      "Cuello: Redondo",
      "Mangas: Largas",
      "Cuidado: Lavable a máquina",
    ],
  },
  {
    id: "6",
    name: 'pijama minecraft niños',
    slug: "pijama-minecraft-ninos",
    description: "Pijama de algodón suave con estampado de Minecraft para niños, ideal para fans del juego.",
    price: 50.000,
    oldPrice: 60.000,
    images: [
      "/placeholder.svg?height=500&width=500&query=ultrawide+monitor+curved",
      "/placeholder.svg?height=500&width=500&query=monitor+back+ports",
      "/placeholder.svg?height=500&width=500&query=monitor+side+profile",
      "/placeholder.svg?height=500&width=500&query=monitor+stand+adjustable",
    ],
    category: "ninos",
    stock: 10,
    features: [
      "Material: 100% algodón",
      "Estampado: Minecraft",
      "Tallas disponibles: 2, 4, 6, 8, 10, 12, 14, 16",
      "Cuello: Redondo",
      "Mangas: Largas",
      "Cuidado: Lavable a máquina",
    ],
  },
  {
    id: "7",
    name: "Mugs de Cerámica",
    slug: "mugs-de-ceramica",
    description: "Mugs de cerámica con diseños únicos, ideales para combinar con tu pijama.",
    price: 10.000,
    images: [
      "/placeholder.svg?height=500&width=500&query=thin+laptop+ultrabook",
      "/placeholder.svg?height=500&width=500&query=laptop+keyboard+backlit",
      "/placeholder.svg?height=500&width=500&query=laptop+profile+thin",
      "/placeholder.svg?height=500&width=500&query=laptop+screen+bezel+thin",
    ],
    category: "accesorios",
    stock: 18,
    features: [
      "Material: 100% cerámica",
      "Diseños: Variados",
      "Capacidad: 11 OZ",
      "Apta para lavavajillas",
      "Apta para microondas",
    ],
  },
  {
    id: "8",
    name: "mugs de cerámica personalizados",
    slug: "mugs-de-ceramica-personalizados",
    description: "Mugs de cerámica personalizables con tus diseños favoritos o fotos.",
    price: 15.000,
    oldPrice: 20.000,
    images: [
      "/placeholder.svg?height=500&width=500&query=pixel+smartphone+front",
      "/placeholder.svg?height=500&width=500&query=pixel+smartphone+camera+back",
      "/placeholder.svg?height=500&width=500&query=pixel+smartphone+side",
      "/placeholder.svg?height=500&width=500&query=pixel+smartphone+screen",
    ],
    category: "accesorios",
    stock: 22,
    features: [
      "Material: 100% cerámica",
      "Diseños: Variados",
      "Capacidad: 11 OZ",
      "Apta para lavavajillas",
      "Apta para microondas",
    ],
    isNew: true,
  },
  {
    id: "Pad Mouse",
    name: "Pad Mouse",
    slug: "pad-mouse",
    description: "Alfombrilla de ratón de gran tamaño y superficie suave para un deslizamiento preciso con tu personaje favorito.",
    price: 20.000,
    images: [
      "/placeholder.svg?height=500&width=500&query=gaming+laptop+rgb",
      "/placeholder.svg?height=500&width=500&query=gaming+laptop+keyboard",
      "/placeholder.svg?height=500&width=500&query=gaming+laptop+cooling+vents",
      "/placeholder.svg?height=500&width=500&query=gaming+laptop+screen",
    ],
    category: "accesorios",
    stock: 8,
    features: [
      "Material: 100% tela",
      "Tamaño: 900x400mm",
      "Grosor: 4mm",
      "Base antideslizante",
      "Compatible con todos los ratones",
    ],
    isNew: true,
  },
  {
    id: "10",
    name: "pijama dragon ball z hombre",
    slug: "pijama-dragon-ball-z-hombre",
    description: "Pijama de algodón suave con estampado de Dragon Ball Z para hombres.",
    price: 50.000,
    oldPrice: 60.000,
    images: [
      "/placeholder.svg?height=500&width=500&query=foldable+smartphone+open",
      "/placeholder.svg?height=500&width=500&query=foldable+smartphone+folded",
      "/placeholder.svg?height=500&width=500&query=foldable+smartphone+side",
      "/placeholder.svg?height=500&width=500&query=foldable+smartphone+camera",
    ],
    category: "hombres",
    stock: 5,
    features: [
      "Material: 100% algodón",
      "Estampado: Dragon Ball Z",
      "Tallas disponibles: S, M, L, XL",
      "Cuello: Redondo",
      "Mangas: Largas",
      "Cuidado: Lavable a máquina",
    ],
    isNew: true,
  },
  {
    id: "11",
    name: "pijama dragon ball z mujer",
    slug: "pijama-dragon-ball-z-mujer",
    description: "Pijama de algodón suave con estampado de Dragon Ball Z para mujeres.",
    price: 50.000,
    oldPrice: 60.000,
    images: [
      "/placeholder.svg?height=500&width=500&query=budget+tablet+front",
      "/placeholder.svg?height=500&width=500&query=tablet+back+camera",
      "/placeholder.svg?height=500&width=500&query=tablet+side+thin",
      "/placeholder.svg?height=500&width=500&query=tablet+with+case",
    ],
    category: "mujeres",
    stock: 30,
    features: [
      "Material: 100% algodón",
      "Estampado: Dragon Ball Z",
      "Tallas disponibles: S, M, L, XL",
      "Cuello: Redondo",
      "Mangas: Largas",
      "Cuidado: Lavable a máquina",
    ],
  },
  {
    id: "12",
    name: "Pijama dragon ball z niños",
    slug: "pijama-dragon-ball-z-niños",
    description: "Pijama de algodón suave con estampado de Dragon Ball Z para niños.",
    price: 50.000,
    oldPrice: 60.000,
    images: [
      "/placeholder.svg?height=500&width=500&query=wireless+earbuds+case",
      "/placeholder.svg?height=500&width=500&query=wireless+earbuds+in+ear",
      "/placeholder.svg?height=500&width=500&query=wireless+earbuds+charging",
      "/placeholder.svg?height=500&width=500&query=wireless+earbuds+controls",
    ],
    category: "ninos",
    stock: 45,
    features: [
      "Material: 100% algodón",
      "Estampado: Dragon Ball Z",
      "Tallas disponibles: 2, 4, 6, 8, 10, 12, 14, 16",
      "Cuello: Redondo",
      "Mangas: Largas",
      "Cuidado: Lavable a máquina",
    ],
  },
]

// Datos de categorías
const categories: Category[] = [
  {
    id: "1",
    name: "Hombres",
    slug: "hombres",
    image: "/images/hombres.png",
    bannerImage: "/images/placeholder.svg?height=400&width=1200&query=laptop+collection+banner",
    description: "Encuentra los mejores pijamas y accesorios para hombres, desde diseños clásicos hasta modernos.",
    featured: true,
  },
  {
    id: "2",
    name: "Mujeres",
    slug: "mujeres",
    image: "/images/mujeres.png",
    bannerImage: "/images/placeholder.svg?height=400&width=1200&query=smartphone+collection+banner",
    description: "Descubre nuestra colección de pijamas y accesorios para mujeres, con estilos únicos y cómodos.",
    featured: true,
  },
  {
    id: "3",
    name: "Niños",
    slug: "ninos",
    image: "/images/ninos.png",
    bannerImage: "/images/placeholder.svg?height=400&width=1200&query=tablet+collection+banner",
    description: "Pijamas divertidos y cómodos para niños, perfectos para dormir y jugar.",
    featured: true,
  },
  {
    id: "4",
    name: "Accesorios",
    slug: "accesorios",
    image: "/images/accesorios.jpg",
    bannerImage: "/images/placeholder.svg?height=400&width=1200&query=accessories+collection+banner",
    description: "Complementa tu pijama con nuestros accesorios únicos, desde mugs hasta pads de mouse.",
  },
];


// Datos de pedidos
const orders: Order[] = [
  {
    id: "ORD-001",
    customer: "Juan Pérez",
    date: "2023-05-15T10:30:00",
    status: "completed",
    total: 50.000,
    items: [
      {
        id: "1",
        name: "pijama rick and morty",
        quantity: 1,
        price: 50.000,
      },
    ],
  },
  {
    id: "ORD-002",
    customer: "María García",
    date: "2023-05-18T14:45:00",
    status: "pending",
    total: 100.000,
    items: [
      {
        id: "2",
        name: "pijama rick and morty mujer",
        quantity: 1,
        price: 50.000,
      },
      {
        id: "3",
        name: "pijama rick and morty niños",
        quantity: 1,
        price: 50.000,
      },
    ],
  },
  {
    id: "ORD-003",
    customer: "Carlos Rodríguez",
    date: "2023-05-20T09:15:00",
    status: "completed",
    total: 50.000,
    items: [
      {
        id: "6",
        name: 'pijama minecraft mujer',
        quantity: 1,
        price: 50.000,
      },
    ],
  },
  {
    id: "ORD-004",
    customer: "Ana Martínez",
    date: "2023-05-22T16:20:00",
    status: "pending",
    total: 65.000,
    items: [
      {
        id: "8",
        name: "mugs de cerámica personalizados",
        quantity: 1,
        price: 15.000,
      },
      {
        id: "5",
        name: "pijama minecraft niños",
        quantity: 1,
        price: 50.000,
      },
    ],
  },
]

// Funciones para obtener datos
export function getFeaturedProducts(): Product[] {
  return products
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getRelatedProducts(category: string, currentProductId: string): Product[] {
  return products.filter((product) => product.category === category && product.id !== currentProductId).slice(0, 4)
}

export function getCategories(): Category[] {
  return categories
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug)
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((product) => product.category === categorySlug)
}

export function getOrders(): Order[] {
  return orders
}