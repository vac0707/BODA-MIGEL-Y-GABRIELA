
import React from 'react';

const LocationRSVP: React.FC = () => {
  return (
    <section className="px-6 py-16 text-center bg-white space-y-12">
      <div className="space-y-6">
        <div className="flex justify-center mb-4">
          <img src="https://www.transparentpng.com/download/watercolor-flower/watercolor-floral-divider-png-17.png" alt="Divider" className="w-48 h-auto opacity-60" />
        </div>
        
        <h3 className="font-serif text-3xl text-[#7B8C6E]">Ceremonia & Recepción</h3>
        
        <div className="space-y-2">
          <p className="font-sans font-semibold text-[#B8860B]">HORA:</p>
          <p className="text-xl font-serif">1:00 p. m.</p>
        </div>

        <div className="space-y-4 max-w-xs mx-auto">
          <p className="font-sans font-semibold text-[#B8860B]">LUGAR:</p>
          <p className="font-serif leading-relaxed">
            Catedral de Nuestra Señora del Rosario – Diócesis de Abancay
          </p>
          
          <a 
            href="https://maps.app.goo.gl/G3eA9XrvFhyh8mZP9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[#7B8C6E] text-white px-8 py-3 rounded-full font-sans text-sm tracking-widest hover:bg-[#5E6D54] transition-colors shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>VER UBICACIÓN</span>
          </a>
        </div>
      </div>

      <div className="bg-[#FDFBF7] p-8 rounded-3xl border border-[#E8D5C4] shadow-sm space-y-6">
        <h3 className="font-serif text-2xl text-[#7B8C6E]">Confirmación</h3>
        <p className="font-sans text-sm text-[#4A4A4A] italic">Agradeceríamos confirmar su asistencia antes del 10 de enero de 2026.</p>
        
        <div className="space-y-4">
          <a 
            href="https://wa.me/qr/6RFCERSFATCJK1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-3 bg-[#25D366] text-white px-6 py-4 rounded-xl font-sans font-bold hover:scale-105 transition-transform shadow-xl animate-bounce-subtle"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
            </svg>
            <span>Confirmar asistencia por WhatsApp</span>
          </a>
          <p className="text-sm text-[#4A4A4A] mt-4">
            O también puedes confirmar al <span className="font-bold text-[#B8860B]">932 350 348</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocationRSVP;
