import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { BackToTop } from "@/components/shared/BackToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BAAFA | Bangladeshi American Armed Forces Association",
  description: "Official portal for the Bangladeshi American Armed Forces Association.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased selection:bg-baafa-gold selection:text-baafa-navy`}>
        <Navbar />
        <main className="relative pt-16">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
