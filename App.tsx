
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Phrase from './components/Phrase';
import CountdownCalendar from './components/CountdownCalendar';
import PhotoCarousel from './components/PhotoCarousel';
import MusicPlayer from './components/MusicPlayer';
import LocationRSVP from './components/LocationRSVP';
import DressCode from './components/DressCode';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="min-h-screen selection:bg-[#E8D5C4] selection:text-[#7B8C6E]">
      <MusicPlayer />
      
      <main className="max-w-md mx-auto bg-white shadow-2xl relative">
        {/* Background Decorative Flowers (Simulated with absolute elements or SVG) */}
        <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none z-0 opacity-40">
           <img 
            src="https://www.transparentpng.com/download/watercolor-flower/flower-watercolor-transparent-background-4.png" 
            className="w-48 h-48 -translate-x-12 -translate-y-12 rotate-45"
            alt="Decoration"
           />
        </div>

        <Hero />
        
        <Phrase 
          text="“El amor verdadero no es encontrar a la persona perfecta, sino aprender a ver perfecta a la persona que amas.”" 
          className="mt-12 mb-16"
        />

        <CountdownCalendar targetDate="2026-01-21T13:00:00" />

        <div className="py-16">
          <PhotoCarousel />
        </div>

        <LocationRSVP />

        <DressCode />

        <Footer />

        <div className="absolute bottom-0 right-0 w-full overflow-hidden pointer-events-none z-0 opacity-40">
           <img 
            src="https://www.transparentpng.com/download/watercolor-flower/flower-watercolor-transparent-background-4.png" 
            className="w-48 h-48 translate-x-12 translate-y-12 -rotate-135 ml-auto"
            alt="Decoration"
           />
        </div>
      </main>
    </div>
  );
};

export default App;
