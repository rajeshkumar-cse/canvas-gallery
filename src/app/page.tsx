'use client'
import { useState } from 'react';
import Image from 'next/image';

// Import the new data structure
import { galleryData } from '@/data/artworkData';
import Lightbox from '@/components/ui/Lightbox';

interface Photo {
  id: string;
  title: string;
  image: string;
}

interface Category {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  tag: string;
  photos: Photo[];
}

export default function HomePage() {
  const [lightboxItem, setLightboxItem] = useState<Photo | null>(null);
  // This state now holds the entire selected category object
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  // This is the detailed view for a selected category
  if (selectedCategory) {
    return (
      <main className="bg-black text-white p-8 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold capitalize">
            {selectedCategory.title}
          </h1>
          <button 
            onClick={() => setSelectedCategory(null)}
            className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors"
          >
            &larr; Back to Main Gallery
          </button>
        </div>

        {/* This maps over the individual photos within the selected collection */}
        <div className="flex flex-wrap gap-8 justify-center">
          {selectedCategory.photos.map((photo: Photo) => (
            <div
              key={photo.id}
              className="w-80 bg-gray-900 border border-gray-700 p-4 rounded-xl shadow-lg flex flex-col items-center"
            >
              <Image
                src={photo.image} 
                alt={photo.title}
                width={320}
                height={240}
                className="w-full h-60 object-cover rounded-md mb-4 border border-gray-600 cursor-pointer"
                onClick={() => setLightboxItem(photo)}
              />
              <h2 className="text-xl font-bold mb-2 text-gray-100">{photo.title}</h2>
            </div>
          ))}
        </div>

        {/* Lightbox for the filtered view */}
        {lightboxItem && (
          <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
        )}
      </main>
    )
  }

  // This is the main gallery overview
  return (
    <main className="bg-black text-white p-8 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-white tracking-tight">
        The Canvas Fable
      </h1>
      
      <div className="flex flex-wrap gap-8 justify-center">
        {/* This maps over the main categories (Painting, Sketch) */}
        {galleryData.map((category) => (
          <div
            key={category.id}
            className="w-80 bg-gray-900 border border-gray-700 p-4 rounded-xl shadow-lg flex flex-col items-center"
          >
            <Image
              src={category.coverImage} 
              alt={category.title}
              width={320}
              height={240}
              className="w-full h-60 object-cover rounded-md mb-4 border border-gray-600"
            />
            <h2 className="text-xl font-bold mb-2 text-gray-100">{category.title}</h2>
            <p className="text-sm text-gray-400 mb-3 text-center flex-grow">{category.description}</p>
            
            <button
              onClick={() => setSelectedCategory(category)}
              className="mt-4 w-full bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors"
            >
              View Collection
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}
