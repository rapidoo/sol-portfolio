"use client";

import Image from "next/image";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description?: string;
  images: string[];
  tags?: string[];
}

export default function ProjectCard({ title, description, images, tags }: ProjectCardProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-charcoal/5 mb-8">
        {/* Main Image */}
        <div className="relative aspect-[16/10] cursor-pointer" onClick={() => setSelectedImage(images[0])}>
          <Image
            src={images[0]}
            alt={title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          {description && (
            <p className="text-charcoal/60 text-sm mb-4">{description}</p>
          )}

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-charcoal/5 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Thumbnail gallery */}
          {images.length > 1 && (
            <div className="flex gap-2 mt-4">
              {images.slice(1).map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className="relative w-20 h-20 rounded-lg overflow-hidden border-2 border-transparent hover:border-sol-orange transition-colors"
                >
                  <Image src={img} alt={`${title} ${idx + 2}`} fill className="object-cover" sizes="80px" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-sol-orange transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt={title}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </>
  );
}
