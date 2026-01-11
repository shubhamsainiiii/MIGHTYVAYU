// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Spiral as Hamburger } from "hamburger-react";
// import logo from "../assets/images/logo.webp";

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "Home", href: "#home" },
//     { name: "About Us", href: "#about" },
//     { name: "Services", href: "#services" },
//     { name: "Why Choose Us", href: "#why-choose-us" },
//     { name: "Contact Us", href: "#contact" },
//   ];

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
//         ? "bg-dark/70 backdrop-blur-md py-4 shadow-lg"
//         : "bg-transparent py-6"
//         }`}
//     >
//       <div className="container mx-auto px-6 flex justify-between items-center">
//         {/* Logo */}
//         <img src={logo} alt="Logo" className="h-14" />

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex items-center gap-8">
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className="text-sm text-gray-300 hover:text-primary transition uppercase"
//             >
//               {link.name}
//             </a>
//           ))}
//           <a
//             href="#contact"
//             className="bg-primary text-white px-6 py-2 rounded-full hover:scale-105 transition"
//           >
//             Get Consultation
//           </a>
//         </nav>

//         {/* Mobile Hamburger */}
//         <div className="md:hidden">
//           <Hamburger
//             toggled={isMobileMenuOpen}
//             toggle={setIsMobileMenuOpen}
//             color="#ffffff"
//             size={26}
//           />
//         </div>
//       </div>

//       {/* Mobile Menu (Right Side Slide) */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <>
//             {/* Overlay */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 0.6 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setIsMobileMenuOpen(false)}
//               className="fixed inset-0 bg-black z-40"
//             />

//             {/* Drawer */}
//             <motion.div
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ type: "spring", stiffness: 100 }}
//               className="fixed top-0 right-0 h-full w-[75%] bg-dark z-50 p-6"
//             >
//               <ul className="flex flex-col gap-6 mt-16">
//                 {navLinks.map((link, index) => (
//                   <motion.li
//                     key={link.name}
//                     initial={{ x: 50, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ delay: index * 0.1 }}
//                   >
//                     <a
//                       href={link.href}
//                       className="text-lg text-gray-300 hover:text-primary"
//                       onClick={() => setIsMobileMenuOpen(false)}
//                     >
//                       {link.name}
//                     </a>
//                   </motion.li>
//                 ))}
//               </ul>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Header;

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

  /* ========= SMOOTH SCROLL ========= */
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50
        bg-dark/80 backdrop-blur-md
        py-5 shadow-lg
      "
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="h-14 cursor-pointer"
          onClick={() => scrollToSection("home")}
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-sm text-gray-300 hover:text-primary transition uppercase"
            >
              {link.name}
            </button>
          ))}

          <button
            onClick={() => scrollToSection("contact")}
            className="bg-primary text-white px-6 py-2 rounded-full hover:scale-105 transition"
          >
            Get Consultation
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <Hamburger
            toggled={isMobileMenuOpen}
            toggle={setIsMobileMenuOpen}
            color="#ffffff"
            size={26}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark z-40 flex items-center justify-center"
          >
            <ul className="flex flex-col gap-8 text-center">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ x: 80, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.12 }}
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
    </header>
  );
};

export default Header;
