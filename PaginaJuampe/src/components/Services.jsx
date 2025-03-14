import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, image }) => (
  <motion.div 
    className="flex-shrink-0 w-[280px] sm:w-72 mx-2 bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 ease-in-out snap-center pointer-events-none"
    whileHover={{ 
      y: -10,
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" }
    }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    tabIndex="-1"
  >
    <img 
      src={image || "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=500"} 
      alt={title} 
      className="w-full h-40 sm:h-48 object-cover select-none pointer-events-none transform transition-transform duration-500 ease-in-out hover:scale-105"
      draggable="false"
    />
    <div className="p-4 sm:p-6 pointer-events-none">
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600">{description}</p>
    </div>
  </motion.div>
);

const ServiceSlider = ({ services }) => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        const container = containerRef.current;
        const nextIndex = (currentIndex + 1) % services.length;
        const scrollAmount = nextIndex * container.children[0].offsetWidth;
        
        container.scrollTo({
          left: scrollAmount,
          behavior: 'smooth'
        });
        
        setCurrentIndex(nextIndex);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, services.length]);

  return (
    <div 
      className="relative bg-white rounded-xl shadow-lg p-4 sm:p-6 overflow-hidden"
      tabIndex="-1"
    >
      <div 
        ref={containerRef} 
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide select-none -mx-2"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
          userSelect: 'none',
          touchAction: 'pan-x',
        }}
        tabIndex="-1"
      >
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

const Services = () => {
  const penalServices = [
    { 
      title: "Sucesiones",
      description: "Gestión integral de procesos sucesorios",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=500"
    },
    { 
      title: "Accidentes de tránsito",
      description: "Representación legal en accidentes",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=500"
    },
    { 
      title: "Familia",
      description: "Asesoramiento en derecho familiar",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=500"
    },
    { 
      title: "Divorcio",
      description: "Asesoramiento en derecho familiar",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=500"
    },
    { 
      title: "Herencias",
      description: "Asesoramiento en derecho familiar",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=500"
    }
  ];

  const civilServices = [
    { 
      title: "Tránsito",
      description: "Asesoría en casos de tránsito",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=500"
    },
    { 
      title: "Alquileres",
      description: "Contratos y conflictos de alquiler",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=500"
    },
    { 
      title: "Compra-venta",
      description: "Asesoramiento en transacciones",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=500"
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-800">
          Nuestros Servicios
        </h2>
        
        <div className="space-y-8 sm:space-y-12">
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-gray-800">Derecho Penal</h3>
            <ServiceSlider services={penalServices} />
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-gray-800">Derecho Civil</h3>
            <ServiceSlider services={civilServices} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 