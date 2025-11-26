import React from 'react';
import { Globe, MapPin, Mail, Instagram, Github } from 'lucide-react';
import Img from '../assets/Img/Logo_UKMIT.png'

export default function Footer() {
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
        <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 text-white font-bold text-xl mb-4">
                            <img src={Img} alt="../assets/Img/Logo_UKMIT.png" className="w-25 h-25 object-contain" />UKM IT
                        </div>
                        <p className="text-sm">Membangun masa depan teknologi melalui kolaborasi mahasiswa yang kreatif dan inovatif.</p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Tautan</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="#home"
                                    onClick={(e) => handleNavClick(e, '#home')}
                                    className="hover:text-blue-500 transition-colors cursor-pointer"
                                >
                                    Beranda
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    onClick={(e) => handleNavClick(e, '#about')}
                                    className="hover:text-blue-500 transition-colors cursor-pointer"
                                >
                                    Tentang Kami
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#Project"
                                    onClick={(e) => handleNavClick(e, '#Project')}
                                    className="hover:text-blue-500 transition-colors cursor-pointer"
                                >
                                    Project
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#activities"
                                    onClick={(e) => handleNavClick(e, '#activities')}
                                    className="hover:text-blue-500 transition-colors cursor-pointer"
                                >
                                    Kegiatan
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Kontak</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-3">
                                <MapPin size={16} />  Jalan Radin Inten II Duren Sawit Jakarta Timur
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={16} /> ukmitcki2025@gmail.com
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Ikuti Kami</h4>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/ukm.it_stikom/" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-all" target="_blank" rel="noopener noreferrer"><Instagram size={18} /></a>
                            <a href="https://github.com/UKM-IT-CKI" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-all" target="_blank" rel="noopener noreferrer"><Github size={18} /></a>
                            <a href="https://official.stikomcki.ac.id/" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-all" target="_blank" rel="noopener noreferrer"><Globe size={18} /></a>
                            <a href="mailto:ukmitcki2025@gmail.com" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-all"><Mail size={18} /></a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8 text-center text-sm">
                    &copy; 2025 UKM IT CKI. All rights reserved.
                </div>
            </div>
        </footer>
    );
}