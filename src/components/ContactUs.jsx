/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const openEmail = () => {
    window.location.href = "mailto:info@mts.ae";
  };

  const callPhone = () => {
    window.location.href = "tel:+971559281564";
  };

  /* ===== WHATSAPP SUBMIT ===== */
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    if (!name || !email || !phone || !message) {
      alert("Please fill all fields");
      return;
    }

    const whatsappMessage =
      `New Contact Inquiry from your Website \n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n\n` +
      `Message:\n${message}`;

    const url =
      "https://api.whatsapp.com/send?phone=971559281564&text=" +
      encodeURIComponent(whatsappMessage);

    // 🔥 THIS ALWAYS WORKS
    window.location.href = url;
  };


  return (
    <section
      id="contact"
      className="py-20 bg-dark relative scroll-mt-28"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-primary font-bold uppercase tracking-widest mb-2">
              Contact Us
            </h4>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to transform your vision into reality?
            </h2>

            <p className="text-xl text-gray-300 mb-8">
              Fill the form to get in touch with MIGHTYVAYU experts or email us at{" "}
              <span className="text-primary font-semibold">
                info@mts.ae
              </span>
            </p>

            <div className="space-y-4 text-gray-400">
              <p>
                <strong>Email:</strong>{" "}
                <button
                  onClick={openEmail}
                  className="hover:text-primary cursor-pointer transition-all duration-500"
                >
                  info@mts.ae
                </button>
              </p>

              <p>
                <strong>Phone:</strong>{" "}
                <button
                  onClick={callPhone}
                  className="hover:text-primary cursor-pointer transition-all duration-500"
                >
                  +971 559 281 564
                </button>
              </p>

              <p>
                <strong>Address:</strong> Business Bay, Iris Bay Tower,
                Deirah, Dubai - UAE
              </p>
            </div>
          </motion.div>

          {/* Form */}
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 bg-dark-lighter p-8 rounded-2xl border border-gray-800 shadow-2xl"
          >
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Your Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-white outline-none"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-white outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-white outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">
                How Can We Help You?
              </label>
              <textarea
                rows="4"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-white outline-none resize-none"
              />
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-primary hover:bg-amber-600 text-white font-bold py-4 rounded-lg transition-all duration-500 hover:scale-[1.02] shadow-lg shadow-primary/25 cursor-pointer"
            >
              Send Message
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
