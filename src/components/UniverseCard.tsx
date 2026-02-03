"use client";

import Image from "next/image";
import Link from "next/link";

interface UniverseCardProps {
  title: string;
  subtitle: string;
  image: string;
  href: string;
  color: string;
}

export default function UniverseCard({
  title,
  subtitle,
  image,
  href,
  color,
}: UniverseCardProps) {
  return (
    <Link href={href} className="universe-card block group">
      <div
        className="relative aspect-[4/5] rounded-2xl overflow-hidden"
        style={{ boxShadow: `0 20px 40px ${color}30` }}
      >
        {/* Image */}
        <Image
          src={image}
          alt={title}
          fill
          className="universe-image object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Overlay gradient */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `linear-gradient(to top, ${color}90 0%, transparent 50%)`,
          }}
        />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <h3 className="text-white text-xl font-semibold mb-1">{title}</h3>
          <p className="text-white/80 text-sm">{subtitle}</p>
        </div>
      </div>

      {/* Title below card */}
      <div className="mt-4 px-1">
        <h3 className="text-lg font-semibold text-charcoal group-hover:text-sol-orange transition-colors">
          {title}
        </h3>
        <p className="text-sm text-charcoal/60">{subtitle}</p>
      </div>
    </Link>
  );
}
