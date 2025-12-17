import React, { useState } from "react";
import { ChevronRight, Loader2, Send, AlertCircle, MessageCircle } from 'lucide-react';

export default function JoinForm() {
    const [isRegistrationOpen, setIsRegistrationOpen] = useState(true);

    const [formData, setFormData] = useState({
        nama: "",
        nim: "",
        kelas: "",
        semester: "",
        prodi: "Teknik Informatika",
        email: "",
        noHp: "",
        alasan: ""
    });

    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Bagian Form Nomor HP
    const handlePhoneChange = (e) => {
        const value = e.target.value;
        const numbersOnly = value.replace(/[^0-9]/g, '');

        if (numbersOnly.length <= 13) {
            setFormData({ ...formData, noHp: numbersOnly });
        }
    };

    const isValidPhone = (phone) => {
        return /^08[0-9]{8,11}$/.test(phone);
    };

    const handleManualWA = () => {
        const message = `Halo Humas UKM IT, saya mengalami kendala saat melakukan pendaftaran di Web UKM IT. Berikut data saya:%0a%0aNama: ${formData.nama}%0aNIM: ${formData.nim}%0aKelas: ${formData.kelas}%0aSemester: ${formData.semester}%0aProdi: ${formData.prodi}%0aEmail: ${formData.email}%0aAlasan Bergabung: ${formData.alasan}`;
        window.open(`https://wa.me/6285157730419?text=${message}`, '_blank');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus("");

        try {
            // Bagian Fetch ke API Vercel
            const response = await fetch("/api/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({
                    nama: "", nim: "", kelas: "", semester: "",
                    prodi: "Teknik Informatika", email: "", noHp: "", alasan: ""
                });
            } else {
                throw new Error("Gagal mengirim");
            }
        } catch (error) {
            console.error("Error:", error);
            setStatus("error");
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

                        {/* --- Bagian Kiri Form--- */}
                        <div className="p-8 md:p-12 bg-blue-800/50 md:col-span-2 flex flex-col justify-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Mari Bertumbuh Bersama</h2>
                            <p className="text-blue-100 mb-8 leading-relaxed">
                                Ayo bergabunglah dengan UKM IT Mari kita kembangkan skill, perluas relasi, dan ciptakan inovasi bersama-sama.
                            </p>
                        </div>

                        {/* --- Bagian Kanan Form--- */}
                        <div className="p-8 md:p-12 bg-white md:col-span-3 text-gray-800">
                            <h3 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-4 text-center">Formulir Pendaftaran</h3>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Input Nama */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Nama Lengkap</label>
                                    <input type="text" name="nama" required
                                        value={formData.nama} onChange={handleChange}
                                        disabled={!isRegistrationOpen}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                        placeholder="Masukan Nama Lengkap"
                                    />
                                </div>

                                {/* Input NIM & Prodi */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">NIM</label>
                                        <input type="text" name="nim" required
                                            value={formData.nim} onChange={handleChange}
                                            disabled={!isRegistrationOpen}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                                            placeholder="24120..."
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Program Studi</label>
                                        <select name="prodi" value={formData.prodi} onChange={handleChange}
                                            disabled={!isRegistrationOpen}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none disabled:opacity-50 disabled:cursor-not-allowed">
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
                                            disabled={!isRegistrationOpen}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                                            placeholder="Pagi / Malam"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Semester</label>
                                        <select name="semester" value={formData.semester} onChange={handleChange} required
                                            disabled={!isRegistrationOpen}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none disabled:opacity-50 disabled:cursor-not-allowed">
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
                                            disabled={!isRegistrationOpen}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                                            placeholder="nama@email.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                                            No. WhatsApp <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            name="noHp"
                                            required
                                            value={formData.noHp}
                                            onChange={handlePhoneChange}
                                            disabled={!isRegistrationOpen}
                                            className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${formData.noHp && !isValidPhone(formData.noHp)
                                                ? 'border-red-300 bg-red-50'
                                                : 'border-gray-200'
                                                }`}
                                            placeholder="08123456789"
                                        />
                                        {formData.noHp && !isValidPhone(formData.noHp) && (
                                            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                </svg>
                                                Format tidak valid. Harus dimulai dengan 08 (10-13 digit)
                                            </p>
                                        )}
                                        {formData.noHp && isValidPhone(formData.noHp) && (
                                            <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                Format nomor valid
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Input Alasan */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Alasan Bergabung UKM IT</label>
                                    <textarea name="alasan" required rows="3"
                                        value={formData.alasan} onChange={handleChange}
                                        disabled={!isRegistrationOpen}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                                        placeholder="Ceritakan motivasi singkatmu..."
                                    ></textarea>
                                    <p className="text-xs text-gray-500 mt-1">
                                        {formData.alasan.length}/500 karakter
                                    </p>
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

                                {/* Tombol Submit */}
                                <button
                                    type="submit"
                                    disabled={isLoading || !isRegistrationOpen}
                                    className={`w-full font-bold py-4 rounded-xl transition-all shadow-lg flex justify-center items-center gap-2 mt-4
                                        ${!isRegistrationOpen
                                            ? 'bg-red-500 cursor-not-allowed text-white'
                                            : isLoading
                                                ? 'bg-gray-400 cursor-not-allowed text-gray-100'
                                                : 'bg-blue-600 hover:bg-blue-700 text-white hover:-translate-y-1 hover:shadow-blue-500/30'
                                        }
                                    `}
                                >
                                    {!isRegistrationOpen ? (
                                        <>
                                            <AlertCircle size={20} />
                                            Pendaftaran Telah Ditutup
                                        </>
                                    ) : isLoading ? (
                                        <>
                                            <Loader2 className="animate-spin" />
                                            Sedang Mengirim...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} />
                                            Kirim Formulir Pendaftaran
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}