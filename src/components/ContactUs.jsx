/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
  return (
    <section id="contact" className="py-20 bg-dark relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-primary font-bold uppercase tracking-widest mb-2">Contact Us</h4>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to transform your vision into reality?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Fill the form to get in touch with MIGHTYVAYU experts to guide you through or send us an email at <b className='text-primary'>info@mts.ae</b>
            </p>

            <div className="space-y-4 text-gray-400">
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@mts.ae" className="hover:text-primary transition-all duration-500">info@mts.ae</a>
              </p>

              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+971559281564" className="hover:text-primary transition-all duration-500">+971 559 281 564</a>
              </p>
              <p><strong>Address:</strong> Businnes Bay, Iris Bay Tower, Deirah, Dubai - UAE</p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 bg-dark-lighter p-8 rounded-2xl border border-gray-800 shadow-2xl"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Your Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Your Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your number"
                  className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">How Can We Help You?</label>
              <textarea
                id="message"
                rows="4"
                placeholder="Type here..."
                className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
              ></textarea>
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="gdpr"
                className="mt-1 w-4 h-4 rounded border-gray-700 bg-dark text-primary focus:ring-primary"
              />
              <label htmlFor="gdpr" className="text-sm text-gray-400">
                I agree to the terms and conditions of the site and for my personal data being processed in order to complete this request for offer.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-amber-600 text-white font-bold py-4 rounded-lg transition-all duration-500 transform hover:scale-[1.02] shadow-lg shadow-primary/25 cursor-pointer"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
