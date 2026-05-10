import { useState } from 'react'
import '../css/Hannah.css'
import centro2 from '../assets/centro2.jpg'

/* ── BACKGROUND LILIES ── */
const BG_LILIES = [
  { x: '5%',  y: '8%',  size: 90,  tilt: '-15deg', dur: '3s',   delay: '0s'   },
  { x: '18%', y: '55%', size: 110, tilt: '10deg',  dur: '4s',   delay: '1.2s' },
  { x: '30%', y: '20%', size: 75,  tilt: '-25deg', dur: '5.5s', delay: '0.5s' },
  { x: '45%', y: '70%', size: 130, tilt: '5deg',   dur: '7s',   delay: '2s'   },
  { x: '60%', y: '10%', size: 85,  tilt: '20deg',  dur: '5.5s', delay: '0.8s' },
  { x: '72%', y: '45%', size: 100, tilt: '-10deg', dur: '3.5s', delay: '1.8s' },
  { x: '85%', y: '75%', size: 95,  tilt: '15deg',  dur: '2s',   delay: '0.3s' },
  { x: '92%', y: '25%', size: 120, tilt: '-20deg', dur: '3s',   delay: '2.5s' },
  { x: '10%', y: '85%', size: 80,  tilt: '8deg',   dur: '4s',   delay: '1s'   },
  { x: '55%', y: '40%', size: 70,  tilt: '-30deg', dur: '4s',   delay: '3s'   },
  { x: '38%', y: '88%', size: 105, tilt: '12deg',  dur: '5.5s', delay: '1.5s' },
  { x: '78%', y: '90%', size: 88,  tilt: '-18deg', dur: '4.8s', delay: '0.7s' },
  { x: '5%', y: '45%', size: 92,  tilt: '-10deg', dur: '4s',   delay: '1s'   },
  { x: '49%', y: '10%', size: 70,  tilt: '-20deg', dur: '2s',   delay: '3s'   },
  { x: '58%', y: '60%', size: 105, tilt: '18deg',  dur: '5.5s', delay: '1.5s' },
  { x: '98%', y: '40%', size: 88,  tilt: '-10deg', dur: '4.8s', delay: '0.7s' },
]

const LilySVG = ({ size }) => (
  <svg viewBox="0 0 120 160" width={size} height={size * 1.35}>
    <path d="M60 155 Q58 120 56 80" fill="none" stroke="#c8a0b8" strokeWidth="3" strokeLinecap="round" />
    <path d="M57 120 Q42 108 48 90 Q56 108 57 120Z" fill="#e8b4d0" />
    <path d="M58 105 Q72 93 68 75 Q60 93 58 105Z" fill="#e8b4d0" />
    {[0, 60, 120, 180, 240, 300].map((r, i) => (
      <ellipse key={i} cx="60" cy="55" rx="10" ry="28"
        fill="#f9c0d8" stroke="#f090b8" strokeWidth="0.8"
        transform={`rotate(${r} 60 55)`} />
    ))}
    <circle cx="60" cy="55" r="10" fill="#fce8a0" stroke="#e8c060" strokeWidth="1" />
    <circle cx="58" cy="52" r="2" fill="#e89030" />
    <circle cx="62" cy="52" r="2" fill="#e89030" />
    <circle cx="60" cy="58" r="2" fill="#e89030" />
  </svg>
)

const LilyBackground = () => (
  <div className="nb-bg">
    {BG_LILIES.map((l, i) => (
      <div key={i} className="nb-bg-lily" style={{
        left: l.x, top: l.y,
        '--tilt': l.tilt,
        '--dur': l.dur,
        '--delay': l.delay,
      }}>
        <LilySVG size={l.size} />
      </div>
    ))}
  </div>
)

/* ── SPIRALS ── */
const Spirals = ({ count = 6 }) => (
  <>
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="nb-spiral" />
    ))}
  </>
)

/* ── LETTER CONTENT ── */
const LetterContent = () => (
  <div className="nb-letter">
    <p className="nb-letter-greeting">Dear Hannah,</p>
    <p className="nb-letter-body">
      There are some people who make the world feel a little warmer
      just by being in it — and you are one of them.<br /><br />
      I put these flowers here because they reminded me of you:
      soft, beautiful, and quietly extraordinary.<br /><br />
      Thank you for being you. ♡
    </p>
    <p className="nb-letter-sign">— always yours</p>
  </div>
)

/* ── MAIN ── */
export default function Hannah() {
  const [page, setPage]         = useState('letter')
  const [phase, setPhase]       = useState('idle')
  const [bookOpen, setBookOpen] = useState(false)
  const [bookKey, setBookKey]   = useState(0)

  const handleOpenBook = () => {
    setBookKey(k => k + 1)
    setBookOpen(true)
    setPage('letter')
    setPhase('idle')
  }

  const handleFlip = () => {
    if (phase === 'flipping') return
    setPhase('flipping')
    setTimeout(() => {
      setPage('photo')
      setPhase('idle')
    }, 850)
  }

  const handleFlipBack = () => {
    if (phase === 'flipping') return
    setPhase('flipping')
    setTimeout(() => {
      setPage('letter')
      setPhase('idle')
    }, 850)
  }

  return (
    <div className="nb-wrapper">
      <LilyBackground />

      <div className="nb-content">

        {/* ── CLOSED ── */}
        {!bookOpen && (
          <div className="nb-closed" onClick={handleOpenBook} role="button" aria-label="Open notebook">
            <div className="nb-cover">
              <div className="nb-spine"><Spirals count={6} /></div>
              <p className="nb-closed-title">For<br />Hannah</p>
              <p className="nb-closed-sub">a little something ♡</p>
              <span className="nb-hint">click to open</span>
            </div>
          </div>
        )}

        {/* ── OPEN BOOK ── */}
        {bookOpen && (
          <div className="nb-open">
            <div className={`nb-book ${bookKey ? 'nb-book-enter' : ''}`} key={bookKey}>
              <button className="nb-close-btn" onClick={() => setBookOpen(false)} aria-label="Close">✕</button>

              {/* Spine */}
              <div className="nb-open-spine"><Spirals count={8} /></div>

              {/* ── LEFT PAGE: always centro2.jpg ── */}
              <div className="nb-page nb-page-left">
                <img src={centro2} alt="centro2" className="nb-photo" />
              </div>

              {/* ── RIGHT PAGE: letter (default) or photo ── */}
              <div className="nb-page nb-page-right">

                {/* static content underneath the flip layer */}
                {page === 'letter' && <LetterContent />}
                {page === 'photo'  && (
                  <img src={centro2} alt="centro2" className="nb-photo" />
                )}

                {/* ── PAGE FLIP LAYER ── */}
                {phase === 'flipping' && (
                  <div className="nb-flip-wrapper">
                    {/* front = what was showing BEFORE the flip */}
                    <div className="nb-flip-front">
                      {page === 'letter'
                        ? <LetterContent />
                        : <img src={centro2} alt="" className="nb-photo" />
                      }
                    </div>
                    {/* back = what shows AFTER the flip */}
                    <div className="nb-flip-back">
                      {page === 'letter'
                        ? <img src={centro2} alt="" className="nb-photo" />
                        : <LetterContent />
                      }
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* flip hint */}
            {phase === 'idle' && (
              <p
                style={{
                  textAlign: 'center',
                  marginTop: '14px',
                  fontFamily: 'Cormorant Garamond, serif',
                  fontStyle: 'italic',
                  fontSize: '13px',
                  color: '#a07850',
                  cursor: 'pointer',
                  userSelect: 'none',
                }}
                onClick={page === 'letter' ? handleFlip : handleFlipBack}
              >
                {page === 'letter' ? '↩ flip to see more' : '↪ flip back to letter'}
              </p>
            )}
          </div>
        )}

      </div>
    </div>
  )
}