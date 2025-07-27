"use client";

import Link from "next/link";
import {  usePathname, } from "next/navigation";
import { ShoppingCart, Menu, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { UserButton, SignInButton, SignIn, SignedOut, SignedIn } from "@clerk/nextjs";

import  {ModeToggle} from "@/components/ModeToggle";

export default function Header() {
  const pathname = usePathname();

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Hombres", href: "/categoria/hombres" },
    { name: "Mujeres", href: "/categoria/mujeres" },
    { name: "Niños", href: "/categoria/ninos" },
    { name: "Ofertas", href: "/ofertas" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <>
      {/* 🔼 Barra superior de envío gratis */}
      <div className="w-full text-black text-sm text-center py-2">
        🚚 ¡Envío GRATIS desde $129.900!
      </div>

      {/* 🔽 Header principal */}
      <header className="sticky top-0 z-10 w-full border-b bg-[#F4C2C2] backdrop-blur supports-[backdrop-filter]:bg-[#F4C2C2]/90">
        <div className="container flex h-16 items-center mx-auto lg:max-w-[1200px] xl:max-w-[1400px]">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 p-4 text-lg font-medium">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="hover:text-foreground/80"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link href="/categorias" className="hover:text-foreground/80">
                  Ver todas las categorías
                </Link>
                <SignedIn>
                  <Link href="/admin/pedidos" className="hover:text-foreground/80">
                    Panel de administrador
                  </Link>
                </SignedIn>
              </nav> 
            </SheetContent>
          </Sheet>

          <div className="ml-4">
            <Link href="/" className="font-bold text-xl">
              APNA
            </Link>
          </div>

          <nav className="mx-6 hidden md:flex md:items-center md:gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium ${
                  pathname === item.href
                    ? "text-foreground" 
                    : "text-foreground/60 hover:text-foreground/80"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 ml-auto">
            <form className="hidden md:flex items-center">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar productos..."
                  className="w-64 pl-8 bg-background"
                />
              </div>
            </form>

            <ModeToggle />

            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>

            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                  <span className="sr-only">Iniciar Sesión</span>
                </Button>
              </SignInButton>
            </SignedOut>

            <Button>
              <Link href="/carrito">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Ver Carrito</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}
