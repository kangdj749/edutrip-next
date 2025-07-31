// src/app/page.tsx
'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FloatingWhatsApp } from '@/components/ui/floating-whatsapp';
import { QRISModal } from '@/components/ui/qris-modal';
import { Badge } from '@/components/ui/badge';
import { Alert } from '@/components/ui/alert';
import { Modal } from '@/components/ui/modal';
import Image from "next/image";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-red-50 to-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="text-center py-16 px-4 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-700 tracking-tight drop-shadow-sm">
          Harmoni Merdeka <span className="text-gray-800">EduTrip</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
          Bergabunglah dalam perjalanan edukatif dan inspiratif memperingati kemerdekaan bersama anak-anak yatim dan dhuafa.
        </p>
        <div className="mt-6 flex justify-center">
          <Badge className="bg-yellow-100 text-yellow-800 text-sm">Donasi Terbuka hingga 17 Agustus</Badge>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-white py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4 text-red-600">Mengapa EduTrip Ini Penting?</h2>
        <p className="max-w-2xl mx-auto text-gray-700">
          Ratusan anak-anak belum pernah mengunjungi museum, mengenal sejarah bangsanya, atau merasakan inspirasi kemerdekaan. EduTrip ini adalah solusi untuk memberikan mereka pengalaman berharga yang menumbuhkan cinta tanah air dan semangat berbagi.
        </p>
      </section>

      {/* Solution Section */}
      <section className="py-12 px-6 bg-red-50">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Pilih Peranmu dalam Kebaikan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Card>
            <CardContent className="space-y-4">
              <h3 className="text-xl font-semibold text-red-700">Donatur Personal</h3>
              <p className="text-sm text-gray-700">Berikan bantuan terbaikmu:</p>
              <ul className="text-sm text-gray-600 list-disc list-inside">
                <li>Paket A - Rp100.000 (Transportasi & Konsumsi)</li>
                <li>Paket B - Rp300.000 (Santunan & Bingkisan)</li>
                <li>Nominal Bebas</li>
              </ul>
              <Button className="w-full bg-red-600 hover:bg-red-700">Donasi Sekarang</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-4">
              <h3 className="text-xl font-semibold text-yellow-600">Partner / Sponsor</h3>
              <p className="text-sm text-gray-700">Dukung dengan kontribusi institusi Anda:</p>
              <ul className="text-sm text-gray-600 list-disc list-inside">
                <li>Platinum &gt; Rp20jt (Booth, logo besar, publikasi media)</li>
                <li>Gold Rp10–19jt (Logo, booth opsional)</li>
                <li>Silver Rp5–9jt (Logo Sosmed & Sertifikat)</li>
              </ul>
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600">Ajukan Partnership</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA & Form Section */}
      <section className="py-12 px-6 bg-white">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Tinggalkan Dukunganmu</h2>
        <div className="max-w-xl mx-auto">
          <Alert
            title="Perhatian"
            message="Donasi hanya melalui rekening resmi kami atau QRIS yang tersedia."
            className="mb-4"
          />
          <Card className="shadow-xl border-red-200">
            <CardContent>
              <form className="space-y-4">
                <Input placeholder="Nama Anda" className="transition focus:scale-105 duration-150" />
                <Textarea placeholder="Pesan / Dukungan" className="transition focus:scale-105 duration-150" />
                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 transition-all duration-200">
                  Kirim Dukungan
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Galeri & Testimoni Section */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Galeri & Testimoni</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          <Image
                src="/galeri1.jpg"
                alt="Galeri EduTrip"
                width={400}
                height={300}
                className="rounded shadow-md"
              />
          <Image
                src="/galeri2.jpg"
                alt="Galeri EduTrip"
                width={400}
                height={300}
                className="rounded shadow-md"
              />
          <Image
                src="/galeri3.jpg"
                alt="Galeri EduTrip"
                width={400}
                height={300}
                className="rounded shadow-md"
              />
          <Image
                src="/galeri4.jpg"
                alt="Galeri EduTrip"
                width={400}
                height={300}
                className="rounded shadow-md"
              />           
          
        </div>
        <div className="max-w-2xl mx-auto mt-8 text-center">
          <blockquote className="text-gray-600 italic">“Anak-anak sangat antusias, ini pengalaman pertama mereka naik bus wisata dan ke museum! Terima kasih para donatur.”</blockquote>
          <p className="mt-2 font-semibold text-gray-700">— Relawan EduTrip 2024</p>
        </div>
      </section>

      {/* Modal Button */}
      <div className="text-center my-10">
        <Button onClick={() => setModalOpen(true)} className="bg-yellow-500 hover:bg-yellow-600">
          Lihat Ucapan Merdeka
        </Button>
      </div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2 text-red-600">Selamat Menyambut Hari Kemerdekaan!</h2>
          <p className="text-gray-700">Mari wujudkan generasi tangguh melalui EduTrip!</p>
        </div>
      </Modal>

      {/* Floating Action */}
      <FloatingWhatsApp />
      <QRISModal />
    </main>
  );
}
