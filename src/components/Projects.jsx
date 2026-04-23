import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCalendar } from 'react-icons/fi';
import { projects } from '../data/data';

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          style={{ marginBottom: '60px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}
        >
          <div>
            <span className="section-label">What I've Built</span>
            <h2 className="section-title">
              Featured <span className="highlight">Projects</span>
            </h2>
          </div>
          <a
            href="https://github.com/Pritam-Akatsuki"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
            style={{ fontSize: '0.82rem', padding: '12px 24px' }}
          >
            <FiGithub size={16} /> All on GitHub
          </a>
        </motion.div>

        {/* Featured (big first) */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="card"
              data-hover="true"
              style={{
                padding: '36px',
                borderColor: p.color + '20',
                cursor: 'none',
                transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
                // First project spans full width
                gridColumn: i === 0 ? 'span 2' : undefined,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = p.color + '55';
                e.currentTarget.style.boxShadow = `0 20px 60px ${p.color}14`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = p.color + '20';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Top strip */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                background: `linear-gradient(90deg, ${p.color}, transparent)`,
              }} />

              {/* BG glow */}
              <div style={{
                position: 'absolute', top: '-40px', right: '-40px',
                width: '220px', height: '220px', borderRadius: '50%',
                background: `radial-gradient(circle, ${p.color}0E 0%, transparent 70%)`,
                pointerEvents: 'none',
              }} />

              <div style={{
                display: 'flex', justifyContent: 'space-between',
                alignItems: 'flex-start', marginBottom: '24px',
                flexWrap: 'wrap', gap: '12px',
              }}>
                {/* Emoji icon */}
                <div style={{
                  width: '52px', height: '52px', borderRadius: '14px',
                  background: p.color + '18',
                  border: `1px solid ${p.color}35`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.5rem',
                }}>
                  {p.emoji}
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    data-hover="true"
                    style={{
                      width: '38px', height: '38px', borderRadius: '10px',
                      border: '1px solid var(--border)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--gray)', transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = p.color + '60'; e.currentTarget.style.color = p.color; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--gray)'; }}
                  >
                    <FiGithub size={16} />
                  </a>
                  {p.link !== '#' && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      data-hover="true"
                      style={{
                        width: '38px', height: '38px', borderRadius: '10px',
                        border: '1px solid var(--border)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'var(--gray)', transition: 'all 0.2s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = p.color + '60'; e.currentTarget.style.color = p.color; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--gray)'; }}
                    >
                      <FiExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              <h3 style={{
                fontFamily: 'Syne', fontWeight: 800,
                fontSize: i === 0 ? '1.5rem' : '1.2rem',
                marginBottom: '10px', color: 'var(--white)',
              }}>
                {p.title}
              </h3>

              <p style={{
                color: 'var(--gray)', lineHeight: 1.75,
                marginBottom: '24px', fontSize: '0.93rem',
                maxWidth: i === 0 ? '600px' : undefined,
              }}>
                {p.description}
              </p>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {p.tags.map(tag => (
                    <span key={tag} style={{
                      padding: '5px 14px', borderRadius: '100px',
                      background: p.color + '12', color: p.color,
                      fontSize: '0.76rem', fontFamily: 'Syne', fontWeight: 700,
                      border: `1px solid ${p.color}28`,
                    }}>{tag}</span>
                  ))}
                </div>
                <span style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  color: 'var(--gray)', fontSize: '0.78rem',
                }}>
                  <FiCalendar size={12} /> {p.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          #projects .container > div:last-child { grid-template-columns: 1fr !important; }
          #projects .container > div:last-child > div { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
  );
}
