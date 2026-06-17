import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vanguard Wear | Premium Modern Clothing & Silhouette Essentials",
  description: "Discover our comprehensive collection of soft premium clothes made for your daily look and best routines with the finest fabrics.",
  openGraph: {
    title: "Vanguard Wear | Premium Modern Clothing",
    description: "Discover our comprehensive collection of soft premium clothes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth select-none antialiased">
      <body className="bg-[#F9F9F9] text-[#111111] font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
