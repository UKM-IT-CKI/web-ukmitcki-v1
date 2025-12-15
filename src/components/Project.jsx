import React, { useRef } from 'react';
import { Github, ChevronLeft, ChevronRight, Link } from 'lucide-react';
import Project1 from '../assets/Img/Project1.webp';
import Project2 from '../assets/Img/Project2.webp';
import Maintence from '../assets/Img/under_maintenance.webp';

// --- KOMPONEN KARTU PROYEK ---
const ProjectCard = ({ image, title, category, description, githubUrl, linkUrl }) => (
  <div className="min-w-[300px] md:min-w-[380px] snap-center group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-300 relative">

    {/* Clickable Card - Membuka Link Project */}
    <a
      href={linkUrl || githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block cursor-pointer"
    >
      {/* Container Gambar */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Badge Kategori */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-blue-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
          {category}
        </div>
      </div>

      {/* Konten Teks */}
      <div className="p-6 pb-14">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </a>

    {/* Icon GitHub */}
    <div className="absolute bottom-4 right-4 flex gap-2 z-10">
      {githubUrl && githubUrl !== "#" && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="bg-white/80 backdrop-blur-md hover:bg-gray-900 p-2.5 rounded-full text-gray-700 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200/50"
          title="View on GitHub"
        >
          <Github size={18} />
        </a>
      )}

      {/* {linkUrl && linkUrl !== "" && (
        <a
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="bg-blue-100 hover:bg-blue-600 p-2 rounded-full text-blue-700 hover:text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
          title="Visit Project"
        >
          <Link size={18} />
        </a>
      )} */}
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
      linkUrl: "https://ukmit-funphotobooth.vercel.app/"
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

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">SHOWCASE PROJECT</span>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Geser untuk melihat karya-karya inovatif lainnya yang telah kami ciptakan.</p>
        </div>

        {/* Kontainer Carousel */}
        <div className="relative group px-4 md:px-0">

          {/* Tombol Kiri */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-28 -translate-y-1/2 z-20 bg-white shadow-lg border border-gray-100 p-3 rounded-full text-gray-600 hover:bg-blue-600 hover:text-white transition-all hidden md:flex -ml-4 items-center justify-center"
            title="Geser Kiri"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Tombol Kanan */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-28 -translate-y-1/2 z-20 bg-white shadow-lg border border-gray-100 p-3 rounded-full text-gray-600 hover:bg-blue-600 hover:text-white transition-all hidden md:flex -mr-4 items-center justify-center"
            title="Geser Kanan"
          >
            <ChevronRight size={24} />
          </button>

          {/* List Project Card*/}
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