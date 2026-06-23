import React, { useState } from 'react';

function Materi() {
  const [activeSubTab, setActiveSubTab] = useState('windows');

  const tabs = [
    { id: 'windows', label: 'Windows OS' },
    { id: 'office', label: 'MS Office' },
    { id: 'slides', label: 'Bahan Tayang' },
    { id: 'desain', label: 'Desain Grafis' }
  ];

  return (
    <div className="materi-section fade-in">
      <h2 className="section-title">Rangkuman Materi Kuliah</h2>
      
      <div className="materi-tabs-container">
        
        {/* Left Side: Navigation Tabs */}
        <div className="materi-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id)}
              className={`materi-tab-btn ${activeSubTab === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Right Side: Tab Panel Content */}
        <div className="materi-content-card glass-panel">
          
          {/* WINDOWS TAB */}
          {activeSubTab === 'windows' && (
            <div className="fade-in">
              <h3 className="materi-content-header">Sistem Operasi Windows</h3>
              <p className="materi-intro-p">
                Microsoft Windows adalah sistem operasi yang dikembangkan oleh Microsoft, didirikan oleh Bill Gates dan Paul Allen. 
                Sistem operasi ini dibangun menggunakan antarmuka pengguna grafis (GUI) untuk menyederhanakan interaksi dan perintah pengguna.
              </p>

              <div className="features-grid">
                <div className="feature-item-card">
                  <h4>Fungsi Utama</h4>
                  <ul style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', paddingLeft: '16px', listStyleType: 'disc' }}>
                    <li>Menyediakan antarmuka antara pengguna dengan mesin.</li>
                    <li>Mengkoordinasikan komponen pada perangkat keras.</li>
                    <li>Menyediakan wadah agar perangkat lunak berfungsi selayaknya.</li>
                    <li>Menyediakan struktur manajemen data & memantau fungsi sistem.</li>
                  </ul>
                </div>
                <div className="feature-item-card">
                  <h4>Perkembangan Versi</h4>
                  <p style={{ fontSize: '0.85rem' }}>
                    Windows 1.0, 2.0, 3.0, NT, 95, 98, ME, 2000, XP, Vista, Windows 7, Windows 8, Windows 10, dan Windows 11.
                  </p>
                </div>
              </div>

              <div className="comparison-table-wrapper">
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Kelebihan</th>
                      <th>Kekurangan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <ul>
                          <li>Mudah digunakan (User Friendly)</li>
                          <li>Dukungan software yang melimpah</li>
                          <li>Kompatibilitas perangkat keras yang luas</li>
                          <li>Fitur Plug & Play untuk kemudahan install</li>
                        </ul>
                      </td>
                      <td>
                        <ul>
                          <li>Kebutuhan sumber daya sistem yang tinggi</li>
                          <li>Harga lisensi resmi yang relatif mahal</li>
                          <li>Sifatnya closed source (sumber tertutup)</li>
                          <li>Rentan terhadap serangan virus/malware</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* MS OFFICE TAB */}
          {activeSubTab === 'office' && (
            <div className="fade-in">
              <h3 className="materi-content-header">Microsoft Office (Word & Excel)</h3>
              
              {/* MS Word */}
              <div style={{ marginBottom: '32px' }}>
                <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '8px' }}>Microsoft Word</h4>
                <p className="materi-intro-p">
                  Perangkat lunak pengolah kata (word processor) andalan Microsoft. Membantu pengguna dalam pembuatan, 
                  penyuntingan, dan pengelolaan dokumen berbasis teks.
                </p>
                
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Kelebihan Word</th>
                      <th>Kekurangan Word</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <ul>
                          <li>Interface intuitif bagi pemula</li>
                          <li>Fitur SmartArt & template dokumen melimpah</li>
                          <li>Quick Access Toolbar mempercepat navigasi</li>
                        </ul>
                      </td>
                      <td>
                        <ul>
                          <li>Ukuran aplikasi berat & memakan RAM</li>
                          <li>Instalasi dan lisensi berbayar / rumit</li>
                          <li>Beberapa versi membatasi kompatibilitas OS</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* MS Excel */}
              <div>
                <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '8px' }}>Microsoft Excel</h4>
                <p className="materi-intro-p">
                  Aplikasi lembar kerja (spreadsheet) terbaik untuk mengolah data dan angka menggunakan kolom dan baris formula. 
                  Tersedia secara multi-platform (Windows, MacOS, Android, iOS).
                </p>
                
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Kelebihan Excel</th>
                      <th>Kekurangan Excel</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <ul>
                          <li>User interface yang sangat dipahami industri</li>
                          <li>Kompatibilitas file (.xls, .xlsx, .csv) yang luas</li>
                          <li>Rumus dan logika formula sangat lengkap</li>
                        </ul>
                      </td>
                      <td>
                        <ul>
                          <li>Fitur statistika tingkat lanjut yang terbatas</li>
                          <li>Jumlah baris dan kolom sel memiliki batasan</li>
                          <li>Add-ins tingkat lanjut (fuzzy logic, neural network) kurang kuat dibanding MATLAB</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* SLIDES TAB */}
          {activeSubTab === 'slides' && (
            <div className="fade-in">
              <h3 className="materi-content-header">Aplikasi Pengolah Bahan Tayang</h3>
              <p className="materi-intro-p">
                Perangkat presentasi digunakan untuk menyampaikan informasi secara visual dalam bentuk slide. 
                Sangat berguna untuk pengajaran, pelatihan kerja, promosi bisnis, hingga proposal project.
              </p>

              <div className="features-grid">
                <div className="feature-item-card">
                  <h4>Macam-macam Aplikasi</h4>
                  <ul style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', paddingLeft: '16px', listStyleType: 'disc' }}>
                    <li>Microsoft PowerPoint</li>
                    <li>Google Slides</li>
                    <li>Canva & Prezi</li>
                    <li>iWork Keynote & OpenOffice Impress</li>
                  </ul>
                </div>
                <div className="feature-item-card">
                  <h4>Google Slides</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    Layanan presentasi online berbasis cloud dari Google (bagian dari Google Workspace). 
                    Sangat andal untuk kolaborasi tim real-time secara gratis.
                  </p>
                </div>
              </div>

              <div className="comparison-table-wrapper" style={{ marginTop: '24px' }}>
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Kelebihan Google Slides</th>
                      <th>Kekurangan Google Slides</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <ul>
                          <li>Berbasis cloud, aman & tersimpan otomatis</li>
                          <li>Fitur kolaborasi tim real-time yang lancar</li>
                          <li>Mudah digunakan & 100% gratis</li>
                        </ul>
                      </td>
                      <td>
                        <ul>
                          <li>Wajib memiliki akun Google (Gmail)</li>
                          <li>Pilihan efek animasi & transisi lebih sedikit dibanding PowerPoint</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* DESAIN GRAFIS TAB */}
          {activeSubTab === 'desain' && (
            <div className="fade-in">
              <h3 className="materi-content-header">Desain Grafis & Digital Art</h3>
              <p className="materi-intro-p">
                Desain grafis adalah perpaduan estetika perancangan gambar, titik, dan garis berdasarkan kreativitas 
                untuk menyampaikan informasi atau kepentingan cetak/digital.
              </p>

              <div className="features-grid" style={{ marginBottom: '32px' }}>
                <div className="feature-item-card">
                  <h4>Format Vektor</h4>
                  <p>
                    Terbentuk dari titik & garis matematika. Kelebihan utamanya adalah resolusi tidak pecah saat diperbesar. 
                    Contoh tools: Adobe Illustrator, CorelDraw.
                  </p>
                </div>
                <div className="feature-item-card">
                  <h4>Format Bitmap</h4>
                  <p>
                    Tersusun atas piksel & kombinasi warna. Jika diperbesar, detailnya akan terlihat kotak-kotak (pecah). 
                    Contoh tools: Adobe Photoshop.
                  </p>
                </div>
              </div>

              <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '16px' }}>Jenis - Jenis Digital Art</h4>
              <div className="digital-art-grid">
                
                <div className="art-style-item">
                  <div className="art-style-info">
                    <h4>Vector Art</h4>
                    <p>Gambar yang terbentuk dari garis dan kurva tegas, menghasilkan visual ala kartun namun menyerupai objek nyata.</p>
                  </div>
                  <div className="art-style-image-wrapper">
                    <img src="/assets/art.png" alt="Vector Art" className="art-style-img" />
                  </div>
                </div>

                <div className="art-style-item">
                  <div className="art-style-info">
                    <h4>WPAP</h4>
                    <p>Wedha's Pop Art Portrait - seni ilustrasi wajah geometris dengan kontradiksi warna cerah tanpa menghilangkan elemen gelap-terang.</p>
                  </div>
                  <div className="art-style-image-wrapper">
                    <img src="/assets/wpap.png" alt="WPAP" className="art-style-img" />
                  </div>
                </div>

                <div className="art-style-item">
                  <div className="art-style-info">
                    <h4>Line Art</h4>
                    <p>Seni garis tegas tanpa adanya gradasi warna, biasanya didominasi warna hitam-putih mirip sketsa manual.</p>
                  </div>
                  <div className="art-style-image-wrapper">
                    <img src="/assets/Picture3.png" alt="Line Art" className="art-style-img" />
                  </div>
                </div>

                <div className="art-style-item">
                  <div className="art-style-info">
                    <h4>Low Poly Art</h4>
                    <p>Seni grafis dengan visual rangkaian bentuk geometris/kristal yang menyatu membentuk suatu objek estetis.</p>
                  </div>
                  <div className="art-style-image-wrapper">
                    <img src="/assets/Picture4.jpg" alt="Low Poly Art" className="art-style-img" />
                  </div>
                </div>

                <div className="art-style-item">
                  <div className="art-style-info">
                    <h4>Flat Design</h4>
                    <p>Desain minimalis modern yang berfokus pada kebersihan bentuk 2D, warna cerah, tanpa bayangan/bevel berlebih.</p>
                  </div>
                  <div className="art-style-image-wrapper">
                    <img src="/assets/Picture5.jpg" alt="Flat Design" className="art-style-img" />
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Materi;
