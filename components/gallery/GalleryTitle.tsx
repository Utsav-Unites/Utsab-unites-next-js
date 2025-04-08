
const GalleryTitle: React.FC = () => {
  return (
    <section id="gallery" className="text-center py-20 px-5 bg-festival-light relative">
      <h2 className="font-playfair text-[clamp(2rem,4vw,3.5rem)] mb-6 relative inline-block">
        Jagadhatri Puja <span className="text-festival-primary">Photo Gallery</span>
        <span className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-[80px] h-1 bg-gradient-to-r from-festival-primary to-festival-secondary rounded-md"></span>
      </h2>
      <p className="max-w-[700px] mx-auto text-gray-600 text-lg">
        Explore the vibrant moments captured during our celebrations. Each photo tells a unique story of devotion and community.
      </p>
    </section>
  );
};

export default GalleryTitle;
