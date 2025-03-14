import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-gray-800 fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="relative w-12 h-12 md:w-14 md:h-14">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full opacity-70 blur"></div>
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=500"
                  alt="Logo"
                  className="relative w-full h-full rounded-full object-cover border-2 border-gray-200"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                Abogado Negri
              </span>
              <span className="text-sm text-gray-500 hidden md:block">
                Derecho Civil y Penal
              </span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors px-3 py-2 text-lg">
                Quién Soy
              </a>
              <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors px-3 py-2 text-lg">
                Servicios
              </a>
              <a href="#contact" className="bg-gray-800 text-white hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors text-lg">
                Contacto
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-white border-t border-gray-100 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#about" 
            className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md transition-colors">
            Quién Soy
          </a>
          <a href="#services" 
            className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md transition-colors">
            Servicios
          </a>
          <a href="#contact" 
            className="block bg-gray-800 text-white hover:bg-gray-700 px-3 py-2 rounded-md transition-colors">
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;