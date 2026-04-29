import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experience } from '../data/data';

export default function Experience() {
  const [openId, setOpenId] = useState(experience[0]?.id ?? null);

  const toggle = (id) => setOpenId(prev => (prev === id ? null : id));

  return (
    <section id="experience" style={{ background: 'var(--dark2)', padding: '100px 0' }}>
      <div style={{ width: '100%', padding: '0 clamp(20px, 5vw, 80px)', boxSizing: 'border-box' }}>

        {/* Section header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          style={{ marginBottom: '56px' }}
        >
          <span className="section-label">My Journey</span>
          <h2 className="section-title">
            Work <span className="highlight">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: 'clamp(24px, 4vw, 44px)' }}>

          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: '12px',
            bottom: '12px',
            width: '2px',
            background: 'linear-gradient(to bottom, var(--yellow), rgba(255,214,0,0.08))',
            borderRadius: '2px',
          }} />

          {experience.map((exp, index) => {
            const isOpen = openId === exp.id;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{ marginBottom: '20px', position: 'relative' }}
              >
                {/* Timeline dot */}
                <div style={{
                  position: 'absolute',
                  left: 'calc(-1 * clamp(24px, 4vw, 44px))',
                  top: '24px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: isOpen ? exp.color : 'var(--dark3)',
                  border: `2px solid ${isOpen ? exp.color : 'var(--border)'}`,
                  transform: 'translateX(-5px)',
                  transition: 'all 0.25s ease',
                  zIndex: 1,
                }} />

                {/* Card */}
                <div
                  onClick={() => toggle(exp.id)}
                  style={{
                    borderRadius: '16px',
                    border: `1px solid ${isOpen ? exp.color + '35' : 'var(--border)'}`,
                    background: 'var(--dark3)',
                    padding: '24px 28px',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'border-color 0.25s ease',
                  }}
                >
                  {/* Top accent bar */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                    background: `linear-gradient(90deg, ${exp.color}, transparent)`,
                    opacity: isOpen ? 1 : 0,
                    transition: 'opacity 0.25s ease',
                  }} />

                  {/* Card header */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '12px',
                    flexWrap: 'wrap',
                  }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{
                        display: 'flex', alignItems: 'center',
                        gap: '10px', flexWrap: 'wrap', marginBottom: '6px',
                      }}>
                        <h3 style={{
                          fontFamily: 'Inter', fontWeight: 800,
                          fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                          margin: 0, color: 'var(--white)',
                        }}>
                          {exp.role}
                        </h3>
                        <span style={{
                          fontSize: '0.7rem', fontWeight: 700, fontFamily: 'Inter',
                          padding: '3px 12px', borderRadius: '100px',
                          background: exp.color + '18', color: exp.color,
                          whiteSpace: 'nowrap',
                        }}>
                          {exp.type}
                        </span>
                      </div>
                      <p style={{
                        color: exp.color, fontFamily: 'Inter',
                        fontWeight: 600, fontSize: '0.85rem', margin: '0 0 4px',
                      }}>
                        {exp.company}
                      </p>
                      <p style={{ color: 'var(--gray)', fontSize: '0.78rem', margin: 0 }}>
                        {exp.location} · {exp.duration}
                      </p>
                    </div>

                    {/* Chevron */}
                    <div style={{
                      width: '28px', height: '28px', borderRadius: '50%',
                      border: '1px solid var(--border)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, marginTop: '2px',
                      transition: 'all 0.25s ease',
                      background: isOpen ? exp.color + '18' : 'transparent',
                      borderColor: isOpen ? exp.color + '50' : 'var(--border)',
                    }}>
                      <svg
                        width="12" height="12" viewBox="0 0 12 12" fill="none"
                        style={{
                          transition: 'transform 0.25s ease',
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                      >
                        <path
                          d="M2 4L6 8L10 4"
                          stroke={isOpen ? exp.color : 'var(--gray)'}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Expandable points */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="points"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{
                          borderTop: `1px solid ${exp.color}20`,
                          marginTop: '20px',
                          paddingTop: '20px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '14px',
                        }}>
                          {exp.points.map((pt, j) => (
                            <motion.div
                              key={j}
                              initial={{ x: 10, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: j * 0.06 }}
                              style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}
                            >
                              <span style={{
                                width: '20px', height: '20px', borderRadius: '50%',
                                background: exp.color + '18',
                                border: `1px solid ${exp.color}45`,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                flexShrink: 0, marginTop: '2px',
                              }}>
                                <span style={{
                                  width: '6px', height: '6px',
                                  borderRadius: '50%', background: exp.color,
                                }} />
                              </span>
                              <p style={{
                                color: 'var(--white-soft)',
                                lineHeight: 1.75,
                                fontSize: '0.92rem',
                                margin: 0,
                              }}>
                                {pt}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}

          {/* Open to work */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ position: 'relative' }}
          >
            <div style={{
              position: 'absolute',
              left: 'calc(-1 * clamp(24px, 4vw, 44px))',
              top: '18px',
              width: '12px', height: '12px',
              borderRadius: '50%',
              background: 'var(--green)',
              transform: 'translateX(-5px)',
              animation: 'pulse-glow 1.8s infinite',
            }} />
            <div style={{
              borderRadius: '16px',
              border: '1.5px dashed rgba(0,255,135,0.25)',
              padding: '18px 24px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}>
              <span style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: 'var(--green)', flexShrink: 0,
              }} />
              <span style={{
                fontFamily: 'Inter', fontWeight: 700,
                fontSize: '0.82rem', color: 'var(--green)',
              }}>
                Open to new opportunities
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}