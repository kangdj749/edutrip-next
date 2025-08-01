import Lottie from "lottie-react";
import celebrationAnimation from "@/assets/lottie/celebration.json";
import { useState } from "react";
import { useRouter } from "next/navigation";



export default function HeroSection() {

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleClick = () => {
    const registrasiSection = document.getElementById("registrasi");
    if (registrasiSection) {
      registrasiSection.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <div
      className="relative bg-cover bg-center min-h-screen overflow-hidden"
      style={{ backgroundImage: "url('/bg-hero.png')" }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Bendera animasi kiri dan kanan */}
      <img
        src="/bendera2.png"
        alt="Bendera Kiri"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 h-20 w-auto animate-wiggle"
      />
      <img
        src="/bendera.png"
        alt="Bendera Kanan"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 h-20 w-auto animate-wiggle"
      />

      {/* Header logo */}
      <header className="relative z-10 flex items-center justify-between px-6 py-4 animate-fadeInDown">
        <img src="/logo-yayasan.png" alt="Logo Yayasan" className="h-12 w-auto" />
        <p className="text-white text-xs md:text-sm font-medium mx-2 text-center flex-1">LAZ GDI Present</p>
        <img src="/logo-event.png" alt="Logo Event" className="h-10 w-auto" />
      </header>

      {/* Hero Text */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-12 text-white animate-fadeInUp delay-200">
        <p className="text-lg md:text-2xl text-gradient bg-gradient-to-r from-yellow-400 via-white to-yellow-400 bg-clip-text text-transparent mt-4 fade-in delay-300 max-w-3xl">
            EDUTRIP & KONSER AMAL
        </p>

        <h1 className="text-5xl md:text-6xl font-extrabold text-white animate-bounce leading-none">HARMONI</h1>
        <h1 className="text-5xl md:text-8xl font-extrabold text-white animate-bounce delay-150 leading-none">MERDEKA</h1>

        <p className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-yellow-400 via-white to-yellow-400 bg-clip-text text-transparent mt-4 fade-in delay-300 max-w-3xl">
            Cinta Al-Qur'an. Cinta Negeri
        </p>

        <p className="text-xs md:text-sm text-white mt-2 fade-in delay-500">Minggu, 24 Agustus 2025</p>
        <p className="mt-4 text-sm md:text-base max-w-xl text-white/90 font-light fade-in delay-500">
          Bergabunglah dalam perjalanan edukatif dan inspiratif memperingati kemerdekaan bersama anak-anak yatim dan dhuafa.
        </p>

            
        {/* CTA Button dengan animasi */}
        <button
        onClick={handleClick}
        className="mt-6 px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg tracking-wide uppercase"
        >
        Daftar Sekarang
        </button>

        
        {/* Ilustrasi Animasi Pengganti Lottie */}
          <div className="w-40 md:w-56 mt-6 animate-float-slow">
            <img src="/celebration.svg" alt="Perayaan Kemerdekaan" className="mx-auto animate-pulse-slow" />
          </div>
      </div>

      
       {/* Tambahkan animasi bendera dan teks */}
        <style jsx>{`
          @keyframes wiggle {
            0%, 100% { transform: translateY(-50%) rotate(-3deg); }
            50% { transform: translateY(-50%) rotate(3deg); }
          }
          .animate-wiggle {
            animation: wiggle 2s ease-in-out infinite;
          }
          @keyframes fadeInDown {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInDown {
            animation: fadeInDown 1s ease-out forwards;
          }
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp {
            animation: fadeInUp 1.2s ease-out forwards;
          }
          .fade-in {
            opacity: 0;
            animation: fadeInUp 1s ease forwards;
          }
          .delay-150 { animation-delay: 0.15s; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-300 { animation-delay: 0.3s; }
          .delay-500 { animation-delay: 0.5s; }
          .delay-700 { animation-delay: 0.7s; }

          @keyframes floatSlow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-float-slow {
            animation: floatSlow 6s ease-in-out infinite;
          }

          @keyframes pulseSlow {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.05); }
          }
          .animate-pulse-slow {
            animation: pulseSlow 4s ease-in-out infinite;
          }
        `}</style>
    </div>
  );
}
