import { useState } from 'react'
import '../css/Hannah.css'
import centro2 from '../assets/centro2.jpg'
import sglily2 from '../assets/sglily2.png'

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
  { x: '5%',  y: '45%', size: 92,  tilt: '-10deg', dur: '4s',   delay: '1s'   },
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

/* ── RIGHT PAGE CONTENTS (6 pages) ── */
const PAGE_COUNT = 6

const RightPageContent = ({ pageNum }) => {
  if (pageNum === 1) return (
    <div className="nb-letter">
      <p className="nb-letter-greeting">Dear Hannah,</p>
      <p className="nb-letter-body">
        There are some people who make the world feel a little warmer
        just by being in it — and you are one of them.<br /><br />
        I put these flowers here because they reminded me of you:
        soft, beautiful, and quietly extraordinary.<br /><br />
        Thank you for being you. ♡
      </p>
    </div>
  )
  if (pageNum === 2) return (
    <div className="nb-letter">
      <p className="nb-letter-greeting">Every moment with you</p>
      <p className="nb-letter-body">
        I still remember the first time I saw you smile —
        it was like the whole room got a little brighter.<br /><br />
        I hope you know how much every little moment
        with you means to me. Each one is a page
        I never want to stop reading.
      </p>
    </div>
  )
  if (pageNum === 3) return (
    <div className="nb-letter">
      <p className="nb-letter-greeting">Things I love about you</p>
      <p className="nb-letter-body">
        The way you laugh when something catches you off guard.<br /><br />
        The way you care so deeply about the people around you.<br /><br />
        The way you make ordinary days feel like something special.<br /><br />
        I could fill a hundred pages and still not be done.
      </p>
    </div>
  )
  if (pageNum === 4) return (
    <div className="nb-letter">
      <p className="nb-letter-greeting">A promise</p>
      <p className="nb-letter-body">
        I promise to be here — on the good days
        and the hard ones, the loud ones and the quiet ones.<br /><br />
        I promise to choose you, every single day,
        without hesitation.<br /><br />
        You deserve all the love in the world, Hannah.
        And I want to be the one who gives it to you.
      </p>
    </div>
  )
  if (pageNum === 5) return (
    <div className="nb-letter">
      <p className="nb-letter-greeting">Just so you know</p>
      <p className="nb-letter-body">
        You are my favorite person.<br /><br />
        My favorite voice, my favorite laugh,
        my favorite everything.<br /><br />
        Wherever life takes us, I am just glad
        I get to walk through it with you beside me. ♡
      </p>
    </div>
  )
  if (pageNum === 6) return (
    <div className="nb-letter">
      <p className="nb-letter-greeting">Until the next page…</p>
      <p className="nb-letter-body">
        This notebook may end here, but our story
        is only just beginning.<br /><br />
        Thank you for opening this, for reading every word,
        and most of all — for being you.<br /><br />
        I love you, Hannah. ♡
      </p>
      <p className="nb-letter-close-hint">tap once more to close</p>
    </div>
  )
  return null
}

/* ── MAIN ── */
export default function Hannah() {
  const [pageNum, setPageNum]   = useState(1)
  const [fading, setFading]     = useState(false)
  const [bookOpen, setBookOpen] = useState(false)
  const [bookKey, setBookKey]   = useState(0)
  const [closing, setClosing]   = useState(false)

  const handleOpenBook = () => {
    setBookKey(k => k + 1)
    setBookOpen(true)
    setPageNum(1)
    setFading(false)
  }

  const handleCloseBook = () => {
    setClosing(true)
    setTimeout(() => {
      setBookOpen(false)
      setClosing(false)
      setPageNum(1)
    }, 400)
  }

  const handleNextPage = () => {
    if (fading) return
    if (pageNum === PAGE_COUNT) {
      handleCloseBook()
      return
    }
    setFading(true)
    setTimeout(() => {
      setPageNum(p => p + 1)
      setFading(false)
    }, 350)
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

            {/* corner flowers — inside nb-open so they're relative to the notebook */}
            <img src={sglily2} alt="" className="nb-corner-lily nb-corner-lily--br" />
            <button className="nb-close-btn" onClick={handleCloseBook} aria-label="Close">✕</button>
            
            <div
              className={`nb-book nb-book-enter ${closing ? 'nb-book-exit' : ''}`}
              key={bookKey}
            >

              {/* Spine */}
              <div className="nb-open-spine"><Spirals count={8} /></div>

              {/* ── LEFT PAGE: always centro2.jpg ── */}
              <div className="nb-page nb-page-left">
                <img src={centro2} alt="centro2" className="nb-photo" />
              </div>

              {/* ── RIGHT PAGE: fades between pages ── */}
              <div
                className="nb-page nb-page-right nb-page-clickable"
                onClick={handleNextPage}
              >
                <div className={`nb-fade-layer ${fading ? 'nb-fade-out' : 'nb-fade-in'}`}>
                  <RightPageContent pageNum={pageNum} />
                </div>
              </div>

            </div>

            {/* page indicator + hint */}
            <div className="nb-bottom-bar">
              <span className="nb-page-dots">
                {Array.from({ length: PAGE_COUNT }).map((_, i) => (
                  <span
                    key={i}
                    className={`nb-dot ${i + 1 === pageNum ? 'nb-dot--active' : ''}`}
                  />
                ))}
              </span>
              <p className="nb-flip-hint">
                {pageNum < PAGE_COUNT ? 'click the page to turn →' : 'click to close the notebook'}
              </p>
            </div>

          </div>
        )}

      </div>
    </div>
  )
}