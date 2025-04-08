"use client";

import { useEffect } from 'react';
import Header from '@/components/gallery/Header';
import GalleryTitle from '@/components/gallery/GalleryTitle';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import Footer from '@/components/gallery/Footer';

const GalleryPage: React.FC = () => {
  useEffect(() => {
    // Add Font Awesome dynamically
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js';
    script.async = true;
    document.body.appendChild(script);

    // Update document title
    document.title = 'Jagadhatri Puja Gallery | Utsav Unites';

    return () => {
      // Cleanup
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="font-poppins overflow-x-hidden">
      <Header />
      <GalleryTitle />
      <GalleryGrid />
      <Footer />
    </div>
  );
};

export default GalleryPage;
