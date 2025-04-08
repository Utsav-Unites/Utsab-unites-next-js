
import { useState, useEffect, useRef } from 'react';
import { GalleryImage } from '@/data/galleryData';

interface FullscreenViewerProps {
  images: GalleryImage[];
  initialImage: GalleryImage;
  onClose: () => void;
}

const FullscreenViewer: React.FC<FullscreenViewerProps> = ({ images, initialImage, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(images.findIndex(img => img.id === initialImage.id));
  const [isZoomed, setIsZoomed] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startPoint, setStartPoint] = useState({ x: 0, y: 0 });
  const [translatePoint, setTranslatePoint] = useState({ x: 0, y: 0 });
  const [isSlideshowPlaying, setIsSlideshowPlaying] = useState(false);
  const slideshowIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch(e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          navigateGallery(-1);
          break;
        case 'ArrowRight':
          navigateGallery(1);
          break;
        case ' ':
        case 'z':
        case 'Z':
          toggleZoom();
          break;
        case 'p':
        case 'P':
          toggleSlideshow();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      if (slideshowIntervalRef.current) {
        clearInterval(slideshowIntervalRef.current);
      }
    };
  }, [currentIndex, isZoomed]);

  const navigateGallery = (direction: number) => {
    let newIndex = currentIndex + direction;
    
    // Loop through images
    if (newIndex < 0) {
      newIndex = images.length - 1;
    } else if (newIndex >= images.length) {
      newIndex = 0;
    }
    
    setCurrentIndex(newIndex);
    resetZoom();
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
    setTranslatePoint({ x: 0, y: 0 });
  };

  const resetZoom = () => {
    setIsZoomed(false);
    setTranslatePoint({ x: 0, y: 0 });
    setIsDragging(false);
  };

  const startDrag = (e: React.MouseEvent<HTMLImageElement> | React.TouchEvent<HTMLImageElement>) => {
    if (!isZoomed) return;
    
    setIsDragging(true);
    
    if ('touches' in e) {
      setStartPoint({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    } else {
      setStartPoint({ x: e.clientX, y: e.clientY });
      e.preventDefault();
    }
  };

  const doDrag = (e: React.MouseEvent<HTMLImageElement> | React.TouchEvent<HTMLImageElement>) => {
    if (!isDragging || !isZoomed || !imgRef.current || !containerRef.current) return;
    
    let moveX, moveY;
    
    if ('touches' in e) {
      moveX = e.touches[0].clientX - startPoint.x + translatePoint.x;
      moveY = e.touches[0].clientY - startPoint.y + translatePoint.y;
    } else {
      moveX = e.clientX - startPoint.x + translatePoint.x;
      moveY = e.clientY - startPoint.y + translatePoint.y;
    }
    
    // Calculate boundaries to prevent dragging beyond image edges
    const imgRect = imgRef.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    
    const maxX = Math.max(0, (imgRect.width * 2 - containerRect.width) / 4);
    const maxY = Math.max(0, (imgRect.height * 2 - containerRect.height) / 4);
    
    // Apply boundaries
    moveX = Math.min(Math.max(moveX, -maxX), maxX);
    moveY = Math.min(Math.max(moveY, -maxY), maxY);
    
    imgRef.current.style.transform = `translate(${moveX}px, ${moveY}px) scale(${isZoomed ? 2 : 1})`;
  };

  const endDrag = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    if (imgRef.current) {
      const transformValue = imgRef.current.style.transform;
      const translateMatch = transformValue.match(/translate\(([^,]+)px,\s*([^)]+)px\)/);
      
      if (translateMatch && translateMatch.length === 3) {
        setTranslatePoint({
          x: parseFloat(translateMatch[1]),
          y: parseFloat(translateMatch[2])
        });
      }
    }
  };

  const toggleSlideshow = () => {
    if (isSlideshowPlaying) {
      stopSlideshow();
    } else {
      startSlideshow();
    }
  };

  const startSlideshow = () => {
    setIsSlideshowPlaying(true);
    slideshowIntervalRef.current = setInterval(() => {
      navigateGallery(1);
    }, 3000);
  };

  const stopSlideshow = () => {
    setIsSlideshowPlaying(false);
    if (slideshowIntervalRef.current) {
      clearInterval(slideshowIntervalRef.current);
      slideshowIntervalRef.current = null;
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/95 flex justify-center items-center z-50 opacity-100"
      onClick={handleBackdropClick}
    >
      <div className="viewer-controls absolute top-5 right-5 flex gap-4 z-10">
        <button 
          className="control-btn"
          onClick={toggleZoom}
          title="Zoom (Z)"
        >
          <i className="fas fa-search-plus"></i>
        </button>
        <button 
          className="control-btn"
          onClick={onClose}
          title="Close (ESC)"
        >
          <i className="fas fa-times"></i>
        </button>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-5 z-10">
        <button 
          className="nav-btn"
          onClick={() => navigateGallery(-1)}
          title="Previous (←)"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button 
          className="nav-btn"
          onClick={() => navigateGallery(1)}
          title="Next (→)"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      <div 
        ref={containerRef}
        className="relative max-w-[90%] max-h-[90%] flex justify-center items-center"
      >
        <img 
          ref={imgRef}
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className={`max-w-full max-h-[90vh] object-contain rounded-lg transition-transform duration-200 cursor-${isZoomed ? (isDragging ? 'grabbing' : 'move') : 'grab'}`}
          style={{ 
            transform: `scale(${isZoomed ? 2 : 1})` 
          }}
          onMouseDown={startDrag}
          onMouseMove={doDrag}
          onMouseUp={endDrag}
          onMouseLeave={endDrag}
          onTouchStart={startDrag}
          onTouchMove={doDrag}
          onTouchEnd={endDrag}
        />
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/70 text-white py-3 px-6 rounded-full text-base backdrop-blur-md max-w-[80%] text-center whitespace-nowrap overflow-hidden text-ellipsis">
        {images[currentIndex].title}
      </div>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-4 z-10 bg-black/50 py-2.5 px-5 rounded-full backdrop-blur-md">
        <button 
          className="slideshow-btn"
          onClick={() => navigateGallery(-1)}
          title="Previous"
        >
          <i className="fas fa-step-backward"></i>
        </button>
        <button 
          className={`slideshow-btn ${isSlideshowPlaying ? 'active' : ''}`}
          onClick={toggleSlideshow}
          title="Play Slideshow (P)"
        >
          <i className={`fas ${isSlideshowPlaying ? 'fa-pause' : 'fa-play'}`}></i>
        </button>
        <button 
          className="slideshow-btn"
          onClick={() => navigateGallery(1)}
          title="Next"
        >
          <i className="fas fa-step-forward"></i>
        </button>
      </div>
    </div>
  );
};

export default FullscreenViewer;
