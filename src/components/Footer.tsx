import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream py-16 mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/favicon.png"
                alt="Sol"
                width={32}
                height={32}
                className="brightness-110"
              />
              <span className="font-medium text-lg">Sol Le Bris</span>
            </Link>
            <p className="text-cream/60 text-sm leading-relaxed">
              Graphic Designer passionate about creating powerful images that
              make an impact on society.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-cream/60 hover:text-sol-orange transition-colors text-sm"
                >
                  Univers
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-cream/60 hover:text-sol-orange transition-colors text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projets/affiches"
                  className="text-cream/60 hover:text-sol-orange transition-colors text-sm"
                >
                  Affiches
                </Link>
              </li>
              <li>
                <Link
                  href="/projets/edition"
                  className="text-cream/60 hover:text-sol-orange transition-colors text-sm"
                >
                  Edition
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:sol.lebris26@gmail.com"
                  className="text-cream/60 hover:text-sol-orange transition-colors"
                >
                  sol.lebris26@gmail.com
                </a>
              </li>
              <li className="text-cream/60">Lisboa, Portugal</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-12 pt-8 text-center text-cream/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Sol Le Bris. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
