import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../data/data';

const categories = ['Frontend', 'eCommerce', 'Backend', 'Tools'];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('Frontend');

  return (
    <section id="skills">
      <div className="container">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          style={{ marginBottom: '60px' }}
        >
          <span className="section-label">What I Know</span>
          <h2 className="section-title">
            Tech <span className="highlight">Stack</span>
          </h2>
          <p style={{ color: 'var(--gray)', maxWidth: '480px', lineHeight: 1.8, fontSize: '0.95rem' }}>
            Technologies I work with daily to build scalable web and mobile applications.
          </p>
        </motion.div>

        {/* Tab bar */}
        <div style={{
          display: 'flex', gap: '6px', marginBottom: '40px',
          padding: '6px', borderRadius: '14px',
          background: 'var(--dark3)',
          border: '1px solid var(--border)',
          width: 'fit-content',
          flexWrap: 'wrap',
        }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              data-hover="true"
              style={{
                padding: '9px 22px', borderRadius: '10px',
                border: 'none', cursor: 'none',
                fontFamily: 'Syne', fontWeight: 700, fontSize: '0.8rem',
                letterSpacing: '0.06em',
                background: activeTab === cat ? 'var(--yellow)' : 'transparent',
                color: activeTab === cat ? 'var(--dark)' : 'var(--gray)',
                transition: 'all 0.25s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}
          >
            {skills.filter(s => s.category === activeTab).map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ y: -5, scale: 1.04 }}
                data-hover="true"
                style={{
                  padding: '14px 24px',
                  borderRadius: '14px',
                  background: 'var(--dark3)',
                  border: `1px solid ${skill.color}30`,
                  fontFamily: 'Syne', fontWeight: 700,
                  fontSize: '0.9rem',
                  color: skill.color,
                  cursor: 'none',
                  display: 'flex', alignItems: 'center', gap: '10px',
                  transition: 'box-shadow 0.3s',
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = `0 8px 28px ${skill.color}22`}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
              >
                <span style={{
                  width: '8px', height: '8px', borderRadius: '50%',
                  background: skill.color, flexShrink: 0,
                  boxShadow: `0 0 8px ${skill.color}`,
                }} />
                {skill.name}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom marquee */}
        <div style={{ marginTop: '70px', overflow: 'hidden', position: 'relative' }}>
          <div style={{
            display: 'flex', gap: '40px',
            animation: 'marquee 20s linear infinite',
            width: 'max-content',
          }}>
            {[...skills, ...skills].map((s, i) => (
              <span key={i} style={{
                fontFamily: 'Syne', fontWeight: 700, fontSize: '0.78rem',
                letterSpacing: '0.15em', textTransform: 'uppercase',
                color: 'var(--dark4)',
                WebkitTextStroke: '1px var(--dark4)',
                whiteSpace: 'nowrap',
              }}>
                {s.name} ✦
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
