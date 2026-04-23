import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiPhone } from 'react-icons/fi';
import { personalInfo } from '../data/data';

const socials = [
  { icon: <FiGithub size={18} />, link: personalInfo.github, label: 'GitHub' },
  { icon: <FiLinkedin size={18} />, link: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: <FiInstagram size={18} />, link: personalInfo.instagram, label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--dark2)',
      borderTop: '1px solid var(--border)',
      padding: '0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* CTA band */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(255,214,0,0.06) 0%, transparent 60%)',
        borderBottom: '1px solid var(--border)',
        padding: '60px 0',
      }}>
        <div className="container">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center' }}
          >
            <h2 style={{
              fontFamily: 'Syne', fontWeight: 800,
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              marginBottom: '16px', letterSpacing: '-0.02em',
            }}>
              Let's work <span className="highlight">together</span>
            </h2>
            <p style={{ color: 'var(--gray)', marginBottom: '36px', fontSize: '0.95rem', maxWidth: '440px', margin: '0 auto 36px' }}>
              Open to freelance projects, full-time roles, or just a great conversation about tech.
            </p>
            
            {/* Contact and Social Links */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }} className="footer-contact">
              {/* Contact Info */}
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }} className="footer-contact-info">
                <a
                  href={`mailto:${personalInfo.email}`}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '12px 20px', borderRadius: '100px',
                    border: '1px solid var(--border)', color: 'var(--gray)',
                    fontSize: '0.9rem', fontFamily: 'Syne', fontWeight: 600,
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--yellow)'; e.currentTarget.style.color = 'var(--yellow)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--gray)'; }}
                >
                  <FiMail size={16} /> {personalInfo.email}
                </a>
                
                <a
                  href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '12px 20px', borderRadius: '100px',
                    border: '1px solid var(--border)', color: 'var(--gray)',
                    fontSize: '0.9rem', fontFamily: 'Syne', fontWeight: 600,
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--yellow)'; e.currentTarget.style.color = 'var(--yellow)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--gray)'; }}
                >
                  <FiPhone size={16} /> {personalInfo.phone}
                </a>
              </div>

              
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ padding: '28px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
            <span style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '1.0rem' }}>
              Pritam Lambade
            </span>

            {/* Social links */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noreferrer"
                  data-hover="true"
                  title={s.label}
                  style={{
                    width: '38px', height: '38px', borderRadius: '10px',
                    border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--gray)', transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-yellow)'; e.currentTarget.style.color = 'var(--yellow)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--gray)'; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            <p style={{ color: 'var(--gray)', fontSize: '0.8rem' }}>
              © 2023 All rights reserved
Designed with ♥️ by 2FT Wizards [Er. Lambade Pritam] v7.0
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-contact {
            flex-direction: column;
            gap: 16px !important;
          }
          .footer-contact-info {
            flex-direction: column;
            gap: 12px !important;
          }
          .footer-contact-info a {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
}
