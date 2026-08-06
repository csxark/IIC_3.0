import React, { useState, useEffect } from 'react';
import { Camera, X, Maximize2, Calendar } from 'lucide-react';

interface GalleryImage {
  url: string;
  title: string;
  year: string;
}

const IMAGES_DATA: GalleryImage[] = [
  { url: "/20241115_101932.jpg", title: "IIC", year: "2024" },
  { url: "/20241115_224002.jpg", title: "IIC", year: "2024" },
  { url: "/20241115_224201.jpg", title: "IIC", year: "2024" },
  { url: "/20241116_122330.jpg", title: "IIC", year: "2024" },
  { url: "/IMG_0001.jpeg", title: "IIC", year: "2024" },
  { url: "/IMG_1930.JPG", title: "IIC", year: "2024" },
  { url: "/IMG_2016.JPG", title: "IIC", year: "2024" },
  { url: "/IMG_2025.JPG", title: "IIC", year: "2024" },
  { url: "/IMG_2028.JPG", title: "IIC", year: "2024" },
  { url: "/IMG_2038.JPG", title: "IIC", year: "2024" },
  { url: "/IMG_2094.JPG", title: "IIC", year: "2024" },
  { url: "/IMG_2121.JPG", title: "IIC", year: "2024" },
  { url: "/IMG_20241116_015025_570.jpg", title: "IIC", year: "2024" },
  { url: "/IMG20241115230723.jpg", title: "IIC", year: "2024" },
  { url: "/IMG_0004.jpeg", title: "IIC", year: "2024" }
];

const GalleryContent: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <div className="min-h-screen space-bg text-slate-100">
      <main className="container mx-auto px-4 py-20 max-w-7xl relative z-10">
        
        {/* Exact Original Header Layout */}
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-full mb-4 backdrop-blur-md">
            <Camera className="h-8 w-8 text-pink-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="gradient-text">Event Gallery</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-cyan-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Relive the moments from previous IIC events. Browse through our collection of memories and achievements.
          </p>
        </div>

        {/* Professional Grid Layout */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {IMAGES_DATA.map((image, index) => (
            <article
              key={index}
              className="group relative aspect-[16/11] overflow-hidden rounded-2xl bg-black/20 border border-white/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-pink-500/40 transition-all duration-500 hover:-translate-y-2 cursor-pointer glass-card"
              onClick={() => setSelectedImage(image)}
            >
              {/* Shine Hover Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out z-20" />

              <img
                src={image.url}
                alt={image.title}
                loading="lazy"
                className="w-full h-full object-cover transform transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 filter brightness-[0.9] group-hover:brightness-[1.05]"
              />
              
              {/* Dark Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
              
              {/* Content Box */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-10 space-y-1.5">
                <h3 className="text-white font-extrabold text-2xl tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                  {image.title}
                </h3>
                
                <div className="flex items-center gap-1.5 text-xs text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <Calendar className="h-3.5 w-3.5 text-pink-500" />
                  <span>{image.year}</span>
                </div>
              </div>

              {/* View Action Floating Icon */}
              <div className="absolute top-4 right-4 opacity-0 translate-y-[-10px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
                <div className="bg-black/40 border border-white/10 p-3 rounded-full backdrop-blur-xl shadow-lg hover:bg-pink-500/20 hover:border-pink-500/40 transition-colors">
                  <Maximize2 className="h-4 w-4 text-white" />
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Immersive Cinema Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 md:p-10 backdrop-blur-md transition-all duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="relative max-w-6xl w-full max-h-[90vh] bg-black/40 rounded-3xl overflow-hidden border border-white/[0.08] shadow-[0_25px_70px_-15px_rgba(0,0,0,0.9)] flex flex-col animate-in fade-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Frame Subtle Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-pink-500 to-transparent" />

              <div className="relative flex-1 bg-black/20 flex items-center justify-center overflow-hidden min-h-[40vh] p-2 md:p-6">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[75vh] object-contain rounded-xl select-none shadow-2xl"
                />
              </div>

              {/* Glassmorphic Footer Controls */}
              <div className="bg-black/80 border-t border-white/[0.06] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 backdrop-blur-xl">
                <div className="space-y-0.5">
                  <span className="text-xs text-pink-400 font-medium">Year {selectedImage.year}</span>
                  <h4 className="text-white font-black text-2xl tracking-tight">
                    {selectedImage.title}
                  </h4>
                </div>
                
                <button
                  type="button"
                  className="self-end sm:self-center flex items-center gap-2 px-5 py-3 bg-white/[0.04] hover:bg-pink-600 border border-white/[0.08] hover:border-pink-500 text-slate-300 hover:text-white rounded-2xl transition-all duration-300 shadow-lg font-medium group text-sm"
                  onClick={() => setSelectedImage(null)}
                >
                  <span>Close Window</span>
                  <X className="h-4 w-4 group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default GalleryContent;