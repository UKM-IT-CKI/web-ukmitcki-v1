import React from 'react';
import { ChevronRight, Calendar } from 'lucide-react';
import Img1 from '../assets/Img/Pic 1.jpg'
import Img2 from '../assets/Img/Pic 2.png'
import Img3 from '../assets/Img/Pic 3.jpg'

// Kita definisikan ActivityCard di sini
const ActivityCard = ({ image, title, date, category }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300 h-full border border-gray-100">
    <div className="h-48 bg-gray-200 relative overflow-hidden group">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
        {category}
      </div>
    </div>
    <div className="p-6">
      <div className="flex items-center text-gray-500 text-sm mb-2">
        <Calendar size={14} className="mr-2" />
        {date}
      </div>
      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
    </div>
  </div>
);

export default function Activities() {
  const activities = [
    {
      image: Img1,
      title: "Seminar IT",
      date: "18 Januari 2025",
      category: "Seminar"
    },
    {
      image: Img2,
      title: "Class & Sharing",
      date: "1 Maret 2025",
      category: "Class & Sharing"
    },
    {
      image: Img3,
      title: "Workshop PHP",
      date: "15 November 2025",
      category: "Workshop"
    }
  ];

  return (
    <section id="activities" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Kegiatan Terbaru</h2>
            <p className="text-gray-600">Intip keseruan kegiatan yang baru saja kami laksanakan.</p>
          </div>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full">

          {/* Mobile View: Manual Scroll (Only 3 items) */}
          <div className="md:hidden flex gap-6 overflow-x-auto pb-4 scrollbar-hide px-4">
            {activities.map((item, index) => (
              <div key={index} className="min-w-[300px] flex-shrink-0">
                <ActivityCard {...item} />
              </div>
            ))}
          </div>

          {/* Desktop View: Auto Marquee (Many items) */}
          {/* Desktop View: Auto Marquee (Many items) */}
          <div className="hidden md:flex overflow-hidden py-4">
            {/* Wrapper for seamless looping: Two identical lists */}
            <div className="flex shrink-0 gap-8 animate-marquee pr-8">
              {[...activities, ...activities, ...activities, ...activities, ...activities, ...activities].map((item, index) => (
                <div key={index} className="min-w-[350px] flex-shrink-0">
                  <ActivityCard {...item} />
                </div>
              ))}
            </div>
            <div className="flex shrink-0 gap-8 animate-marquee pr-8" aria-hidden="true">
              {[...activities, ...activities, ...activities, ...activities, ...activities, ...activities].map((item, index) => (
                <div key={`dup-${index}`} className="min-w-[350px] flex-shrink-0">
                  <ActivityCard {...item} />
                </div>
              ))}
            </div>
          </div>

          {/* Gradient Fade di Kiri & Kanan */}
          <div className="absolute top-0 left-0 w-24 h-full z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-24 h-full z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
