import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Muhammad Saad | RTL Design & FPGA Engineer",
  description: "Portfolio of Muhammad Saad, Computer Science Engineer specializing in RTL Design, FPGA Development, ASIC Design, Digital Design, and Functional Verification.",
  keywords: ["RTL Design", "Verilog", "FPGA", "ASIC Design", "AMBA APB", "UART", "Cache Controller", "Digital Design", "Functional Verification", "Muhammad Saad"],
  authors: [{ name: "Muhammad Saad", url: "https://github.com/Saad1507" }],
  openGraph: {
    title: "Muhammad Saad | RTL Design & FPGA Engineer",
    description: "Engineering portfolio demonstrating RTL Design, FPGA Development, and ASIC Design projects.",
    url: "https://saad1507.github.io",
    siteName: "Muhammad Saad Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Muhammad Saad | RTL Design & FPGA Engineer",
    description: "Engineering portfolio demonstrating RTL Design, FPGA Development, and ASIC Design projects.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow pt-24 px-6 md:px-12 max-w-6xl mx-auto w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
