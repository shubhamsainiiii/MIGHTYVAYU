/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const points = [
  {
    title: "Innovative Designs",
    desc: "We create unique, eye-catching stands tailored to your brand identity.",
  },
  {
    title: "Expert Project Management",
    desc: "Our team ensures smooth execution from concept to completion.",
  },
  {
    title: "Comprehensive Marketing Planning",
    desc: "Our stands are designed with brand engagement and marketing strategy in mind.",
  },
  {
    title: "Cost-Effective Solutions",
    desc: "Custom and rental options to fit your budget.",
  },
  {
    title: "End-to-End Support",
    desc: "From design to installation, we provide full service solutions.",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      id="why-choose-us"
      className="relative py-24 bg-dark scroll-mt-28 overflow-hidden"
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80"
          alt="Events and Exhibition Setup"
          className="w-full h-full object-cover opacity-80"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h4 className="text-primary font-bold uppercase tracking-widest mb-2">
            Our Advantage
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Why Choose Us?
          </h2>
        </motion.div>

        {/* Content Box */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="
            max-w-3xl
            bg-dark/40 backdrop-blur-lg
            border border-gray-800
            rounded-2xl
            p-8 md:p-10
            space-y-7
          "
        >
          {points.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex gap-4"
            >
              <CheckCircle className="text-primary w-6 h-6 mt-1 shrink-0" />

              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
