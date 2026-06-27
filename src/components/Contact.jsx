import React, { useState, useEffect } from 'react';
import { playMenuSelectSound, playSuccessSound } from '../utils/audio';
import { FaPaperPlane, FaUser, FaEnvelope, FaPen, FaCheckCircle, FaTrash } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [sentMessages, setSentMessages] = useState([]);

  // Load sent messages from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('hilfum-sent-messages');
    if (saved) {
      try {
        setSentMessages(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    playSuccessSound();
    setIsSubmitting(true);

    // Simulate network transmission
    setTimeout(() => {
      const newMessage = {
        id: Math.random().toString(),
        name: formData.name,
        email: formData.email,
        message: formData.message,
        date: new Date().toLocaleDateString('id-ID', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      const updated = [newMessage, ...sentMessages];
      setSentMessages(updated);
      localStorage.setItem('hilfum-sent-messages', JSON.stringify(updated));

      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });

      // Clear success notification after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1200);
  };

  const handleClearMessages = () => {
    playMenuSelectSound();
    if (window.confirm('Hapus semua riwayat pesan terkirim lokal Anda?')) {
      setSentMessages([]);
      localStorage.removeItem('hilfum-sent-messages');
    }
  };

  return (
    <div className="contact-section fade-in" style={{ width: '100%', maxWidth: '750px', margin: '0 auto' }}>
      <h3 className="section-title">CONNECT — TRANSMIT MESSAGE</h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {/* Form Panel */}
        <div className="glass-panel" style={{ padding: '32px', background: 'var(--bg-secondary)' }}>
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.75rem', color: 'var(--accent-cyan)', marginBottom: '20px', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '10px' }}>
            SAVE POINT: RECORD MESSAGE
          </div>

          {isSuccess && (
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background: 'rgba(0, 255, 204, 0.05)',
                border: '2px solid var(--accent-cyan)',
                color: 'var(--accent-cyan)',
                padding: '16px',
                marginBottom: '24px',
                fontFamily: 'var(--font-retro)',
                fontSize: '1.25rem',
                animation: 'fadeIn 0.3s ease'
              }}
            >
              <FaCheckCircle size={18} style={{ flexShrink: 0 }} />
              <div>
                SYSTEM STATUS: DATA SAVED SUCCESSFUL! YOUR LOG WILL BE TRANSMITTED.
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Name Input */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontFamily: 'var(--font-retro)', fontSize: '1.2rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
                Full Name / Player ID
              </label>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }}>
                  <FaUser />
                </span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="INPUT NAME..."
                  required
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '14px 16px 14px 44px',
                    background: 'rgba(0, 0, 0, 0.3)',
                    border: '2px solid rgba(255, 255, 255, 0.15)',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.9rem',
                    fontFamily: 'var(--font-mono)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-cyan)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)'}
                />
              </div>
            </div>

            {/* Email Input */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontFamily: 'var(--font-retro)', fontSize: '1.2rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
                Email Address
              </label>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }}>
                  <FaEnvelope />
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="INPUT EMAIL..."
                  required
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '14px 16px 14px 44px',
                    background: 'rgba(0, 0, 0, 0.3)',
                    border: '2px solid rgba(255, 255, 255, 0.15)',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.9rem',
                    fontFamily: 'var(--font-mono)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-cyan)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)'}
                />
              </div>
            </div>

            {/* Message Input */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontFamily: 'var(--font-retro)', fontSize: '1.2rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
                Message Content
              </label>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: '16px', top: '16px', color: 'var(--text-secondary)' }}>
                  <FaPen />
                </span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="TYPE MESSAGE HERE..."
                  required
                  disabled={isSubmitting}
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '14px 16px 14px 44px',
                    background: 'rgba(0, 0, 0, 0.3)',
                    border: '2px solid rgba(255, 255, 255, 0.15)',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.9rem',
                    fontFamily: 'var(--font-mono)',
                    resize: 'none',
                    lineHeight: 1.5
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-cyan)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)'}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
              className="action-btn primary"
              style={{
                width: '100%',
                padding: '14px 20px',
                cursor: 'pointer',
                opacity: (isSubmitting || !formData.name || !formData.email || !formData.message) ? 0.6 : 1,
                fontSize: '1.25rem',
                fontFamily: 'var(--font-retro)',
                borderWidth: '2px'
              }}
            >
              {isSubmitting ? (
                <>SAVING PROGRESS...</>
              ) : (
                <>
                  <FaPaperPlane /> SAVE SYSTEM PROGRESS
                </>
              )}
            </button>
          </form>
        </div>

        {/* Message Logs (LocalStorage History) */}
        {sentMessages.length > 0 && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h4 style={{ fontSize: '1.25rem', margin: 0, fontWeight: 'normal', color: 'var(--text-primary)' }}>
                LOADED RECORD DATA SLOTS
              </h4>
              <button 
                onClick={handleClearMessages}
                style={{ 
                  background: 'transparent', 
                  border: 'none', 
                  color: 'var(--text-secondary)', 
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'var(--font-retro)',
                  fontSize: '1.1rem',
                  padding: '4px 8px'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-purple)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                <FaTrash size={12} /> PURGE SAVES
              </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {sentMessages.map((msg, idx) => (
                <div 
                  key={msg.id}
                  className="glass-panel"
                  style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px', background: 'var(--bg-secondary)' }}
                >
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    flexWrap: 'wrap', 
                    gap: '8px', 
                    fontSize: '1.1rem', 
                    fontFamily: 'var(--font-retro)',
                    color: 'var(--text-secondary)', 
                    borderBottom: '1px dashed rgba(255, 255, 255, 0.1)', 
                    paddingBottom: '8px' 
                  }}>
                    <div>
                      SENDER: <strong style={{ color: 'var(--accent-cyan)' }}>{msg.name.toUpperCase()}</strong> ({msg.email})
                    </div>
                    <span>SLOT {sentMessages.length - idx} · {msg.date}</span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)', lineHeight: 1.5, margin: 0 }}>
                    {msg.message}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
