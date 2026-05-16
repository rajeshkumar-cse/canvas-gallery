import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Canvas Fable | Art Gallery",
  description:
    "The Canvas Fable — a curated collection of paintings, sketches, and original artworks.",
  metadataBase: new URL("https://thecanvasfable.com"),
  openGraph: {
    title: "The Canvas Fable | Art Gallery",
    description:
      "A curated collection of paintings, sketches, and original artworks.",
    url: "https://thecanvasfable.com",
    siteName: "The Canvas Fable",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
