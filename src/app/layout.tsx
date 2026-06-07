import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: {
    default: "Christian Truss",
    template: "%s | Christian Truss",
  },
  description:
    "Christian Truss is the digital home for Truss The Cuts and Truss The Care: barber craft, self-care education, booking, and community.",
  keywords: [
    "Christian Truss",
    "Truss The Cuts",
    "Truss The Care",
    "barber",
    "self-care",
    "mens grooming",
  ],
  openGraph: {
    title: "Christian Truss",
    description:
      "Truss The Cuts. Truss The Care. Truss yourself.",
    url: "/",
    siteName: "Christian Truss",
    images: [
      {
        url: "/og-image",
        width: 1200,
        height: 630,
        alt: "Christian Truss",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Truss",
    description: "Truss The Cuts. Truss The Care. Truss yourself.",
    images: ["/og-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
