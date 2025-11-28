import React from 'react';
import Img from '../assets/Img/Pic 2.jpg'

export default function HeroSection() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-blue-900">
      <div className="absolute inset-0 opacity-40">
        <img
          src={Img}
          alt="Background Hero"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-b from-blue-900/70 to-blue-900/75"></div>

      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Wujudkan Inovasi & Kreativitas <br /> Bersama <span className="text-blue-400">UKM IT</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Organisasi pengembangan minat dan bakat mahasiswa di bidang Teknologi Informasi dan Inovasi Digital STIKOM CKI
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="#join"
            onClick={(e) => handleNavClick(e, '#join')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-blue-500/30 cursor-pointer"
          >
            Daftar Sekarang
          </a>
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, '#about')}
            className="bg-transparent border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-full font-semibold transition-all cursor-pointer"
          >
            Pelajari Lebih Lanjut
          </a>
        </div>
      </div>
    </section>
  );
}