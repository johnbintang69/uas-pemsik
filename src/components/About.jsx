import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <h1 className="text-3xl font-bold mb-8 text-center">Tentang Aplikasi</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Aplikasi Penanggulangan Kekeringan</h2>
        <p className="mb-4">
          Aplikasi Penanggulangan Kekeringan adalah platform yang dirancang untuk membantu pemerintah, organisasi, dan masyarakat dalam mengelola dan merespons situasi kekeringan. Aplikasi ini menyediakan informasi real-time, analisis data, dan alat manajemen sumber daya untuk mendukung pengambilan keputusan yang efektif dalam menghadapi tantangan kekeringan.
        </p>
        <h3 className="text-lg font-bold mb-2">Fitur Utama:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Dashboard interaktif dengan indikator kekeringan terkini</li>
          <li>Peta kekeringan yang dapat disesuaikan</li>
          <li>Data cuaca dan prediksi</li>
          <li>Manajemen sumber daya dan distribusi bantuan</li>
          <li>Laporan dan analisis mendalam</li>
        </ul>
        <h3 className="text-lg font-bold mb-2">Tujuan:</h3>
        <p className="mb-4">
          Tujuan utama dari aplikasi ini adalah untuk meningkatkan kesiapsiagaan dan respons terhadap kekeringan, mengurangi dampak negatif pada masyarakat dan lingkungan, serta mendorong pengelolaan sumber daya air yang lebih efisien.
        </p>
        <h3 className="text-lg font-bold mb-2">Kontak:</h3>
        <p>
          Untuk informasi lebih lanjut atau bantuan teknis, silakan hubungi tim dukungan kami di support@kekeringan-app.go.id atau telepon 0800-1234-5678.
        </p>
      </div>
    </div>
  );
};

export default About;

