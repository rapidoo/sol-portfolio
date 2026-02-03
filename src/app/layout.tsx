import type { Metadata } from "next";
import { Space_Grotesk, DM_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const baseUrl = "https://sol-lebris.com"; // À remplacer par le vrai domaine

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Sol Le Bris | Graphic Designer",
    template: "%s | Sol Le Bris",
  },
  description:
    "Portfolio de Solène Le Bris - Graphic Designer basée à Lisbonne. Affiches, édition, identité visuelle et illustrations.",
  keywords: [
    "graphic design",
    "designer graphique",
    "portfolio",
    "affiches",
    "édition",
    "identité visuelle",
    "illustrations",
    "Rennes",
    "Lisboa",
    "screen printing",
    "sérigraphie",
  ],
  authors: [{ name: "Solène Le Bris" }],
  creator: "Solène Le Bris",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: baseUrl,
    siteName: "Sol Le Bris Portfolio",
    title: "Sol Le Bris | Graphic Designer",
    description:
      "Portfolio de Solène Le Bris - Graphic Designer. Affiches, édition, identité visuelle et illustrations.",
    images: [
      {
        url: "/assets/home/festival ombre.png",
        width: 1200,
        height: 630,
        alt: "Sol Le Bris - Graphic Designer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sol Le Bris | Graphic Designer",
    description:
      "Portfolio de Solène Le Bris - Graphic Designer. Affiches, édition, identité visuelle et illustrations.",
    images: ["/assets/home/festival ombre.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // À ajouter après configuration Google Search Console
    // google: "votre-code-verification",
  },
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Solène Le Bris",
  alternateName: "Sol Le Bris",
  jobTitle: "Graphic Designer",
  url: baseUrl,
  email: "sol.lebris26@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lisboa",
    addressCountry: "PT",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "École de Condé",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rennes",
      addressCountry: "FR",
    },
  },
  knowsAbout: [
    "Graphic Design",
    "Screen Printing",
    "Riso Printing",
    "Linocut",
    "Editorial Design",
    "Visual Identity",
    "Illustration",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${dmMono.variable} antialiased bg-cream`}
      >
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
