/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Users, Award, Briefcase, Layers } from 'lucide-react';

const features = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Innovative Solutions',
    description: 'We leverage the latest technologies and design trends to provide cutting-edge solutions that set you apart.'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Client-Centric Approach',
    description: 'Your satisfaction is our priority. We work closely with you to understand your vision and bring it to life.'
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Expert Team',
    description: 'Our skilled professionals are passionate about what they do, ensuring high-quality results every time.'
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'Comprehensive Services',
    description: 'From concept to execution, we offer a full range of services to meet all your exhibition and event needs.'
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: 'Proven Track Record',
    description: 'Explore our portfolio to see examples of our work and the diverse range of technical projects we have successfully delivered.'
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20 relative bg-dark">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
          alt="Technical Services"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h4 className="text-primary font-bold uppercase tracking-widest mb-2">Our Advantage</h4>
          <h2 className="text-4xl md:text-5xl font-bold">Why Choose MIGHTYVAYU?</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 group"
              >
                <div className="shrink-0 w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Decorative Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:block relative"
          >
            <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"
              alt="Team working"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
