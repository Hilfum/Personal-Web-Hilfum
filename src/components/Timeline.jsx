import React, { useState } from 'react';
import { playMenuSelectSound } from '../utils/audio';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

function Timeline() {
  const [activeFilter, setActiveFilter] = useState('all');

  const timelineData = [
    {
      id: 1,
      year: '2022 - Sekarang',
      title: 'Universitas Halu Oleo',
      subtitle: 'Teknik Informatika S1 (Angkatan 2022)',
      desc: 'Mahasiswa aktif tingkat akhir di Jurusan Teknik Informatika. Fokus pada pemrograman web, rekayasa perangkat lunak, dan interaksi manusia-komputer (UI/UX). IPK saat ini sangat memuaskan.',
      category: 'edu',
      icon: <FaGraduationCap />,
      current: true
    },
    {
      id: 2,
      year: '2024 - Sekarang',
      title: 'Freelance Graphic Designer & UI/UX',
      subtitle: 'Self-Employed',
      desc: 'Menerima proyek desain visual branding, aset grafis game, dan desain interface aplikasi mobile untuk klien lokal secara remote. Berkolaborasi dengan developer untuk mengimplementasikan UI mockup.',
      category: 'work',
      icon: <FaBriefcase />,
      current: true
    },
    {
      id: 3,
      year: '2024',
      title: 'Redesign Concept UHO Portal',
      subtitle: 'Personal Portfolio Project',
      desc: 'Merancang ulang antarmuka portal akademik Universitas Halu Oleo agar lebih responsif menggunakan React.js. Meningkatkan kegunaan sistem bagi ribuan mahasiswa aktif.',
      category: 'work',
      icon: <FaBriefcase />,
      current: false
    },
    {
      id: 4,
      year: '2019 - 2022',
      title: 'SMA TQ Muadz Bin Jabal Kendari',
      subtitle: 'Jurusan IPA',
      desc: 'Menyelesaikan pendidikan menengah atas dengan minat tinggi pada mata pelajaran TIK dan Desain Grafis dasar.',
      category: 'edu',
      icon: <FaGraduationCap />,
      current: false
    },
    {
      id: 5,
      year: '2017 - 2019',
      title: 'SMP TQ Muadz Bin Jabal Kendari',
      subtitle: 'Pendidikan Menengah Pertama',
      desc: 'Masa studi pendidikan menengah pertama, aktif di ekstrakurikuler komputer dan literasi.',
      category: 'edu',
      icon: <FaGraduationCap />,
      current: false
    },
    {
      id: 6,
      year: '2015 - 2017',
      title: 'SDN 1 Poasia Kendari',
      subtitle: 'Pendidikan Sekolah Dasar',
      desc: 'Pendidikan sekolah dasar dasar di Kendari, Sulawesi Tenggara.',
      category: 'edu',
      icon: <FaGraduationCap />,
      current: false
    }
  ];

  const filteredData = activeFilter === 'all'
    ? timelineData
    : timelineData.filter(item => item.category === activeFilter);

  return (
    <div className="timeline-section fade-in" style={{ width: '100%' }}>
      <h3 className="section-title">QUEST LOG — MISSION RECORDS</h3>

      {/* Filter Tabs */}
      <div className="portfolio-filters" style={{ marginBottom: '32px', display: 'flex', justifyContent: 'center', gap: '8px' }}>
        <button
          onClick={() => {
            playMenuSelectSound();
            setActiveFilter('all');
          }}
          className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
        >
          ALL MISSION
        </button>
        <button
          onClick={() => {
            playMenuSelectSound();
            setActiveFilter('edu');
          }}
          className={`filter-btn ${activeFilter === 'edu' ? 'active' : ''}`}
          style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <FaGraduationCap /> MAIN QUEST
        </button>
        <button
          onClick={() => {
            playMenuSelectSound();
            setActiveFilter('work');
          }}
          className={`filter-btn ${activeFilter === 'work' ? 'active' : ''}`}
          style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <FaBriefcase /> SIDE QUEST
        </button>
      </div>

      {/* Quest Logs list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '800px', margin: '0 auto' }}>
        {filteredData.map((item) => (
          <div 
            key={item.id} 
            className="glass-panel"
            style={{
              padding: '20px 24px',
              background: 'var(--bg-secondary)',
              borderLeft: '6px solid ' + (item.current ? 'var(--accent-cyan)' : 'var(--text-secondary)')
            }}
          >
            {/* Quest Header Status */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px dashed rgba(255,255,255,0.1)',
              paddingBottom: '8px',
              marginBottom: '12px'
            }}>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.68rem',
                color: item.current ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                {item.current ? (
                  <>
                    <span style={{ animation: 'blink-fast 0.6s step-end infinite' }}>[▶]</span> ACTIVE QUEST
                  </>
                ) : (
                  <>
                    <span style={{ color: 'var(--accent-cyan)' }}>[✔]</span> QUEST COMPLETED
                  </>
                )}
              </span>
              <span style={{ fontFamily: 'var(--font-retro)', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
                PERIOD: {item.year}
              </span>
            </div>

            {/* Quest Details */}
            <h4 style={{ fontSize: '1.35rem', margin: '0 0 4px 0', color: 'var(--text-primary)' }}>
              MISSION: {item.title.toUpperCase()}
            </h4>
            <h5 style={{ fontSize: '1.05rem', margin: '0 0 12px 0', color: 'var(--accent-blue)', fontWeight: 'normal' }}>
              CLASS: {item.subtitle}
            </h5>
            
            <div style={{
              background: 'rgba(0, 0, 0, 0.2)',
              padding: '12px 16px',
              borderLeft: '2px solid var(--accent-blue)',
              marginTop: '8px'
            }}>
              <div style={{ fontFamily: 'var(--font-retro)', fontSize: '1.1rem', color: 'var(--accent-cyan)', marginBottom: '4px' }}>
                OBJECTIVE DETAILS:
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
