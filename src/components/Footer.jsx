import React from 'react';
import { Globe, MapPin, Mail, Instagram, Github } from 'lucide-react';
import Img from '../assets/Img/Logo_UKMIT.png'

// SVG Icon Discord
const DiscordIcon = ({ size = 18 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
);

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
                        <div className="flex items-center text-white font-bold text-xl mb-4">
                            <img src={Img} alt="../assets/Img/Logo_UKMIT.png" className="w-25 h-25 object-contain" />UKM IT
                        </div>
                        <p className="text-sm">Membangun Masa Depan Teknologi melalui Kolaborasi Mahasiswa yang Kreatif dan Inovatif.</p>
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
                                    Tentang
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#pengurus"
                                    onClick={(e) => handleNavClick(e, '#pengurus')}
                                    className="hover:text-blue-500 transition-colors cursor-pointer"
                                >
                                    Pengurus
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
                            <a href="https://discord.gg/rgduyVK8CK" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-all" target="_blank" rel="noopener noreferrer"><DiscordIcon size={18} /></a>
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