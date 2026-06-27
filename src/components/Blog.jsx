import React, { useState } from 'react';
import { playMenuSelectSound } from '../utils/audio';
import { FaTimes, FaCalendarAlt, FaClock } from 'react-icons/fa';

function Blog() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articlesData = [
    {
      id: 1,
      title: 'Pentingnya Arsitektur Single Page Application (SPA) untuk User Experience',
      category: 'Development',
      date: '12 Juni 2026',
      readTime: '5 Menit',
      shortDesc: 'Menjelaskan mengapa arsitektur SPA seperti React sangat krusial dalam mempercepat alur navigasi web modern, khususnya portal akademik.',
      longContent: (
        <>
          <p>Di era digital yang serba cepat ini, kecepatan loading halaman web adalah salah satu faktor penentu kepuasan pengguna. Arsitektur tradisional (Multi-Page Application) mengharuskan browser untuk memuat ulang seluruh aset halaman (HTML, CSS, JavaScript) setiap kali pengguna berpindah halaman. Hal ini menyebabkan jeda waktu layar putih yang mengganggu alur interaksi.</p>
          <p><strong>Single Page Application (SPA)</strong>, seperti yang dibangun menggunakan React, memecahkan masalah ini dengan hanya memuat dokumen HTML tunggal di awal. Navigasi berikutnya ditangani sepenuhnya di sisi klien secara dinamis. Komponen yang diperlukan diunduh sesuai kebutuhan, dan konten diperbarui secara instan tanpa memicu reload halaman penuh.</p>
          <h5 style={{ fontSize: '1.25rem', color: 'var(--accent-cyan)', margin: '16px 0 8px 0' }}>Keuntungan Utama SPA:</h5>
          <ul style={{ paddingLeft: '20px', listStyleType: 'square', display: 'flex', flexDirection: 'column', gap: '8px', margin: '8px 0' }}>
            <li><strong>Kecepatan & Responsivitas:</strong> Transisi antarhalaman terasa instan karena tidak ada reload.</li>
            <li><strong>Caching Aset:</strong> Aset lokal disimpan sekali dan digunakan berulang kali di seluruh halaman.</li>
            <li><strong>User Experience Mirip Aplikasi Native:</strong> Pengguna merasa seperti menggunakan aplikasi mobile atau desktop yang lancar.</li>
          </ul>
          <p style={{ marginTop: '12px' }}>Dalam merancang ulang konsep Portal Universitas Halu Oleo (UHO), penerapan arsitektur SPA terbukti mampu meningkatkan kenyamanan mahasiswa. Alur pengisian rencana studi dan pengecekan nilai dapat dilakukan tanpa hambatan buffering loading server yang menjengkelkan.</p>
        </>
      ),
      tags: ['React.js', 'SPA', 'UX']
    },
    {
      id: 2,
      title: 'Prinsip Dasar Desain UI/UX untuk Aplikasi Mobile E-Commerce',
      category: 'UI/UX Design',
      date: '05 Mei 2026',
      readTime: '7 Menit',
      shortDesc: 'Kupas tuntas metodologi Design Thinking dalam mengurangi tingkat keranjang belanja yang terabaikan pada aplikasi e-commerce.',
      longContent: (
        <>
          <p>Tingginya angka kegagalan checkout (shopping cart abandonment) pada aplikasi mobile e-commerce sering kali disebabkan oleh proses transaksi yang rumit, navigasi yang membingungkan, atau keharusan mengisi formulir panjang.</p>
          <p>Sebagai desainer UI/UX, tugas utama kita adalah menciptakan alur belanja yang se-gesit mungkin (frictionless). Melalui riset pengguna menggunakan metode Design Thinking, ditemukan bahwa pengguna mobile menghargai kejelasan visual dan efisiensi waktu.</p>
          <h5 style={{ fontSize: '1.25rem', color: 'var(--accent-cyan)', margin: '16px 0 8px 0' }}>Tiga Pilar Utama UI/UX E-Commerce Mobile:</h5>
          <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', margin: '8px 0' }}>
            <li><strong>Navigasi Jempol-Sentris:</strong> Memposisikan menu penting (keranjang belanja, pencarian, profil) di area bawah yang mudah dijangkau satu tangan.</li>
            <li><strong>Checkout 3-Langkah (3-Step Checkout):</strong> Memecah proses pembayaran menjadi tiga bagian sederhana: Alamat, Pengiriman/Metode Bayar, dan Konfirmasi Ringkasan.</li>
            <li><strong>Micro-Interactions yang Meyakinkan:</strong> Memberikan feedback visual halus saat produk ditambahkan ke keranjang, memberikan kepastian instan bagi pengguna.</li>
          </ol>
          <p style={{ marginTop: '12px' }}>Dengan menerapkan prinsip-prinsip ini pada konsep Mobile E-Commerce App, kita dapat meningkatkan tingkat keberhasilan konversi penjualan secara signifikan sekaligus memberikan pengalaman belanja yang menyenangkan bagi user.</p>
        </>
      ),
      tags: ['Figma', 'Mobile UX', 'Cart Rate']
    },
    {
      id: 3,
      title: 'Mengapa Grafis Vektor (SVG) Adalah Pilihan Terbaik untuk Personal Branding',
      category: 'Desain Grafis',
      date: '20 April 2026',
      readTime: '4 Menit',
      shortDesc: 'Membahas pentingnya konsistensi visual personal brand menggunakan aset vektor SVG agar tetap tajam di segala resolusi layar.',
      longContent: (
        <>
          <p>Personal branding di dunia digital menuntut visual yang profesional dan konsisten. Salah satu kesalahan umum yang sering dijumpai adalah penggunaan logo atau maskot berformat piksel (JPEG/PNG) berkualitas rendah yang pecah saat diperbesar di layar resolusi tinggi (seperti layar Retina atau monitor 4K).</p>
          <p><strong>Scalable Vector Graphics (SVG)</strong> menawarkan solusi dengan mendefinisikan gambar melalui persamaan matematika berupa titik, garis, dan kurva, bukan susunan kotak warna (piksel). Aset SVG dapat diperbesar hingga ukuran baliho raksasa maupun diperkecil sebagai favicon browser tanpa kehilangan ketajaman sedikit pun.</p>
          <h5 style={{ fontSize: '1.25rem', color: 'var(--accent-cyan)', margin: '16px 0 8px 0' }}>Mengapa Anda Harus Menggunakan SVG:</h5>
          <ul style={{ paddingLeft: '20px', listStyleType: 'square', display: 'flex', flexDirection: 'column', gap: '8px', margin: '8px 0' }}>
            <li><strong>Kemandirian Resolusi:</strong> Tampilan selalu tajam di semua jenis layar digital.</li>
            <li><strong>Ukuran File Sangat Kecil:</strong> Mengurangi beban kuota dan mempercepat loading web secara keseluruhan.</li>
            <li><strong>Manipulasi Kode CSS/JS:</strong> Aset SVG dapat diberi animasi hover warna atau rotasi dinamis secara langsung di dalam kode frontend.</li>
          </ul>
          <p style={{ marginTop: '12px' }}>Dalam mendesain identitas visual personal "hilfum", saya merancang logo dan maskot secara vektor penuh di Adobe Illustrator. Hasil SVG diintegrasikan ke web portfolio ini, memberikan kesan modern, rapi, dan responsif di setiap media publikasi digital.</p>
        </>
      ),
      tags: ['Illustrator', 'SVG', 'Branding']
    }
  ];

  return (
    <div className="blog-section fade-in" style={{ width: '100%' }}>
      <h3 className="section-title">DEV LOGS — ARCHIVES</h3>
      
      {/* Blog Cards Grid */}
      <div className="portfolio-grid">
        {articlesData.map((art) => (
          <div 
            key={art.id}
            className="portfolio-card glass-panel"
            onClick={() => {
              playMenuSelectSound();
              setSelectedArticle(art);
            }}
            style={{ padding: '0px', overflow: 'hidden', background: 'var(--bg-secondary)', display: 'flex', flexDirection: 'column', height: '100%' }}
          >
            {/* Save Card Header */}
            <div style={{
              background: 'rgba(255,255,255,0.05)',
              padding: '6px 12px',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.65rem',
              color: 'var(--accent-blue)',
              borderBottom: '2px solid rgba(255, 255, 255, 0.15)',
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <span>DATA LOG 0{art.id}</span>
              <span>{art.category.toUpperCase()}</span>
            </div>

            <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <h4 style={{ fontSize: '1.25rem', margin: '4px 0 0 0', color: 'var(--text-primary)', lineHeight: 1.3 }}>
                  {art.title.toUpperCase()}
                </h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: '8px 0 0 0' }}>
                  {art.shortDesc}
                </p>
              </div>

              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                borderTop: '1px dashed rgba(255, 255, 255, 0.1)', 
                paddingTop: '12px', 
                fontSize: '1.1rem', 
                fontFamily: 'var(--font-retro)',
                color: 'var(--text-secondary)' 
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <FaCalendarAlt style={{ color: 'var(--accent-cyan)' }} />
                  <span>{art.date.toUpperCase()}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <FaClock style={{ color: 'var(--accent-purple)' }} />
                  <span>{art.readTime.toUpperCase()}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="project-modal-overlay" onClick={() => setSelectedArticle(null)}>
          <div className="project-modal glass-panel fade-in" onClick={e => e.stopPropagation()} style={{ maxWidth: '650px', maxHeight: '85vh', overflowY: 'auto', padding: '32px', border: '4px double var(--accent-cyan)' }}>
            <button 
              className="modal-close-btn" 
              onClick={() => {
                playMenuSelectSound();
                setSelectedArticle(null);
              }}
              aria-label="Tutup artikel"
            >
              <FaTimes />
            </button>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', fontFamily: 'var(--font-retro)', fontSize: '1.25rem', color: 'var(--accent-cyan)' }}>
                <span>LOG 0{selectedArticle.id}</span>
                <span style={{ color: 'rgba(255, 255, 255, 0.15)' }}>|</span>
                <span>{selectedArticle.category.toUpperCase()}</span>
                <span style={{ color: 'rgba(255, 255, 255, 0.15)' }}>|</span>
                <span style={{ color: 'var(--text-secondary)' }}>{selectedArticle.date}</span>
                <span style={{ color: 'rgba(255, 255, 255, 0.15)' }}>|</span>
                <span style={{ color: 'var(--text-secondary)' }}>{selectedArticle.readTime}</span>
              </div>

              <h4 style={{ fontSize: '1.35rem', margin: 0, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                {selectedArticle.title.toUpperCase()}
              </h4>
              
              <div className="modal-desc" style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '14px', borderTop: '2px dashed rgba(255,255,255,0.1)', paddingTop: '16px', borderBottom: '2px dashed rgba(255,255,255,0.1)', paddingBottom: '16px', textTransform: 'none' }}>
                {selectedArticle.longContent}
              </div>

              <div>
                <h5 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', margin: '0 0 8px 0' }}>INDEX TAGS:</h5>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {selectedArticle.tags.map((tag, i) => (
                    <span key={i} className="modal-tech-tag" style={{ fontSize: '1.15rem' }}>#{tag.toUpperCase()}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Blog;
