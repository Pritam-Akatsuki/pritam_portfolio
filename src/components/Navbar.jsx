import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = ['About', 'Skills', 'Experience', 'Projects'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('about');
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 60);

        // Find the section whose top is closest to (but not past) 140px from top
        const sections = links
          .map(l => document.getElementById(l.toLowerCase()))
          .filter(Boolean);

        let current = null;
        for (let i = sections.length - 1; i >= 0; i--) {
          const rect = sections[i].getBoundingClientRect();
          if (rect.top <= 140) {
            current = sections[i];
            break;
          }
        }

        // If scrolled near top, fallback to first section
        if (!current && window.scrollY < 100) {
          current = document.getElementById('hero') || sections[0];
        }

        if (current) setActive(current.id);
        ticking.current = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // Run once on mount to set initial active
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (linkName) => {
    setActive(linkName.toLowerCase());
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: scrolled ? '14px clamp(20px, 4vw, 48px)' : '22px clamp(20px, 4vw, 48px)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'all 0.4s ease',
        background: scrolled ? 'rgba(8,8,16,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,214,0,0.08)' : 'none',
        boxSizing: 'border-box',
      }}
    >
      {/* Logo — uses favicon image, falls back to PL initials */}
      <a
        href="#hero"
        style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          fontFamily: 'Inter', fontWeight: 800,
          fontSize: 'clamp(0.95rem, 2vw, 1.2rem)',
          textDecoration: 'none', color: 'var(--white)',
        }}
      >
        <img
          src="public/favicon.png"
          alt="PL"
          width="35"
          height="35"
          onError={e => {
            // If favicon fails to load, show initials fallback
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextSibling.style.display = 'flex';
          }}
          style={{ borderRadius: '50%', objectFit: 'cover', flexShrink: 0 ,borderColor: 'var(--yellow)', border: '1.5px solid' }}
        />
        {/* Fallback initials — hidden by default */}
        <span style={{
          display: 'none',
          width: '35px', height: '35px', borderRadius: '10px',
          background: 'var(--yellow)', color: 'var(--dark)',
          alignItems: 'center', justifyContent: 'center',
          fontSize: '0.85rem', fontWeight: 900, flexShrink: 0,
        }}>
          PL
        </span>
        <span>Portfolio</span>
      </a>

      {/* Desktop nav */}
      <ul style={{
        display: 'flex', gap: '4px', listStyle: 'none',
        alignItems: 'center', margin: 0, padding: 0,
      }} className="nav-desktop">
        {links.map(link => {
          const isActive = active === link.toLowerCase();
          return (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => handleNavClick(link)}
                style={{
                  fontFamily: 'Inter', fontWeight: 600, fontSize: '0.82rem',
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  color: isActive ? 'var(--yellow)' : 'var(--gray)',
                  transition: 'color 0.2s, background 0.2s',
                  padding: '8px 16px', borderRadius: '8px',
                  background: isActive ? 'rgba(255,214,0,0.08)' : 'transparent',
                  display: 'block', textDecoration: 'none',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--white)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = isActive ? 'var(--yellow)' : 'var(--gray)'; }}
              >
                {link}
              </a>
            </li>
          );
        })}
      </ul>

      {/* Hamburger button */}
      <button
        onClick={() => setOpen(!open)}
        className="nav-hamburger"
        style={{
          display: 'none',
          background: 'none',
          border: '1.5px solid var(--border-yellow)',
          borderRadius: '8px',
          cursor: 'pointer',
          color: 'var(--white)',
          padding: '5px 10px',
          fontSize: '1rem',
          lineHeight: 1,
        }}
      >
        {open ? '✕' : '☰'}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: 'fixed', top: '62px', left: 0, right: 0,
              background: 'rgba(14,14,26,0.97)',
              backdropFilter: 'blur(20px)',
              padding: '20px 24px',
              borderBottom: '1px solid var(--border-yellow)',
              display: 'flex', flexDirection: 'column', gap: '4px',
            }}
          >
            {links.map(link => {
              const isActive = active === link.toLowerCase();
              return (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => handleNavClick(link)}
                  style={{
                    fontFamily: 'Syne', fontWeight: 700,
                    fontSize: '1rem',
                    color: isActive ? 'var(--yellow)' : 'var(--white)',
                    padding: '12px 4px',
                    borderBottom: '1px solid var(--border)',
                    textDecoration: 'none',
                    display: 'block',
                    transition: 'color 0.2s',
                  }}
                >
                  {link}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </motion.nav>
  );
}