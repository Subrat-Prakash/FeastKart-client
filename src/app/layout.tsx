import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/Component/Navbar";
import { Footer } from "@/Component/Footer";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FeastKart",
  description: "Food delivery Webapp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="overflow-x-hidden"> {/* Prevent horizontal scroll */}
        <body className={`${inter.className} overflow-x-hidden`}> {/* Apply overflow-x-hidden */}
          <Navbar />
          <div className="min-h-screen"> {/* Ensure content fills the screen height */}
            {children}
          </div>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
