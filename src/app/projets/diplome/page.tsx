import { Metadata } from "next";
import ProjectLayout from "@/components/ProjectLayout";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Le Vol des Donnees - Projet de Diplome",
  description:
    "Projet de diplome de Sol Le Bris - Le Vol des Donnees. Un projet editorial engage sur la protection des donnees personnelles et la vie privee a l'ere numerique.",
  openGraph: {
    title: "Le Vol des Donnees | Sol Le Bris",
    description:
      "Projet de diplome - Un projet editorial engage sur la protection des donnees personnelles.",
    images: [
      {
        url: "/assets/home/engagé shadow.png",
        width: 1200,
        height: 630,
        alt: "Sol Le Bris - Le Vol des Donnees, Projet de Diplome",
      },
    ],
  },
};

export default function DiplomePage() {
  const images = [
    "/assets/diplome/banniere.jpg",
    "/assets/diplome/20240522_145943.jpg",
    "/assets/diplome/20240524_172755.jpg",
    "/assets/diplome/20240525_150106.jpg",
    "/assets/diplome/20240529_152321.jpg",
    "/assets/diplome/20240529_152814.jpg",
    "/assets/diplome/20240529_153117.jpg",
    "/assets/diplome/20240529_153542.jpg",
    "/assets/diplome/20240529_154117.jpg",
    "/assets/diplome/20240529_163928.jpg",
    "/assets/diplome/20240529_164005.jpg",
    "/assets/diplome/20240529_171246.jpg",
    "/assets/diplome/20240529_173505.jpg",
    "/assets/diplome/1000058255.jpg",
    "/assets/diplome/1000058256.jpg",
  ];

  return (
    <ProjectLayout
      title="Le Vol des Donnees"
      subtitle="GRADUATION PROJECT"
      description="Projet de diplome explorant la thematique du vol des donnees personnelles. Un dossier contenant des documents 'hyper engages, denonciateurs' - une reflexion critique sur notre societe numerique et la protection de la vie privee."
      color="#ff8c42"
    >
      {/* Main Banner */}
      <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-12">
        <Image
          src={images[0]}
          alt="Le Vol des Donnees - Banner"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      {/* Project Description */}
      <article className="bg-white rounded-2xl p-8 shadow-sm border border-charcoal/5 mb-12">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">A propos du projet</h2>
          <p className="text-charcoal/70 leading-relaxed mb-4">
            Ce projet de fin d&apos;etudes aborde la question cruciale de la
            protection des donnees personnelles a l&apos;ere numerique. A
            travers un dossier editorial engage, le projet denonce les pratiques
            de collecte massive de donnees et invite a la reflexion sur notre
            rapport a la vie privee.
          </p>
          <p className="text-charcoal/70 leading-relaxed">
            Le design utilise une esthetique retro-futuriste avec une palette de
            bleu cyanotype et rouge, evoquant a la fois les documents officiels
            et l&apos;urgence de la situation.
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-6">
          {[
            "Editorial Design",
            "Social Issues",
            "Data Privacy",
            "Engaged Design",
            "Print",
          ].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-sol-orange/10 text-sol-orange rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>

      {/* Image Gallery */}
      <section aria-label="Galerie du projet">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.slice(1).map((img, idx) => (
            <div
              key={idx}
              className="relative aspect-[4/3] rounded-xl overflow-hidden bg-charcoal/5 hover:shadow-lg transition-shadow"
            >
              <Image
                src={img}
                alt={`Le Vol des Donnees - Image ${idx + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section
        className="mt-12 bg-white rounded-2xl p-8 shadow-sm border border-charcoal/5"
        aria-label="Videos du projet"
      >
        <h3 className="text-xl font-semibold mb-6">Videos du projet</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <video
              src="/assets/diplome/Vidéo sans titre ‐ Réalisée avec Clipchamp.mp4"
              controls
              className="w-full rounded-xl"
              poster="/assets/diplome/banniere.jpg"
            >
              Votre navigateur ne supporte pas la lecture video.
            </video>
            <p className="text-sm text-charcoal/60 mt-2">
              Presentation du projet
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <video
                src="/assets/diplome/jaune.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full rounded-xl"
              />
              <p className="text-sm text-charcoal/60 mt-2">Animation jaune</p>
            </div>
            <div>
              <video
                src="/assets/diplome/rose.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full rounded-xl"
              />
              <p className="text-sm text-charcoal/60 mt-2">Animation rose</p>
            </div>
            <div>
              <video
                src="/assets/diplome/vert.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full rounded-xl"
              />
              <p className="text-sm text-charcoal/60 mt-2">Animation vert</p>
            </div>
            <div>
              <video
                src="/assets/diplome/violet.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full rounded-xl"
              />
              <p className="text-sm text-charcoal/60 mt-2">Animation violet</p>
            </div>
          </div>
        </div>
      </section>
    </ProjectLayout>
  );
}
