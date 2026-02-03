import Image from "next/image";
import Link from "next/link";
import UniverseCard from "@/components/UniverseCard";
import Footer from "@/components/Footer";

const universes = [
  {
    title: "Affiches",
    subtitle: "Poster Design",
    image: "/assets/home/festival ombre.png",
    href: "/projets/affiches",
    color: "#9b5de5",
  },
  {
    title: "Edition",
    subtitle: "Publishing & Print",
    image: "/assets/home/univers ombre.png",
    href: "/projets/edition",
    color: "#4361ee",
  },
  {
    title: "Identite Visuelle",
    subtitle: "Visual Identity",
    image: "/assets/home/tartines ombre.png",
    href: "/projets/identite-visuelle",
    color: "#06d6a0",
  },
  {
    title: "Illustrations",
    subtitle: "Artwork & Prints",
    image: "/assets/home/memory shadow.png",
    href: "/projets/illustrations",
    color: "#ef476f",
  },
  {
    title: "Diplome",
    subtitle: "Graduation Project",
    image: "/assets/home/engagé shadow.png",
    href: "/projets/diplome",
    color: "#ff8c42",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          {/* Sun Logo */}
          <div className="mb-8">
            <Image
              src="/favicon.png"
              alt="Sol"
              width={120}
              height={120}
              className="mx-auto sun-rotate cursor-pointer"
              priority
            />
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-charcoal">Sol</span>{" "}
            <span className="text-sol-orange">Le Bris</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-charcoal/70 mb-4 font-light">
            Graphic Designer
          </p>

          {/* Tagline */}
          <p className="text-lg text-charcoal/50 max-w-xl mx-auto mb-12">
            Creating powerful images that make an impact on society, promoting
            awareness through design.
          </p>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 mx-auto text-charcoal/30"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Universes Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes Univers</h2>
          <p className="text-charcoal/60 max-w-xl mx-auto">
            Explorez mes differents projets et decouvertes creatifs a travers ces
            univers thematiques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
          {universes.map((universe) => (
            <UniverseCard key={universe.title} {...universe} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Envie de collaborer ?
        </h2>
        <p className="text-charcoal/60 mb-8 max-w-xl mx-auto">
          Je suis toujours ouverte a de nouvelles opportunites et collaborations
          creatives.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-cream font-medium rounded-full hover:bg-sol-orange transition-colors"
        >
          Me contacter
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </section>

      <Footer />
    </>
  );
}
