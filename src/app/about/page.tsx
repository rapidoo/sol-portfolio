import { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "Solene Le Bris - Graphic Designer diplomee de l'Ecole de Conde. Specialisee en serigraphie, risographie, linogravure. Basee a Lisbonne, Portugal.",
  openGraph: {
    title: "About | Sol Le Bris",
    description:
      "Solene Le Bris - Graphic Designer diplomee de l'Ecole de Conde. Specialisee en serigraphie, risographie, linogravure.",
    images: [
      {
        url: "/favicon.png",
        width: 400,
        height: 400,
        alt: "Sol Le Bris - Graphic Designer",
      },
    ],
  },
};

const skills = [
  {
    category: "Software",
    items: ["Indesign", "Photoshop", "Illustrator", "Microsoft Office"],
  },
  {
    category: "Printing Methods",
    items: ["Screen Printing", "Riso Printing", "Linocut", "Engraving"],
  },
];

const languages = [
  { name: "French", level: "Mother tongue" },
  { name: "English", level: "Fluent - Cambridge C1" },
  { name: "Portuguese", level: "School level" },
  { name: "German", level: "Level B1" },
];

const interests = [
  "Art exhibitions",
  "Music",
  "Social issues",
  "Psychological films",
  "Indoor climbing",
];

export default function AboutPage() {
  return (
    <>
      <div className="min-h-screen pt-24 pb-12">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="relative animate-fade-in">
              <div className="aspect-square rounded-3xl overflow-hidden bg-sol-yellow/20 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sol-yellow/40 to-sol-blue/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/favicon.png"
                    alt="Sol Le Bris"
                    width={200}
                    height={200}
                    className="sun-rotate"
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-sol-orange/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-sol-purple/20 rounded-full blur-2xl" />
            </div>

            {/* Info */}
            <div
              className="animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <p className="text-sol-orange font-mono text-sm mb-2">HELLO!</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Solene Le Bris
              </h1>
              <p className="text-xl text-charcoal/70 mb-4">
                Graphic Design Student
              </p>
              <p className="text-charcoal/60 leading-relaxed mb-8">
                Curious and enthusiastic, I am interested in art as a form of
                expression. I believe powerful images can create a strong impact
                on society, promoting awareness.
              </p>

              {/* Contact Info */}
              <address className="space-y-3 not-italic">
                <a
                  href="mailto:sol.lebris26@gmail.com"
                  className="flex items-center gap-3 text-charcoal hover:text-sol-orange transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  sol.lebris26@gmail.com
                </a>
                <div className="flex items-center gap-3 text-charcoal/60">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Lisboa, Portugal
                </div>
              </address>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-1 bg-sol-orange rounded" />
            Education
          </h2>
          <div className="space-y-8">
            <article className="bg-white rounded-2xl p-6 shadow-sm border border-charcoal/5">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">BA Graphic Design</h3>
                <time className="text-sol-orange font-mono text-sm">
                  2021 - 2024
                </time>
              </div>
              <p className="text-charcoal/70 mb-4">
                Ecole de Conde, Rennes, France
              </p>
              <ul className="space-y-2 text-charcoal/60 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-sol-orange mt-1">*</span>
                  Workshop: Screen printing with vegetal ink
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sol-orange mt-1">*</span>
                  Studio Le Marche Noir, Rennes - Weekly lessons, screen
                  printing and engraving
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sol-orange mt-1">*</span>
                  Studio La Bonne Pioche, Rennes - Introduction to screen
                  printing
                </li>
              </ul>
            </article>

            <article className="bg-white rounded-2xl p-6 shadow-sm border border-charcoal/5">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">High-school Diploma</h3>
                <time className="text-sol-orange font-mono text-sm">2021</time>
              </div>
              <p className="text-charcoal/70 mb-2">
                High-school Saint Vincent, Rennes, France
              </p>
              <p className="text-charcoal/60 text-sm">
                Specialized in Mathematics / History-Geography, Geopolitics,
                Political Sciences
              </p>
            </article>

            <article className="bg-white rounded-2xl p-6 shadow-sm border border-charcoal/5">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Cambridge Advanced</h3>
                <time className="text-sol-orange font-mono text-sm">2021</time>
              </div>
              <p className="text-charcoal/70">Level C1</p>
            </article>
          </div>
        </section>

        {/* Skills Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-1 bg-sol-purple rounded" />
            Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div
                key={skill.category}
                className="bg-white rounded-2xl p-6 shadow-sm border border-charcoal/5"
              >
                <h3 className="text-lg font-semibold mb-4">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 bg-charcoal/5 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Languages Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-1 bg-sol-blue rounded" />
            Languages
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="bg-white rounded-2xl p-6 shadow-sm border border-charcoal/5 text-center"
              >
                <h3 className="font-semibold mb-2">{lang.name}</h3>
                <p className="text-charcoal/60 text-sm">{lang.level}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Interests Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-1 bg-sol-pink rounded" />
            I Love
          </h2>
          <div className="flex flex-wrap gap-3">
            {interests.map((interest) => (
              <span
                key={interest}
                className="px-6 py-3 bg-gradient-to-r from-sol-orange/10 to-sol-pink/10 rounded-full text-charcoal font-medium border border-sol-orange/20"
              >
                {interest}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Let&apos;s work together</h2>
          <p className="text-charcoal/60 mb-8">
            I&apos;m always open to new opportunities and creative
            collaborations.
          </p>
          <a
            href="mailto:sol.lebris26@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-cream font-medium rounded-full hover:bg-sol-orange transition-colors"
          >
            Get in touch
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
          </a>
        </section>
      </div>

      <Footer />
    </>
  );
}
