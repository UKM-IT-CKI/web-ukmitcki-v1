import React, { useState } from "react";
import { ChevronRight, Loader2, Send, AlertCircle, MessageCircle } from 'lucide-react'; // 1. Wajib tambah import ini

export default function JoinForm() {
    // --- URL GOOGLE SCRIPT KAMU ---
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwLjCff1FbzApzT46pGq28_xPSQwl8wBxae2YhSr-5-L5CKoKetMkEqpFiCWQa20rE/exec";

    const [formData, setFormData] = useState({
        nama: "",
        nim: "",
        kelas: "",
        semester: "",
        prodi: "Sistem Informasi",
        email: "",
        noHp: "",
        alasan: ""
    });

    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState(""); // "" | "success" | "error"

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // 2. Wajib tambah fungsi ini agar tombol WA berfungsi
    const handleManualWA = () => {
        const message = `Halo Humas UKM IT, saya mengalami kendala saat melakukan pendaftaran di Web UKM IT. Berikut data saya:%0a%0aNama: ${formData.nama}%0aNIM: ${formData.nim}%0aKelas: ${formData.kelas}%0aSemester: ${formData.semester}%0aProdi: ${formData.prodi}%0aEmail: ${formData.email}%0aAlasan Bergabung: ${formData.alasan}`;
        window.open(`https://wa.me/6285157730419?text=${message}`, '_blank');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus("");

        try {
            // 3. Logic Timeout: Jika 10 detik tidak ada respon, anggap error agar tombol WA muncul
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 detik

            await fetch(SCRIPT_URL, {
                method: "POST",
                body: JSON.stringify(formData),
                mode: "no-cors",
                signal: controller.signal
            });

            clearTimeout(timeoutId);
            setStatus("success");
            setFormData({
                nama: "", nim: "", kelas: "", semester: "",
                prodi: "Teknik Informatika", email: "", noHp: "", alasan: ""
            });
        } catch (error) {
            console.error("Error:", error);
            setStatus("error"); // Ini yang memicu tampilan error muncul
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="join" className="py-20 bg-blue-900 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-600 rounded-full opacity-20 blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
                    <div className="grid md:grid-cols-5">

                        {/* --- SISI KIRI --- */}
                        <div className="p-8 md:p-12 bg-blue-800/50 md:col-span-2 flex flex-col justify-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Mari Bertumbuh Bersama</h2>
                            <p className="text-blue-100 mb-8 leading-relaxed">
                                Ayo bergabunglah dengan UKM IT Mari kita kembangkan skill, perluas relasi, dan ciptakan inovasi bersama-sama.
                            </p>
                            {/* <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <div className="bg-blue-500 rounded-full p-1"><ChevronRight size={16} /></div>
                                    <span className="font-medium">Mentoring Eksklusif</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="bg-blue-500 rounded-full p-1"><ChevronRight size={16} /></div>
                                    <span className="font-medium">Akses Project Nyata</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="bg-blue-500 rounded-full p-1"><ChevronRight size={16} /></div>
                                    <span className="font-medium">Sertifikat SKPI</span>
                                </li>
                            </ul> */}
                        </div>

                        {/* --- SISI KANAN --- */}
                        <div className="p-8 md:p-12 bg-white md:col-span-3 text-gray-800">
                            <h3 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-4 text-center">Formulir Pendaftaran</h3>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Input Nama */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Nama Lengkap</label>
                                    <input type="text" name="nama" required
                                        value={formData.nama} onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                        placeholder="Masukan Nama Lengkap"
                                    />
                                </div>

                                {/* Input NIM & Prodi */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">NIM</label>
                                        <input type="text" name="nim" required
                                            value={formData.nim} onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                            placeholder="24120..."
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Program Studi</label>
                                        <select name="prodi" value={formData.prodi} onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                                            <option>Teknik Informatika</option>
                                            <option>Sistem Informasi</option>
                                            <option>Bisnis Digital</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Input Kelas & Semester */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Kelas</label>
                                        <input type="text" name="kelas" required
                                            value={formData.kelas} onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                            placeholder="Pagi / Malam"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Semester</label>
                                        <select name="semester" value={formData.semester} onChange={handleChange} required
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                                            <option value="">Pilih Semester</option>
                                            <option value="1">Semester 1</option>
                                            <option value="3">Semester 3</option>
                                            <option value="5">Semester 5</option>
                                            <option value="7">Semester 7</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Input Email & No HP */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                                        <input type="email" name="email" required
                                            value={formData.email} onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                            placeholder="nama@email.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">No. WhatsApp</label>
                                        <input type="number" name="noHp" required
                                            value={formData.noHp} onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                            placeholder="08..."
                                        />
                                    </div>
                                </div>

                                {/* Input Alasan */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Alasan Bergabung UKM IT</label>
                                    <textarea name="alasan" required rows="3"
                                        value={formData.alasan} onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                                        placeholder="Ceritakan motivasi singkatmu..."
                                    ></textarea>
                                </div>

                                {/* --- Logic Error --- */}
                                {status === "error" && (
                                    <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
                                        <div className="flex items-center gap-2 font-bold mb-2">
                                            <AlertCircle size={20} /> Gagal Mengirim Data
                                        </div>
                                        <p className="text-sm mb-3">
                                            Sepertinya ada gangguan koneksi. Jangan khawatir, kamu tetap bisa mendaftar manual lewat WhatsApp.
                                        </p>
                                        <button
                                            onClick={handleManualWA}
                                            type="button"
                                            className="text-sm bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                                        >
                                            <MessageCircle size={16} /> Daftar via WhatsApp Humas UKM.IT
                                        </button>
                                    </div>
                                )}

                                {/* --- Logic Berhasil --- */}
                                {status === "success" && (
                                    <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg border border-green-200 flex items-center gap-2">
                                        Pendaftaran berhasil! Humas UKM.IT akan segera menghubungimu.
                                    </div>
                                )}

                                {/* Tombol Submit Pendaftaran Dibuka */}
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className={`w-full font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-500/30 flex justify-center items-center gap-2 mt-4
                                        ${isLoading ? 'bg-gray-400 cursor-not-allowed text-gray-100' : 'bg-blue-600 hover:bg-blue-700 text-white hover:-translate-y-1'}
                                    `}
                                >
                                    {isLoading ? <Loader2 className="animate-spin" /> : <Send size={20} />}
                                    {isLoading ? "Sedang Mengirim..." : "Kirim Formulir Pendaftaran"}
                                </button>

                                {/* Tombol Submit Pendaftaran Ditutup */}
                                {/* <button
                                    type="button" onclick="closeform()"
                                    disabled={isLoading}
                                    className={`w-full font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-500/30 flex justify-center items-center gap-2 mt-4
                                        ${isLoading ? 'bg-gray-400 cursor-not-allowed text-gray-100' : 'bg-red-600 hover:bg-red-700 text-white hover:-translate-y-1'}
                                    `}
                                >
                                    {isLoading ? <Loader2 className="animate-spin" /> : <Send size={20} />}
                                    {isLoading ? "" : "Pendaftaran Telah Ditutup"}
                                </button> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}