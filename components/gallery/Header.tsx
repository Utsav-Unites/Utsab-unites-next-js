
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Header: React.FC = () => {
  return (
    <header className="relative h-screen min-h-[600px] flex flex-col justify-center items-center text-center text-white p-0 px-5 overflow-hidden isolate"
          style={{ 
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/img/mankucover.jpg")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat' 
          }}>
      <Navbar />
      
      <div className="absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-t from-festival-light to-transparent z-[1]"></div>
      
      <div className="absolute w-full h-full top-0 left-0 z-[-1] overflow-hidden">
        <div className="absolute w-[200px] h-[200px] rounded-full blur-[40px] opacity-60 bg-festival-primary top-[20%] left-[10%] animate-float"></div>
        <div className="absolute w-[300px] h-[300px] rounded-full blur-[40px] opacity-60 bg-festival-secondary bottom-[15%] right-[10%] animate-float animation-reverse animation-delay-1000"></div>
        <div className="absolute w-[150px] h-[150px] rounded-full blur-[40px] opacity-60 bg-white top-[60%] left-[30%] animate-float animation-delay-500"></div>
      </div>
      
      <div className="relative z-[2] max-w-[800px] animate-fadeInUp">
        <h1 className="font-montserrat text-[clamp(2.5rem,5vw,4.5rem)] mb-4 shadow-[var(--shadow-text)] leading-tight tracking-wider bg-gradient-to-r from-white to-festival-primary bg-clip-text text-transparent relative">
          Jagadhatri Puja Gallery
          <span className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-[100px] h-1 bg-gradient-to-r from-festival-primary to-festival-secondary rounded-md"></span>
        </h1>
        <p className="text-[clamp(1rem,2vw,1.3rem)] mt-8 mb-8 opacity-90 max-w-[600px] mx-auto">
          Immerse yourself in the divine beauty of our celebrations through these captivating moments captured with devotion
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#gallery" className="btn btn-primary">
            <i className="fas fa-images"></i> Explore Gallery
          </a>
          <a href="#contact" className="btn btn-secondary">
            <i className="fas fa-calendar-alt"></i> Event Schedule
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
