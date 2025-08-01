import React, { useState } from 'react';
import Image from 'next/image';

export const QRISModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-20 right-4 z-50 bg-indigo-600 text-white rounded-full px-4 py-2 shadow hover:bg-indigo-700"
      >
        Donasi QRIS
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center relative w-80">
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-800"
              onClick={() => setOpen(false)}
            >
              
            </button>
            <h3 className="text-lg font-bold mb-4">Scan QRIS untuk Donasi</h3>
            <Image src="/qris.jpg" alt="QRIS Donasi" width={500} height={500} className="w-full rounded-lg shadow" />
              
          </div>
        </div>
      )}
    </>
  );
};