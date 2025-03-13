import { FaLinkedin, FaFacebook, FaInstagram, FaBalanceScale } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="pt-32 pb-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="md:w-1/2 lg:w-2/5">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-xl opacity-70 blur-lg"></div>
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1593115057322-e94b77572f20?q=80&w=500"
                  alt="Abogado Perfil" 
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 lg:w-3/5">
            <div className="flex items-center gap-3 mb-6">
              <FaBalanceScale className="text-gray-700 text-3xl" />
              <h2 className="text-4xl font-bold text-gray-800">
                Dr. Juan Martinez
              </h2>
            </div>

            <div className="space-y-4 mb-8">
              <p className="text-gray-600 text-lg leading-relaxed">
                Con más de 15 años de experiencia en derecho penal y civil, ofreciendo soluciones legales efectivas y personalizadas para cada cliente.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Especializado en casos complejos de derecho penal y civil, con un historial comprobado de éxito en la defensa de los derechos de nuestros clientes.
              </p>
            </div>
            
            <div className="flex gap-6">
              <a 
                href="#" 
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg"
              >
                <FaLinkedin size={24} />
                <span>LinkedIn</span>
              </a>
              <a 
                href="#" 
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg"
              >
                <FaFacebook size={24} />
                <span>Facebook</span>
              </a>
              <a 
                href="#" 
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg"
              >
                <FaInstagram size={24} />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;