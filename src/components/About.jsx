import React from "react";
import { Users, Award } from 'lucide-react'

export default function AboutSection() {
    const DaftarMisi = [
        "Membantu mengembangkan dan mengasah talenta mahasiswa STIKOM CKI di bidang teknologi informasi melalui pembinaan yang terarah dan berkelanjutan.",
        "Berperan aktif dalam mengikuti perkembangan dunia teknologi informasi.",
        "Membantu mengembangkanlulusan yang inovatif, terampil, dan berwawasan luas, serta mampu bersaing secara global di era digital, khususnya mahasiswa STIKOM CKI sehingga menghasilkan mahasiswa yang terampil"
    ];

    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Tentang Organisasi Kami</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            UKM IT didirikan pada tahun 2022 dengan tujuan menciptakan sebuah komunitas yang memiliki ketertarikan di dunia teknologi Informasi Khususnya untuk mahasiswa STIKOM CKI. Kami percaya bahwa kolaborasi adalah kunci untuk menciptakan dampak positif
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="bg-green-100 p-2 rounded-lg text-green-600 mt-1"><Award size={20} /></div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Visi</h4>
                                    <p className="text-sm text-gray-600">Menjadikan unit kegiatan mahasiswa IT sebagai tempat untuk menyalurkan potensi-potensi muda dalam perkembangan teknologi dan informasi.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-orange-100 p-2 rounded-lg text-orange-600 mt-1"><Users size={20} /></div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Misi</h4>
                                    <ul className="text-sm space-y-2 pl-1 text-gray-600">
                                        {DaftarMisi.map((item, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600"></span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-6 rounded-2xl text-center">
                            <h3 className="text-4xl font-bold text-blue-600 mb-2">33+</h3>
                            <p className="text-gray-600 font-medium">Anggota Aktif</p>
                        </div>
                        <div className="bg-indigo-50 p-6 rounded-2xl text-center mt-8">
                            <h3 className="text-4xl font-bold text-indigo-600 mb-2">2</h3>
                            <p className="text-gray-600 font-medium">Project Selesai</p>
                        </div>
                        <div className="bg-pink-50 p-6 rounded-2xl text-center mt-8">
                            <h3 className="text-4xl font-bold text-pink-600 mb-2">3</h3>
                            <p className="text-gray-600 font-medium">Tahun Berdiri</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}