import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Activities from './components/Activities';
import JoinForm from './components/JoinForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Tentang Kami */}
      <About />

      {/* Project */}
      <Project />

      {/* Kegiatan */}
      <Activities />

      {/* Formulir Pendaftaran */}
      <JoinForm />

      {/* Footer */}
      <Footer />

    </div>
  );
}