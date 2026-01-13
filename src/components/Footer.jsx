import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import logo from "../assets/images/logo.webp";

const Footer = () => {
  /* ===== SCROLL ===== */
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth" });
  };

  /* ===== EXTERNAL ACTIONS ===== */
  const openEmail = () => {
    window.location.href = "mailto:info@mtsexb.com";
  };
  const openEmail2 = () => {
    window.location.href = "mailto:sachin@mtsexb.com";
  };

  const callPhone = () => {
    window.location.href = "tel:+971559281564";
  };
  const openSocial = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="bg-dark pt-20 pb-10 border-t border-gray-900">
      <div className="container mx-auto px-6">
        {/* ===== 3 COLUMN GRID ===== */}
        <div className="grid gap-12 mb-16 md:grid-cols-2 lg:grid-cols-3">
          {/* ===== BRAND ===== */}
          <div className="space-y-6">
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-3 text-left"
            >
              <img
                src={logo}
                alt="MIGHTYVAYU Logo"
                className="h-10 w-auto object-contain"
                loading="lazy"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white leading-none">
                  MIGHTYVAYU
                </span>
                <span className="text-[9px] tracking-widest text-primary uppercase">
                  Technical Services L.L.C
                </span>
              </div>
            </button>

            <p className="text-gray-400 leading-relaxed">
              MIGHTYVAYU TECHNICAL SERVICES L.L.C. Your premier partner for
              innovative technical solutions, interior fit-outs, and
              maintenance services.
            </p>

            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, idx) => (
                <button
                  key={idx}
                  onClick={() =>
                    openSocial(
                      ["https://facebook.com", "https://instagram.com", "https://linkedin.com", "https://twitter.com"][idx]
                    )
                  }
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer"
                >
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>

          {/* ===== QUICK LINKS ===== */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                { label: "Home", id: "home" },
                { label: "About Us", id: "about" },
                { label: "Services", id: "services" },
                { label: "Why Choose Us", id: "why-choose-us" },
                { label: "Contact Us", id: "contact" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-400 hover:text-primary transition-all duration-500 cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ===== CONTACT INFO ===== */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div className="flex flex-col items-start gap-1">
                  <button
                    onClick={openEmail}
                    className="hover:text-primary transition-all duration-500 cursor-pointer"
                  >
                    info@mtsexb.com
                  </button>
                  <button
                    onClick={openEmail2}
                    className="hover:text-primary transition-all duration-500 cursor-pointer"
                  >
                    sachin@mtsexb.com
                  </button>
                </div>
              </li>

              <li className="flex gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <button
                  onClick={callPhone}
                  className="hover:text-primary transition-all duration-500 cursor-pointer"
                >
                  +971 55 928 1564
                </button>
              </li>

              <li className="flex gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>
                  Business Bay, Iris Bay Tower, Deirah, Dubai - UAE
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* ===== COPYRIGHT ===== */}
        <div className="border-t border-gray-800 pt-3 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} MIGHTYVAYU TECHNICAL SERVICES LLC. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
