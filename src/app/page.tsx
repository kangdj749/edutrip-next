// src/app/page.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FloatingWhatsApp } from '@/components/ui/floating-whatsapp';
import { QRISModal } from '@/components/ui/qris-modal';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import HeroSection from '@/components/HeroSection';

export default function HomePage() {
  const [formType, setFormType] = useState<'personal' | 'partnership'>('personal');
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    wa: '',
    alamat: '',
  });
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({ nama: false, wa: false, alamat: false });

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'snap',
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 2, spacing: 15 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 20 },
      },
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const errors = {
      nama: !formData.nama.trim(),
      wa: !formData.wa.trim(),
      alamat: !formData.alamat.trim(),
    };
    setFormErrors(errors);
    return !Object.values(errors).some(Boolean);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, tipe: formType }),
      });

      if (!res.ok) throw new Error('Gagal menyimpan ke Google Sheet');

      const linkUnduh =
        formType === 'personal'
          ? '/proposal-edutrip-personal.pdf'
          : '/proposal-edutrip-partnership.pdf';
      const anchor = document.createElement('a');
      anchor.href = linkUnduh;
      anchor.download = '';
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);

      const adminWa = '6281224128899';
      const msg = `Assalamu\u0026#39;alaikum. Saya minat berkontribusi di event Edutrip.\nNama: ${formData.nama}\nTipe: ${formType}\nWA: ${formData.wa}`;
      const url = `https://wa.me/${adminWa}?text=${encodeURIComponent(msg)}`;
      window.location.href = url;
    } catch (error) {
      alert('Gagal mengirim data. Silakan coba lagi.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-red-50 to-white text-gray-800 font-sans">
      <HeroSection />
       {/* Section Agenda Acara */}
      <section className="bg-white py-20 px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-700 mb-12">Agenda Acara</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Konser Amal",
              desc: "Penampilan Akustik dari anak Yatim Dhuafa Feat. Spesial Guest Stars. Penampilan Da'i cilik dan sambung ayat hapalan Qur'an",
              icon: "🎸",
            },
            
            {
              title: "Edukasi Budaya",
              desc: "Trip keliling Museum Sri Baduga untuk mengenal sejarah Indonesia",
              icon: "🏛️",
            },
            {
              title: "Penampilan Tari",
              desc: "Penampilan seni tari dari Sanggar Seni Sri Baduga",
              icon: "💃",
            },
            {
              title: "Beasiswa Prestasi",
              desc: "Pemberian simbolis penyaluran program siswa berprestasi",
              icon: "🎓",
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-6 bg-yellow-100 rounded-xl shadow hover:shadow-lg transition-all duration-300 animate-fadeInUp"
            >
              <div className="text-4xl">{item.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-yellow-800 mb-1">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

       {/* Section Target Donasi */}
      <section className="bg-yellow-50 py-20 px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-800 mb-12">Target Donasi & Dukungan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <Card>
            <CardContent className="space-y-4">
              <h3 className="text-xl font-semibold text-yellow-800">Donatur Personal</h3>
              <ul className="text-sm text-gray-700 list-disc list-inside">
                <li>Konsumsi 150 Anak & Relawan: Rp 7.000.000</li>
                <li>Transportasi 5 Minibus: Rp 7.500.000</li>
                <li>Santunan & Bingkisan Anak: Rp 30.000.000</li>
                <li>Merchandise: Rp 2.500.000</li>
                <li>Dokumentasi & Publikasi: Rp 1.500.000</li>
              </ul>
              <p className="font-semibold text-yellow-700 text-lg">Total Target: Rp 48.500.000</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-4">
              <h3 className="text-xl font-semibold text-yellow-800">Partner / Sponsor</h3>
              <ul className="text-sm text-gray-700 list-disc list-inside">
                <li><strong>Platinum</strong> ≥ Rp 20jt – Booth, logo besar, media publikasi</li>
                <li><strong>Gold</strong> Rp 10–19jt – Logo, booth opsional</li>
                <li><strong>Silver</strong> Rp 5–9jt – Logo Sosmed & Sertifikat</li>
              </ul>
              <p className="text-sm text-gray-500">Paket sponsor disesuaikan kebutuhan & branding partner.</p>
            </CardContent>
          </Card>
        </div>
      </section>
      

       {/* Section Registrasi */}
      <section id="registrasi" className="bg-yellow-50 py-20 px-6 md:px-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-800 mb-8">Pilih Jenis Partisipasi</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Button onClick={() => { setFormType('personal'); setModalOpen(true); }} className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg shadow-lg text-lg font-semibold">Perorangan</Button>
          <Button onClick={() => { setFormType('partnership'); setModalOpen(true); }} className="bg-white border border-yellow-500 text-yellow-700 hover:bg-yellow-100 px-6 py-3 rounded-lg shadow-lg text-lg font-semibold">Partnership / Sponsor</Button>
        </div>
      </section>

      {/* Modal Registrasi Form */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-md w-full p-6 animate-fadeIn">
          <DialogTitle className="text-xl font-bold text-yellow-800 text-center">
            Form Registrasi {formType === 'personal' ? 'Perorangan' : 'Partnership'}
          </DialogTitle>
          <p className="text-[11px] text-gray-500 text-center mt-1 mb-4">
            Silakan isi data dengan benar dan proposal event langsung terunduh (PDF).
          </p>
          <form className="space-y-4 mt-2" onSubmit={handleSubmit}>
            <input name="nama" value={formData.nama} onChange={handleChange} type="text" placeholder="Nama" required className={`w-full p-3 rounded-lg border ${formErrors.nama ? 'border-red-400' : 'border-gray-300'} focus:ring-2 focus:ring-yellow-400 focus:outline-none`} />
            <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email (Opsional)" className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none" />
            <input name="wa" value={formData.wa} onChange={handleChange} type="text" placeholder="No WhatsApp" required className={`w-full p-3 rounded-lg border ${formErrors.wa ? 'border-red-400' : 'border-gray-300'} focus:ring-2 focus:ring-yellow-400 focus:outline-none`} />
            <input name="alamat" value={formData.alamat} onChange={handleChange} type="text" placeholder="Alamat" required className={`w-full p-3 rounded-lg border ${formErrors.alamat ? 'border-red-400' : 'border-gray-300'} focus:ring-2 focus:ring-yellow-400 focus:outline-none`} />
            <Button type="submit" disabled={loading} className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold text-lg py-3 rounded-lg transition-transform duration-300 transform hover:scale-105">
              {loading ? 'Mengirim...' : 'Kirim Registrasi'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Galeri & Testimoni */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10 animate-fadeInUp">Galeri & Testimoni</h2>
        <div className="relative max-w-6xl mx-auto animate-fadeInUp">
          <div ref={sliderRef} className="keen-slider rounded-xl overflow-hidden">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="keen-slider__slide rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-500 transform hover:scale-[1.01]"
              >
                <Image
                  src={`/galeri${n}.jpeg`}
                  alt={`Galeri ${n}`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-6 px-4">
            <Button variant="outline" onClick={() => slider.current?.prev()} className="text-sm px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition">⬅ Prev</Button>
            <Button variant="outline" onClick={() => slider.current?.next()} className="text-sm px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition">Next ➡</Button>
          </div>
        </div>
        <div className="max-w-2xl mx-auto mt-8 text-center">
          <blockquote className="text-gray-600 italic">“Anak-anak sangat antusias, ini pengalaman pertama mereka naik bus wisata dan ke museum! Terima kasih para donatur.”</blockquote>
          <p className="mt-2 font-semibold text-gray-700">— Relawan EduTrip 2024</p>
        </div>
      </section>
      {/* Section Video Embed */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Video Realisasi</h2>
        <div className="max-w-5xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg animate-fadeInUp">
          <iframe
            src="https://www.youtube.com/embed/d8XE4uiZ_qc"
            title="Video Realisasi EduTrip"
            className="w-full h-full"
            allowFullScreen
          ></iframe>
        </div>
      </section>


      <FloatingWhatsApp />
      <QRISModal />
    </main>
  );
}
