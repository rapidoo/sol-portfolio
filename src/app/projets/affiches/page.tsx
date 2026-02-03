import { Metadata } from "next";
import ProjectLayout from "@/components/ProjectLayout";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Affiches",
  description:
    "Affiches et poster design par Sol Le Bris - Trans Musicales, Underground Festival, Eureka, Data Visualization. Projets pour festivals et evenements culturels.",
  openGraph: {
    title: "Affiches | Sol Le Bris",
    description:
      "Affiches et poster design par Sol Le Bris - Trans Musicales, Underground Festival, Eureka, Data Visualization.",
    images: [
      {
        url: "/assets/home/festival ombre.png",
        width: 1200,
        height: 630,
        alt: "Sol Le Bris - Affiches et Poster Design",
      },
    ],
  },
};

const projects = [
  {
    title: "Underground Festival",
    description:
      "Affiche pour un festival indie rock/pop fictif. Un design grunge et energetique qui capture l'essence de la scene musicale alternative.",
    images: [
      "/assets/affiches/underground/affiche festival img.jpg",
      "/assets/affiches/underground/festival mockup pink.png",
      "/assets/affiches/underground/mockup festival copie.jpg",
    ],
    tags: ["Festival", "Music", "Poster Design"],
  },
  {
    title: "Trans Musicales",
    description:
      "Proposition d'affiche pour les Trans Musicales de Rennes, 44eme edition. Une interpretation coloree et psychedelique de cet evenement musical emblematique.",
    images: [
      "/assets/affiches/transmusicales/trans musicales copie-min.jpg",
      "/assets/affiches/transmusicales/blank-advertising-stand-near-the-street-in-the-city-min.png",
    ],
    tags: ["Festival", "Music", "Rennes"],
  },
  {
    title: "Eureka - Fete de la Science",
    description:
      "Affiche pour la Grande Fete de la Science a l'Espace des Sciences / Les Champs Libres de Rennes. Un Rubik's cube creatif symbolisant la curiosite et la decouverte.",
    images: [
      "/assets/affiches/eureka/A2 EUREKA.jpg",
      "/assets/affiches/eureka/Subway_Billboard_Mockup_1.jpg",
      "/assets/affiches/eureka/RUBICKS.jpg",
    ],
    tags: ["Science", "Event", "Bretagne"],
  },
  {
    title: "Data Visualization",
    description:
      "Projet de visualisation de donnees sous forme d'affiche. Une approche graphique pour rendre les donnees complexes accessibles et esthetiques.",
    images: [
      "/assets/affiches/data vis/DATA VIS MOCKUP.png",
      "/assets/affiches/data vis/data vis-Sol Le Bris.jpg",
    ],
    tags: ["Data Viz", "Infographic", "Print"],
  },
];

export default function AffichesPage() {
  return (
    <ProjectLayout
      title="Affiches"
      subtitle="POSTER DESIGN"
      description="Une collection d'affiches creees pour des festivals, evenements culturels et projets personnels. Chaque affiche explore differentes techniques graphiques et univers visuels."
      color="#9b5de5"
    >
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </ProjectLayout>
  );
}
