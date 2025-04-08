
import { useState } from 'react';
import galleryData, { GalleryImage } from '@/data/galleryData';
import FullscreenViewer from './FullscreenViewer';

const GalleryGrid: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [viewerOpen, setViewerOpen] = useState(false);

  const openFullscreen = (image: GalleryImage) => {
    setSelectedImage(image);
    setViewerOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeFullscreen = () => {
    setViewerOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-5 max-w-[1400px] mx-auto">
        {galleryData.map((image) => (
          <div key={image.id} className="gallery-item">
            <img 
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-all duration-500"
              onClick={() => openFullscreen(image)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            <button
              className="view-btn"
              onClick={(e) => {
                e.preventDefault();
                openFullscreen(image);
              }}
            >
              <i className="fas fa-expand mr-2"></i> View
            </button>
          </div>
        ))}
      </div>

      {viewerOpen && selectedImage && (
        <FullscreenViewer
          images={galleryData}
          initialImage={selectedImage}
          onClose={closeFullscreen}
        />
      )}
    </>
  );
};

export default GalleryGrid;
