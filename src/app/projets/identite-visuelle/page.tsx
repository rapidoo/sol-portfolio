import { Metadata } from "next";
import ProjectLayout from "@/components/ProjectLayout";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Identite Visuelle",
  description:
    "Projets d'identite visuelle et branding par Sol Le Bris - Logos, chartes graphiques, supports de communication pour restaurants, projets musicaux et marques.",
  openGraph: {
    title: "Identite Visuelle | Sol Le Bris",
    description:
      "Projets d'identite visuelle et branding par Sol Le Bris - Logos, chartes graphiques, supports de communication.",
    images: [
      {
        url: "/assets/home/tartines ombre.png",
        width: 1200,
        height: 630,
        alt: "Sol Le Bris - Identite Visuelle et Branding",
      },
    ],
  },
};

const projects = [
  {
    title: "Tartines Club",
    description:
      "Identite visuelle complete pour un restaurant vegetarien specialise dans les tartines et salades. Un design frais et nature avec une palette de verts apaisants.",
    images: [
      "/assets/id-visu/tartines/devanture tartines.png",
      "/assets/id-visu/tartines/Sticker Pack copie.jpg",
    ],
    tags: ["Branding", "Restaurant", "Vegetarian"],
  },
  {
    title: "House Funk",
    description:
      "Identite visuelle pour un projet musical house/funk. Des visuels vibrants et energetiques pour les reseaux sociaux et supports promotionnels.",
    images: [
      "/assets/id-visu/house funk/house insta.jpg",
      "/assets/id-visu/house funk/funk.png",
    ],
    tags: ["Music", "Social Media", "Branding"],
  },
  {
    title: "Mimosa",
    description:
      "Identite visuelle coloree et dynamique. Le projet inclut une animation GIF pour une presence digitale impactante.",
    images: [
      "/assets/id-visu/mimosa/City Poster Mockup mimosaaa.jpg",
      "/assets/id-visu/mimosa/mimosa ID card.png",
    ],
    tags: ["Branding", "Animation", "Identity"],
  },
];

export default function IdentiteVisuellePage() {
  return (
    <ProjectLayout
      title="Identite Visuelle"
      subtitle="VISUAL IDENTITY"
      description="Projets de branding et d'identite visuelle pour des marques, restaurants et projets musicaux. De la conception du logo aux declinaisons sur differents supports."
      color="#06d6a0"
    >
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      {/* Mimosa GIF special section */}
      <div className="mt-12 bg-white rounded-2xl overflow-hidden shadow-sm border border-charcoal/5 p-6">
        <h3 className="text-xl font-semibold mb-4">Mimosa - Animation</h3>
        <div className="relative aspect-video rounded-xl overflow-hidden bg-charcoal/5">
          <Image
            src="/assets/id-visu/mimosa/mimosa.gif"
            alt="Mimosa Animation"
            fill
            className="object-contain"
            unoptimized
          />
        </div>
      </div>
    </ProjectLayout>
  );
}
