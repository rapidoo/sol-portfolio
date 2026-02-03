import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Sol Le Bris pour vos projets de design graphique, identité visuelle, affiches ou illustrations. Formulaire de contact et informations.",
  openGraph: {
    title: "Contact | Sol Le Bris",
    description:
      "Contactez Sol Le Bris pour vos projets de design graphique.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
