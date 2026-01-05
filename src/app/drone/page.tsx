'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const droneImages = [
  {
    thumbnail: 'https://res.cloudinary.com/drjao9yvp/image/upload/w_800,f_auto,q_90/Drone/Newfoundland-Cliffs-01.jpg',
    fullSize: 'https://res.cloudinary.com/drjao9yvp/image/upload/f_auto,q_95/Drone/Newfoundland-Cliffs-01.jpg',
    alt: 'Newfoundland Cliffs 1',
  },
  {
    thumbnail: 'https://res.cloudinary.com/drjao9yvp/image/upload/w_800,f_auto,q_90/Drone/Newfoundland-Cliffs-02.jpg',
    fullSize: 'https://res.cloudinary.com/drjao9yvp/image/upload/f_auto,q_95/Drone/Newfoundland-Cliffs-02.jpg',
    alt: 'Newfoundland Cliffs 2',
  },
  {
    thumbnail: 'https://res.cloudinary.com/drjao9yvp/image/upload/w_800,f_auto,q_90/Drone/Newfoundland-Cliffs-03.jpg',
    fullSize: 'https://res.cloudinary.com/drjao9yvp/image/upload/f_auto,q_95/Drone/Newfoundland-Cliffs-03.jpg',
    alt: 'Newfoundland Cliffs 3',
  },
  {
    thumbnail: 'https://res.cloudinary.com/drjao9yvp/image/upload/w_800,f_auto,q_90/Drone/Newfoundland-Cliffs-04.jpg',
    fullSize: 'https://res.cloudinary.com/drjao9yvp/image/upload/f_auto,q_95/Drone/Newfoundland-Cliffs-04.jpg',
    alt: 'Newfoundland Cliffs 4',
  },
  {
    thumbnail: 'https://res.cloudinary.com/drjao9yvp/image/upload/w_800,f_auto,q_90/Drone/Newfoundland-Cliffs-05.jpg',
    fullSize: 'https://res.cloudinary.com/drjao9yvp/image/upload/f_auto,q_95/Drone/Newfoundland-Cliffs-05.jpg',
    alt: 'Newfoundland Cliffs 5',
  },
  {
    thumbnail: 'https://res.cloudinary.com/drjao9yvp/image/upload/w_800,f_auto,q_90/Drone/Newfoundland-Fog-01.jpg',
    fullSize: 'https://res.cloudinary.com/drjao9yvp/image/upload/f_auto,q_95/Drone/Newfoundland-Fog-01.jpg',
    alt: 'Newfoundland Fog 1',
  },
  {
    thumbnail: 'https://res.cloudinary.com/drjao9yvp/image/upload/w_800,f_auto,q_90/Drone/Newfoundland-Fog-02.jpg',
    fullSize: 'https://res.cloudinary.com/drjao9yvp/image/upload/f_auto,q_95/Drone/Newfoundland-Fog-02.jpg',
    alt: 'Newfoundland Fog 2',
  },
  {
    thumbnail: 'https://res.cloudinary.com/drjao9yvp/image/upload/w_800,f_auto,q_90/Drone/Newfoundland-Fog-03.jpg',
    fullSize: 'https://res.cloudinary.com/drjao9yvp/image/upload/f_auto,q_95/Drone/Newfoundland-Fog-03.jpg',
    alt: 'Newfoundland Fog 3',
  },
  {
    thumbnail: 'https://res.cloudinary.com/drjao9yvp/image/upload/w_800,f_auto,q_90/Drone/Newfoundland-Fog-04.jpg',
    fullSize: 'https://res.cloudinary.com/drjao9yvp/image/upload/f_auto,q_95/Drone/Newfoundland-Fog-04.jpg',
    alt: 'Newfoundland Fog 4',
  },
  {
    thumbnail: 'https://res.cloudinary.com/drjao9yvp/image/upload/w_800,f_auto,q_90/Drone/Newfoundland-Hills-01.jpg',
    fullSize: 'https://res.cloudinary.com/drjao9yvp/image/upload/f_auto,q_95/Drone/Newfoundland-Hills-01.jpg',
    alt: 'Newfoundland Hills 1',
  },
  {
    thumbnail: 'https://res.cloudinary.com/drjao9yvp/image/upload/w_800,f_auto,q_90/Drone/Newfoundland-Hills-02.jpg',
    fullSize: 'https://res.cloudinary.com/drjao9yvp/image/upload/f_auto,q_95/Drone/Newfoundland-Hills-02.jpg',
    alt: 'Newfoundland Hills 2',
  },
  {
    thumbnail: 'https://res.cloudinary.com/drjao9yvp/image/upload/w_800,f_auto,q_90/Drone/Newfoundland-Rocks-01.jpg',
    fullSize: 'https://res.cloudinary.com/drjao9yvp/image/upload/f_auto,q_95/Drone/Newfoundland-Rocks-01.jpg',
    alt: 'Newfoundland Rocks',
  },
  {
    thumbnail: 'https://res.cloudinary.com/drjao9yvp/image/upload/w_800,f_auto,q_90/Drone/Newfoundland-Sky-01.jpg',
    fullSize: 'https://res.cloudinary.com/drjao9yvp/image/upload/f_auto,q_95/Drone/Newfoundland-Sky-01.jpg',
    alt: 'Newfoundland Sky',
  },
  {
    thumbnail: 'https://res.cloudinary.com/drjao9yvp/image/upload/w_800,f_auto,q_90/Drone/Newfoundland-Beach-01.jpg',
    fullSize: 'https://res.cloudinary.com/drjao9yvp/image/upload/f_auto,q_95/Drone/Newfoundland-Beach-01.jpg',
    alt: 'Newfoundland Beach',
  },
];

export default function DronePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950">
      {/* Subtle animated background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-violet-600/5 dark:from-blue-500/3 dark:via-indigo-500/3 dark:to-violet-600/3 animate-gradient pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-6 py-12">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-8"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </Link>

        {/* Header */}
        <h1 className="text-3xl font-bold mb-2 text-slate-800 dark:text-slate-100">
          Drone Photography
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-10">
          Aerial shots from my DJI Spark over the last 5 years
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {droneImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-lg transition-all duration-300"
              onClick={() => setSelectedImage(image.fullSize)}
            >
              <Image
                src={image.thumbnail}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative w-full max-w-5xl aspect-video">
            <Image
              src={selectedImage}
              alt="Drone photo"
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </main>
  );
}
