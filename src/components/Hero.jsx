/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden -mt-6"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-b from-dark/90 via-dark/70 to-dark z-10" />
        <img
          src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80"
          srcSet="
            https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=640 640w,
            https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=1200 1200w,
            https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80 1920w
          "
          sizes="100vw"
          alt="Exhibitions and Events Background"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="text-white">MIGHTYVAYU</span> <br />
          <span className="text-[var(--color-primary)]">TECHNICAL SERVICES LLC</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          Your expert partner for world-class Exhibitions, Events Management,
          and Technical Fit-out services in Dubai.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button
            onClick={() => scrollToSection("about")}
            className="bg-primary hover:bg-amber-600 text-white px-8 py-3 rounded-full font-bold text-lg transition-all duration-500 hover:scale-105 shadow-lg shadow-primary/30 cursor-pointer"
          >
            About More
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-linear-to-b from-transparent via-primary to-transparent" />
        <span className="text-xs uppercase tracking-widest text-gray-400">
          Scroll Now
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="text-primary" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
