import { useState } from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/data';

export default function Experience() {
  const [activeId, setActiveId] = useState(1);
  const active = experience.find(e => e.id === activeId);

  return (
    <section id="experience" style={{ background: 'var(--dark2)' }}>
      <div className="container">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          style={{ marginBottom: '60px' }}
        >
          <span className="section-label">My Journey</span>
          <h2 className="section-title">
            Work <span className="highlight">Experience</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '28px' }}>

          {/* Sidebar */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
          >
            {experience.map(exp => (
              <button
                key={exp.id}
                onClick={() => setActiveId(exp.id)}
                data-hover="true"
                style={{
                  padding: '18px 20px',
                  borderRadius: '14px',
                  border: `1px solid ${activeId === exp.id ? exp.color + '40' : 'var(--border)'}`,
                  background: activeId === exp.id ? exp.color + '0E' : 'var(--dark3)',
                  textAlign: 'left', cursor: 'none',
                  transition: 'all 0.25s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {activeId === exp.id && (
                  <div style={{
                    position: 'absolute', left: 0, top: 0, bottom: 0,
                    width: '3px', background: exp.color,
                    borderRadius: '0 2px 2px 0',
                  }} />
                )}
                <p style={{
                  fontFamily: 'Syne', fontWeight: 700, fontSize: '0.88rem',
                  color: activeId === exp.id ? 'var(--white)' : 'var(--gray)',
                  marginBottom: '4px',
                }}>
                  {exp.role}
                </p>
                <p style={{ color: activeId === exp.id ? exp.color : 'var(--gray)', fontSize: '0.78rem', fontFamily: 'Syne' }}>
                  {exp.company}
                </p>
                <p style={{ color: 'var(--gray)', fontSize: '0.72rem', marginTop: '4px' }}>
                  {exp.duration}
                </p>
              </button>
            ))}

            {/* Open to work */}
            <div style={{
              marginTop: '16px',
              padding: '16px 20px', borderRadius: '14px',
              border: '1.5px dashed rgba(0,255,135,0.3)',
              display: 'flex', alignItems: 'center', gap: '10px',
              color: 'var(--green)',
            }}>
              <span style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: 'var(--green)', flexShrink: 0,
                animation: 'pulse-glow 1.8s infinite',
                color: 'var(--green)',
              }} />
              <span style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '0.78rem' }}>
                Open to work
              </span>
            </div>
          </motion.div>

          {/* Detail panel */}
          <motion.div
            key={activeId}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="card"
            style={{ padding: '40px', borderColor: active.color + '25' }}
          >
            {/* Top accent */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
              background: `linear-gradient(90deg, ${active.color}, transparent)`,
            }} />

            {/* Glow */}
            <div style={{
              position: 'absolute', top: 0, right: 0,
              width: '200px', height: '200px',
              background: `radial-gradient(circle, ${active.color}12 0%, transparent 70%)`,
              pointerEvents: 'none',
            }} />

            {/* Header */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '8px' }}>
                <h3 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '1.5rem' }}>
                  {active.role}
                </h3>
                <span style={{
                  padding: '6px 16px', borderRadius: '100px',
                  background: active.color + '20', color: active.color,
                  fontSize: '0.75rem', fontFamily: 'Syne', fontWeight: 700,
                }}>
                  {active.type}
                </span>
              </div>
              <p style={{ color: active.color, fontFamily: 'Syne', fontWeight: 600, fontSize: '0.95rem', marginBottom: '4px' }}>
                {active.company}
              </p>
              <p style={{ color: 'var(--gray)', fontSize: '0.85rem' }}>
                {active.location} · {active.duration}
              </p>
            </div>

            {/* Points */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {active.points.map((pt, j) => (
                <motion.div
                  key={j}
                  initial={{ x: 10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: j * 0.06 }}
                  style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}
                >
                  <span style={{
                    width: '20px', height: '20px', borderRadius: '50%',
                    background: active.color + '20', border: `1px solid ${active.color}50`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, marginTop: '2px',
                  }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: active.color }} />
                  </span>
                  <p style={{ color: 'var(--white-soft)', lineHeight: 1.7, fontSize: '0.95rem' }}>{pt}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 750px) {
          #experience .container > div > div:last-child + div,
          #experience .container > div > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
