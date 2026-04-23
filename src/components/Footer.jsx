import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';
import { personalInfo } from '../data/data';

const socials = [
  { icon: <FiGithub size={18} />, link: personalInfo.github, label: 'GitHub' },
  { icon: <FiLinkedin size={18} />, link: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: <FiInstagram size={18} />, link: personalInfo.instagram, label: 'Instagram' },
  { icon: <FiMail size={18} />, link: `mailto:${personalInfo.email}`, label: 'Email' },
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
            <p style={{ color: 'var(--gray)', marginBottom: '32px', fontSize: '0.95rem', maxWidth: '440px', margin: '0 auto 32px' }}>
              Open to freelance projects, full-time roles, or just a great conversation about tech.
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn btn-primary"
              style={{ fontSize: '0.9rem' }}
            >
              <FiMail size={16} /> {personalInfo.email}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ padding: '28px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
            <span style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '1.1rem' }}>
              PL<span style={{ color: 'var(--yellow)' }}>.</span>
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
              © 2025 Pritam Lambade · Built with React + Vite
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
