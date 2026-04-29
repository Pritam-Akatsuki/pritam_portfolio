import { motion } from 'framer-motion';
import { personalInfo, certifications } from '../data/data';

const stats = [
  { num: '3+', label: 'Years Experience' },
  { num: '10+', label: 'Projects Built' },
  { num: '3', label: 'Internships' },
  { num: '∞', label: 'Lines of Code' },
];

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--dark2)' }}>
      <div className="container">

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>

          {/* LEFT */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">About Me</span>
            <h2 className="section-title">
              Building digital<br />
              <span className="highlight">experiences</span>
            </h2>
            <p style={{ color: 'var(--white-soft)', lineHeight: 1.9, fontSize: '1rem', marginBottom: '22px' }}>
              {personalInfo.about}
            </p>
            <p style={{ color: 'var(--gray)', lineHeight: 1.9, fontSize: '0.95rem', marginBottom: '36px' }}>
              Based in Maharashtra, India. Currently focused on SAP Commerce platforms and cross-platform mobile development with Flutter. Always learning, always building.
            </p>

            {/* Info rows */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '36px' }}>
              {[
                { label: 'Email', val: personalInfo.email },
                { label: 'Location', val: personalInfo.location },
                { label: 'Education', val: 'B.E. — University of Mumbai' },
              ].map(row => (
                <div key={row.label} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <span style={{
                    fontFamily: 'Inter', fontSize: '0.7rem', fontWeight: 700,
                    letterSpacing: '0.15em', textTransform: 'uppercase',
                    color: 'var(--yellow)', minWidth: '88px', paddingTop: '2px',
                  }}>{row.label}</span>
                  <span style={{ color: 'var(--white-soft)', fontSize: '0.95rem' }}>{row.val}</span>
                </div>
              ))}
            </div>

            <a
              href={personalInfo.resumeLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              style={{ fontSize: '0.85rem' }}
            >
              Download Resume ↗
            </a>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >

            {/* Stats grid */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px',
            }}>
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0.85, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="card"
                  style={{ padding: '28px 24px', textAlign: 'center' }}
                >
                  <div style={{
                    fontSize: '2.6rem', fontFamily: 'Inter', fontWeight: 800,
                    background: 'linear-gradient(135deg, var(--yellow), var(--orange))',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text', lineHeight: 1,
                  }}>{s.num}</div>
                  <div style={{ color: 'var(--gray)', fontSize: '0.82rem', marginTop: '6px', fontFamily: 'Inter' }}>{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="card"
              style={{ padding: '28px' }}
            >
              <p style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--yellow)', marginBottom: '18px' }}>
                Certifications
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {certifications.map((c, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                    <div>
                      <p style={{ color: 'var(--white)', fontSize: '0.9rem', fontWeight: 500, fontFamily: 'Inter' }}>{c.name}</p>
                      <p style={{ color: 'var(--gray)', fontSize: '0.78rem' }}>{c.issuer}</p>
                    </div>
                    <span style={{
                      padding: '3px 12px', borderRadius: '100px',
                      background: 'rgba(255,214,0,0.1)', color: 'var(--yellow)',
                      fontSize: '0.72rem', fontFamily: 'Inter', fontWeight: 700, flexShrink: 0,
                    }}>{c.year}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          #about .container > div { grid-template-columns: 1fr !important; gap: 50px !important; }
        }
      `}</style>
    </section>
  );
}
