import { Metadata } from "next";
import ProjectLayout from "@/components/ProjectLayout";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Edition",
  description:
    "Projets editoriaux et publications par Sol Le Bris - Risographie, zines, mise en page. Design editorial experimental et impressions artisanales.",
  openGraph: {
    title: "Edition | Sol Le Bris",
    description:
      "Projets editoriaux et publications par Sol Le Bris - Risographie, zines, mise en page.",
    images: [
      {
        url: "/assets/home/univers ombre.png",
        width: 1200,
        height: 630,
        alt: "Sol Le Bris - Edition et Design Editorial",
      },
    ],
  },
};

const projects = [
  {
    title: "Collection Univers",
    description:
      "Projet editorial explorant differents univers visuels a travers une serie de publications. Un travail sur la mise en page, la typographie et l'harmonie des couleurs.",
    images: [
      "/assets/edition/univers ombre.png",
      "/assets/edition/4 collec.png",
      "/assets/edition/mockup collec.jpg",
    ],
    tags: ["Editorial", "Collection", "Print"],
  },
  {
    title: "Risotto",
    description:
      "Publication experimentale utilisant la risographie. Une exploration des textures et des couleurs permises par cette technique d'impression unique.",
    images: [
      "/assets/edition/risotto.JPG",
      "/assets/edition/risotto copie-min.jpg",
    ],
    tags: ["Risograph", "Experimental", "Zine"],
  },
  {
    title: "Edition Photo",
    description:
      "Mise en page photographique explorant les jeux d'ombre et de lumiere.",
    images: ["/assets/edition/_MG_0408.png", "/assets/edition/IMG_0443.JPG"],
    tags: ["Photography", "Layout", "Print"],
  },
];

export default function EditionPage() {
  return (
    <ProjectLayout
      title="Edition"
      subtitle="PUBLISHING & PRINT"
      description="Projets editoriaux allant des livres aux zines, en passant par les publications experimentales. Un focus sur la mise en page, la typographie et les techniques d'impression."
      color="#4361ee"
    >
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </ProjectLayout>
  );
}
