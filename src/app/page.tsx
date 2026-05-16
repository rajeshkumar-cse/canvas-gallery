'use client'
import { useState } from 'react';
import Image from 'next/image';
import { Mail, Instagram, Facebook, Palette, MapPin, Calendar, Award, Star } from 'lucide-react';

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
  const [activeTab, setActiveTab] = useState<'gallery' | 'about' | 'exhibitions' | 'commissions'>('gallery');

  const renderContent = () => {
    if (activeTab === 'commissions') {
      const commissionRates = [
        { type: "A4 Painting", medium: "Oil / Acrylic", price: "₹5,000", desc: "Detailed, full-color painting." },
        { type: "A3 Painting", medium: "Oil / Acrylic", price: "₹10,000", desc: "Larger, immersive canvas." },
        { type: "A4 Sketch", medium: "Charcoal / Pencil", price: "₹3,000", desc: "Classic black and white portrait." },
        { type: "A3 Sketch", medium: "Charcoal / Pencil", price: "₹6,000", desc: "Highly detailed, large sketch." },
        { type: "Custom Canvas", medium: "Mixed / Watercolors", price: "Contact for Quote", desc: "Tailored to your specific needs." },
      ];

      return (
        <div className="animate-fade-in max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-200 to-amber-100 tracking-tight mb-8">Commission Rates</h2>
          <p className="text-slate-300 text-lg mb-10">Bring your vision to life. Review the baseline pricing below, or contact me directly for custom sizes and unique requests.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commissionRates.map((rate, index) => (
              <div key={index} className="p-8 bg-slate-900/40 backdrop-blur-sm rounded-3xl border border-white/5 hover:border-fuchsia-400/50 hover:shadow-2xl hover:shadow-fuchsia-500/10 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-fuchsia-300 transition-colors">{rate.type}</h3>
                  <p className="text-sm font-semibold tracking-wide text-fuchsia-400/70 uppercase mb-4">{rate.medium}</p>
                  <p className="text-slate-400 mb-6">{rate.desc}</p>
                </div>
                <div className="text-3xl font-black text-white group-hover:text-amber-200 transition-colors">
                  {rate.price}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-10 bg-gradient-to-br from-slate-900/80 to-fuchsia-950/40 backdrop-blur-md rounded-3xl border border-white/10 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-fuchsia-500 via-pink-500 to-amber-500" />
            <h3 className="text-3xl font-bold text-white mb-4">Ready to start a project?</h3>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">Send me an email with your requirements, reference photos, and preferred timeline, and let's create a fable together.</p>
            <a href="mailto:hema.r.rajpoot@gmail.com?subject=Commission%20Request%20-%20The%20Canvas%20Fable" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white font-bold py-4 px-10 rounded-2xl hover:from-fuchsia-500 hover:to-pink-500 transition-all transform active:scale-95 shadow-lg shadow-pink-500/25 border border-pink-400/50">
              Request a Commission
            </a>
          </div>
        </div>
      );
    }
    if (activeTab === 'about') {
      return (
        <div className="animate-fade-in max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-200 to-amber-100 tracking-tight mb-8">About the Artist</h2>
          
          <div className="space-y-8 text-slate-300 text-lg leading-relaxed">
            <p>
              I am <strong className="text-white font-bold border-b border-fuchsia-400/50 pb-1">Hema Rajpoot</strong>, the founder of The Canvas Fable and a versatile visual artist. By education, I am an Electronics Engineer, and I spent the early part of my career working in the IT sector as a Quality Auditor. However, the canvas was where my true calling always lived.
            </p>
            <p>
              Driven by a profound, lifelong passion for fine arts, I chose to pivot and fully pursue my artistic career. Today, I dedicate myself to exploring the endless possibilities of visual storytelling. Whether it is through the rich textures of <strong className="text-amber-200">oil and acrylics</strong>, the raw intensity of <strong className="text-slate-200">charcoal and sketching</strong>, or the fluidity of <strong className="text-cyan-300">watercolor</strong>, I believe art should not just be seen, but deeply felt.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
              <div className="bg-fuchsia-950/30 backdrop-blur-sm p-6 rounded-2xl border border-fuchsia-500/20 hover:border-fuchsia-500/50 hover:bg-fuchsia-900/40 hover:-translate-y-1 transition-all duration-300 group shadow-lg shadow-fuchsia-900/10 hover:shadow-fuchsia-500/20">
                <Palette className="text-fuchsia-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-xl font-bold text-white mb-2">Versatile Mediums</h3>
                <p className="text-sm text-fuchsia-200/70">Mastery in Oil, Acrylic, Watercolor, and Charcoal.</p>
              </div>
              <div className="bg-pink-950/30 backdrop-blur-sm p-6 rounded-2xl border border-pink-500/20 hover:border-pink-500/50 hover:bg-pink-900/40 hover:-translate-y-1 transition-all duration-300 group shadow-lg shadow-pink-900/10 hover:shadow-pink-500/20">
                <Star className="text-pink-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-xl font-bold text-white mb-2">Unique Style</h3>
                <p className="text-sm text-pink-200/70">A blend of abstract expressionism and contemporary realism.</p>
              </div>
              <div className="bg-amber-950/30 backdrop-blur-sm p-6 rounded-2xl border border-amber-500/20 hover:border-amber-500/50 hover:bg-amber-900/40 hover:-translate-y-1 transition-all duration-300 group shadow-lg shadow-amber-900/10 hover:shadow-amber-500/20">
                <Award className="text-amber-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-xl font-bold text-white mb-2">Recognized Work</h3>
                <p className="text-sm text-amber-200/70">Featured in multiple national galleries and private collections.</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (activeTab === 'exhibitions') {
      const dummyExhibitions = [
        { year: "2026", title: "Whispers of the Canvas", location: "Modern Art Gallery, NY", status: "Upcoming", bg: "bg-fuchsia-950/30", border: "border-fuchsia-500/20", hoverBg: "hover:bg-fuchsia-900/40 hover:border-fuchsia-500/50", text: "text-fuchsia-400", shadow: "hover:shadow-fuchsia-900/30" },
        { year: "2025", title: "Shadows & Light", location: "Downtown Studio, Chicago", status: "Past", bg: "bg-blue-950/30", border: "border-blue-500/20", hoverBg: "hover:bg-blue-900/40 hover:border-blue-500/50", text: "text-blue-400", shadow: "hover:shadow-blue-900/30" },
        { year: "2024", title: "The Acrylic Era", location: "Westside Gallery, LA", status: "Past", bg: "bg-emerald-950/30", border: "border-emerald-500/20", hoverBg: "hover:bg-emerald-900/40 hover:border-emerald-500/50", text: "text-emerald-400", shadow: "hover:shadow-emerald-900/30" },
        { year: "2023", title: "Charcoal Beginnings", location: "Local Art Hub, NY", status: "Past", bg: "bg-amber-950/30", border: "border-amber-500/20", hoverBg: "hover:bg-amber-900/40 hover:border-amber-500/50", text: "text-amber-400", shadow: "hover:shadow-amber-900/30" },
      ];

      return (
        <div className="animate-fade-in max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-200 to-amber-100 tracking-tight mb-8">Exhibitions</h2>
          <p className="text-slate-300 text-lg mb-10">A timeline of my solo and group showcases.</p>

          <div className="space-y-6">
            {dummyExhibitions.map((exhibition, index) => (
              <div key={index} className={`flex flex-col sm:flex-row gap-4 sm:gap-8 p-6 ${exhibition.bg} backdrop-blur-sm rounded-2xl border ${exhibition.border} ${exhibition.hoverBg} transition-all duration-300 hover:shadow-xl ${exhibition.shadow} hover:-translate-y-1 group`}>
                <div className="sm:w-24 shrink-0">
                  <span className={`text-2xl font-bold ${exhibition.text} opacity-70 group-hover:opacity-100 transition-opacity`}>{exhibition.year}</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                    {exhibition.title}
                    {exhibition.status === "Upcoming" && (
                      <span className="text-xs font-bold px-3 py-1 bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white rounded-full uppercase tracking-wider shadow-lg">
                        Upcoming
                      </span>
                    )}
                  </h3>
                  <div className="flex items-center gap-2 text-slate-400">
                    <MapPin size={16} className={exhibition.text} />
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
        <div className="animate-fade-in relative z-10">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold capitalize tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-200 to-amber-100 mb-3">
                {selectedCategory.title}
              </h2>
              <p className="text-slate-300 max-w-xl text-lg leading-relaxed">{selectedCategory.description}</p>
            </div>
            <button 
              onClick={() => setSelectedCategory(null)}
              className="bg-white/5 hover:bg-white/10 text-white backdrop-blur-md py-3 px-6 rounded-full transition-all duration-300 flex items-center gap-2 text-sm font-semibold border border-white/10 hover:border-white/30 shrink-0 self-start sm:self-auto"
            >
              &larr; Back to Gallery
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {selectedCategory.photos.map((photo: Photo) => (
              <div
                key={photo.id}
                className="group relative rounded-3xl overflow-hidden cursor-pointer bg-slate-900 border border-white/5 shadow-2xl hover:shadow-fuchsia-500/20 transition-all duration-500 hover:-translate-y-2 hover:border-fuchsia-500/50"
                onClick={() => setLightboxItem(photo)}
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={photo.image} 
                    alt={photo.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-2">{photo.title}</h3>
                  <div className="h-1 w-12 bg-gradient-to-r from-fuchsia-400 to-amber-400 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="animate-fade-in relative z-10">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-200 to-amber-100 tracking-tight mb-4">Featured Collections</h2>
          <p className="text-slate-300 max-w-2xl text-lg leading-relaxed">Explore my diverse range of artworks, spanning various mediums and subjects from striking portraits to serene landscapes.</p>
        </div>
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          {galleryData.map((category) => (
            <div
              key={category.id}
              className="group flex flex-col bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-[2rem] overflow-hidden hover:bg-slate-800/60 transition-all duration-500 hover:border-fuchsia-500/50 hover:shadow-2xl hover:shadow-fuchsia-500/10"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={category.coverImage} 
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="p-10 flex flex-col flex-grow relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-fuchsia-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-fuchsia-300 group-hover:to-amber-300 transition-all duration-300">{category.title}</h3>
                <p className="text-slate-400 mb-10 flex-grow text-lg leading-relaxed">{category.description}</p>
                
                <button
                  onClick={() => setSelectedCategory(category)}
                  className="w-full bg-white/5 border border-white/10 text-white font-bold py-4 px-6 rounded-2xl group-hover:bg-gradient-to-r group-hover:from-fuchsia-600 group-hover:to-pink-600 group-hover:border-transparent transition-all duration-500 transform active:scale-[0.98] flex items-center justify-center gap-3 text-lg relative z-10 overflow-hidden"
                >
                  <span>View Collection</span> <Palette size={20} className="group-hover:animate-pulse" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-fuchsia-500/30 selection:text-white relative overflow-hidden">
      
      {/* Immersive Colorful Background Orbs */}
      <div className="fixed top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-fuchsia-800/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse duration-[10000ms]" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-blue-800/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="fixed top-[40%] left-[30%] w-[40vw] h-[40vw] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="flex flex-col md:flex-row min-h-screen relative z-10">
        
        {/* Sidebar Profile Area */}
        <aside className="w-full md:w-[400px] lg:w-[460px] bg-slate-950/40 backdrop-blur-3xl border-r border-white/5 p-8 md:p-12 lg:p-16 flex flex-col md:fixed md:h-screen z-20 overflow-y-auto relative custom-scrollbar">
          {/* Subtle background glow inside sidebar */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
          
          <div className="flex-grow flex flex-col relative z-10">
            {/* Artist Avatar / Logo placeholder */}
            <div className="w-36 h-36 lg:w-48 lg:h-48 rounded-full overflow-hidden mb-10 border-4 border-white/10 relative shadow-2xl shrink-0 mx-auto md:mx-0 transition-transform duration-500 hover:scale-105 hover:border-fuchsia-500/40">
              <Image 
                src="https://picsum.photos/seed/artist/600/600" 
                alt="Artist Profile" 
                fill
                className="object-cover"
              />
            </div>

            <h1 className="text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-300 to-amber-300 mb-3 text-center md:text-left leading-tight">
              The Canvas Fable
            </h1>
            <p className="text-xl text-slate-400 mb-8 font-medium text-center md:text-left tracking-wide uppercase text-sm">By Hema Rajpoot</p>

            <div className="h-px w-full bg-gradient-to-r from-fuchsia-500/30 via-pink-500/10 to-transparent mb-10" />

            <div className="space-y-6 mb-14 flex-grow">
              <p className="text-slate-300 leading-loose text-base lg:text-lg text-center md:text-left">
                From Electronics Engineer and IT Quality Auditor to versatile visual artist. I specialize in bringing imagination to life through <strong className="text-amber-200 font-bold">oil paintings</strong>, <strong className="text-pink-300 font-bold">acrylics</strong>, <strong className="text-slate-200 font-bold">charcoal</strong>, <strong className="text-slate-200 font-bold">sketching</strong>, and <strong className="text-cyan-300 font-bold">watercolor</strong>. 
              </p>
              <p className="text-slate-300 leading-loose text-base lg:text-lg text-center md:text-left italic text-slate-400 border-l-2 border-fuchsia-500/50 pl-4 py-1">
                "Every stroke tells a story, and every canvas holds a fable waiting to be discovered."
              </p>
            </div>

            <div className="space-y-4 w-full">
              <a href="mailto:hema.r.rajpoot@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-white transition-all p-3 rounded-2xl hover:bg-white/5 border border-transparent hover:border-fuchsia-500/30 group overflow-hidden">
                <div className="bg-slate-900/80 p-2.5 rounded-xl group-hover:bg-gradient-to-br group-hover:from-fuchsia-600 group-hover:to-pink-600 group-hover:text-white transition-all shadow-inner border border-white/5 shrink-0">
                  <Mail size={20} />
                </div>
                <span className="font-semibold text-sm whitespace-nowrap">hema.r.rajpoot@gmail.com</span>
              </a>
              <div className="flex items-center gap-5 text-slate-400 p-4 rounded-2xl">
                <div className="bg-slate-900/80 p-3 rounded-xl shadow-inner border border-white/5">
                  <MapPin size={22} className="text-pink-400" />
                </div>
                <span className="font-semibold text-base">Delhi</span>
              </div>
            </div>

            <div className="flex gap-4 mt-12 justify-center md:justify-start">
              <a href="#" className="w-14 h-14 rounded-2xl bg-slate-900/80 flex items-center justify-center text-slate-400 hover:text-white hover:-translate-y-1 hover:bg-gradient-to-br hover:from-fuchsia-600 hover:to-pink-600 transition-all duration-300 border border-white/5 shadow-xl group">
                <Instagram size={24} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-14 h-14 rounded-2xl bg-slate-900/80 flex items-center justify-center text-slate-400 hover:text-white hover:-translate-y-1 hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-700 transition-all duration-300 border border-white/5 shadow-xl group">
                <Facebook size={24} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 md:ml-[400px] lg:ml-[460px] p-6 md:p-12 lg:p-20 relative min-h-screen flex flex-col z-10">
          
          {/* Top Navigation / Links Area */}
          <nav className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16 border-b border-white/10 pb-6 relative z-20">
            
            {/* Attractive Element on the left */}
            <button 
              onClick={() => {setActiveTab('commissions'); setSelectedCategory(null);}} 
              className="flex items-center gap-4 bg-slate-900/60 backdrop-blur-md border border-fuchsia-500/30 hover:border-fuchsia-500/70 hover:bg-slate-800/80 px-6 py-3 rounded-full shadow-lg shadow-fuchsia-500/10 transition-all group"
            >
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-fuchsia-500 group-hover:bg-fuchsia-400 transition-colors"></span>
              </div>
              <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 to-pink-300 group-hover:from-white group-hover:to-white tracking-widest uppercase transition-all">Available for Commissions</span>
            </button>

            {/* Navigation Tabs */}
            <div className="flex gap-8">
              <button 
                onClick={() => {setActiveTab('gallery'); setSelectedCategory(null);}} 
                className={`text-base font-bold transition-colors relative group py-2 ${activeTab === 'gallery' ? 'text-white' : 'text-slate-400 hover:text-white'}`}
              >
                Gallery
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-fuchsia-500 to-amber-500 transition-transform origin-left ${activeTab === 'gallery' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </button>
              <button 
                onClick={() => {setActiveTab('about'); setSelectedCategory(null);}} 
                className={`text-base font-bold transition-colors relative group py-2 ${activeTab === 'about' ? 'text-white' : 'text-slate-400 hover:text-white'}`}
              >
                About
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-fuchsia-500 to-amber-500 transition-transform origin-left ${activeTab === 'about' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </button>
              <button 
                onClick={() => {setActiveTab('exhibitions'); setSelectedCategory(null);}} 
                className={`text-base font-bold transition-colors relative group py-2 ${activeTab === 'exhibitions' ? 'text-white' : 'text-slate-400 hover:text-white'}`}
              >
                Exhibitions
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-fuchsia-500 to-amber-500 transition-transform origin-left ${activeTab === 'exhibitions' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
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
