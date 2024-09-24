import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/Component/Navbar";
import { Footer } from "@/Component/Footer";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FeastKart | Food Delivery App | Order Food Online | Zomato clone",
  description: "FeastKart is a leading food delivery web app offering a variety of cuisines from top restaurants. Order food online and get fast delivery right to your doorstep.",
  keywords: "food delivery, order food online, FeastKart, online food delivery, fast food delivery, restaurant delivery, local restaurants, best food delivery app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" > {/* Prevent horizontal scroll */}
        <body className={`${inter.className} `}> {/* Apply overflow-x-hidden */}
          <Navbar />
           {/* Ensure content fills the screen height */}
            {children}
          
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
