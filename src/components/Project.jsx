import React, { useRef } from 'react';
import { Github, ChevronLeft, ChevronRight, Link } from 'lucide-react';
import Project1 from '../assets/Img/Project1.png';
import Project2 from '../assets/Img/Project2.png';
import Maintence from '../assets/Img/under_maintenance.png';

// --- KOMPONEN KARTU PROYEK ---
const ProjectCard = ({ image, title, category, description, githubUrl, linkUrl }) => (
  // min-w-[300px] agar kartu punya lebar tetap saat di-scroll
  <div className="min-w-[300px] md:min-w-[380px] snap-center group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-300">

    {/* Container Gambar (Tinggi h-56 = 14rem = 224px) */}
    <div className="relative h-56 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay: Tombol GitHub */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-3 ml-0 rounded-full text-gray-900 shadow-lg hover:scale-110 transition-transform duration-300"
        >
          <Github size={24} />
        </a>

        <a
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-3 ml-2 rounded-full text-gray-900 shadow-lg hover:scale-110 transition-transform duration-300"
        >
          <Link size={24} />
        </a>
      </div>


      {/* Badge Kategori */}
      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-blue-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
        {category}
      </div>
    </div>

    {/* Konten Teks */}
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
        {description}
      </p>
    </div>
  </div>
);

// --- KOMPONEN UTAMA ---
export default function Showcase() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 400;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const projects = [
    {
      image: Project1,
      category: "Web Application",
      title: "Fun Photobooth",
      description: "Aplikasi web interaktif untuk membuat foto strip bergaya photobox langsung dari browser.",
      githubUrl: "https://github.com/UKM-IT-CKI/Photobooth",
      linkUrl: "https://ukmitphotoboothproject.vercel.app/"
    },
    {
      image: Project2,
      category: "Computer Vision",
      title: "Finger Counter",
      description: "Program berbasis web mendeteksi gerakan tangan lalu menghitung jumlah jari, dan memberikan umpan balik audio secara langsung.",
      githubUrl: "https://github.com/UKM-IT-CKI/Finger-Counter.git",
      linkUrl: "https://ukmit-finger-counter.streamlit.app/"
    },
    {
      image: Maintence,
      category: "Coming Soon",
      title: "On Progress",
      description: "Coming Soon",
      githubUrl: "#",
      linkUrl: ""
    },
    {
      image: Maintence,
      category: "Coming Soon",
      title: "On Progress",
      description: "Coming Soon",
      githubUrl: "#",
      linkUrl: ""
    },
  ];

  return (
    <section id="Project" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 relative">

        {/* Header: Teks Rata Tengah */}
        <div className="text-center mb-12">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">SHOWCASE PROJECT</span>
          {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2"></h2> */}
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Geser untuk melihat karya-karya inovatif lainnya yang telah kami ciptakan.</p>
        </div>

        {/* Container Carousel */}
        <div className="relative group px-4 md:px-0">

          {/* Tombol Kiri */}
          {/* top-28 adalah kunci agar tombol pas di tengah gambar (h-56 / 2) */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-28 -translate-y-1/2 z-20 bg-white shadow-lg border border-gray-100 p-3 rounded-full text-gray-600 hover:bg-blue-600 hover:text-white transition-all hidden md:flex -ml-4 items-center justify-center"
            title="Geser Kiri"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Tombol Kanan */}
          {/* top-28 adalah kunci agar tombol pas di tengah gambar (h-56 / 2) */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-28 -translate-y-1/2 z-20 bg-white shadow-lg border border-gray-100 p-3 rounded-full text-gray-600 hover:bg-blue-600 hover:text-white transition-all hidden md:flex -mr-4 items-center justify-center"
            title="Geser Kanan"
          >
            <ChevronRight size={24} />
          </button>

          {/* List Kartu */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}