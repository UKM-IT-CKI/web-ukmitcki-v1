import React, { useState } from 'react';
import { Instagram, Users, Handshake, Code, Lectern, UserPlus } from 'lucide-react';
import Img1 from '../assets/Img/Pic 1.webp'
import Img2 from '../assets/Img/Pic 2.webp'
import Img3 from '../assets/Img/Pic 3.webp'
import Img4 from '../assets/Img/Pic 4.webp'

const getCategoryIcon = (category, size = 16, className = "text-blue-600") => {
  switch (category) {
    case 'Kolaborasi':
      return <Handshake size={size} className={className} />;
    case 'Seminar':
      return <Lectern size={size} className={className} />;
    case 'Class & Sharing':
      return <Code size={size} className={className} />;
    case 'Anggota Baru':
      return <UserPlus size={size} className={className} />;
    default:
      return <Users size={size} className={className} />;
  }
};

const ActivityCard = ({ image, title, category, instagramHighlight, onPause, onResume }) => {
  const CardContent = () => (
    <>
      <div className="h-48 bg-gray-200 relative overflow-hidden group">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
          {category}
        </div>

        {/* Bagian Icon Desktop */}
        {instagramHighlight && instagramHighlight !== "#" && (
          <div className="hidden md:flex absolute inset-0 bg-black/40 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-3 rounded-full text-white transform scale-0 group-hover:scale-110 transition-transform duration-300 delay-75 shadow-lg">
              <Instagram size={32} />
            </div>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 flex items-start gap-3 flex-1">
            <div className="mt-1 shrink-0">
              {getCategoryIcon(category, 24, "text-blue-900")}
            </div>
            <span className="leading-tight pt-0.5">{title}</span>
          </h3>

          {/* Bagian Icon Mobile*/}
          {instagramHighlight && instagramHighlight !== "#" && (
            <div className="md:hidden shrink-0">
              <div className="bg-white/80 backdrop-blur-md hover:bg-gray-900 p-1.5 rounded-full text-gray-700 hover:text-white shadow-sm border border-gray-200/50 transition-colors duration-300 active:scale-95">
                <Instagram size={20} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );

  const commonClasses = "block bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300 h-full border border-gray-100 group/card relative text-left";

  if (instagramHighlight && instagramHighlight !== "#") {
    return (
      <a
        href={instagramHighlight}
        target="_blank"
        rel="noopener noreferrer"
        className={commonClasses}
        onMouseEnter={onPause}
        onMouseLeave={onResume}
      >
        <CardContent />
      </a>
    );
  }

  return (
    <div
      className={commonClasses}
      onMouseEnter={onPause}
      onMouseLeave={onResume}
    >
      <CardContent />
    </div>
  );
};

export default function Activities() {
  const [isPaused, setIsPaused] = useState(false);

  const activities = [
    {
      image: Img1,
      title: "Kolaborasi",
      category: "Kolaborasi",
      instagramHighlight: "https://www.instagram.com/stories/highlights/17904063219331160/"
    },
    {
      image: Img2,
      title: "Seminar IT",
      category: "Seminar",
      instagramHighlight: "https://www.instagram.com/stories/highlights/18548914372017119/"
    },
    {
      image: Img3,
      title: "Class & Sharing",
      category: "Class & Sharing",
      instagramHighlight: "https://www.instagram.com/stories/highlights/17877422832447535/"
    },
    {
      image: Img4,
      title: "Pertemuan Anggota Baru",
      category: "Anggota Baru",
      instagramHighlight: "https://www.instagram.com/stories/highlights/17870865180412432/"
    }
  ];

  return (
    <section id="activities" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Kegiatan</h2>
            <p className="text-gray-600">Intip keseruan kegiatan-kegiatan yang telah kami laksanakan.</p>
          </div>
        </div>

        {/* Kontainer Animasi Marquee */}
        <div className="relative w-full">

          {/* Tampilan Mobile */}
          <div className="md:hidden flex gap-6 overflow-x-auto pb-4 scrollbar-hide px-4">
            {activities.map((item, index) => (
              <div key={index} className="min-w-[300px] flex-shrink-0">
                <ActivityCard {...item} />
              </div>
            ))}
          </div>

          {/* Tampilan Desktop */}
          <div className="hidden md:flex overflow-hidden py-4">
            {/* Pembungkus Animasi Marquee */}
            <div
              className="flex shrink-0 gap-8 animate-marquee pr-8"
              style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
            >
              {[...activities, ...activities, ...activities, ...activities, ...activities, ...activities].map((item, index) => (
                <div key={index} className="min-w-[350px] flex-shrink-0">
                  <ActivityCard
                    {...item}
                    onPause={() => setIsPaused(true)}
                    onResume={() => setIsPaused(false)}
                  />
                </div>
              ))}
            </div>
            <div
              className="flex shrink-0 gap-8 animate-marquee pr-8"
              aria-hidden="true"
              style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
            >
              {[...activities, ...activities, ...activities, ...activities, ...activities, ...activities].map((item, index) => (
                <div key={`dup-${index}`} className="min-w-[350px] flex-shrink-0">
                  <ActivityCard
                    {...item}
                    onPause={() => setIsPaused(true)}
                    onResume={() => setIsPaused(false)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
