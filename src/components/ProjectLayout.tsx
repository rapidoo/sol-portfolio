"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import Footer from "./Footer";

interface ProjectLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  color: string;
  children: ReactNode;
}

export default function ProjectLayout({
  title,
  subtitle,
  description,
  color,
  children,
}: ProjectLayoutProps) {
  return (
    <>
      <div className="min-h-screen pt-24">
        {/* Header */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-charcoal/60 hover:text-charcoal transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour aux univers
          </Link>

          {/* Title */}
          <div className="mb-12">
            <p className="font-mono text-sm mb-2" style={{ color }}>
              {subtitle}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
            <p className="text-charcoal/60 max-w-2xl text-lg leading-relaxed">
              {description}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-6xl mx-auto px-6 pb-24 project-gallery">
          {children}
        </section>
      </div>

      <Footer />
    </>
  );
}
