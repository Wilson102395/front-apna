import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider} from "@/components/theme-provider";
import Header from "@/components/header";
import {ClerkProvider} from "@clerk/nextjs";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "APNA - Tienda de Pijamas Online",
  description: "Encuentra los mejores pijamas para toda la familia en APNA. Calidad y estilo al mejor precio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
          <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1 w-full mx-auto lg:max-w-[1200px] xl:max-w-[1200px]">
                 {children}
              </main>
              <Footer />
            </div>

          </ThemeProvider>
        </body>
      </html>
      </ClerkProvider>
  );
}
