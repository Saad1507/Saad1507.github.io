import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const geist = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist",
  weight: "100 900",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://saad1507.github.io"),
  title: {
    default: "Muhammad Saad | Software Engineer",
    template: "%s | Muhammad Saad",
  },
  description:
    "Software engineering portfolio of Muhammad Saad. Web applications, backend services, applied AI, systems programming and digital hardware projects.",
  authors: [{ name: "Muhammad Saad" }],
  openGraph: {
    type: "website",
    siteName: "Muhammad Saad",
    title: "Muhammad Saad | Software Engineer",
    description:
      "From application interfaces to backend services and deployment. Explore software and digital hardware work.",
    url: "https://saad1507.github.io",
    images: [
      {
        url: "/social-card.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Saad. Software engineering and digital hardware.",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/icon.svg" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body id="top" className={geist.variable}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
