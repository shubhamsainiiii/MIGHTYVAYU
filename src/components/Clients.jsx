/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const clients = [
  { name: "Emaar", logo: "/clients/emaar.png", },
  { name: "FAB", logo: "/clients/fab-logo.png" },
  {
    name: "Expo City Dubai",
    logo: "/clients/expo-city.png",
  },
  {
    name: "Cerruti 1881",
    logo: "/clients/cerruti-logo.avif",
  },
  {
    name: "Azerbaijan Tourism Board",
    logo: "/clients/azerbaijan-logo.png",
  },
  {
    name: "Peugeot",
    logo: "/clients/peugeot-logo.avif",
  },
  {
    name: "UAE Government Leaders Programme",
    logo: "/clients/uae-gov.png",
  },
  {
    name: "Dubai Police",
    logo: "/clients/dubai-police.png",
  },
  {
    name: "Enppi",
    logo: "/clients/enppi-logo.png",
  },
  {
    name: "Fujikura",
    logo: "/clients/fujikura-logo.png",
  },
  {
    name: "Alfanar",
    logo: "/clients/alfanar-logo.png",
  }
];

const Clients = () => {
  return (
    <section
      id="clients"
      className="py-20 bg-dark-lighter relative scroll-mt-28"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h4 className="text-primary font-bold uppercase tracking-widest mb-2">
            Trusted Partners
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our Clients
          </h2>
        </motion.div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {clients.map((client, index) => (
            <motion.a
              key={client.name}
              href={client.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="
                group rounded-xl
                h-27.5 md:h-30
                p-6 flex items-center justify-center
                border border-gray-800
                hover:border-primary/40
                hover:bg-white/5
                transition-all duration-500
              "
            >
              <LazyLoadImage
                effect="blur"
                src={client.logo}
                alt={client.name}
                className="
                  max-h-12 md:max-h-14
                  max-w-30
                  object-contain opacity-70
                  group-hover:opacity-100
                  transition-all duration-500
                "
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
