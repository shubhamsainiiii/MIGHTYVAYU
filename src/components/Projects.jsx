/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const projects = [
  {
    id: 1,
    title: "Exhibition Booth A",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Exhibition Booth B",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Exhibition Booth C",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    title: "Exhibition Booth D",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    title: "Exhibition Booth E",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    title: "Exhibition Booth F",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80",
  },
  {
    id: 7,
    title: "Exhibition Booth G",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80",
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < itemsPerPage; i++) {
      visible.push(projects[(currentIndex + i) % projects.length]);
    }
    return visible;
  };

  return (
    <section id="projects" className="py-20 bg-dark relative scroll-mt-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h4 className="text-primary font-bold uppercase tracking-widest mb-2">
            Our Portfolio
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our Previous Projects
          </h2>
        </motion.div>

        <div className="relative">
          {/* Slider Content */}
          <div className="flex justify-center gap-8 md:gap-12 overflow-hidden py-8">
            <AnimatePresence mode="popLayout">
              {getVisibleProjects().map((project, index) => (
                <motion.div
                  key={`${project.id}-${index}`}
                  initial={{ opacity: 0, scale: 0.8, x: 50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="flex justify-center"
                >
                  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-dark-lighter shadow-2xl group cursor-pointer shrink-0">
                    <LazyLoadImage
                      effect="blur"
                      src={project.image}
                      alt={project.title}
                      wrapperProps={{
                        style: { display: "block", width: "100%", height: "100%" }
                      }}
                      className="
      w-full h-full object-cover
      transform-gpu
      transition-transform duration-700 ease-out
      will-change-transform
    "
                    />
                    <div className="
    absolute inset-0 bg-black/40
    opacity-0 group-hover:opacity-100
    transition-opacity duration-300 ease-out
    flex items-center justify-center
    hover:scale-105
  ">

                    </div>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Controls */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 md:-left-4 -translate-y-1/2 w-12 h-12 rounded-full bg-dark-lighter/80 hover:bg-primary text-white flex items-center justify-center transition-all border border-gray-700 hover:border-primary backdrop-blur-sm z-10"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 md:-right-4 -translate-y-1/2 w-12 h-12 rounded-full bg-dark-lighter/80 hover:bg-primary text-white flex items-center justify-center transition-all border border-gray-700 hover:border-primary backdrop-blur-sm z-10"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Indicators */}
        <div className="flex justify-center gap-3 mt-10">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? "bg-primary w-8" : "bg-gray-600 hover:bg-gray-400"
                }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
