import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-dark pt-20 pb-10 border-t border-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-2 group">
              <img
                src={logo}
                alt="MIGHTYVAYU Logo"
                className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tighter leading-none text-white">MIGHTYVAYU</span>
                <span className="text-[9px] font-medium tracking-widest text-primary uppercase leading-none">Technical Services L.L.C</span>
              </div>
            </a>
            <p className="text-gray-400 leading-relaxed">
              MIGHTYVAYU TECHNICAL SERVICES L.L.C. Your premier partner for innovative technical solutions, interior fit-outs, and maintenance services.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Link</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Service', 'Why Choose Us', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-400 hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              {/* Email */}
              <li className="flex gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="mailto:info@mts.ae" className="hover:text-primary transition-all duration-500 cursor-pointer">
                  info@mts.ae
                </a>
              </li>

              {/* Phone */}
              <li className="flex gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="tel:+971559281564"
                  className="hover:text-primary transition-all duration-500 cursor-pointer"
                >
                  +971 55 928 1564
                </a>
              </li>
              <li className="flex gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Businnes Bay, Iris Bay Tower, Deirah, Dubai - UAE</span>
              </li>
            </ul>
          </div>

          {/* Newsletter or Map (Optional - keeping simple for now) */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to get latest updates</p>
            <div className="flex">
              <input type="email" placeholder="Email address" className="bg-gray-800 text-white px-4 py-2 rounded-l-lg w-full focus:outline-none border border-gray-700 focus:border-primary" />
              <button className="bg-primary px-4 py-2 rounded-r-lg text-white font-bold hover:bg-amber-600 transition-all duration-500 cursor-pointer">Go</button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} MIGHTYVAYU TECHNICAL SERVICES. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
