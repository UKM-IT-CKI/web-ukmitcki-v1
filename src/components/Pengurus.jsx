import React, { useRef, useState, useEffect, useMemo, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Instagram } from 'lucide-react';
import img1 from '../assets/Img/Ketua.webp'
import img2 from '../assets/Img/Wakil.webp'
import img3 from '../assets/Img/Sekretaris_1.webp'
import img4 from '../assets/Img/Sekretaris_2.webp'
import img5 from '../assets/Img/Bendahara_1.webp'
import img6 from '../assets/Img/Bendahara_2.webp'
import img7 from '../assets/Img/Humas_1.webp'
import img8 from '../assets/Img/Humas_2.webp'

// --- KOMPONEN FITUR CARD ---
const PengurusCard = React.memo(({ pengurus, position, isCenter }) => {

    const cardStyle = useMemo(() => {
        switch (position) {
            case 'center':
                return {
                    transform: 'translateX(0%) scale(1) rotateY(0deg)',
                    zIndex: 50,
                    opacity: 1,
                };
            case 'left':
                return {
                    transform: 'translateX(-80%) scale(0.85) rotateY(25deg)',
                    zIndex: 40,
                    opacity: 0.7,
                };
            case 'right':
                return {
                    transform: 'translateX(80%) scale(0.85) rotateY(-25deg)',
                    zIndex: 40,
                    opacity: 0.7,
                };
            case 'far-left':
                return {
                    transform: 'translateX(-160%) scale(0.7) rotateY(35deg)',
                    zIndex: 30,
                    opacity: 0.4,
                };
            case 'far-right':
                return {
                    transform: 'translateX(160%) scale(0.7) rotateY(-35deg)',
                    zIndex: 30,
                    opacity: 0.4,
                };
            default:
                return {
                    transform: 'translateX(0%) scale(0.5)',
                    zIndex: 10,
                    opacity: 0,
                    pointerEvents: 'none',
                };
        }
    }, [position]);

    return (
        <div
            className="absolute left-1/2 -translate-x-1/2 transition-all duration-700 ease-out will-change-transform"
            style={{
                ...cardStyle,
                width: 'clamp(200px, 40vw, 320px)',
                height: 'clamp(300px, 60vw, 480px)',
            }}
        >
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
                <img
                    src={pengurus.image}
                    alt={pengurus.name}
                    className={`w-full h-full object-cover transition-transform duration-700 will-change-transform ${isCenter ? 'scale-100' : 'scale-110'
                        }`}
                    style={{
                        filter: isCenter ? 'brightness(100%)' : 'brightness(50%)',
                    }}
                    loading="eager"
                />

                <div
                    className="absolute inset-0 bg-linear-to-t transition-opacity duration-700"
                    style={{
                        backgroundImage: isCenter
                            ? 'linear-gradient(to top, rgba(30, 58, 138, 0.95), rgba(30, 58, 138, 0.5), transparent)'
                            : 'linear-gradient(to top, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3))',
                        opacity: isCenter ? 0.9 : 0.95,
                    }}
                />

                {isCenter && (
                    <div className="absolute inset-0 border-4 border-blue-500 rounded-lg pointer-events-none" />
                )}
                <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-5 md:p-6">
                    {/* Badge */}
                    <div className={`transition-all duration-500 ${isCenter ? 'translate-y-0I opacity-100' : '-translate-y-4 opacity-0'}`}>
                        <div className="text-white text-[9px] sm:text-[10px] md:text-xs font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 uppercase tracking-wider inline-block rounded">
                            {pengurus.position}
                        </div>
                    </div>

                    {/* Bottom Info */}
                    <div className={`transition-all duration-500 ${isCenter ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                        <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-1 sm:mb-2 leading-tight">
                            {pengurus.name}
                        </h3>
                        <p className="text-blue-300 text-xs sm:text-sm font-semibold uppercase tracking-wide mb-3 sm:mb-4">
                            {pengurus.division}
                        </p>

                        {/* Social Media Icons */}
                        {isCenter && (
                            <div className="flex gap-2 sm:gap-3">
                                {pengurus.email && (
                                    <a
                                        href={`mailto:${pengurus.email}`}
                                        className="bg-white/10 backdrop-blur-sm hover:bg-blue-600 p-2 sm:p-2.5 text-white transition-all duration-300 hover:scale-110 rounded border border-white/20 hover:border-blue-600"
                                        title="Email"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                    </a>
                                )}
                                {pengurus.linkedin && (
                                    <a
                                        href={pengurus.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white/10 backdrop-blur-sm hover:bg-blue-600 p-2 sm:p-2.5 text-white transition-all duration-300 hover:scale-110 rounded border border-white/20 hover:border-blue-600"
                                        title="LinkedIn"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                    </a>
                                )}
                                {pengurus.instagram && (
                                    <a
                                        href={pengurus.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white/10 backdrop-blur-md text-white p-2.5 sm:p-3 rounded-full border border-white/20 transition-all duration-300 hover:scale-110 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 hover:border-transparent hover:shadow-lg hover:shadow-pink-500/30"
                                        title="Instagram"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
});

PengurusCard.displayName = 'PengurusCard';

// --- KOMPONEN UTAMA ---
export default function Pengurus() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const autoPlayRef = useRef(null);

    const pengurusList = useMemo(() => [
        {
            id: 1,
            image: img1,
            name: "Petra Leonard Saragi Napitu",
            division: "Ketua",
            // position: "KETUA",
            instagram: "https://www.instagram.com/petraleonardd/",
            platforms: [
                { name: 'Web', active: true },
                { name: 'Mobile', active: true },
            ]
        },
        {
            id: 2,
            image: img2,
            name: "Ricky Agung Permana",
            division: "Wakil Ketua",
            // position: "WAKIL KETUA",
            instagram: "https://www.instagram.com/__gungs__/",
            platforms: [
                { name: 'Web', active: true },
                { name: 'Mobile', active: true },
            ]
        },
        {
            id: 3,
            image: img3,
            name: "Oriza Satifah Azzahra",
            division: "Sekretaris I",
            // position: "SEKRETARIS I",
            instagram: "https://www.instagram.com/acdszaa/",
            platforms: [
                { name: 'Web', active: true },
                { name: 'Mobile', active: true },
            ]
        },
        {
            id: 4,
            image: img4,
            name: "Gunabil Akbar",
            division: "Sekretaris II",
            // position: "SEKRETARIS II",
            instagram: "https://www.instagram.com/gunabil/",
            platforms: [
                { name: 'Web', active: true },
                { name: 'Mobile', active: true },
            ]
        },
        {
            id: 5,
            image: img5,
            name: "Reykha Adelia Azzahra",
            division: "Bendahara I",
            // position: "BENDAHARA I",
            instagram: "https://www.instagram.com/reykhazahra/",
            platforms: [
                { name: 'Web', active: true },
                { name: 'Mobile', active: true },
            ]
        },
        {
            id: 6,
            image: img6,
            name: "Mohammad Tyo Ari Novianto",
            division: "Bendahara II",
            // position: "BENDAHARA II",
            instagram: "https://www.instagram.com/tyoooo.to/",
            platforms: [
                { name: 'Web', active: true },
                { name: 'Mobile', active: true },
            ]
        },
        {
            id: 7,
            image: img7,
            name: "Khoirul Anwar Anshori",
            division: "Humas I",
            // position: "HUMAS I",
            instagram: "https://www.instagram.com/khrll_a/",
            platforms: [
                { name: 'Web', active: true },
                { name: 'Mobile', active: true },
            ]
        },
        {
            id: 8,
            image: img8,
            name: "Kholiq Nur Huda",
            division: "Humas II",
            // position: "HUMAS II",
            instagram: "https://www.instagram.com/qnh24_/",
            platforms: [
                { name: 'Web', active: true },
                { name: 'Mobile', active: true },
            ]
        },
    ], []);

    // Carousel
    useEffect(() => {
        if (!isAutoPlaying) return;

        autoPlayRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % pengurusList.length);
        }, 4000);

        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current);
            }
        };
    }, [isAutoPlaying, pengurusList.length]);

    const handlePrev = useCallback(() => {
        setIsAutoPlaying(false);
        setActiveIndex((prev) => (prev - 1 + pengurusList.length) % pengurusList.length);
    }, [pengurusList.length]);

    const handleNext = useCallback(() => {
        setIsAutoPlaying(false);
        setActiveIndex((prev) => (prev + 1) % pengurusList.length);
    }, [pengurusList.length]);

    const handleDotClick = useCallback((index) => {
        setIsAutoPlaying(false);
        setActiveIndex(index);
    }, []);

    const getCardPosition = useCallback((index) => {
        const diff = index - activeIndex;
        const total = pengurusList.length;

        // Normalize difference to handle wrap-around
        let normalizedDiff = diff;
        if (Math.abs(diff) > total / 2) {
            normalizedDiff = diff > 0 ? diff - total : diff + total;
        }

        if (normalizedDiff === 0) return 'center';
        if (normalizedDiff === 1) return 'right';
        if (normalizedDiff === -1) return 'left';
        if (normalizedDiff === 2) return 'far-right';
        if (normalizedDiff === -2) return 'far-left';
        return 'hidden';
    }, [activeIndex, pengurusList.length]);

    return (
        <section id="pengurus" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-linear-to-br from-white via-blue-50 to-white overflow-hidden relative">
            <div className="container mx-auto px-4 sm:px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-12 sm:mb-16 md:mb-15">
                    <div className="inline-block mb-4">
                        <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">
                            Badan Pengurus Harian UKM IT
                        </span>
                        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                            Anggota tim pengurus yang berdedikasi untuk memajukan UKM IT STIKOM CKI
                        </p>
                    </div>
                </div>

                <div className="relative">
                    {/* Persepektif 3D */}
                    <div
                        className="relative mx-auto"
                        style={{
                            perspective: '2000px',
                            perspectiveOrigin: 'center center',
                            height: 'clamp(350px, 65vw, 550px)',
                            maxWidth: '1400px',
                            transform: 'translateZ(0)',
                            backfaceVisibility: 'hidden',
                        }}
                    >
                        {/* Cards */}
                        {pengurusList.map((pengurus, index) => {
                            const position = getCardPosition(index);
                            return (
                                <PengurusCard
                                    key={pengurus.id}
                                    pengurus={pengurus}
                                    position={position}
                                    isCenter={position === 'center'}
                                />
                            );
                        })}
                    </div>

                    {/* Buttons */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 bg-white/90 hover:bg-blue-600 hover:text-white text-gray-700 p-3 sm:p-4 rounded-full backdrop-blur-sm transition-all shadow-lg border-2 border-blue-200 hover:border-blue-600"
                        title="Previous"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 bg-white/90 hover:bg-blue-600 hover:text-white text-gray-700 p-3 sm:p-4 rounded-full backdrop-blur-sm transition-all shadow-lg border-2 border-blue-200 hover:border-blue-600"
                        title="Next"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                </div>

                {/* Indikator Carousel */}
                <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-0">
                    {pengurusList.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`transition-all duration-300 rounded-full ${index === activeIndex
                                ? 'w-8 sm:w-10 h-2 sm:h-2.5 bg-blue-600'
                                : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-gray-300 hover:bg-blue-400'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
