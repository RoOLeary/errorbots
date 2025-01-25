import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { ViewTransitions } from 'next-view-transitions'
import { Bot } from "lucide-react";

const pressStart = Press_Start_2P({
  weight: ["400"], // Optional: Define weights
  subsets: ["latin"], // Subsets to include
  display: "swap", // Control font rendering behavior
});

export const metadata: Metadata = {
  title: "Errorbots",
  description: "Errorbots are forever, not just for life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
    <html lang="en">
      <body
        className={`${pressStart} antialiased`}
      >
        <div className="bg-black h-10 w-full mx-auto flex items-center justify-center">
          <div className="text-white text-center p-4 text-xs md:text-md flex items-center gap-2"><Bot size={20} /><small className="text-xs"> Robots are forever, not just for life</small></div>
        </div>
         <Navbar />
        {children}
        <Footer />
      </body>
    </html>
    </ViewTransitions>
  );
}
