import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-festival-dark text-white text-center py-16 px-5 mt-16 relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-festival-primary to-festival-secondary"></div>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-3xl font-bold mb-5 text-festival-primary flex items-center justify-center gap-3">
          <i className="fas fa-camera-retro"></i> Utsav Unites
        </div>
        <div className="flex justify-center gap-8 mb-8 flex-wrap">
          <Link href="/" legacyBehavior>
            <a className="text-white no-underline transition-all duration-300 text-base hover:text-festival-primary">
              Home
            </a>
          </Link>
          <Link href="/gallery" legacyBehavior>
            <a className="text-white no-underline transition-all duration-300 text-base hover:text-festival-primary">
              Gallery
            </a>
          </Link>
          <a href="#gallery" className="text-white no-underline transition-all duration-300 text-base hover:text-festival-primary">
            Photos
          </a>
          <a href="#contact" className="text-white no-underline transition-all duration-300 text-base hover:text-festival-primary">
            Contact
          </a>
        </div>
        <div className="flex justify-center gap-5 mb-8">
          <a href="#" className="text-white text-xl transition-all duration-300 w-12 h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-festival-primary hover:text-festival-darker hover:-translate-y-1.5">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-white text-xl transition-all duration-300 w-12 h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-festival-primary hover:text-festival-darker hover:-translate-y-1.5">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-white text-xl transition-all duration-300 w-12 h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-festival-primary hover:text-festival-darker hover:-translate-y-1.5">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-white text-xl transition-all duration-300 w-12 h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-festival-primary hover:text-festival-darker hover:-translate-y-1.5">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        <p className="text-sm opacity-70 mt-5">
          &copy; 2024 Jagadhatri Puja | Designed by{' '}
          <a href="#" className="text-festival-primary no-underline font-medium">
            Utsav Unite&apos;s Members
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
