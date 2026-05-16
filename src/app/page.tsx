'use client'
import { useState } from 'react';
import Image from 'next/image';
import { Mail, Instagram, Twitter, Palette, MapPin } from 'lucide-react';

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
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const renderContent = () => {
    if (selectedCategory) {
      return (
        <div className="animate-fade-in">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold capitalize tracking-tight text-white mb-3">
                {selectedCategory.title}
              </h2>
              <p className="text-zinc-400 max-w-xl text-lg leading-relaxed">{selectedCategory.description}</p>
            </div>
            <button 
              onClick={() => setSelectedCategory(null)}
              className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md py-3 px-6 rounded-full transition-all duration-300 flex items-center gap-2 text-sm font-semibold border border-white/10 hover:border-white/30 shrink-0 self-start sm:self-auto"
            >
              &larr; Back to Gallery
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {selectedCategory.photos.map((photo: Photo) => (
              <div
                key={photo.id}
                className="group relative rounded-3xl overflow-hidden cursor-pointer bg-zinc-900 border border-zinc-800 shadow-2xl hover:shadow-white/5 transition-all duration-500 hover:-translate-y-2"
                onClick={() => setLightboxItem(photo)}
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={photo.image} 
                    alt={photo.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-2">{photo.title}</h3>
                  <div className="h-1 w-12 bg-white rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="animate-fade-in">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">Featured Collections</h2>
          <p className="text-zinc-400 max-w-2xl text-lg leading-relaxed">Explore my diverse range of artworks, spanning various mediums and subjects from striking portraits to serene landscapes.</p>
        </div>
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          {galleryData.map((category) => (
            <div
              key={category.id}
              className="group flex flex-col bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-[2rem] overflow-hidden hover:bg-zinc-800/50 transition-all duration-500 hover:border-white/10 hover:shadow-2xl hover:shadow-white/5"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={category.coverImage} 
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-zinc-100 group-hover:to-zinc-500 transition-all duration-300">{category.title}</h3>
                <p className="text-zinc-400 mb-10 flex-grow text-lg leading-relaxed">{category.description}</p>
                
                <button
                  onClick={() => setSelectedCategory(category)}
                  className="w-full bg-white text-black font-bold py-4 px-6 rounded-2xl hover:bg-zinc-200 transition-all duration-300 transform active:scale-[0.98] flex items-center justify-center gap-3 text-lg"
                >
                  View Collection <Palette size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-white/30 selection:text-white">
      <div className="flex flex-col md:flex-row min-h-screen">
        
        {/* Sidebar Profile Area */}
        <aside className="w-full md:w-[400px] lg:w-[460px] bg-black/40 backdrop-blur-3xl border-r border-white/5 p-8 md:p-12 lg:p-16 flex flex-col md:fixed md:h-screen z-10 overflow-y-auto relative">
          {/* Subtle background glow */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
          
          <div className="flex-grow flex flex-col relative z-10">
            {/* Artist Avatar / Logo placeholder */}
            <div className="w-36 h-36 lg:w-48 lg:h-48 rounded-full overflow-hidden mb-10 border-4 border-white/10 relative shadow-2xl shrink-0 mx-auto md:mx-0 transition-transform duration-500 hover:scale-105 hover:border-white/20">
              <Image 
                src="https://picsum.photos/seed/artist/600/600" 
                alt="Artist Profile" 
                fill
                className="object-cover"
              />
            </div>

            <h1 className="text-5xl font-black tracking-tighter text-white mb-3 text-center md:text-left">
              The Canvas Fable
            </h1>
            <p className="text-xl text-zinc-400 mb-8 font-medium text-center md:text-left tracking-wide uppercase text-sm">Visual Artist & Creator</p>

            <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent mb-10" />

            <div className="space-y-6 mb-14 flex-grow">
              <p className="text-zinc-300 leading-loose text-base lg:text-lg text-center md:text-left">
                Welcome to my creative universe. I specialize in bringing imagination to life through <strong className="text-white font-bold">oil paintings, acrylics, charcoal, sketching, and watercolor</strong>. 
              </p>
              <p className="text-zinc-300 leading-loose text-base lg:text-lg text-center md:text-left italic text-zinc-400">
                "Every stroke tells a story, and every canvas holds a fable waiting to be discovered."
              </p>
            </div>

            <div className="space-y-4 w-full">
              <a href="mailto:contact@thecanvasfable.com" className="flex items-center gap-5 text-zinc-400 hover:text-white transition-all p-4 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10 group">
                <div className="bg-zinc-900/80 p-3 rounded-xl group-hover:bg-white group-hover:text-black transition-colors shadow-inner">
                  <Mail size={22} />
                </div>
                <span className="font-semibold text-base">contact@thecanvasfable.com</span>
              </a>
              <div className="flex items-center gap-5 text-zinc-400 p-4 rounded-2xl">
                <div className="bg-zinc-900/80 p-3 rounded-xl shadow-inner">
                  <MapPin size={22} />
                </div>
                <span className="font-semibold text-base">New York, NY</span>
              </div>
            </div>

            <div className="flex gap-4 mt-12 justify-center md:justify-start">
              <a href="#" className="w-14 h-14 rounded-2xl bg-zinc-900/80 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black hover:-translate-y-1 transition-all duration-300 border border-white/5 shadow-xl">
                <Instagram size={24} />
              </a>
              <a href="#" className="w-14 h-14 rounded-2xl bg-zinc-900/80 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black hover:-translate-y-1 transition-all duration-300 border border-white/5 shadow-xl">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 md:ml-[400px] lg:ml-[460px] p-6 md:p-12 lg:p-20 relative">
          
          {/* Subtle background effects */}
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-zinc-800/20 rounded-full blur-[120px] pointer-events-none" />
          
          {/* Top Navigation / Links Area */}
          <nav className="flex justify-center md:justify-end gap-8 mb-20 border-b border-white/10 pb-8 relative z-10">
            <a href="#" className="text-base font-bold text-zinc-300 hover:text-white transition-colors relative group py-2">
              Gallery
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white scale-x-100 transition-transform origin-left" />
            </a>
            <a href="#" className="text-base font-bold text-zinc-400 hover:text-white transition-colors relative group py-2">
              About
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
            <a href="#" className="text-base font-bold text-zinc-400 hover:text-white transition-colors relative group py-2">
              Exhibitions
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          </nav>

          <div className="relative z-10">
            {renderContent()}
          </div>

        </main>
      </div>

      {/* Lightbox */}
      {lightboxItem && (
        <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
      )}
    </div>
  )
}
