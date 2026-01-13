/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const services = [
  {
    id: 1,
    title: "Custom Exhibition Stands",
    description:
      "At MIGHTYVAYU Technical Services LLC, we deliver end-to-end corporate stand solutions, ensuring flawless execution from concept to completion. Our expertise in custom stand design & build allows us to transform your brand vision into impactful, audience engaging exhibits—whether for prototypes or on-site construction. Beyond stand fabrication, we offer full-scale exhibition management, including scenography, venue coordination, and turnkey project delivery. Supported by trusted partnerships and in-house production, we guarantee on-time, onbudget results without compromising quality or creativity. Your success starts with a stand that speaks louder than words—let's build it together.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Events",
    description:
      "At MIGHTYVAYU, we are passionate about creating impactful and memorable corporate events. Our innovative approach and attention to detail ensure that every event we design and execute leaves a lasting impression. Whether you're hosting a corporate gala, a product launch, or a team-building workshop, we work closely with clients to understand their objectives and create custom-tailored experiences that resonate with attendees. From concept development to execution, MIGHTYVAYU handles every aspect of your event with precision and professionalism, ensuring that it exceeds expectations. Trust us to make your corporate event a resounding success.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Interior/Exterior",
    description:
      "At MIGHTYVAYU, we are your trusted partner in creating exceptional interior environments. We specialize in delivering bespoke fit-out solutions that enhance the functionality, aesthetics, and overall ambiance of your space. Whether you're transforming a retail showroom, corporate workspace, or hospitality establishment, we collaborate closely with you to understand your unique vision and devise tailored strategies that align with your aspirations and goals. From initial concept to final implementation, MIGHTYVAYU ensures a seamless execution of your interior fit-out project, delivering results that exceed your expectations and contribute to the success of your business.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80",
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
                  className="inline-flex items-center text-white hover:text-primary transition-all duration-500 cursor-pointer group font-semibold w-fit"
                >
                  Get a Quote
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Image Side */}
              <div className="relative h-64 md:h-auto overflow-hidden">
                <LazyLoadImage
                  effect="blur"
                  wrapperProps={{ style: { transitionDelay: "1s" } }}
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
              className="w-12 h-12 rounded-full bg-dark-lighter hover:bg-primary text-white flex items-center justify-center transition-all border border-gray-700 hover:border-primary duration-500 cursor-pointer"
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

