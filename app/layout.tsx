import type { Metadata } from "next";
import { Archivo_Black, Roboto } from "next/font/google";
import "./globals.css";
import Nav from "./_components/Nav";
import Footer from "./_sections/Footer";

const archivoBlack = Archivo_Black({
  weight: "400",
  variable: "--font-archivo-black",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  subsets: ["latin"],
});

const siteUrl = "https://erwinjames.world";
const siteTitle = "Erwin James | Software Developer & AI Automation Specialist";
const siteDescription = "Software Developer & AI Automation Specialist";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Erwin James",
  },
  description: siteDescription,
  keywords: [
    "Erwin James",
    "Software Developer",
    "AI Automation",
    "Full Stack",
    "Portfolio",
    "Web Development",
    "Next.js",
    "React",
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "Erwin James",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/preview.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivoBlack.variable} ${roboto.variable} antialiased`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
