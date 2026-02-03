import { Metadata } from "next";
import ProjectLayout from "@/components/ProjectLayout";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Illustrations",
  description:
    "Illustrations et oeuvres par Sol Le Bris - Linogravure, serigraphie, illustrations poetiques. Memory Shadow, Haiku, Divers Hivers.",
  openGraph: {
    title: "Illustrations | Sol Le Bris",
    description:
      "Illustrations et oeuvres par Sol Le Bris - Linogravure, serigraphie, illustrations poetiques.",
    images: [
      {
        url: "/assets/home/memory shadow.png",
        width: 1200,
        height: 630,
        alt: "Sol Le Bris - Illustrations et Artwork",
      },
    ],
  },
};

const projects = [
  {
    title: "Memory Shadow",
    description:
      "Serie de linogravures explorant les themes de la memoire et de l'imaginaire. Des figures mythiques - licornes, fees, dragons - dans un style artisanal avec une palette de bleu et rouge.",
    images: ["/assets/illustrations/memory shadow.png"],
    tags: ["Linocut", "Mythology", "Print"],
  },
  {
    title: "Haiku",
    description:
      "Illustration poetique inspiree par la forme litteraire japonaise du haiku. Des oiseaux stylises en mouvement, creant un rythme visuel apaisant.",
    images: ["/assets/illustrations/haiku copie-min.jpg"],
    tags: ["Poetry", "Birds", "Illustration"],
  },
  {
    title: "Divers Hivers",
    description:
      "Exploration visuelle autour du theme de l'hiver. Une illustration qui capture l'essence de la saison froide.",
    images: ["/assets/illustrations/divers hivers.JPG"],
    tags: ["Seasonal", "Winter", "Illustration"],
  },
];

export default function IllustrationsPage() {
  return (
    <ProjectLayout
      title="Illustrations"
      subtitle="ARTWORK & PRINTS"
      description="Illustrations personnelles et experimentales. De la linogravure aux illustrations numeriques, en passant par des projets poetiques et saisonniers."
      color="#ef476f"
    >
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </ProjectLayout>
  );
}
