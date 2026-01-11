// /* eslint-disable no-unused-vars */
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

// const services = [
//   {
//     id: 1,
//     title: 'Technical Maintenance',
//     description: 'Comprehensive maintenance solutions for HVAC, electrical, and plumbing systems. We ensure your facilities run smoothly with our preventive and reactive maintenance services.',
//     image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80'
//   },
//   {
//     id: 2,
//     title: 'Interior Fit-Outs',
//     description: 'Transforming spaces with high-quality interior fit-out services for offices, retail, and residential properties. From concept to completion, we handle all aspects of the build.',
//     image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80'
//   },
//   {
//     id: 3,
//     title: 'Exhibition & Event Support',
//     description: 'Providing technical support and setup for exhibitions and events. We handle the technical infrastructure to ensure your event is a success.',
//     image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80'
//   }
// ];

// const Services = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % services.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
//   };

//   return (
//     <section id="services" className="py-20 bg-dark relative">
//       <div className="container mx-auto px-6">
//         <div className="flex justify-between items-end mb-12">
//           <div>
//             <h4 className="text-primary font-bold uppercase tracking-widest mb-2">Our Expertise</h4>
//             <h2 className="text-4xl md:text-5xl font-bold">Services We Offer</h2>
//           </div>
//           <div className="flex gap-4">
//             <span className="text-primary font-bold text-xl">
//               {currentIndex + 1} <span className="text-gray-600 text-base">/ {services.length}</span>
//             </span>
//           </div>
//         </div>

//         <div className="relative">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentIndex}
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -20 }}
//               transition={{ duration: 0.5 }}
//               className="grid md:grid-cols-2 gap-8 bg-dark-lighter rounded-2xl overflow-hidden shadow-2xl border border-gray-800"
//             >
//               {/* Text Side */}
//               <div className="p-8 md:p-12 flex flex-col justify-center">
//                 <h3 className="text-3xl font-bold text-primary mb-6">{services[currentIndex].title}</h3>
//                 <p className="text-gray-300 mb-8 leading-relaxed">
//                   {services[currentIndex].description}
//                 </p>
//                 <a href="#contact" className="inline-flex items-center text-white hover:text-primary transition-all duration-500 group font-semibold">
//                   Get a Quote <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                 </a>
//               </div>

//               {/* Image Side */}
//               <div className="relative h-64 md:h-auto overflow-hidden">
//                 <img
//                   src={services[currentIndex].image}
//                   alt={services[currentIndex].title}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-linear-to-r from-dark-lighter to-transparent" />
//               </div>
//             </motion.div>
//           </AnimatePresence>

//           {/* Controls */}
//           <div className="absolute -bottom-16 left-0 flex gap-4">
//             <button
//               onClick={prevSlide}
//               className="w-12 h-12 rounded-full bg-dark-lighter hover:bg-primary text-white flex items-center justify-center transition-all border border-gray-700 hover:border-primary cursor-pointer duration-500"
//             >
//               <ChevronLeft size={20} />
//             </button>
//             <button
//               onClick={nextSlide}
//               className="w-12 h-12 rounded-full bg-dark-lighter hover:bg-primary text-white flex items-center justify-center transition-all border border-gray-700 hover:border-primary cursor-pointer duration-500"
//             >
//               <ChevronRight size={20} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;


/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Technical Maintenance",
    description:
      "Comprehensive maintenance solutions for HVAC, electrical, and plumbing systems. We ensure your facilities run smoothly with our preventive and reactive maintenance services.",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Interior Fit-Outs",
    description:
      "Transforming spaces with high-quality interior fit-out services for offices, retail, and residential properties. From concept to completion, we handle all aspects of the build.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Exhibition & Event Support",
    description:
      "Providing technical support and setup for exhibitions and events. We handle the technical infrastructure to ensure your event is a success.",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80",
  },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % services.length);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);

  /* ===== SPA SMOOTH SCROLL (NO HASH) ===== */
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="services"
      className="py-20 bg-dark relative scroll-mt-28"
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h4 className="text-primary font-bold uppercase tracking-widest mb-2">
              Our Expertise
            </h4>
            <h2 className="text-4xl md:text-5xl font-bold">
              Services We Offer
            </h2>
          </div>

          <span className="text-primary font-bold text-xl">
            {currentIndex + 1}{" "}
            <span className="text-gray-600 text-base">
              / {services.length}
            </span>
          </span>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8 bg-dark-lighter rounded-2xl overflow-hidden shadow-2xl border border-gray-800"
            >
              {/* Text Side */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-primary mb-6">
                  {services[currentIndex].title}
                </h3>

                <p className="text-gray-300 mb-8 leading-relaxed">
                  {services[currentIndex].description}
                </p>

                <button
                  onClick={() => scrollToSection("contact")}
                  className="inline-flex items-center text-white hover:text-primary transition-all duration-500 group font-semibold w-fit"
                >
                  Get a Quote
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Image Side */}
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img
                  src={services[currentIndex].image}
                  alt={services[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-r from-dark-lighter to-transparent" />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute -bottom-16 left-0 flex gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-dark-lighter hover:bg-primary text-white flex items-center justify-center transition-all border border-gray-700 hover:border-primary duration-500"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-dark-lighter hover:bg-primary text-white flex items-center justify-center transition-all border border-gray-700 hover:border-primary duration-500"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

