/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Spiral as Hamburger } from "hamburger-react";
import logo from "../assets/images/logo.webp";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Services", id: "services" },
    { name: "Why Choose Us", id: "why-choose-us" },
    { name: "Contact Us", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* HEADER BAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            className="h-12 cursor-pointer"
            onClick={() => scrollToSection("home")}
          />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="text-sm text-gray-300 hover:text-primary transition-all duration-500 cursor-pointer uppercase"
              >
                {link.name}
              </button>
            ))}

            <button
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-white px-6 py-2 rounded-full hover:scale-105 transition-all duration-500 cursor-pointer"
            >
              Get Consultation
            </button>
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden relative z-60">
            <div className="rounded-full p-2">
              <Hamburger
                toggled={isMobileMenuOpen}
                toggle={setIsMobileMenuOpen}
                color="#ffffff"
                size={22}
                rounded
              />
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-dark pt-24 flex items-start justify-center"
          >
            <ul className="flex flex-col gap-8 text-center mt-10">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ x: 80, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-2xl text-gray-300 hover:text-primary transition"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
