import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiPhone } from 'react-icons/fi';
import { personalInfo } from '../data/data';

const socials = [
  { icon: <FiGithub size={17} />, link: personalInfo.github, label: 'GitHub' },
  { icon: <FiLinkedin size={17} />, link: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: <FiInstagram size={17} />, link: personalInfo.instagram, label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--dark2)',
      borderTop: '1px solid var(--border)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        width: '100%',
        padding: '32px clamp(20px, 5vw, 80px)',
        boxSizing: 'border-box',
      }}>

        {/* Main row */}
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            paddingBottom: '24px',
            borderBottom: '1px solid var(--border)',
            marginBottom: '20px',
          }}
        >
          {/* Name */}
          <span style={{
            fontFamily: 'Syne', fontWeight: 800,
            fontSize: '1.05rem', color: 'var(--white)',
            whiteSpace: 'nowrap',
          }}>
            Pritam Lambade
          </span>

          {/* Email + Phone */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
            <a
              href={`mailto:${personalInfo.email}`}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '7px',
                padding: '8px 16px', borderRadius: '100px',
                border: '1px solid var(--border)',
                color: 'var(--gray)', fontSize: '0.82rem',
                fontFamily: 'Syne', fontWeight: 600,
                textDecoration: 'none', transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--border-yellow)';
                e.currentTarget.style.color = 'var(--yellow)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.color = 'var(--gray)';
              }}
            >
              <FiMail size={14} /> {personalInfo.email}
            </a>

            <a
              href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '7px',
                padding: '8px 16px', borderRadius: '100px',
                border: '1px solid var(--border)',
                color: 'var(--gray)', fontSize: '0.82rem',
                fontFamily: 'Syne', fontWeight: 600,
                textDecoration: 'none', transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--border-yellow)';
                e.currentTarget.style.color = 'var(--yellow)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.color = 'var(--gray)';
              }}
            >
              <FiPhone size={14} /> {personalInfo.phone}
            </a>
          </div>

          {/* Socials */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.link}
                target="_blank"
                rel="noreferrer"
                title={s.label}
                style={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--gray)', transition: 'all 0.2s',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--border-yellow)';
                  e.currentTarget.style.color = 'var(--yellow)';
                  e.currentTarget.style.background = 'rgba(255,214,0,0.05)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.color = 'var(--gray)';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Copyright */}
        <p style={{
          color: 'var(--gray)', fontSize: '0.78rem',
          textAlign: 'center', margin: 0, lineHeight: 1.6,
        }}>
          © 2023 All rights reserved · Designed with ♥️ by 2FT Wizards [Er. Lambade Pritam] v7.0
        </p>

      </div>
    </footer>
  );
}