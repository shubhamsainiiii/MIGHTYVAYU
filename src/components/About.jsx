/* eslint-disable no-unused-vars */
import React from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import aboutImg from '../assets/images/about.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-1 bg-dark relative overflow-hidden scroll-mt-28"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h4 className="text-primary font-bold uppercase tracking-widest mb-2">
            About Us
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold">Who We Are</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="group aspect-square rounded-2xl overflow-hidden border-4 border-dark-lighter shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
              <LazyLoadImage
                effect="blur"
                wrapperProps={{
                  className: "w-full h-full",
                  style: { transitionDelay: "1s" },
                }}
                // src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                src={aboutImg}
                alt="Technical Team"
                className="
        w-full h-full object-cover
        transition-transform duration-700 ease-out
        group-hover:scale-110
      "
              />
            </div>
          </motion.div>


          {/* RIGHT CONTENT */}
          <div className="space-y-8">
            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-white">
                ABOUT MIGHTYVAYU
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                MightyVayu Technical Services is a full-service agency specializing in innovative design and build solutions for exceptional results. We operate across trade shows, events of all sizes, conferences, and retail architecture, offering expertise in both temporary and permanent indoor/outdoor structures. Every project is meticulously crafted to meet your exact requirements while ensuring cost efficiency.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="border-l-4 border-primary pl-6"
            >
              <h3 className="text-2xl font-bold text-primary mb-2">
                Our Mission
              </h3>
              <p className="text-gray-400">
                To craft bespoke design and build solutions that surpass client expectations, combining creativity, expertise, and precision to deliver exceptional results, drive success, and create lasting impressions.
              </p>
            </motion.div>

            {/* WHY WE ARE DIFFERENT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="text-xl font-bold text-white mb-4">
                Why Clients Trust Us
              </h4>

              <ul className="space-y-3">
                {[
                  "Experienced and certified technical professionals",
                  "Timely project delivery with transparent communication",
                  "End-to-end solutions from planning to execution",
                  "Commitment to safety, quality, and compliance",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-400"
                  >
                    <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
