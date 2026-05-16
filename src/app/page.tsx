'use client'
import { useState } from 'react';
import Image from 'next/image';
import { Mail, Instagram, Twitter, Palette, MapPin, Calendar, Award, Star } from 'lucide-react';

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
  const [activeTab, setActiveTab] = useState<'gallery' | 'about' | 'exhibitions'>('gallery');

  const renderContent = () => {
    if (activeTab === 'about') {
      return (
        <div className="animate-fade-in max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-8">About the Artist</h2>
          
          <div className="space-y-8 text-zinc-300 text-lg leading-relaxed">
            <p>
              I am a contemporary visual artist whose work explores the intersection of raw emotion and the natural world. With over a decade of experience experimenting with diverse mediums, my portfolio is a testament to the endless possibilities of visual storytelling.
            </p>
            <p>
              My journey began with simple pencil sketches and evolved into a deep passion for <strong className="text-white">oil, acrylic, and charcoal</strong>. I believe that art should not just be seen, but felt. Each piece I create is an invitation into a unique fable, carefully constructed layer by layer.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
              <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5">
                <Palette className="text-white mb-4" size={32} />
                <h3 className="text-xl font-bold text-white mb-2">Versatile Mediums</h3>
                <p className="text-sm text-zinc-400">Mastery in Oil, Acrylic, Watercolor, and Charcoal.</p>
              </div>
              <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5">
                <Star className="text-white mb-4" size={32} />
                <h3 className="text-xl font-bold text-white mb-2">Unique Style</h3>
                <p className="text-sm text-zinc-400">A blend of abstract expressionism and contemporary realism.</p>
              </div>
              <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5">
                <Award className="text-white mb-4" size={32} />
                <h3 className="text-xl font-bold text-white mb-2">Recognized Work</h3>
                <p className="text-sm text-zinc-400">Featured in multiple national galleries and private collections.</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (activeTab === 'exhibitions') {
      const dummyExhibitions = [
        { year: "2026", title: "Whispers of the Canvas", location: "Modern Art Gallery, NY", status: "Upcoming" },
        { year: "2025", title: "Shadows & Light", location: "Downtown Studio, Chicago", status: "Past" },
        { year: "2024", title: "The Acrylic Era", location: "Westside Gallery, LA", status: "Past" },
        { year: "2023", title: "Charcoal Beginnings", location: "Local Art Hub, NY", status: "Past" },
      ];

      return (
        <div className="animate-fade-in max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-8">Exhibitions</h2>
          <p className="text-zinc-400 text-lg mb-10">A timeline of my solo and group showcases.</p>

          <div className="space-y-6">
            {dummyExhibitions.map((exhibition, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-4 sm:gap-8 p-6 bg-zinc-900/40 rounded-2xl border border-white/5 hover:border-white/20 transition-colors">
                <div className="sm:w-24 shrink-0">
                  <span className="text-2xl font-bold text-white/50">{exhibition.year}</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                    {exhibition.title}
                    {exhibition.status === "Upcoming" && (
                      <span className="text-xs font-bold px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full uppercase tracking-wider">
                        Upcoming
                      </span>
                    )}
                  </h3>
                  <div className="flex items-center gap-2 text-zinc-400">
                    <MapPin size={16} />
                    <span>{exhibition.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

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
        <aside className="w-full md:w-[400px] lg:w-[460px] bg-black/40 backdrop-blur-3xl border-r border-white/5 p-8 md:p-12 lg:p-16 flex flex-col md:fixed md:h-screen z-10 overflow-y-auto relative custom-scrollbar">
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
        <main className="flex-1 md:ml-[400px] lg:ml-[460px] p-6 md:p-12 lg:p-20 relative min-h-screen flex flex-col">
          
          {/* Subtle background effects */}
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-zinc-800/20 rounded-full blur-[120px] pointer-events-none" />
          
          {/* Top Navigation / Links Area */}
          <nav className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16 border-b border-white/10 pb-6 relative z-10">
            
            {/* Attractive Element on the left (Circled area) */}
            <div className="flex items-center gap-4 bg-zinc-900/50 border border-white/10 px-5 py-2.5 rounded-full shadow-lg">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </div>
              <span className="text-sm font-bold text-emerald-400 tracking-widest uppercase">Available for Commissions</span>
            </div>

            {/* Navigation Tabs */}
            <div className="flex gap-8">
              <button 
                onClick={() => {setActiveTab('gallery'); setSelectedCategory(null);}} 
                className={`text-base font-bold transition-colors relative group py-2 ${activeTab === 'gallery' ? 'text-white' : 'text-zinc-500 hover:text-white'}`}
              >
                Gallery
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-white transition-transform origin-left ${activeTab === 'gallery' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </button>
              <button 
                onClick={() => {setActiveTab('about'); setSelectedCategory(null);}} 
                className={`text-base font-bold transition-colors relative group py-2 ${activeTab === 'about' ? 'text-white' : 'text-zinc-500 hover:text-white'}`}
              >
                About
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-white transition-transform origin-left ${activeTab === 'about' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </button>
              <button 
                onClick={() => {setActiveTab('exhibitions'); setSelectedCategory(null);}} 
                className={`text-base font-bold transition-colors relative group py-2 ${activeTab === 'exhibitions' ? 'text-white' : 'text-zinc-500 hover:text-white'}`}
              >
                Exhibitions
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-white transition-transform origin-left ${activeTab === 'exhibitions' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </button>
            </div>
          </nav>

          <div className="relative z-10 flex-grow">
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
