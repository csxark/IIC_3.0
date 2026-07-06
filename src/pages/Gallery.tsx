import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GalleryContent from '../components/GalleryContent';
import GlowingParticles from '../components/GlowingParticles';

const Gallery: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a1931] relative">
      <GlowingParticles />
      <Navbar />
      
    
      <main className="[&_img]:transition-transform [&_img]:duration-500 [&_img]:ease-out hover:[&_img]:scale-105 [&_img]:cursor-pointer">
        <GalleryContent />
      </main>
      
      <Footer />
    </div>
  );
};

export default Gallery;