// /* eslint-disable no-unused-vars */
// import React from 'react';
// import { motion } from 'framer-motion';

// const About = () => {
//   return (
//     <section id="about" className="py-20 bg-dark relative overflow-hidden">
//       {/* Decorative Background Elements */}
//       <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-primary/5 to-transparent pointer-events-none" />

//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mb-16"
//         >
//           <h4 className="text-primary font-bold uppercase tracking-widest mb-2">About Us</h4>
//           <h2 className="text-4xl md:text-5xl font-bold">Who We Are</h2>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Image Circle */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="relative"
//           >
//             <div className="aspect-square rounded-2xl overflow-hidden border-4 border-dark-lighter shadow-2xl shadow-(--color-primary)/20 rotate-3 hover:rotate-0 transition-all duration-700">
//               <img
//                 src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
//                 alt="Technical Team"
//                 className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
//               />
//             </div>
//             {/* Floating Badge or Element */}
//             <div className="absolute -bottom-6 -left-6 bg-primary text-white p-8 rounded-lg shadow-xl hidden md:block">
//               <span className="font-bold text-3xl block">Excellence</span>
//               <span className="text-sm uppercase tracking-wider">In Every Detail</span>
//             </div>
//           </motion.div>

//           {/* Text Content */}
//           <div className="space-y-8">
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <h3 className="text-2xl font-bold mb-4 text-white">MIGHTYVAYU TECHNICAL SERVICES L.L.C</h3>
//               <p className="text-gray-300 leading-relaxed text-lg">
//                 MIGHTYVAYU is a premier technical services provider in Dubai, dedicated to delivering top-tier maintenance, fit-out, and specialized technical solutions. Our team of skilled professionals ensures that every project, from residential maintenance to commercial fit-outs, is executed with precision and care.
//               </p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="border-l-4 border-primary pl-6"
//             >
//               <h3 className="text-2xl font-bold text-primary mb-2">Our Mission</h3>
//               <p className="text-gray-400">
//                 To provide reliable, innovative, and high-quality technical services that exceed client expectations, ensuring the longevity and efficiency of your assets through our expert solutions.
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;



/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-dark relative overflow-hidden scroll-mt-28"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6">
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
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden border-4 border-dark-lighter shadow-2xl rotate-3 hover:rotate-0 transition-all">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                alt="Technical Team"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-white">
                MIGHTYVAYU TECHNICAL SERVICES L.L.C
              </h3>
              <p className="text-gray-300 text-lg">
                MIGHTYVAYU is a premier technical services provider in Dubai,
                delivering top-tier maintenance, fit-out, and technical
                solutions with precision and care.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="border-l-4 border-primary pl-6"
            >
              <h3 className="text-2xl font-bold text-primary mb-2">
                Our Mission
              </h3>
              <p className="text-gray-400">
                To provide reliable, innovative, and high-quality technical
                services that exceed client expectations.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
