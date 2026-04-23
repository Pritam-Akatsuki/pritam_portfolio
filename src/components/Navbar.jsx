import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = ['About', 'Skills', 'Experience', 'Projects'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = links.map(l => document.getElementById(l.toLowerCase()));
      const current = sections.find(s => s && s.getBoundingClientRect().top < 120);
      if (current) setActive(current.id);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: scrolled ? '14px 48px' : '22px 48px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'all 0.4s ease',
        background: scrolled ? 'rgba(8,8,16,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,214,0,0.08)' : 'none',
      }}
    >
      {/* Logo */}
      <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'Syne', fontWeight: 800, fontSize: '1.25rem' }}>
        <span style={{
          width: '32px', height: '32px', borderRadius: '8px',
          background: 'var(--yellow)', color: 'var(--dark)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '0.9rem', fontWeight: 900,
        }}>P</span>
        <span>Lambade<span style={{ color: 'var(--yellow)' }}>.</span></span>
      </a>

      {/* Desktop */}
      <ul style={{ display: 'flex', gap: '8px', listStyle: 'none', alignItems: 'center' }} className="nav-desktop">
        {links.map(link => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              style={{
                fontFamily: 'Syne', fontWeight: 600, fontSize: '0.82rem',
                letterSpacing: '0.08em', textTransform: 'uppercase',
                color: active === link.toLowerCase() ? 'var(--yellow)' : 'var(--gray)',
                transition: 'color 0.2s',
                padding: '8px 16px', borderRadius: '8px',
                background: active === link.toLowerCase() ? 'rgba(255,214,0,0.08)' : 'transparent',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--white)'}
              onMouseLeave={e => e.target.style.color = active === link.toLowerCase() ? 'var(--yellow)' : 'var(--gray)'}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="https://pritam-akatsuki.github.io/MyPortfolio.github.io/ImgCss/Resume1.pdf"
        target="_blank"
        rel="noreferrer"
        className="btn btn-primary"
        style={{ padding: '10px 22px', fontSize: '0.78rem' }}
      >
        Resume ↗
      </a>

      {/* Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        style={{ display: 'none', background: 'none', border: '1.5px solid var(--border-yellow)', borderRadius: '8px', cursor: 'none', color: 'var(--white)', padding: '6px 10px', fontSize: '1rem' }}
        className="nav-hamburger"
      >
        {open ? '✕' : '☰'}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: 'fixed', top: '68px', left: 0, right: 0,
              background: 'rgba(14,14,26,0.97)', backdropFilter: 'blur(20px)',
              padding: '30px 24px', borderBottom: '1px solid var(--border-yellow)',
              display: 'flex', flexDirection: 'column', gap: '6px',
            }}
          >
            {links.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1.4rem', color: 'var(--white)', padding: '10px 0', borderBottom: '1px solid var(--border)' }}
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
