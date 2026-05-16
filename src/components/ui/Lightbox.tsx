'use client'

import Image from 'next/image';

// Define the shape of the 'item' prop for TypeScript
interface Artwork {
  image: string;
  title: string;
}

interface LightboxProps {
  item: Artwork;
  onClose: () => void;
}

export default function Lightbox({ item, onClose }: LightboxProps) {
  // Return null if no item is provided (safety check)
  if (!item) {
    return null;
  }

  return (
    // Backdrop: a semi-transparent black background that covers the whole screen
    <div 
      className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4"
      onClick={onClose} // Close the lightbox when clicking the background
    >
      <div 
        className="relative max-w-4xl max-h-[90vh]"
        // Prevents closing when clicking the image or the container around it
        onClick={(e) => e.stopPropagation()} 
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-white text-black rounded-full h-10 w-10 flex items-center justify-center text-2xl font-bold z-10 leading-none"
          aria-label="Close"
        >
          &times;
        </button>

        {/* The Image */}
        <Image 
          src={item.image} 
          alt={item.title} 
          width={800}
          height={600}
          className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl transition-transform duration-300 hover:scale-110"
        />
      </div>
    </div>
  );
}
