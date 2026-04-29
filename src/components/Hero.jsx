import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { personalInfo } from '../data/data';

const socials = [
  { icon: <FiGithub size={18} />, link: personalInfo.github, label: 'GitHub' },
  { icon: <FiLinkedin size={18} />, link: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: <FiInstagram size={18} />, link: personalInfo.instagram, label: 'Instagram' },
];

const badges = ['Flutter', 'Angular', 'React', 'SAP Spartacus', '3+ Yrs Exp'];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '100px',
      }}
    >
      {/* Grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage:
          'linear-gradient(rgba(255,214,0,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,214,0,0.025) 1px, transparent 1px)',
        backgroundSize: '70px 70px',
        pointerEvents: 'none',
      }} />

      {/* Gradient blobs */}
      <div style={{
        position: 'absolute', width: '800px', height: '800px',
        borderRadius: '50%', top: '-200px', right: '-300px',
        background: 'radial-gradient(circle, rgba(255,214,0,0.07) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', width: '500px', height: '500px',
        borderRadius: '50%', bottom: '-100px', left: '-200px',
        background: 'radial-gradient(circle, rgba(0,229,255,0.05) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        <div style={{ maxWidth: '820px' }}>

          {/* Availability pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ marginBottom: '32px' }}
          >
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '8px 18px', borderRadius: '100px',
              border: '1px solid rgba(0,255,135,0.25)',
              background: 'rgba(0,255,135,0.04)',
              color: 'var(--green)', fontSize: '0.78rem', fontFamily: 'Syne', fontWeight: 700,
              letterSpacing: '0.06em',
            }}>
              <span style={{
                width: '7px', height: '7px', borderRadius: '50%',
                background: 'var(--green)',
                animation: 'pulse-glow 2s infinite',
                color: 'var(--green)',
              }} />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.p
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              fontFamily: 'Syne', color: 'var(--yellow)',
              letterSpacing: '0.3em', fontSize: '0.78rem',
              textTransform: 'uppercase', marginBottom: '16px',
              display: 'flex', alignItems: 'center', gap: '10px',
            }}
          >
            <span style={{ width: '28px', height: '1px', background: 'var(--yellow)', display: 'inline-block' }} />
            Hey, I'm
          </motion.p>

          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            style={{
              fontSize: 'clamp(3.0rem, 8vw, 6.5rem)',
              fontWeight: 800, lineHeight: 0.95,
              marginBottom: '20px', letterSpacing: '-0.03em',
            }}
          >
            Pritam
            <span className="highlight"> Lambade</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.45 }}
            style={{
              fontFamily: 'Syne', fontSize: 'clamp(1rem, 2.2vw, 1.35rem)',
              color: 'var(--gray)', marginBottom: '28px', letterSpacing: '0.02em',
            }}
          >
            {personalInfo.title} · {personalInfo.tagline}
          </motion.p>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.55 }}
            style={{
              maxWidth: '800px', color: 'var(--white-soft)',
              lineHeight: 1.85, fontSize: '1rem', marginBottom: '42px',
            }}
          >
            {personalInfo.about}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.65 }}
            style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '52px' }}
          >
            <a href="#projects" className="btn btn-primary">View My Work →</a>
            <a href="#experience" className="btn btn-outline">My Experience</a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}
          >
            {socials.map((s, i) => (
              <a key={i} href={s.link} target="_blank" rel="noreferrer"
                data-hover="true"
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  padding: '9px 18px', borderRadius: '100px',
                  border: '1px solid var(--border)',
                  color: 'var(--gray)', fontSize: '0.8rem', fontFamily: 'Syne', fontWeight: 600,
                  transition: 'all 0.25s ease',
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
                {s.icon} {s.label}
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Tech badges - floating right */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        style={{
          position: 'absolute', right: '80px', top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex', flexDirection: 'column', gap: '12px',
          pointerEvents: 'none',
        }}
        className="hero-badges"
      >
        {badges.map((b, i) => (
          <motion.div
            key={b}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
            style={{
              padding: '10px 20px', borderRadius: '100px',
              background: 'var(--dark3)',
              border: '1px solid var(--border)',
              fontFamily: 'Syne', fontWeight: 700, fontSize: '0.82rem',
              color: 'var(--white-soft)',
              backdropFilter: 'blur(10px)',
              whiteSpace: 'nowrap',
            }}
          >
            {b}
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      {/* <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        style={{
          position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
          color: 'var(--gray)', fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase',
        }}
      >
        <span>Scroll</span>
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--gray), transparent)' }} />
      </motion.div> */}

      <style>{`
        @media (max-width: 1100px) {
          .hero-badges { display: none !important; }
        }
      `}</style>
    </section>
  );
}
