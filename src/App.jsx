import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Clients = lazy(() => import('./components/Clients'));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const ContactUs = lazy(() => import('./components/ContactUs'));
const Footer = lazy(() => import('./components/Footer'));
const Projects = lazy(() => import('./components/Projects'));



function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      <main className="pt-24 md:pt-26">
        <Hero />
        <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
          <About />
          <Services />
          <Projects />
          <Clients />
          <WhyChooseUs />
          <ContactUs />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
